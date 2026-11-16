════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-16
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Monday 23:30 slot (started 23:39 CET). The previous briefing was Sunday night's (dated 11-15, written
00:00 on 11-16), which covered Friday 11-13. This one covers Monday 11-16's session. It is a full run, not a duplicate.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso still holds **Fri 11-13 closes** for every holding (Monday's session lands at the 07:17 refresh), so
prices, RSI14, SMA50, MACD and ATR14 below are **Mon 11-16 closes from a direct yfinance pull**, recomputed with the
pipeline's own indicator code. A few values differ from Sunday's Turso figures for source reasons as well as price
(QXO-PB's SMA50 is $37.44 here against $36.99 on Turso; PRX's Friday RSI is 47.8 here against 49.3).
FX: EUR/USD 1.0999 | GBP/EUR 1.1992.
Options: all three puts are Black-Scholes estimates on Monday's closes (ORCL 65.2% vol, PLTR 66.5% vol, from
options_pricing.py; NBIS a hand estimate at 80% vol, because its Turso row still has no strike, expiry or type).
Data quality: check_data_quality.py was still running when this was written, so its result isn't included. The known
repeats from Sunday (ACN, ZOE and QXO-PB fundamentals; the NBIS option_mark row) are assumed unchanged. None of them
feeds a price or TA figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€22,672 (estimated: long equity €17,675 + options ~€2,940 + ORCL short unrealized +€161 + cash €1,895)
                    **+€513 vs Sunday's €22,159.** All of it is the bearish overlay: the AI-infra names sold off again
                    (NBIS −7.6% to $107.13, ORCL −5.0% to $119.09, PLTR −4.5% to $160.39; causes not checked), lifting
                    the three puts +€537 and the ORCL short +€29. The long book lost €53: ERO −5.9%, SFM −3.6%,
                    QXO-PB −3.6%, FLUT −2.4%, BIRK −1.9%, KLR −1.2%; ZOE +1.7%, EDEN +1.4%, ADBE +1.2%, GSK +0.9%.
                    The stronger dollar (EUR/USD 1.1028 → 1.0999) added roughly €18.
  Available Cap:    €1,895.31 cash
  Best Performer:   ACN +62.4% (IQV +61.5%, SAP +56.1%)
  Worst Performer:  SFM −37.4% (ERO −21.5%, FLUT −14.0%, PRX −13.8%)
  Largest Position: LULU (9.8% of long book; GSK 9.2%, SAP 8.5%, REL 8.3%, ACN 7.8%, WKL 7.7%)
  FX:               EUR/USD 1.0999 | GBP/EUR 1.1992 | Prices are Mon 11-16 closes (direct yfinance)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ ACN      │ +62.4%     │ 63.5    │ ↑     │ Watch    │ FR lapsed (−€8)   │ 77  │
  │ IQV      │ +61.5%     │ 46.1    │ ↓     │ Watch    │ free-ridden       │ 701 │
  │ SAP      │ +56.1%     │ 61.6    │ ↑     │ Watch    │ FR ✓ (monitor)    │ 425 │
  │ WKL      │ +28.2%     │ 65.6    │ ↑     │ Watch    │ FR: RSI > 65      │ 146 │
  │ KLR      │ +26.1%     │ 43.7    │ ↓     │ Watch    │ free-ridden       │ 57  │
  │ ZOE      │ +20.3%     │ 64.5    │ ↑     │ Watch    │ MACD bearish      │ —   │
  │ REL      │ +18.6%     │ 64.6    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ BIRK     │ +11.0%     │ 52.5    │ ↑     │ Hold     │ —                 │ 268 │
  │ GSK      │ −0.5%      │ 59.9    │ ↑     │ Hold     │ stop ref ~1,838p  │ 47  │
  │ ADBE     │ −1.5%      │ 50.4    │ ↑     │ Watch    │ $0.02 > SMA50     │ 23  │
  │ EDEN     │ −2.5%      │ 49.6    │ ↓     │ Watch    │ > €25.77 floor    │ —   │
  │ LULU     │ −6.5%      │ 50.5    │ ↑     │ Watch    │ ATR stop ~$103.8  │ 35  │
  │ QXO-PB   │ −6.7%      │ 45.5    │ ↓     │ Watch    │ lost SMA50        │ —   │
  │ PRX      │ −13.8%     │ 45.6    │ ↓     │ Watch    │ exit < €33.03     │ 596 │
  │ FLUT     │ −14.0%     │ 44.7    │ ↓     │ Watch    │ reported 11-12    │ —   │
  │ ERO      │ −21.5%     │ 35.9    │ ↓     │ EXIT     │ < $31.50 stop     │ 71  │
  │ SFM      │ −37.4%     │ 36.9    │ ↓     │ Watch*   │ < $60.85 stop     │ 132 │
  │ ORCL (S) │ +22.9%     │ 42.6    │ ↓     │ Watch    │ stop ref ~$130.0  │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065, FLUT $92.02), not
  Turso's older entry prices. MF# is the full-universe rank. EDEN, ZOE, FLUT and QXO-PB have no rank. ACN's rank is
  from its US listing.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $119.09). GSK and LULU keep their earlier stop refs.
  Signal changes vs Sunday:
  - **ERO: Watch → mechanical EXIT.** −5.9% to $27.33 (low $27.23, a new closing low for the position), RSI 35.9,
    below SMA50 ($33.74), MACD turned bearish. Sixth straight close below the $31.50 stop, now $4.17 under it.
  - **SFM: EXIT → Watch on a technicality (\*exit still recommended).** −3.6% to $50.17, RSI 36.9, below SMA50
    ($62.90). The MACD line crossed above its signal by 0.03 because the decline is slowing, which clears the
    three-part Exit rule. The broken $60.85 stop still decides it. See SELLS.
  - **EDEN: exit recommendation withdrawn.** +1.4% to €25.88, back €0.11 above the €25.77 patience floor after three
    closes below it. RSI 49.6, MACD bullish, still below SMA50 (€27.07). The rule goes back to: sell all 45 on a close
    below €25.77.
  - **PRX: mechanical Add → Watch.** −0.9% to €35.38 (closed at the low), back €0.30 below SMA50 (€35.68). RSI 45.6,
    MACD bullish. Exit all on a close below €33.03 (6.6% away).
  - **QXO-PB: Hold → Watch.** −3.6% to $35.73, back below SMA50 ($37.44). RSI 45.5, MACD bullish. It has given back
    all of the 11-09 jump.
  - **ADBE: still Watch, but back above SMA50 by $0.02.** +1.2% to $246.00 (high $251.34), RSI 50.4, MACD bearish.
    $15.80 above the $230.20 stop.
  - **ORCL short: still Watch.** −5.0% to $119.09, below SMA50 ($135.87), MACD still bullish (against the short).
    Short gain +$177 (+22.9%), $10.94 under the ~$130.03 stop ref.
  - **KLR: still Watch.** −1.2% to 3,026p (range 2,984–3,130p), RSI 43.7, below SMA50 (3,155p), MACD bearish. 4.2%
    above the 2,900p line.
  - **IQV: still Watch.** −0.1% to $264.73, RSI 46.1, $2.62 below SMA50 ($267.35), MACD bearish.
  - **FLUT: still Watch.** −2.4% to $79.15, RSI 44.7, below SMA50 ($83.19). Lowest close since 10-29.
  - **ZOE: still Watch.** +1.7% to €76.06 on 2× volume, RSI 64.5, P&L +20.3%. MACD is bearish by a hair.
  - WKL (flat at €90.84, RSI 65.6), SAP (€213.40, flat), ACN (+0.1% to €229.20), REL (−0.1% to 3,066p), GSK (+0.9% to
    1,929.5p), LULU (−0.2% to $105.46) and BIRK (−1.9% to $35.61) keep Sunday's signals.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.8%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.6% | Healthcare (GSK, ZOE, IQV) 19.7% | Consumer (LULU, SFM, BIRK) 16.9% |
                   Info services (REL, WKL) 16.0% | Industrials (QXO-PB, KLR) 7.6% | Fintech EDEN 6.6% | Internet/SOTP PRX 6.0% |
                   Materials ERO 4.2% | iGaming FLUT 0.4%
                   No sector is above 25%. Exiting SFM and ERO (6.8% of the book) would lift Tech/Software to ~24.2%
                   of the remaining long book.
  Currency split:  EUR 43.0% | USD 37.5% | GBp 19.5% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  ERO: **Full Exit (mechanical Exit, and the stop).** $27.33 (−5.9%), RSI 35.9, below SMA50 ($33.74), MACD bearish.
    Sixth straight close below the $31.50 stop, $4.17 under it, and the lowest close since the position was opened.
  Expected proceeds: ~$820 (~€745). Realized loss ≈ −€166 against the ~€911 real cost, plus ~€4.55 commission, so no CGT.

  SFM: **Full Exit on the stop** (the $60.85 hard stop broke on the 10-29 post-Q3 gap; this is the 13th session since).
    $50.17 (−3.6%), RSI 36.9, below SMA50 ($62.90). The mechanical signal eased to Watch only because MACD crossed
    by 0.03; nothing about the position improved.
  Expected proceeds: ~$502 (~€456). Realized loss ≈ −€271 plus ~€4.55 commission, so no CGT.

  EDEN: **exit withdrawn.** €25.88 closed back above the €25.77 floor (by €0.11). Sell all 45 on any close below
    €25.77 (~€1,160, ≈ −€37 at the floor). This is the second time in a week it has crossed the line and come back.

  NBIS put: **now 2.8× cost — consider taking it.** NBIS −7.6% to $107.13 (low $104.75, RSI 33.9; cause not checked),
    down 31% in three sessions. The hand mark is ~$14.98/sh (~€1,362), 284% of the €479 cost and a new high for the
    position. Closing would bank ≈ +€883 gross, ≈ €185 CGT, ≈ €693 net after commission. 213 days left, so there's no
    time pressure, but it has given back gains of €250–350 inside a day twice this month. It's your call. The mark is
    an 80%-vol estimate, so check the real bid.
  ORCL put: **close rule no longer fired.** ORCL closed at $119.09, $0.91 below the $120 strike (first close under it
    since 11-10). Marked ~$9.42/sh (~€856), 87% of the €982 cost, 32 days left. Hold; close on a close back above
    $120, or take it sooner, since December theta is now about €10 a day. Closing today realizes ≈ −€126.
  PLTR put: Hold. PLTR $160.39 (−4.5%, RSI 34.9), marked ~$7.94/sh (~€722), 101% of the €715 cost, 123 days left.
  ORCL short: Hold. Cover the 5 shares on a close above ~$130.03 ($10.94 away). Unrealized +$177 (+€161).
  KLR: no action. The 10 shares are free-ridden (~€363). Keep the rule: sell all 10 on a close below 2,900p (4.2%
    away) or an RSI close under 35.
  IQV: no action. The 3 shares are free-ridden (~€722). Sell them on an RSI close under 40 (now 46.1).
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire. The free rides (WKL, SAP, ACN) are below.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. PRX's Sunday Add cleared (back below SMA50). KLR, EDEN, IQV, FLUT, PRX and QXO-PB are in the RSI
  35–50 band but below SMA50.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG:  Enter at ~453.5p (Mon close, +0.1%, RSI 62.7, 6.6% above SMA50) — Turso screen 5/5, MF#16
        Stop: 432.5p | Size: €1,000
  MONY: Enter at ~210.8p (Mon close, flat, RSI 61.8, 8.6% above SMA50) — Turso screen 5/5, MF#22
        Stop: 199.5p | Size: €1,000
  STR:  Enter at ~€106.00 (Mon close, −0.6%, RSI 55.6, 2.2% above SMA50) — Turso screen 5/5, MF#38
        Stop: €100.74 | Size: €1,000
  Cash is €1,895, enough for one of these now (three if the SFM and ERO exits go through, ~€1,202 more).
  All three already have active Pending Trade Idea cards, so dedup skipped them. The Monday-close levels above
  replace the ones on the cards. **CF comes off the list**: −4.2% to $119.85 (cause not checked), which put it 1.0%
  below SMA50 ($121.08); RSI fell from 59 to 49. Don't act on its card until it closes back above SMA50. **NEM stays
  off**: −2.5% to $110.31, 6.3% below SMA50 ($117.68), MACD turned bearish.

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula pass, P/E 7.2, EY 20.1%,
        ROIC 27.5% | MF#16
  Entry: ~453.5p (current) | Stop: 432.5p (1.5×ATR 14.0p) | Size: €1,000 | RSI: 62.7 | MACD: Bullish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 62.
  Portfolio fit: the top-ranked name on the screen, and the only one with an llm-research signal. Industrials is 7.6%,
    so there's room. Adds GBp. Airlines are cyclical and sensitive to fuel prices.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 13.0, EY 11.0%, ROIC 33.6% | MF#22
  Entry: ~210.8p (current) | Stop: 199.5p (1.5×ATR 7.6p) | Size: €1,000 | RSI: 61.8 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 62.
  Portfolio fit: a new sector for the book (0% today). Adds GBp. It's 8.6% above SMA50, so a limit near 205p (the
    20-day) is the deeper-pullback alternative.

  5/5 · STR (MORNINGSTAR-EU, Industrials — Strabag) — Magic Formula pass, P/E 12.4, EY 12.7%, ROIC 23.5% | MF#38
  Entry: ~€106.00 (current) | Stop: €100.74 (1.5×ATR €3.51) | Size: €1,000 | RSI: 55.6 | MACD: Bullish
  Conviction: MF#38; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 57.
  Portfolio fit: the cleanest setup of the three (RSI under 60, 2.2% above SMA50 €103.74). A second Industrials name
    alongside IAG would take the sector to roughly 18% if both are bought, so pick one. Adds EUR, already the largest
    currency at 43%.

  Also considered: **CF** (5/5, MF#29; dropped today, below SMA50). **REP** (5/5, MF#43, €30.41, −1.6%, RSI 55.0; Energy,
    no corroborating signal yet). **BMY** (5/5, MF#54, $62.93; would add to Healthcare at 19.7%). **GAMA** (5/5, MF#70;
    below SMA50 on Yahoo). **BAMNB** (5/5, RSI 69.6 on Friday, extended). AF (4/5, RSI 78, overbought). WISE, INCY,
    RMV (4/5, no MF pass).
    The "briefing-recommendation" corroboration on MONY, STR, CF, BAMNB and AF comes from this task's own earlier
    picks, so it isn't independent evidence. Only IAG's llm-research signal is.

