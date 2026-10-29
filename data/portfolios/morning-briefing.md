════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-29
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Thursday 23:30 slot (started 23:40 CEST). This is a separate full run. The 10-28 briefing was written at
08:05 this morning because Wednesday night's slot was delayed.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso still holds 10-28 closes (KLR/REL 10-27), because refresh-technicals runs at 07:17. Every figure below
uses a direct yfinance pull of **Thu 10-29 closes** for all holdings, with RSI(14), SMA50, MACD and ATR(14) recomputed
(ACN via Xetra CSA.DE, ZOE via ZOE.DE). Options are re-marked by hand (Black-Scholes, r 4%).
Data quality: check_data_quality.py was started in the background and had printed nothing by the time this was
written. That has happened on several earlier nights, so its results aren't reflected here. Known repeat failures for
holdings (ACN/ZOE EU fundamentals, QXO-PB fundamentals, NBIS option_mark with no strike) don't change any figure below.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€20,327 (estimated: long equity €17,169 + options ~€1,196 + ORCL short unrealized +€67 + cash €1,895)
                    +€109 vs 10-28's €20,218. The bearish overlay recovered: **ORCL −3.5% to $139.56** lifted the ORCL put
                    from ~€276 to ~€376 (+€100) and the short from +€45 to +€67, and **NBIS −5.7% to $171.99** added ~€68 to
                    the NBIS put. Long equity lost €79. **SFM fell 22.6% to $48.00 after its Q3 report (−€125)**, and ERO
                    −3.3% (−€29), SAP −1.1% and GSK −1.0% also fell. LULU +4.4% (+€74), BIRK +5.7% (+€40) and QXO-PB +3.2%
                    (+€30) offset part of it.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +67.8%
  Worst Performer:  SFM −40.1% (PRX −16.5%, FLUT −13.9%, ERO −10.6%, EDEN −8.8%)
  Largest Position: LULU (10.3% of long book; GSK 8.8%, SAP 8.5%, REL 8.1%)
  FX:               EUR/USD 1.1188 | GBP/EUR 1.1960 | Prices are Thu 10-29 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +67.8%     │ 57.0    │ ↑     │ Hold     │ Q3 late Oct (tbc) │ 602 │
  │ ACN      │ +55.0%     │ 68.7    │ ↑     │ Hold     │ FR ✓ (monitor)    │ 36  │
  │ SAP      │ +52.8%     │ 64.7    │ ↑     │ Hold     │ FR ✓ (execute)    │ 310 │
  │ KLR      │ +31.3%     │ 48.6    │ ↑     │ Watch    │ MACD bearish      │ 53  │
  │ WKL      │ +19.5%     │ 67.1    │ ↑     │ Hold     │ —                 │ 69  │
  │ REL      │ +12.7%     │ 62.6    │ ↑     │ Hold     │ —                 │ 174 │
  │ ZOE      │ +10.0%     │ 57.7    │ ↑     │ Hold     │ —                 │ —   │
  │ BIRK     │ +4.1%      │ 51.2    │ ↑     │ Watch    │ MACD bearish      │ 232 │
  │ ADBE     │ −0.7%      │ 48.8    │ ↓     │ Watch    │ < SMA50           │ 18  │
  │ LULU     │ −2.7%      │ 63.5    │ ↑     │ Hold     │ patience ~11-03   │ 23  │
  │ QXO-PB   │ −4.6%      │ 49.3    │ ↓     │ Watch    │ < SMA50           │ —   │
  │ GSK      │ −6.5%      │ 45.0    │ ↓     │ Watch    │ stop ref ~1,746p  │ 31  │
  │ EDEN     │ −8.8%      │ 29.0    │ ↓     │ EXIT     │ Exit day 6; <floor│ —   │
  │ ERO      │ −10.6%     │ 38.9    │ ↓     │ EXIT     │ <$31.50 stop ref  │ 80  │
  │ FLUT     │ −13.9%     │ 46.0    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ PRX      │ −16.5%     │ 40.2    │ ↓     │ Watch    │ exit < €33.03     │ 539 │
  │ SFM      │ −40.1%     │ 21.1    │ ↓     │ EXIT     │ Q3 −22.6%; stop hit│ 128 │
  │ ORCL (S) │ +9.7%      │ 52.8    │ ↓     │ Hold     │ back < SMA50      │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065), not
  Turso's older entry prices.
  MF# is the full-universe rank (~1,350 tickers), unchanged from 10-28. EDEN, ZOE, FLUT and QXO-PB have no rank. ACN's
  rank is from its US listing (the EU listing has no fundamentals).
  ORCL (S) P&L is the short's gain on entry ($154.552 → $139.56).
  Signal changes vs 10-28:
  - **SFM: Watch → EXIT, and the hard stop broke.** Q3 came out 10-28 (8-K): net sales +5%, comparable store sales
    −0.9%, diluted EPS $1.21, with management citing a weak consumer and a cyclospora disruption. The shares gapped
    22.6% lower to $48.00 (RSI 21.1, MACD turned bearish), well through the $60.85 hard stop. All three Exit conditions
    are now met.
  - **ERO: Watch → EXIT.** −3.3% to $31.12, RSI 38.9, below SMA50 ($35.62), MACD bearish. It also closed below the
    $31.50 stop ref.
  - **ORCL short: Watch → Hold.** −3.5% to $139.56, back below SMA50 ($142.03). It's now $7 below the ~$146.6 stop ref.
  - **BIRK:** +5.7% to $33.39, back above SMA50 ($33.11). It stays on Watch until MACD confirms.
  - **LULU:** +4.4% to $109.82 (RSI 63.5). It's 2.7% from breakeven ahead of the ~11-03 patience review.
  - EDEN is on Exit day 6 (€24.19, RSI 29.0), 6.1% below the €25.77 floor. PRX is barely above the Exit line (RSI 40.2,
    €34.305, 3.9% above €33.03).

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.3%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.6% | Healthcare (GSK, ZOE, IQV) 19.2% | Consumer (LULU, SFM, BIRK) 17.1% |
                   Info services (REL, WKL) 15.5% | Industrials (QXO-PB, KLR) 7.9% | Fintech EDEN 6.3% | Internet/SOTP PRX 6.0% |
                   Materials ERO 4.9% | iGaming FLUT 0.4%
                   No sector is above 25%. The three Exits (EDEN, ERO, SFM, 13.7% of the book together) would leave
                   Tech/Software as the largest sleeve at ~26% of the remaining long book, so new money should go to other
                   sectors (Staples via MO, Comms via AUTO/MONY).
  Currency split:  EUR 42.0% | USD 38.9% | GBp 19.2% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (mechanical Exit, and the $60.85 hard stop broke on a −22.6% gap after Q3). $48.00, RSI 21.1, below
    SMA50 $70.26, MACD bearish.
  Expected proceeds: ~$480 (~€429). Realized loss ≈ −$322 (≈ −€287) plus ~€0.90 commission, so no CGT.
    Caveat: the order is under the ~€465 minimum trade size, and RSI 21 is deeply oversold after a gap, so a
    dead-cat bounce is possible. The stop was set to cap exactly this kind of loss, though, and the comp decline
    undermines the growth thesis. Exit, or at least set a hard stop just under Thursday's low.

  EDEN: Full Exit (mechanical Exit, day 6, and **6.1% below the €25.77 patience floor**). €24.19, RSI 29.0, below
    SMA50 €28.31, MACD bearish.
  Expected proceeds: ~€1,089. Realized loss ≈ −€105 against the €1,193.85 cost, plus ~€3.50 commission, so no CGT.

  ERO: Full Exit (new mechanical Exit, and it closed below the $31.50 stop ref). $31.12, RSI 38.9, below SMA50 $35.62,
    MACD bearish.
  Expected proceeds: ~$934 (~€834). Realized loss ≈ −$111 (≈ −€99) plus ~€0.90 commission, so no CGT.

  PRX: Hold. It's not an Exit (RSI 40.2), but it's 0.2 pts from the line. Exit all 30 on a close below €33.03 or on an
    RSI print below 40.
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - SAP free ride still covers cost, but the cushion is down to ~€7 (see FREE RIDE below).

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. Nothing is RSI 35–50 above SMA50 with a bullish MACD. KLR (RSI 48.6, above SMA50) and BIRK (RSI 51.2,
  just reclaimed SMA50) are both held back by a bearish MACD.

  ── NEW POSITIONS ──────────────────────────────────────
  AUTO: Enter at ~528p (Thu close, RSI 58.2) — Turso screen 5/5, MF#15, corroborated by llm-research
        Stop: 506.1p | Size: €750
  MO:   Enter on a pullback to ~$74.50 (Thu close $76.75, RSI 66.8 after +5.2% on Q3) — Turso screen 4/5, MF#12,
        corroborated by llm-research
        Stop: $72.10 | Size: €750 (starter, RSI >65)
  MONY: Enter at ~200.6p (Thu close, RSI 60.8) — Turso screen 5/5, MF#14. Either/or with AUTO (same sector, same currency).
        Stop: 189.9p | Size: €750
  Cash is €1,895 before Exit proceeds (~€2,352 more if all three Exits are executed). All three ideas are already
  active Pending Trade Ideas, so the dedup check skipped them and no new cards were created.
  CF (10-18 Pending Trade Idea) is still 4.4% below SMA50 at $118.09. Leave it pending or reject it.

