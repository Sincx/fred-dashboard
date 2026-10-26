⚠ PIPELINE HEALTH WARNING ⚠
STALE/ERROR: refresh-technicals: stale — last successful signal 41h ago
STALE/ERROR: options-mark-to-market: stale — last successful signal 41h ago
Figures below may be based on stale data — verify before acting on any recommendation.
════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-25
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Sunday 23:30 slot. The last briefing was the 10-22 run, written 10-23 15:43, so this is a separate, full run.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Health warning impact: this is a weekend, so the stale flags mostly mean refresh-technicals hasn't run since Saturday
morning. Turso already holds Fri 10-23 closes for US/EU, but UK rows (KLR, GSK, REL) are still on Thu 10-22.
Every figure below uses a direct yfinance pull of **Fri 10-23 closes** for all holdings, with RSI(14), SMA50, MACD
and ATR recomputed (ACN via Xetra CSA.DE, ZOE via ZOE.DE). Options are re-marked by hand (Black-Scholes, r 4%).
Data quality (check_data_quality.py finished after the first write): 601 rows auto-recovered and 258 still failing.
For holdings, the UK/EU technicals (GSK, REL, KLR, SAP, EDEN, WKL, PRX, ZOE) and candidate AUTO were recovered via
yfinance. These holdings are still failing:
  - Known repeats, now 14 consecutive failures each: ACN and ZOE EU fundamentals ("no sa_prefix") and QXO-PB
    fundamentals (no data from any source).
  - The NBIS option_mark row is missing strike, expiry and type (49 consecutive failures). It needs a manual Turso fix.
  - New: "filings" rows for BIRK, ERO, SAP and RELX (plus other foreign ADRs such as NVO) fail. This looks like the new
    Phase 17 SEC filings step not handling foreign filers. It doesn't affect any figure in this briefing.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€21,161 (estimated: long equity €17,465 + options ~€1,673 + ORCL short unrealized +€127 + cash €1,895)
                    −€312 vs 10-22's €21,473. Long equity lost €222: LULU fell 4.9% (−€81), QXO-PB 3.6% (−€35),
                    ADBE 2.5% (−€30), EDEN 2.5% (−€30), BIRK 3.3% (−€25) and SFM 3.8% (−€23). KLR (+1.6%),
                    WKL (+1.6%) and REL partly offset that. Options lost ~€88, mostly theta plus a small ORCL
                    bounce (ORCL put −€53, PLTR put −€29, NBIS put −€6).
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +70.4%
  Worst Performer:  SFM −17.3% (PRX −16.8%, ERO −13.9%, FLUT −13.0%, LULU −12.3%)
  Largest Position: LULU (9.1% of long book; GSK 9.1%, SAP 8.6%, REL 8.3%)
  FX:               EUR/USD 1.1215 | GBP/EUR 1.1925 | Prices are Fri 10-23 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +70.4%     │ 65.5    │ ↑     │ Hold     │ Q3 late Oct (tbc) │ 602 │
  │ ACN      │ +57.1%     │ 78.2    │ ↑     │ Hold     │ overbought; FR ✓  │ 36  │
  │ SAP      │ +56.8%     │ 76.5    │ ↑     │ Hold     │ overbought; FR ✓  │ 310 │
  │ KLR      │ +29.8%     │ 46.3    │ ↓     │ Watch    │ 4p under SMA50    │ 53  │
  │ WKL      │ +24.4%     │ 83.4    │ ↑     │ Hold     │ overbought        │ 69  │
  │ REL      │ +17.5%     │ 82.3    │ ↑     │ Hold     │ overbought        │ 174 │
  │ ZOE      │ +14.5%     │ 74.7    │ ↑     │ Hold     │ overbought        │ —   │
  │ ADBE     │ +5.6%      │ 59.8    │ ↑     │ Hold     │ —                 │ 18  │
  │ BIRK     │ +1.6%      │ 45.9    │ ↓     │ Watch    │ MACD bearish again│ 232 │
  │ EDEN     │ −2.3%      │ 35.1    │ ↓     │ EXIT     │ 0.5% above €25.77 │ —   │
  │ GSK      │ −2.4%      │ 58.8    │ ↑     │ Hold     │ Earnings 10-28    │ 31  │
  │ QXO-PB   │ −9.2%      │ 41.3    │ ↓     │ Watch    │ near Exit         │ —   │
  │ LULU     │ −12.3%     │ 49.7    │ ↓     │ Watch    │ −4.9%, < SMA50    │ 23  │
  │ FLUT     │ −13.0%     │ 47.1    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ ERO      │ −13.9%     │ 31.3    │ ↓     │ EXIT     │ Exit day 4; < stop│ 80  │
  │ PRX      │ −16.8%     │ 37.8    │ ↓     │ EXIT     │ Exit day 2        │ 539 │
  │ SFM      │ −17.3%     │ 47.1    │ ↓     │ Watch    │ Q3 late Oct (tbc) │ 128 │
  │ ORCL (S) │ +18.4%     │ 39.1    │ ↓     │ Hold     │ short working     │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065), not
  Turso's older entry prices.
  MF# is a full-universe rank (~1,350 tickers). ACN's MF# is from the NYSE listing. EDEN, ZOE, FLUT and QXO-PB
  return no rank.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $126.16).
  Signal changes vs 10-22:
  - No signal flips. ERO, EDEN and PRX stay on Exit; everything else keeps its 10-22 signal.
  - EDEN: −2.5% to €25.91, RSI 35.1. It's now only **0.5% above the €25.77 patience floor**.
  - ERO: 4th Exit day. $29.95 (RSI 31.3), still below the $31.50 hard stop.
  - PRX: +0.7% to €34.17 (RSI 37.8), 3.5% above the €33.03 trigger for the second half.
  - BIRK: MACD turned bearish again after Friday's 3.3% drop to $32.57, just under SMA50 $33.53.
  - KLR: +1.6% to 3,114p, RSI 46.3, just 4p under SMA50. A close above SMA50 would move it toward Hold.
  - LULU: −4.9% to $99.01, back under SMA50 ($104.24). Still 11.8% above the $88.54 trim trigger.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.1%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.9% | Healthcare (GSK, ZOE, IQV) 19.5% | Consumer (LULU, SFM, BIRK) 16.6% |
                   Info services (REL, WKL) 15.9% | Industrials (QXO-PB, KLR) 7.5% | Fintech EDEN 6.7% | Internet/SOTP PRX 5.9% |
                   Materials ERO 4.6% | iGaming FLUT 0.4%
                   No sector is above 25%. Tech/Software is still ~2pts from the cap. There's no staples or energy
                   exposure (MO would add staples). CF would replace ERO's Materials slot if ERO is exited.
  Currency split:  EUR 42.5% | USD 38.0% | GBp 19.5% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  ERO: Full Exit (mechanical Exit, 4th day, and still below the $31.50 hard stop). $29.95, RSI 31.3, 16% below
    SMA50 $35.79, MACD bearish.
  Expected proceeds: ~$899 (≈€801). Realized loss ≈ −€130 at today's FX, plus ~€0.89 commission, so no CGT.

  EDEN: Full Exit (mechanical Exit, day 2). €25.91, RSI 35.1, below SMA50 €28.63, MACD bearish.
  Expected proceeds: ~€1,166. Realized loss ≈ −€28 plus ~€3.25 commission, so no CGT.
    It closed 0.5% above the €25.77 patience floor. If you'd prefer to keep the hard-stop route, the floor is
    likely to be tested on Monday.

  PRX: Trim 50% (15 of 30 shares) (mechanical Exit, day 2, with the SOTP patience override still standing). €34.17,
    RSI 37.8, below SMA50 €36.24, MACD bearish.
  Expected proceeds: ~€513. Realized loss ≈ −€103 plus ~€3.25 commission, so no CGT.
    A full exit would be ~€1,025 (≈ −€207 realized). Exit the remaining 15 shares on a close below €33.03.

  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - SAP (RSI 76.5) and ACN (RSI 78.2) both still qualify as free rides. See FREE RIDE below.
  - WKL 83.4, REL 82.3, ACN 78.2, SAP 76.5 and ZOE 74.7 are all overbought together, about 38% of the long book.
  - QXO-PB fell 3.6% to $34.79 (RSI 41.3). It's ~1.3 RSI points from re-triggering Exit; stop ref $33.57.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. Nothing is RSI 35–50 above SMA50 with a bullish MACD. KLR is closest (RSI 46.3, 4p under SMA50)
  but its MACD is bearish. FLUT, LULU and SFM have bullish MACDs but sit below SMA50.

  ── NEW POSITIONS ──────────────────────────────────────
  MO:   Enter at $74.31 (Fri close, RSI 61.5) — Turso screen 5/5, MF#12, corroborated by llm-research
        Stop: $72.05 | Size: €1,000
  AUTO: Enter on a pullback to ~530p (close 542.2p, RSI 67.6) — Turso screen 5/5, MF#15, corroborated by llm-research
        Stop: 508.3p | Size: €750
  CF:   Enter at $120.68 (Fri close, RSI 52.9) — Turso screen 5/5, MF#22
        Stop: $114.38 | Size: €1,000
  Cash is €1,895 before any Exit proceeds, enough for MO plus the AUTO starter. Taking the ERO and EDEN Exits and the
  PRX trim (≈+€2,470 net) would fund all three and still leave reserve. All three were already active Pending Trade
  Ideas, so no new cards were created. TRN dropped off the screen after a 6.6% fall on Friday (210.8p).

