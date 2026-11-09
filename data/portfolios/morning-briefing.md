════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-09
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Monday 23:30 slot (started 23:39 CET). This is a separate full run. The last briefing was Sunday night's
(dated 11-08, written 00:01 Monday).
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso still holds **Fri 11-06 closes** for every holding (Monday's session lands at Tuesday's 07:17 refresh).
So this briefing, the Net Value, the Notes text and the options marks use **Mon 11-09 closes from a direct yfinance
pull**, with RSI14, SMA50, MACD and ATR14 recomputed from those bars. The wiki's synced Last Price cells still show Fri.
ACN has no Monday EU print in that pull, so it's priced from the US listing ($254.37 at EUR/USD 1.1224 ≈ €226.63, −2.35%).
FX: EUR/USD 1.1224 | GBP/EUR 1.1975.
Options: Black-Scholes marks on Monday closes at the same vols as options_pricing.py (ORCL 64.0%, PLTR 66.2%). NBIS is
still a hand estimate at 80% vol, because its Turso row still has no strike, expiry or type.
Data quality: check_data_quality.py was started this run but hadn't finished when this was written. Sunday's run showed
only the known repeats (ACN/ZOE EU fundamentals, QXO-PB fundamentals, the NBIS option_mark row, SEC filings rows for
BIRK/ERO/SAP, PRX valuation). None of those changes a price or TA figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€22,040 (estimated: long equity €17,747 + options ~€2,239 + ORCL short unrealized +€155 + cash €1,895)
                    **−€360 vs Sunday's €22,400.** The long book rose €155: QXO-PB +14.1% (QXO common +19% on 3× volume,
                    cause not checked), ERO +8.5%, BIRK +3.8%, IQV +2.6% and LULU +1.6%. ACN −2.4%, WKL −1.4% and REL −1.4%
                    were the main drags. The AI-infra bounce continued, so the bearish overlay gave back −€521: NBIS +9.2%
                    to $141.45, PLTR +5.5% to $169.20 and ORCL +3.2% to $119.79.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +70.1% (ACN +60.6%, SAP +54.8%)
  Worst Performer:  SFM −38.1% (FLUT −10.9%, ERO −10.0%, PRX −9.1%)
  Largest Position: LULU (10.2% of long book; GSK 9.0%, SAP 8.3%, REL 8.0%, ACN 7.7%)
  FX:               EUR/USD 1.1224 | GBP/EUR 1.1975 | Prices are Mon 11-09 closes (yfinance)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +70.1%     │ 59.7    │ ↑     │ Watch    │ free-ridden       │ 701 │
  │ ACN      │ +60.6%     │ 61.2    │ ↑     │ Watch    │ FR lapsed (−€16)  │ 77  │
  │ SAP      │ +54.8%     │ 60.3    │ ↑     │ Watch    │ FR ✓ (monitor)    │ 425 │
  │ WKL      │ +25.3%     │ 63.5    │ ↑     │ Watch    │ FR ✓ (€47 short)  │ 146 │
  │ KLR      │ +23.9%     │ 38.7    │ ↓     │ EXIT     │ free-ridden       │ 57  │
  │ BIRK     │ +20.7%     │ 70.3    │ ↑     │ Hold     │ RSI overbought    │ 268 │
  │ REL      │ +15.0%     │ 58.1    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ ZOE      │ +13.2%     │ 53.9    │ ↑     │ Watch    │ MACD turned bear  │ —   │
  │ QXO-PB   │ +6.1%      │ 61.7    │ ↑     │ Hold     │ +14.1% Mon        │ —   │
  │ LULU     │ −0.3%      │ 63.7    │ ↑     │ Hold     │ ATR stop ~$105.2  │ 35  │
  │ GSK      │ −1.8%      │ 57.6    │ ↑     │ Hold     │ stop ref ~1,829p  │ 47  │
  │ ADBE     │ −5.0%      │ 41.0    │ ↓     │ Watch    │ stop $230.20      │ 23  │
  │ EDEN     │ −8.3%      │ 35.9    │ ↓     │ EXIT     │ 5.5% < €25.77 flr │ —   │
  │ PRX      │ −9.1%      │ 62.5    │ ↑     │ Hold     │ exit < €33.03     │ 596 │
  │ ERO      │ −10.0%     │ 47.1    │ ↓     │ Watch    │ $0.18 < $31.50 stp│ 71  │
  │ FLUT     │ −10.9%     │ 50.4    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ SFM      │ −38.1%     │ 33.4    │ ↓     │ EXIT     │ Exit day 8        │ 132 │
  │ ORCL (S) │ +22.5%     │ 41.9    │ ↓     │ Hold     │ stop ref ~$133.0  │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065, FLUT $92.02), not
  Turso's older entry prices. MF# is the full-universe rank, unchanged from Sunday. EDEN, ZOE, FLUT and QXO-PB have no
  rank. ACN's rank is from its US listing.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $119.79). A long-side Exit pattern reads as Hold for a short.
  Its stop ref is the close plus 1.5×ATR ($8.78).
  Signal changes vs Sunday (the signals are recomputed from yfinance bars, so small RSI differences vs Turso are expected):
  - **ERO: EXIT → Watch (mechanical).** +8.5% to $31.32, RSI 47.1, so the Exit pattern cleared. It's still $0.18 below
    the $31.50 stop, and the intraday high was $31.52. The stop decides this one; see SELLS below.
  - **QXO-PB: Watch → Hold.** +14.1% to $40.64 (high $41.55) on 3.1× volume, back above SMA50 ($37.69) with a bullish
    MACD. QXO common rose 19.2% on 3× volume, so it's a real move, not a bad print. The cause wasn't checked.
  - **ACN: Hold → Watch, and the free ride lapses.** The US listing fell 2.35% (≈ €226.63) and its MACD crossed bearish.
    The 4-share free ride is now €16 short of cost after tax. The break-even was ~€231.82, so Sunday's "execute or lose
    it" warning played out.
  - **WKL and ZOE: Hold → Watch.** Both MACDs crossed bearish while price stays above SMA50. WKL −1.4% to €88.82, ZOE
    +0.5% to €71.58.
  - **BIRK: still Hold, but RSI is 70.3 (overbought).** +3.8% to $38.72. The Trim rule can't fire at a 4.9% weight, and
    the P&L is +20.7%, below the 25% free-ride bar.
  - **KLR: still EXIT.** +1.2% to 2,974p on 2.6× volume, RSI 38.7. It's now 2.6% above the 2,900p sell line.
  - **SFM: still EXIT (day 8).** +1.0% to $49.58, RSI 33.4. EDEN: still EXIT, −1.1% to €24.34, 5.5% below the floor.
  - **ADBE: still Watch.** −0.8% to $237.32. RSI 41.0 is 1.0 pt above the Exit line, and the price is $7.12 above the
    $230.20 stop.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.2%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.0% | Healthcare (GSK, ZOE, IQV) 19.2% | Consumer (LULU, SFM, BIRK) 17.5% |
                   Info services (REL, WKL) 15.5% | Industrials (QXO-PB, KLR) 8.1% | Internet/SOTP PRX 6.3% | Fintech EDEN 6.2% |
                   Materials ERO 4.7% | iGaming FLUT 0.4%
                   No sector is above 25%. Exiting SFM and EDEN (8.7% of the book) would lift Tech/Software to ~24% of the
                   remaining long book.
  Currency split:  EUR 42.1% | USD 38.9% | GBp 19.0% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (mechanical Exit, day 8; the $60.85 hard stop broke on the 10-29 post-Q3 gap). $49.58 (+1.0%), RSI
    33.4, below SMA50 $65.88, MACD bearish. Monday's bounce was small, and it's still within 3% of the post-gap low.
  Expected proceeds: ~$496 (~€442). Realized loss ≈ −€273 plus ~€4.45 commission, so no CGT.

  EDEN: Full Exit (mechanical Exit; 5.5% below the €25.77 patience floor). €24.34 (−1.1%), RSI 35.9, below SMA50
    €27.51, MACD bearish. This is the lowest close of the current leg.
  Expected proceeds: ~€1,095. Realized loss ≈ −€99 against the €1,193.85 cost, plus ~€4.45 commission, so no CGT.

  ERO: **Exit on the stop, unless it closes back above $31.50.** The mechanical Exit cleared (RSI 47.1), but the hard
    stop is still broken by $0.18, and the price is under SMA50 ($34.33). Monday's +8.5% cut the loss from ≈ −€160 to
    ≈ −€93, so this is a much better exit price than last week's. Exit now (~$940 / ~€837 proceeds, no CGT), or hold
    only if Tuesday closes above $31.50, then reset the stop to Friday's $28.01 low.

  KLR: mechanical Exit, **still no action.** The 10 shares are already free-ridden (~€356), so the downside only touches
    banked gains. Selling costs ~€4.45 commission (1.2% of value, above the 1% minimum-trade rule) plus ~€15 CGT on the
    ~€69 gain. Sell all 10 on a close below 2,900p (2.6% away) or an RSI close under 35.

  ORCL put: **Hold, but the close trigger is $0.21 away.** ORCL $119.79 is $0.21 below the $120 strike. Marked ~$9.82/sh
    (~€874), 89% of the €982 cost, with 39 days left. Sunday's rule stands: close it on a close back above $120. Theta now
    costs ~€12 a day.
  NBIS put: **consider taking the profit (still), and it's shrinking.** NBIS +9.2% to $141.45 (RSI 39.3). The hand mark
    fell from ~€942 to ~€764 (~$8.58/sh), 160% of the €479 cost. Two sessions have now given back ~€340. Closing would bank
    ≈ +€285 gross, ≈ €60 CGT, ≈ €221 net after commission. Check the real bid first, since the mark is a hand estimate.
  PLTR put: Hold. PLTR $169.20 (+5.5%, RSI 39.4), marked ~$6.74/sh (~€600), 84% of the €715 cost, 130 days left.
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire. The free rides (SAP, WKL, ACN) are below.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals today. No holding is in the RSI 35–50 band above SMA50 with a bullish MACD.

  ── NEW POSITIONS ──────────────────────────────────────
  NEM:  Enter at ~$125.16 (Mon close, RSI 62.6, 5.3% above SMA50) — Turso screen 5/5, MF#18
        Stop: $117.61 | Size: €1,000
  MONY: Enter at ~206.4p (Mon close, RSI 58.1, 7.0% above SMA50) — Turso screen 5/5, MF#22
        Stop: 194.8p | Size: €1,000
  IAG:  Enter at ~433p on a pullback (Mon close 450.7p, +3.9%, RSI 63.6, 6.7% above SMA50) — Turso screen 5/5, MF#16
        Stop: 409p (from a 433p entry) | Size: €1,000
  Cash is €1,895, enough for one of these now (two if the SFM and EDEN exits go through, ~€1,530 more). Every card
  was already active, so dedup skipped all three (IAG, NEM and MONY are still pending from earlier runs). The screen
  is unchanged from Sunday because it still ranks on Turso's Friday data. The Monday-close entries and stops above
  replace the Friday levels on those cards.