FREE RIDE OPPORTUNITIES
  WKL: Sell 12 of 15 shares at €90.84 → ~€1,090 gross proceeds covers the cost basis (€1,063.20)
  Free position: 3 shares at zero effective cost | Current value: ~€273
  After CGT (€50.30 on €239.52 gain) and commission (~€4.55), net cash is ~€1,035, €28 short of cost after tax.
  Status: **Lean execute — RSI is still above 65 (65.6) with P&L +28.2%.** The price was flat on Monday and MACD is
    still bearish. The after-tax break-even is ~€93.78; a limit near €92 gets closer to it.

  SAP: Sell 5 of 7 shares at €213.40 → ~€1,067 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€427
  After CGT (€80.54 on €383.50 gain) and commission, net cash is ~€982, **+€25 over cost after tax**.
  Status: **Monitor — execute on the next RSI push above 65.** RSI 61.6, MACD bearish. Monday's high was €214.75, so
    a limit sell at €214 would have filled. After-tax break-even ~€207.05.

  ACN: **still lapsed.** Selling 4 of 6 at €229.20 grosses ~€917 against €846.60 cost, but nets ~€838 after CGT
    (€74.00) and commission, €8 short of cost. It requalifies above ~€231.82. Status: Monitor. RSI 63.5, MACD bearish.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€722).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€363).
  ZOE (+20.3%), REL (+18.6%) and BIRK (+11.0%) are below the 25% threshold. ZOE qualifies above ~€79.03.