INVESTMENT OPPORTUNITIES
  5/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1%, yield 6.6% | MF#12
  Entry: $74.31 (Fri close) | Stop: $72.05 (1.5×ATR $1.51) | Size: €1,000 | RSI: 61.5 | MACD: Bullish
  Conviction: MF#12; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 62.
  Portfolio fit: the top-ranked name on the screen, with the most corroboration (3 signals). It fills the book's missing
    Staples sleeve in USD. RSI has cooled from 71.5 to 61.5 after a 2.3% pullback, so it's now an at-market entry
    rather than a limit.

  5/5 · AUTO (FTSE350, Communication Services — Auto Trader Group) — Magic Formula pass, P/E 13.3, EY 10.5%, ROIC 49.0% | MF#15
  Entry: ~530p pullback (close 542.2p) | Stop: 508.3p (1.5×ATR 14.5p) | Size: €750 | RSI: 67.6 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 68.
  Portfolio fit: a new sector with GBp exposure and the highest-quality business on the screen. It's either/or with
    MONY (5/5, MF#14, 197.3p, RSI 58.3), which is the same sector and currency.

  5/5 · CF (S&P 500, Materials — CF Industries) — Magic Formula pass, P/E 8.6, EY 16.1%, ROIC 24.5%, yield 2.1% | MF#22
  Entry: $120.68 (Fri close) | Stop: $114.38 (1.5×ATR $4.20) | Size: €1,000 | RSI: 52.9 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 53.
  Portfolio fit: it's the cheapest name on the screen, and the best timing (RSI 53). It closed 2.2% below SMA50 $123.40,
    so a close above that would confirm it. It's USD and would sit alongside ERO in Materials (4.6%), or replace it.

  Also considered: MONY (5/5, either/or with AUTO), DNLM (5/5, RSI 57.9, exited in Sept at a loss), APA and EOG
    (4/5, energy, RSI ~76, extended), TMV (4/5, RSI 71, Tech already 22.9%), SAGA and MOON (4/5, no MF pass).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €214.40 → ~€1,072 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€429
  After CGT (€81.59 on €388.50 gain) and commission (~€3.25), net cash is ~€987, which fully recovers the cost (+€30).
  Status: **Execute now (recommended).** RSI 76.5 is still overbought after Q3, and net proceeds still clear the cost.

  ACN: Sell 4 of 6 shares at €221.70 → ~€887 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€443
  After CGT (€67.70 on €322.40 gain) and commission (~€3.25), net cash is ~€816, ~€31 short of full cost recovery.
  Status: **Consider executing now.** RSI 78.2, overbought for a fifth session. There's no Trim signal only because
    weight is 7.6%.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€747).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€371).