INVESTMENT OPPORTUNITIES
  5/5 · NEM (SP500, Materials — Newmont) — Magic Formula pass, P/E 12.4, EY 13.8%, ROIC 29.4% | MF#18
  Entry: ~$125.16 (current) | Stop: $117.61 (1.5×ATR $5.03) | Size: €1,000 | RSI: 62.6 | MACD: Bullish
  Conviction: MF#18; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 58 (Fri).
  Portfolio fit: Materials is only 4.7% (ERO). If ERO stops out, NEM swaps a copper miner below its stop for a larger,
    more profitable gold miner. Adds USD. +3.5% Monday, above SMA50 ($118.84). It's the best-placed of the three today.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 13.0, EY 11.0%, ROIC 33.6% | MF#22
  Entry: ~206.4p (current) | Stop: 194.8p (1.5×ATR 7.7p) | Size: €1,000 | RSI: 58.1 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 59.
  Portfolio fit: a new sector for the book (0% today). Flat Monday (−0.3%, on 1.6× volume). It's still near the ~205p
    entry flagged last week, and a limit near 201p (the 20-day) is the deeper-pullback alternative.

  5/5 · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula pass, P/E 7.2, EY 20.1%,
        ROIC 27.5% | MF#16
  Entry: ~433p on a pullback (Mon close 450.7p) | Stop: 409p | Size: €1,000 | RSI: 63.6 | MACD: Bullish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 57 (Fri).
  Portfolio fit: the top-ranked name on the screen, and the only one with an llm-research signal. Industrials is 8.1%,
    so there's room. Adds GBp. Monday's +3.9% (1.4× volume) left it 6.7% above SMA50 (422p), so wait for Friday's
    ~433p area rather than chasing. Airlines are cyclical and sensitive to fuel prices, so keep the stop tight.

  Also considered: **BAMNB** (5/5, MF#36, card still active). **VK** (Vallourec, 5/5, MF#62). **DNLM** (5/5, exited in
    Sept at a loss). **REP** (5/5, Energy). **BMY** (5/5, would add to Healthcare at 19%). **IMB** (5/5, MF#92, RSI 66).
    AUTO (4/5, no MF pass).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €211.65 → ~€1,058 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€423
  After CGT (€78.70 on €374.75 gain) and commission (~€4.45), net cash is ~€975, **+€18 over cost after tax**.
  The after-tax break-even is ~€207.05.
  Status: **Monitor — execute on the next RSI push above 65.** RSI 60.3, MACD bearish. A limit sell near €214 would
    catch the next push.

  WKL: Sell 12 of 15 shares at €88.82 → ~€1,066 gross proceeds covers the cost basis (€1,063.20)
  Free position: 3 shares at zero effective cost | Current value: ~€266
  After CGT (€45.21 on €215.28 gain) and commission (~€4.45), net cash is ~€1,016, **€47 short of cost after tax**
  (was €35 short on Sunday). The after-tax break-even is ~€93.78.
  Status: **Monitor.** P&L +25.3% is barely over the threshold, RSI 63.5, and the MACD just turned bearish.

  ACN: **lapsed.** Selling 4 of 6 at ~€226.63 grosses ~€906 against €846.60 cost, but nets ~€830 after CGT (€71.85) and
    commission, €16 short of cost. It requalifies above ~€231.82. Status: Monitor. RSI 61.2, MACD bearish (US listing).

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€745).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€356).
  BIRK (+20.7%), REL (+15.0%) and ZOE (+13.2%) are below the 25% threshold.