INVESTMENT OPPORTUNITIES
  5/5 · AUTO (FTSE350, Communication Services — Auto Trader Group) — Magic Formula pass, P/E 13.3, EY 10.5%, ROIC 49.0% | MF#15
  Entry: ~528p (Thu close) | Stop: 506.1p (1.5×ATR 14.6p) | Size: €750 | RSI: 58.2 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 56.
  Portfolio fit: adds a new sector with GBp exposure. It's 4.9% above SMA50 (503p), so it's an at-market entry. Now the
    top-scored, most-corroborated name, since MO dropped to 4/5.

  4/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1%, yield 6.6% | MF#12
  Entry: pullback to ~$74.50 | Stop: $72.10 (1.5×ATR $1.60) | Size: €750 | RSI: 66.8 | MACD: Bullish on 10-29 recompute
    (Turso's 10-28 bearish print cost it a point on the screen)
  Conviction: MF#12; Magic Formula pass; corroborated by llm-research, briefing-recommendation.
  Q3 (10-29 8-K): adjusted diluted EPS +4.8%, full-year guidance raised, and the buyback expanded by $1bn. The stock
    rose 5.2% on the day.
  Portfolio fit: fills the book's missing Staples sleeve in USD. It's 9.3% above SMA50 after the jump, so wait for a
    pullback rather than chasing.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#14
  Entry: ~200.6p (Thu close) | Stop: 189.9p (1.5×ATR 7.1p) | Size: €750 | RSI: 60.8 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 62.
  Portfolio fit: the cheaper of the two UK marketplaces, but less corroborated. Take AUTO or MONY, not both.

  Also considered: APA, EOG and TMV (5/5, but RSI ~68–70, near-extended; TMV would add to Tech), DNLM (5/5, exited in
    Sept at a loss), ACN (already held), RMV and INCY (4/5, no MF pass), CF (below SMA50).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €208.90 → ~€1,045 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€418
  After CGT (€75.81 on €361.00 gain) and commission (~€4.48), net cash is ~€964, which fully recovers the cost (+€7).
  Status: **Execute now (recommended), cushion nearly gone.** It was +€25 on 10-27, +€16 on 10-28 and +€7 now. Below
    ~€207 the net proceeds would no longer cover the cost. RSI has cooled to 64.7.

  ACN: Sell 4 of 6 shares at €218.70 → ~€875 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€437
  After CGT (€65.18 on €310.40 gain) and commission, net is ~€805, which is €41 short of full cost recovery after tax.
  Status: **Monitor.** It qualifies while above €211.65. RSI has cooled to 68.7, and it would only fully cover cost
    after tax above ~€231.80.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€738).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€377).

