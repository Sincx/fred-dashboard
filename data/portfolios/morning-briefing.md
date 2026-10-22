════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-22
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Pipeline health: OK, all tracked tasks healthy. This is Thursday night's 23:30 slot (the 10-21 briefing was written at
08:00 this morning after its delayed slot), so this is a separate, full run, not a duplicate.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Price source: Turso still holds prior-session closes (10-21 for most rows; KLR/REL/QXO-PB 10-20). The view script's
GBPUSD fetch worked this time, so all rows have EUR values. Every figure below uses a direct yfinance pull of
**Thu 10-22 closes** for all holdings, with RSI(14), SMA50, MACD and ATR recomputed. ACN uses Xetra CSA.DE and ZOE
uses ZOE.DE. The wiki price cells (synced from Turso) lag this briefing by a session.
Data quality: check_data_quality.py was started in the background at the start of this run and had produced no
output by the time this briefing was written (the usual pattern). Known gaps for holdings carry over from 10-21:
  - ZOE, EDEN, FLUT and QXO-PB have no MF# (no fundamentals in the tracked universe).
  - NBIS put: the Turso row still lacks strike, expiry and option type, so it's marked by hand below.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€21,473 (estimated: long equity €17,687 + options ~€1,761 + ORCL short unrealized +€129 + cash €1,895)
                    +€691 vs 10-21's €20,782. Long equity gained €438: LULU rose 7.8% (+€121), ADBE 6.1% (+€69),
                    and SAP (+3.2%, after Q3) and ACN (+3.2%) added €88 together. ERO fell 5.8% (−€50), PRX 1.9% and
                    KLR 4.0%. Options gained ~€236 as the AI-infra names fell: NBIS −7.2% (put +€104), ORCL −2.8%
                    (put +€92), PLTR −2.7% (put +€41). The ORCL short gained ~€16.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +69.7%
  Worst Performer:  PRX −17.6% (SFM −14.1%, ERO −13.4%, FLUT −11.3%)
  Largest Position: LULU (9.4% of long book; GSK 9.0%, SAP 8.5%, REL 8.2%)
  FX:               EUR/USD 1.1220 | GBP/EUR 1.1937 | Prices are Thu 10-22 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +69.7%     │ 64.7    │ ↑     │ Hold     │ Q3 late Oct (tbc) │ 602 │
  │ ACN      │ +57.5%     │ 79.0    │ ↑     │ Hold     │ overbought; FR ✓  │ 36  │
  │ SAP      │ +57.5%     │ 78.4    │ ↑     │ Hold     │ Q3 +3.2%; FR ✓    │ 310 │
  │ KLR      │ +26.7%     │ 42.7    │ ↓     │ Watch    │ free-ridden       │ 53  │
  │ WKL      │ +22.1%     │ 82.1    │ ↑     │ Hold     │ overbought        │ 69  │
  │ REL      │ +17.1%     │ 81.9    │ ↑     │ Hold     │ overbought        │ 174 │
  │ ZOE      │ +15.2%     │ 77.6    │ ↑     │ Hold     │ overbought        │ —   │
  │ ADBE     │ +8.3%      │ 65.4    │ ↑     │ Hold     │ +6.1%, > SMA50    │ 18  │
  │ BIRK     │ +5.0%      │ 51.2    │ ↓     │ Watch    │ at SMA50          │ 232 │
  │ EDEN     │ +0.2%      │ 38.2    │ ↓     │ EXIT     │ new mech. Exit    │ —   │
  │ GSK      │ −1.3%      │ 62.7    │ ↑     │ Hold     │ Earnings 10-28    │ 31  │
  │ QXO-PB   │ −5.8%      │ 45.4    │ ↓     │ Watch    │ Exit cleared      │ —   │
  │ LULU     │ −7.8%      │ 58.2    │ ↓     │ Watch    │ +7.8%, at SMA50   │ 23  │
  │ FLUT     │ −11.3%     │ 50.0    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ ERO      │ −13.4%     │ 31.7    │ ↓     │ EXIT     │ Exit day 3; < stop│ 80  │
  │ SFM      │ −14.1%     │ 54.3    │ ↓     │ Watch    │ Q3 late Oct (tbc) │ 128 │
  │ PRX      │ −17.6%     │ 35.3    │ ↓     │ EXIT     │ new mech. Exit    │ 539 │
  │ ORCL (S) │ +18.8%     │ 38.4    │ ↓     │ Hold     │ short working     │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses Turso entry prices. KLR/WKL entries in Turso (2,418p / €71.08) differ slightly from the reconciled
  real fills (2,400p / €70.88), so the reconciled P&L is ~+1pt higher for KLR and +0.3pt higher for WKL.
  MF# is a full-universe rank (~1,350 tickers). EDEN and FLUT return no rank from the lookup.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $125.54).
  Signal changes vs 10-21:
  - EDEN: Watch → **Exit**. €26.57 (+0.4%), RSI 38.2, below SMA50 €28.69, and MACD has now turned bearish.
  - PRX: Watch → **Exit**. €33.93 (−1.9%), RSI 35.3, below SMA50 €36.30, MACD turned bearish. It's 2.7% above the
    €33.03 trim trigger.
  - ERO: still **Exit** (3rd day). It fell 5.8% to $30.13 (RSI 31.7) and closed **below the $31.50 hard stop**.
  - QXO-PB: Exit → Watch. It rose 4.0% to $36.10 and RSI recovered to 45.4. It's still below SMA50 with a bearish MACD.
  - ADBE: Watch → Hold. It rose 6.1% to $270.55, back above SMA50 $255.92.
  - BIRK: MACD turned bullish again ($33.68, +4.2%), but it closed $0.01 under SMA50. Still Watch.
  - LULU: +7.8% to $104.06, just $0.59 under SMA50. RSI 58.2.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.4%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.9% | Healthcare (GSK, ZOE, IQV) 19.4% | Consumer (LULU, BIRK, SFM) 17.2% |
                   Info services (REL, WKL) 15.5% | Industrials (QXO-PB, KLR) 7.5% | Fintech EDEN 6.8% | Internet/SOTP PRX 5.8% |
                   Materials ERO 4.6% | iGaming FLUT 0.4%
                   The book is balanced, with no sector above 25%. Tech/Software is now within ~2pts of the 25% cap
                   that would block new tech candidates. There's still no energy or staples exposure (MO below would
                   add staples). If all three Exits are taken, Fintech, Materials and most of Internet/SOTP drop out.
  Currency split:  EUR 42.1% | USD 38.6% | GBp 19.3% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  ERO: Full Exit (mechanical Exit, 3rd day, and it closed through the $31.50 hard stop). $30.13 (−5.8%), RSI 31.7,
    16% below SMA50 $35.88, MACD bearish. The stop was the line set for "treat a close below it as final."
  Expected proceeds: ~$904 (≈€806). Realized loss ≈ −€125 at today's FX (≈ −€105 against the €911 actually paid),
    plus ~€4.46 commission, so no CGT.

  EDEN: Full Exit (new mechanical Exit). €26.57, RSI 38.2, below SMA50 €28.69, MACD bearish. 10-21's 9.5% drop
    hasn't bounced, and the cause is still unconfirmed by this run.
  Expected proceeds: ~€1,196. Gross gain +€1.80, CGT €0.38, commission ~€4.46, so net ≈ −€3. Exiting is essentially
    free in P&L terms.
    Alternative if you want to give the Q3 story time: a hard stop at the €25.77 patience floor (3.0% below the
    close). The 1.5×ATR stop is €25.24.

  PRX: Trim 50% (15 of 30 shares) (new mechanical Exit, with the SOTP patience override still standing). €33.93,
    RSI 35.3, below SMA50 €36.30, MACD bearish.
  Expected proceeds: ~€509. Realized loss ≈ −€107 plus ~€4.46 commission, so no CGT.
    A full exit would be ~€1,018 (≈ −€214 realized). Exit the remaining 15 shares on a close below €33.03
    (2.7% below today's close).

  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - SAP (RSI 78.4) and ACN (RSI 79.0) both qualify as free rides. See FREE RIDE below; that's the preferred way to
    take profit.
  - WKL 82.1, REL 81.9, ACN 79.0, SAP 78.4 and ZOE 77.6 are all overbought together, about 38% of the long book.
  - KLR fell 4.0% to 3,064p (RSI 42.7, below SMA50, MACD bearish). That's one condition from Exit, but it's free-ridden,
    so it's low risk.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. Nothing is RSI 35–50 above SMA50 with a bullish MACD. FLUT (RSI 50.0, MACD bullish) is still 8.5%
  below SMA50. KLR is above RSI 35 but below SMA50 with a bearish MACD.

  ── NEW POSITIONS ──────────────────────────────────────
  MO:   Limit buy at $72.00 (close $76.07, RSI 71.5, extended) — Turso screen 5/5, MF#12, corroborated by llm-research
        Stop: $69.77 | Size: €750
  AUTO: Enter on a pullback to ~530p (close 542.4p, RSI 67.7) — Turso screen 5/5, MF#15, corroborated by llm-research
        Stop: 508.7p | Size: €750
  TRN:  Enter at ~225.6p (Thu close, RSI 64.2) — Turso screen 5/5, MF#37
        Stop: 211.0p | Size: €1,000
  Cash is €1,895 before any Exit proceeds. That funds TRN plus one starter. Taking the ERO and EDEN Exits and the PRX
  trim (+≈€2,500 net) would fund all three and still leave reserve. MO is a new Pending Trade Idea card (the earlier
  MO idea had lapsed). AUTO and TRN were already active pending ideas, so no duplicate cards were created.

INVESTMENT OPPORTUNITIES
  5/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1%, yield 6.6% | MF#12
  Entry: $72.00 limit (close $76.07) | Stop: $69.77 (1.5×ATR $1.49) | Size: €750 | RSI: 71.5 | MACD: Bullish
  Conviction: MF#12; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 66 (Turso, 10-21).
  Portfolio fit: the top-ranked name on the screen, with the most corroboration (3 signals). It fills the book's
    missing Staples sleeve in USD. RSI jumped to 71.5 on a 3% move, so it's a starter at a pullback limit.

  5/5 · AUTO (FTSE350, Communication Services — Auto Trader Group) — Magic Formula pass, P/E 13.3, EY 10.5%, ROIC 49.0% | MF#15
  Entry: ~530p pullback (close 542.4p) | Stop: 508.7p (1.5×ATR 14.2p) | Size: €750 | RSI: 67.7 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 64 (Turso, 10-21).
  Portfolio fit: a new sector with GBp exposure and the highest-quality business on the screen. It's either/or with
    MONY (5/5, MF#14, 200.4p, RSI 63.6), which is the same sector and currency and is still an active pending idea.

  5/5 · TRN (FTSE350, Consumer Discretionary — Trainline) — Magic Formula pass, P/E 10.4, EY 13.9%, ROIC 21.0% | MF#37
  Entry: 225.6p (10-22 close) | Stop: 211.0p (1.5×ATR 9.7p) | Size: €1,000 | RSI: 64.2 | MACD: Bullish
  Conviction: MF#37; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 69 (Turso, 10-20).
  Portfolio fit: GBp platform business. It would lift the Consumer sleeve from 17.2% to ~22%, still under 25%.

  Also considered: MONY (5/5, either/or with AUTO), APA (5/5, RSI 68.5, energy, already pending), TMV (5/5, RSI 69,
    Tech is already 22.9%), EOG (4/5, RSI 71), RMV (4/5, no MF pass, RSI 71.3), DNLM (4/5, RSI 70, exited in Sept
    at a loss), FOUR (4/5, no MF pass).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €215.35 → ~€1,077 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€431
  After CGT (€82.58 on €393.25 gain) and commission (~€4.46), net cash is ~€990, which fully recovers the cost (+€33).
  Status: **Execute now (recommended).** Q3 was received well (+3.2% on 10-22) and RSI is 78.4. Net proceeds now
    clear the cost basis with room to spare.

  ACN: Sell 4 of 6 shares at €222.30 → ~€889 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€445
  After CGT (€68.21 on €324.80 gain) and commission (~€4.46), net cash is ~€817, ~€30 short of full cost recovery.
  Status: **Consider executing now.** RSI 79.0 has been overbought for a fourth session. There's no Trim signal only
    because weight is 7.5%.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€744).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€366).

