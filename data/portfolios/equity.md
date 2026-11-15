---
title: Portfolio Overview
domain: finance
type: live
tags: [portfolio, positions, active-thesis]
sources: 0
updated: 2026-09-05
---

# Portfolio Overview

> Live page — update whenever positions change. Prices last fetched: **2026-09-05**. Massive.com batch snapshot returned 403 Not Authorized again, so the 15 US-listed positions (GOOGL, AMZN, MSFT, WDAY, MSTR, BRK.B, TER, ASML, AVGO, CEG, CRWD, NOW, IBM, IQV, PEP) plus the two OTC ADRs (NGLOY, GLNCY) were fetched via the market-watchlist pipeline's `fetchers.fetch_us_ticker`. CHIP (Euronext Paris) and GAW (LSE) were fetched via the yfinance MCP `batch_download` tool.

---

## Equity Holdings

| Company | Ticker | Exchange | Currency | Entry Price | Last Price | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Alphabet | GOOGL | NASDAQ | USD | $106.62 * | $338.46 | Above 200d SMA; earnings Jul 22 |
| Amazon | AMZN | NASDAQ | USD | $175.97 | $258.51 | AWS + AI; approaching 200d SMA |
| Microsoft | MSFT | NASDAQ | USD | $167.76 | $499.70 | Below 200d SMA ~$432; Copilot lag |
| Workday | WDAY | NASDAQ | USD | $210.95 | $195.79 | Below 200d SMA ~$180; SaaS under pressure |
| MicroStrategy (Strategy) | MSTR | NASDAQ | USD | $20.45 | $142.80 | Bitcoin proxy; RSI oversold; earnings Jul 30 |
| Berkshire Hathaway | BRK.B | NYSE | USD | $217.10 | $506.03 | Near 52w high; quality anchor |
| Teradyne | TER | NASDAQ | USD | $140.90 | $357.03 | −14.5% today — semi sector contagion; reassess |
| Anglo American | NGLOY | OTC | USD | $31.40 | $28.37 | ADR (LSE: AAL.L); copper + platinum metals |
| Glencore | GLNCY | OTC | USD | $1.26 | $16.25 | ADR (LSE: GLEN.L); above 200d SMA; MACD buy |
| ASML Holding | ASML | NASDAQ | USD | $1,987.87 | $1,714.88 | EUV lithography monopoly; semi sector; −7.3% today |
| Amundi MSCI Semiconductors ETF | CHIP | Euronext Paris | EUR | €112.60 | €107.50 | ISIN LU1900066033; TER 0.35%; semi sector ETF |
| Broadcom | AVGO | NASDAQ | USD | $515.42 | $357.90 | AI networking + custom chips; semi sector down |
| Constellation Energy | CEG | NASDAQ | USD | $482.84 | $298.96 | Nuclear power; AI data centre electricity thesis; near 52w low |
| CrowdStrike | CRWD | NASDAQ | USD | $166.78 | $213.10 | 4:1 split effective Jul 2; cybersecurity AI platform |
| ServiceNow | NOW | NYSE | USD | $180.37 | $141.26 | Enterprise AI/workflow; 52w range $81–$211; earnings Jul 22 |
| IBM | IBM | NYSE | USD | $115.24 | $234.89 | AI/hybrid cloud; −25% Jul 14 on Q2 earnings warning (mainframe/software weakness); earnings call Jul 22 |
| Games Workshop | GAW | LSE | GBp | 5,045p | 18,450p | Warhammer IP; LSE: GAW.L; 52w range 14,070–22,260p |
| IQVIA Holdings | IQV | NYSE | USD | $243.18 | $267.77 | Healthcare data + CRO; above 200d SMA |
| PepsiCo | PEP | NASDAQ | USD | $190.28 | $137.63 | Defensive consumer; near 200d SMA |

> \* GOOGL entry price is the average of two tranches: Class A (£69.49 → $92.76) and Class C (£90.28 → $120.49). GBP/USD rate used: 1.3347 (Jul 3 2026). GBP/EUR rate used: 1.16761 (Jul 3 2026).
>
> **Holdings in pension CSV with no matching portfolio row:** Kyndryl (KD), NAVYA SA, Valterra Platinum — let me know if these should be added.

---

## Crypto Holdings

*See [[crypto-portfolio]] for full crypto breakdown.*

| Asset | Symbol | Notes |
|---|---|---|
| Bitcoin | BTC | |
| Ethereum | ETH | |
| Everything | $EV | See [[crypto/company-everything-inc]] |
| Chainlink | LINK | |
| Lucky | $LUCKY | |
| Test | $TEST | |

---

## Thesis Status

| Company | Ticker | Thesis | Status |
|---|---|---|---|
| Alphabet | GOOGL | Big tech AI infrastructure moat | active |
| Amazon | AMZN | Cloud + retail dominance, AI optionality | active |
| Microsoft | MSFT | Enterprise AI integration (Copilot), cloud | active |
| Workday | WDAY | Enterprise SaaS, HR/finance software moat | active |
| MicroStrategy | MSTR | Leveraged Bitcoin exposure via equity | active |
| Berkshire Hathaway | BRK.B | Buffett capital allocation, insurance float | active |
| Teradyne | TER | Semiconductor test equipment, robotics | active |
| Anglo American | NGLOY | Copper, platinum group metals, commodities | active |
| Glencore | GLNCY | Diversified mining + commodity trading | active |
| ASML Holding | ASML | EUV lithography monopoly; only supplier of EUV machines globally | active |
| Amundi Semi ETF | CHIP | Semiconductor sector broad exposure, ESG-screened, EUR-denominated | active |
| Broadcom | AVGO | AI custom chips (Google, Meta TPU/XPU); networking dominance | active |
| Constellation Energy | CEG | Nuclear power provider for AI data centres; clean energy re-rating | active |
| CrowdStrike | CRWD | AI-native cybersecurity platform; Falcon; endpoint + cloud security | active |
| ServiceNow | NOW | Enterprise AI workflow automation; platform + AI integration | active |
| IBM | IBM | Hybrid cloud + AI (watsonx); consulting; hardware + software mix | active |
| Games Workshop | GAW | Warhammer IP licensing + direct sales; high-margin royalty model | active |
| IQVIA Holdings | IQV | Healthcare data analytics + CRO; AI-driven clinical trials | active |
| PepsiCo | PEP | Defensive consumer staples; dividend; inflation-resilient | active |

