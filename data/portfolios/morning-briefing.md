════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-27
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Tuesday 23:30 slot, a separate full run. The last briefing was the 10-26 (Monday) run, written 00:20 on 10-27.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso has Mon 10-26 rows for US, EU and most UK names (refresh-technicals runs at 07:17), with KLR, GSK and REL
still on Fri 10-23. Every figure below uses a direct yfinance pull of **Tue 10-27 closes** for all holdings, with RSI(14),
SMA50, MACD and ATR recomputed (ACN via Xetra CSA.DE, ZOE via ZOE.DE). Options are re-marked by hand (Black-Scholes, r 4%).
Data quality: check_data_quality.py was started in the background at the top of this run and hadn't finished when this
was written (it has taken many hours on recent runs). The known holding-level repeats from 10-26 still apply: ACN and ZOE
EU fundamentals, QXO-PB fundamentals, the NBIS option_mark row, and foreign-filer "filings" rows (BIRK, ERO, SAP, RELX).
None of these changes a figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€20,769 (estimated: long equity €17,357 + options ~€1,409 + ORCL short unrealized +€108 + cash €1,895)
                    −€407 vs 10-26's €21,176. Most of it is the bearish overlay: options −€297 as NBIS jumped 11.2% to
                    $170.47 (NBIS put −€157) and ORCL rose 3.5% to $130.53 (ORCL put −€139). The ORCL short gave back €19.
                    Long equity lost €90: ACN −3.7% (−€49), ADBE −4.0% (−€46), EDEN −3.6% (−€41) and REL −2.0% (−€28),
                    partly offset by ERO +4.2% (+€35), LULU +1.6% (+€27) and QXO-PB +1.7% (+€16).
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +65.7%
  Worst Performer:  SFM −19.6% (PRX −16.6%, FLUT −15.0%, EDEN −8.4%, QXO-PB −8.2%)
  Largest Position: LULU (9.7% of long book; GSK 9.3%, SAP 8.6%, REL 8.1%)
  FX:               EUR/USD 1.1133 | GBP/EUR 1.1950 | Prices are Tue 10-27 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +65.7%     │ 55.2    │ ↑     │ Hold     │ Q3 late Oct (tbc) │ 602 │
  │ SAP      │ +55.9%     │ 73.0    │ ↑     │ Hold     │ overbought; FR ✓  │ 310 │
  │ ACN      │ +49.9%     │ 66.0    │ ↑     │ Hold     │ −3.7%; FR lapsed  │ 36  │
  │ KLR      │ +31.6%     │ 49.2    │ ↑     │ Watch    │ MACD bearish      │ 53  │
  │ WKL      │ +21.4%     │ 74.2    │ ↑     │ Hold     │ overbought        │ 69  │
  │ REL      │ +13.7%     │ 66.8    │ ↑     │ Hold     │ cooling           │ 174 │
  │ ZOE      │ +11.4%     │ 62.6    │ ↑     │ Hold     │ —                 │ —   │
  │ BIRK     │ +0.6%      │ 44.4    │ ↓     │ Watch    │ MACD bearish      │ 232 │
  │ ADBE     │ −0.6%      │ 48.9    │ ↓     │ Watch    │ −4.0%, < SMA50    │ 18  │
  │ GSK      │ −0.9%      │ 62.6    │ ↑     │ Hold     │ Earnings 10-28    │ 31  │
  │ ERO      │ −6.6%      │ 43.3    │ ↓     │ Watch    │ Exit cleared      │ 80  │
  │ LULU     │ −7.3%      │ 57.3    │ ↑     │ Hold     │ back > SMA50      │ 23  │
  │ QXO-PB   │ −8.2%      │ 43.3    │ ↓     │ Watch    │ MACD → bullish    │ —   │
  │ EDEN     │ −8.4%      │ 28.6    │ ↓     │ EXIT     │ Exit day 4; <floor│ —   │
  │ FLUT     │ −15.0%     │ 43.8    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ PRX      │ −16.6%     │ 39.6    │ ↓     │ EXIT     │ Exit day 4        │ 539 │
  │ SFM      │ −19.6%     │ 42.5    │ ↓     │ Watch    │ Q3 late Oct (tbc) │ 128 │
  │ ORCL (S) │ +15.5%     │ 44.6    │ ↓     │ Hold     │ short working     │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065), not
  Turso's older entry prices.
  MF# is a full-universe rank (~1,350 tickers), unchanged from 10-26. ACN's MF# is from the NYSE listing. EDEN, ZOE,
  FLUT and QXO-PB return no rank.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $130.53).
  Signal changes vs 10-26:
  - **ERO: Exit cleared → Watch.** +4.2% to $32.52 (RSI 43.3), the first close back above the $31.50 hard stop since
    10-22. It's still 9% below SMA50 ($35.69) with a bearish MACD. The full-exit recommendation lapses; the $31.50 hard
    stop stays.
  - **LULU: Watch → Hold.** +1.6% to $104.59, closing above SMA50 ($103.68) with RSI 57.3 and a bullish MACD.
  - **ADBE: Hold → Watch.** −4.0% to $248.36 (RSI 48.9), back below SMA50 ($255.56). MACD is still bullish.
  - **QXO-PB:** +1.7% to $35.17, and its MACD crossed bullish. RSI 43.3 is now 3.3 points clear of the Exit line.
  - **EDEN: Exit day 4.** −3.6% to €24.30 (RSI 28.6), now 5.7% below the €25.77 patience floor.
  - **PRX: Exit day 4.** +0.7% to €34.27 (RSI 39.6). It's 3.6% above the €33.03 trigger for the second half.
  - ACN fell 3.7% to €211.50 and cooled to RSI 66.0. REL cooled to 66.8. That fall takes ACN out of free-ride range
    (see below).

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.7%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.3% | Healthcare (GSK, ZOE, IQV) 19.6% | Consumer (LULU, SFM, BIRK) 17.2% |
                   Info services (REL, WKL) 15.5% | Industrials (QXO-PB, KLR) 7.7% | Fintech EDEN 6.3% | Internet/SOTP PRX 5.9% |
                   Materials ERO 5.0% | iGaming FLUT 0.4%
                   No sector is above 25%. Tech/Software eased to 22.3% on ACN and ADBE's falls. There's still no staples,
                   energy or communication-services exposure (MO would add staples, AUTO or MONY would add comms).
  Currency split:  EUR 41.6% | USD 38.7% | GBp 19.6% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  EDEN: Full Exit (mechanical Exit, day 4, and **5.7% below the €25.77 patience floor**). €24.30, RSI 28.6, below SMA50
    €28.50, MACD bearish.
  Expected proceeds: ~€1,094. Realized loss ≈ −€104 against the €1,197 real cost, plus ~€3.25 commission, so no CGT.
    Both the signal route and the hard-stop route have said exit since Monday. Waiting has cost another ~€41 today.

  PRX: Trim 50% (15 of 30 shares) (mechanical Exit, day 4, with the SOTP patience override still standing). €34.27,
    RSI 39.6, below SMA50 €36.12, MACD bearish.
  Expected proceeds: ~€514. Realized loss ≈ −€102 plus ~€3.25 commission, so no CGT.
    A full exit would be ~€1,028 (≈ −€204 realized). Exit the remaining 15 shares on a close below €33.03.
    RSI is only 0.4 points under 40, so a small bounce tomorrow would clear the Exit signal.

  ERO: no longer an Exit (cleared to Watch). Hold with the $31.50 hard stop. A full exit now would be ~€876 (≈ −€35
    against the €911 real cost), much better than the −€130 it would have been on 10-23.

  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - SAP (RSI 73.0) still qualifies as a free ride and the cushion over cost widened slightly. See FREE RIDE below.
  - WKL 74.2 and SAP 73.0 are still overbought. ACN (66.0) and REL (66.8) both cooled after falling on Tuesday.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. Nothing is RSI 35–50 above SMA50 with a bullish MACD. KLR is closest (RSI 49.2, above SMA50) but its
  MACD is still bearish.

  ── NEW POSITIONS ──────────────────────────────────────
  MO:   Enter at $73.49 (Tue close, RSI 57.4) — Turso screen 5/5, MF#12, corroborated by llm-research
        Stop: $71.29 | Size: €1,000
  AUTO: Enter at ~528p (Tue close, RSI 59.2). It's holding at the ~530p pullback target. Turso screen 5/5, MF#15,
        corroborated by llm-research
        Stop: 506.1p | Size: €750
  MONY: Enter at ~200p (Tue close, RSI 61.9) — Turso screen 5/5, MF#14. Either/or with AUTO (same sector, same currency).
        Stop: 189.6p | Size: €750
  Cash is €1,895 before any Exit proceeds, enough for MO plus one UK starter. Taking the EDEN Exit and the PRX trim
  (≈+€1,600 net) would fund all of it with reserve left. MO and AUTO were already active Pending Trade Ideas, so no new
  cards were created for them. MONY is a new card (its 10-11 idea expired).
  CF dropped off the screen: Turso's technical rating moved from Buy to Hold on 10-26 ($120.54 Tue, still 2.4% below
  SMA50). Its 10-18 Pending Trade Idea stays open until it is approved, rejected or expires.

