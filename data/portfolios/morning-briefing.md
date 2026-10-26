════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-26
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Monday 23:30 slot, a separate full run. The last briefing was the 10-25 (Sunday) run.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso has Mon 10-26 rows only for EU names, and some of those are intraday prints (WKL €87.34 vs an €86.58 close).
US and UK rows are still Fri 10-23, because refresh-technicals runs at 07:17. Every figure below uses a direct yfinance pull
of **Mon 10-26 closes** for all holdings, with RSI(14), SMA50, MACD and ATR recomputed (ACN via Xetra CSA.DE, ZOE via
ZOE.DE). Options are re-marked by hand (Black-Scholes, r 4%).
Data quality (check_data_quality.py finished after the first write): ~255 rows still failing, ~231 of them at 3+
consecutive failures (mostly non-held UK technicals such as IGGI, INDV, INP, MRW and NGG). For holdings, every
technicals row is fine. These holdings are still failing, all known repeats:
  - ACN and ZOE EU fundamentals ("no sa_prefix") and QXO-PB fundamentals (no data from any source).
  - The NBIS option_mark row (missing strike/underlying). It needs a manual Turso fix.
  - Foreign-filer "filings" rows for BIRK, ERO, SAP and RELX (the Phase 17 SEC step doesn't handle foreign filers).
None of these changes a figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€21,176 (estimated: long equity €17,447 + options ~€1,706 + ORCL short unrealized +€127 + cash €1,895)
                    +€15 vs 10-25's €21,161. Long equity lost €18: LULU +3.9% (+€63) and ERO +4.2% (+€34) offset
                    EDEN −2.7% (−€31), WKL −1.8% (−€24), ADBE −2.0% (−€23), REL −1.3% (−€20) and IQV −2.1% (−€15).
                    Options gained ~€33. NBIS fell 3.4% to $153.27 (NBIS put +€53), the PLTR put lost ~€18, and the
                    ORCL put was ~flat.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +66.9%
  Worst Performer:  SFM −17.8% (PRX −17.2%, FLUT −12.9%, ERO −10.3%, QXO-PB −9.7%)
  Largest Position: LULU (9.5% of long book; GSK 9.2%, SAP 8.5%, REL 8.2%)
  FX:               EUR/USD 1.1177 | GBP/EUR 1.1935 | Prices are Mon 10-26 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +66.9%     │ 57.7    │ ↑     │ Hold     │ Q3 late Oct (tbc) │ 602 │
  │ SAP      │ +55.3%     │ 72.3    │ ↑     │ Hold     │ overbought; FR ✓  │ 310 │
  │ ACN      │ +55.7%     │ 75.6    │ ↑     │ Hold     │ overbought; FR ✓  │ 36  │
  │ KLR      │ +32.3%     │ 50.4    │ ↑     │ Watch    │ back > SMA50      │ 53  │
  │ WKL      │ +22.2%     │ 76.4    │ ↑     │ Hold     │ overbought        │ 69  │
  │ REL      │ +16.0%     │ 75.5    │ ↑     │ Hold     │ overbought        │ 174 │
  │ ZOE      │ +13.3%     │ 69.5    │ ↑     │ Hold     │ —                 │ —   │
  │ ADBE     │ +3.5%      │ 55.8    │ ↑     │ Hold     │ —                 │ 18  │
  │ BIRK     │ +1.7%      │ 46.1    │ ↓     │ Watch    │ MACD bearish      │ 232 │
  │ GSK      │ −1.3%      │ 61.5    │ ↑     │ Hold     │ Earnings 10-28    │ 31  │
  │ EDEN     │ −4.9%      │ 32.1    │ ↓     │ EXIT     │ BELOW €25.77 floor│ —   │
  │ LULU     │ −8.8%      │ 55.1    │ ↓     │ Watch    │ +3.9%, 1% < SMA50 │ 23  │
  │ QXO-PB   │ −9.7%      │ 40.6    │ ↓     │ Watch    │ 0.6 RSI from Exit │ —   │
  │ ERO      │ −10.3%     │ 37.6    │ ↓     │ EXIT     │ Exit day 5; < stop│ 80  │
  │ FLUT     │ −12.9%     │ 47.3    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ PRX      │ −17.2%     │ 36.8    │ ↓     │ EXIT     │ Exit day 3        │ 539 │
  │ SFM      │ −17.8%     │ 46.2    │ ↓     │ Watch    │ Q3 late Oct (tbc) │ 128 │
  │ ORCL (S) │ +18.4%     │ 39.1    │ ↓     │ Hold     │ short working     │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065), not
  Turso's older entry prices.
  MF# is a full-universe rank (~1,350 tickers), unchanged from 10-25. ACN's MF# is from the NYSE listing. EDEN, ZOE,
  FLUT and QXO-PB return no rank.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $126.06).
  Signal changes vs 10-25:
  - No signal flips. ERO, EDEN and PRX stay on Exit; everything else keeps its signal.
  - **EDEN closed through its patience floor.** −2.7% to €25.22 (RSI 32.1), 2.1% below the €25.77 floor that
    was the alternative hard stop. Both routes now say exit.
  - ERO: +4.2% to $31.21 (RSI 37.6), the 5th Exit day. It's still $0.29 below the $31.50 hard stop.
  - PRX: −0.5% to €34.01 (RSI 36.8), the 3rd Exit day. It's 3.0% above the €33.03 trigger for the second half.
  - KLR: +2.0% to 3,176p, back above SMA50 (3,120p), RSI 50.4. MACD is still bearish, so it stays Watch.
  - LULU: +3.9% to $102.91 (RSI 55.1), just 1% under SMA50 ($103.91). A close above it would make it Hold.
  - QXO-PB: $34.58, RSI 40.6. It's 0.6 RSI points from re-triggering Exit (stop ref $32.18).
  - ZOE cooled to RSI 69.5, out of overbought. SAP eased to 72.3.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.5%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.7% | Healthcare (GSK, ZOE, IQV) 19.5% | Consumer (LULU, SFM, BIRK) 17.1% |
                   Info services (REL, WKL) 15.6% | Industrials (QXO-PB, KLR) 7.5% | Fintech EDEN 6.5% | Internet/SOTP PRX 5.8% |
                   Materials ERO 4.8% | iGaming FLUT 0.4%
                   No sector is above 25%. Tech/Software is still ~2pts from the cap. There's still no staples or
                   energy exposure (MO would add staples). CF would take over ERO's Materials slot if ERO is exited.
  Currency split:  EUR 42.0% | USD 38.4% | GBp 19.5% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  EDEN: Full Exit (mechanical Exit, day 3, and now **below the €25.77 patience floor**). €25.22, RSI 32.1, below SMA50
    €28.57, MACD bearish.
  Expected proceeds: ~€1,135. Realized loss ≈ −€62 against the €1,197 real cost, plus ~€3.25 commission, so no CGT.
    Both the signal route and the hard-stop route now agree, so there's no remaining reason to hold.

  ERO: Full Exit (mechanical Exit, 5th day, still below the $31.50 hard stop). $31.21, RSI 37.6, 13% below SMA50
    $35.74, MACD bearish.
  Expected proceeds: ~$936 (≈€838). Realized loss ≈ −€73 against the €911 real EUR cost, plus ~€0.89 commission, so
    no CGT. Monday's +4.2% bounce makes this a slightly better exit than on Friday.

  PRX: Trim 50% (15 of 30 shares) (mechanical Exit, day 3, with the SOTP patience override still standing). €34.01,
    RSI 36.8, below SMA50 €36.18, MACD bearish.
  Expected proceeds: ~€510. Realized loss ≈ −€106 plus ~€3.25 commission, so no CGT.
    A full exit would be ~€1,020 (≈ −€212 realized). Exit the remaining 15 shares on a close below €33.03.

  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - SAP (RSI 72.3) and ACN (RSI 75.6) both still qualify as free rides. See FREE RIDE below.
  - WKL 76.4, ACN 75.6, REL 75.5 and SAP 72.3 are overbought together, about 32% of the long book.
  - QXO-PB is 0.6 RSI points from Exit. A close below RSI 40 would make it a full-exit candidate again.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. Nothing is RSI 35–50 above SMA50 with a bullish MACD. KLR is closest (back above SMA50, RSI 50.4)
  but its MACD is still bearish. LULU has a bullish MACD and RSI 55 but sits 1% under SMA50.

  ── NEW POSITIONS ──────────────────────────────────────
  MO:   Enter at $73.62 (Mon close, RSI 58.1) — Turso screen 5/5, MF#12, corroborated by llm-research
        Stop: $71.40 | Size: €1,000
  AUTO: Enter at ~528p (Mon close, RSI 59.1). It reached the ~530p pullback target. Turso screen 5/5, MF#15,
        corroborated by llm-research
        Stop: 505.8p | Size: €750
  CF:   Enter at $120.84 (Mon close, RSI 53.2) — Turso screen 5/5, MF#22
        Stop: $114.65 | Size: €1,000
  Cash is €1,895 before any Exit proceeds, enough for MO plus the AUTO starter. Taking the EDEN and ERO Exits and the
  PRX trim (≈+€2,475 net) would fund all three and still leave reserve. All three were already active Pending Trade
  Ideas, so no new cards were created.

