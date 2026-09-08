---
title: Trading Portfolio
domain: finance
type: live
tags: [portfolio, trading, positions]
updated: 2026-09-08
---

# Trading Portfolio

> Live page — update whenever positions change. **2026-09-08, evening update**: no new trades this pass — prices refreshed for all 15 open long positions (ZOE and REL priced live for the first time in several sessions; all others refreshed from 2026-09-07 carries). ADBE, GSK, PRX, SFM, LULU stand out: ADBE reports earnings 2026-09-10 (2 days out); GSK and PRX continue their mechanical Exit signals from this morning (patience-override still applies); SFM crossed into a **new** mechanical Exit signal (RSI 39.7, below 50d SMA, MACD bearish) that wasn't present this morning; LULU remains the top portfolio risk post its 09-03 earnings miss. ORCL short and both options also refreshed — ORCL rallied to $162.52, pushing both the equity short and the long put further against thesis. Cash unchanged at **€2,808.51** (no trades today). Total net value now ≈**€18,440** (down from €18,729 this morning — LULU/GSK/PRX/SFM declines plus ORCL rallying against the short/put overlay) — see [[#Portfolio Net Value|Portfolio Net Value]]. 18 open positions (15 long equity, 1 short, 2 options).

---

## Portfolio Net Value

**Total Net Value: ≈ €18,440** (as of 2026-09-08, evening refresh)

