════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-11
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Wednesday 23:30 slot (started 23:40 CET). This is a separate full run. The last briefing was Tuesday
night's (dated 11-10, written 23:44).
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso holds Wed 11-11 rows for UK/EU, but they were taken mid-session, and US names are still on Tue 11-10.
So this briefing, the Net Value, the Notes text and the options marks use **Wed 11-11 closes from a direct yfinance
pull** (every holding has an 11-11 bar, including ACN on Xetra at €226.70), with RSI14, SMA50, MACD and ATR14
recomputed from those bars.
FX: EUR/USD 1.1093 | GBP/EUR 1.1967.
Options: Black-Scholes marks on Wednesday closes at the same vols as options_pricing.py (ORCL 63.9%, PLTR 66.6%). NBIS
is still a hand estimate at 80% vol, because its Turso row still has no strike, expiry or type.
Data quality: check_data_quality.py finished after the briefing was first written (this paragraph was added then).
For holdings, the failing rows are the known repeats, all still failing after the automatic retry: ACN and ZOE EU
fundamentals and QXO-PB fundamentals (27 consecutive failures each, need manual review), the NBIS option_mark row
(87 failures, missing strike/expiry/type), plus filings rows for BIRK, ERO and SAP (US) and PRX's EU valuation row.
The rest are universe tickers. None of these changes a price or TA figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€21,502 (estimated: long equity €17,749 + options ~€1,740 + ORCL short unrealized +€118 + cash €1,895)
                    **−€726 vs Tuesday's €22,228.** Almost all of it is the bearish overlay: the AI-infra names
                    rallied hard (NBIS +15.4% to $154.69, ORCL +8.8% to $128.38, PLTR +2.1% to $172.40), which cost
                    the three puts ~€680 and the ORCL short ~€46. The long book was flat (+€1): KLR +3.9%, FLUT +3.6%,
                    SFM +3.5% and WKL +1.1% offset LULU −2.7%, BIRK −1.8%, GSK −1.6% and EDEN −1.5%.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +67.5% (ACN +60.7%, SAP +54.3%)
  Worst Performer:  SFM −36.9% (ERO −11.2%, PRX −10.0%, FLUT −7.1%)
  Largest Position: LULU (9.8% of long book; GSK 8.9%, SAP 8.3%, REL 8.1%, ACN 7.7%)
  FX:               EUR/USD 1.1093 | GBP/EUR 1.1967 | Prices are Wed 11-11 closes (yfinance)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +67.5%     │ 55.3    │ ↑     │ Hold     │ free-ridden       │ 701 │
  │ ACN      │ +60.7%     │ 61.8    │ ↑     │ Watch    │ FR lapsed (−€16)  │ 77  │
  │ SAP      │ +54.3%     │ 58.8    │ ↑     │ Watch    │ FR ✓ (monitor)    │ 425 │
  │ KLR      │ +30.2%     │ 49.9    │ ↓     │ Watch    │ free-ridden       │ 57  │
  │ WKL      │ +24.7%     │ 61.5    │ ↑     │ Watch    │ FR <25% (just)    │ 146 │
  │ REL      │ +16.0%     │ 60.0    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ ZOE      │ +15.6%     │ 57.6    │ ↑     │ Watch    │ MACD bearish      │ —   │
  │ BIRK     │ +14.2%     │ 58.1    │ ↑     │ Hold     │ —                 │ 268 │
  │ QXO-PB   │ +5.3%      │ 60.6    │ ↑     │ Hold     │ —                 │ —   │
  │ GSK      │ −2.7%      │ 53.8    │ ↑     │ Hold     │ stop ref ~1,838p  │ 47  │
  │ EDEN     │ −3.9%      │ 46.2    │ ↓     │ Watch    │ < €25.77 floor    │ —   │
  │ LULU     │ −4.8%      │ 53.8    │ ↑     │ Hold     │ ATR stop ~$103.8  │ 35  │
  │ ADBE     │ −4.9%      │ 41.5    │ ↓     │ Watch    │ stop $230.20      │ 23  │
  │ FLUT     │ −7.1%      │ 56.9    │ ↑     │ Hold     │ Earnings 11-12    │ —   │
  │ PRX      │ −10.0%     │ 58.3    │ ↑     │ Hold     │ exit < €33.03     │ 596 │
  │ ERO      │ −11.2%     │ 46.0    │ ↓     │ Watch    │ < $31.50 stop     │ 71  │
  │ SFM      │ −36.9%     │ 36.3    │ ↓     │ EXIT     │ Exit day 10       │ 132 │
  │ ORCL (S) │ +16.9%     │ 49.4    │ ↓     │ Hold     │ stop ref ~$130.0  │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065, FLUT $92.02), not
  Turso's older entry prices. MF# is the full-universe rank, unchanged since Sunday. EDEN, ZOE, FLUT and QXO-PB have no
  rank. ACN's rank is from its US listing.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $128.38). GSK and LULU keep Tuesday's stop refs (trailing
  stops aren't lowered on a down day).
  Signal changes vs Tuesday (the signals are recomputed from yfinance bars, so small RSI differences vs Turso are expected):
  - **EDEN: Watch, but back below the floor.** −1.5% to €25.49 on normal volume. That's €0.28 (1.1%) under the €25.77
    patience floor, one day after reclaiming it. Tuesday's rule was "sell all 45 on a close below €25.77", so the exit
    is back on. RSI 46.2, MACD still bullish, below SMA50 (€27.34). See SELLS.
  - **FLUT: Watch → Hold.** +3.6% to $85.49, back above SMA50 ($84.44) the day before earnings. RSI 56.9.
  - **KLR: still Watch, much improved.** +3.9% to 3,126p on 2.2× volume (closed at the day's high). RSI 49.9. It's 27p
    under SMA50 (3,153p) with a bearish MACD, and 7.8% above the 2,900p sell line.
  - **ERO: Watch, stop still broken.** +0.8% to $30.92 on light volume (0.5×). The high was exactly $31.50, and it
    closed $0.58 below. The exit on the stop stands. See SELLS.
  - **SFM: still EXIT (day 10).** +3.5% to $50.56, RSI 36.3, below SMA50 ($64.61), MACD bearish.
  - **ADBE: still Watch.** +0.4% to $237.60, RSI 41.5 (1.5 pts above the Exit line), $7.40 above the $230.20 stop.
  - **ORCL short: Hold, but close to its stop.** +8.8% to $128.38 (high $130.77; cause not checked). It closed $1.65
    under Tuesday's ~$130.03 stop ref. Still below SMA50 ($137.61) with a bearish MACD.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.8%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.0% | Healthcare (GSK, ZOE, IQV) 19.3% | Consumer (LULU, SFM, BIRK) 17.0% |
                   Info services (REL, WKL) 15.6% | Industrials (QXO-PB, KLR) 8.3% | Fintech EDEN 6.5% | Internet/SOTP PRX 6.2% |
                   Materials ERO 4.7% | iGaming FLUT 0.4%
                   No sector is above 25%. Exiting SFM, ERO and EDEN (13.7% of the book) would lift Tech/Software to
                   ~25.5% of the remaining long book, just over the 25% line.
  Currency split:  EUR 42.3% | USD 38.6% | GBp 19.1% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (mechanical Exit, day 10; the $60.85 hard stop broke on the 10-29 post-Q3 gap). $50.56 (+3.5%), RSI
    36.3, below SMA50 $64.61, MACD bearish. Today's bounce is the best price since 11-05.
  Expected proceeds: ~$506 (~€456). Realized loss ≈ −€267 plus ~€4.51 commission, so no CGT.

  ERO: **Full Exit on the stop.** $30.92 closed below the $31.50 stop for the third session since Monday's bounce
    (high exactly $31.50). The mechanical signal is only Watch (RSI 46.0, MACD bullish), but the price is under SMA50
    ($34.12) and the stop decides this one.
  Expected proceeds: ~$928 (~€836). Realized loss ≈ −€105 against the $1,044.15 cost, plus ~€4.51 commission, so no CGT.

  EDEN: **Full Exit on the floor.** €25.49 closed back below the €25.77 patience floor, which was Tuesday's stated
    sell condition. The mechanical signal is Watch (RSI 46.2, MACD bullish), but it's under SMA50 (€27.34) and has
    now failed at the floor twice.
  Expected proceeds: ~€1,147 (45 sh). Realized loss ≈ −€50 against the €1,197 real cost, so no CGT.

  ORCL put: **the close rule fired — close it.** ORCL closed at $128.38, $8.38 above the $120 strike, and the rule
    since 11-05 has been "close on a close above $120". Marked ~$6.23/sh (~€561), 57% of the €982 cost, with 37 days
    left and theta speeding up. Closing realizes ≈ −€421, so no CGT. It lost ~€382 today. Check the real bid first.
  NBIS put: **the profit has mostly gone; your call.** NBIS +15.4% to $154.69 on 1.5× volume (RSI 45.6, MACD turned
    bullish; cause not checked). The hand mark fell from ~€865 to ~€617 (~$6.84/sh), 129% of the €479 cost. Closing
    now would bank ≈ +€138 gross, ≈ €29 CGT, ≈ €104 net after commission. It has 218 days left, so there's no time
    pressure, but Tuesday's "consider taking profit" case is much weaker at this mark. Check the real bid.
  PLTR put: Hold. PLTR $172.40 (+2.1%, RSI 42.4), marked ~$6.23/sh (~€562), 79% of the €715 cost, 128 days left.
  ORCL short: Hold. Cover the 5 shares on a close above ~$130.03 ($1.65 away). Unrealized +$131 (+€118).
  KLR: no action. The 10 shares are free-ridden (~€374). Keep the rule: sell all 10 on a close below 2,900p (7.8%
    away) or an RSI close under 35.
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire. The free rides (SAP, ACN) are below.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals today. No holding is in the RSI 35–50 band above SMA50 with a bullish MACD. KLR (RSI 49.9) is 27p
  below SMA50 with a bearish MACD. EDEN and ERO are in the band with a bullish MACD, but both are below SMA50.

  ── NEW POSITIONS ──────────────────────────────────────
  NEM:  Enter at ~$118.47 (Wed close, −1.2%, RSI 52.8, $0.16 below SMA50) — Turso screen 5/5, MF#18
        Stop: $111.46 | Size: €1,000
  MONY: Enter at ~210.0p (Wed close, +1.0%, RSI 61.6, 8.6% above SMA50) — Turso screen 5/5, MF#22
        Stop: 198.2p | Size: €1,000
  IAG:  Enter at ~433p on a pullback (Wed close 458.5p, +0.4%, RSI 66.2, 8.2% above SMA50) — Turso screen 5/5, MF#16
        Stop: 412.3p (from a 433p entry) | Size: €1,000
  Cash is €1,895, enough for one of these now (three if the SFM, ERO and EDEN exits go through, ~€2,439 more). All
  three cards were already active, so dedup skipped them again. The Wednesday-close entries and stops above replace the
  earlier levels on those cards.

INVESTMENT OPPORTUNITIES
  5/5 · NEM (SP500, Materials — Newmont) — Magic Formula pass, P/E 12.4, EY 13.8%, ROIC 29.4% | MF#18
  Entry: ~$118.47 (current) | Stop: $111.46 (1.5×ATR $4.68) | Size: €1,000 | RSI: 52.8 | MACD: Bullish
  Conviction: MF#18; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 55 (Tue).
  Portfolio fit: Materials is 4.7% (ERO), and 0% if ERO is sold on its stop. NEM would replace a copper miner below its
    stop with a larger, more profitable gold miner. Adds USD. It slipped $0.16 under SMA50 ($118.63) today on light
    volume (0.7×). A close back above it would be a cleaner trigger than buying the dip blind.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 13.0, EY 11.0%, ROIC 33.6% | MF#22
  Entry: ~210.0p (current) | Stop: 198.2p (1.5×ATR 7.9p) | Size: €1,000 | RSI: 61.6 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 60.
  Portfolio fit: a new sector for the book (0% today). +1.0% on light volume (0.5×). A limit near 203.5p (the 20-day)
    is the deeper-pullback alternative.

  5/5 · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula pass, P/E 7.2, EY 20.1%,
        ROIC 27.5% | MF#16
  Entry: ~433p on a pullback (Wed close 458.5p) | Stop: 412.3p | Size: €1,000 | RSI: 66.2 | MACD: Bullish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 65.
  Portfolio fit: the top-ranked name on the screen, and the only one with an llm-research signal. Industrials is 8.3%,
    so there's room. Adds GBp. It's still extended (RSI 66.2, 8.2% above SMA50), so don't chase. Airlines are cyclical
    and sensitive to fuel prices, so keep the stop tight.

  Also considered: **CF** (5/5, MF#29, $123.24, RSI 56.4, above SMA50; new on the screen, but it's a second Materials
    name next to NEM). **STR** (5/5, MF#38, RSI 64). **DNLM** (5/5, exited in Sept at a loss). **BMY** (5/5, would add
    to Healthcare at 19%). **GAMA** (5/5, MF#70). AUTO and INCY (4/5, no MF pass). BAMNB and AF (overbought).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €210.95 → ~€1,055 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€422
  After CGT (€77.96 on €371.25 gain) and commission (~€4.51), net cash is ~€972, **+€15 over cost after tax**.
  The after-tax break-even is ~€207.05 (1.8% below Wednesday's close).
  Status: **Monitor — execute on the next RSI push above 65.** RSI 58.8, MACD bearish. A limit sell near €214 would
    catch the next push.

  ACN: **still lapsed.** Selling 4 of 6 at €226.70 (Xetra) grosses ~€907 against €846.60 cost, but nets ~€830 after
    CGT (€71.90) and commission, €16 short of cost. It requalifies above ~€231.82. Status: Monitor. RSI 61.8, MACD
    bearish.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€742).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€374).
  WKL (+24.7%, €0.18 under the 25% bar), REL (+16.0%), ZOE (+15.6%) and BIRK (+14.2%) are below the 25% threshold.

PORTFOLIO RISKS TO WATCH
  - The bearish overlay (3 puts plus the ORCL short) fell ~€726 today to ~€1,858, 8.6% of net value. The three puts
    are now marked at €1,740 against €2,176 cost. The ORCL put's close rule fired and the ORCL short is $1.65 from
    its stop ref, so a second up day in ORCL would trigger both.
  - Three positions carry full exit recommendations (SFM day 10, ERO and EDEN on broken stops), together ~€2,439 at a
    combined realized loss of ≈ −€422. None has been executed.
  - Five of the twelve names above SMA50 still have a bearish MACD (ACN, SAP, WKL, ZOE, REL), including three of the
    four biggest winners.
  - Below SMA50: ADBE, EDEN, ERO, SFM and KLR, ~22% of the long book. ADBE (RSI 41.5) is 1.5 pts from a mechanical
    Exit and $7.40 above its stop.
  - No stop orders are in place on any position. **FLUT reports tomorrow, Thu 11-12** (1 share, €77).
  - Data: the NBIS put is still marked by hand. Tonight's prices are from yfinance, not Turso, so Thursday's Turso rows
    may differ slightly. check_data_quality.py hadn't reported by write time. The causes of today's ORCL and NBIS
    rallies weren't checked.

NEXT ACTIONS
  1. ORCL put: close it (rule fired on the $128.38 close; ~€561 at the estimated mark, ≈ −€421). Check the real bid.
  2. SFM: execute the Full Exit (~$506 / ~€456, ≈ −€267). Day 10.
  3. ERO: execute the Full Exit on the broken stop (~$928 / ~€836, ≈ −€105).
  4. EDEN: execute the Full Exit, 45 shares (~€1,147, ≈ −€50). It closed back below the €25.77 floor.
  5. ORCL short: cover 5 shares on a close above ~$130.03. NBIS put: decide whether to bank ≈ €104 net or hold
     (218 days left). PLTR put: hold.
  6. SAP: place a limit sell for 5 shares near €214, or execute on an RSI close above 65 (+€15 over cost after tax now).
  7. KLR: sell all 10 free shares on a close below 2,900p or an RSI close under 35.
  8. Optional entries: NEM at ~$118.47 (€1,000), MONY at ~210p (€1,000), IAG on a pullback to ~433p (€1,000). Cash
     covers one now.
  9. FLUT: earnings Thu 11-12, then reassess.
  10. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
