---
title: Trading Portfolio
domain: finance
type: live
tags: [portfolio, trading, positions]
updated: 2026-10-07
---

# Trading Portfolio

> Live page — update whenever positions change. **2026-10-02: synced a follow-up statement covering 09-18 to 10-01** — four of the five shorts added in the 10-01 reconciliation (MU, NBIS #3, PLTR, AMAT) closed out within days of opening, plus META's stock and its $885 call both closed, and a new NBIS $90 Jun-2027 put was opened. See the reconciliation note below for the full detail. Cash is now **€1,895.31** (up from €896.10). Total net value ≈**€19,964**. 21 open positions (17 long equity, 1 short, 3 options).
>
> **2026-10-01: full reconciliation against the real IBKR account statement** (`U***62330.TRANSACTIONS.1Y.csv`, Sept 2025–Sept 2026). This page (and Turso) had drifted significantly from the real account — see the reconciliation note below for what was found and fixed then.

## ⚠️ Reconciliation note (2026-10-01)

This page and Turso's `trading-portfolio` data had accumulated real errors, found by diffing every transaction against the actual IBKR account statement:

**Wrong share counts (now corrected):**
- **REL**: recorded as 22 shares (20 + "2 @ 25.76p" on 09-08). The real fill was **20 shares**, not 2 — now 40 shares total.
- **LULU**: recorded as 7 shares (after a 6-share "trim @ $98.06 on 09-21"). **That trim never happened** — see below. The real account also shows a second buy (5 sh @ $98.97, 09-04) that was never logged at all. Real position: **18 shares**, no trim.
- **GSK**: recorded as 52 shares. A second buy (20 sh @ 19.415 GBP, 07-31) was executed and partially acknowledged in the old cash log (a token −€50 "GSK add") but the share count was never updated. Real position: **70 shares**.

**Fabricated trade removed:** a "LULU trim: 6 sh @ $98.06, 2026-09-21" was written directly into Turso on 09-21 (with a plausible-sounding rationale) and later backfilled into this page as if it were real. **It does not appear anywhere in the real account statement** — the account shows zero LULU sells, ever. This looks like an automated task recorded a simulated/hypothetical decision as an executed trade. Removed from both Turso and this page. **Flagged for Mike to check which scheduled task produced it.**

**Missing entirely (now added):**
- **APH: full exit** — all 14 shares sold @ $82.225 on 2026-09-22. Was still showing as an open position.
- **ORCL short add**: 2 more shares @ $161.545 on 2026-09-09 (between sessions) — short was 3, is now 5.
- **New shorts opened 2026-09-22**: NBIS (5 sh @ $234.455, a 3rd NBIS short), PLTR (5 sh @ $184.14, equity short separate from the long put), AMAT (4 sh @ $468.68), MU (2 sh @ $1,084.34).
- **BIRK (Birkenstock)**: 25 shares @ $32.07, bought 2026-09-22.
- **Two historical round-trips that predate this page's tracking**: **MRVL** (bought 5 @ $309.95 on 06-04, sold @ $267.17 on 06-09, a loss) and **NOW** (bought 13 @ $122.94 on 05-29, sold @ $108.32 on 06-09, a loss). Confirmed in scope as part of Trading Portfolio.
- **VSURE**: a full round-trip (200 sh, two buy lots 04-16/04-20 @ ~€9.91/€11.06, sold 05-04 @ €10.63) that happened *before* the €3,000 deposit this page previously treated as "start" — funded by an earlier $4,000 deposit on 2026-04-15. Confirmed in scope; the real start date is now 2026-04-15.

**Cash methodology confirmed (re-derived from real data, same rule as 2026-09-04/09-08):** short-sale proceeds at open are **excluded** from Cash Position — they're margin-backed collateral, not spendable cash. Only a short's **realized P&L at close** is a real cash entry, same as any trim/exit. The real account statement's own literal cash balance (€6,930.74) is **not** what belongs here, since IBKR's own figure counts every short-sale's gross proceeds as cash the moment it opens — useful for margin/buying-power purposes, but overstates what this page means by "Cash." Working from the real statement with that adjustment applied gives **€896.10**.

**Real commissions used throughout** (replacing the earlier flat $5/€4.37 estimate): ~€0.85–0.90 per US-dollar trade, ~€3.00–3.50 per GBP/EUR trade, per the actual statement.

**Entry dates added** to every position per Mike's request — previously untracked.

## 🔄 Follow-up sync (2026-10-02)

A second statement (covering 2026-09-18 to 2026-10-01) showed the new short positions discovered in the reconciliation above were short-lived:

- **MU short closed** 2026-09-28 — bought back 2sh @ avg $1,055.54 (opened $1,084.34, 09-22). Realized **+€29.06**.
- **NBIS short #3 closed** 2026-09-28 — bought back 5sh @ $234.3595 (opened $234.455, 09-22). Realized **−€7.35** (tiny EUR loss despite a near-flat native price move — FX drifted ~0.7% USD/EUR between the 09-22 open and 09-28 close).
- **PLTR short closed** 2026-09-28 — bought back 5sh @ $188.64 (opened $184.14, 09-22). Realized **−€26.08**.
- **AMAT short closed** 2026-09-29 — bought back 4sh @ avg $505.07 (opened $468.68, 09-22). Realized **−€144.68** — the worst of the four.
- **META stock closed** 2026-09-28 — sold 2sh @ $721.20 (bought $745.84, 09-21). Realized **−€33.62**.
- **META $885 Oct call closed** 2026-09-24 — sold @ $3.09 (bought $3.08, 09-21). Realized **+€0.20** (held 3 days, essentially break-even).
- **New position: NBIS $90 put**, expiry 2027-06-17, bought 2026-10-01 @ $5.38/sh (€479.27 total cost).
- **WKL.RTS dividend**: +€12.88 (09-24, a rights-expiry dividend, not a trade).
- **FX translation adjustment**: +€76.34 (10-01).

Net effect of this batch: **+6 closed trades, net €−176.47** realized. Cash rose from €896.10 to **€1,895.31** net of the new NBIS put purchase — the four short closes' combined proceeds/losses plus META's two closes plus the dividend/FX items, less the new put premium.

Only the **ORCL short (5sh) remains open** from the five shorts opened 2026-09-22/09-14; none of the four newly-discovered shorts survived more than a week.

---

## Portfolio Net Value

**Total Net Value: ≈ €19,446** (2026-10-07 23:40 CEST run; US on Tue 10-06 closes, EU on Wed 10-07 closes, KLR/REL 10-05, GSK 10-06; EUR/USD 1.1201, GBP/EUR 1.1796)

| Component | Value (€) | Basis |
| --- | --- | --- |
| Long equity (market price) | €16,446 | Sum of Mkt Value across all 17 open long positions (Turso `prices` after the data-quality retry recovered UK/EU bars; QXO-PB at Tue's verified $38.575, not Turso's unverified 10-07 $35.30), EUR/USD 1.1198, GBP/EUR 1.1800 |
| Options (market price) | ≈€1,061 | ORCL put ≈€395 + PLTR put ≈€438 (options_pricing.py Black-Scholes, 10-07 mark) + NBIS put ≈€228 (hand Black-Scholes at 80% vol, ~$2.55/sh) |
| Shorts (market − entry, unrealized P&L) | ≈+€44 | ORCL only (5 sh, $154.552 → $144.77) |
| Cash | €1,895 | Unchanged since 10-02 sync — no new trades/cash entries in Turso (checked 10-06/10-07). **Short-sale proceeds at open still excluded** — see [[#Cash Position\|Cash Position]] |
| **Total Net Value** | **€19,446** | |

> **2026-10-07 23:40 run (−€3 vs the 18:30 revision):** FX only (EUR/USD 1.1198 → 1.1201). Turso prices are unchanged since the revision, and there are no new trades or cash entries.

> **2026-10-07 revision (−€12 vs 10-05's €19,461):** the 10-06 23:39 run first showed €19,406 on Friday UK/EU prices; refreshed data lifted the European book (SAP, WKL, EDEN, ZOE, PRX up) while options lost ~€117 more and the ORCL short gave back ~€10. No trades.

> **2026-10-05 change (+€25 vs 10-04):** FX only (EUR/USD 1.1264 → 1.1223 lifts USD holdings in EUR terms). Prices are still Friday closes because refresh-technicals runs at 07:17 CEST, so Monday's session isn't reflected yet. No trades.

> **2026-10-04 change (−€528 vs 10-02's €19,964):** about −€406 is the first proper options re-mark (the NBIS put was carried at cost, and ORCL/PLTR are now model-marked on Friday closes). Long equity fell −€103, mostly GSK, LULU and ACN, partly offset by ERO. The ORCL short gave back ~€19. No trades.

> **Methodology note:** moved from €19,524 (10-01) to €19,964 (10-02) mostly because cash rose €999 net (four short closes + META's two closes, partly offset by the new NBIS put premium) while long equity/shorts dropped correspondingly (META and the four closed shorts no longer contribute unrealized value/P&L, now realized into cash instead) — a reclassification, not a swing in value. FX used: EUR/USD 1.1247, GBP→EUR 1.1736 (carried from 2026-10-01, not refreshed today). Recompute this section whenever prices are refreshed — it is not automatically kept in sync.

---

## Open Positions

| Company | Ticker | Exchange | Currency | Shares | Entry | Entry Date | Cost Basis | Last Price | Mkt Value | P&L% | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Keller Group | KLR | LSE | GBp | 10 | 2,400p | 2026-05-26 | £240.00 | 3,280.00p | £328.00 | +36.67% | ✅ Hold | Trimmed 8 sh @ 3,098p on 2026-08-07. Entry corrected to the real fill (2,400p, was shown as 2,418p). RSI 64.3 (10-02), above SMA50 (3,092p), MACD bullish; **✅ already free-ridden** — cumulative trim proceeds exceed original cost basis, all 10 shares at zero effective cost |
| IQVIA Holdings | IQV | NYSE | USD | 3 | $163.91 | 2026-05-26 | $491.73 | $259.98 | $779.94 | +58.61% | 👀 Watch | Trimmed progressively (3+2+2+2 sh across 4 trims); entry corrected to real fill $163.91 (was $163.99). **✅ already free-ridden** — cumulative trim proceeds exceed the original 12-share cost basis, all 3 remaining shares at zero effective cost. RSI 53.9 (10-05), above SMA50 ($254.96), MACD bearish |
| SAP SE | SAP | XETRA | EUR | 7 | €136.70 | 2026-07-14 | €956.90 | €187.88 | €1,315.16 | +37.44% | 👀 Watch | RSI 51.7 (10-02), above SMA50 (€178.97), MACD bearish |
| GSK | GSK | LSE | GBp | 70 | 1,940.07p | 2026-07-16 | £1,358.05 | 1,765.50p | £1,235.85 | -9.00% | 🔴 Exit | **Corrected 2026-10-01: real position is 70 shares, not 52** — a second buy (20 sh @ 1,941.5p) on 2026-07-31 was never applied to the share count, only a token −€50 cash entry existed against a real −€459.86 cost. RSI 35.6 (10-02), below SMA50 (1,883p), MACD crossed bearish — **new mechanical Exit 10-01**; patience override (MF#33, thesis intact), reassess by ~10-15, max trim 50%; earnings 10-28 |
| Edenred SA | EDEN | Euronext | EUR | 45 | €26.53 | 2026-07-27 | €1,193.85 | €27.75 | €1,248.75 | +4.60% | 👀 Watch | RSI 39.6 (10-02), below SMA50 (€28.66), MACD bearish — **new mechanical Exit 10-01**; only +1.2%, exiting nets ≈€7.50 after CGT+commission — patience window to ~10-15, floor €25.77 |
| Accenture | ACN | Xetra | EUR | 6 | €141.10 | 2026-07-31 | €846.60 | €173.30 | €1,039.80 | +22.82% | ✅ Hold | Global IT services & consulting. Correct listing is Xetra/Frankfurt ticker **CSA** (ISIN IE00B4BNMY34, WKN A0YAQA). **Price from direct Xetra quote** (€175.35 on 10-05, −3.7% from €182.05 on 10-02). RSI 58.3 (10-05), above SMA50 (€157.76), MACD bullish; 6.5% weight so no Trim rule; free ride leaves only 1 share |
| Adobe | ADBE | NASDAQ | USD | 5 | $249.85 | 2026-07-31 | $1,249.25 | $238.12 | $1,190.60 | -4.69% | 👀 Watch | Creative & document software; AI integration (Firefly). RSI 42.0 (10-05), below SMA50 ($258.76), MACD bearish; sitting on its 1.5×ATR stop ref ($237.98); reassess ~10-08 |
| Flutter Entertainment | FLUT | NASDAQ | USD | 1 | $92.02 | 2026-08-06 | $92.02 | $76.25 | $76.25 | -17.13% | 🔴 Exit | Burry long at $100.72 (Jul 24 2026); anti-prediction-markets thesis. Trimmed 11 sh @ $99.17 on 2026-09-14, remaining 1 share designated free-to-ride. Mechanical Exit persists (RSI 29.8 on 10-05, below SMA50 $95.24, MACD bearish) — not executed; real ~€0.89 commission is still ~1.3% of a 1-share sale. Next earnings 2026-11-12 |
| Prosus | PRX | Euronext AMS | EUR | 30 | €41.065 | 2026-08-03 | €1,231.95 | €35.165 | €1,054.95 | -14.37% | 👀 Watch | Dutch internet holding; Tencent stake + growth portfolio at persistent NAV discount; SOTP thesis. Entry corrected to real fill €41.065 (was €41.165). RSI 36.7 (10-02), below SMA50 (€37.66), MACD crossed bearish — **new mechanical Exit 10-02**; patience override (SOTP thesis intact), reassess by ~10-16, trim 50% on a close below €33.03 |
| Wolters Kluwer | WKL | Euronext AMS | EUR | 15 | €70.88 | 2026-08-05 | €1,063.20 | €71.22 | €1,068.30 | +0.48% | ✅ Hold | Entry corrected to real fill €70.88 (was €71.08). RSI 49.1 (10-02), below SMA50 (€69.08), MACD bearish |
| Lululemon Athletica | LULU | NASDAQ | USD | 18 | $112.84 | 2026-08-10 | $2,031.17 | $93.61 | $1,684.98 | -17.04% | 🔴 Exit | Athletic apparel. **Corrected 2026-10-01: real position is 18 shares at blended entry $112.84** — three real buys (8 sh @ $127.59 on 08-10, 5 sh @ $98.97 on 09-04 [previously unlogged], 5 sh @ $103.13 on 09-08), no trim ever executed (the "6 sh @ $98.06 trim" on 09-21 was fabricated, see reconciliation note above — removed). RSI 32.5 (10-05), below SMA50 ($111.51), MACD crossed bearish — **new mechanical Exit 10-05**; patience override (MF#24, thesis intact), reassess by ~10-20, trim 50% (9 sh) on a close below $87.97 |
| Sprouts Farmers Market | SFM | NASDAQ | USD | 10 | $80.16 | 2026-08-21 | $801.60 | $65.17 | $651.70 | -18.70% | 👀 Watch | Specialty grocery. RSI 35.7 (10-05), below SMA50 ($77.15), MACD bearish — 10-05 deadline passed without reclaiming RSI 40; **full exit recommended, not yet executed** (no sale in Turso as of 10-06) |
| Zoetis Inc | ZOE | Xetra | EUR | 15 | €63.22 | 2026-08-10 | €948.30 | €63.74 | €956.10 | +0.82% | 👀 Watch | Animal health pharma; EUR listing. **Direct EUR quote now in Turso** (€61.82, 10-02) — ZTS proxy retired. RSI 43.4 (10-02), below SMA50 (€64.44), MACD bearish — the 10-01 proxy Exit has cleared to Watch |
| RELX plc | REL | LSE | GBp | 40 | 2,585.50p | 2026-08-14 | £1,034.20 | 2,536.00p | £1,014.40 | -1.91% | 👀 Watch | **Corrected 2026-10-01: real position is 40 shares, not 22** — the 09-08 add was 20 shares, not the "2 shares" previously recorded (a real fill-vs-report mismatch). RSI 49.5 (10-02), below SMA50 (2,581p), MACD bearish |
| Ero Copper Corp | ERO | NYSE | USD | 30 | $34.805 | 2026-09-21 | $1,044.15 | $37.93 | $1,137.90 | +8.96% | ✅ Hold | Brazil-focused copper miner; commodity/materials, non-US exposure. RSI 59.3 (10-05), above SMA50 ($34.62), MACD bullish |
| QXO Inc, Series B Preferred | QXO-PB | NYSE | USD | 30 | $38.30 | 2026-09-21 | $1,149.00 | $38.575 | $1,157.25 | +0.72% | ⚠ Exit? | Preferred shares of QXO Inc (Brad Jacobs); depositary share "1/20th interest" structure — Close $39.02 (10-02, Turso). RSI 44.7 (10-02), below SMA50 ($41.25), MACD bullish |
| Birkenstock Holding | BIRK | NYSE | USD | 25 | $32.07 | 2026-09-22 | $801.75 | $34.00 | $850.00 | +6.02% | 👀 Watch | **New position, discovered during this reconciliation** — bought 2026-09-22, never previously recorded. RSI 53.0 (10-05), below SMA50 ($35.11), MACD bullish |

> Prices in native currency. LSE positions in pence (GBp); cost basis and Mkt Value in GBP. EUR positions (SAP, EDEN, ACN, PRX, WKL, ZOE) in EUR. APH closed out entirely 2026-09-22, META closed out entirely 2026-09-28 — see [[#Closed Positions|Closed Positions]].
> Prices last fetched: **2026-10-07** (revised 18:30 CEST after check_data_quality.py auto-recovered the missing UK/EU bars: US on Tue 10-06 closes, EU on Wed 10-07 closes, KLR/REL 10-05, GSK 10-06; QXO-PB at Tue's verified $38.575 close — Turso's 10-07 $35.30 is an unverified mid-session print. Notes-column RSI text below may still cite 10-05; the Signal column is current; `trading_portfolio_wiki_sync.py` still doesn't match this table's header since the Entry Date column was added — updated by hand. Some SMA50 figures in Notes are carried from 10-01).
> **23:40 CEST run (2026-10-07):** prices unchanged from the 18:30 revision. Wednesday's US closes aren't in Turso until the 07:17 refresh, and massive still serves Tuesday. QXO-PB's $35.30 10-07 row is still unverified (Turso has no 10-06 row for it). KLR/REL still on 10-05.
> **Active alerts (2026-10-07, revised):** LULU — Exit (since 10-05), patience override, trim 9 sh on close < $88.54, reassess ~10-20. **EDEN and PRX Exits cleared** on refreshed data (now Watch). **SFM** — mechanical signal eased to Watch (MACD turned bullish) but RSI 36.5 still < 40, so the 10-01 exit rule still says sell (alt: hard stop $61.55). **QXO-PB** — provisional Exit on an unverified −8.5% 10-07 intraday print; check news. ORCL short — price reclaimed SMA50 (trend flipping against the short). ADBE — reassess 10-08. PRX — new Exit 10-02, patience to ~10-16. GSK/EDEN — Exit since 10-01, patience window to ~10-15. ZOE — proxy Exit cleared (direct quote, Watch). NBIS put — Turso row missing option_type/strike/expiry, cannot be auto-marked. FLUT — Exit, 1 share uneconomic to sell, free-to-ride stands. ADBE — Watch, reassess ~10-08. **AMAT short — closed 09-29, the "through its stop reference" alert from 10-01 is now moot.** REL, GSK, LULU share counts corrected 10-01 — re-check any standing orders/alerts sized against the old (wrong) counts.

---

## Short Positions

Active short equity positions (profit if price falls below entry; loss if price rises above entry).

| Company | Ticker | Exchange | Currency | Shares Short | Entry | Entry Date | Short Value | Current Price | Unrealized P&L | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | NYSE | USD | 5 | $154.552 | 2026-08-14 (+2 sh 2026-09-09) | $772.76 | $144.77 (10-06) | +$48.91 (+6.33%) | 👀 Watch | Opened 3 sh @ $149.89 (08-14); +2 more sh @ $161.545 on 2026-09-09 — real short is 5 shares. Bearish on Oracle AI/OCI narrative; complements the long put below. RSI 51.1 (10-06), now just above SMA50 ($144.64) — trend flipping against the short; MACD bearish. ATR stop ref ~$163.9 |

> **NBIS #3, PLTR, AMAT, and MU shorts all closed within days of opening — see [[#Closed Positions|Closed Positions]]** (NBIS/PLTR/MU closed 09-28, AMAT closed 09-29). Only ORCL remains open from this batch.
>
> Margin requirement (broker collateral, not a cash movement on this page — see [[#Cash Position|Cash Position]] note): ORCL ~€680 (5sh × $154.552 notional, converted at ≈0.882 USD/EUR). Profit if price falls below entry; loss if it rises. Each position closes with a buyback, at which point its **realized** P&L (not the sale proceeds or margin) becomes a real Cash Position entry.

---

## Options Positions

| Underlying | Ticker | Type | Strike | Expiry | Contracts | Shares | Premium Paid | Entry Date | Total Cost (€) | Current Price | Mkt Value (€) | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | Long Put | $120 | 2026-12-18 | 1 | 100 | $11.31/sh | 2026-08-06 | €982 | ~$4.42/sh (est.) | ~€395 (est.) | ✅ Hold | Right to sell ORCL at $120 by Dec 2026; break-even $108.62. ORCL $144.77 (10-06), ~33% above breakeven, still OTM. Black-Scholes re-mark from options_pricing.py (10-07). Total Cost corrected to the real €982 (was shown as €992/€993) |
| Palantir | PLTR | Long Put | $125 | 2027-03-19 | 1 | 100 | $8.24/sh | 2026-08-11 | €715 | ~$4.91/sh (est.) | ~€438 (est.) | ✅ Hold | Right to sell PLTR at $125 by Mar 2027; break-even $116.76. PLTR $192.07 (10-06), 62% above breakeven, deep OTM, long-dated. Total Cost corrected to the real €715 (was €719/€727) |
| Nebius Group | NBIS | Long Put | $90 | 2027-06-17 | 1 | 100 | $5.38/sh | 2026-10-01 | €479 | ~$2.55/sh (est.) | ~€228 (est.) | ✅ Hold | **New position, 2026-10-01.** Right to sell NBIS at $90 by Jun 2027; break-even $84.62. NBIS $249.87 (10-06), ~195% above breakeven, deep OTM. Hand Black-Scholes mark at 80% vol (range ~€120–380 for 70–90% vol). **Turso row is missing option_type/strike/expiry/premium/contracts**, so options_pricing.py can't mark it (data_quality: 10 consecutive failures as of 10-06; row also has direction='short' though it's a long put) |

> Long puts profitable if the underlying closes below break-even at expiry. Maximum loss = premium paid (ORCL €982, PLTR €715, NBIS €479). META's $885 Oct call closed 2026-09-24 (sold @ $3.09, bought @ $3.08 — realized +€0.20) — see [[#Closed Positions|Closed Positions]]. Combined mark-to-market of open options ≈€1,061 (Black-Scholes estimates on 2026-10-06 closes, re-marked 10-07; ORCL/PLTR from options_pricing.py, NBIS hand-marked) vs €2,176 total cost.

---

## Closed Positions

Fully exited positions. Partial trims of open positions are in the [[#Performance|Transaction Log]] below.

| Company | Ticker | Exchange | Shares | Entry | Entry Date | Exit Price | Exit Date | Gross P&L (€) | Net P&L (€) | Exit Reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Verisure | VSURE | Euronext | 100 | €9.91 | 2026-04-16 | €10.63 | 2026-05-04 | +€72.00 | **+€54.88** | Full exit — first lot of a two-lot position, closed profitably |
| Verisure | VSURE | Euronext | 100 | €11.06 | 2026-04-20 | €10.63 | 2026-05-04 | −€43.00 | **−€45.00** | Full exit — second lot (bought higher), closed at a loss; combined with the lot above, net VSURE round-trip ≈+€9.88 |
| ServiceNow | NOW | NYSE | 13 | $122.94 | 2026-05-29 | $108.32 | 2026-06-09 | −€150.72 | **−€151.62** | Full exit — loss; **previously unrecorded, found during 2026-10-01 reconciliation** |
| Marvell Technology | MRVL | NASDAQ | 5 | $309.95 | 2026-06-04 | $267.17 | 2026-06-09 | −€177.58 | **−€178.47** | Full exit — loss; **previously unrecorded, found during 2026-10-01 reconciliation** |
| Morgan Sindall Group | MGNS | LSE | 18 | 4,584p | 2026-05-26 | 4,456p | 2026-07-27 | −€16.29 | **−€19.80** | Full exit — earnings miss; technical breakdown. Entry corrected to real fill 4,584p (was 4,624p) |
| Broadcom | AVGO | NASDAQ | 4 | $387.00 | 2026-06-25 | $371.415 | 2026-07-29 | −€66.00 | **−€66.90** | Full exit — Burry SOXX-short thesis; below SMA50 |
| DraftKings | DKNG | NASDAQ | 45 | $23.4595 | 2026-07-31 | $21.4305 | 2026-08-06 | −€78.77 | **−€79.66** | Full exit — mechanical Exit signal; technical breakdown |
| Nebius Group (short #1) | NBIS | NASDAQ | 5 | $194.78 | 2026-08-06 | $234.00 | 2026-08-12 | −€170.05 | **−€170.92** | Short closed at a loss — price rose against the short |
| Watches of Switzerland | WOSG | LSE | 65 | 683.5p | 2026-05-26 | 733.5p | 2026-08-14 | +€44.06 | **+€31.30** | Partial trim, profit-take. Entry corrected to real fill 683.5p (was 688p) |
| Amphenol Corp | APH | NYSE | 4.0151 | 143.408p* | 2026-05-26 | $167.58 | 2026-08-14 | +€86.50 | **+€67.46** | Partial trim, pre-split. *entry in $ |
| Dunelm Group | DNLM | LSE | 90 | 792.5p | 2026-05-26 | 776p | 2026-09-08 | −€11.02 | **−€14.52** | Full exit — sold below entry. Entry corrected to real fill 792.5p (was 800p) |
| Watches of Switzerland | WOSG | LSE | 135 | 683.5p | 2026-05-26 | 670p | 2026-09-08 | −€13.11 | **−€16.61** | Full exit — remainder closed, sold below entry |
| Campbell's | CPB | NYSE | 60 | $21.898 | 2026-07-14 | $21.105 | 2026-09-08 | −€61.02 | **−€61.92** | Full exit — mechanical Exit signal; sold below entry |
| Nebius Group (short #2) | NBIS | NASDAQ | 3 | $273.32 | 2026-08-14 | $246.645 | 2026-09-08 | +€72.08 | **+€56.08** | Short closed at a gain — price fell as expected |
| Flutter Entertainment | FLUT | NASDAQ | 11 | $92.015 | 2026-08-06 | $99.17 | 2026-09-14 | +€66.20 | **+€51.41** | Partial trim — remaining 1 share designated free-to-ride |
| Amphenol Corp | APH | NYSE | 14 | $71.704 (split-adj.) | 2026-05-26 | $82.225 | 2026-09-22 | +€142.35 | **+€111.56** | **Full exit, previously unrecorded** — sold all 14 shares (post 2-for-1 split). Found during 2026-10-01 reconciliation; was still showing as an open position |
| Meta Platforms (option) | META | NASDAQ | 1 contract | $3.08/sh | 2026-09-21 | $3.09/sh | 2026-09-24 | +€1.20 | **+€0.20** | $885 Oct-09 call, held 3 days, closed essentially at break-even |
| Nebius Group (short #3) | NBIS | NASDAQ | 5 | $234.455 | 2026-09-22 | $234.3595 | 2026-09-28 | −€6.47 | **−€7.35** | Short closed near-flat in native terms; small EUR loss from FX drift between open and close |
| Palantir Technologies (short) | PLTR | NASDAQ | 5 | $184.14 | 2026-09-22 | $188.64 | 2026-09-28 | −€25.20 | **−€26.08** | Short closed at a loss — price rose against the short |
| Micron Technology (short) | MU | NASDAQ | 2 | $1,084.34 | 2026-09-22 | $1,055.54 | 2026-09-28 | +€37.90 | **+€29.06** | Short closed at a gain — price fell as expected |
| Meta Platforms | META | NASDAQ | 2 | $745.84 | 2026-09-21 | $721.20 | 2026-09-28 | −€32.72 | **−€33.62** | Full exit — sold below entry, 1 week after opening |
| Applied Materials (short) | AMAT | NASDAQ | 4 | $468.68 | 2026-09-22 | $505.07 | 2026-09-29 | −€143.80 | **−€144.68** | Short closed at the largest loss of the four 09-22 shorts — price rose sharply against it |

> IQV and KLR's many partial trims are summarized in [[#Performance|Position Summary]] below rather than listed individually here — see the Transaction Log for every trim.

---

## Performance

### Transaction Log

All realised transactions (full exits and partial trims), ordered by date. Entry/Exit dates and real commissions now sourced from the account statement (2026-10-01 reconciliation) — replaces the earlier flat-commission estimates.

| Entry Date | Exit Date | Ticker | Action | Shares | Entry | Exit | Gross P&L (native) | Gross P&L (€) | CGT @21% | Commission (€) | Net (€) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-04-16 | 2026-05-04 | VSURE | Full exit (lot 1) | 100 | €9.91 | €10.63 | +€72.00 | +€72.00 | −€15.12 | −€2.00 | **+€54.88** |
| 2026-04-20 | 2026-05-04 | VSURE | Full exit (lot 2) | 100 | €11.06 | €10.63 | −€43.00 | −€43.00 | €0 | −€2.00 | **−€45.00** |
| 2026-05-29 | 2026-06-09 | NOW | Full exit | 13 | $122.94 | $108.32 | −$190.06 | −€150.72 | €0 | −€0.89 | **−€151.62** |
| 2026-06-04 | 2026-06-09 | MRVL | Full exit | 5 | $309.9546 | $267.17 | −$213.92 | −€177.58 | €0 | −€0.89 | **−€178.47** |
| 2026-05-26 | 2026-07-09 | IQV | Trim | 3 | $163.91 | $208.3205 | +$133.23 | +€124.01 | −€26.04 | −€0.89 | **+€97.09** |
| 2026-05-26 | 2026-07-10 | KLR | Trim | 15 | 2,400p | 3,430p | +£154.50 | +€187.93 | −€39.47 | −€3.52 | **+€144.94** |
| 2026-05-26 | 2026-07-23 | KLR | Trim | 17 | 2,400p | 3,318p | +£156.06 | +€188.43 | −€39.57 | −€3.51 | **+€145.35** |
| 2026-05-26 | 2026-07-27 | MGNS | Full exit | 18 | 4,584p | 4,456p | −£23.04 | −€16.29 | €0 | −€3.51 | **−€19.80** |
| 2026-05-26 | 2026-07-28 | IQV | Trim | 2 | $163.91 | $243.50 | +$159.18 | +€145.87 | −€30.63 | −€0.89 | **+€114.35** |
| 2026-06-25 | 2026-07-29 | AVGO | Full exit | 4 | $387.00 | $371.415 | −$62.34 | −€66.00 | €0 | −€0.90 | **−€66.90** |
| 2026-07-31 | 2026-08-06 | DKNG | Full exit | 45 | $23.4595 | $21.4305 | −$91.30 | −€78.77 | €0 | −€0.89 | **−€79.66** |
| 2026-05-26 | 2026-08-07 | KLR | Trim | 8 | 2,400p | 3,098p | +£55.84 | +€67.33 | −€14.14 | −€3.50 | **+€49.69** |
| 2026-08-06 | 2026-08-12 | NBIS | Short close | 5 | $194.78 | $234.00 | −$196.10 | −€170.05 | €0 | −€0.87 | **−€170.92** |
| 2026-05-26 | 2026-08-14 | WOSG | Trim | 65 | 683.5p | 733.5p | +£32.50 | +€44.06 | −€9.25 | −€3.51 | **+€31.30** |
| 2026-05-26 | 2026-08-14 | APH | Trim (pre-split) | 4.0151 | $143.408 | $167.58 | +$97.05 | +€86.50 | −€18.16 | −€0.88 | **+€67.46** |
| 2026-05-26 | 2026-08-14 | IQV | Trim | 2 | $163.91 | $239.06 | +$150.30 | +€131.39 | −€27.59 | −€0.87 | **+€102.92** |
| 2026-05-26 | 2026-09-08 | DNLM | Full exit | 90 | 792.5p | 776p | −£14.85 | −€11.02 | €0 | −€3.49 | **−€14.52** |
| 2026-05-26 | 2026-09-08 | WOSG | Full exit | 135 | 683.5p | 670p | −£18.22 | −€13.11 | €0 | −€3.49 | **−€16.61** |
| 2026-07-14 | 2026-09-08 | CPB | Full exit | 60 | $21.898 | $21.105 | −$47.58 | −€61.02 | €0 | −€0.89 | **−€61.92** |
| 2026-08-14 | 2026-09-08 | NBIS | Short close (gain) | 3 | $273.32 | $246.645 | +$80.02 | +€72.08 | −€15.14 | −€0.86 | **+€56.08** |
| 2026-05-26 | 2026-09-14 | IQV | Trim (free-ride) | 2 | $163.91 | $264.25 | +$200.68 | +€175.77 | −€36.91 | −€0.88 | **+€137.98** |
| 2026-08-06 | 2026-09-14 | FLUT | Trim | 11 | $92.015 | $99.17 | +$78.71 | +€66.20 | −€13.90 | −€0.89 | **+€51.41** |
| 2026-05-26 | 2026-09-22 | APH | Full exit (13.97 sh) | 13.9698 | $71.704* | $82.225 | +$146.98 | +€142.22 | −€29.87 | −€0.89 | **+€111.46** |
| 2026-07-16 | 2026-09-22 | APH | Full exit (fractional) | 0.0302 | $77.21* | $82.225 | +$0.15 | +€0.13 | −€0.03 | ~€0.00 | **+€0.10** |
| 2026-09-21 | 2026-09-24 | META | Option close | 1 contract | $3.08/sh | $3.09/sh | +$1.00 | +€1.20 | −€0.25 | −€0.75 | **+€0.20** |
| 2026-09-22 | 2026-09-28 | NBIS | Short close | 5 | $234.455 | $234.3595 | +$0.48 | −€6.47 | €0 | −€0.88 | **−€7.35** |
| 2026-09-22 | 2026-09-28 | PLTR | Short close | 5 | $184.14 | $188.64 | −$22.50 | −€25.20 | €0 | −€0.88 | **−€26.08** |
| 2026-09-22 | 2026-09-28 | MU | Short close | 2 | $1,084.34 | $1,055.54 | +$57.60 | +€37.90 | −€7.96 | −€0.88 | **+€29.06** |
| 2026-09-21 | 2026-09-28 | META | Full exit | 2 | $745.84 | $721.20 | −$49.28 | −€32.72 | €0 | −€0.91 | **−€33.62** |
| 2026-09-22 | 2026-09-29 | AMAT | Short close | 4 | $468.68 | $505.07 | −$145.56 | −€143.80 | €0 | −€0.88 | **−€144.68** |

> *Post 2-for-1 split (2026-09-03). ~~The 2026-09-21 "LULU trim" row previously here has been removed — it never happened, see the reconciliation note at the top of the page.~~
>
> **TOTAL (30 transactions, 740.02 shares): Gross €547.27 | CGT −€324.03 | Commission −€46.10 | Net €177.14**

---

### Position Summary

Realised P&L grouped by position (trims + full exits combined).

| Ticker | Transactions | Status | Shares Sold | Realised Gross (€) | CGT (€) | Commissions (€) | Realised Net (€) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IQV | 4 trims | Open (3 remain) — ✅ free-ridden | 9 | +€577.04 | −€121.17 | −€3.53 | **+€452.34** |
| KLR | 3 trims | Open (10 remain) — ✅ free-ridden | 40 | +€443.69 | −€93.18 | −€10.53 | **+€339.98** |
| APH | 3 trims (incl. final exit) | Closed | 18.0151 | +€228.85 | −€48.06 | −€1.77 | **+€179.02** |
| WOSG | 2 trims | Closed | 200 | +€30.95 | −€9.25 | −€7.00 | **+€14.70** |
| DNLM | Full exit | Closed | 90 | −€11.02 | €0 | −€3.49 | **−€14.52** |
| CPB | Full exit | Closed | 60 | −€61.02 | €0 | −€0.89 | **−€61.92** |
| MGNS | Full exit | Closed | 18 | −€16.29 | €0 | −€3.51 | **−€19.80** |
| AVGO | Full exit | Closed | 4 | −€66.00 | €0 | −€0.90 | **−€66.90** |
| DKNG | Full exit | Closed | 45 | −€78.77 | €0 | −€0.89 | **−€79.66** |
| NOW | Full exit | Closed | 13 | −€150.72 | €0 | −€0.89 | **−€151.62** |
| MRVL | Full exit | Closed | 5 | −€177.58 | €0 | −€0.89 | **−€178.47** |
| VSURE | 2 lots, full exit | Closed | 200 | +€29.00 | −€15.12 | −€4.00 | **+€9.88** |
| FLUT | 1 trim | Open (1 remains, free-to-ride) | 11 | +€66.20 | −€13.90 | −€0.89 | **+€51.41** |
| NBIS (short #1) | Full close | Closed | 5 | −€170.05 | €0 | −€0.87 | **−€170.92** |
| NBIS (short #2) | Full close | Closed | 3 | +€72.08 | −€15.14 | −€0.86 | **+€56.08** |
| NBIS (short #3) | Full close | Closed | 5 | −€6.47 | €0 | −€0.88 | **−€7.35** |
| PLTR (short) | Full close | Closed | 5 | −€25.20 | €0 | −€0.88 | **−€26.08** |
| MU (short) | Full close | Closed | 2 | +€37.90 | −€7.96 | −€0.88 | **+€29.06** |
| AMAT (short) | Full close | Closed | 4 | −€143.80 | €0 | −€0.88 | **−€144.68** |
| META (stock) | Full exit | Closed | 2 | −€32.72 | €0 | −€0.91 | **−€33.62** |
| META (option) | Full close | Closed | 1 | +€1.20 | −€0.25 | −€0.75 | **+€0.20** |
| **TOTAL** | **30** | | **740.02** | **€547.27** | **−€324.03** | **−€46.10** | **€177.14** |

---

### YTD Summary

| Metric | Value |
| --- | --- |
| Total gross P&L (€) | €547.27 |
| Total CGT paid (€) | €324.03 |
| Total commissions (€) | €46.10 |
| **Net realised gains (€)** | **€177.14** |
| Transactions | 30 |
| Positions fully closed | 17 (VSURE ×2 lots, NOW, MRVL, MGNS, AVGO, DKNG, NBIS short #1, DNLM, CPB, NBIS short #2, APH, NBIS short #3, PLTR short, MU short, AMAT short, META stock, META option) |
| Positions partially trimmed (still open) | 3 (IQV, KLR, FLUT) |

---

## Cash Position

| Currency | Amount | Basis |
| --- | --- | --- |
| EUR | **€1,895.31** | Running total of every real cash movement in the account statement (deposits, long buys/sells, dividends, interest, fees, FX adjustments, 2026-04-15 through 2026-10-01) **with any open short's sale proceeds excluded** — only a closed short's realized P&L counts. See methodology note below. |

**Movement log** (major items; small FX/interest/fee lines aggregated where noted). Short-sale proceeds at open are **not** included below — only a short's realized P&L at close appears, consistent with every open short (ORCL, NBIS, PLTR, AMAT, MU) carrying zero cash impact while open:

€4,000 deposit (04-15) − €995 VSURE buy lot 1 (04-16) − €1,110 VSURE buy lot 2 (04-20) + €2,122 VSURE exit (05-04) + €3,000 deposit (05-25) + €1,000 deposit (05-26) − €1,357 APH buy (05-26) − €962 MGNS buy (05-26) − €1,398 KLR buy, 50sh (05-26) − €832 DNLM buy, 90sh (05-26) − €1,592 WOSG buy, 200sh (05-26) − €1,692 IQV buy, 12sh (05-26) − €10 net FX spread (05-26, aggregated) − €1,371 NOW buy (05-29) + €3,000 deposit (05-29) − €1,336 MRVL buy (06-04) + €1,500 deposit (06-04) + €1,219 NOW exit (06-09) + €1,156 MRVL exit (06-09) − €1,362 AVGO buy (06-25) + €30 KLR dividend (06-26) + €546 IQV trim (07-09) + €601 KLR trim (07-10) − €960 SAP buy (07-14) − €1,151 CPB buy (07-14) + €2 APH dividend net of tax (07-15) − €1,152 GSK buy, 50sh (07-16) − €2 APH fractional buy (07-16) + €657 KLR trim (07-23) + €934 MGNS exit (07-27) − €1,197 EDEN buy (07-27) − €5 EDEN French tax (07-27) + €427 IQV trim (07-28) + €1,295 AVGO exit (07-29) + €6,000 deposit (07-30) − €850 ACN/CSA buy (07-31) − €460 GSK add, 20sh (07-31) **[corrected — real cost, was logged as only −€50]** − €916 DKNG buy (07-31) − €1,084 ADBE buy (07-31) − €1,235 PRX buy (08-03) − €1,066 WKL buy (08-05) + €836 DKNG exit (08-06) − €959 FLUT buy (08-06) − €982 ORCL put (08-06) *(NBIS short #1 opened 08-06 — no cash entry)* + €286 KLR trim (08-07) − €951 ZOE buy (08-10) − €885 LULU buy, 8sh (08-10) − €715 PLTR put (08-11) + €1,000 deposit (08-12) − €171 NBIS short #1 close, realized loss (08-12) − €614 REL buy, 20sh (08-14) + €554 WOSG trim (08-14) + €581 APH trim (08-14) + €412 IQV trim (08-14) *(ORCL short opened 08-14 — no cash entry)* *(NBIS short #2 opened 08-14 — no cash entry)* − €687 SFM buy (08-21) − €1 net interest/fees (09-03, aggregated) − €427 LULU buy, 5sh (09-04) **[previously unlogged]** + €810 DNLM exit (09-08) + €1,050 WOSG exit (09-08) − €607 REL buy, 20sh (09-08) **[corrected — real fill was 20sh, not 2]** + €1,089 CPB exit (09-08) + €56 NBIS short #2 close, realized gain (09-08) − €444 LULU buy, 5sh (09-08) *(ORCL short add, +2sh, 09-09 — no cash entry)* **[previously unlogged]** + €3 KLR dividend (09-11) + €457 IQV trim (09-14) + €944 FLUT trim (09-14) − €911 ERO buy (09-21) − €1,302 META buy (09-21) − €2 FX spread (09-21) − €270 META call (09-21) *(MU short opened 09-22 — no cash entry)* **[previously unlogged]** *(AMAT short opened 09-22 — no cash entry)* **[previously unlogged]** *(PLTR short opened 09-22 — no cash entry)* **[previously unlogged]** *(NBIS short #3 opened 09-22, 5sh — no cash entry)* **[previously unlogged]** + €1,005 APH full exit, 14sh (09-22) + − €701 BIRK buy, 25sh (09-22) + €63 FX translation adjustment (09-23) *(all three previously unlogged, found 2026-10-01)* + €271 META $885 call closed, sell proceeds (09-24) + €13 WKL.RTS dividend (09-24) + €1,268 META full exit, 2sh (09-28) + €29 MU short close, realized gain (09-28) *(ORCL short, NBIS short #3, PLTR short, AMAT short all opened 09-22/09-14 — no cash entry while open)* − €7 NBIS short #3 close, realized loss (09-28) − €26 PLTR short close, realized loss (09-28) − €145 AMAT short close, realized loss (09-29) − €479 NBIS put, premium paid (10-01) + €76 FX translation adjustment (10-01)

**= €1,895.31**

> **Methodology, reconfirmed 2026-10-01, applied consistently 2026-10-02:** short-sale proceeds at open are **not** spendable cash (they're margin-backed collateral), so they get no cash entry; only a short's **realized P&L at close** does, exactly like a trim/exit. All four shorts opened 09-22 (NBIS #3, PLTR, AMAT, MU) closed within the week — each contributed only its net realized P&L above, never its opening proceeds. The real account statement's own literal ending balance would be meaningfully higher than what's shown here for the same reason explained 2026-10-01 — that gap is a deliberate choice about what "Cash" means on this page (spendable cash, not margin-account buying power), not an error.

---

## Account Settings

| Parameter | Value |
| --- | --- |
| Brokerage cost | **Corrected 2026-10-01 to real IBKR commissions**: ~€0.85–0.90 per USD trade, ~€3.00–3.50 per GBP/EUR trade (varies by order size/currency) — replaces the earlier flat $5/€4.37 estimate |
| Capital gains tax | 21% on all realised gains (modeling assumption — not reflected in the real account statement, which doesn't withhold CGT; accrued but unpaid until annual settlement) |
| Position size — normal | ~€1,000 |
| Position size — large | ~€1,500 (high conviction) |
| Position size — small | ~€750 (starter / low conviction) |
| Base currency | EUR |

---

## Structural Risk Notes (Burry Lens)

*See [[finance/models/model-portfolio-management]] for the full framework.*

| Position | Burry Signal | Guidance |
|---|---|---|
| IQV | 🟢 Healthcare — positive alignment | No Burry conflict; size can be normal or large if thesis intact |
| KLR, GSK, EDEN | 🟢 European value — no signal | No conflict; Grantham also prefers non-US value |
| SAP, ACN | 🟡 Enterprise software — mild indirect | Enterprise-contracted revenue; less circular-financing exposed than hyperscalers |
| ADBE | 🟡 US large-cap tech — mild indirect | Caught in QQQ puts thesis; AI features (Firefly) add narrative risk |
| FLUT | 🟢 Burry-aligned long | Burry long at $100.72 (Jul 24 2026); anti-prediction-markets / sports betting thesis |
| PRX | 🟢 Non-US value / SOTP — no signal | Tencent stake + growth portfolio at persistent NAV discount |
| WKL | 🟢 Intangible moat / non-US — no signal | Recurring professional information revenue; Grantham-aligned non-US quality |
| NBIS (short #1/#2 closed; put open) | 🟢 Burry/model-aligned | Nebius neocloud thesis — "Avoid/underweight Nebius" call. Equity short #3 (opened 09-22) closed 09-28; now expressed via a long $90 Jun-2027 put instead (opened 10-01) |
| ORCL (put + short) | 🟡 Partially Burry-aligned option/short | Long put + a 5-share equity short (grew from 3 via a 09-09 add); bearish Oracle AI/OCI overlay |
| PLTR (put, closed short) | 🟡 Mixed exposure | Long put (bearish, Mar 2027) stands; the separate equity short (opened 09-22) closed 09-28 at a loss |
| AMAT, MU (both closed shorts) | 🔴 Direct AI-infrastructure exposure | Applied Materials and Micron — semiconductor capex plays; both shorts (opened 09-22) closed within the week (AMAT 09-29 at the largest loss of the batch, MU 09-28 at a gain) |
| LULU, SFM, BIRK, ERO | 🟢 Consumer / materials — no signal | Ordinary consumer and commodity names, no AI-infrastructure conflict |
| ZOE | 🟢 Healthcare/animal health — no signal | EUR listing, priced via ZTS proxy pending direct quote |
| REL | 🟢 Non-US value / information services — no signal | Now 40 shares (corrected); no AI-infrastructure exposure |
| META (closed) | 🔴 Direct AI-infrastructure / circular-financing exposure | Both the stock (2sh) and the $885 Oct call closed within the week of opening (09-24/09-28) — no longer an open exposure |
| QXO-PB | 🟡 Industrials / building products (preferred) — no signal | Preferred structure changes the risk/return profile vs. common equity |

**Patience override rule:** A mechanical EXIT signal (RSI < 40 + below 50d SMA + MACD bearish expanding) alone is not sufficient to exit a position with an intact fundamental thesis. Maximum trim: 50%. Reassess within 10 trading days.

---

## Magic Formula

*Greenblatt Magic Formula ranking — updated weekly by scheduled task. Ranks by combined ROIC + Earnings Yield.*

| Ticker | MF Rank | ROIC | Earnings Yield | Last Updated |
|---|---|---|---|---|
| MGNS | 1 | 43.56% | 15.1% | 2026-10-04 |
| DNLM | 2 | 32.5% | 11.63% | 2026-10-04 |
| MU | 3 | 93.42% | 8.67% | 2026-10-04 |
| GSK | 4 | 26.38% | 11.26% | 2026-10-04 |
| ACN | 5 | 26.79% | 9.83% | 2026-10-04 |
| LULU | 6 | 23.7% | 16.45% | 2026-10-04 |
| ADBE | 7 | 36.79% | 7.76% | 2026-10-04 |
| GAW | 8 | 98.6% | 4.95% | 2026-10-04 |
| KLR | 9 | 22.91% | 9.57% | 2026-10-04 |
| WKL | 10 | 24.79% | 8.14% | 2026-10-04 |
| ERO | 11 | 18.48% | 8.5% | 2026-10-04 |
| REL | 12 | 23.58% | 5.93% | 2026-10-04 |
| ASML | 13 | 65.98% | 2.02% | 2026-10-04 |
| SFM | 14 | 15.15% | 8.49% | 2026-10-04 |
| WOSG | 15 | 11.93% | 8.71% | 2026-10-04 |
| TER | 16 | 38.24% | 1.97% | 2026-10-04 |
| BIRK | 17 | 10.38% | 8.82% | 2026-10-04 |
| AMAT | 18 | 35.64% | 2.26% | 2026-10-04 |
| AVGO | 19 | 30.68% | 2.51% | 2026-10-04 |
| SAP | 20 | 18.2% | 5.29% | 2026-10-04 |
| CPB | 21 | 8.33% | 9.35% | 2026-10-04 |
| GOOGL | 22 | 15.15% | 5.9% | 2026-10-04 |
| PEP | 23 | 13.22% | 6.1% | 2026-10-04 |
| MSFT | 24 | 20.56% | 3.48% | 2026-10-04 |
| APH | 25 | 20.18% | 3.58% | 2026-10-04 |
| PLTR | 26 | 25.6% | 0.67% | 2026-10-04 |
| IBM | 27 | 13.96% | 4.78% | 2026-10-04 |
| META | 28 | 17.08% | 3.68% | 2026-10-04 |
| WDAY | 29 | 18.35% | 2.7% | 2026-10-04 |
| PRX | 30 | 0.59% | 8.35% | 2026-10-04 |
| ORCL | 31 | 11.34% | 4.37% | 2026-10-04 |
| AMZN | 32 | 8.48% | 5.0% | 2026-10-04 |
| IQV | 33 | 9.8% | 4.18% | 2026-10-04 |
| NOW | 34 | 10.28% | 1.3% | 2026-10-04 |
| MRVL | 35 | 6.94% | 0.66% | 2026-10-04 |
---

## See Also

- [[finance-overview]]
- [[finance/portfolio-overview]] — equity pension portfolio
- [[finance/models/model-portfolio-management]] — integrated risk framework; Burry/Grantham structural risk layer; position sizing rules; decision matrix
- [[finance/people/person-michael-burry]] — AI circular-financing thesis; rationale for AVGO exit
