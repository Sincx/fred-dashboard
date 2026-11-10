════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-10
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Tuesday 23:30 slot (started 23:39 CET). This is a separate full run. The last briefing was Monday night's
(dated 11-09, written 00:01 Tuesday).
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso holds Mon 11-09 closes for US names and ACN, but UK/EU are still on **Fri 11-06**. So this briefing, the
Net Value, the Notes text and the options marks use **Tue 11-10 closes from a direct yfinance pull** (every holding has
an 11-10 bar, including ACN on Xetra at €228.00), with RSI14, SMA50, MACD and ATR14 recomputed from those bars.
FX: EUR/USD 1.1168 | GBP/EUR 1.1944.
Options: Black-Scholes marks on Tuesday closes at the same vols as options_pricing.py (ORCL 63.9%, PLTR 66.6%). NBIS is
still a hand estimate at 80% vol, because its Turso row still has no strike, expiry or type.
Data quality: check_data_quality.py was started at the top of the run but had printed nothing by the time this was
written. That has happened before, so it's left running. Monday's run listed 113 failing rows (112 needing manual
review, mostly universe tickers). For holdings, only the known repeats were listed: ACN/ZOE EU fundamentals, QXO-PB
fundamentals and the NBIS option_mark row. None of these changes a price or TA figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€22,228 (estimated: long equity €17,748 + options ~€2,420 + ORCL short unrealized +€164 + cash €1,895)
                    **+€192 vs Monday's €22,036.** The long book was flat (+€1). EDEN +6.4% (+€70) and ZOE +2.2% offset
                    LULU −1.9%, BIRK −3.7%, WKL −1.6% and ERO −2.1%. The AI-infra bounce reversed, so the bearish overlay
                    added +€190: NBIS −5.3% to $134.00, ORCL −1.5% to $117.98 and PLTR −0.2% to $168.82.
                    A slightly stronger dollar (EUR/USD 1.1224 → 1.1168) lifted the USD lines in euro terms.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +67.9% (ACN +61.6%, SAP +53.6%)
  Worst Performer:  SFM −39.0% (ERO −11.9%, FLUT −10.3%, PRX −8.7%)
  Largest Position: LULU (10.0% of long book; GSK 9.0%, SAP 8.3%, REL 8.0%, ACN 7.7%)
  FX:               EUR/USD 1.1168 | GBP/EUR 1.1944 | Prices are Tue 11-10 closes (yfinance)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +67.9%     │ 56.0    │ ↑     │ Hold     │ free-ridden       │ 701 │
  │ ACN      │ +61.6%     │ 63.1    │ ↑     │ Watch    │ FR lapsed (−€4)   │ 77  │
  │ SAP      │ +53.6%     │ 57.6    │ ↑     │ Watch    │ FR ✓ (monitor)    │ 425 │
  │ KLR      │ +25.3%     │ 41.5    │ ↓     │ Watch    │ free-ridden       │ 57  │
  │ WKL      │ +23.3%     │ 59.7    │ ↑     │ Watch    │ FR <25% now       │ 146 │
  │ BIRK     │ +16.2%     │ 61.6    │ ↑     │ Hold     │ −3.7% Tue         │ 268 │
  │ ZOE      │ +15.7%     │ 57.7    │ ↑     │ Watch    │ MACD bearish      │ —   │
  │ REL      │ +15.0%     │ 57.9    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ QXO-PB   │ +5.3%      │ 60.6    │ ↑     │ Hold     │ held Mon's jump   │ —   │
  │ GSK      │ −1.2%      │ 59.2    │ ↑     │ Hold     │ stop ref ~1,838p  │ 47  │
  │ LULU     │ −2.2%      │ 59.3    │ ↑     │ Hold     │ ATR stop ~$103.8  │ 35  │
  │ EDEN     │ −2.4%      │ 48.8    │ ↓     │ Watch    │ back > €25.77 flr │ —   │
  │ ADBE     │ −5.3%      │ 40.5    │ ↓     │ Watch    │ stop $230.20      │ 23  │
  │ PRX      │ −8.7%      │ 63.5    │ ↑     │ Hold     │ exit < €33.03     │ 596 │
  │ FLUT     │ −10.3%     │ 51.4    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ ERO      │ −11.9%     │ 45.1    │ ↓     │ Watch    │ < $31.50 stop     │ 71  │
  │ SFM      │ −39.0%     │ 32.6    │ ↓     │ EXIT     │ Exit day 9        │ 132 │
  │ ORCL (S) │ +23.7%     │ 40.7    │ ↓     │ Hold     │ stop ref ~$130.0  │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065, FLUT $92.02), not
  Turso's older entry prices. MF# is the full-universe rank, unchanged since Sunday. EDEN, ZOE, FLUT and QXO-PB have no
  rank. ACN's rank is from its US listing.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $117.98). A long-side Exit pattern reads as Hold for a short.
  Its stop ref is the close plus 1.5×ATR ($8.03).
  Signal changes vs Monday (the signals are recomputed from yfinance bars, so small RSI differences vs Turso are expected):
  - **EDEN: EXIT → Watch, and it's back above the floor.** +6.4% to €25.89 on 1.7× volume (cause not checked). RSI 48.8,
    and the MACD crossed bullish. It's €0.12 (0.5%) above the €25.77 patience floor, still under SMA50 (€27.43). Monday's
    exit recommendation is withdrawn. The floor becomes the stop.
  - **KLR: EXIT → Watch (mechanical).** +1.1% to 3,008p on 1.9× volume. RSI 41.5 cleared the Exit line, but it's still
    below SMA50 (3,151p) with a bearish MACD. It's 3.7% above the 2,900p sell line.
  - **IQV: Watch → Hold.** −1.3% to $275.15, but the MACD crossed back bullish.
  - **ERO: Watch, but the stop held as broken.** −2.1% to $30.67. The intraday high was $31.45, so it didn't reclaim the
    $31.50 stop. Monday's rule was "exit unless Tuesday closes above $31.50", so the exit stands. See SELLS.
  - **BIRK: RSI back from 70.3 to 61.6.** −3.7% to $37.27. Still Hold.
  - **WKL drops below the free-ride bar.** −1.6% to €87.42 takes the P&L to +23.3%, under the 25% threshold.
  - **ADBE: still Watch.** −0.3% to $236.70. RSI 40.5 is 0.5 pt above the Exit line. The low was $231.82, $1.62 above the
    $230.20 stop.
  - **SFM: still EXIT (day 9).** −1.4% to $48.87, RSI 32.6.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.0%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.0% | Healthcare (GSK, ZOE, IQV) 19.4% | Consumer (LULU, SFM, BIRK) 17.2% |
                   Info services (REL, WKL) 15.4% | Industrials (QXO-PB, KLR) 8.1% | Fintech EDEN 6.6% | Internet/SOTP PRX 6.3% |
                   Materials ERO 4.6% | iGaming FLUT 0.4%
                   No sector is above 25%. Exiting SFM and ERO (7.1% of the book) would lift Tech/Software to ~23.6% of the
                   remaining long book.
  Currency split:  EUR 42.5% | USD 38.5% | GBp 19.1% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (mechanical Exit, day 9; the $60.85 hard stop broke on the 10-29 post-Q3 gap). $48.87 (−1.4%), RSI
    32.6, below SMA50 $65.22, MACD bearish. Monday's bounce faded, and it's at the low end of the post-gap range.
  Expected proceeds: ~$489 (~€438). Realized loss ≈ −€280 plus ~€4.48 commission, so no CGT.

  ERO: **Full Exit on the stop.** Tuesday closed at $30.67, below the $31.50 stop (high $31.45), so Monday's condition
    for holding wasn't met. The mechanical signal is only Watch (RSI 45.1, MACD bullish), but the price is under SMA50
    ($34.20) and the stop decides this one. Exiting now costs ~€18 more than Monday's level would have.
  Expected proceeds: ~$920 (~€824). Realized loss ≈ −€111 against the $1,044.15 cost, plus ~€4.48 commission, so no CGT.

  EDEN: **exit recommendation withdrawn.** Back above the €25.77 floor at €25.89 (RSI 48.8, MACD bullish). Hold, and sell
    all 45 on a close back below €25.77. That's only 0.5% away, so it's a tight leash. The loss is now ≈ −€29 (was ≈ −€99).

  KLR: mechanical Exit cleared (RSI 41.5), **still no action.** The 10 shares are already free-ridden (~€359). Keep the
    rule: sell all 10 on a close below 2,900p (3.7% away) or an RSI close under 35.

  ORCL put: **Hold.** ORCL $117.98 is $2.02 below the $120 strike. It touched $120.23 intraday but closed back under,
    so the close trigger didn't fire. Marked ~$10.53/sh (~€943), 96% of the €982 cost, with 38 days left. The rule
    stands: close it on a close above $120.
  NBIS put: **consider taking the profit.** NBIS −5.3% to $134.00 (RSI 37.3). The hand mark rose from ~€764 to ~€865
    (~$9.66/sh), 181% of the €479 cost. Closing would bank ≈ +€386 gross, ≈ €81 CGT, ≈ €300 net after commission. Check
    the real bid first, since the mark is a hand estimate.
  PLTR put: Hold. PLTR $168.82 (−0.2%, RSI 39.2), marked ~$6.84/sh (~€612), 86% of the €715 cost, 129 days left.
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire. The free rides (SAP, ACN) are below.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals today. No holding is in the RSI 35–50 band above SMA50 with a bullish MACD. EDEN and ERO are in the
  RSI band with a bullish MACD, but both are below SMA50.

  ── NEW POSITIONS ──────────────────────────────────────
  NEM:  Enter at ~$119.96 (Tue close, −4.2%, RSI 54.8, 1.0% above SMA50) — Turso screen 5/5, MF#18
        Stop: $112.66 | Size: €1,000
  MONY: Enter at ~208.0p (Tue close, RSI 59.7, 7.7% above SMA50) — Turso screen 5/5, MF#22
        Stop: 196.1p | Size: €1,000
  IAG:  Enter at ~433p on a pullback (Tue close 456.7p, +1.3%, RSI 65.6, 7.9% above SMA50) — Turso screen 5/5, MF#16
        Stop: 411.5p (from a 433p entry) | Size: €1,000
  Cash is €1,895, enough for one of these now (two if the SFM and ERO exits go through, ~€1,262 more). Every card
  was already active, so dedup skipped all three (IAG, NEM and MONY are still pending from earlier runs). The Tuesday-close
  entries and stops above replace the earlier levels on those cards.