| Component | Value (€) | Basis |
| --- | --- | --- |
| Long equity (market price) | €14,666 | Sum of Mkt Value across all 15 open long positions, converted to EUR at live 2026-09-08 rates. ZOE and REL priced live (ZOE via ZTS proxy) for the first time in several sessions |
| Options (market price) | €999 | ORCL put €365 + PLTR put €632 — refreshed today; ORCL put decayed further (ORCL rallied to $162.52), PLTR put rose as PLTR pulled back to $170.30 |
| Shorts (market − entry, unrealized P&L) | −€33 | ORCL only — refreshed today; ORCL rallied from $158.78 to $162.52, worsening the unrealized loss |
| Cash | €2,809 | Unchanged — no trades today, see [[#Cash Position\|Cash Position]] |
| **Total Net Value** | **€18,440** | |

> **Methodology note:** Shorts are traded on margin and don't hold cash value themselves while open — only their unrealized P&L (market price vs. entry price) contributes to net worth, per [[#Short Positions\|Short Positions]]. FX used: EUR/USD 1.162791, EUR/GBP 0.859 (2026-09-08 live rates). ZOE has no direct EUR-listing feed and is priced via NYSE:ZTS close converted at the EUR/USD rate — confirmed methodology (this approach reproduced the prior session's price to within 0.05%). The drop from €18,729 (this morning) to €18,440 reflects real price moves: LULU, GSK, PRX and SFM all declined further, and ORCL's rally to $162.52 hurt both the equity short and the long put mark. No commissions or CGT this pass — no trades executed. Recompute this section whenever prices in Open Positions / Short Positions / Options Positions are refreshed — it is not automatically kept in sync.

---

## Open Positions

| Company | Ticker | Exchange | Currency | Shares | Entry | Cost Basis | Last Price | Mkt Value | P&L% | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amphenol Corp | APH | NYSE | USD | 14 | $71.75 | $1,004.50 | $81.76 | $1,144.64 | +13.95% | ✅ Hold | Trimmed 4 sh @ $167.58 on 2026-08-14 (pre-split, 11→7). **2-for-1 stock split effective 2026-09-03** (7→14 shares, entry $143.50→$71.75, cost basis unchanged). RSI 52.8, above SMA50 ($80.51), MACD bullish |
| IQVIA Holdings | IQV | NYSE | USD | 5 | $163.99 | $819.95 | $259.21 | $1,296.05 | +58.06% | 👀 Watch | Trimmed 2 sh @ $239.06 on 2026-08-14. RSI 59.2 (down from 69.6), above SMA50 ($231.49), MACD bearish; free-ride still available — sell 2 of 5 shares recovers the full remaining cost basis ($378.76 of the original 12-share lot) — RSI now below the 65 execute threshold, **monitor, execute at next RSI extension** |
| Keller Group | KLR | LSE | GBp | 10 | 2,418p | £241.80 | 2,968.00p | £296.80 | +22.75% | 👀 Watch | Trimmed 8 sh @ 3,098p on 2026-08-07. RSI 44.4, below 50d SMA (3,089.46p), MACD bullish; **✅ already free-ridden** — gross trim proceeds (£1,326.40) exceed the original £1,209.00 cost basis, all 10 remaining shares at zero effective cost |
| SAP SE | SAP | XETRA | EUR | 7 | €136.70 | €956.90 | €181.70 | €1,271.90 | +32.92% | 👀 Watch | RSI 54.7, above 50d SMA (€162.23), MACD bearish |
| GSK | GSK | LSE | GBp | 52 | 1,939.6p | £1,008.58 | 1,796.50p | £934.18 | -7.38% | 🔴 Exit | RSI 34.1 (deteriorating from 39.8), below 50d SMA (1,916.63p), MACD bearish — mechanical Exit continues from 09-08 trigger; no thesis-breaking catalyst identified, next earnings 2026-10-28; patience-override applied — hold, reassess by ~2026-09-22 |
| Edenred SA | EDEN | Euronext | EUR | 45 | €26.53 | €1,193.85 | €28.61 | €1,287.45 | +7.84% | 👀 Watch | RSI 47.4, above 50d SMA (€27.39), MACD bearish |
| Accenture | ACN | Xetra | EUR | 6 | €141.10 | €846.60 | €153.75 | €922.50 | +8.97% | 👀 Watch | Global IT services & consulting. Correct listing is Xetra/Frankfurt ticker **CSA** (ISIN IE00B4BNMY34, WKN A0YAQA), confirmed 2026-08-04. RSI 49.0, above 50d SMA (€141.84), MACD bearish |
| Adobe | ADBE | NASDAQ | USD | 5 | $249.85 | $1,249.25 | $257.26 | $1,286.30 | +2.97% | 👀 Watch | Creative & document software; AI integration (Firefly). RSI 44.2, above SMA50 ($249.94), MACD bearish — **earnings 2026-09-10 (2 days out)**, no pre-earnings de-risking planned |
| Flutter Entertainment | FLUT | NASDAQ | USD | 12 | $92.10 | $1,105.20 | $100.70 | $1,208.40 | +9.34% | 👀 Watch | Sports betting & iGaming global operator; Burry long at $100.72 (Jul 24 2026); entered at better price; anti-prediction-markets thesis; initiated 2026-08-06. RSI 50.5, below SMA50 ($102.51), MACD bullish — reassess deadline 2026-09-10 (2 days out); next earnings not until 2026-11-12 |
| Prosus | PRX | Euronext AMS | EUR | 30 | €41.165 | €1,234.95 | €36.23 | €1,086.90 | -11.99% | 🔴 Exit | Dutch internet holding; Tencent stake + growth portfolio at persistent NAV discount; SOTP value thesis. RSI 37.2, below 50d SMA (€38.76), MACD bearish — mechanical Exit continues from 09-08 trigger; SOTP thesis intact, patience-override applied — hold, reassess by ~2026-09-22 |
| Wolters Kluwer | WKL | Euronext AMS | EUR | 15 | €71.08 | €1,066.20 | €67.26 | €1,008.90 | -5.37% | 👀 Watch | Dutch professional information services (legal, tax, compliance); intangible moat / recurring revenue compounder; initiated 2026-08-05. RSI 47.4, above SMA50 (€65.32), MACD bearish |
| Lululemon Athletica | LULU | NASDAQ | USD | 13 | $118.13 | $1,535.72 | $103.19 | $1,341.47 | -12.65% | 🔴 Exit | Athletic apparel; initiated 2026-08-10, added 5 sh @ $103.00 on 2026-09-08 (averaging down post-crash — new blended entry $118.13, was $127.59). Earnings reported 2026-09-03 (miss, drove the crash). RSI 35.2, below SMA50 ($118.11, essentially flat), MACD bearish — mechanical Exit continues; patience-override applied (Burry's largest position, plans to buy more aggressively under $100, "well under IV15") — hold, no stop-loss in place, flagged as top portfolio risk |
| Sprouts Farmers Market | SFM | NASDAQ | USD | 10 | $80.16 | $801.60 | $76.11 | $761.10 | -5.05% | 🔴 Exit | Specialty grocery; initiated 2026-08-21. RSI 39.7, below SMA50 ($81.29), MACD bearish — **NEW mechanical Exit signal today** (was Watch RSI 49.1 yesterday); no catalyst identified, next earnings not until 2026-10-28; patience-override applied — hold, reassess by ~2026-09-22 |
| Zoetis Inc | ZOE | Xetra | EUR | 15 | €63.22 | €948.30 | €63.26 | €948.90 | +0.06% | 👀 Watch | Animal health pharma; European (EUR) listing — primary US listing is NYSE:ZTS, price here estimated via ZTS close ($73.56) ÷ EUR/USD, **not a direct EUR-listing quote**. RSI 42.5, below SMA50 (~€64.84 proxy), MACD bearish. Initiated 2026-08-10 |
| RELX plc | REL | LSE | GBp | 22 | 2,593.27p | £570.52 | 2,551.00p | £561.22 | -1.63% | 👀 Watch | Information & analytics / events group; initiated 2026-08-14, added 2 sh @ 2,576p on 2026-09-08 (new blended entry 2,593.27p, was 2,595p). RSI 46.1, essentially at 50d SMA (2,553.24p), MACD bearish |

> Prices in native currency. LSE positions in pence (GBp); cost basis and Mkt Value in GBP. EUR positions (SAP, EDEN, ACN, PRX, WKL, ZOE) in EUR. Prices last fetched: **2026-09-08** (evening refresh, all 15 positions live).
> **Active alerts:** LULU — no stop-loss, mechanical Exit continues post 09-03 earnings miss, top portfolio risk. ADBE — earnings 2026-09-10 (2 days out). GSK, PRX — mechanical Exit continues from this morning's trigger, patience-override applied, reassess by ~2026-09-22. SFM — **NEW mechanical Exit signal today** (RSI 39.7), patience-override applied, reassess by ~2026-09-22. IQV — free-ride sell (2 of 5 shares) available but RSI (59.2) now below the 65 execute threshold — monitor. KLR — confirmed **already free-ridden**, all 10 shares at zero effective cost. FLUT — reassessment deadline 2026-09-10 (2 days out). ORCL short/put — both losing ground as ORCL rallied to $162.52.

---

## Short Positions

Active short equity positions (profit if price falls below entry; loss if price rises above entry).

| Company | Ticker | Exchange | Currency | Shares Short | Entry | Short Value | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | NYSE | USD | 3 | $149.89 | $449.67 | ✅ Hold | Equity short complementing the existing ORCL long put below; bearish on Oracle AI/OCI narrative (OCI +93% YoY — short profitable only if AI infrastructure thesis unwinds); initiated 2026-08-14. Refreshed 2026-09-08 — ORCL now $162.52 (up from $158.78) — unrealized -8.43% (~-$37.89, ~-€32.59), thesis under continued pressure |

> Margin requirement (broker collateral, not a cash movement — see [[#Cash Position|Cash Position]] note): ORCL ~€394 (approx., notional value converted at ≈0.877 USD/EUR). Profit if price falls below entry; loss if it rises. **NBIS short fully closed 2026-09-08** (bought back 3 sh @ $246.84, gain — see [[#Closed Positions|Closed Positions]]); no NBIS short position remains open.

---

## Options Positions

| Underlying | Ticker | Type | Strike | Expiry | Contracts | Shares | Premium Paid | Total Cost (€) | Current Price | Mkt Value (€) | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | Long Put | $120 | 2026-12-18 | 1 | 100 | $11.38/sh | €992 | $4.25/sh | €365 | ✅ Hold | Right to sell ORCL at $120 by Dec 2026; bearish on Oracle AI/OCI narrative (OCI +93% YoY — put profitable only if AI infrastructure thesis accelerates); break-even $108.62; initiated 2026-08-06. ORCL now $162.52 (2026-09-08), 50% above breakeven — deep OTM, decayed further as ORCL rallied — no action. Live options chain via yfinance 2026-09-08 |
| Palantir | PLTR | Long Put | $125 | 2027-03-19 | 1 | 100 | $8.24/sh | €727 | $7.35/sh | €632 | ✅ Hold | Right to sell PLTR at $125 by Mar 2027; break-even $116.76; initiated 2026-08-11. PLTR now $170.30 (2026-09-08), down from $174.33 — 46% above breakeven, deep OTM, long-dated, but put value rose as PLTR pulled back further — monitor only. Live options chain via yfinance 2026-09-08 |

> Long puts: profitable if the underlying closes below break-even at expiry. Maximum loss = premium paid (ORCL €992, PLTR €727). Current combined mark-to-market value: €997 (down from €1,719 paid) — ORCL put continued decaying as ORCL rallied to $162.52, offset by PLTR's put rising as PLTR pulled back to $170.30.

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

---

### Position Summary

Realised P&L grouped by position (trims + full exits combined).

| Ticker | Transactions | Status | Shares Sold | Realised Gross (€) | CGT (€) | Commissions (€) | Realised Net (€) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IQV | 3 trims | Open (5 remain) | 7 | +€386.55 | −€81.17 | −€13.11 | **+€292.27** |
| KLR | 3 trims | Open (10 remain) | 40 | +€420.98 | −€88.41 | −€13.11 | **+€319.46** |
| APH | 1 trim | Open (14 remain, post-split) | 4 | +€84.49 | −€17.74 | −€4.37 | **+€62.38** |
| WOSG | 1 trim + full exit | Closed | 200 | +€6.35 | −€7.28 | −€8.74 | **−€9.67** |
| DNLM | Full exit | Closed | 90 | −€25.16 | €0 | −€4.37 | **−€29.53** |
| CPB | Full exit | Closed | 60 | −€40.76 | €0 | −€4.37 | **−€45.13** |
| MGNS | Full exit | Closed | 18 | −€35.44 | €0 | −€4.37 | **−€39.81** |
| AVGO | Full exit | Closed | 4 | −€55.54 | €0 | −€4.37 | **−€59.91** |
| DKNG | Full exit | Closed | 45 | −€80.13 | €0 | −€4.37 | **−€84.50** |
| NBIS (short #1) | Full close | Closed | 5 | −€172.02 | €0 | −€4.37 | **−€176.39** |
| NBIS (short #2) | Full close | Closed | 3 | +€68.32 | −€14.35 | −€4.37 | **+€49.60** |
| **TOTAL** | **16** | | **476** | **€557.64** | **−€208.95** | **−€69.92** | **€278.77** |

---

### YTD Summary

| Metric | Value |
| --- | --- |
| Total gross P&L (€) | €557.64 |
| Total CGT paid (€) | €208.95 |
| Total commissions (€) | €69.92 |
| **Net realised gains (€)** | **€278.77** |
| Transactions | 16 |
| Positions fully closed | 8 (MGNS, AVGO, DKNG, NBIS short #1, WOSG, DNLM, CPB, NBIS short #2) |
| Positions partially trimmed | 3 (IQV, KLR, APH) |

---

## Cash Position

| Currency | Amount | Movement Log |
| --- | --- | --- |
| EUR | **€2,808.51** | €3,000 start + €517 IQV trim (07-09) + €561 KLR trim (07-11) − €961 SAP buy (07-14) − €1,157 CPB buy (07-14) − €1,147 GSK buy (07-16) + €657 KLR trim (07-23) + €936 MGNS exit (07-27) − €1,198 EDEN buy (07-23) + €423 IQV trim (07-28) + €1,299 AVGO exit (07-29) + €6,000 deposit (07-31) − €851 ACN buy (07-31) − €50 GSK add (07-31) − €1,100 ADBE buy (07-31) − €930 DKNG buy (07-31) − €1,239 PRX buy (08-03) − €1,071 WKL buy (08-05) + €842 DKNG exit (08-06) − €974 FLUT buy (08-06) − €992 ORCL put (08-06) + €286 KLR trim (08-07) − €176 NBIS short #1 close, realized loss (08-12) − €900 LULU buy (08-10) − €953 ZOE buy (08-10) − €727 PLTR put (08-11) + €415 IQV trim (08-14) + €584 APH trim (08-14) + €554 WOSG trim (08-14) − €613 REL buy (08-14) − €707 SFM buy (08-21) − €447 LULU add (09-08) − €64 REL add (09-08) + €1,049 WOSG exit (09-08) + €809 DNLM exit (09-08) + €1,085 CPB exit (09-08) + €50 NBIS short #2 close, realized gain (09-08) |

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
| MGNS | 1 | 43.56% | 15.08% | 2026-09-06 |
| DNLM | 2 | 39.03% | 10.56% | 2026-09-06 |
| ADBE | 3 | 60.74% | 8.62% | 2026-09-06 |
| GSK | 4 | 26.38% | 10.91% | 2026-09-06 |
| ACN | 5 | 27.09% | 10.25% | 2026-09-06 |
| LULU | 6 | 23.7% | 15.51% | 2026-09-06 |
| GAW | 7 | 98.6% | 4.61% | 2026-09-06 |
| KLR | 8 | 22.91% | 10.47% | 2026-09-06 |
| WKL | 9 | 24.79% | 8.04% | 2026-09-06 |
| MSFT | 10 | 26.18% | 4.13% | 2026-09-06 |
| REL | 11 | 23.58% | 5.74% | 2026-09-06 |
| ASML | 12 | 65.98% | 2.2% | 2026-09-06 |
| PLTR | 13 | 363.8% | 0.64% | 2026-09-06 |
| PEP | 14 | 19.38% | 6.75% | 2026-09-06 |
| TER | 15 | 38.24% | 2.48% | 2026-09-06 |
| AVGO | 16 | 30.54% | 2.49% | 2026-09-06 |
| WOSG | 17 | 11.93% | 8.5% | 2026-09-06 |
| SFM | 18 | 15.15% | 7.07% | 2026-09-06 |
| GOOGL | 19 | 24.93% | 3.67% | 2026-09-06 |
| SAP | 20 | 18.2% | 5.07% | 2026-09-06 |
| CPB | 21 | 8.47% | 9.22% | 2026-09-06 |
| APH | 22 | 20.18% | 3.75% | 2026-09-06 |
| IBM | 23 | 13.96% | 4.58% | 2026-09-06 |
| PRX | 24 | 0.59% | 7.77% | 2026-09-06 |
| WDAY | 25 | 18.35% | 2.57% | 2026-09-06 |
| ORCL | 26 | 11.48% | 3.78% | 2026-09-06 |
| AMZN | 27 | 11.94% | 3.21% | 2026-09-06 |
| IQV | 28 | 9.8% | 4.07% | 2026-09-06 |
| NOW | 29 | 10.28% | 1.24% | 2026-09-06 |
---

## See Also

- [[finance-overview]]
- [[finance/portfolio-overview]] — equity pension portfolio
- [[finance/models/model-portfolio-management]] — integrated risk framework; Burry/Grantham structural risk layer; position sizing rules; decision matrix
- [[finance/people/person-michael-burry]] — AI circular-financing thesis; rationale for AVGO exit