PORTFOLIO RISKS TO WATCH
  - Three positions are on mechanical Exit at the same time: EDEN (day 6), ERO (new) and SFM (new, hard stop gapped
    through). Together that's ~€2,352 at a combined realized loss of ≈ −€491. PRX is one weak day from joining them.
  - SFM shows the gap risk of holding through earnings without a stop order: the $60.85 hard stop existed only on
    paper, and the stock opened ~21% below it. No stop orders are in place on any position. FLUT reports 11-12 and IQV
    late Oct (tbc).
  - Bearish overlay: the puts are ~€1,196 against €2,176 cost (−€980). The ORCL put has 50 days left and is still
    $19.56 OTM. ORCL is back below SMA50 today, but one day doesn't undo Wednesday's +10.7%.
  - Below SMA50: ADBE, QXO-PB, GSK, FLUT and PRX, plus the three Exits (~45% of the long book).
  - Data: Turso still lags a session (refresh-technicals timing), and check_data_quality.py again produced no output in
    time for this briefing.

NEXT ACTIONS
  1. SFM: execute the Full Exit (~$480 / ~€429, ≈ −€287). The Q3 comp decline broke the thesis and the hard stop.
  2. EDEN: execute the Full Exit (~€1,089, ≈ −€105). Day 6 of Exit and 6.1% below the €25.77 floor.
  3. ERO: execute the Full Exit (~€834, ≈ −€99). New mechanical Exit, closed below the $31.50 stop ref.
  4. SAP: execute the 5-share free ride (~€964 net, cost +€7, 2 shares free) before it drops below ~€207.
  5. PRX: exit all 30 on a close below €33.03 or RSI below 40. GSK: hold, stop ref ~1,746p.
  6. Optional entries: AUTO at ~528p (or MONY at ~200.6p, not both); MO on a pullback to ~$74.50. Approve or reject
     them in the Pending Trade Ideas panel, and decide on CF.
  7. Consider placing real stop orders on the remaining losers (PRX, QXO-PB, GSK, ADBE) before FLUT's 11-12 report.
  8. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
