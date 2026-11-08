════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-08
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Sunday 23:30 slot (started 23:40 CET). This is a separate full run. The last briefing was Thursday night's
(dated 11-05). There are no Friday or Saturday slots.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso holds **Fri 11-06 closes for every holding** (US, UK and EU). Thursday's Turso closes match the direct
yfinance pull the 11-05 briefing used, so this run takes prices and TA straight from Turso, with no separate pull.
FX: EUR/USD 1.1143 | GBP/EUR 1.1985.
Options: ORCL and PLTR use options_pricing.py's Black-Scholes marks (Fri closes; 64.0% and 66.2% vol). NBIS is a hand
estimate at 80% vol, because its Turso row still has no strike, expiry or type.
Data quality (check_data_quality.py finished after the first write): the holdings still failing are the known repeats,
ACN/ZOE EU fundamentals ("no sa_prefix"), QXO-PB fundamentals ("no data from any source") and the NBIS option_mark row
(no strike). Also failing: SEC filings rows for BIRK, ERO and SAP, and PRX's valuation row. None of these changes a price
or TA figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€22,400 (estimated: long equity €17,592 + options ~€2,742 + ORCL short unrealized +€173 + cash €1,895)
                    **−€498 vs Thursday's €22,900.** Friday was a broad down day for the long book (−€214): SFM −4.8%,
                    ZOE −4.7% (1.8× volume), ADBE −2.9%, WKL −2.5%, SAP −2.3%, EDEN −2.3%, ACN −2.2%, REL −2.2% and
                    KLR −2.0%. IQV +2.6% and ERO +2.7% were the only real gains. The AI-infra names bounced, so the options
                    gave back −€280: NBIS +7.6% to $129.49, PLTR +3.5% to $160.38 and ORCL +0.8% to $116.10.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +65.8% (ACN +65.1%, SAP +54.2%)
  Worst Performer:  SFM −38.7% (ERO −17.1%, FLUT −11.2%, PRX −8.5%)
  Largest Position: LULU (10.2% of long book; GSK 9.0%, SAP 8.4%, REL 8.2%, ACN 7.9%)
  FX:               EUR/USD 1.1143 | GBP/EUR 1.1985 | Prices are Fri 11-06 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +65.8%     │ 54.3    │ ↑     │ Watch    │ free-ridden       │ 701 │
  │ ACN      │ +65.1%     │ 68.2    │ ↑     │ Hold     │ FR ✓ (execute)    │ 77  │
  │ SAP      │ +54.2%     │ 59.4    │ ↑     │ Watch    │ FR ✓ (monitor)    │ 425 │
  │ WKL      │ +27.1%     │ 67.2    │ ↑     │ Hold     │ FR ✓ (€35 short)  │ 146 │
  │ KLR      │ +22.4%     │ 35.8    │ ↓     │ EXIT     │ free-ridden       │ 57  │
  │ REL      │ +16.7%     │ 62.5    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ BIRK     │ +16.4%     │ 66.0    │ ↑     │ Hold     │ —                 │ 268 │
  │ ZOE      │ +12.7%     │ 53.9    │ ↑     │ Hold     │ −4.7% Fri         │ —   │
  │ LULU     │ −1.8%      │ 61.6    │ ↑     │ Hold     │ ATR stop ~$103.7  │ 35  │
  │ GSK      │ −2.6%      │ 55.6    │ ↑     │ Hold     │ stop ref ~1,815p  │ 47  │
  │ ADBE     │ −4.2%      │ 42.3    │ ↓     │ Watch    │ stop $230.20      │ 23  │
  │ QXO-PB   │ −7.0%      │ 48.6    │ ↓     │ Watch    │ stop ref ~$33.1   │ —   │
  │ EDEN     │ −7.3%      │ 37.4    │ ↓     │ EXIT     │ 4.5% < €25.77 flr │ —   │
  │ PRX      │ −8.5%      │ 64.7    │ ↑     │ Hold     │ exit < €33.03     │ 596 │
  │ FLUT     │ −11.2%     │ 49.9    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ ERO      │ −17.1%     │ 37.6    │ ↓     │ EXIT     │ $2.64 < $31.50 stp│ 71  │
  │ SFM      │ −38.7%     │ 32.4    │ ↓     │ EXIT     │ Exit day 7        │ 132 │
  │ ORCL (S) │ +24.9%     │ 38.7    │ ↓     │ Hold     │ stop ref ~$129.4  │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065, FLUT $92.02), not
  Turso's older entry prices. MF# is the full-universe rank, unchanged from Thursday. EDEN, ZOE, FLUT and QXO-PB have no
  rank. ACN's rank is from its US listing.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $116.10). Turso labels it "Exit" because its long-side rule
  fires (RSI < 40, below SMA50, MACD bearish), but for a short that pattern means the trade is working, so it reads as Hold.
  Signal changes vs Thursday:
  - **EDEN: Watch → EXIT (mechanical).** −2.3% to €24.60. RSI fell back to 37.4, below SMA50 (€27.62), MACD bearish.
    Thursday's two-day bounce has faded, and it's now 4.5% below the €25.77 patience floor (12th day below SMA50).
  - **IQV: still Watch, but back above SMA50.** +2.6% to $271.83 (SMA50 $266.45), RSI 54.3. The MACD is still bearish.
    The "sell the 3 free shares on an RSI close < 40" rule is now further away.
  - **SAP: still Watch, and the free ride drops to monitor.** −2.3% to €210.75, RSI 59.4, which is under the 65 needed to
    execute. The free ride still covers cost after tax (+€15).
  - **KLR: still EXIT.** −2.0% to 2,938p, on 2.4× normal volume, after touching 2,900p intraday. RSI 35.8. That is 1.3%
    above the 2,900p reassessment line, and 0.8 pts above the RSI 35 line.
  - **ERO: still EXIT (day 2).** +2.7% to $28.86, but still $2.64 below the $31.50 stop and under its 200-day ($30.61).
  - **ZOE: still Hold.** −4.7% to €71.22 on 1.8× volume (cause not checked). Second big drop in three sessions; it's
    still above SMA50 (€66.18) but now below its 200-day (€78.13). P&L +12.7%, so the free ride is well out of reach.
  - **ADBE: still Watch.** −2.9% to $239.30. RSI 42.3 is 2.3 pts above the Exit line, and the price is $9.10 above the
    $230.20 stop.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.2%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.4% | Healthcare (GSK, ZOE, IQV) 19.2% | Consumer (LULU, SFM, BIRK) 17.4% |
                   Info services (REL, WKL) 15.9% | Industrials (QXO-PB, KLR) 7.5% | Internet/SOTP PRX 6.4% | Fintech EDEN 6.3% |
                   Materials ERO 4.4% | iGaming FLUT 0.4%
                   No sector is above 25%. Executing the three exit recommendations (SFM, ERO, EDEN, 13.2% of the book)
                   would lift Tech/Software to ~26% of the remaining long book. The ACN and SAP free rides would bring it
                   back to ~15%.
  Currency split:  EUR 42.8% | USD 38.0% | GBp 19.2% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (mechanical Exit, day 7; the $60.85 hard stop broke on the 10-29 post-Q3 gap). $49.10 (−4.8%), RSI
    32.4, below SMA50 $66.52, MACD bearish. That's the lowest close since the gap day itself ($48.00), and the third
    faded bounce in a row.
  Expected proceeds: ~$491 (~€441). Realized loss ≈ −€279 plus ~€4.49 commission, so no CGT.

  ERO: Full Exit (mechanical Exit, day 2; $2.64 below the $31.50 stop). $28.86 (+2.7%), RSI 37.6, below SMA50 $34.48
    and the 200-day $30.61, MACD bearish. Friday's bounce came on light volume (0.7×) and only recovered a third of
    Thursday's drop.
  Expected proceeds: ~$866 (~€777). Realized loss ≈ −€160 plus ~€4.49 commission, so no CGT.

  EDEN: Full Exit (mechanical Exit is back; 4.5% below the €25.77 patience floor). €24.60 (−2.3%), RSI 37.4, below
    SMA50 €27.62, MACD bearish. Thursday's €25.17 was the better exit price; that bounce has now faded too.
  Expected proceeds: ~€1,107. Realized loss ≈ −€87 against the €1,193.85 cost, plus ~€4.49 commission, so no CGT.

  KLR: mechanical Exit, **still no action, but the trigger is close.** The 10 shares are already free-ridden (worth
    ~€352), so the downside only touches gains already banked. Selling costs ~€4.49 commission (1.3% of value, above the
    1% minimum-trade rule) plus ~€14 CGT on the ~€65 gain. **Sell all 10 on a close below 2,900p** (1.3% away; Friday's
    low was exactly 2,900p on 2.4× volume) or an RSI close under 35.

  ORCL put: **Hold, in the money.** ORCL $116.10 is $3.90 below the $120 strike. Marked ~$11.71/sh (~€1,051), 107% of
    the €982 cost, with 40 days left. Close it on a close back above $120, or take the profit before theta speeds up in
    December.
  NBIS put: **consider taking the profit (still).** NBIS bounced +7.6% to $129.49 (RSI 34.0) and the hand mark fell from
    ~€1,102 to ~€942 (~$10.50/sh), 197% of the €479 cost. That is the giveback Thursday's note warned about. Closing would
    bank ≈ +€463 gross, ≈ €97 CGT, ≈ €361 net after commission. The mark is a hand estimate, so check the real bid first.
  PLTR put: Hold. PLTR $160.38 (+3.5%, RSI 31.2), marked ~$8.35/sh (~€749), 105% of the €715 cost, 131 days left.
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire. The free rides (ACN, SAP, WKL) are below.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals today. No holding is in the RSI 35–50 band above SMA50 with a bullish MACD.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG:  Enter at ~433.7p (Fri close, RSI 57.3, 2.7% above SMA50) — Turso screen 5/5, MF#16
        Stop: 409.4p | Size: €1,000
  NEM:  Enter at ~$120.91 (Fri close, RSI 58.1, 1.7% above SMA50) — Turso screen 5/5, MF#18
        Stop: $113.57 | Size: €1,000
  MONY: Enter at ~207p (Fri close, RSI 58.9, 7.3% above SMA50) — Turso screen 5/5, MF#22
        Stop: 195.4p | Size: €1,000
  Cash is €1,895 before exit proceeds, so it covers one of these (two if the exits go through: ~€2,325 more, plus
  ~€1,822 net from the ACN and SAP free rides). IAG is a new Pending Trade Idea card. NEM and MONY already had active
  cards, so dedup skipped them. STR is off today's screen, so it isn't carried forward.

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula pass, P/E 7.2, EY 20.1%,
        ROIC 27.5% | MF#16
  Entry: ~433.7p (current) | Stop: 409.4p (1.5×ATR 16.2p) | Size: €1,000 | RSI: 57.3 | MACD: Bullish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 57.
  Portfolio fit: the best-ranked name on the screen, and the only one with an llm-research signal. Industrials is 7.5%,
    so there's room. Adds GBp (19.2% today). It's above SMA50 (422p) and the 200-day (418p). Airlines are cyclical and
    sensitive to fuel prices, so keep the stop tight.

  5/5 · NEM (SP500, Materials — Newmont) — Magic Formula pass, P/E 12.4, EY 13.8%, ROIC 29.4% | MF#18
  Entry: ~$120.91 (current) | Stop: $113.57 (1.5×ATR $4.89) | Size: €1,000 | RSI: 58.1 | MACD: Bullish
  Conviction: MF#18; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 58.
  Portfolio fit: Materials is only 4.4% (ERO). Exiting ERO and buying NEM swaps a copper miner below its stop for a
    larger, more profitable gold miner. Adds USD. +1.0% Friday, above SMA50 ($118.87) and the 200-day ($112.06).

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 13.0, EY 11.0%, ROIC 33.6% | MF#22
  Entry: ~207p (current) | Stop: 195.4p (1.5×ATR 7.7p) | Size: €1,000 | RSI: 58.9 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 59.
  Portfolio fit: a new sector for the book (0% today). Friday's −3.5% cooled RSI from 70.2 to 58.9, close to the ~205p
    entry flagged last week. It's still 7.3% above SMA50 (192.9p). If you prefer a deeper pullback, a limit near 201p
    (the 20-day) is the alternative.

  Also considered: **BAMNB** (5/5, MF#36, RSI 61.6, 6.1% above SMA50; card still active). **VK** (Vallourec, 5/5, MF#62,
    below its 200-day). **DNLM** (5/5, exited in Sept at a loss). **REP** (5/5, Energy). **BMY** (5/5, would add to
    Healthcare at 19%). **IMB** (5/5, MF#92, RSI 66). AUTO and MO (4/5, no MF pass). **AF** (RSI 78, P/E 2.6 distorted).

FREE RIDE OPPORTUNITIES
  ACN: Sell 4 of 6 shares at €232.90 → ~€932 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€466
  After CGT (€77.11 on €367.20 gain) and commission (~€4.49), net cash is ~€850, **+€3 over cost after tax**.
  The after-tax break-even is ~€231.82, so Friday's −2.2% left almost no cushion.
  Status: **Execute now (recommended), or lose it.** RSI 68.2 is above 65 and the price is 26% above SMA50 (€184.83).
    It has covered cost after tax since 10-30, but another ~0.5% drop would leave it short.

  SAP: Sell 5 of 7 shares at €210.75 → ~€1,054 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€422
  After CGT (€77.75 on €370.25 gain) and commission (~€4.49), net cash is ~€972, **+€15 over cost after tax**.
  The after-tax break-even is ~€207.05.
  Status: **Monitor — execute on the next RSI push above 65.** RSI fell to 59.4 and the MACD is bearish. A limit sell
    near €214 (Thursday's area) would catch the next push.

  WKL: Sell 12 of 15 shares at €90.08 → ~€1,081 gross proceeds covers the cost basis (€1,063.20)
  Free position: 3 shares at zero effective cost | Current value: ~€270
  After CGT (€48.38 on €230.40 gain) and commission (~€4.49), net cash is ~€1,028, **€35 short of cost after tax**
  (was €13 short on Thursday). The after-tax break-even is ~€93.78.
  Status: **Monitor.** P&L +27.1% and RSI 67.2, 20% above SMA50 (€75.23). Thursday's lean-execute lapses, because the
    after-tax gap has widened.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€732).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€352).
  ZOE (+12.7%), REL (+16.7%) and BIRK (+16.4%) are below the 25% threshold.