PORTFOLIO RISKS TO WATCH
  - Overbought cluster: WKL 82.1, REL 81.9, ACN 79.0, SAP 78.4 and ZOE 77.6 make up ~38% of the long book. All five
    rose again today. A rotation out of quality and defensives would hit several at once.
  - Downside cluster: ERO, EDEN and PRX are all on Exit (~17% of the long book). KLR, QXO-PB, SFM, FLUT, LULU and
    BIRK are below SMA50 too. Today's broad bounce (LULU, SFM, BIRK, QXO-PB) eased this a little.
  - The bearish overlay (~€1,890: puts ~€1,761 + ORCL short +€129) gained ~€250 as NBIS (−7.2%), ORCL and PLTR fell.
    The ORCL put now has 57 days left (ORCL $125.54 vs $108.62 breakeven). The NBIS put (~€634) is still a hand
    estimate at 80% vol.
  - Catalyst-heavy fortnight: GSK 10-28, IQV and SFM late Oct (tbc), FLUT 11-12. EDEN's drop is still unexplained.
  - Data: Turso's prices table is a session behind. This briefing used direct yfinance closes, and the wiki cells show
    Turso's lagging values.

NEXT ACTIONS
  1. ERO: execute the Full Exit (~€806). It has closed below the $31.50 hard stop you set as final.
  2. SAP: execute the 5-share free ride (~€990 net, full cost recovery plus €33, 2 shares free).
  3. EDEN: decide between a Full Exit (~€1,196, ≈ flat P&L) and a hard stop at €25.77. Check the Q3 news first.
  4. PRX: trim 15 shares (~€509), and exit the rest on a close below €33.03.
  5. ACN: consider the 4-share free-ride sale (~€889 gross, ~€817 net) while RSI is 79.
  6. Optional entries: TRN at market, AUTO (or MONY) on a pullback to ~530p, MO at a $72.00 limit. Approve or reject
     them in the Pending Trade Ideas panel. Funding all three depends on the Exit decisions.
  7. GSK earnings 10-28 (stop ref ~1,830p). LULU: patience to ~11-03, trim 9 shares only on a close below $88.54.
  8. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
