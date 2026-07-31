---
title: Trading Portfolio
domain: finance
type: live
tags: [portfolio, trading, positions]
updated: 2026-07-31
---

# Trading Portfolio

> Live page — update whenever positions change. Prices last fetched: **2026-07-31** (intraday refresh; US via Massive; LSE + XETRA (SAP) + Euronext (EDEN) via Yahoo Finance chart API/Massive pipeline; ACN/IBIS price not refreshed this run — see note below). Cash: **€8,029**. 10 open positions.

---

## Open Positions

| Company | Ticker | Exchange | Currency | Shares | Entry | Cost Basis | Last Price | Mkt Value | P&L% | Signal | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Amphenol Corp | APH | NYSE | USD | 11 | $143.50 | $1,578.50 | $160.70 | $1,767.70 | +11.99% | 👀 Watch | RSI 55.3, above SMA50 ($153.83), MACD bearish — patience override still active, reassess by 2026-08-08 |
| Watches of Switzerland | WOSG | LSE | GBp | 200 | 688p | £1,376.00 | 729.50p | £1,459.00 | +6.03% | 👀 Watch | RSI 50.5, above 50d SMA (723.08p), MACD bearish |
| Dunelm Group | DNLM | LSE | GBp | 90 | 800p | £720.00 | 869.50p | £782.55 | +8.69% | ✅ Hold | RSI 59.6, above 50d SMA (810.80p), MACD bullish |
| IQVIA Holdings | IQV | NYSE | USD | 7 | $163.99 | $1,147.93 | $235.02 | $1,645.14 | +43.31% | ✅ Hold | RSI 68.0 (cooling), above SMA50 ($193.95), MACD bullish; no formal stop |
| Keller Group | KLR | LSE | GBp | 18 | 2,418p | £435.24 | 3,024.00p | £544.32 | +25.06% | 👀 Watch | RSI 46.8, above 50d SMA (2,828.69p), MACD bearish; **3,100p stop breached at 3,066p, still unexecuted — price now 3,024p, further below stop — decision needed** |
| SAP SE | SAP | XETRA | EUR | 7 | €136.70 | €956.90 | €157.68 | €1,103.76 | +15.35% | ✅ Hold | RSI 63.1, above 50d SMA (€144.50), MACD bullish |
| Campbell's | CPB | NYSE | USD | 60 | $21.90 | $1,314.00 | $21.98 | $1,318.80 | +0.37% | 👀 Watch | RSI 49.3, above SMA50 ($21.64), MACD bearish |
| GSK | GSK | LSE | GBp | 52 | 1,939.6p | £1,008.58 | 1,931.50p | £1,004.38 | -0.42% | 👀 Watch | RSI 47.7, slipped below 50d SMA (1,939.67p) overnight, MACD bullish |
| Edenred SA | EDEN | Euronext | EUR | 45 | €26.53 | €1,193.85 | €28.52 | €1,283.40 | +7.50% | ✅ Hold | RSI 72.7 (overbought), above 50d SMA (€23.44), MACD bullish; extended |
| Accenture | ACN | IBIS | EUR | 6 | €141.10 | €846.60 | €141.10 | €846.60 | 0.00% | ✅ Hold | Global IT services & consulting; initiated 2026-07-31. **Pricing pipeline has no IBIS/EUR routing for ACN and fell back to a NYSE USD quote ($165.92) — not representative of this EUR position; price left unchanged pending manual verification of the correct EUR quote.** |

> Prices in native currency. LSE positions in pence (GBp); cost basis and Mkt Value in GBP. EUR positions (SAP, EDEN, ACN) in EUR. Prices as of **2026-07-31** (US via Massive; LSE/XETRA/Euronext via pipeline; ACN not refreshed this run — see alert below).
> **Active alerts:** APH — patience override still running to 2026-08-08; MACD still bearish despite price above SMA50, monitor. KLR — 3,100p stop still breached (price now 3,024p, further below stop); decision needed. ACN — pricing pipeline has no IBIS/EUR routing and fell back to an unrelated NYSE USD quote; manual price verification needed before next update. GSK — dipped back below its 50d SMA overnight; signal downgraded to Watch.

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
| EUR | **€8,029** | €3,000 start + €517 IQV trim (07-09) + €561 KLR trim (07-11) − €961 SAP buy (07-14) − €1,157 CPB buy (07-14) − €1,147 GSK buy (07-16) + €657 KLR trim (07-23) + €936 MGNS exit (07-27) − €1,198 EDEN buy (07-23) + €423 IQV trim (07-28) + €1,299 AVGO exit (07-29) + €6,000 deposit (07-31) − €851 ACN buy (07-31) − €50 GSK add (07-31) |

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
| SAP | 🟡 Enterprise software — mild indirect | SAP AI is enterprise-contracted; less circular-financing exposed than hyperscalers |

**Patience override rule:** A mechanical EXIT signal (RSI < 40 + below 50d SMA + MACD bearish expanding) alone is not sufficient to exit a position with an intact fundamental thesis. Maximum trim: 50%. Reassess within 10 trading days.

---

## See Also

- [[Finance - overview]]
- [[finance/portfolio-overview]] — equity pension portfolio
- [[finance/models/model-portfolio-management]] — integrated risk framework; Burry/Grantham structural risk layer; position sizing rules; decision matrix
- [[finance/people/person-michael-burry]] — AI circular-financing thesis; rationale for AVGO exit
