════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-09-23 (23:52 CEST run)
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

⚠ PIPELINE HEALTH WARNING ⚠
check_pipeline_health.py reported all tasks healthy, but the row-level check_data_quality.py
found 1,373 non-'ok' data_quality rows. Running its full one-by-one retry loop (each retry
is a live API call) would have meant ~1,373 individual re-fetches, so it was aborted after
inspection rather than run to completion. 1,266 of those rows share one identical message —
"latest bar 2026-09-21 predates expected trading day 2026-09-22" — a systemic freshness flag,
not independent per-ticker failures. For UK/EU-listed holdings the underlying prices table is
confirmed fresh (2026-09-22) despite the flag. For every US-listed holding, however, the flag
is real: technicals are still on the 2026-09-21 close as of this 23:52 CEST run — one to two
trading days stale — even though refresh-technicals itself is reporting healthy runs. Separately,
102 EU-listed tickers (none are current holdings or today's candidates) show a persistent
"no bars from yfinance batch" failure at exactly 10/10 consecutive days — a likely fixable bug,
flagged below for manual review rather than retried again.
US-listed figures below (APH, IQV, ADBE, FLUT, LULU, SFM, META, ERO, ORCL, MO candidate) may be
based on a 2026-09-21 close, not today's — verify current prices independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        22 open (18 long equity, 1 short, 3 options)
  Total Value:      ~€18,520 (estimated; see options EUR-conversion note below)
  Available Cap:    €1,222.86 cash (unchanged since 2026-09-21 — no trades executed since)
  Best Performer:   IQV +64.57%
  Worst Performer:  SFM -14.35%
  Largest Position: META (~7.0% of portfolio)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ APH      │ +12.33%    │ 51.6    │ ↑     │ 👀 Watch │ —                 │ 444 │
  │ IQV      │ +64.57%    │ 64.3    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 626 │
  │ KLR      │ +34.24%    │ 69.1    │ ↑     │ Hold     │ ✅ free-ridden    │ 39  │
  │ SAP      │ +33.37%    │ 52.0    │ ↑     │ 👀 Watch │ —                 │ 308 │
  │ GSK      │ -1.40%     │ 57.3    │ ↑     │ Hold     │ Earnings 10-28    │ 31  │
  │ EDEN     │ +5.13%     │ 42.3    │ ↓     │ 👀 Watch │ —                 │ —   │
  │ ACN      │ +13.36%    │ 52.1    │ ↑     │ 👀 Watch │ price now fresh   │ —   │
  │ ADBE     │ -0.13%     │ 42.8    │ ↓     │ 👀 Watch │ —                 │ 26  │
  │ FLUT     │ -5.69%     │ 32.1    │ ↓     │ 🔴 Exit  │ Earnings 11-12    │ —   │
  │ PRX      │ -8.75%     │ 54.2    │ ↓     │ 👀 Watch │ —                 │ 579 │
  │ WKL      │ -5.99%     │ 46.0    │ ↓     │ 👀 Watch │ —                 │ 68  │
  │ LULU     │ -14.25%    │ 41.3    │ ↓     │ 👀 Watch │ —                 │ 18  │
  │ SFM      │ -14.35%    │ 33.5    │ ↓     │ 🔴 Exit  │ reassess ~10-05   │ 162 │
  │ ZOE      │ -0.25%     │ 45.8    │ ↓     │ 👀 Watch │ —                 │ —   │
  │ REL      │ -3.79%     │ 44.2    │ ↓     │ 👀 Watch │ —                 │ 181 │
  │ ORCL(sh) │ +0.89%     │ 50.5    │ ↑     │ 👀 Watch │ —                 │ 620 │
  │ META     │ -0.62%     │ 77.9 ⚠ │ ↑     │ Hold     │ RSI extended      │ 258 │
  │ ERO      │ -0.32%     │ 50.7    │ ↑     │ 👀 Watch │ —                 │ —   │
  │ QXO-PB   │ +6.53%     │ 53.3    │ ↓     │ 👀 Watch │ —                 │ —   │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  Freshness: KLR/SAP/GSK/EDEN/PRX/WKL/ZOE/REL/QXO-PB/ACN carry genuine same-day 2026-09-22
  closes (ACN's prior one-day-stale gap from 2026-09-22's review is now resolved). All other
  US-listed names (APH, IQV, ADBE, FLUT, LULU, SFM, ORCL, META, ERO) are still on 2026-09-21
  closes — see the pipeline health warning above.

PORTFOLIO SHAPE
  Concentration:   OK (largest is META at ~7.0%, well under the 25% warning threshold)
  Sector spread:   Tech/Enterprise (SAP+ACN+ADBE) ~18.0% | Other (WKL/LULU/SFM/ZOE/REL) ~20.6% |
                   New (META+ERO+QXO-PB) ~17.8% | Healthcare/CRO (IQV+GSK) ~10.1% |
                   European/Fintech (EDEN) ~6.8% | Intl/SOTP (PRX) ~6.1% | AI-infra indirect (APH) ~5.3% |
                   UK Industrials (KLR) ~2.0% | Sports Betting (FLUT) ~0.4%
  Currency split:  USD ~45.8% | EUR ~40.7% | GBp ~13.5% (of long equity value)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  FLUT: mechanical Exit persists (RSI 32.1, below SMA50, MACD bearish) — NOT executed, same
  reasoning as prior reviews: only 1 share ($86.86), $5 commission = 5.8% of trade value, far
  above the 1% minimum-viable-trade threshold. Free-to-ride designation stands.
  SFM: mechanical Exit persists (RSI 33.5, below SMA50, MACD bearish) — patience-override hold,
  reassess by ~2026-10-05 (day 2 of the window). No catalyst; next earnings 2026-10-28.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals triggered today (no position shows RSI 35–50 + above SMA50 + MACD bullish).

  ── NEW POSITIONS ──────────────────────────────────────
  No trades today / Capital held in reserve: available cash (€1,222.86) does not cover any of
  today's three 5/5-scored candidates at their €1,500 target size — see INVESTMENT OPPORTUNITIES
  below. A smaller entry (€750–€1,000) on one of them is a live option Mike may choose to size
  manually against current cash.

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350, Industrials) — MF#6 pass, P/E 7.43, EY 19.36%
  Entry: 430.30p | Stop: 415.58p | Size: €1,500 | RSI: 52.7 | MACD: Bullish
  Conviction: MF#6; Magic Formula pass; corroborated by llm-research, briefing-recommendation;
  bullish MACD; RSI healthy at 53.
  Portfolio fit: UK Industrials currently only KLR (~2.0%) — plenty of room; adds GBp exposure
  (currently ~13.5% of long equity); not already held. Repeat idea from 2026-09-22, still unexecuted.

  5/5 · MO (SP500, Consumer Staples) — MF#9 pass, P/E 14.3, EY 11.43%, div yield 6.54%
  Entry: $68.53 | Stop: $66.47 | Size: €1,500 | RSI: 52.1 | MACD: Bullish
  Conviction: MF#9; Magic Formula pass; corroborated by llm-research, briefing-recommendation;
  bullish MACD; RSI healthy at 52.
  Portfolio fit: no current Consumer Staples exposure since CPB closed 2026-09-08 — reintroduces
  a defensive/dividend sector; adds USD exposure (currently ~45.8%). Note: MO's own price is on
  the same stale 2026-09-21 close flagged above — recheck before entry. Repeat idea, third
  consecutive day carried forward (2026-09-21, -22, -23), still unexecuted for lack of capital.

  5/5 · MONY (FTSE350, Communication Services) — MF#12 pass, P/E 12.36, EY 11.49%
  Entry: 203.77p | Stop: 193.59p | Size: €1,500 | RSI: 58.2 | MACD: Bullish
  Conviction: MF#12; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD;
  RSI healthy at 58.
  Portfolio fit: no current Communication Services holding (REL sits in Info/analytics, a
  different sub-sector) — diversifies; adds further GBp exposure. Repeat idea from 2026-09-22,
  still unexecuted.