PORTFOLIO RISKS TO WATCH
  - The bearish overlay (3 puts plus the ORCL short) is ~€2,394, 11% of net value. It has given back ~€800 over two
    sessions as NBIS, PLTR and ORCL bounce off oversold. ORCL is $0.21 from the put's close trigger, and the NBIS profit
    has shrunk from ~€623 to ~€285.
  - Two positions carry full exit recommendations (SFM day 8, EDEN 5.5% below its floor), together ~€1,537 at a combined
    realized loss of ≈ −€372. ERO is the third, on a stop that's $0.18 from being reclaimed.
  - MACD crossed bearish on ACN, WKL and ZOE, joining IQV, SAP and REL. Six of the eleven names above SMA50 now have a
    bearish MACD, including the four biggest winners (IQV, ACN, SAP, WKL).
  - Below SMA50 now: ADBE, FLUT, EDEN, ERO, SFM and KLR, ~22% of the long book (QXO-PB moved back above). ADBE (RSI 41.0)
    is 1 pt from a mechanical Exit.
  - No stop orders are in place on any position. **FLUT reports Thu 11-12** (1 share, €73). The QXO jump (+19%) and the
    earlier ZOE drop are both unexplained.
  - Data: the NBIS put is still marked by hand. Tonight's prices are from yfinance, not Turso, so Tuesday's Turso rows
    may differ slightly.

NEXT ACTIONS
  1. SFM: execute the Full Exit (~$496 / ~€442, ≈ −€273). Day 8.
  2. EDEN: execute the Full Exit (~€1,095, ≈ −€99). 5.5% below the €25.77 floor.
  3. ERO: exit on the stop (~€837, ≈ −€93) unless Tuesday closes above $31.50. If it does, hold with the stop at $28.01.
  4. ORCL put: close it on a close above $120 ($0.21 away). NBIS put: consider closing to bank ≈ €221 net (check the
     real bid). PLTR put: hold.
  5. SAP: place a limit sell for 5 shares near €214, or execute on an RSI close above 65 (+€18 over cost after tax now).
  6. KLR: sell all 10 free shares on a close below 2,900p or an RSI close under 35.
  7. Optional entries: NEM at ~$125.16 (€1,000), MONY at ~206.4p (€1,000), IAG on a pullback to ~433p (€1,000). Cash
     covers one now.
  8. FLUT: earnings Thu 11-12, then reassess. QXO-PB: check what drove Monday's +14%.
  9. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