INVESTMENT OPPORTUNITIES
  5/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1%, yield 6.6% | MF#12
  Entry: $73.49 (Tue close) | Stop: $71.29 (1.5×ATR $1.47) | Size: €1,000 | RSI: 57.4 | MACD: Bullish
  Conviction: MF#12; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 59.
  Portfolio fit: still the top-ranked name, with the most corroboration. It fills the book's missing Staples sleeve in
    USD. It's flat on the week and 5.2% above SMA50 ($69.87), so it's an at-market entry.

  5/5 · AUTO (FTSE350, Communication Services — Auto Trader Group) — Magic Formula pass, P/E 13.3, EY 10.5%, ROIC 49.0% | MF#15
  Entry: 528p (Tue close) | Stop: 506.1p (1.5×ATR 14.7p) | Size: €750 | RSI: 59.2 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 59.
  Portfolio fit: a new sector with GBp exposure. It held the 528p level for a second session, 4.9% above SMA50 (503p).

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#14
  Entry: ~200p (Tue close) | Stop: 189.6p (1.5×ATR 7.2p) | Size: €750 | RSI: 61.9 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 58.
  Portfolio fit: the cheaper of the two UK marketplaces on P/E and EY, but less corroborated. Take AUTO or MONY, not
    both: together they'd put ~€1,500 into one new sector.

  Also considered: DNLM (5/5, RSI 58.0, exited in Sept at a loss), APA and EOG (4/5, energy, RSI ~75–77, extended),
    TMV (4/5, RSI 73.7, Tech already 22.3%), SAGA, RMV and MOON (4/5, no MF pass), CF (off the screen, see above).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €213.15 → ~€1,066 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€426
  After CGT (€80.27 on €382.25 gain) and commission (~€3.25), net cash is ~€982, which fully recovers the cost (+€25).
  Status: **Execute now (recommended).** RSI 73.0 is still overbought, and the cushion over cost recovered a little
    (+€22 on 10-26, +€25 now). Below ~€208 the net proceeds would no longer cover the cost.

  ACN: **no longer qualifies.** Tuesday's 3.7% fall to €211.50 means 4 shares (€846) are €0.60 short of the €846.60 cost,
    so covering it takes 5 of 6 shares and leaves only 1 free share (the rule needs 2). Back above ~€211.65, the 4-share
    sale qualifies again. At RSI 66.0 it's no longer overbought anyway. Monitor.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€732).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€377).