INVESTMENT OPPORTUNITIES
  5/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1%, yield 6.6% | MF#12
  Entry: $73.62 (Mon close) | Stop: $71.40 (1.5×ATR $1.48) | Size: €1,000 | RSI: 58.1 | MACD: Bullish
  Conviction: MF#12; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 62.
  Portfolio fit: it's still the top-ranked name, with the most corroboration (3 signals). It fills the book's missing
    Staples sleeve in USD. A second small pullback (−0.9%) leaves it 5.7% above SMA50, so it's an at-market entry.

  5/5 · AUTO (FTSE350, Communication Services — Auto Trader Group) — Magic Formula pass, P/E 13.3, EY 10.5%, ROIC 49.0% | MF#15
  Entry: 528p (Mon close) | Stop: 505.8p (1.5×ATR 14.8p) | Size: €750 | RSI: 59.1 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 68.
  Portfolio fit: a new sector with GBp exposure. Monday's −2.6% took it to the 530p entry level, with RSI cooling
    from 67.6 to 59.1. It's either/or with MONY (5/5, MF#14, 199p, RSI 60.3), which is the same sector and currency.

  5/5 · CF (S&P 500, Materials — CF Industries) — Magic Formula pass, P/E 8.6, EY 16.1%, ROIC 24.5%, yield 2.1% | MF#22
  Entry: $120.84 (Mon close) | Stop: $114.65 (1.5×ATR $4.12) | Size: €1,000 | RSI: 53.2 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 53.
  Portfolio fit: it's the cheapest name on the screen. It's 2.1% below SMA50 $123.45, so a close above that would
    confirm it. It's USD and is the natural replacement for ERO in Materials.

  Also considered: MONY (5/5, either/or with AUTO), DNLM (5/5, RSI 58.0, exited in Sept at a loss), APA and EOG
    (4/5, energy, RSI ~76, extended), TMV (4/5, RSI 73.7, Tech already 22.7%), SAGA and RMV (4/5, no MF pass).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €212.25 → ~€1,061 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€425
  After CGT (€79.33 on €377.75 gain) and commission (~€3.25), net cash is ~€979, which fully recovers the cost (+€22).
  Status: **Execute now (recommended).** RSI 72.3 is still overbought, but the cushion over cost is shrinking
    (+€30 on 10-25, +€22 now). Below ~€208 the net proceeds would no longer cover the cost.

  ACN: Sell 4 of 6 shares at €219.70 → ~€879 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€439
  After CGT (€66.02 on €314.40 gain) and commission (~€3.25), net cash is ~€810, ~€37 short of full cost recovery.
  Status: **Consider executing now.** RSI 75.6, overbought for a sixth session. There's no Trim signal only because
    weight is 7.6%.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€734).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€379).

