════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-12
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Thursday 23:30 slot (started 23:40 CET). This is a separate full run. The last briefing was Wednesday
night's (dated 11-11, written 00:00 on 11-12).
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso holds Wed 11-11 rows for every holding (QXO-PB 11-10). Thursday's closes land at the 07:17 refresh.
So this briefing, the Net Value, the Notes text and the options marks use **Thu 11-12 closes from a direct yfinance
pull** (every holding has an 11-12 bar, including ACN on Xetra at €228.00), with RSI14, SMA50, MACD and ATR14
recomputed from those bars.
FX: EUR/USD 1.1057 | GBP/EUR 1.1970.
Options: Black-Scholes marks on Thursday closes at options_pricing.py's current vols (ORCL 65.2%, PLTR 66.6%). NBIS
is still a hand estimate at 80% vol, because its Turso row still has no strike, expiry or type.
Data quality: check_data_quality.py was still running at write time (it retries each failing row). Nothing from it
is reflected here. Wednesday's known failing rows (ACN/ZOE/QXO-PB fundamentals, the NBIS option mark, some filings
rows) don't affect any price or TA figure below.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€21,788 (estimated: long equity €17,643 + options ~€2,125 + ORCL short unrealized +€124 + cash €1,895)
                    **+€286 vs Wednesday's €21,502.** The bearish overlay did it: NBIS fell 16.8% to $128.64 on
                    2.6× volume (cause not checked), which lifted the NBIS put ~€331. Options +€385 in total, the
                    ORCL short +€6. The long book lost €106: QXO-PB −5.9%, FLUT −4.1% after earnings, ERO −3.8%,
                    LULU −2.8%, BIRK −2.5%, PRX −2.4%; ZOE +2.1%, SFM +1.6%, WKL +1.2%. A stronger dollar
                    (EUR/USD 1.1093 → 1.1057) added roughly €22 to the USD holdings.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +65.4% (ACN +61.6%, SAP +55.5%)
  Worst Performer:  SFM −35.9% (ERO −14.5%, PRX −12.1%, FLUT −10.9%)
  Largest Position: LULU (9.6% of long book; GSK 9.0%, SAP 8.4%, REL 8.2%, ACN 7.8%)
  FX:               EUR/USD 1.1057 | GBP/EUR 1.1970 | Prices are Thu 11-12 closes (yfinance)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +65.4%     │ 51.9    │ ↑     │ Hold     │ free-ridden       │ 701 │
  │ ACN      │ +61.6%     │ 62.6    │ ↑     │ Watch    │ FR lapsed (−€12)  │ 77  │
  │ SAP      │ +55.5%     │ 60.6    │ ↑     │ Watch    │ FR ✓ (monitor)    │ 425 │
  │ KLR      │ +28.8%     │ 47.6    │ ↓     │ Watch    │ free-ridden       │ 57  │
  │ WKL      │ +26.3%     │ 63.3    │ ↑     │ Watch    │ FR ≥25% again     │ 146 │
  │ ZOE      │ +18.1%     │ 61.3    │ ↑     │ Watch    │ MACD bearish      │ —   │
  │ REL      │ +16.8%     │ 61.5    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ BIRK     │ +11.3%     │ 53.5    │ ↑     │ Hold     │ —                 │ 268 │
  │ QXO-PB   │ −0.9%      │ 52.1    │ ↑     │ Hold     │ −5.9% today       │ —   │
  │ GSK      │ −2.0%      │ 55.8    │ ↑     │ Hold     │ stop ref ~1,838p  │ 47  │
  │ ADBE     │ −4.5%      │ 42.5    │ ↓     │ Watch    │ stop $230.20      │ 23  │
  │ EDEN     │ −4.8%      │ 44.7    │ ↓     │ Watch    │ < €25.77 floor    │ —   │
  │ LULU     │ −7.4%      │ 48.8    │ ↑     │ Add*     │ ATR stop ~$103.8  │ 35  │
  │ FLUT     │ −10.9%     │ 49.8    │ ↓     │ Watch    │ reported 11-12    │ —   │
  │ PRX      │ −12.1%     │ 50.9    │ ↑     │ Hold     │ exit < €33.03     │ 596 │
  │ ERO      │ −14.5%     │ 42.5    │ ↓     │ Watch    │ < $31.50 stop     │ 71  │
  │ SFM      │ −35.9%     │ 38.1    │ ↓     │ EXIT     │ Exit day 11       │ 132 │
  │ ORCL (S) │ +17.8%     │ 48.4    │ ↓     │ Watch    │ stop ref ~$130.0  │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065, FLUT $92.02), not
  Turso's older entry prices. MF# is the full-universe rank, unchanged since Sunday. EDEN, ZOE, FLUT and QXO-PB have no
  rank. ACN's rank is from its US listing.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $127.11). GSK and LULU keep their earlier stop refs (trailing
  stops aren't lowered on a down day).
  Signal changes vs Wednesday (signals are recomputed from yfinance bars):
  - **LULU: Hold → mechanical Add (\*not recommended).** −2.8% to $104.46, RSI 48.8, above SMA50 ($101.28), MACD
    bullish. The position already cost $2,031 (~€1,837), over the €1,500 cap, and it's the largest holding. It closed
    $0.65 above the ~$103.81 ATR stop ref.
  - **FLUT: Hold → Watch.** −4.1% to $81.97 on its earnings day, back below SMA50 ($84.04). RSI 49.8, MACD bullish.
    The results themselves weren't checked.
  - **ORCL short: Hold → Watch.** −1.0% to $127.11 (low $123.05). MACD turned bullish, which is against the short.
    Still below SMA50 ($137.24) and $2.92 under the ~$130.03 stop ref.
  - **EDEN: Watch, second close below the floor.** −0.9% to €25.25, closing at the day's low, €0.52 (2.0%) under the
    €25.77 patience floor. RSI 44.7, MACD bullish, below SMA50 (€27.25). Exit stands. See SELLS.
  - **ERO: Watch, stop still broken.** −3.8% to $29.76 (low $29.02), now $1.74 below the $31.50 stop. RSI 42.5.
    Exit stands. See SELLS.
  - **SFM: still EXIT (day 11).** +1.6% to $51.38, RSI 38.1, below SMA50 ($64.06), MACD bearish.
  - **KLR: still Watch.** −1.2% to 3,090p. Yahoo shows an intraday low of 2,858p, under the 2,900p sell line, but
    the rule is on the close and the print may be bad. RSI 47.6, 64p below SMA50 (3,154p), MACD bearish.
  - **QXO-PB: still Hold, barely.** −5.9% to $37.94, only $0.31 above SMA50 ($37.63). RSI 52.1, MACD bullish. It has
    given back about half of Monday's +14% jump.
  - **PRX: still Hold.** −2.4% to €36.10, €0.37 above SMA50 (€35.73). RSI 50.9, just outside the Add band.
  - **WKL: still Watch.** +1.2% to €89.50, P&L back above the 25% free-ride bar. See FREE RIDE.
  - **ADBE: still Watch.** +0.4% to $238.54, RSI 42.5 (2.5 pts above the Exit line), $8.34 above the $230.20 stop.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.6%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.3% | Healthcare (GSK, ZOE, IQV) 19.5% | Consumer (LULU, SFM, BIRK) 16.8% |
                   Info services (REL, WKL) 15.8% | Industrials (QXO-PB, KLR) 7.9% | Fintech EDEN 6.4% | Internet/SOTP PRX 6.1% |
                   Materials ERO 4.6% | iGaming FLUT 0.4%
                   No sector is above 25%. Exiting SFM, ERO and EDEN (13.7% of the book) would lift Tech/Software to
                   ~25.8% of the remaining long book, just over the 25% line.
  Currency split:  EUR 42.7% | USD 38.0% | GBp 19.3% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (mechanical Exit, day 11; the $60.85 hard stop broke on the 10-29 post-Q3 gap). $51.38 (+1.6%), RSI
    38.1, below SMA50 $64.06, MACD bearish. Second up day, best close since 11-05.
  Expected proceeds: ~$514 (~€465). Realized loss ≈ −€260 plus ~€4.52 commission, so no CGT.

  ERO: **Full Exit on the stop.** $29.76 (−3.8%) closed below the $31.50 stop for the fourth session running, and
    the gap to the stop widened to $1.74. The mechanical signal is only Watch (RSI 42.5, MACD bullish), but the price
    is under SMA50 ($34.02) and the stop decides this one.
  Expected proceeds: ~$893 (~€807). Realized loss ≈ −€137 against the $1,044.15 cost, plus ~€4.52 commission, so no CGT.

  EDEN: **Full Exit on the floor.** €25.25 is the second straight close below the €25.77 patience floor, at the
    day's low. The mechanical signal is Watch (RSI 44.7, MACD bullish), but it's under SMA50 (€27.25).
  Expected proceeds: ~€1,136 (45 sh). Realized loss ≈ −€61 against the €1,197 real cost, so no CGT.

  ORCL put: **close rule still fired — close it.** ORCL closed at $127.11, $7.11 above the $120 strike. Marked
    ~$6.71/sh (~€607), 62% of the €982 cost, with 36 days left. Closing realizes ≈ −€375, so no CGT. The mark is up
    ~€46 on Wednesday, mostly because options_pricing.py's vol input rose (63.9% → 65.2%). Check the real bid first.
  NBIS put: **the profit is back — consider taking it.** NBIS −16.8% to $128.64 on 2.6× volume (RSI 38.7, low
    $118.81; cause not checked). The hand mark rose from ~€617 to ~€948 (~$10.48/sh), 198% of the €479 cost. Closing
    would bank ≈ +€469 gross, ≈ €98 CGT, ≈ €366 net after commission. This position has swung between ~€617 and
    ~€1,102 in six sessions. It has 217 days left, so there's no time pressure; it's your call. Check the real bid.
  PLTR put: Hold. PLTR $171.58 (−0.5%, RSI 41.9), marked ~$6.31/sh (~€571), 80% of the €715 cost, 127 days left.
  ORCL short: Hold. Cover the 5 shares on a close above ~$130.03 ($2.92 away). Unrealized +$137 (+€124).
  KLR: no action. The 10 shares are free-ridden (~€370). Keep the rule: sell all 10 on a close below 2,900p (6.1%
    away) or an RSI close under 35.
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire. The free rides (SAP, WKL, ACN) are below.

  ── ADDS TO EXISTING ───────────────────────────────────
  LULU: mechanical Add (RSI 48.8, above SMA50, MACD bullish), **not recommended**. The position's cost (~€1,837) is
    already over the €1,500 large-position cap and it's the largest holding at 9.6%.
  No other Add signals. KLR, EDEN and ERO are in the RSI band but below SMA50. PRX (RSI 50.9) is 0.9 pts outside it.

  ── NEW POSITIONS ──────────────────────────────────────
  CF:   Enter at ~$124.92 (Thu close, +1.4%, RSI 58.8, 2.7% above SMA50) — Turso screen 5/5, MF#29
        Stop: $117.67 | Size: €1,000
  MONY: Enter at ~211.6p (Thu close, +0.8%, RSI 63.1, 9.3% above SMA50) — Turso screen 5/5, MF#22
        Stop: 199.6p | Size: €1,000
  IAG:  Enter at ~452p (Thu close 452.1p, −1.4%, RSI 62.1, 6.5% above SMA50) — Turso screen 5/5, MF#16
        Stop: 429.6p | Size: €1,000
  Cash is €1,895, enough for one of these now (three if the SFM, ERO and EDEN exits go through, ~€2,408 more).
  **NEM is dropped from this list for now.** It fell 4.9% to $112.64 on 1.3× volume, 4.8% below SMA50 ($118.38), with
  RSI 45.6. Wednesday's ~$118.47 entry no longer applies. Its Pending Trade Idea card is still active with the old
  levels; wait for a close back above SMA50 before acting on it. CF was written as a new card. The IAG and MONY
  cards were already active, so dedup skipped them, and the Thursday-close levels above replace the ones on the cards.

