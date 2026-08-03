---
title: Trading Portfolio
domain: finance
type: live
tags: [portfolio, trading, positions]
updated: 2026-08-03
---

# Trading Portfolio

> Live page — update whenever positions change. Prices last fetched: **2026-08-03** (Python pipeline: Polygon/AV/yfinance; PRX resolved via yfinance PRX.AS with CA bundle fix; ACN still has no genuine EUR/IBIS listing — using FX-converted NYSE USD quote as proxy, see note below). Cash: **€4,760**. 13 open positions.

---

## Open Positions

| Company | Ticker | Exchange | Currency | Shares | Entry | Cost Basis | Last Price | Mkt Value | P&L% | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amphenol Corp | APH | NYSE | USD | 11 | $143.50 | $1,578.50 | $163.34 | $1,796.74 | +13.83% | ✅ Hold | RSI 57.5, above SMA50 ($154.64), MACD bullish — patience override still active, reassess by 2026-08-08 |
| Watches of Switzerland | WOSG | LSE | GBp | 200 | 688p | £1,376.00 | 726.00p | £1,452.00 | +5.52% | 👀 Watch | RSI 49.6, above 50d SMA (723.92p), MACD bearish |
| Dunelm Group | DNLM | LSE | GBp | 90 | 800p | £720.00 | 889.00p | £800.10 | +11.12% | ✅ Hold | RSI 64.6, above 50d SMA (813.03p), MACD bullish |
| IQVIA Holdings | IQV | NYSE | USD | 7 | $163.99 | $1,147.93 | $233.36 | $1,633.52 | +42.30% | ✅ Hold | RSI 66.4 (cooling), above SMA50 ($195.19), MACD bullish; no formal stop |
| Keller Group | KLR | LSE | GBp | 18 | 2,418p | £435.24 | 3,050.00p | £549.00 | +26.14% | 👀 Watch | RSI 48.5, above 50d SMA (2,842.54p), MACD bearish; **3,100p stop breached, still unexecuted — price now 3,050p, still below stop — decision needed** |
| SAP SE | SAP | XETRA | EUR | 7 | €136.70 | €956.90 | €164.64 | €1,152.48 | +20.44% | ✅ Hold | RSI 67.3, above 50d SMA (€144.64), MACD bullish |
| Campbell's | CPB | NYSE | USD | 60 | $21.90 | $1,314.00 | $22.37 | $1,342.20 | +2.15% | 👀 Watch | RSI 52.7, above SMA50 ($21.70), MACD bearish |
| GSK | GSK | LSE | GBp | 52 | 1,939.6p | £1,008.58 | 1,909.50p | £992.94 | -1.55% | 👀 Watch | RSI 44.9, below 50d SMA (1,939.56p), MACD bearish |
| Edenred SA | EDEN | Euronext | EUR | 45 | €26.53 | €1,193.85 | €28.34 | €1,275.30 | +6.82% | ✅ Hold | RSI 72.0 (overbought), above 50d SMA (€23.43), MACD bullish; extended |
| Accenture | ACN | IBIS | EUR | 6 | €141.10 | €846.60 | ~€143.98* | ~€863.87* | ~+2.04%* | ✅ Hold | Global IT services & consulting. **No genuine EUR/IBIS listing found (checked Xetra/Frankfurt/Milan/Berlin/Duisburg/Hamburg/Stuttgart) — using NYSE USD price ($165.76) converted to EUR at live FX as proxy. Manual verification of the correct EUR quote still needed (unresolved 3rd consecutive update).** |
| Adobe | ADBE | NASDAQ | USD | 5 | $249.85 | $1,249.25 | $251.34 | $1,256.70 | +0.60% | ✅ Hold | Creative & document software; AI integration (Firefly); RSI 60.2, above SMA50 ($228.30), MACD bullish |
| DraftKings | DKNG | NASDAQ | USD | 45 | $23.46 | $1,055.70 | $23.50 | $1,057.50 | +0.17% | 👀 Watch | US online sports betting; Burry-aligned long; RSI 41.2, below SMA50 ($25.46), MACD bearish |
| Prosus | PRX | Euronext AMS | EUR | 30 | €41.165 | €1,234.95 | €40.91 | €1,227.30 | -0.62% | ✅ Hold | Dutch internet holding; Tencent stake + growth portfolio at persistent NAV discount; SOTP value thesis. RSI 58.8, above SMA50 (€39.00), MACD bullish |