PORTFOLIO RISKS TO WATCH
  - The bearish overlay (3 puts plus the ORCL short) is now ~€3,101, 13.7% of net value, and it has driven every
    daily change for two weeks. The three puts are marked at €2,940 against €2,176 cost, but €1,362 of that is the
    NBIS put on a hand estimate, and all of it reverses on an AI-infra bounce (11-11 took €680 off in one session).
  - Two positions carry full exit recommendations (ERO, SFM), together ~€1,202 at a combined realized loss of
    ≈ −€437. Both made new lows for the move on Monday. Neither has been executed.
  - Eight names are below SMA50 (IQV, KLR, EDEN, PRX, FLUT, QXO-PB, SFM, ERO), ~31% of the long book, up from ~26%
    on Friday. ADBE is above its average by two cents.
  - Seven of the nine names above SMA50 have a bearish MACD (ACN, SAP, WKL, REL, ZOE, LULU, ADBE), including the
    three biggest winners still above their average.
  - No stop orders are in place on any position.
  - Data: Monday's figures come from yfinance, not Turso. MONY and WKL show unchanged closes, which may be a late
    Yahoo print. The NBIS put is still marked by hand. The causes of Monday's NBIS, ORCL, PLTR, ERO and CF moves and
    FLUT's post-earnings fall weren't checked. ACN, ZOE and QXO-PB fundamentals have been failing for a month and
    need a manual look.