INVESTMENT OPPORTUNITIES
  5/5 · NEM (SP500, Materials — Newmont) — Magic Formula pass, P/E 12.4, EY 13.8%, ROIC 29.4% | MF#18
  Entry: ~$119.96 (current) | Stop: $112.66 (1.5×ATR $4.86) | Size: €1,000 | RSI: 54.8 | MACD: Bullish
  Conviction: MF#18; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 63 (Mon).
  Portfolio fit: Materials is 4.6% (ERO), and 0% if ERO is sold on its stop. NEM would replace a copper miner below its
    stop with a larger, more profitable gold miner. Adds USD. Tuesday's −4.2% brought it back to SMA50 ($118.72) with
    RSI 55, the best entry it has offered on this card. It's the best-placed of the three.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 13.0, EY 11.0%, ROIC 33.6% | MF#22
  Entry: ~208.0p (current) | Stop: 196.1p (1.5×ATR 7.9p) | Size: €1,000 | RSI: 59.7 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 59.
  Portfolio fit: a new sector for the book (0% today). +0.8% Tuesday on light volume (0.5×). A limit near 202.5p (the
    20-day) is the deeper-pullback alternative.

  5/5 · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula pass, P/E 7.2, EY 20.1%,
        ROIC 27.5% | MF#16
  Entry: ~433p on a pullback (Tue close 456.7p) | Stop: 411.5p | Size: €1,000 | RSI: 65.6 | MACD: Bullish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 57 (Fri).
  Portfolio fit: the top-ranked name on the screen, and the only one with an llm-research signal. Industrials is 8.1%,
    so there's room. Adds GBp. It's now extended (RSI 65.6, +1.3% on 1.6× volume, 7.9% above SMA50), so don't chase.
    Airlines are cyclical and sensitive to fuel prices, so keep the stop tight.

  Also considered: **BAMNB** (5/5, MF#36, RSI 71.6, now overbought). **VK** (Vallourec, 5/5, MF#62, RSI 59.2).
    **DNLM** (5/5, exited in Sept at a loss). **REP** (5/5, Energy). **BMY** (5/5, would add to Healthcare at 19%).
    **IMB** (5/5, MF#92, RSI 66). AUTO (4/5, no MF pass).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €209.95 → ~€1,050 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€420
  After CGT (€76.91 on €366.25 gain) and commission (~€4.48), net cash is ~€968, **+€11 over cost after tax**.
  The after-tax break-even is ~€207.05 (1.4% below Tuesday's close).
  Status: **Monitor — execute on the next RSI push above 65.** RSI 57.6, MACD bearish. A limit sell near €214 would
    catch the next push.

  ACN: **still lapsed, but close.** Selling 4 of 6 at €228.00 (Xetra) grosses ~€912 against €846.60 cost, but nets ~€835
    after CGT (€73.00) and commission, €4 short of cost. It requalifies above ~€231.82. Status: Monitor. RSI 63.1, MACD
    bearish.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€739).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€359).
  WKL (+23.3%, fell below the bar today), BIRK (+16.2%), ZOE (+15.7%) and REL (+15.0%) are below the 25% threshold.

PORTFOLIO RISKS TO WATCH
  - The bearish overlay (3 puts plus the ORCL short) is ~€2,584, 12% of net value. It recovered ~€190 today after two
    sessions of giving back ~€800. The NBIS put is the only one marked above cost, and that profit swings €100+ a day.
  - Two positions carry full exit recommendations (SFM day 9, ERO on its broken stop), together ~€1,262 at a combined
    realized loss of ≈ −€391. EDEN came off the list today, but it's only 0.5% above its floor.
  - Five of the eleven names above SMA50 still have a bearish MACD (ACN, SAP, WKL, ZOE, REL), including three of the
    four biggest winners. IQV's MACD turned back bullish.
  - Below SMA50: ADBE, FLUT, EDEN, ERO, SFM and KLR, ~22% of the long book. ADBE (RSI 40.5) is 0.5 pt from a mechanical
    Exit and $6.50 above its stop.
  - No stop orders are in place on any position. **FLUT reports Thu 11-12** (1 share, €74). EDEN's +6.4% and QXO's
    Monday jump are both unexplained.
  - Data: the NBIS put is still marked by hand. Tonight's prices are from yfinance, not Turso, so Wednesday's Turso rows
    may differ slightly. check_data_quality.py hadn't reported by write time.

NEXT ACTIONS
  1. SFM: execute the Full Exit (~$489 / ~€438, ≈ −€280). Day 9.
  2. ERO: execute the Full Exit on the broken stop (~$920 / ~€824, ≈ −€111).
  3. EDEN: hold; sell all 45 on a close below €25.77 (0.5% away).
  4. NBIS put: consider closing to bank ≈ €300 net (check the real bid). ORCL put: close on a close above $120. PLTR put: hold.
  5. SAP: place a limit sell for 5 shares near €214, or execute on an RSI close above 65 (+€11 over cost after tax now).
  6. KLR: sell all 10 free shares on a close below 2,900p or an RSI close under 35.
  7. Optional entries: NEM at ~$119.96 (€1,000; best entry so far), MONY at ~208p (€1,000), IAG on a pullback to ~433p
     (€1,000). Cash covers one now.
  8. FLUT: earnings Thu 11-12, then reassess.
  9. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
