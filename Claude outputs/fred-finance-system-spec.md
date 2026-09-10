# Fred Finance System — Functional & Technical Specification

Status: Draft v2 for review. Prepared for implementation by Claude Code.
Scope: the finance domain only (wiki-maintenance finance tasks, the market-watchlist-tracker pipeline, and fred-dashboard's finance-related surfaces). No other wiki domain (books, podcasts, lightfin, health, crypto, etc.) is touched by this spec.

Changelog: v2 adds strategy/instrument tracking (including shorts and manually-entered options), analyst/source attribution, generic shadow/tracking portfolios (e.g. mirroring Michael Burry's disclosed positions), a strategy-performance feedback loop, and a queryable screener layer — added per Mike's follow-up questions after v1.

---

## 1. Purpose

Rebuild the finance data/automation stack into one coherent system that:

- Reduces the tokens spent running it (move deterministic work out of LLM agent loops).
- Adds a regular feedback loop connecting new wiki research back into portfolio strategy rules, and a second feedback loop connecting **actual trade outcomes** back into which strategies keep running.
- Grows the watchlist universe from ~183 hardcoded tickers to full index coverage (S&P 500, FTSE 350, STOXX 600) plus the existing curated lists, without increasing recurring cost.
- Makes the Magic Formula screen run across that full universe, not a hand-picked handful.
- Tracks trading strategies generically — long equity, short equity, and manually-entered options positions — each attributed to the idea source that generated it (Magic Formula screen, a specific Morningstar article, a tracked investor's disclosed position, a dividend screen, manual).
- Supports **shadow/tracking portfolios** that mirror a real investor's disclosed positions (starting with Michael Burry, generalized so adding Buffett or anyone else later is a data entry, not new code) and measures their performance the same way as Mike's own portfolios.
- Makes the whole thing queryable — both through a dashboard screener view and directly as a real SQLite file — so "show me the best value stocks right now" is a query, not a research task.
- Fixes the concrete defects found in the current dashboard and sync process.

This spec assumes the findings and decisions recorded in `claude/system-review-findings.md` (same project). Read that first for the "why" behind each decision below.

## 2. Current State (condensed)

Four systems exist today and don't talk to each other: the Fred Obsidian wiki (11 domains, finance is one), 13+ Claude-Code-skill scheduled tasks maintaining wiki markdown via LLM+WebFetch/WebSearch, a separate pure-Python `market-watchlist-tracker` pipeline (well-engineered, writes to a Google Sheet, already implements a correct Magic Formula rank but over a hardcoded ~183-ticker universe, and already hand-tracks a `BURRY_POSITIONS` dict as a proto-shadow-portfolio idea), and the `fred-dashboard` Next.js app (reads flat files, several defects, unaware of two of the other three systems' full scope). Full detail in the findings doc.

## 3. Target Architecture

```
                         ┌─────────────────────────────┐
                         │   Universe Source (monthly)  │
                         │  S&P500 / FTSE350 / STOXX600 │
                         │  + curated + investor-flagged │
                         └──────────────┬───────────────┘
                                        │
                                        ▼
                         ┌───────────────────────────────────┐
                         │   finance.sqlite (local)             │
                         │  universe · prices · fundamentals    │
                         │  screen_results · signals ·           │
                         │  strategies · portfolios · trades ·   │
                         │  tracked_investors · investor_positions│
                         │  task_registry                        │
                         └──────┬──────────────┬─────────────────┘
             writes             │              │             reads
    ┌────────────────────────┐ │              │ ┌───────────────────────────┐
    │ Python data layer        │◄┘              └►│ JSON export step           │
    │ (fetchers/indicators/    │  daily technicals  │ (watchlist.json,           │
    │  fundamentals/screen)    │  monthly+weekly     │  magic-formula.json,       │
    │  — no LLM involved       │  fundamentals       │  portfolios.json,          │
    └────────────────────────┘                      │  strategy-performance.json)│
                                                     └──────────────┬─────────────┘
                                                                    │ committed to repo
                                                                    ▼
                                                     ┌───────────────────────────┐
                                                     │  fred-dashboard (Next.js)   │
                                                     │  reads JSON exports +       │
                                                     │  Screener view              │
                                                     └───────────────────────────┘

    ┌──────────────────────────────────────────────────────────────────────┐
    │  LLM judgment tasks (Claude Code scheduled skills)                     │
    │  daily-paper-trader · sector/style commentary · spinoff-monitor ·      │
    │  strategy-feedback-loop · investor-position-tracker · wiki-thinker     │
    │  → read small JSON slices from finance.sqlite exports                  │
    │  → write only narrative/judgment deltas into wiki finance markdown     │
    └──────────────────────────────────────────────────────────────────────┘
```

Two hard rules that make this scale without more spend:

1. **Anything that is pure arithmetic or a data fetch happens in Python, never inside an LLM tool-call loop.** The market-watchlist-tracker pipeline already proves this pattern works — this spec generalizes it to every finance task, including strategy-performance aggregation.
2. **Markdown is a generated view, never the source of truth for numbers**, for the finance domain only. Prices, fundamentals, screen ranks, signals, strategies, portfolios, and trade state (including shadow-portfolio positions) all live in `finance.sqlite`; wiki pages under `wiki/finance/` are regenerated from it plus an LLM-written narrative layer on top.

## 4. Data Model — `finance.sqlite`

One SQLite file, checked into a private location alongside the watchlist pipeline (not into the public dashboard repo — see §13 on the export boundary).

```sql
-- ── Universe & market data (unchanged from v1) ────────────────────────────────

CREATE TABLE universe (
    ticker TEXT NOT NULL, exchange TEXT NOT NULL,
    index_membership TEXT NOT NULL,   -- 'SP500' | 'FTSE350' | 'STOXX600' | 'MORNINGSTAR' | 'INVESTOR_FLAGGED' | comma-list
    yahoo_ticker TEXT, currency TEXT, sector TEXT,
    added_date TEXT, active INTEGER DEFAULT 1,
    PRIMARY KEY (ticker, exchange)
);

CREATE TABLE prices (
    ticker TEXT, exchange TEXT, date TEXT,
    open REAL, high REAL, low REAL, close REAL, volume REAL,
    currency TEXT, usd_rate REAL,
    ma20 REAL, ma50 REAL, ma200 REAL, rsi14 REAL, macd_signal TEXT,
    vol_ratio REAL, technical_rating TEXT, fetched_at TEXT,
    PRIMARY KEY (ticker, exchange, date)
);

CREATE TABLE fundamentals (
    ticker TEXT, exchange TEXT, as_of_date TEXT,
    pe REAL, fwd_pe REAL, eps_growth REAL, rev_growth REAL, div_yield REAL,
    mkt_cap REAL, sector TEXT, earnings_yield REAL, roic REAL, roe REAL, ev_ebit REAL,
    source TEXT, fetched_at TEXT,
    PRIMARY KEY (ticker, exchange, as_of_date)
);

CREATE TABLE screen_results (
    run_date TEXT, ticker TEXT, exchange TEXT,
    earnings_yield REAL, roic REAL, ey_rank INTEGER, roic_rank INTEGER,
    mf_rank INTEGER, passes_thresholds INTEGER,
    PRIMARY KEY (run_date, ticker, exchange)
);

-- ── NEW: Signals — generalizes today's per-group "Buy Opportunities" flagging ──
-- Any source that flags a ticker as interesting becomes one row here. This is
-- how "how do we link to Morningstar undervalued/dividend articles, or a
-- tracked investor's position" is answered: they're all signals with a source.

CREATE TABLE signals (
    signal_id TEXT PRIMARY KEY, ticker TEXT, exchange TEXT,
    source TEXT,          -- 'morningstar-undervalued' | 'morningstar-dividend' | 'magic-formula-pass'
                           -- | 'investor:<investor_id>' | 'manual'
    detail TEXT,           -- JSON: fair_value, discount_pct, stars, moat, direction, etc.
    flagged_date TEXT, source_ref TEXT   -- link to the wiki page this came from
);

-- ── NEW: Strategies, generalized across instrument types ──────────────────────

CREATE TABLE strategies (
    strategy_id TEXT PRIMARY KEY, name TEXT,
    instrument_type TEXT,   -- 'equity_long' | 'equity_short' | 'option'
    description TEXT, rules_ref TEXT,   -- section link into model-portfolio-management.md
    active INTEGER DEFAULT 1
);

-- ── NEW: Portfolios (real, paper, or shadow-tracking another investor) ────────

CREATE TABLE portfolios (
    portfolio_id TEXT PRIMARY KEY, name TEXT,
    kind TEXT,              -- 'real' | 'paper' | 'shadow'
    mirrors_investor_id TEXT,   -- NULL unless kind='shadow'
    base_currency TEXT, created_date TEXT, active INTEGER DEFAULT 1
);

-- ── Trades — extended for shorts, options, strategy/portfolio linkage, and
--    attribution back to the signal that generated the idea ────────────────────

CREATE TABLE trades (
    trade_id TEXT PRIMARY KEY,
    portfolio_id TEXT,       -- FK → portfolios
    strategy_id TEXT,        -- FK → strategies
    ticker TEXT, exchange TEXT,
    instrument_type TEXT,    -- 'equity' | 'option'
    direction TEXT,          -- 'long' | 'short'
    entry_date TEXT, entry_price REAL, shares REAL,
    -- Options-specific (NULL for equity trades). Manual entry only — no live
    -- options data feed (see §9); P&L uses the underlying's own tracked price.
    option_type TEXT,        -- 'call' | 'put' | NULL
    strike REAL, expiry_date TEXT, premium REAL, contracts INTEGER,
    stop_loss REAL, target1 REAL, target2 REAL,
    exit_date TEXT, exit_price REAL, status TEXT,   -- 'open' | 'closed'
    thesis TEXT,
    source_signal_id TEXT    -- FK → signals: why this trade was made
);

-- ── NEW: Tracked investors + their disclosed positions over time ──────────────
-- Generic by design — Burry today, anyone else later is just new rows here.

CREATE TABLE tracked_investors (
    investor_id TEXT PRIMARY KEY, name TEXT,
    source_type TEXT,        -- '13F' | 'substack' | 'letter' | 'manual'
    source_ref TEXT          -- wiki page(s) this is sourced from
);

CREATE TABLE investor_positions (
    investor_id TEXT, ticker TEXT, exchange TEXT,
    direction TEXT,           -- 'long' | 'short'
    disclosed_date TEXT, entry_price_hint REAL,
    status TEXT,              -- 'open' | 'trimmed' | 'closed'
    source_ref TEXT,          -- wiki page / trading-post citation
    PRIMARY KEY (investor_id, ticker, exchange, disclosed_date)
);

-- ── Task registry (unchanged from v1) ──────────────────────────────────────────

CREATE TABLE task_registry (
    task_id TEXT PRIMARY KEY, kind TEXT,
    schedule_cron TEXT, description TEXT, entry_point TEXT,
    last_run_at TEXT, last_run_status TEXT
);

-- ── Views for the queryable layer (§10, §13) ───────────────────────────────────

CREATE VIEW v_magic_formula_latest AS
SELECT sr.*, u.sector, u.index_membership, f.pe, f.div_yield
FROM screen_results sr
JOIN universe u ON u.ticker = sr.ticker AND u.exchange = sr.exchange
JOIN fundamentals f ON f.ticker = sr.ticker AND f.exchange = sr.exchange
WHERE sr.run_date = (SELECT MAX(run_date) FROM screen_results)
  AND f.as_of_date = (SELECT MAX(as_of_date) FROM fundamentals f2
                      WHERE f2.ticker = sr.ticker AND f2.exchange = sr.exchange);

CREATE VIEW v_strategy_performance AS
SELECT strategy_id, portfolio_id,
       COUNT(*) AS trades_total,
       SUM(CASE WHEN status = 'closed' THEN 1 ELSE 0 END) AS trades_closed,
       SUM(CASE WHEN status = 'closed' AND
                ((direction = 'long' AND exit_price > entry_price) OR
                 (direction = 'short' AND exit_price < entry_price))
           THEN 1 ELSE 0 END) AS wins,
       AVG(CASE WHEN status = 'closed' THEN
                (CASE WHEN direction = 'short' THEN -1 ELSE 1 END)
                * (exit_price - entry_price) / entry_price
           END) AS avg_return_pct,
       AVG(CASE WHEN status = 'closed' THEN julianday(exit_date) - julianday(entry_date) END) AS avg_holding_days
FROM trades
GROUP BY strategy_id, portfolio_id;

CREATE VIEW v_portfolio_performance AS
SELECT portfolio_id,
       SUM(CASE WHEN status='open' THEN
             (CASE WHEN direction='short' THEN -1 ELSE 1 END) * shares * entry_price
           ELSE 0 END) AS open_cost_basis,
       COUNT(CASE WHEN status='open' THEN 1 END) AS open_positions,
       COUNT(CASE WHEN status='closed' THEN 1 END) AS closed_positions
FROM trades GROUP BY portfolio_id;
```

Fundamentals, screen_results, and signals are append-only (history preserved) so the feedback-loop tasks (§11) can diff "what changed since last run" instead of only ever seeing the latest snapshot.

## 5. Universe Sourcing

Unchanged from v1's `refresh_universe.py` (S&P 500, FTSE 350, STOXX 600 from public constituent lists; Morningstar-flagged carried forward from wiki ingest), **plus**: any ticker that appears in `investor_positions` (§8) is automatically added to `universe` with `index_membership` including `INVESTOR_FLAGGED`, even if it's outside the main indices — this is exactly how today's hardcoded `Burry` group in `config.py` already works, just data-driven instead of a Python dict tied to spreadsheet rows.

## 6. Data Pipeline — Technicals (daily)

Unchanged from v1: batched `yfinance.download()` primary path (100–200 tickers/call), Alpha Vantage as a sparing fallback, Polygon retained only for FX and as a tertiary fallback — no data-tier upgrade, per Mike's decision. `indicators.py` reused unchanged.

## 7. Data Pipeline — Fundamentals (monthly + weekly delta)

Unchanged from v1: yfinance financial statements primary, stockanalysis.com scraping fallback, Shibui MCP last resort. Monthly full sweep + weekly delta for near-threshold/recently-reported names.

## 8. Magic Formula / Screening Engine

Unchanged from v1's generalized `compute_and_write_mf_ranks` logic, now also **writing a `signals` row** (`source='magic-formula-pass'`) for every ticker that newly passes the thresholds on a given run — this is what feeds both the Screener view (§10) and the strategy-feedback-loop (§11).

## 9. Strategies, Instrument Types & Analyst Attribution

Every trade — in any portfolio, real or shadow — belongs to exactly one `strategy_id` and (optionally) cites the `signal_id` that generated the idea. This answers "how do we link to analysts like Burry, Buffett, or Morningstar articles":

- A Morningstar article flagging a stock as undervalued or a dividend-raise candidate → a `signals` row (`source='morningstar-undervalued'` or `'morningstar-dividend'`), written when that article is ingested into the wiki (a small addition to the existing `clippings-sorter`/ingest process, not a new pipeline).
- A Magic Formula pass → a `signals` row (§8), written automatically by the screen.
- A tracked investor's disclosed position (Burry today, anyone else later) → a `signals` row with `source='investor:<investor_id>'`, written when a new `investor_positions` row is added (§8).
- A trade Mike places off the back of any of these cites that `signal_id` in its `trades.source_signal_id` — so "why did I buy this" is always answerable, and so performance can later be grouped by idea source, not just by strategy.

**Shorting and options** are both first-class `instrument_type`/`direction` values on `trades`, not bolted on:

- **Short equity**: `direction='short'`; P&L and the strategy-performance views (§4) already account for the sign flip.
- **Options**: manually entered (per Mike's decision — no live options data feed). Recording a trade means filling in `option_type`, `strike`, `expiry_date`, `premium`, `contracts`; P&L tracking uses the underlying stock's own tracked price (already fetched daily) compared to `strike`, computing **intrinsic value only** — no time value or greeks. This is a stated simplification: a mid-life mark-to-market on an option position will be directionally right but not precisely priced. Good enough for tracking the trades Mike already writes up in `finance/options-suggestions.md`; revisit if options trading becomes large enough to justify a real options data source.

## 10. Shadow / Tracking Portfolios

Generic by design (per Mike's decision), starting with Michael Burry:

1. `tracked_investors` gets one row per investor Mike wants to mirror (`burry`, source_type=`substack`, pointing at `finance/michael-burry/`).
2. **One-time backfill**: since Burry's disclosed positions already exist in the wiki (`finance/michael-burry/trading-posts.md`, the `source-burry-trading-post-*.md` files, and today's hardcoded `BURRY_POSITIONS` dict in `config.py`), a one-time backfill task extracts each disclosed long/short, its disclosure date, and any entry-price hint mentioned in the source text, writing `investor_positions` rows. This extraction is prose-driven (dates and prices are mentioned in running text, not a table) so it's run as a **one-off LLM-assisted pass**, not a deterministic script — Claude Code reads the existing trading-post pages once and emits the structured rows, which are then reviewed before being committed to the DB.
3. **Going forward**: whenever a new Burry trading-post is ingested (already a recurring event — new `source-burry-trading-post-*.md` pages appear regularly), a small step (extending the existing ingest task, not a new scheduled task) checks for newly-disclosed positions and appends `investor_positions` rows + a `signals` row.
4. A `portfolios` row (`kind='shadow'`, `mirrors_investor_id='burry'`) gets synthetic `trades` rows generated from `investor_positions`: entry price = `entry_price_hint` (or the closing price on `disclosed_date` if no hint was given, pulled from `prices`), sized by a defined convention (e.g. equal-weight, matching the $1,000-per-position convention the real paper-trading portfolios already use — confirm sizing convention with Mike during implementation).
5. From there, the shadow portfolio is a portfolio like any other — same `v_portfolio_performance` and `v_strategy_performance` views, same dashboard treatment — so "how is the Burry-mirror portfolio doing vs. my own paper portfolios" is just a query, and adding a second tracked investor later means adding rows to `tracked_investors` + running the same backfill pattern, not writing new code.

## 11. Strategy & Portfolio Performance Feedback Loop

This expands v1's single `strategy-feedback-loop` task into two related jobs, both weekly:

**11a. Strategy performance review** (new) — reads `v_strategy_performance` and `v_portfolio_performance` (§4) across all portfolios (real, paper, and shadow) and produces a short report: which strategies are winning/losing, by how much, over what sample size, compared to each other and to the shadow portfolios as a benchmark. Because this is pure SQL aggregation, it costs nothing to run regardless of how many trades exist. The LLM's job on top of this report is judgment only: is a losing strategy losing because of bad luck (small sample) or a real edge problem worth revisiting the rules for? That judgment gets written to a "Strategy Performance Notes" section, separate from the rule-change proposals below so the two kinds of feedback don't get conflated.

**11b. Wiki-research → strategy-rules feedback** (as in v1) — Magic Formula screen deltas + new wiki-thinker findings + current `model-portfolio-management.md` rules → a **proposed changes** section (not auto-applied) appended to a "Pending Strategy Reviews" section for Mike to accept, edit, or dismiss.

Both are advisory-only: capital-affecting rule changes stay a human decision; the noticing and aggregation work is automated.

## 12. LLM Judgment Tasks (redesigned)

Unchanged from v1 — see table below, now including the new backfill/tracking task.

| Task | Today | Redesigned |
|---|---|---|
| `daily-paper-trader` | LLM loop does WebFetch/WebSearch per ticker for both portfolios, writes full trade markdown files | Python computes candidate list + signals from `prices`/`screen_results`/`signals`; LLM only picks the trade (rotation logic + judgment) and writes the thesis into a `trades` DB row + a short markdown delta, citing `source_signal_id` where relevant |
| `portfolio-refresh` | LLM WebFetch/MCP loop per holding | Fully replaced by the technicals pipeline (§6) |
| `growth-value-tracker` | LLM WebFetch scrapes ETFreplay weekly | Python computes quarterly returns from tracked price history; LLM writes narrative only |
| `sector-performance-tracker` | LLM WebFetch scrapes ETFreplay + stockanalysis.com weekly | Same fix; LLM writes narrative only |
| `spinoff-monitor` | Judgment work — unchanged | Unchanged |
| `wiki-thinker` (finance slice) | Judgment work — unchanged | Unchanged |
| `investor-position-tracker` (new) | — | Checks newly-ingested tracked-investor source pages for new disclosed positions; appends `investor_positions` + `signals` rows (§10 step 3) |
| `strategy-feedback-loop` (new) | — | §11a + §11b |

## 13. Dashboard Integration, Screener & the Queryable Layer

**This extends the existing `fred-dashboard`, not a new app.** Same repo, same Next.js/Vercel deployment, same sidebar navigation shell (`components/Sidebar.tsx`) and the same visual components already built for it (`SignalBadge`, `TradeCard`, `FreeRideCard`, `EquityCurveChart`, etc. in `app/portfolios/page.tsx` are kept and reused). What changes is what each page reads from (JSON exports instead of hand-parsed markdown) and that a few pages are new because the data they'd show doesn't exist in the dashboard at all today (the full watchlist and screener currently only live in the Google Sheet).

**Export boundary** (unchanged from v1): the Python pipeline writes small JSON snapshots into `fred-dashboard/data/finance/` — now including `strategy-performance.json`, `signals.json`, and `shadow-portfolios.json` alongside the v1 exports — and commits/pushes them. `finance.sqlite` stays the real source of truth on Mike's machine; the dashboard never needs a DB driver.

### 13a. Page-by-page: what changes and what's new

| Page / Tab | Today | After this spec |
|---|---|---|
| Portfolios → Equity/Pension | Regex-parses `equity.md` | Reads `portfolios.json` (generated from `trades` + `prices`) |
| Portfolios → Trading | Regex-parses `trading.md` | Reads `portfolios.json` |
| Portfolios → Paper Trading (P1) | Regex-parses `p1.md` | Reads `portfolios.json`; strategy-rotation breakdown now pulls live win-rate/avg-return per strategy from `strategy-performance.json` instead of being static text |
| Portfolios → Vol Spike (P2) | Broken — `p2.md` doesn't exist, tab errors | Fixed — reads `portfolios.json` |
| Portfolios → **Shadow Portfolios** *(new tab)* | Doesn't exist | Reads `shadow-portfolios.json` — the Burry-mirror portfolio shown with the same layout/metrics as your own portfolios, side by side for comparison |
| Portfolios → Morning Briefing | Regex-parses `morning-briefing.md` | Reads the briefing slice of `portfolios.json` — same visual cards (Free Ride Opportunities, sell/add/new-trade cards, signal badges), just sourced from structured data instead of parsed markdown |
| Portfolios → **Strategy Performance** *(new tab)* | Doesn't exist | Reads `strategy-performance.json` — win rate, average return, holding period per strategy, across real/paper/shadow portfolios |
| **Watchlist & Screener** *(new top-level page)* | Doesn't exist in the dashboard at all — this data currently only lives in the Google Sheet | New page: sortable/filterable table of the full universe (index, sector, price, %change, RSI/MACD, Technical Rating) from `watchlist.json`; a Screener sub-view filtered to Magic-Formula-pass / signal-flagged names from `magic-formula.json` + `signals.json` — this is the point-and-click answer to "show me the best value stocks right now" |
| Analyst | Fires the broken raw-API "run" button (§ findings doc, defect 1) | Fixed per the earlier recommendation: either a real Claude-Code-triggered run, or converted to a read-only view of past multi-agent analysis outputs |
| Routines / Task Log / Outputs *(3 separate, partly-broken pages today)* | Fragmented across `routines`, `logger`, `outputs` | Consolidated into one **Task Registry** page reading the `task_registry` export — every scheduled task (LLM and Python, including the two market-watchlist-tracker tasks currently invisible to the dashboard), one status view |

### 13b. Screener tab detail

The Screener sub-view referenced in the table above is a filterable table over `v_magic_formula_latest` + `universe` + `signals` (sector, index membership, EY/ROIC/EV-EBIT/P-E ranges, signal source, moat where known) — the UI equivalent of the direct SQL query below.

**Direct query access** — because `finance.sqlite` is a real, ordinary SQLite file, "show me the best value stocks right now" is also always answerable without touching the dashboard at all: open a local Claude Code session against `finance.sqlite` and run (or ask Claude Code to run) something like:

```sql
SELECT ticker, exchange, sector, mf_rank, earnings_yield, roic
FROM v_magic_formula_latest
ORDER BY mf_rank ASC
LIMIT 20;
```

No natural-language-to-SQL layer is being built — the views in §4 are designed so the common questions (best value stocks, which strategies are performing, how the Burry shadow portfolio compares to my paper portfolios) are a single `SELECT` against a named view, and Claude Code can already read/write SQLite directly.

**Fixes carried over from v1** (unchanged): retire the broken "Run task" button in favor of a read-only last-run indicator sourced from `task_registry`; fix the `p2.md` reference; single task registry; retire the redundant output-storage mechanisms; replace the regex markdown-parsing in `app/portfolios/page.tsx` with JSON rendering.

## 14. Wiki Integration (finance domain only)

Unchanged from v1: finance wiki pages become generated views over `finance.sqlite`, with an LLM narrative layer on top; per-trade markdown files retired in favor of `trades` rows. All other wiki domains untouched.

## 15. Migration Plan

| Phase | Work | Depends on |
|---|---|---|
| 0 | Fix the concrete dashboard defects | Nothing |
| 1 | Build `finance.sqlite` schema (full v2 schema, including strategies/portfolios/signals/tracked_investors tables even though they're populated later) + `refresh_universe.py` | Nothing |
| 2 | Migrate technicals fetch to batched-yfinance-first | Phase 1 |
| 3 | Migrate fundamentals to yfinance-first + monthly/weekly-delta cadence | Phase 1 |
| 4 | Generalize Magic Formula ranking over full universe + write `signals` | Phases 2–3 |
| 5 | JSON export step + dashboard reads from `data/finance/*.json` | Phase 4 |
| 6 | Redesign `daily-paper-trader`, `growth-value-tracker`, `sector-performance-tracker`; retire `portfolio-refresh` | Phases 2–5 |
| 7 | Define `strategies` for existing rotation strategies A–G + vol-spike + Magic Formula value + any options strategy already in use; backfill existing open/closed trades into `trades` with strategy attribution | Phase 1 |
| 8 | One-time Burry backfill (`investor_positions` from wiki trading-posts) + `burry-shadow` portfolio + `investor-position-tracker` recurring task | Phase 1 |
| 9 | Ship `strategy-feedback-loop` (both 11a and 11b) | Phases 4, 7, 8 |
| 10 | Dashboard Screener tab | Phase 5 |
| 11 | Wiki finance pages become generated views; retire per-trade markdown files | Phases 4–7 |
| 12 | Decide whether to keep the Google Sheet at all | Phase 5 |

## 16. Open Risks & Assumptions

- **yfinance-only technicals at ~1,500-ticker scale carries real reliability risk** — chunked batches + backoff + tolerance for partial coverage, as an explicit tradeoff for zero incremental data spend.
- **yfinance's fundamentals coverage for non-US/small-cap EU names is inconsistent** — the scraping/MCP fallback chain remains necessary.
- **Universe source freshness** — public constituent lists can lag official index changes by days; acceptable given the monthly refresh cadence.
- **Options P&L is intrinsic-value-only** (no greeks/time value) per the manual-entry decision — stated limitation, not a bug, unless options trading grows enough to justify a real data source later.
- **Burry backfill accuracy** — extracting historical disclosed positions from prose (trading-post write-ups) via a one-off LLM pass will have some noise (approximate entry prices/dates where the source text itself was approximate); the backfill output should be reviewed once before being treated as ground truth, and `source_ref` on every row keeps it traceable back to the original wiki page for spot-checking.
- **Strategy definitions for existing trades** — Phase 7's backfill of existing open/closed paper-trading positions into the new `strategies`/`trades` model needs a one-time mapping exercise (today's rotation strategies A–G aren't currently stored as a clean enum anywhere Claude Code can just read) — flagging this as real, if bounded, migration work.
- **Google Sheets vs. dashboard** — assumes the Sheet is eventually retired once the dashboard (now with a Screener) covers the same ground; confirm with Mike before removing it.
- **Windows Task Scheduler entries** for new/changed cadences need to be created/updated — not automated by this spec unless Mike wants a `register_tasks.ps1` helper included.

## 17. Appendix — Proposed Repo Layout

```
market-watchlist-tracker/           (existing repo, extended)
├── pipeline/
│   ├── fetchers.py                 (extended: batched yfinance path)
│   ├── indicators.py               (unchanged)
│   ├── fundamentals.py             (extended: yfinance-first)
│   ├── universe.py                 (new — refresh_universe.py logic)
│   ├── screen.py                   (new — generalized Magic Formula engine + signals)
│   ├── strategies.py               (new — strategy performance aggregation)
│   ├── investors.py                (new — tracked-investor backfill + shadow portfolio generation)
│   ├── db.py                       (new — finance.sqlite access layer + views)
│   ├── export_json.py              (extended — writes data/finance/*.json incl. strategy/signals/shadow exports)
│   ├── sheets.py                   (kept if Sheet is retained; slated for retirement per Phase 12)
│   └── main.py                     (extended: new subcommands)
└── finance.sqlite                  (new, local — not committed to fred-dashboard)

fred-dashboard/                     (existing repo)
└── data/
    └── finance/
        ├── watchlist.json
        ├── magic-formula.json
        ├── portfolios.json
        ├── sector-performance.json
        ├── strategy-performance.json   (new)
        ├── signals.json                 (new)
        └── shadow-portfolios.json       (new)
```
