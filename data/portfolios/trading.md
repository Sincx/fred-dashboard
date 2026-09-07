---
title: Trading Portfolio
domain: finance
type: live
tags: [portfolio, trading, positions]
updated: 2026-09-07
---

# Trading Portfolio

> Live page — update whenever positions change. **portfolio-management-briefing run, 2026-09-07**: US markets closed for Labor Day — APH, IQV, CPB, ADBE, FLUT, LULU, SFM (and NBIS/ORCL/PLTR) carry Friday 2026-09-04's closing prices unchanged. LSE and European markets traded live and mostly softened. **GSK and PRX both crossed into fresh mechanical Exit signals this session** (RSI 39.75 and 38.31 respectively, both below 50d SMA, MACD bearish) — Patience Override applied to both (no thesis-breaking catalyst identified, looks like broad European value drift), no trims executed. PRX is now the second-worst performer at -11.44% (from -9.81%). CPB and LULU continue under their existing Patience Overrides, unchanged (US holiday). IQV free-ride still due: RSI 69.63, sell 2 of 5 shares recovers the full remaining cost basis ($378.76) — recommended execute now. KLR remains **already free-ridden**, all 10 remaining shares at zero effective cost. ZOE re-priced via ZTS proxy (ZTS closed $75.81, unchanged — Labor Day) — still not a direct EUR quote; technicals fall inside the mechanical Add band but the margin is noise-level, not actionable. REL price refreshed (2,572p, live LSE quote) — placeholder cleared. Cash unchanged at **€503.61** (see [[#Cash Position|Cash Position]]). Total net value now ≈**€19,165** (down from €19,286, driven mainly by softer European/UK prices — SAP, EDEN, ACN, WKL, GSK, PRX all lower) — see [[#Portfolio Net Value|Portfolio Net Value]]. 22 open positions (18 long equity, 2 short, 2 options).

---

## Portfolio Net Value

**Total Net Value: ≈ €19,165** (as of 2026-09-07)