PORTFOLIO RISKS TO WATCH
  - Downside cluster: EDEN (Exit day 4, well through its floor) and PRX (Exit day 4) are ~12% of the long book. SFM,
    FLUT, BIRK, ERO, QXO-PB and now ADBE are all below SMA50 (~25% of the book).
  - The bearish overlay (~€1,517: puts ~€1,409 + ORCL short +€108) lost ~€316 in one session as NBIS rebounded 11.2%
    (RSI 38.9, still 20% below SMA50) and ORCL rose 3.5%. The ORCL put has 52 days left (ORCL $130.53 vs $108.62
    breakeven), so theta is accelerating. The NBIS put (~€525) is still a hand estimate at 80% vol.
  - Catalysts: GSK earnings Wed 10-28 (stop ref ~1,848p, 1.5×ATR), IQV and SFM late Oct (tbc), FLUT 11-12. EDEN's slide
    since 10-21 is still unexplained and accelerated on Tuesday (−3.6%).
  - Tech/Software (22.3%) had a bad day: ACN −3.7% and ADBE −4.0% together. A further leg down would cost SAP its
    free-ride cushion too.
  - Data: Turso still lags one session (refresh-technicals runs 07:17, and UK names were on 10-23). This briefing used
    direct yfinance Tuesday closes, and the wiki cells show Turso's values.

NEXT ACTIONS
  1. EDEN: execute the Full Exit (~€1,094, ≈ −€104). Day 4 of Exit and 5.7% below the €25.77 floor.
  2. SAP: execute the 5-share free ride (~€982 net, full cost recovery plus €25, 2 shares free) while RSI is 73.
  3. PRX: trim 15 shares (~€514), and exit the rest on a close below €33.03.
  4. ERO: Exit cleared. Hold with the $31.50 hard stop; no sale needed now.
  5. GSK earnings Wed 10-28 (stop ref ~1,848p). Reassess after the print.
  6. Optional entries: MO at market ($73.49); AUTO at ~528p or MONY at ~200p (one, not both). Approve or reject them
     in the Pending Trade Ideas panel, and decide whether to reject the off-screen CF idea.
  7. LULU: back to Hold (above SMA50); patience to ~11-03, trim 9 shares only on a close below $88.54. ACN: free ride
     returns above ~€211.65.
  8. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