NEXT ACTIONS
  1. NBIS put: decide whether to bank ≈ €693 net (~€1,362 at the estimated mark, 284% of cost) or hold (213 days left). Check the real bid.
  2. ERO: execute the Full Exit (~$820 / ~€745, ≈ −€166). Mechanical Exit, and six closes below the stop.
  3. SFM: execute the Full Exit (~$502 / ~€456, ≈ −€271). Stop broken since 10-29.
  4. WKL: free ride, sell 12 of 15 (limit ~€92, or at market ~€90.84 for ~€1,035 net). RSI 65.6.
  5. SAP: place a limit sell for 5 shares near €214, or execute on an RSI close above 65 (+€25 over cost after tax now).
  6. EDEN: no sale now. Sell all 45 on a close below €25.77 (it closed €0.11 above).
  7. ORCL put: hold while ORCL closes under $120 (~€856 at the mark, 32 days left); close on a close back above $120.
  8. ORCL short: cover 5 shares on a close above ~$130.03. PLTR put: hold.
  9. KLR: sell all 10 free shares on a close below 2,900p or RSI under 35. IQV: sell the 3 free shares on RSI under 40.
     LULU: watch the ~$103.81 stop ref ($1.65 away). PRX: exit below €33.03.
  10. Optional entries: IAG at ~453.5p, MONY at ~210.8p or STR at ~€106.00 (€1,000 each). Cash covers one now. Leave the CF and NEM cards alone.
  11. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it. Read FLUT's 11-12 results.
════════════════════════════════════════════════════════
