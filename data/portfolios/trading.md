---
title: Trading Portfolio
domain: finance
type: live
tags: [portfolio, trading, positions]
updated: 2026-09-21
---

# Trading Portfolio

> Live page — update whenever positions change. **2026-09-21 review:** `refresh-technicals` has caught up for EU/UK markets (SAP, GSK, EDEN, ACN, PRX, WKL, ZOE, REL, KLR all carry genuine same-day 2026-09-21 closes) — the US market hasn't opened yet as of this run, so APH/IQV/ADBE/FLUT/LULU/SFM and the ORCL short/options still carry Friday 2026-09-18's close. Biggest development: **PRX's mechanical Exit signal rolled off today** (RSI back above 40, MACD turned bullish) — its 2026-09-22 patience-override deadline resolves itself. **LULU did not roll off** — with its own 2026-09-22 deadline arriving tomorrow and no stop-loss in place, trimmed 6 of 13 shares (46%, within the 50% patience-override cap) at $98.06 today; remaining 7 shares still carry the mechanical Exit signal. **FLUT's last share newly triggered Exit** (RSI 34.9) but was not acted on — commission would be 5.6% of the $89.56 trade, well above the 1% minimum-viable-trade threshold, and it's user-designated free-to-ride. **SFM re-triggered Exit** after briefly rolling off on 09-18 — treated as a fresh patience-override, reassess by ~2026-10-05. Cash now **€4,704.76** (€4,196.60 + ~€508 net LULU trim proceeds). Total net value ≈**€18,685** (down from €19,297, mostly LULU/PRX/options continuing to move against the book since 09-18, partly offset by the KLR/SAP/ACN rally on fresh EU data). 18 open positions (15 long equity, 1 short, 2 options). See [[#Portfolio Risks (Burry Lens)|risks]] below and the fred-dashboard Morning Briefing for full detail including 3 new screened candidates (MO, VK, APA) recorded to the Pending Trade Ideas queue.

---

## Portfolio Net Value