PORTFOLIO RISKS TO WATCH
  - Overbought cluster: WKL 83.4, REL 82.3, ACN 78.2, SAP 76.5 and ZOE 74.7 make up ~38% of the long book. A rotation
    out of quality and defensives would hit several at once.
  - Downside cluster: ERO, EDEN and PRX are on Exit (~17% of the long book). QXO-PB is close to Exit again, and KLR,
    SFM, FLUT, LULU and BIRK are all below SMA50. Friday's consumer sell-off (LULU, SFM, BIRK) reversed most of the
    10-22 bounce.
  - The bearish overlay (~€1,800: puts ~€1,673 + ORCL short +€127) slipped ~€90, mostly time decay. The ORCL put has
    54 days left (ORCL $126.16 vs $108.62 breakeven). The NBIS put (~€629) is still a hand estimate at 80% vol.
  - Catalysts: GSK earnings 10-28 (Wed), IQV and SFM late Oct (tbc), FLUT 11-12. EDEN is at its patience floor, and
    its 10-21 drop is still unexplained.
  - Data: refresh-technicals and options-mark-to-market are stale (41h). Turso's UK rows are on 10-22. This briefing
    used direct yfinance Friday closes, and the wiki cells show Turso's values.

NEXT ACTIONS
  1. ERO: execute the Full Exit (~€801). It's the 4th day below the $31.50 hard stop you set as final.
  2. EDEN: Full Exit (~€1,166, ≈ −€28) before Monday, or let the €25.77 floor (0.5% away) act as the stop.
  3. SAP: execute the 5-share free ride (~€987 net, full cost recovery plus €30, 2 shares free).
  4. PRX: trim 15 shares (~€513), and exit the rest on a close below €33.03.
  5. ACN: consider the 4-share free-ride sale (~€887 gross, ~€816 net) while RSI is 78.
  6. Optional entries: MO at market ($74.31), CF at market ($120.68), AUTO (or MONY) on a pullback to ~530p.
     Approve or reject them in the Pending Trade Ideas panel.
  7. GSK earnings Wed 10-28 (stop ref ~1,812p). LULU: patience to ~11-03, trim 9 shares only on a close below $88.54.
  8. Check why refresh-technicals hasn't run since Saturday morning if it's still stale after Monday's 07:17 slot.
     Also fill in the NBIS put's strike, expiry and type in Turso.
════════════════════════════════════════════════════════
