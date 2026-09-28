---
title: Trading Portfolio
domain: finance
type: live
tags: [portfolio, trading, positions]
updated: 2026-09-29
---

# Trading Portfolio

> Live page — update whenever positions change. Prices last fetched: **2026-09-29** (Monday 2026-09-28 closes). **2026-09-29 (23:30 post-US-close) review:** Turso `prices` had not yet taken Monday's closes at review time, so the Open Positions price columns below (script-synced from Turso) still show the 09-25 US / 09-28 intraday EU values; the briefing, the Net Value section, Short and Options tables were recomputed from Monday **2026-09-28 closes** pulled directly via yfinance. Moves: META −4.8% to $715.62 (RSI 71.4→60.9, no longer extended), FLUT −7.9% to $76.63 (RSI 26.2), ORCL −3.3% to $132.60 (short +11.5%, put mark up). Exit signals unchanged: **ADBE** (RSI 34.5, $231.01 — second close below ~$236.5 stop reference, day 4, reassess ~2026-10-08), **SFM** (RSI 28.7, −20.9%, day 7, decide ~2026-10-05, hold vs. full exit), **FLUT** (1 share, non-viable). QXO-PB back above SMA50 (Hold); ACN and WKL slipped below SMA50 (Watch); SAP MACD turned bearish (Watch). **No trades executed since 2026-09-21** (re-verified in Turso) — cash **€1,222.86**. Total net value ≈**€18,650**. Candidates: IAG (5/5, top pick), FOUR (4/5), MO (downgraded to 4/5 — MACD crossed bearish 09-28; wait for re-cross) — re-recorded to Pending Trade Ideas (2026-09-29); none executed. Pipeline health OK (magic-formula-screen recovered).

---

## Portfolio Net Value

**Total Net Value: ≈ €18,650** (as of 2026-09-29 review; all names on Monday 2026-09-28 closes via yfinance, except ZOE carried at 09-28 intraday €62.70)