---

## Thesis Status Key
- `forming` — researching
- `active` — position held
- `exited` — position closed
- `invalidated` — thesis proved wrong

---

## Technical Analysis

| Ticker | Last TA | Verdict |
|---|---|---|
| GOOGL | [[finance/technical-analysis-snapshots/technical-analysis-GOOGL-2026-06-04]] | ★★★★☆ Bullish |
| AMZN | — (not yet written up) | ★★★☆☆ Neutral-Bullish |
| MSFT | [[finance/technical-analysis-snapshots/technical-analysis-MSFT-2026-06-04]] | ★★☆☆☆ Bearish (below 200d SMA) |
| WDAY | [[finance/technical-analysis-snapshots/technical-analysis-WDAY-2026-06-01]] | ★★☆☆☆ Bearish (below 200d SMA) |
| MSTR | [[finance/technical-analysis-snapshots/technical-analysis-MSTR-2026-06-04]] | ★★☆☆☆ Bearish / Oversold bounce |
| BRK.B | [[finance/technical-analysis-snapshots/technical-analysis-BRKB-2026-06-04]] | ★★★★☆ Bullish (near 52w high) |
| TER | [[finance/technical-analysis-snapshots/technical-analysis-TER-2026-06-04]] | ★★☆☆☆ Bearish 🚨 (−14.5% Jul 2) |
| GLNCY | [[finance/technical-analysis-snapshots/technical-analysis-GLNCY-2026-06-04]] | ★★★★☆ Bullish (above 200d SMA) |

---

## Magic Formula

*Greenblatt Magic Formula ranking — updated weekly by scheduled task. Ranks by combined ROIC + Earnings Yield.*

| Ticker | MF Rank | ROIC | Earnings Yield | Last Updated |
|---|---|---|---|---|
| MU | 1 | 93.42% | 12.23% | 2026-11-15 |
| MGNS | 2 | 43.56% | 13.71% | 2026-11-15 |
| DNLM | 3 | 32.5% | 10.44% | 2026-11-15 |
| LULU | 4 | 23.7% | 14.82% | 2026-11-15 |
| ERO | 5 | 23.35% | 14.17% | 2026-11-15 |
| GSK | 6 | 25.65% | 10.54% | 2026-11-15 |
| GAW | 7 | 98.6% | 5.06% | 2026-11-15 |
| ADBE | 8 | 36.79% | 7.59% | 2026-11-15 |
| KLR | 9 | 22.91% | 10.57% | 2026-11-15 |
| ACN | 10 | 27.86% | 8.2% | 2026-11-15 |
| WKL | 11 | 24.79% | 6.42% | 2026-11-15 |
| TER | 12 | 42.38% | 4.23% | 2026-11-15 |
| SFM | 13 | 14.36% | 9.77% | 2026-11-15 |
| ASML | 14 | 92.13% | 3.14% | 2026-11-15 |
| AMAT | 15 | 42.19% | 3.9% | 2026-11-15 |
| REL | 16 | 23.58% | 5.03% | 2026-11-15 |
| GOOGL | 17 | 14.81% | 6.57% | 2026-11-15 |
| AVGO | 18 | 30.68% | 2.57% | 2026-11-15 |
| WOSG | 19 | 11.93% | 7.89% | 2026-11-15 |
| BIRK | 20 | 10.38% | 8.23% | 2026-11-15 |
| SAP | 21 | 18.45% | 4.79% | 2026-11-15 |
| APH | 22 | 22.69% | 4.61% | 2026-11-15 |
| CPB | 23 | 8.33% | 8.72% | 2026-11-15 |
| PEP | 24 | 13.88% | 5.5% | 2026-11-15 |
| PLTR | 25 | 28.22% | 0.91% | 2026-11-15 |
| PRX | 26 | 0.59% | 8.4% | 2026-11-15 |
| META | 27 | 18.11% | 4.6% | 2026-11-15 |
| MSFT | 28 | 20.4% | 3.67% | 2026-11-15 |
| ORCL | 29 | 11.34% | 4.7% | 2026-11-15 |
| IBM | 30 | 13.96% | 4.43% | 2026-11-15 |
| WDAY | 31 | 18.35% | 2.56% | 2026-11-15 |
| AMZN | 32 | 8.22% | 4.68% | 2026-11-15 |
| IQV | 33 | 9.89% | 4.17% | 2026-11-15 |
| NOW | 34 | 8.47% | 1.83% | 2026-11-15 |
| MRVL | 35 | 6.94% | 1.14% | 2026-11-15 |
---

## See Also

- [[finance-overview]]
- [[investment-ideas]]
- [[factor-investing]] — benchmark framework for evaluating concentrated positions
- [[crypto-overview]]