FREE RIDE OPPORTUNITIES
  IQV: ✅ Already free-ridden — cumulative trim proceeds ($2,117.62 across 4 trims) exceed the
  original $1,967.88 cost basis; all 3 remaining shares at zero effective cost. Current
  value: ~€711.
  KLR: ✅ Already free-ridden — gross trim proceeds (£1,326.40) exceed the original £1,209.00
  cost basis; all 10 remaining shares at zero effective cost. Current value: ~€378.
  SAP: P&L +33.4% clears the 25% threshold but free_shares = 1 (shares_to_sell = 6 of 7) —
  below the free_shares ≥ 2 flag criteria. Not a free ride opportunity yet.

PORTFOLIO RISKS TO WATCH
  - US-listed technicals have not advanced past the 2026-09-21 close for two consecutive
    reviews despite refresh-technicals reporting healthy runs — see the pipeline health
    warning above. Verify live prices independently before trading any US name today.
  - SFM: mechanical Exit persists; patience-override window running to ~2026-10-05 (day 2).
  - FLUT: mechanical Exit persists but the remaining 1-share position is too small to execute
    economically (commission would be 5.8% of trade value); free-to-ride designation stands.
  - META: RSI 77.9, extended/overbought; no mechanical Trim signal only because the position
    sits well under the 20% weight threshold — worth watching for a pullback. Also carries a
    compounding (not hedging) $885 Oct-09 call, short-dated and deep OTM (~-€172 unrealized,
    expires in <3 weeks).
  - 102 EU-listed tickers elsewhere in the tracked universe show a persistent "no bars from
    yfinance batch" data-quality failure at exactly 10/10 consecutive daily attempts — likely a
    fixable bug (ticker mapping or prefix issue), not transient bad luck. None are current
    holdings or today's candidates, but worth Mike's dedicated look outside this briefing.

NEXT ACTIONS
  1. Investigate why US-exchange technicals are stuck on the 2026-09-21 close for two
     consecutive daily reviews despite refresh-technicals reporting healthy — check the
     Polygon/yfinance/Alpha Vantage fallback chain directly for a US ticker (e.g. APH).
  2. Review the persistent 102-ticker "no bars from yfinance batch" EU fetch failure
     (10/10 consecutive days) — a dedicated look outside this briefing's own flow.
  3. SFM reassessment due ~2026-10-05 — revisit the patience-override decision then if RSI
     and trend haven't improved.
  4. Consider a smaller entry (€750–€1,000) on IAG, MO, or MONY given current cash
     (€1,222.86) doesn't cover the full €1,500 target size for any of the three 5/5 candidates.
════════════════════════════════════════════════════════