> Prices in native currency. LSE positions in pence (GBp); cost basis and Mkt Value in GBP. EUR positions (SAP, EDEN, ACN, PRX) in EUR. Prices as of **2026-08-03** (Python pipeline: Polygon/AV/yfinance; ACN still not resolved to a genuine EUR listing — see alert below).
> **Active alerts:** APH — patience override still running to 2026-08-08; MACD turned bullish, price above SMA50, continue to monitor into the deadline. KLR — 3,100p stop still breached (price now 3,050p, still below stop); decision needed. ACN — no genuine EUR/IBIS listing found after checking Xetra/Frankfurt/Milan/Berlin/Duisburg/Hamburg/Stuttgart; using FX-converted NYSE USD quote as a proxy (~€143.98/share); manual verification needed — unresolved for 3 consecutive updates. GSK — remains below its 50d SMA with bearish MACD; RSI 44.9, one leg from a mechanical Exit signal alongside DKNG (RSI 41.2, also below SMA50 with bearish MACD).

---

## Closed Positions

Fully exited positions. Partial trims of open positions are in the [[#Performance|Transaction Log]] below.

| Company | Ticker | Exchange | Shares | Entry | Exit Price | Exit Date | Gross P&L (€) | Net P&L (€) | Exit Reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Morgan Sindall Group | MGNS | LSE | 18 | 4,624p | 4,456p | 2026-07-27 | −€35.44 | **−€39.81** | Full exit — earnings miss; technical breakdown confirmed |
| Broadcom | AVGO | NASDAQ | 4 | $387.25 | $371.42 | 2026-07-29 | −€55.54 | **−€59.91** | Full exit — Burry SOXX-short thesis; below SMA50; position closed |

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

---

### Position Summary

Realised P&L grouped by position (trims + full exits combined).

| Ticker | Transactions | Status | Shares Sold | Realised Gross (€) | CGT (€) | Commissions (€) | Realised Net (€) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| IQV | 2 trims | Open (7 remain) | 5 | +€254.88 | −€53.52 | −€8.74 | **+€192.62** |
| KLR | 2 trims | Open (18 remain) | 32 | +€357.23 | −€75.02 | −€8.74 | **+€273.47** |
| MGNS | Full exit | Closed | 18 | −€35.44 | €0 | −€4.37 | **−€39.81** |
| AVGO | Full exit | Closed | 4 | −€55.54 | €0 | −€4.37 | **−€59.91** |
| **TOTAL** | **6** | | **59** | **€521.13** | **−€128.54** | **−€26.22** | **€366.37** |

---

### YTD Summary

| Metric | Value |
| --- | --- |
| Total gross P&L (€) | €521.13 |
| Total CGT paid (€) | €128.54 |
| Total commissions (€) | €26.22 |
| **Net realised gains (€)** | **€366.37** |
| Transactions | 6 |
| Positions fully closed | 2 (MGNS, AVGO) |
| Positions partially trimmed | 2 (IQV, KLR) |

---

## Cash Position

| Currency | Amount | Movement Log |
| --- | --- | --- |
| EUR | **€4,760** | €3,000 start + €517 IQV trim (07-09) + €561 KLR trim (07-11) − €961 SAP buy (07-14) − €1,157 CPB buy (07-14) − €1,147 GSK buy (07-16) + €657 KLR trim (07-23) + €936 MGNS exit (07-27) − €1,198 EDEN buy (07-23) + €423 IQV trim (07-28) + €1,299 AVGO exit (07-29) + €6,000 deposit (07-31) − €851 ACN buy (07-31) − €50 GSK add (07-31) − €1,100 ADBE buy (07-31) − €930 DKNG buy (07-31) − €1,239 PRX buy (08-03) |

> Cash amounts in movement log represent proceeds from sales (net of commission; CGT accrued but not deducted from proceeds — settled annually).

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
| DKNG | 🟢 Burry-aligned long | Scion added DKNG at ~$23.40 on Jul 30 — direct alignment; sports betting vs. prediction markets thesis |
| PRX | 🟢 Non-US value / SOTP — no signal | Prosus: international, non-AI, NAV-discount thesis; aligns with Grantham non-US preference and MOI SOTP framework |

**Patience override rule:** A mechanical EXIT signal (RSI < 40 + below 50d SMA + MACD bearish expanding) alone is not sufficient to exit a position with an intact fundamental thesis. Maximum trim: 50%. Reassess within 10 trading days.

---

## See Also

- [[finance-overview]]
- [[finance/portfolio-overview]] — equity pension portfolio
- [[finance/models/model-portfolio-management]] — integrated risk framework; Burry/Grantham structural risk layer; position sizing rules; decision matrix
- [[finance/people/person-michael-burry]] — AI circular-financing thesis; rationale for AVGO exit