**Total Net Value: ≈ €18,685** (as of 2026-09-21; EU/UK prices genuinely same-day, US prices still Friday 2026-09-18's close — see the review note at the top of this page)

| Component | Value (€) | Basis |
| --- | --- | --- |
| Long equity (market price) | €12,777 | Sum of Mkt Value across all 15 open long positions, converted to EUR — includes LULU's post-trim 7-share value |
| Options (market price) | €1,197 | ORCL put ≈€488 + PLTR put ≈€709 — Turso Black-Scholes estimates, mark_date 2026-09-21, still on the 09-18 underlying prices (US market not yet open) |
| Shorts (market − entry, unrealized P&L) | ≈+€6 | ORCL only — underlying still $147.61 (09-18 close), +1.52% unrealized gain |
| Cash | €4,705 | €4,196.60 + ~€508 net LULU trim proceeds today, see [[#Cash Position\|Cash Position]] |
| **Total Net Value** | **€18,685** | |

> **Methodology note:** Shorts are traded on margin and don't hold cash value themselves while open — only their unrealized P&L (market price vs. entry price) contributes to net worth, per [[#Short Positions\|Short Positions]]. FX used: EUR/USD 1.14797 (Turso, 2026-09-21 pull). The drop from €19,297 to €18,685 reflects genuine market movement (PRX, WKL, ZOE, REL, GSK all pulled back on fresh EU/UK data; options mtm fell as ORCL/PLTR marks decayed) plus the LULU trim converting an unrealized loss to a realized one — not a data artifact this time. Recompute this section whenever prices in Open Positions / Short Positions / Options Positions are refreshed — it is not automatically kept in sync.

---

## Open Positions

| Company | Ticker | Exchange | Currency | Shares | Entry | Cost Basis | Last Price | Mkt Value | P&L% | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amphenol Corp | APH | NYSE | USD | 14 | $71.75 | $1,004.50 | $77.55 | $1,085.70 | +8.08% | 👀 Watch | Trimmed 4 sh @ $167.58 on 2026-08-14 (pre-split, 11→7). **2-for-1 stock split effective 2026-09-03** (7→14 shares, entry $143.50→$71.75, cost basis unchanged). RSI 44.1, below SMA50 ($79.95), MACD bearish — no mechanical signal either way; still 2026-09-18 US close |
| IQVIA Holdings | IQV | NYSE | USD | 3 | $163.99 | $491.97 | $266.42 | $799.26 | +62.46% | 👀 Watch | Trimmed 2 sh @ $239.06 on 2026-08-14, **trimmed 2 more sh @ $264.25 on 2026-09-14** for the free-ride. **✅ now already free-ridden** — cumulative trim proceeds ($2,117.62 across 4 trims) exceed the original $1,967.88 cost basis (12-share lot); all 3 remaining shares at zero effective cost. RSI 61.5, above SMA50 ($241.34), MACD bearish; still 2026-09-18 US close |
| Keller Group | KLR | LSE | GBp | 10 | 2,418p | £241.80 | 3,146.52p | £314.65 | +30.13% | Hold | Trimmed 8 sh @ 3,098p on 2026-08-07. RSI 62.6, above 50d SMA (3,094.80p), MACD now bullish (was bearish); **✅ already free-ridden** — gross trim proceeds (£1,326.40) exceed the original £1,209.00 cost basis, all 10 remaining shares at zero effective cost. Fresh 2026-09-21 UK close |
| SAP SE | SAP | XETRA | EUR | 7 | €136.70 | €956.90 | €184.52 | €1,291.64 | +34.98% | 👀 Watch | RSI 55.7, above 50d SMA (€169.22), MACD bearish. Fresh 2026-09-21 EU close |
| GSK | GSK | LSE | GBp | 52 | 1,939.6p | £1,008.58 | 1,880.00p | £977.60 | -3.07% | 👀 Watch | RSI 52.6, below 50d SMA (1,891.95p), MACD now bullish. Off mechanical Exit since 09-18, routine Watch; next earnings 2026-10-28. Fresh 2026-09-21 UK close |
| Edenred SA | EDEN | Euronext | EUR | 45 | €26.53 | €1,193.85 | €28.26 | €1,271.70 | +6.52% | 👀 Watch | RSI 45.4, below 50d SMA (€28.27), MACD bearish. Fresh 2026-09-21 EU close |
| Accenture | ACN | Xetra | EUR | 6 | €141.10 | €846.60 | €168.40 | €1,010.40 | +19.35% | 👀 Watch | Global IT services & consulting. Correct listing is Xetra/Frankfurt ticker **CSA** (ISIN IE00B4BNMY34, WKN A0YAQA), confirmed 2026-08-04. RSI 60.1, above 50d SMA (€149.45), MACD bearish. Fresh 2026-09-21 EU close |
| Adobe | ADBE | NASDAQ | USD | 5 | $249.85 | $1,249.25 | $248.92 | $1,244.60 | -0.37% | 👀 Watch | Creative & document software; AI integration (Firefly). RSI 42.4, below SMA50 ($256.06), MACD bearish — earnings reported 2026-09-10, reaction muted. Still 2026-09-18 US close |
| Flutter Entertainment | FLUT | NASDAQ | USD | 1 | $92.10 | $92.10 | $89.56 | $89.56 | -2.76% | 🔴 Exit | Sports betting & iGaming global operator; Burry long at $100.72 (Jul 24 2026); anti-prediction-markets thesis; initiated 2026-08-06. **Trimmed 11 sh @ $99.17 on 2026-09-14** — user-designated free-to-ride. **2026-09-21: mechanical Exit newly triggered** (RSI 34.9, below SMA50 $100.98, MACD bearish) — NOT executed: only 1 sh ($89.56), $5 commission = 5.6% of trade value, far above the 1% minimum-viable-trade threshold; also free-to-ride designation stands. Hold. Next earnings 2026-11-12. Still 2026-09-18 US close |
| Prosus | PRX | Euronext AMS | EUR | 30 | €41.165 | €1,234.95 | €36.165 | €1,084.95 | -12.15% | 👀 Watch | Dutch internet holding; Tencent stake + growth portfolio at persistent NAV discount; SOTP value thesis. **2026-09-21: rolled off mechanical Exit** (RSI back above 40 at 43.2, MACD turned bullish) — patience-override reassess-by ~2026-09-22 resolves itself; back to routine Watch. Fresh 2026-09-21 EU close |
| Wolters Kluwer | WKL | Euronext AMS | EUR | 15 | €71.08 | €1,066.20 | €67.86 | €1,017.90 | -4.53% | 👀 Watch | Dutch professional information services (legal, tax, compliance); intangible moat / recurring revenue compounder; initiated 2026-08-05. RSI 49.4, above SMA50 (€67.00), MACD bearish. Fresh 2026-09-21 EU close |
| Lululemon Athletica | LULU | NASDAQ | USD | 7 | $118.13 | $826.91 | $98.06 | $686.42 | -16.99% | 🔴 Exit | Athletic apparel; initiated 2026-08-10, added 5 sh @ $103.00 on 2026-09-08 (blended entry $118.13). Earnings reported 2026-09-03 (miss, drove the crash). RSI 36.5, below SMA50 ($115.38), MACD bearish — mechanical Exit persisted through the full patience-override window with no reversal (unlike PRX/GSK, which both rolled off). **2026-09-21: trimmed 6 of 13 sh (46%) @ $98.06** — net €109 realised loss (no CGT owed), executed as the 2026-09-22 reassess-by deadline arrived with no stop-loss in place; remaining 7 sh kept deliberately — Burry's own "buy more under $100" trigger is now satisfied by price. Remainder still carries the Exit signal — reassess again on fresh US data. Still 2026-09-18 US close |
| Sprouts Farmers Market | SFM | NASDAQ | USD | 10 | $80.16 | $801.60 | $70.79 | $707.90 | -11.69% | 🔴 Exit | Specialty grocery; initiated 2026-08-21. RSI 36.5, below SMA50 ($79.36), MACD bearish — **re-triggered mechanical Exit today**, having briefly rolled off on 09-18 (RSI back above 40 then, now back under). Treated as a fresh patience-override: hold, reassess by ~2026-10-05 if it hasn't cleared. No catalyst; next earnings 2026-10-28. Still 2026-09-18 US close |
| Zoetis Inc | ZOE | Xetra | EUR | 15 | €63.22 | €948.30 | €62.68 | €940.20 | -0.85% | 👀 Watch | Animal health pharma; European (EUR) listing — primary US listing is NYSE:ZTS, price here estimated via ZTS close ÷ EUR/USD, **not a direct EUR-listing quote**. RSI 42.6, below SMA50 (€65.17), MACD bearish. Fresh 2026-09-21 EU close |
| RELX plc | REL | LSE | GBp | 22 | 2,593.27p | £570.52 | 2,479.00p | £545.38 | -4.41% | 👀 Watch | Information & analytics / events group; initiated 2026-08-14, added 2 sh @ 2,576p on 2026-09-08 (blended entry 2,593.27p). RSI 43.1, below 50d SMA (2,578.39p), MACD bearish. Fresh 2026-09-21 UK close |

> Prices in native currency. LSE positions in pence (GBp); cost basis and Mkt Value in GBP. EUR positions (SAP, EDEN, ACN, PRX, WKL, ZOE) in EUR. **Mixed freshness as of 2026-09-21:** SAP, GSK, EDEN, ACN, PRX, WKL, ZOE, REL, KLR carry genuine same-day 2026-09-21 closes (EU/UK markets open); APH, IQV, ADBE, FLUT, LULU, SFM carry Friday 2026-09-18's close (US market not yet open at time of this review).
> **Active alerts:** LULU — trimmed 46% today (2026-09-21) as its patience-override deadline arrived with no stop-loss in place; remaining 7 shares still carry the mechanical Exit signal — reassess on fresh US data. PRX — mechanical Exit rolled off today, resolved. FLUT — newly triggered Exit today but not acted on (trade too small vs. commission; free-to-ride designation stands). SFM — re-triggered Exit today (fresh 10-trading-day patience window, reassess by ~2026-10-05). GSK — remains off mechanical Exit, routine Watch. IQV — confirmed fully free-ridden (3 shares at zero effective cost). KLR — confirmed already free-ridden, all 10 shares at zero effective cost, MACD turned bullish today. ORCL short/put and options mtm still reflect the 2026-09-18 US close — no live options chain to cross-check.

---

## Short Positions

Active short equity positions (profit if price falls below entry; loss if price rises above entry).

| Company | Ticker | Exchange | Currency | Shares Short | Entry | Short Value | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | NYSE | USD | 3 | $149.89 | $449.67 | ✅ Hold | Equity short complementing the existing ORCL long put below; bearish on Oracle AI/OCI narrative (OCI +93% YoY — short profitable only if AI infrastructure thesis unwinds); initiated 2026-08-14. Still Friday 2026-09-18's close ($147.61, US market not yet open) — unrealized +1.52% (+$6.84, ~+€6), small gain vs. entry |

> Margin requirement (broker collateral, not a cash movement — see [[#Cash Position|Cash Position]] note): ORCL ~€386 (approx., notional value converted at ≈1.14797 EUR/USD, per Turso 2026-09-21 pull). Profit if price falls below entry; loss if it rises. **NBIS short fully closed 2026-09-08** (bought back 3 sh @ $246.84, gain — see [[#Closed Positions|Closed Positions]]); no NBIS short position remains open.

---

## Options Positions

| Underlying | Ticker | Type | Strike | Expiry | Contracts | Shares | Premium Paid | Total Cost (€) | Current Price | Mkt Value (€) | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | Long Put | $120 | 2026-12-18 | 1 | 100 | $11.38/sh | €992 | ~$5.60/sh (est.) | ~€488 (est.) | ✅ Hold | Right to sell ORCL at $120 by Dec 2026; bearish on Oracle AI/OCI narrative (OCI +93% YoY — put profitable only if AI infrastructure thesis accelerates); break-even $108.62; initiated 2026-08-06. ORCL still $147.61 (2026-09-18 US close), down from $150.15 entry — ~36% above breakeven, deep OTM. **Turso Black-Scholes estimate, mark_date 2026-09-21** — no live options chain available to cross-check |
| Palantir | PLTR | Long Put | $125 | 2027-03-19 | 1 | 100 | $8.24/sh | €727 | ~$8.14/sh (est.) | ~€709 (est.) | ✅ Hold | Right to sell PLTR at $125 by Mar 2027; break-even $116.76; initiated 2026-08-11. PLTR still $177.64 (2026-09-18 US close), 52% above breakeven, deep OTM, long-dated — monitor only. **Turso Black-Scholes estimate, mark_date 2026-09-21** — model estimate, not a live option-chain quote |

> Long puts: profitable if the underlying closes below break-even at expiry. Maximum loss = premium paid (ORCL €992, PLTR €727). Current combined mark-to-market value: ≈€1,197 (Turso Black-Scholes estimate; down from €1,584 on 2026-09-18 and €1,719 paid) — both marks re-derived from Friday's 2026-09-18 underlying prices (US market not yet open today), not directly quoted from a live options chain.

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
| EUR | **€4,704.76** | €3,000 start + €517 IQV trim (07-09) + €561 KLR trim (07-11) − €961 SAP buy (07-14) − €1,157 CPB buy (07-14) − €1,147 GSK buy (07-16) + €657 KLR trim (07-23) + €936 MGNS exit (07-27) − €1,198 EDEN buy (07-23) + €423 IQV trim (07-28) + €1,299 AVGO exit (07-29) + €6,000 deposit (07-31) − €851 ACN buy (07-31) − €50 GSK add (07-31) − €1,100 ADBE buy (07-31) − €930 DKNG buy (07-31) − €1,239 PRX buy (08-03) − €1,071 WKL buy (08-05) + €842 DKNG exit (08-06) − €974 FLUT buy (08-06) − €992 ORCL put (08-06) + €286 KLR trim (08-07) − €176 NBIS short #1 close, realized loss (08-12) − €900 LULU buy (08-10) − €953 ZOE buy (08-10) − €727 PLTR put (08-11) + €415 IQV trim (08-14) + €584 APH trim (08-14) + €554 WOSG trim (08-14) − €613 REL buy (08-14) − €707 SFM buy (08-21) − €447 LULU add (09-08) − €64 REL add (09-08) + €1,049 WOSG exit (09-08) + €809 DNLM exit (09-08) + €1,085 CPB exit (09-08) + €50 NBIS short #2 close, realized gain (09-08) + €937 FLUT trim (09-14) + €452 IQV trim (09-14) + €508.16 LULU trim, net proceeds (09-21) |

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