PORTFOLIO RISKS TO WATCH
  - Three positions carry exit recommendations (SFM day 7, ERO day 2 on the stop, EDEN on the floor), together ~€2,325 at
    a combined realized loss of ≈ −€526. That's ≈ €31 worse than Thursday. SFM is back near its post-gap low, and EDEN's
    bounce faded.
  - The bearish overlay (3 puts plus the ORCL short) is ~€2,915, 13% of net value. It gave back −€283 on Friday's
    AI-infra bounce. NBIS (RSI 34.0) and PLTR (RSI 31.2) are coming off oversold, so the bounce may have further to run.
  - Below SMA50 now: ADBE, QXO-PB, FLUT, EDEN, ERO, SFM and KLR, ~27% of the long book (IQV moved back above). ADBE
    (RSI 42.3) is the next closest to a mechanical Exit.
  - ZOE fell 8.3% in two sessions on above-average volume, cause not checked. It's worth a news check before Monday.
  - No stop orders are in place on any position. **FLUT reports Thu 11-12** (1 share, €73).
  - Data: the NBIS put is still marked by hand (its Turso row has no strike, expiry or type).

NEXT ACTIONS
  1. ACN: execute the 4-share free ride now (~€850 net, +€3 over cost after tax, 2 shares free). The cushion is nearly gone.
  2. SFM: execute the Full Exit (~$491 / ~€441, ≈ −€279). Day 7, lowest close since the gap day.
  3. ERO: execute the Full Exit (~€777, ≈ −€160). Still $2.64 below the stop.
  4. EDEN: execute the Full Exit (~€1,107, ≈ −€87). 4.5% below the €25.77 floor.
  5. KLR: sell all 10 free shares on a close below 2,900p or an RSI close under 35.
  6. SAP: place a limit sell for 5 shares near €214, or execute on an RSI close above 65 (+€15 over cost after tax now).
  7. NBIS put: consider closing to bank ≈ €361 net (check the real bid; the mark is a hand estimate). ORCL put: hold,
     $3.90 ITM; close on a close back above $120. PLTR put: hold.
  8. Optional entries: IAG at ~433.7p (€1,000), NEM at ~$120.91 (€1,000), MONY at ~207p (€1,000). Cash covers one now.
  9. ZOE: check the news behind the −8.3% two-day drop. FLUT: earnings Thu 11-12, then reassess.
  10. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
