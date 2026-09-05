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
| MGNS | 1 | 43.56% | 14.37% | 2026-08-30 |
| DNLM | 2 | 39.03% | 10.69% | 2026-08-30 |
| GSK | 3 | 26.38% | 10.88% | 2026-08-30 |
| ADBE | 4 | 60.74% | 7.89% | 2026-08-30 |
| ACN | 5 | 27.09% | 10.09% | 2026-08-30 |
| GAW | 6 | 98.6% | 4.61% | 2026-08-30 |
| KLR | 7 | 22.91% | 10.5% | 2026-08-30 |
| WKL | 8 | 24.79% | 7.92% | 2026-08-30 |
| MSFT | 9 | 26.18% | 4.02% | 2026-08-30 |
| ASML | 10 | 65.98% | 2.16% | 2026-08-30 |
| PEP | 11 | 19.38% | 6.61% | 2026-08-30 |
| TER | 12 | 38.24% | 2.49% | 2026-08-30 |
| WOSG | 13 | 11.93% | 8.28% | 2026-08-30 |
| GOOGL | 14 | 24.93% | 3.59% | 2026-08-30 |
| SAP | 15 | 18.2% | 4.93% | 2026-08-30 |
| CPB | 16 | 9.1% | 9.3% | 2026-08-30 |
| APH | 17 | 20.18% | 3.93% | 2026-08-30 |
| IBM | 18 | 13.96% | 4.57% | 2026-08-30 |
| PRX | 19 | 0.59% | 7.47% | 2026-08-30 |
| AVGO | 20 | 24.22% | 1.85% | 2026-08-30 |
| WDAY | 21 | 18.35% | 2.46% | 2026-08-30 |
| IQV | 22 | 9.8% | 4.14% | 2026-08-30 |
| AMZN | 23 | 11.94% | 3.12% | 2026-08-30 |
| ORCL | 24 | 11.48% | 3.93% | 2026-08-30 |
| NOW | 25 | 10.28% | 1.21% | 2026-08-30 |
---

## See Also

- [[finance-overview]]
- [[investment-ideas]]
- [[factor-investing]] — benchmark framework for evaluating concentrated positions
- [[crypto-overview]]