| Component | Value (€) | Basis |
| --- | --- | --- |
| Long equity (market price) | €17,560 | Sum of Mkt Value across all 18 open long positions, converted to EUR |
| Options (market price) | €1,004 | ORCL put €409 + PLTR put €595 — unchanged, US holiday (underlyings stale) |
| Shorts (market − entry, unrealized P&L) | €98 | NBIS +€121 + ORCL −€23 — unchanged, US holiday (underlyings stale); margin itself excluded, see note |
| Cash | €504 | Unchanged, see [[#Cash Position\|Cash Position]] |
| **Total Net Value** | **€19,165** | |

> **Methodology note:** Shorts are traded on margin and don't hold cash value themselves — only their unrealized P&L (market price vs. entry price) contributes to net worth, per [[#Short Positions\|Short Positions]]. FX used: EUR/USD 1.162385, EUR/GBP 0.858236 (2026-09-07 rates). **Caveats on precision:** ZOE is still priced via a USD/EUR proxy off NYSE:ZTS (no direct EUR-listing quote) — REL now has a live LSE quote (placeholder cleared this session). US markets were closed for Labor Day 2026-09-07 — APH, IQV, CPB, ADBE, FLUT, LULU, SFM plus NBIS/ORCL/PLTR and both options all carry Friday 2026-09-04 closing prices unchanged. The €121 decline from the prior session is driven by softer European/UK markets today (SAP, EDEN, ACN, WKL, GSK, PRX all lower), partly offset by gains in DNLM and KLR. Recompute this section whenever prices in Open Positions / Short Positions / Options Positions are refreshed — it is not automatically kept in sync.

---

## Open Positions

| Company | Ticker | Exchange | Currency | Shares | Entry | Cost Basis | Last Price | Mkt Value | P&L% | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amphenol Corp | APH | NYSE | USD | 14 | $71.75 | $1,004.50 | $82.78 | $1,158.92 | +15.37% | ✅ Hold | Trimmed 4 sh @ $167.58 on 2026-08-14 (pre-split, 11→7). **2-for-1 stock split effective 2026-09-03** (7→14 shares, entry $143.50→$71.75, cost basis unchanged). US markets closed 2026-09-07 (Labor Day) — RSI 55.5, SMA50 $80.51, MACD bullish carried unchanged from Friday's clean read |
| Watches of Switzerland | WOSG | LSE | GBp | 135 | 688p | £928.80 | 685.00p | £924.75 | -0.44% | 👀 Watch | Trimmed 65 sh @ 733.5p on 2026-08-14. RSI 43.1, below 50d SMA (726.19p), MACD bearish |
| Dunelm Group | DNLM | LSE | GBp | 90 | 800p | £720.00 | 886.50p | £797.85 | +10.81% | 👀 Watch | RSI 55.1, above 50d SMA (857.42p), MACD bearish |
| IQVIA Holdings | IQV | NYSE | USD | 5 | $163.99 | $819.95 | $267.77 | $1,338.85 | +63.28% | 👀 Watch* | Trimmed 2 sh @ $239.06 on 2026-08-14. US holiday 2026-09-07 — price unchanged. RSI 69.6, above SMA50 ($230.13), MACD bearish; free-ride due — sell 2 of 5 shares recovers the full remaining cost basis ($378.76 of the original 12-share lot) — **recommended execute now**, see 2026-09-07 morning briefing |
| Keller Group | KLR | LSE | GBp | 10 | 2,418p | £241.80 | 3,038.00p | £303.80 | +25.64% | 👀 Watch | Trimmed 8 sh @ 3,098p on 2026-08-07. RSI 51.8, below 50d SMA (3,082.25p), MACD bullish; **✅ already free-ridden** — gross trim proceeds (£1,326.40) exceed the original £1,209.00 cost basis, all 10 remaining shares at zero effective cost |
| SAP SE | SAP | XETRA | EUR | 7 | €136.70 | €956.90 | €182.80 | €1,279.60 | +33.72% | 👀 Watch | RSI 56.1, above 50d SMA (€162.26), MACD bearish |
| Campbell's | CPB | NYSE | USD | 60 | $21.90 | $1,314.00 | $21.38 | $1,282.80 | -2.37% | 🔴 Exit | US holiday 2026-09-07 — price unchanged. RSI 35.7, below SMA50 ($22.69), MACD bearish — mechanical Exit continues; patience-override applied given deep Morningstar value thesis (FV $56, 59% discount) — hold, reassess within 10 sessions of 2026-09-04 trigger |
| GSK | GSK | LSE | GBp | 52 | 1,939.6p | £1,008.58 | 1,837.50p | £955.50 | -5.26% | 🔴 Exit | RSI 39.8, below 50d SMA (1,920.28p), MACD bearish — **mechanical Exit triggered this session** (was Watch at RSI 41.2); no thesis-breaking catalyst identified, looks like broad European value drift; patience-override applied — hold, reassess within 10 sessions |
| Edenred SA | EDEN | Euronext | EUR | 45 | €26.53 | €1,193.85 | €29.63 | €1,333.35 | +11.68% | 👀 Watch | RSI 56.6, above 50d SMA (€27.41), MACD bearish |
| Accenture | ACN | Xetra | EUR | 6 | €141.10 | €846.60 | €159.55 | €957.30 | +13.08% | 👀 Watch | Global IT services & consulting. Correct listing is Xetra/Frankfurt ticker **CSA** (ISIN IE00B4BNMY34, WKN A0YAQA), confirmed 2026-08-04. RSI 56.0, above 50d SMA (€140.89), MACD bearish |
| Adobe | ADBE | NASDAQ | USD | 5 | $249.85 | $1,249.25 | $266.51 | $1,332.55 | +6.67% | 👀 Watch | Creative & document software; AI integration (Firefly); US holiday 2026-09-07 — price unchanged. RSI 48.9, above SMA50 ($248.85), MACD bearish |
| Flutter Entertainment | FLUT | NASDAQ | USD | 12 | $92.10 | $1,105.20 | $100.11 | $1,201.32 | +8.70% | 👀 Watch | Sports betting & iGaming global operator; Burry long at $100.72 (Jul 24 2026); entered at better price; anti-prediction-markets thesis; initiated 2026-08-06. US holiday 2026-09-07 — price unchanged. RSI 49.7, below SMA50 ($102.58), MACD bullish — reassess deadline 2026-09-10 (3 days out) |
| Prosus | PRX | Euronext AMS | EUR | 30 | €41.165 | €1,234.95 | €36.455 | €1,093.65 | -11.44% | 🔴 Exit | Dutch internet holding; Tencent stake + growth portfolio at persistent NAV discount; SOTP value thesis. RSI 38.3, below 50d SMA (€38.76), MACD bearish — **mechanical Exit triggered this session** (was Watch at RSI 41.9); now the 2nd-worst performer after LULU; SOTP thesis intact, patience-override applied — hold, reassess within 10 sessions |
| Wolters Kluwer | WKL | Euronext AMS | EUR | 15 | €71.08 | €1,066.20 | €67.90 | €1,018.50 | -4.47% | 👀 Watch | Dutch professional information services (legal, tax, compliance); intangible moat / recurring revenue compounder; initiated 2026-08-05. RSI 49.3, above SMA50 (€65.33), MACD bearish |
| Lululemon Athletica | LULU | NASDAQ | USD | 8 | $127.59 | $1,020.72 | $100.61 | $804.88 | -21.15% | 🔴 Exit | Athletic apparel; initiated 2026-08-10. **Crashed post-Q2-earnings 2026-09-03** (EPS $2.92 beat vs $1.79 est, +63% surprise, but cut forward guidance on declining revenue). US holiday 2026-09-07 — price unchanged. RSI 31.8, below SMA50 ($118.40), MACD bearish — mechanical Exit continues; patience-override applied (Burry's largest position, plans to buy more aggressively under $100, "well under IV15") — hold, no stop-loss in place, flagged as top portfolio risk |
| Sprouts Farmers Market | SFM | NASDAQ | USD | 10 | $80.16 | $801.60 | $81.40 | $814.00 | +1.55% | 👀 Watch | Specialty grocery; initiated 2026-08-21. US holiday 2026-09-07 — price unchanged. RSI 49.1, essentially at SMA50 ($81.41), MACD bearish |
| Zoetis Inc | ZOE | Xetra | EUR | 15 | €63.22 | €948.30 | €65.22 | €978.30 | +3.16% | 👀 Watch | Animal health pharma; European (EUR) listing — primary US listing is NYSE:ZTS, price here estimated via ZTS close ($75.81, unchanged — US holiday) × USD/EUR ≈0.8603, **not a direct EUR-listing quote — verify next refresh**. RSI 49.1, price barely above SMA50 (both in USD terms), MACD hist +0.006 — technically inside the mechanical Add band but the margin is noise-level, not actionable. Initiated 2026-08-10 |
| RELX plc | REL | LSE | GBp | 20 | 2,595p | £519.00 | 2,572.00p | £514.40 | -0.89% | 👀 Watch | Information & analytics / events group; initiated 2026-08-14. **Live LSE quote obtained this session** (placeholder cleared). RSI 47.7, above 50d SMA (2,549.41p), MACD bearish |

> Prices in native currency. LSE positions in pence (GBp); cost basis and Mkt Value in GBP. EUR positions (SAP, EDEN, ACN, PRX, WKL, ZOE) in EUR. Prices last fetched: **2026-09-07**.
> **Active alerts:** LULU — remains at -21.15% post-Q2-earnings (guidance cut); mechanical Exit continues, patience-override applied (Burry's largest position, plans to add under $100), no stop-loss in place — top portfolio risk. GSK and PRX — **both crossed into mechanical Exit this session** (RSI 39.8 and 38.3); patience-override applied to both, no forced trim, reassess within 10 sessions. PRX is now the 2nd-worst performer at -11.44%. CPB — mechanical Exit continues from 2026-09-04 (RSI 35.7); patience-override applied given deep value thesis. IQV — free-ride sell (2 of 5 shares) recommended today, recovers full remaining cost basis. KLR — confirmed **already free-ridden**, all 10 shares at zero effective cost, no action needed. FLUT — reassessment deadline 2026-09-10 (3 days out). **US markets closed 2026-09-07 (Labor Day)** — APH, IQV, CPB, ADBE, FLUT, LULU, SFM (and NBIS/ORCL/PLTR) carry Friday 2026-09-04 closing prices unchanged. **REL — live LSE quote obtained this session, placeholder cleared.**

---

## Short Positions

Active short equity positions (profit if price falls below entry; loss if price rises above entry).

| Company | Ticker | Exchange | Currency | Shares Short | Entry | Short Value | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Nebius Group | NBIS | NASDAQ | USD | 3 | $273.32 | $819.96 | ✅ Hold | Re-shorted 2026-08-14 after the original Aug 6 short (5 sh @ $194.78) was closed at a loss on 2026-08-12 (bought back @ $234.00). Current price $226.39 (2026-09-04, 2nd run) → unrealized +17.17% (~+$141, ~€121) on the short — profit nearly halved from earlier today (+22.93%/+€162) as the stock rallied +7.5%. AI neocloud / GPU cloud compute; model framework explicitly "Avoid/underweight Nebius" (Meta compute overbuild, customer-concentration risk per [[finance/models/model-meta-compute-release-market-impact-2026-07-05]]); Burry SOXX short thesis extends to neocloud infrastructure — thesis under near-term pressure from today's rally |
| Oracle | ORCL | NYSE | USD | 3 | $149.89 | $449.67 | ✅ Hold | Equity short complementing the existing ORCL long put below; bearish on Oracle AI/OCI narrative (OCI +93% YoY — short profitable only if AI infrastructure thesis unwinds); initiated 2026-08-14. Current price $158.78 (2026-09-04, 2nd run) → unrealized -5.93% (~-$27, ~-€23) on the short, loss widened from -2.77%/-€12 earlier today as ORCL rallied further |

> Margin requirement (broker collateral, not a cash movement — see [[#Cash Position|Cash Position]] note): NBIS ~€719, ORCL ~€394 (approx., notional value converted at ≈0.877 USD/EUR). Profit if price falls below entry; loss if it rises.

---

## Options Positions

| Underlying | Ticker | Type | Strike | Expiry | Contracts | Shares | Premium Paid | Total Cost (€) | Current Price | Mkt Value (€) | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Oracle | ORCL | Long Put | $120 | 2026-12-18 | 1 | 100 | $11.38/sh | €992 | $4.75/sh | €409 | ✅ Hold | Right to sell ORCL at $120 by Dec 2026; bearish on Oracle AI/OCI narrative (OCI +93% YoY — put profitable only if AI infrastructure thesis accelerates); break-even $108.62; initiated 2026-08-06. ORCL now $158.78 (2026-09-04, 2nd run), 32% above breakeven — deep OTM, decayed further as ORCL rallied — no action. Live options chain via yfinance 2026-09-04 |
| Palantir | PLTR | Long Put | $125 | 2027-03-19 | 1 | 100 | $8.24/sh | €727 | $6.91/sh | €595 | ✅ Hold | Right to sell PLTR at $125 by Mar 2027; break-even $116.76; initiated 2026-08-11. PLTR now $174.33 (2026-09-04, 2nd run), down from $182.53 earlier today — 40% above breakeven, deep OTM, long-dated, but put value rose as PLTR pulled back — monitor only. Live options chain via yfinance 2026-09-04 |

> Long puts: profitable if the underlying closes below break-even at expiry. Maximum loss = premium paid (ORCL €992, PLTR €727). Current combined mark-to-market value: €1,003 (down from €1,719 paid), up slightly from €981 earlier today as PLTR's pullback offset further ORCL decay.

---

## Closed Positions

Fully exited positions. Partial trims of open positions are in the [[#Performance|Transaction Log]] below.

| Company | Ticker | Exchange | Shares | Entry | Exit Price | Exit Date | Gross P&L (€) | Net P&L (€) | Exit Reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Morgan Sindall Group | MGNS | LSE | 18 | 4,624p | 4,456p | 2026-07-27 | −€35.44 | **−€39.81** | Full exit — earnings miss; technical breakdown confirmed |
| Broadcom | AVGO | NASDAQ | 4 | $387.25 | $371.42 | 2026-07-29 | −€55.54 | **−€59.91** | Full exit — Burry SOXX-short thesis; below SMA50; position closed |
| DraftKings | DKNG | NASDAQ | 45 | $23.46 | $21.43 | 2026-08-06 | −€80.13 | **−€84.50** | Full exit — mechanical Exit signal (RSI <40, below SMA50, MACD bearish); technical breakdown confirmed |
| Nebius Group (short) | NBIS | NASDAQ | 5 | $194.78 | $234.00 | 2026-08-12 | −€172.02 | **−€176.39** | Short position closed at a loss — price rose against the short; bought back to cover. Re-shorted at a different size/price 2026-08-14, see [[#Short Positions\|Short Positions]] |

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

---

### Position Summary

Realised P&L grouped by position (trims + full exits combined).

| Ticker | Transactions | Status | Shares Sold | Realised Gross (€) | CGT (€) | Commissions (€) | Realised Net (€) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IQV | 3 trims | Open (5 remain) | 7 | +€386.55 | −€81.17 | −€13.11 | **+€292.27** |
| KLR | 3 trims | Open (10 remain) | 40 | +€420.98 | −€88.41 | −€13.11 | **+€319.46** |
| APH | 1 trim | Open (14 remain, post-split) | 4 | +€84.49 | −€17.74 | −€4.37 | **+€62.38** |
| WOSG | 1 trim | Open (135 remain) | 65 | +€34.66 | −€7.28 | −€4.37 | **+€23.01** |
| MGNS | Full exit | Closed | 18 | −€35.44 | €0 | −€4.37 | **−€39.81** |
| AVGO | Full exit | Closed | 4 | −€55.54 | €0 | −€4.37 | **−€59.91** |
| DKNG | Full exit | Closed | 45 | −€80.13 | €0 | −€4.37 | **−€84.50** |
| NBIS (short) | Full close | Closed | 5 | −€172.02 | €0 | −€4.37 | **−€176.39** |
| **TOTAL** | **12** | | **188** | **€583.55** | **−€194.60** | **−€52.44** | **€336.51** |

---

### YTD Summary

| Metric | Value |
| --- | --- |
| Total gross P&L (€) | €583.55 |
| Total CGT paid (€) | €194.60 |
| Total commissions (€) | €52.44 |
| **Net realised gains (€)** | **€336.51** |
| Transactions | 12 |
| Positions fully closed | 4 (MGNS, AVGO, DKNG, NBIS short) |
| Positions partially trimmed | 4 (IQV, KLR, APH, WOSG) |

---

## Cash Position

| Currency | Amount | Movement Log |
| --- | --- | --- |
| EUR | **€503.61** | €3,000 start + €517 IQV trim (07-09) + €561 KLR trim (07-11) − €961 SAP buy (07-14) − €1,157 CPB buy (07-14) − €1,147 GSK buy (07-16) + €657 KLR trim (07-23) + €936 MGNS exit (07-27) − €1,198 EDEN buy (07-23) + €423 IQV trim (07-28) + €1,299 AVGO exit (07-29) + €6,000 deposit (07-31) − €851 ACN buy (07-31) − €50 GSK add (07-31) − €1,100 ADBE buy (07-31) − €930 DKNG buy (07-31) − €1,239 PRX buy (08-03) − €1,071 WKL buy (08-05) + €842 DKNG exit (08-06) − €974 FLUT buy (08-06) − €992 ORCL put (08-06) + €286 KLR trim (08-07) − €900 LULU buy (08-10) − €953 ZOE buy (08-10) − €727 PLTR put (08-11) + €415 IQV trim (08-14) + €584 APH trim (08-14) + €554 WOSG trim (08-14) − €613 REL buy (08-14) − €707 SFM buy (08-21) |

> Cash amounts in movement log represent proceeds from sales (net of commission; CGT accrued but not deducted from proceeds — settled annually). **Corrected 2026-09-04: shorts are traded on margin and do not draw down cash** — the four margin-posted/returned entries for NBIS/ORCL shorts (previously in this log) were removed as an accounting error, which resolves the negative-balance flag from the earlier backfill. Margin requirement is tracked separately in [[#Short Positions|Short Positions]] as a broker requirement, not a cash movement.

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
| KLR, DNLM, WOSG, GSK, CPB, EDEN | 🟢 European value — no signal | No conflict; Grantham also prefers non-US value |
| SAP, ACN | 🟡 Enterprise software — mild indirect | Enterprise-contracted revenue; less circular-financing exposed than hyperscalers |
| ADBE | 🟡 US large-cap tech — mild indirect | Caught in QQQ puts thesis; AI features (Firefly) add narrative risk; creative software moat partially offsets |
| FLUT | 🟢 Burry-aligned long | Flutter Entertainment — Burry long at $100.72 (Jul 24 2026); entered at $92.10 (better price); anti-prediction-markets / sports betting thesis; direct Scion alignment |
| PRX | 🟢 Non-US value / SOTP — no signal | Prosus: international, non-AI, NAV-discount thesis; aligns with Grantham non-US preference and MOI SOTP framework |
| WKL | 🟢 Intangible moat / non-US — no signal | Wolters Kluwer: recurring professional information revenue; no AI infrastructure exposure; Grantham-aligned non-US quality |
| NBIS (short) | 🟢 Burry/model-aligned short | Nebius Group neocloud short — directly implements model framework "Avoid/underweight Nebius" call; Burry SOXX/AI-infrastructure bear thesis extends to GPU cloud neoclouds; customer-concentration risk if Meta compute overbuild unfolds. Original Aug 6 short closed at a loss 2026-08-12; re-shorted 2026-08-14 |
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