| Component | Value (€) | Basis |
| --- | --- | --- |
| Long equity (market price) | €16,059 | Sum of 18 open long positions at 2026-09-28 closes, converted to EUR (Open Positions table price columns lag — Turso not yet refreshed) |
| Options (market price) | €1,323 | ORCL put ≈€759 + PLTR put ≈€557 + META Oct-09 $885 call ≈€7 — Black-Scholes re-marked on 09-28 closes using Turso's vol inputs (native USD, converted to EUR) |
| Shorts (market − entry, unrealized P&L) | ≈+€46 | ORCL only — underlying $132.60 (09-28 close), +11.53% unrealized gain |
| Cash | €1,223 | Unchanged since 09-21 — no trades executed since (re-verified in Turso 2026-09-29) — see [[#Cash Position\|Cash Position]] |
| **Total Net Value** | **€18,650** | |

> **Methodology note:** Shorts are traded on margin and don't hold cash value themselves while open — only their unrealized P&L (market price vs. entry price) contributes to net worth, per [[#Short Positions\|Short Positions]]. FX used: EUR/USD 1.137, GBP/EUR 1.166 (yfinance, 2026-09-28 close). The Options row's EUR conversion follows the 2026-09-22 fix: `option_marks.mkt_value` from Turso is in the option's native USD, converted here at the current FX rate, with unrealized loss computed against each option's fixed purchase-date Total Cost (€), not re-converted at today's rate. Recompute this section whenever prices in Open Positions / Short Positions / Options Positions are refreshed — it is not automatically kept in sync.

---

## Open Positions

| Company | Ticker | Exchange | Currency | Shares | Entry | Cost Basis | Last Price | Mkt Value | P&L% | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amphenol Corp | APH | NYSE | USD | 14 | $71.75 | $1,004.50 | $84.09 | $1,177.26 | +17.20% | Hold | Trimmed 4 sh @ $167.58 on 2026-08-14 (pre-split, 11→7). **2-for-1 stock split effective 2026-09-03** (7→14 shares, entry $143.50→$71.75, cost basis unchanged). RSI 58.4, above SMA50 ($80.26), MACD bullish — routine Hold. 2026-09-25 US close (latest available; Monday 09-28 US session not yet traded) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** $84.62, RSI 59.2, above SMA50 ($80.56), MACD bullish → Hold. |
| IQVIA Holdings | IQV | NYSE | USD | 3 | $163.99 | $491.97 | $270.37 | $811.11 | +64.87% | 👀 Watch | Trimmed 2 sh @ $239.06 on 2026-08-14, **trimmed 2 more sh @ $264.25 on 2026-09-14** for the free-ride. **✅ now already free-ridden** — cumulative trim proceeds ($2,117.62 across 4 trims) exceed the original $1,967.88 cost basis (12-share lot); all 3 remaining shares at zero effective cost. RSI 60.6, above SMA50 ($247.59), MACD bearish. 2026-09-25 US close (latest available; Monday 09-28 US session not yet traded) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** $270.97, RSI 61.1, above SMA50 ($248.89), MACD bearish → 👀 Watch. |
| Keller Group | KLR | LSE | GBp | 10 | 2,418p | £241.80 | 3,452.90p | £345.29 | +42.80% | Hold | Trimmed 8 sh @ 3,098p on 2026-08-07. RSI 78.3 (overbought), above 50d SMA (3,090.91p), MACD bullish — no Trim signal only because position is 2.6% of book (<20%); **✅ already free-ridden** — gross trim proceeds (£1,326.40) exceed the original £1,209.00 cost basis, all 10 remaining shares at zero effective cost. 2026-09-28 price (European session intraday at time of review, not a close) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** 3,438p, RSI 77.7, above SMA50 (3,091p), MACD bullish → Hold. |
| SAP SE | SAP | XETRA | EUR | 7 | €136.70 | €956.90 | €184.36 | €1,290.52 | +34.86% | 👀 Watch | RSI 53.5, above 50d SMA (€175.76), MACD bearish. Free-ride not yet achievable (would need to sell 6 of 7 sh → only 1 free share). 2026-09-28 price (European session intraday at time of review, not a close) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** €184.02, RSI 53.0, above SMA50 (€175.75), MACD bearish → 👀 Watch. |
| GSK | GSK | LSE | GBp | 52 | 1,939.6p | £1,008.58 | 1,847.00p | £960.44 | -4.77% | 👀 Watch | RSI 45.7, **now below 50d SMA (1,886.67p)**, MACD bullish — slipped from Hold to Watch. Next earnings 2026-10-28. 2026-09-28 price (European session intraday at time of review, not a close) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** 1,860p, RSI 48.1, below SMA50 (1,887p), MACD bullish → 👀 Watch. |
| Edenred SA | EDEN | Euronext | EUR | 45 | €26.53 | €1,193.85 | €27.69 | €1,246.05 | +4.37% | 👀 Watch | RSI 42.2, below 50d SMA (€28.60), MACD bearish. 2026-09-28 price (European session intraday at time of review, not a close) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** €28.16, RSI 47.2, below SMA50 (€28.61), MACD bearish → 👀 Watch. |
| Accenture | ACN | Xetra | EUR | 6 | €141.10 | €846.60 | €156.00 | €936.00 | +10.56% | 👀 Watch | Global IT services & consulting. Correct listing is Xetra/Frankfurt ticker **CSA** (ISIN IE00B4BNMY34, WKN A0YAQA), confirmed 2026-08-04. RSI 47.2, above 50d SMA (€153.05), MACD bearish; pulled back from €162.35 to €156.00 since 09-24. 2026-09-28 price (European session intraday at time of review, not a close) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** ~€153.4 ($174.47 NYSE), RSI 42.9, below SMA50 ($175.95), MACD bearish → 👀 Watch. |
| Adobe | ADBE | NASDAQ | USD | 5 | $249.85 | $1,249.25 | $235.47 | $1,177.35 | -5.76% | 🔴 Exit | Creative & document software; AI integration (Firefly). Mechanical Exit since 2026-09-24 — RSI 36.6 (<40), below SMA50 ($257.42), MACD bearish; price $235.47 now just under the 1.5×ATR stop reference ($236.51). Patience-override applied (Burry full-position/fat-pitch thesis, fundamentals intact) — day 3 of window, reassess by ~2026-10-08, max trim 50% if signal persists. 2026-09-25 US close (latest available; Monday 09-28 US session not yet traded) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** $231.01, RSI 34.5, below SMA50 ($257.29), MACD bearish → 🔴 Exit. |
| Flutter Entertainment | FLUT | NASDAQ | USD | 1 | $92.10 | $92.10 | $83.23 | $83.23 | -9.63% | 🔴 Exit | Sports betting & iGaming global operator; Burry long at $100.72 (Jul 24 2026); anti-prediction-markets thesis; initiated 2026-08-06. **Trimmed 11 sh @ $99.17 on 2026-09-14** — user-designated free-to-ride. Mechanical Exit persists (RSI 31.8, below SMA50 $98.51, MACD bearish) — NOT executed: only 1 sh ($83.23), $5 commission = 6%+ of trade value, far above the 1% minimum-viable-trade threshold; free-to-ride designation stands. Hold. Next earnings 2026-11-12. 2026-09-25 US close (latest available; Monday 09-28 US session not yet traded) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** $76.63, RSI 26.2, below SMA50 ($97.91), MACD bearish → 🔴 Exit. |
| Prosus | PRX | Euronext AMS | EUR | 30 | €41.165 | €1,234.95 | €36.235 | €1,087.05 | -11.98% | 👀 Watch | Dutch internet holding; Tencent stake + growth portfolio at persistent NAV discount; SOTP value thesis. RSI 46.8, **now below SMA50 (€37.82)**, MACD bullish — not an Exit (MACD still bullish, RSI >40) but price fell ~3.5% since 09-24 to a new low vs. entry (−12%). 2026-09-28 price (European session intraday at time of review, not a close) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** €36.02, RSI 45.3, below SMA50 (€37.82), MACD bullish → 👀 Watch. |
| Wolters Kluwer | WKL | Euronext AMS | EUR | 15 | €71.08 | €1,066.20 | €68.62 | €1,029.30 | -3.46% | 👀 Watch | Dutch professional information services (legal, tax, compliance); intangible moat / recurring revenue compounder; initiated 2026-08-05. RSI 51.8, back above SMA50 (€68.02), MACD bearish. 2026-09-28 price (European session intraday at time of review, not a close) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** €67.48, RSI 47.2, below SMA50 (€68.58), MACD bearish → 👀 Watch. |
| Lululemon Athletica | LULU | NASDAQ | USD | 7 | $118.13 | $826.91 | $101.30 | $709.10 | -14.25% | 👀 Watch | Athletic apparel; initiated 2026-08-10, added 5 sh @ $103.00 on 2026-09-08 (blended entry $118.13). Earnings reported 2026-09-03 (miss, drove the crash). **Trimmed 6 of 13 sh (46%) @ $98.06 on 2026-09-21** — net €109 realised loss, executed as the patience-override deadline arrived with no stop-loss in place; remaining 7 sh kept deliberately, Burry's "buy more under $100" trigger satisfied by price. RSI 41.9, below SMA50 ($113.73), MACD bullish — routine Watch. 2026-09-25 US close (latest available; Monday 09-28 US session not yet traded) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** $100.58, RSI 41.0, below SMA50 ($113.41), MACD bullish → 👀 Watch. |
| Sprouts Farmers Market | SFM | NASDAQ | USD | 10 | $80.16 | $801.60 | $62.49 | $624.90 | -22.04% | 🔴 Exit | Specialty grocery; initiated 2026-08-21. RSI 25.8 (deeply oversold), below SMA50 ($78.33), MACD bearish — mechanical Exit persists (re-triggered 2026-09-21), now −22% and still falling. Patience-override: day 6 of window, reassess by ~2026-10-05. **Note: a 50% trim (5 sh ≈ $312) is below the ~$500 minimum-viable-trade size** — at the deadline the realistic choices are hold or full exit (10 sh ≈ $625). Next earnings 2026-10-28. 2026-09-25 US close (latest available; Monday 09-28 US session not yet traded) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** $63.45, RSI 28.7, below SMA50 ($78.08), MACD bearish → 🔴 Exit. |
| Zoetis Inc | ZOE | Xetra | EUR | 15 | €63.22 | €948.30 | €62.70 | €940.50 | -0.82% | 👀 Watch | Animal health pharma; European (EUR) listing — primary US listing is NYSE:ZTS, price here estimated via ZTS close ÷ EUR/USD, **not a direct EUR-listing quote**. RSI 46.3, below SMA50 (€64.75), MACD bearish. 2026-09-28 price (European session intraday at time of review, not a close) |
| RELX plc | REL | LSE | GBp | 22 | 2,593.27p | £570.52 | 2,523.86p | £555.25 | -2.68% | 👀 Watch | Information & analytics / events group; initiated 2026-08-14, added 2 sh @ 2,576p on 2026-09-08 (blended entry 2,593.27p). RSI 47.9, below 50d SMA (2,580.74p), MACD bearish — recovered from 2,450p to 2,523.86p since 09-24. 2026-09-28 price (European session intraday at time of review, not a close) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** 2,480p, RSI 44.2, below SMA50 (2,580p), MACD bearish → 👀 Watch. |
| Meta Platforms | META | NASDAQ | USD | 2 | $745.85 | $1,491.70 | $751.66 | $1,503.32 | +0.78% | Hold | **Opened 2026-09-21** (entered directly, not via a prior briefing recommendation). Social media / digital advertising; heavy AI capex — direct exposure to the AI circular-financing narrative (see Burry Lens below). RSI 71.4 (still overbought, easing from 77), above SMA50 ($615.32), MACD bullish — no Trim signal (position ~8% of book, <20% threshold). 2026-09-25 US close (latest available; Monday 09-28 US session not yet traded) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** $715.62, RSI 60.9, above SMA50 ($617.14), MACD bullish → Hold. |
| Ero Copper Corp | ERO | NYSE | USD | 30 | $34.81 | $1,044.30 | $37.87 | $1,136.10 | +8.79% | Hold | **Opened 2026-09-21.** Brazil-focused copper miner; commodity/materials exposure, non-US. RSI 59.0, above SMA50 ($33.26), MACD flipped bullish — Watch→Hold. 2026-09-25 US close (latest available; Monday 09-28 US session not yet traded) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** $37.41, RSI 57.2, above SMA50 ($33.53), MACD bullish → Hold. |
| QXO Inc, Series B Preferred | QXO-PB | NYSE | USD | 30 | $38.30 | $1,149.00 | $41.27 | $1,238.10 | +7.75% | Hold | **Opened 2026-09-21.** Preferred shares of QXO Inc (building-products distribution, Brad Jacobs); income/preferred structure rather than common equity — sector classification best-effort, confirm with Mike. RSI 55.1, fractionally below SMA50 ($41.33), MACD bullish. 2026-09-25 US close (latest available; Monday 09-28 US session not yet traded) **2026-09-28 close (yfinance; Last Price column still Turso 09-25/intraday):** $42.52, RSI 59.3, above SMA50 ($41.46), MACD bullish → Hold. |

> Prices in native currency. LSE positions in pence (GBp); cost basis and Mkt Value in GBP. EUR positions (SAP, EDEN, ACN, PRX, WKL, ZOE) in EUR. **US names (APH/IQV/ADBE/FLUT/LULU/SFM/META/ERO/QXO-PB) carry the 2026-09-25 close; EU/UK names (KLR/SAP/GSK/EDEN/ACN/PRX/WKL/ZOE/REL) carry a 2026-09-28 intraday price, not a close.**
> **Active alerts (2026-09-29, on 09-28 closes):** ADBE — mechanical Exit (RSI 34.5, $231.01), second close below its ~$236.5 1.5×ATR stop reference, patience day 4, reassess ~2026-10-08. SFM — Exit, RSI 28.7, −20.9%, day 7, decide ~2026-10-05 (50% trim below min trade size → hold vs. full exit). FLUT — Exit, −7.9% Monday to $76.63 (RSI 26.2), 1 share uneconomic to sell; free-to-ride stands. ACN/WKL — slipped below SMA50 (Watch); SAP — MACD bearish (Watch); QXO-PB back above SMA50 (Hold). IQV/KLR — already free-ridden; KLR RSI 77.7. META — fell 4.8% to $715.62, RSI 60.9 (no longer extended); the $885 Oct-09 call is ~$0.08 est. — effectively worthless, let it lapse.

---

## Short Positions

Active short equity positions (profit if price falls below entry; loss if price rises above entry).

| Company | Ticker | Exchange | Currency | Shares Short | Entry | Short Value | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | NYSE | USD | 3 | $149.89 | $449.67 | ✅ Hold | Equity short complementing the existing ORCL long put below; bearish on Oracle AI/OCI narrative (OCI +93% YoY — short profitable only if AI infrastructure thesis unwinds); initiated 2026-08-14. 2026-09-28 US close ($132.60) — unrealized +11.53% (+$51.87, ~+€46), gain vs. entry; RSI 37.3, below SMA50 ($142.37), MACD bearish — trend in the short's favour |

> Margin requirement (broker collateral, not a cash movement — see [[#Cash Position|Cash Position]] note): ORCL ~€362 (approx., notional $411 converted at ≈1.13766 EUR/USD, per Turso 2026-09-28 pull). Profit if price falls below entry; loss if it rises. **NBIS short fully closed 2026-09-08** (bought back 3 sh @ $246.84, gain — see [[#Closed Positions|Closed Positions]]); no NBIS short position remains open.

---

## Options Positions

| Underlying | Ticker | Type | Strike | Expiry | Contracts | Shares | Premium Paid | Total Cost (€) | Current Price | Mkt Value (€) | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | Long Put | $120 | 2026-12-18 | 1 | 100 | $11.38/sh | €993 | ~$8.63/sh (est.) | ~€759 (est.) | ✅ Hold | Right to sell ORCL at $120 by Dec 2026; bearish on Oracle AI/OCI narrative (OCI +93% YoY — put profitable only if AI infrastructure thesis accelerates); break-even $108.62; initiated 2026-08-06. ORCL $132.60 (2026-09-28 close), down from $150.15 entry — ~22% above breakeven, still OTM but improving. **Black-Scholes re-mark on 09-28 close (Turso vol 61.7%)** — no live options chain available to cross-check. Unrealized loss ≈−€234 |
| Palantir | PLTR | Long Put | $125 | 2027-03-19 | 1 | 100 | $8.24/sh | €719 | ~$6.34/sh (est.) | ~€557 (est.) | ✅ Hold | Right to sell PLTR at $125 by Mar 2027; break-even $116.76; initiated 2026-08-11. PLTR $187.48 (2026-09-28 close), 61% above breakeven, deep OTM, long-dated — monitor only. **Black-Scholes re-mark on 09-28 close (Turso vol 66.1%)** — model estimate, not a live option-chain quote. Unrealized loss ≈−€162 |
| Meta Platforms | META | Long Call | $885 | 2026-10-09 | 1 | 100 | $3.08/sh | €269 | ~$0.08/sh (est.) | ~€7 (est.) | ✅ Hold | **New position, opened 2026-09-21** (entered directly, not via a prior briefing recommendation). Right to buy META at $885 by Oct 2026; bullish overlay on top of the existing META common-stock position above; break-even $888.08; META $715.62 (2026-09-28 close) — ~19% below breakeven, deep OTM, expires 2026-10-09 (8 trading days — effectively worthless; selling not worth the $5 commission, let it lapse). **Black-Scholes re-mark on 09-28 close** — no live options chain available to cross-check; unrealized loss ≈−€262 on premium paid |

> Long puts: profitable if the underlying closes below break-even at expiry (the META call is the inverse — profitable above breakeven). Maximum loss = premium paid (ORCL €993, PLTR €719, META €269). Current combined mark-to-market value: ≈€1,323 (Black-Scholes estimate) across all three, re-derived from 2026-09-28 underlying closes, not directly quoted from a live options chain. EUR conversion follows the 2026-09-22 fix: `option_marks.mkt_value` from Turso is in the option's native currency (USD for all three), converted at the current FX rate for the Mkt Value (€) column; unrealized loss is Mkt Value (€) minus each option's fixed purchase-date Total Cost (€), not a re-conversion of the raw USD P&L.

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
| 2026-09-21 | LULU | Trim | 6 | $118.13 | $98.06 | −$120.42 | −€104.90 | €0 | −€4.37 | **−€109.27** | Patience-override deadline reached, no stop-loss; trimmed 46% (within 50% cap), remaining 7 sh kept — Burry's "buy under $100" trigger now satisfied by price |

---

### Position Summary

Realised P&L grouped by position (trims + full exits combined).

| Ticker | Transactions | Status | Shares Sold | Realised Gross (€) | CGT (€) | Commissions (€) | Realised Net (€) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IQV | 4 trims | Open (3 remain) — ✅ free-ridden | 9 | +€559.52 | −€117.49 | −€17.48 | **+€424.55** |
| KLR | 3 trims | Open (10 remain) | 40 | +€420.98 | −€88.41 | −€13.11 | **+€319.46** |
| APH | 1 trim | Open (14 remain, post-split) | 4 | +€84.49 | −€17.74 | −€4.37 | **+€62.38** |
| FLUT | 1 trim | Open (1 remain, free-to-ride) | 11 | +€67.08 | −€14.09 | −€4.37 | **+€48.62** |
| LULU | 1 trim | Open (7 remain) | 6 | −€104.90 | €0 | −€4.37 | **−€109.27** |
| WOSG | 1 trim + full exit | Closed | 200 | +€6.35 | −€7.28 | −€8.74 | **−€9.67** |
| DNLM | Full exit | Closed | 90 | −€25.16 | €0 | −€4.37 | **−€29.53** |
| CPB | Full exit | Closed | 60 | −€40.76 | €0 | −€4.37 | **−€45.13** |
| MGNS | Full exit | Closed | 18 | −€35.44 | €0 | −€4.37 | **−€39.81** |
| AVGO | Full exit | Closed | 4 | −€55.54 | €0 | −€4.37 | **−€59.91** |
| DKNG | Full exit | Closed | 45 | −€80.13 | €0 | −€4.37 | **−€84.50** |
| NBIS (short #1) | Full close | Closed | 5 | −€172.02 | €0 | −€4.37 | **−€176.39** |
| NBIS (short #2) | Full close | Closed | 3 | +€68.32 | −€14.35 | −€4.37 | **+€49.60** |
| **TOTAL** | **19** | | **495** | **€692.79** | **−€259.36** | **−€83.03** | **€350.40** |

---

### YTD Summary

| Metric | Value |
| --- | --- |
| Total gross P&L (€) | €692.79 |
| Total CGT paid (€) | €259.36 |
| Total commissions (€) | €83.03 |
| **Net realised gains (€)** | **€350.40** |
| Transactions | 19 |
| Positions fully closed | 8 (MGNS, AVGO, DKNG, NBIS short #1, WOSG, DNLM, CPB, NBIS short #2) |
| Positions partially trimmed | 5 (IQV, KLR, APH, FLUT, LULU) |

---

## Cash Position

| Currency | Amount | Movement Log |
| --- | --- | --- |
| EUR | **€1,222.86** | €3,000 start + €517 IQV trim (07-09) + €561 KLR trim (07-11) − €961 SAP buy (07-14) − €1,157 CPB buy (07-14) − €1,147 GSK buy (07-16) + €657 KLR trim (07-23) + €936 MGNS exit (07-27) − €1,198 EDEN buy (07-23) + €423 IQV trim (07-28) + €1,299 AVGO exit (07-29) + €6,000 deposit (07-31) − €851 ACN buy (07-31) − €50 GSK add (07-31) − €1,100 ADBE buy (07-31) − €930 DKNG buy (07-31) − €1,239 PRX buy (08-03) − €1,071 WKL buy (08-05) + €842 DKNG exit (08-06) − €974 FLUT buy (08-06) − €992 ORCL put (08-06) + €286 KLR trim (08-07) − €176 NBIS short #1 close, realized loss (08-12) − €900 LULU buy (08-10) − €953 ZOE buy (08-10) − €727 PLTR put (08-11) + €415 IQV trim (08-14) + €584 APH trim (08-14) + €554 WOSG trim (08-14) − €613 REL buy (08-14) − €707 SFM buy (08-21) − €447 LULU add (09-08) − €64 REL add (09-08) + €1,049 WOSG exit (09-08) + €809 DNLM exit (09-08) + €1,085 CPB exit (09-08) + €50 NBIS short #2 close, realized gain (09-08) + €937 FLUT trim (09-14) + €452 IQV trim (09-14) + €508.16 LULU trim, net proceeds (09-21) − €1,300.76 META buy, 2 sh (09-21) − €910.63 ERO buy, 30 sh (09-21) − €1,001.93 QXO-PB buy, 30 sh (09-21) − €268.58 META Oct-09 $885 call, premium paid (09-21) |

> **2026-09-22: four 09-21 cash movements added retroactively** (META buy, ERO buy, QXO-PB buy, META call premium) — these trades were placed directly into Turso on 2026-09-21 but never reflected on this page or that day's briefing; discovered and backfilled during this review, not new activity today.
>
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
| META | 🔴 Direct AI-infrastructure / circular-financing exposure | Meta Platforms — among the largest AI capex spenders (Reality Labs + AI infra buildout); RSI 71.4 extended on top of the exposure; the most Burry-adverse name in the book alongside APH/SAP/ACN/ADBE's indirect exposure; also carries a bullish $885 Oct call on the same name (compounds the exposure rather than hedging it) |
| ERO | 🟢 Materials / commodities — no signal | Ero Copper Corp; Brazil-focused copper miner, non-US, commodity exposure; broadly Grantham-aligned (non-US, real-asset) |
| QXO-PB | 🟡 Industrials / building products (preferred) — no signal | QXO Inc Series B Preferred; no AI-infrastructure exposure identified; preferred structure changes the risk/return profile vs. common equity — worth Mike confirming sector/thesis detail this page doesn't yet capture |

**Patience override rule:** A mechanical EXIT signal (RSI < 40 + below 50d SMA + MACD bearish expanding) alone is not sufficient to exit a position with an intact fundamental thesis. Maximum trim: 50%. Reassess within 10 trading days.

---

## Magic Formula

*Greenblatt Magic Formula ranking — updated weekly by scheduled task. Ranks by combined ROIC + Earnings Yield.*

| Ticker | MF Rank | ROIC | Earnings Yield | Last Updated |
|---|---|---|---|---|
| MGNS | 1 | 43.56% | 15.17% | 2026-09-28 |
| DNLM | 2 | 32.5% | 11.61% | 2026-09-28 |
| GSK | 3 | 26.38% | 10.89% | 2026-09-28 |
| ACN | 4 | 27.09% | 10.88% | 2026-09-28 |
| LULU | 5 | 23.7% | 15.41% | 2026-09-28 |
| ADBE | 6 | 36.79% | 7.83% | 2026-09-28 |
| GAW | 7 | 98.6% | 4.84% | 2026-09-28 |
| KLR | 8 | 22.91% | 9.63% | 2026-09-28 |
| WKL | 9 | 24.79% | 8.06% | 2026-09-28 |
| ERO | 10 | 18.48% | 8.51% | 2026-09-28 |
| ASML | 11 | 65.98% | 2.16% | 2026-09-28 |
| SFM | 12 | 15.15% | 8.69% | 2026-09-28 |
| TER | 13 | 38.24% | 2.22% | 2026-09-28 |
| WOSG | 14 | 11.93% | 8.71% | 2026-09-28 |
| AVGO | 15 | 30.68% | 2.53% | 2026-09-28 |
| SAP | 16 | 18.2% | 5.16% | 2026-09-28 |
| GOOGL | 17 | 15.15% | 5.89% | 2026-09-28 |
| CPB | 18 | 8.47% | 9.41% | 2026-09-28 |
| PEP | 19 | 13.22% | 5.97% | 2026-09-28 |
| APH | 20 | 20.18% | 3.7% | 2026-09-28 |
| MSFT | 21 | 20.56% | 3.49% | 2026-09-28 |
| PLTR | 22 | 25.6% | 0.66% | 2026-09-28 |
| IBM | 23 | 13.96% | 4.73% | 2026-09-28 |
| WDAY | 24 | 18.35% | 2.65% | 2026-09-28 |
| PRX | 25 | 0.59% | 7.99% | 2026-09-28 |
| META | 26 | 17.08% | 3.56% | 2026-09-28 |
| AMZN | 27 | 8.48% | 5.04% | 2026-09-28 |
| ORCL | 28 | 11.34% | 4.49% | 2026-09-28 |
| IQV | 29 | 9.8% | 4.04% | 2026-09-28 |
| NOW | 30 | 10.28% | 1.29% | 2026-09-28 |
---

## See Also

- [[finance-overview]]
- [[finance/portfolio-overview]] — equity pension portfolio
- [[finance/models/model-portfolio-management]] — integrated risk framework; Burry/Grantham structural risk layer; position sizing rules; decision matrix
- [[finance/people/person-michael-burry]] — AI circular-financing thesis; rationale for AVGO exit