PORTFOLIO RISKS TO WATCH
  - Downside cluster: EDEN (now through its floor), ERO and PRX are on Exit (~17% of the long book). QXO-PB is 0.6 RSI
    points from Exit, and SFM, FLUT, LULU and BIRK are all still below SMA50.
  - Overbought cluster: WKL 76.4, ACN 75.6, REL 75.5 and SAP 72.3 make up ~32% of the long book, and all four slipped
    1–2% on Monday. A rotation out of quality would hit several at once, and it would also erode the SAP free-ride cushion.
  - The bearish overlay (~€1,833: puts ~€1,706 + ORCL short +€127) gained ~€33 as NBIS fell 3.4% (RSI 28.8). The ORCL
    put has 53 days left (ORCL $126.06 vs $108.62 breakeven). The NBIS put (~€682) is still a hand estimate at 80% vol.
  - Catalysts: GSK earnings Wed 10-28 (stop ref ~1,836p), IQV and SFM late Oct (tbc), FLUT 11-12. EDEN's 10-21 drop is
    still unexplained, and the fall has now carried through the floor.
  - Data: Turso still lags one session for US and UK (refresh-technicals runs 07:17), and EU rows hold intraday prints.
    This briefing used direct yfinance Monday closes, and the wiki cells show Turso's values.

NEXT ACTIONS
  1. EDEN: execute the Full Exit (~€1,135, ≈ −€62). It closed below the €25.77 floor, so both exit routes have triggered.
  2. ERO: execute the Full Exit (~€838, ≈ −€73). It's the 5th day below the $31.50 hard stop.
  3. SAP: execute the 5-share free ride (~€979 net, full cost recovery plus €22, 2 shares free) before the cushion erodes.
  4. PRX: trim 15 shares (~€510), and exit the rest on a close below €33.03.
  5. ACN: consider the 4-share free-ride sale (~€879 gross, ~€810 net) while RSI is 75.6.
  6. Optional entries: MO at market ($73.62), AUTO at ~528p (target reached), CF at market ($120.84).
     Approve or reject them in the Pending Trade Ideas panel.
  7. GSK earnings Wed 10-28 (stop ref ~1,836p). LULU: patience to ~11-03, trim 9 shares only on a close below $88.54.
     QXO-PB: full exit if RSI closes below 40.
  8. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
