---
title: Trading Portfolio
domain: finance
type: live
tags: [portfolio, trading, positions]
updated: 2026-09-18
---

# Trading Portfolio

> Live page — update whenever positions change. **2026-09-18 review — no new trading day, data-quality flag:** Turso `refresh-technicals` has not produced a new trading-day close since 2026-09-14 (three trading days — 09-15, 09-16, 09-17, 09-18 — missed; see [memory: mcp_local_servers_connect_timeout_2026_09_15] for a known connector-timeout incident on 09-15 that likely blocked that run). What *did* change today: Turso re-pulled/corrected the **same** 2026-09-14 close for six tickers (APH, IQV, ADBE, FLUT, LULU, SFM) and for ORCL — small revisions (e.g. ORCL $143.81→$144.79), not new price action — and the options book got a same-date Black-Scholes remark (mark_date 2026-09-15) using those corrected inputs. No trades executed today; no signals acted on given the stale data. Cash unchanged at **€4,196.60**. Total net value now ≈**€19,297** (up from €19,104, almost entirely the ORCL/options revision above, not genuine market movement) — see [[#Portfolio Net Value|Portfolio Net Value]]. 18 open positions (15 long equity, 1 short, 2 options). **PRX and LULU's patience-override reassess-by date (~2026-09-22) is now only ~2 trading days away** — flagged for reassessment with fresh data once refresh-technicals catches up, see [[#Portfolio Risks|risks]] below.

---

## Portfolio Net Value

**Total Net Value: ≈ €19,297** (as of 2026-09-18; underlying prices still carry a 2026-09-14 date — see the data-quality flag at the top of this page)

| Component | Value (€) | Basis |
| --- | --- | --- |
| Long equity (market price) | €13,504 | Sum of Mkt Value across all 15 open long positions, converted to EUR, via Turso's re-pulled 2026-09-14 closes (not a new trading day) |
| Options (market price) | €1,584 | ORCL put ≈€646 + PLTR put ≈€938 — Turso Black-Scholes estimates, mark_date 2026-09-15, on the corrected 09-14 underlying prices |
| Shorts (market − entry, unrealized P&L) | ≈+€13 | ORCL only — corrected underlying now $144.79 (was $150.15 at entry), +3.40% unrealized gain |
| Cash | €4,197 | Unchanged — no trades today, see [[#Cash Position\|Cash Position]] |
| **Total Net Value** | **€19,297** | |

> **Methodology note:** Shorts are traded on margin and don't hold cash value themselves while open — only their unrealized P&L (market price vs. entry price) contributes to net worth, per [[#Short Positions\|Short Positions]]. FX used: EUR/USD 1.14837 (Turso, 2026-09-18 pull). The rise from €19,104 to €19,297 is almost entirely a data revision, not market movement: Turso re-pulled the 2026-09-14 close for APH/IQV/ADBE/FLUT/LULU/SFM/ORCL with small corrections (e.g. ORCL $143.81→$144.79), and the options book was re-marked from those corrected inputs — no new trading day has posted since 09-14. Recompute this section whenever prices in Open Positions / Short Positions / Options Positions are refreshed — it is not automatically kept in sync.

---

## Open Positions

| Company | Ticker | Exchange | Currency | Shares | Entry | Cost Basis | Last Price | Mkt Value | P&L% | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amphenol Corp | APH | NYSE | USD | 14 | $71.75 | $1,004.50 | $78.55 | $1,099.70 | +9.48% | 👀 Watch | Trimmed 4 sh @ $167.58 on 2026-08-14 (pre-split, 11→7). **2-for-1 stock split effective 2026-09-03** (7→14 shares, entry $143.50→$71.75, cost basis unchanged). RSI 46.7, below SMA50 ($80.21), MACD bullish — pulled back slightly from overbought, no mechanical signal either way |
| IQVIA Holdings | IQV | NYSE | USD | 3 | $163.99 | $491.97 | $265.67 | $797.01 | +62.00% | 👀 Watch | Trimmed 2 sh @ $239.06 on 2026-08-14, **trimmed 2 more sh @ $264.25 on 2026-09-14** for the free-ride. **✅ now already free-ridden** — cumulative trim proceeds ($2,117.62 across 4 trims) exceed the original $1,967.88 cost basis (12-share lot); all 3 remaining shares at zero effective cost. RSI 63.0, above SMA50 ($236.37), MACD bearish — same-day price, first genuinely fresh refresh in several sessions |
| Keller Group | KLR | LSE | GBp | 10 | 2,418p | £241.80 | 2,956.00p | £295.60 | +22.25% | 👀 Watch | Trimmed 8 sh @ 3,098p on 2026-08-07. RSI 44.0, below 50d SMA (3,110.80p), MACD bearish; **✅ already free-ridden** — gross trim proceeds (£1,326.40) exceed the original £1,209.00 cost basis, all 10 remaining shares at zero effective cost |
| SAP SE | SAP | XETRA | EUR | 7 | €136.70 | €956.90 | €186.26 | €1,303.82 | +36.25% | 👀 Watch | RSI 58.5, above 50d SMA (€165.59), MACD bearish |
| GSK | GSK | LSE | GBp | 52 | 1,939.6p | £1,008.58 | 1,854.50p | £964.34 | -4.39% | 👀 Watch | RSI 48.9, below 50d SMA (1,902.12p), MACD bearish — **rolled off mechanical Exit today** (RSI back above 40 from 31.6); patience-override lifted, back to routine Watch; next earnings 2026-10-28 |
| Edenred SA | EDEN | Euronext | EUR | 45 | €26.53 | €1,193.85 | €28.70 | €1,291.50 | +8.18% | 👀 Watch | RSI 49.3, above 50d SMA (€27.82), MACD bearish |
| Accenture | ACN | Xetra | EUR | 6 | €141.10 | €846.60 | €164.90 | €989.40 | +16.87% | 👀 Watch | Global IT services & consulting. Correct listing is Xetra/Frankfurt ticker **CSA** (ISIN IE00B4BNMY34, WKN A0YAQA), confirmed 2026-08-04. RSI 60.9, above 50d SMA (€144.99), MACD bearish |
| Adobe | ADBE | NASDAQ | USD | 5 | $249.85 | $1,249.25 | $265.60 | $1,328.00 | +6.30% | 👀 Watch | Creative & document software; AI integration (Firefly). RSI 49.4, above SMA50 ($253.48), MACD bearish — earnings reported 2026-09-10 after close, reaction muted (price +1.4%) |
| Flutter Entertainment | FLUT | NASDAQ | USD | 1 | $92.10 | $92.10 | $100.65 | $100.65 | +9.28% | 👀 Watch | Sports betting & iGaming global operator; Burry long at $100.72 (Jul 24 2026); entered at better price; anti-prediction-markets thesis; initiated 2026-08-06. **Trimmed 11 sh @ $99.17 on 2026-09-14** — user-designated as a free ride: trim proceeds ($1,090.87) came in just under the original $1,105.20 cost basis (~99% recovered, short by $14.33/~1.3%), but the last share is treated as free-to-ride per Mike's call rather than the strict full-recovery threshold. RSI 47.9, below SMA50 ($102.11), MACD bullish. Next earnings not until 2026-11-12 |
| Prosus | PRX | Euronext AMS | EUR | 30 | €41.165 | €1,234.95 | €35.920 | €1,077.60 | -12.74% | 🔴 Exit | Dutch internet holding; Tencent stake + growth portfolio at persistent NAV discount; SOTP value thesis. RSI 38.5, below 50d SMA (€38.59), MACD bearish — mechanical Exit continues from 09-08 trigger (day 6); loss roughly steady; SOTP thesis intact, patience-override applied — hold, reassess by ~2026-09-22 |
| Wolters Kluwer | WKL | Euronext AMS | EUR | 15 | €71.08 | €1,066.20 | €70.72 | €1,060.80 | -0.51% | 👀 Watch | Dutch professional information services (legal, tax, compliance); intangible moat / recurring revenue compounder; initiated 2026-08-05. RSI 58.3, above SMA50 (€66.20), MACD bearish |
| Lululemon Athletica | LULU | NASDAQ | USD | 13 | $118.13 | $1,535.72 | $100.30 | $1,303.90 | -15.09% | 🔴 Exit | Athletic apparel; initiated 2026-08-10, added 5 sh @ $103.00 on 2026-09-08 (averaging down post-crash — blended entry $118.13, was $127.59). Earnings reported 2026-09-03 (miss, drove the crash). RSI 36.1, below SMA50 ($116.77), MACD bearish — mechanical Exit continues (~day 10); remains the top portfolio risk (no stop-loss in place); patience-override applied (Burry's largest position, plans to buy more aggressively under $100, "well under IV15") — hold, reassess by ~2026-09-22 |
| Sprouts Farmers Market | SFM | NASDAQ | USD | 10 | $80.16 | $801.60 | $75.09 | $750.90 | -6.32% | 👀 Watch | Specialty grocery; initiated 2026-08-21. RSI 43.1, below SMA50 ($80.30), MACD bearish — **rolled off mechanical Exit today** (RSI back above 40 from 35.8); patience-override lifted, back to routine Watch; no catalyst identified, next earnings not until 2026-10-28 |
| Zoetis Inc | ZOE | Xetra | EUR | 15 | €63.22 | €948.30 | €64.14 | €962.10 | +1.46% | 👀 Watch | Animal health pharma; European (EUR) listing — primary US listing is NYSE:ZTS, price here estimated via ZTS close ÷ EUR/USD, **not a direct EUR-listing quote**. RSI 47.6, below SMA50 (€65.37), MACD bearish. Initiated 2026-08-10 |
| RELX plc | REL | LSE | GBp | 22 | 2,593.27p | £570.52 | 2,603.00p | £572.66 | +0.38% | 👀 Watch | Information & analytics / events group; initiated 2026-08-14, added 2 sh @ 2,576p on 2026-09-08 (blended entry 2,593.27p, was 2,595p). RSI 52.2, above 50d SMA (2,566.73p), MACD bearish — first genuinely fresh (non-carried) price/RSI in several sessions |

> Prices in native currency. LSE positions in pence (GBp); cost basis and Mkt Value in GBP. EUR positions (SAP, EDEN, ACN, PRX, WKL, ZOE) in EUR. Prices last fetched: **2026-09-14** — still no new trading-day close as of this 2026-09-18 review (Turso `refresh-technicals` has not run since Monday); today's pull only re-derived small corrections to that same 09-14 close for APH, IQV, ADBE, FLUT, LULU, SFM.
> **Active alerts:** LULU — no stop-loss, mechanical Exit continues post 09-03 earnings miss, remains the top portfolio risk; patience-override reassess-by ~2026-09-22 is now ~2 trading days out — reassess with fresh data as soon as refresh-technicals catches up. PRX — mechanical Exit continues from the 09-08 trigger; same reassess-by ~2026-09-22 deadline, same urgency. GSK, SFM — rolled off mechanical Exit on 09-14 (RSI back above 40), routine Watch. IQV — confirmed fully free-ridden (3 shares at zero effective cost) — no further action needed. KLR — confirmed already free-ridden, all 10 shares at zero effective cost. FLUT — 1 share remains, designated free-to-ride per Mike's call. ORCL short/put — Turso re-pulled 09-14 close today (was $143.81, now $144.79); short unrealized +3.40%; options mtm are Black-Scholes estimates (mark_date 2026-09-15), no live options chain to cross-check.

---

## Short Positions

Active short equity positions (profit if price falls below entry; loss if price rises above entry).

| Company | Ticker | Exchange | Currency | Shares Short | Entry | Short Value | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | NYSE | USD | 3 | $149.89 | $449.67 | ✅ Hold | Equity short complementing the existing ORCL long put below; bearish on Oracle AI/OCI narrative (OCI +93% YoY — short profitable only if AI infrastructure thesis unwinds); initiated 2026-08-14. **2026-09-18: Turso re-pulled the 2026-09-14 close** — ORCL now $144.79 (was $143.81; still 2026-09-14-dated, not a new session) — unrealized +3.40% (+$15.30, ~+€13.32), small gain vs. entry |

> Margin requirement (broker collateral, not a cash movement — see [[#Cash Position|Cash Position]] note): ORCL ~€378 (approx., notional value converted at ≈1.14837 EUR/USD, per Turso 2026-09-18 pull). Profit if price falls below entry; loss if it rises. **NBIS short fully closed 2026-09-08** (bought back 3 sh @ $246.84, gain — see [[#Closed Positions|Closed Positions]]); no NBIS short position remains open.

---

## Options Positions

| Underlying | Ticker | Type | Strike | Expiry | Contracts | Shares | Premium Paid | Total Cost (€) | Current Price | Mkt Value (€) | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | Long Put | $120 | 2026-12-18 | 1 | 100 | $11.38/sh | €992 | ~$6.46/sh (est.) | ~€646 (est.) | ✅ Hold | Right to sell ORCL at $120 by Dec 2026; bearish on Oracle AI/OCI narrative (OCI +93% YoY — put profitable only if AI infrastructure thesis accelerates); break-even $108.62; initiated 2026-08-06. ORCL now $144.79 (still 2026-09-14-dated, Turso re-pull), down from $150.15 entry — still ~33% above breakeven, deep OTM. **Turso Black-Scholes estimate, mark_date 2026-09-15** — no live options chain available to cross-check |
| Palantir | PLTR | Long Put | $125 | 2027-03-19 | 1 | 100 | $8.24/sh | €727 | ~$9.38/sh (est.) | ~€938 (est.) | ✅ Hold | Right to sell PLTR at $125 by Mar 2027; break-even $116.76; initiated 2026-08-11. PLTR now $173.31 (2026-09-14-dated), 48% above breakeven, deep OTM, long-dated — monitor only. **Turso Black-Scholes estimate, mark_date 2026-09-15** — model estimate, not a live option-chain quote |

> Long puts: profitable if the underlying closes below break-even at expiry. Maximum loss = premium paid (ORCL €992, PLTR €727). Current combined mark-to-market value: ≈€1,584 (Turso Black-Scholes estimate; down from €1,719 paid) — both marks are model estimates re-derived from the corrected 2026-09-14 inputs, not directly quoted from a live options chain.

---

## Closed Positions

Fully exited positions. Partial trims of open positions are in the [[#Performance|Transaction Log]] below.

| Company | Ticker | Exchange | Shares | Entry | Exit Price | Exit Date | Gross P&L (€) | Net P&L (€) | Exit Reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Morgan Sindall Group | MGNS | LSE | 18 | 4,624p | 4,456p | 2026-07-27 | −€35.44 | **−€39.81** | Full exit — earnings miss; technical breakdown confirmed |
| Broadcom | AVGO | NASDAQ | 4 | $387.25 | $371.42 | 2026-07-29 | −€55.54 | **−€59.91** | Full exit — Burry SOXX-short thesis; below SMA50; position closed |
| DraftKings | DKNG | NASDAQ | 45 | $23.46 | $21.43 | 2026-08-06 | −€80.13 | **−€84.50** | Full exit — mechanical Exit signal (RSI <40, below SMA50, MACD bearish); technical breakdown confirmed |
| Nebius Group (short #1) | NBIS | NASDAQ | 5 | $194.78 | $234.00 | 2026-08-12 | −€172.02 | **−€176.39** | Short position closed at a loss — price rose against the short; bought back to cover. Re-shorted at a different size/price 2026-08-14 (short #2, below) |
| Watches of Switzerland | WOSG | LSE | 135 | 688p | 670p | 2026-09-08 | −€28.31 | **−€32.68** | Full exit — sold below entry; remaining 135 shares (post the 2026-08-14 partial trim) closed out |
| Dunelm Group | DNLM | LSE | 90 | 800p | 776p | 2026-09-08 | −€25.16 | **−€29.53** | Full exit — sold below entry, notably below the 2026-09-07 last quote (886.50p) |
| Campbell's | CPB | NYSE | 60 | $21.90 | $21.11 | 2026-09-08 | −€40.76 | **−€45.13** | Full exit — mechanical Exit signal had been active since 2026-09-04; sold below entry |
| Nebius Group (short #2) | NBIS | NASDAQ | 3 | $273.32 | $246.84 | 2026-09-08 | +€68.32 | **+€49.60** | Short position closed at a gain — price fell against the short as expected; bought back to cover |

---

## Performance

### Transaction Log

All realised transactions (full exits and partial trims), ordered by date.

| Date | Ticker | Action | Shares | Entry | Exit | Gross P&L | Gross P&L (€) | CGT @21% | Commission | Net (€) | Note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-09 | IQV | Trim | 3 | $163.99 | $208.00 | +$132.03 | +€115.39 | −€24.23 | −€4.37 | **+€86.79** | RSI 71 overbought; earnings risk |
| 2026-07-11 | KLR | Trim | 15 | 2,418p | 3,430p | +£151.80 | +€177.91 | −€37.36 | −€4.37 | **+€136.18** | RSI 86.3 extreme overbought |
| 2026-07-23 | KLR | Trim | 17 | 2,418p | 3,318p | +£153.00 | +€179.32 | −€37.66 | −€4.37 | **+€137.29** | Technical exit signal |
| 2026-07-27 | MGNS | Full exit | 18 | 4,624p | 4,456p | −£30.24 | −€35.44 | €0 | −€4.37 | **−€39.81** | Earnings miss; technical breakdown |
| 2026-07-28 | IQV | Trim | 2 | $163.99 | $243.50 | +$159.02 | +€139.49 | −€29.29 | −€4.37 | **+€105.83** | RSI 78.8 extreme overbought |
| 2026-07-29 | AVGO | Full exit | 4 | $387.25 | $371.42 | −$63.32 | −€55.54 | €0 | −€4.37 | **−€59.91** | Burry SOXX thesis; below SMA50 |
| 2026-08-06 | DKNG | Full exit | 45 | $23.46 | $21.43 | −$91.35 | −€80.13 | €0 | −€4.37 | **−€84.50** | Mechanical Exit signal triggered; technical breakdown |
| 2026-08-07 | KLR | Trim | 8 | 2,418p | 3,098p | +£54.40 | +€63.75 | −€13.39 | −€4.37 | **+€45.99** | Profit-take |
| 2026-08-12 | NBIS | Short close | 5 | $194.78 | $234.00 | −$196.10 | −€172.02 | €0 | −€4.37 | **−€176.39** | Bought back to close short at a loss |
| 2026-08-14 | IQV | Trim | 2 | $163.99 | $239.06 | +$150.14 | +€131.67 | −€27.65 | −€4.37 | **+€99.65** | Profit-take |
| 2026-08-14 | APH | Trim | 4 | $143.50 | $167.58 | +$96.32 | +€84.49 | −€17.74 | −€4.37 | **+€62.38** | Profit-take (pre-split) |
| 2026-08-14 | WOSG | Trim | 65 | 688p | 733.5p | +£29.58 | +€34.66 | −€7.28 | −€4.37 | **+€23.01** | Partial trim |
| 2026-09-08 | WOSG | Full exit | 135 | 688p | 670p | −£24.30 | −€28.31 | €0 | −€4.37 | **−€32.68** | Sold below entry |
| 2026-09-08 | DNLM | Full exit | 90 | 800p | 776p | −£21.60 | −€25.16 | €0 | −€4.37 | **−€29.53** | Sold below entry, well below last quote |
| 2026-09-08 | CPB | Full exit | 60 | $21.90 | $21.11 | −$47.40 | −€40.76 | €0 | −€4.37 | **−€45.13** | Mechanical Exit signal since 09-04; sold below entry |
| 2026-09-08 | NBIS | Short close (gain) | 3 | $273.32 | $246.84 | +$79.44 | +€68.32 | −€14.35 | −€4.37 | **+€49.60** | Bought back to close short #2 at a gain |
| 2026-09-14 | FLUT | Trim | 11 | $92.10 | $99.17 | +$77.77 | +€67.08 | −€14.09 | −€4.37 | **+€48.62** | Trim — remaining 1 share designated free-to-ride |
| 2026-09-14 | IQV | Trim | 2 | $163.99 | $264.25 | +$200.52 | +€172.97 | −€36.32 | −€4.37 | **+€132.28** | Free-ride trim — now fully free-ridden |

---

### Position Summary

Realised P&L grouped by position (trims + full exits combined).

| Ticker | Transactions | Status | Shares Sold | Realised Gross (€) | CGT (€) | Commissions (€) | Realised Net (€) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IQV | 4 trims | Open (3 remain) — ✅ free-ridden | 9 | +€559.52 | −€117.49 | −€17.48 | **+€424.55** |
| KLR | 3 trims | Open (10 remain) | 40 | +€420.98 | −€88.41 | −€13.11 | **+€319.46** |
| APH | 1 trim | Open (14 remain, post-split) | 4 | +€84.49 | −€17.74 | −€4.37 | **+€62.38** |
| FLUT | 1 trim | Open (1 remain, free-to-ride) | 11 | +€67.08 | −€14.09 | −€4.37 | **+€48.62** |
| WOSG | 1 trim + full exit | Closed | 200 | +€6.35 | −€7.28 | −€8.74 | **−€9.67** |
| DNLM | Full exit | Closed | 90 | −€25.16 | €0 | −€4.37 | **−€29.53** |
| CPB | Full exit | Closed | 60 | −€40.76 | €0 | −€4.37 | **−€45.13** |
| MGNS | Full exit | Closed | 18 | −€35.44 | €0 | −€4.37 | **−€39.81** |
| AVGO | Full exit | Closed | 4 | −€55.54 | €0 | −€4.37 | **−€59.91** |
| DKNG | Full exit | Closed | 45 | −€80.13 | €0 | −€4.37 | **−€84.50** |
| NBIS (short #1) | Full close | Closed | 5 | −€172.02 | €0 | −€4.37 | **−€176.39** |
| NBIS (short #2) | Full close | Closed | 3 | +€68.32 | −€14.35 | −€4.37 | **+€49.60** |
| **TOTAL** | **18** | | **489** | **€797.69** | **−€259.36** | **−€78.66** | **€459.67** |

---

### YTD Summary

| Metric | Value |
| --- | --- |
| Total gross P&L (€) | €797.69 |
| Total CGT paid (€) | €259.36 |
| Total commissions (€) | €78.66 |
| **Net realised gains (€)** | **€459.67** |
| Transactions | 18 |
| Positions fully closed | 8 (MGNS, AVGO, DKNG, NBIS short #1, WOSG, DNLM, CPB, NBIS short #2) |
| Positions partially trimmed | 4 (IQV, KLR, APH, FLUT) |

---

## Cash Position

| Currency | Amount | Movement Log |
| --- | --- | --- |
| EUR | **€4,196.60** | €3,000 start + €517 IQV trim (07-09) + €561 KLR trim (07-11) − €961 SAP buy (07-14) − €1,157 CPB buy (07-14) − €1,147 GSK buy (07-16) + €657 KLR trim (07-23) + €936 MGNS exit (07-27) − €1,198 EDEN buy (07-23) + €423 IQV trim (07-28) + €1,299 AVGO exit (07-29) + €6,000 deposit (07-31) − €851 ACN buy (07-31) − €50 GSK add (07-31) − €1,100 ADBE buy (07-31) − €930 DKNG buy (07-31) − €1,239 PRX buy (08-03) − €1,071 WKL buy (08-05) + €842 DKNG exit (08-06) − €974 FLUT buy (08-06) − €992 ORCL put (08-06) + €286 KLR trim (08-07) − €176 NBIS short #1 close, realized loss (08-12) − €900 LULU buy (08-10) − €953 ZOE buy (08-10) − €727 PLTR put (08-11) + €415 IQV trim (08-14) + €584 APH trim (08-14) + €554 WOSG trim (08-14) − €613 REL buy (08-14) − €707 SFM buy (08-21) − €447 LULU add (09-08) − €64 REL add (09-08) + €1,049 WOSG exit (09-08) + €809 DNLM exit (09-08) + €1,085 CPB exit (09-08) + €50 NBIS short #2 close, realized gain (09-08) + €937 FLUT trim (09-14) + €452 IQV trim (09-14) |

> Cash amounts in movement log represent proceeds from sales (net of commission; CGT accrued but not deducted from proceeds — settled annually). **Corrected 2026-09-04: shorts are traded on margin and do not draw down cash while open** — the margin-posted/returned entries for NBIS/ORCL shorts were removed as an accounting error (margin is broker collateral, not spendable cash), which resolved the negative-balance flag from the earlier backfill. Margin requirement is tracked separately in [[#Short Positions|Short Positions]] as a broker requirement, not a cash movement. **Correction 2026-09-08:** the 2026-09-04 fix over-corrected by also dropping the *realized* net P&L when a short is actually closed — that P&L is real settled cash, same as any equity trim/exit, and should never have been excluded. Added the missing NBIS short #1 close (−€176.39, 2026-08-12) and NBIS short #2 close (+€49.60, 2026-09-08) as cash entries; balance corrected from €2,935.30 to **€2,808.51**. Going forward: short opens and margin movements get no cash entry; short closes (buybacks) get a cash entry for their net realized P&L, exactly like a trim/exit.

---

## Account Settings

| Parameter | Value |
| --- | --- |
| Brokerage cost | $5 per transaction |
| Capital gains tax | 21% on all realised gains |
| Position size — normal | ~€1,000 |
| Position size — large | ~€1,500 (high conviction) |
| Position size — small | ~€750 (starter / low conviction) |
| Base currency | EUR |

---

## Structural Risk Notes (Burry Lens)

*See [[finance/models/model-portfolio-management]] for the full framework.*

| Position | Burry Signal | Guidance |
|---|---|---|
| APH | 🟠 AI data centre connector (indirect) | Monitor; normal size; patience override active |
| IQV | 🟢 Healthcare — positive alignment | No Burry conflict; size can be normal or large if thesis intact |
| KLR, GSK, EDEN | 🟢 European value — no signal | No conflict; Grantham also prefers non-US value |
| SAP, ACN | 🟡 Enterprise software — mild indirect | Enterprise-contracted revenue; less circular-financing exposed than hyperscalers |
| ADBE | 🟡 US large-cap tech — mild indirect | Caught in QQQ puts thesis; AI features (Firefly) add narrative risk; creative software moat partially offsets |
| FLUT | 🟢 Burry-aligned long | Flutter Entertainment — Burry long at $100.72 (Jul 24 2026); entered at $92.10 (better price); anti-prediction-markets / sports betting thesis; direct Scion alignment |
| PRX | 🟢 Non-US value / SOTP — no signal | Prosus: international, non-AI, NAV-discount thesis; aligns with Grantham non-US preference and MOI SOTP framework |
| WKL | 🟢 Intangible moat / non-US — no signal | Wolters Kluwer: recurring professional information revenue; no AI infrastructure exposure; Grantham-aligned non-US quality |
| NBIS (closed) | 🟢 Burry/model-aligned short (no longer open) | Nebius Group neocloud short thesis — model framework "Avoid/underweight Nebius" call; both shorts now closed (2026-08-12 at a loss, 2026-08-14→2026-09-08 at a gain); no open NBIS position remains |
| ORCL (put + short) | 🟡 Partially Burry-aligned option/short | Long put $120 strike Dec 2026, plus a 3-share equity short (initiated 2026-08-14) — same bearish overlay on Oracle AI/OCI narrative; OCI revenue +93% YoY (current data contradicts thesis); profitable only if AI capex unwinds materially; put break-even $108.62 |
| PLTR (put) | 🟡 Partially Burry-aligned option | Long put $125 strike, Mar 2027; bearish overlay on Palantir's AI/data-analytics valuation; break-even $116.76; initiated 2026-08-11 |
| LULU, SFM | 🟢 Consumer / no signal | No Burry/AI-infrastructure conflict; ordinary consumer names |
| ZOE | 🟢 Healthcare/animal health — no signal | No Burry conflict; EUR listing, priced via ZTS proxy pending direct quote |
| REL | 🟢 Non-US value / information services — no signal | RELX plc; no AI-infrastructure exposure; Grantham-aligned non-US quality |

**Patience override rule:** A mechanical EXIT signal (RSI < 40 + below 50d SMA + MACD bearish expanding) alone is not sufficient to exit a position with an intact fundamental thesis. Maximum trim: 50%. Reassess within 10 trading days.

---

## Magic Formula

*Greenblatt Magic Formula ranking — updated weekly by scheduled task. Ranks by combined ROIC + Earnings Yield.*

| Ticker | MF Rank | ROIC | Earnings Yield | Last Updated |
|---|---|---|---|---|
| MGNS | 1 | 43.56% | 15.03% | 2026-09-20 |
| DNLM | 2 | 32.5% | 11.9% | 2026-09-20 |
| GSK | 3 | 26.38% | 10.76% | 2026-09-20 |
| ACN | 4 | 27.09% | 10.56% | 2026-09-20 |
| LULU | 5 | 23.7% | 15.89% | 2026-09-20 |
| ADBE | 6 | 36.79% | 7.41% | 2026-09-20 |
| GAW | 7 | 98.6% | 4.82% | 2026-09-20 |
| KLR | 8 | 22.91% | 10.18% | 2026-09-20 |
| WKL | 9 | 24.79% | 8.11% | 2026-09-20 |
| REL | 10 | 23.58% | 5.97% | 2026-09-20 |
| ASML | 11 | 65.98% | 2.26% | 2026-09-20 |
| TER | 12 | 38.24% | 2.38% | 2026-09-20 |
| WOSG | 13 | 11.93% | 8.82% | 2026-09-20 |
| SFM | 14 | 15.15% | 7.9% | 2026-09-20 |
| AVGO | 15 | 30.68% | 2.5% | 2026-09-20 |
| GOOGL | 16 | 15.15% | 5.84% | 2026-09-20 |
| SAP | 17 | 18.2% | 5.21% | 2026-09-20 |
| CPB | 18 | 8.47% | 9.37% | 2026-09-20 |
| PEP | 19 | 13.22% | 5.92% | 2026-09-20 |
| MSFT | 20 | 20.56% | 3.65% | 2026-09-20 |
| APH | 21 | 20.18% | 3.99% | 2026-09-20 |
| PLTR | 22 | 25.6% | 0.71% | 2026-09-20 |
| PRX | 23 | 0.59% | 8.04% | 2026-09-20 |
| IBM | 24 | 13.96% | 4.67% | 2026-09-20 |
| WDAY | 25 | 18.35% | 2.59% | 2026-09-20 |
| AMZN | 26 | 8.48% | 4.96% | 2026-09-20 |
| ORCL | 27 | 11.34% | 4.25% | 2026-09-20 |
| IQV | 28 | 9.8% | 4.08% | 2026-09-20 |
| NOW | 29 | 10.28% | 1.29% | 2026-09-20 |
---

## See Also

- [[finance-overview]]
- [[finance/portfolio-overview]] — equity pension portfolio
- [[finance/models/model-portfolio-management]] — integrated risk framework; Burry/Grantham structural risk layer; position sizing rules; decision matrix
- [[finance/people/person-michael-burry]] — AI circular-financing thesis; rationale for AVGO exit