INVESTMENT OPPORTUNITIES
  5/5 · CF (SP500, Materials — CF Industries) — Magic Formula pass, P/E 9.2, EY 15.1%, ROIC 24.5% | MF#29
  Entry: ~$124.92 (current) | Stop: $117.67 (1.5×ATR $4.83) | Size: €1,000 | RSI: 58.8 | MACD: Bullish
  Conviction: MF#29; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 56 (Wed).
  Portfolio fit: the cleanest setup of the three (RSI under 60, close to SMA50 $121.61). Materials is 4.6% (ERO), and
    0% if ERO is sold on its stop. Adds USD. Fertiliser prices follow natural gas and crop prices, so it's cyclical.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 13.0, EY 11.0%, ROIC 33.6% | MF#22
  Entry: ~211.6p (current) | Stop: 199.6p (1.5×ATR 8.0p) | Size: €1,000 | RSI: 63.1 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 60 (Wed).
  Portfolio fit: a new sector for the book (0% today). Adds GBp. It's 9.3% above SMA50, so a limit near 204p (the
    20-day) is the deeper-pullback alternative.

  5/5 · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula pass, P/E 7.2, EY 20.1%,
        ROIC 27.5% | MF#16
  Entry: ~452p (current) | Stop: 429.6p (1.5×ATR 15.0p) | Size: €1,000 | RSI: 62.1 | MACD: Bullish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 65 (Wed).
  Portfolio fit: the top-ranked name on the screen, and the only one with an llm-research signal. Industrials is 7.9%,
    so there's room. Adds GBp. RSI cooled from 66.2 to 62.1, back inside the 40–65 entry band, so the entry moves
    from the 433p pullback to the current price. Airlines are cyclical and sensitive to fuel prices.

  Also considered: **NEM** (5/5, MF#18; dropped today, see above). **STR** (5/5, MF#38, €107.20, −2.7%, RSI 58.6).
    **DNLM** (5/5, exited in Sept at a loss). **BMY** (5/5, would add to Healthcare at 19.5%). **GAMA** (5/5, MF#70).
    AUTO (4/5, no MF pass). BAMNB (overbought, RSI 71 on Wed). The screen itself is on Wednesday's Turso rows; the
    three picks above were re-priced on Thursday closes.

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €212.55 → ~€1,063 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€425
  After CGT (€79.64 on €379.25 gain) and commission (~€4.52), net cash is ~€979, **+€22 over cost after tax**.
  The after-tax break-even is ~€207.05 (2.6% below Thursday's close).
  Status: **Monitor — execute on the next RSI push above 65.** RSI 60.6, MACD bearish. A limit sell near €214 would
    catch the next push.

  WKL: Sell 12 of 15 shares at €89.50 → ~€1,074 gross proceeds covers the cost basis (€1,063.20)
  Free position: 3 shares at zero effective cost | Current value: ~€269
  After CGT (€46.92 on €223.44 gain) and commission, net cash is ~€1,023, €41 short of cost after tax.
  Status: **Monitor.** P&L is +26.3%, back over the 25% bar, but RSI is 63.3 (under 65) and MACD is bearish.

  ACN: **still lapsed.** Selling 4 of 6 at €228.00 (Xetra) grosses ~€912 against €846.60 cost, but nets ~€835 after
    CGT (€73.00) and commission, €12 short of cost. It requalifies above ~€231.82. Status: Monitor. RSI 62.6, MACD
    bearish.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€736).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€370).
  ZOE (+18.1%), REL (+16.8%) and BIRK (+11.3%) are below the 25% threshold.

PORTFOLIO RISKS TO WATCH
  - The bearish overlay (3 puts plus the ORCL short) is ~€2,249, 10.3% of net value, and it moves the total more than
    the long book does: −€726 on Wednesday, +€391 today. The three puts are marked at €2,125 against €2,176 cost. The
    NBIS put alone is ~€948 on a hand estimate.
  - Three positions carry full exit recommendations (SFM day 11, ERO and EDEN on broken stops), together ~€2,408 at a
    combined realized loss of ≈ −€458. None has been executed, and ERO and EDEN both fell further today.
  - Five of the twelve names above SMA50 still have a bearish MACD (ACN, SAP, WKL, ZOE, REL), including three of the
    four biggest winners.
  - Below SMA50: ADBE, EDEN, ERO, SFM, KLR and FLUT, ~22% of the long book. QXO-PB and PRX are each within ~1% of
    their SMA50 after today's falls. LULU is $0.65 above its ATR stop ref.
  - No stop orders are in place on any position.
  - Data: the NBIS put is still marked by hand. Tonight's prices are from yfinance, not Turso, so Friday's Turso rows
    may differ slightly. check_data_quality.py hadn't reported by write time. The causes of today's moves in NBIS,
    QXO-PB and FLUT weren't checked. KLR's 2,858p intraday low is unverified.

NEXT ACTIONS
  1. ORCL put: close it (rule fired; ORCL $127.11 vs the $120 strike; ~€607 at the estimated mark, ≈ −€375). Check the real bid.
  2. NBIS put: decide whether to bank ≈ €366 net (~€948 at the estimated mark, 198% of cost) or hold (217 days left).
  3. SFM: execute the Full Exit (~$514 / ~€465, ≈ −€260). Day 11.
  4. ERO: execute the Full Exit on the broken stop (~$893 / ~€807, ≈ −€137).
  5. EDEN: execute the Full Exit, 45 shares (~€1,136, ≈ −€61). Second close below the €25.77 floor.
  6. ORCL short: cover 5 shares on a close above ~$130.03. PLTR put: hold.
  7. SAP: place a limit sell for 5 shares near €214, or execute on an RSI close above 65 (+€22 over cost after tax now).
  8. KLR: sell all 10 free shares on a close below 2,900p or an RSI close under 35. LULU: watch the ~$103.81 stop ref.
  9. Optional entries: CF at ~$124.92 (€1,000), MONY at ~211.6p (€1,000), IAG at ~452p (€1,000). Cash covers one now.
     Don't act on the NEM card until it closes back above ~$118.4.
  10. FLUT: read the 11-12 results (−4.1% on the day), then reassess the 1 free share.
  11. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
