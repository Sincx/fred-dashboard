════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-02
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Monday 23:30 slot (started 23:40 CET). This is a separate full run; the last briefing was Sunday night's
(written 11-02 00:01).
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso still holds **Fri 10-30 closes** (refresh-technicals runs 07:17, so Monday's session lands tomorrow
morning). This run uses **Mon 11-02 closes from a direct yfinance pull** for every holding, with RSI/MACD/SMA50/ATR
recomputed. The one exception is ZOE, which has no Yahoo data, so it's carried at the 10-30 Turso quote (€72.00).
ACN uses its Xetra listing (CSA.DE). FX: EUR/USD 1.1192, GBP/EUR 1.1976.
Options: all three are marked with Black-Scholes on Monday closes (r 4%). ORCL uses 61.7% vol and PLTR 64.3%, the vols
options_pricing.py used last. NBIS is a hand estimate at 80% vol, because its Turso row still has no strike.
Data quality (check_data_quality.py finished after the first write): KHC and SCHP technicals auto-recovered. 222 rows
are still failing, and 49 need manual review (3+ days in a row). The holdings among them are the known repeats:
ACN/ZOE EU fundamentals ("no sa_prefix"), QXO-PB fundamentals and the NBIS option_mark row (no strike). New in manual
review are UK technicals for SN-, TW- and UU-, which look like a ticker-suffix mapping bug and aren't holdings. None of
these changes a figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€21,659 (estimated: long equity €17,395 + options ~€2,211 + ORCL short unrealized +€158 + cash €1,895)
                    +€712 vs Sunday's €20,947. Most of it is the bearish overlay again: **ORCL −8.8% to $119.22**,
                    **NBIS −8.3% to $141.39** and PLTR −3.1% to $178.34 lifted the three puts by ~€570, and the ORCL
                    short added ~€51. **The puts are now marked above their combined cost (€2,211 vs €2,176).**
                    Long equity rose €92: **SFM +11.1%**, BIRK +6.3%, FLUT +6.1%, PRX +2.6%, KLR +1.9%. IQV −3.3% and
                    GSK −1.6% moved the other way.
  Available Cap:    €1,895.31 cash
  Best Performer:   ACN +65.1% (IQV +57.7%, SAP +54.0%)
  Worst Performer:  SFM −31.1% (ERO −16.2%, PRX −14.3%, EDEN −9.8%)
  Largest Position: LULU (10.0% of long book; GSK 8.8%, SAP 8.5%, REL 8.3%, ACN 8.0%)
  FX:               EUR/USD 1.1192 | GBP/EUR 1.1976 | Prices are Mon 11-02 closes (ZOE carried from 10-30)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ ACN      │ +65.1%     │ 74.7    │ ↑     │ Hold     │ FR ✓ (execute)    │ 77  │
  │ IQV      │ +57.7%     │ 41.8    │ ↓     │ Watch    │ 1.8 RSI from Exit │ 701 │
  │ SAP      │ +54.0%     │ 65.5    │ ↑     │ Hold     │ FR ✓ (execute)    │ 425 │
  │ KLR      │ +35.2%     │ 55.6    │ ↑     │ Hold     │ MACD turned bull  │ 57  │
  │ WKL      │ +23.3%     │ 71.6    │ ↑     │ Hold     │ overbought        │ 146 │
  │ REL      │ +16.0%     │ 68.2    │ ↑     │ Watch    │ MACD turned bear  │ 288 │
  │ ZOE      │ +13.9%     │ 67.3*   │ ↑     │ Hold     │ *10-30, no Yahoo  │ —   │
  │ BIRK     │ +10.8%     │ 60.4    │ ↑     │ Hold     │ MACD turned bull  │ 268 │
  │ ADBE     │ +0.6%      │ 51.2    │ ↓     │ Watch    │ < SMA50           │ 23  │
  │ LULU     │ −4.4%      │ 59.6    │ ↑     │ Hold     │ patience review ✓ │ 35  │
  │ FLUT     │ −4.7%      │ 61.7    │ ↑     │ Hold     │ Earnings 11-12    │ —   │
  │ GSK      │ −6.0%      │ 46.9    │ ↓     │ Watch    │ stop ref ~1,742p  │ 47  │
  │ QXO-PB   │ −7.6%      │ 45.5    │ ↓     │ Watch    │ stop ref ~$32.97  │ —   │
  │ EDEN     │ −9.8%      │ 27.9    │ ↓     │ EXIT     │ Exit day 8; <floor│ —   │
  │ PRX      │ −14.3%     │ 50.1    │ ↓     │ Watch    │ exit < €33.03     │ 596 │
  │ ERO      │ −16.2%     │ 34.0    │ ↓     │ EXIT     │ <$31.50 stop ref  │ 71  │
  │ SFM      │ −31.1%     │ 37.2    │ ↓     │ EXIT     │ +11% bounce: sell │ 132 │
  │ ORCL (S) │ +22.9%     │ 38.3    │ ↓     │ Hold     │ stop ref ~$131.2  │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065, FLUT $92.02), not
  Turso's older entry prices. TA is recomputed from Monday closes, not Turso's Friday rows.
  MF# is the full-universe rank. **The ranks moved again since Sunday's run** (e.g. ACN 62→77, SAP 297→425, IQV 582→701,
  ADBE 20→23, LULU 30→35, GSK 42→47). That's the rank lookup reflecting refreshed fundamentals, not a bug. EDEN, ZOE,
  FLUT and QXO-PB have no rank. ACN's rank is from its US listing.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $119.22).
  Signal changes vs Sunday:
  - **IQV: still Watch, now below SMA50.** −3.3% to $258.44 ($7.6 under SMA50 $266.06), RSI 41.8, MACD bearish. An RSI
    print under 40 would make it a mechanical Exit. It's fully free-ridden, so no cost is at risk, but the trend has
    turned.
  - **GSK: Hold → Watch.** −1.6% to 1,824.5p, back below SMA50 (1,843p), and MACD turned bearish. RSI 46.9. The new stop
    ref is ~1,742p (1.5×ATR), 4.5% away.
  - **REL: Hold → Watch** on a bearish MACD cross (2,998p, RSI 68.2, still 12% above SMA50). This is momentum cooling, not
    a trend break.
  - **KLR, BIRK and FLUT moved to Hold.** KLR's MACD turned bullish (3,244p, +1.9%). BIRK rose +6.3% to $35.54 with a
    bullish MACD. FLUT rose +6.1% to $87.66, back above SMA50 ($86.77), ahead of its 11-12 report.
  - **PRX moved away from Exit.** +2.6% to €35.19, RSI 50.1 (from 40.12), MACD bullish, 6.5% above the €33.03 hard line.
    It stays on Watch because it's still below SMA50 (€35.85).
  - **SFM bounced +11.1% to $55.23** (RSI 37.2). It's still a mechanical Exit: below SMA50 $69.17, MACD bearish. This is
    the "exit on strength" bounce the last two briefings asked for.
  - **ORCL short: −8.8% to $119.22**, RSI 38.3, MACD now bearish, $22 below SMA50. +$177 (+22.9%). The cause of Monday's
    drop wasn't checked in this run. The price-based stop ref tightens to ~$131.2.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.0%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 23.0% | Healthcare (GSK, ZOE, IQV) 19.0% | Consumer (LULU, SFM, BIRK) 17.4% |
                   Info services (REL, WKL) 15.8% | Industrials (QXO-PB, KLR) 7.7% | Fintech EDEN 6.2% | Internet/SOTP PRX 6.1% |
                   Materials ERO 4.5% | iGaming FLUT 0.5%
                   No sector is above 25%. Executing the three Exits (EDEN, ERO, SFM, 13.5% of the book together) would
                   lift Tech/Software to ~26.6% of the remaining long book. Running the ACN and SAP free rides (9 shares,
                   ~€1,984 gross) would bring it back to ~15%.
  Currency split:  EUR 42.5% | USD 38.2% | GBp 19.3% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (mechanical Exit, day 3; the $60.85 hard stop broke on the 10-29 post-Q3 gap). $55.23 after Monday's
    +11.1% bounce, RSI 37.2, below SMA50 $69.17, MACD bearish.
  Expected proceeds: ~$552 (~€494). Realized loss ≈ −$249 (≈ −€223) plus ~€4.47 commission, so no CGT. That's €50 better
    than Friday's figure. This is the bounce to sell into.

  EDEN: Full Exit (mechanical Exit, day 8, **7.2% below the €25.77 patience floor**). €23.92, RSI 27.9, below SMA50
    €28.09, MACD bearish.
  Expected proceeds: ~€1,076. Realized loss ≈ −€117 against the €1,193.85 cost, plus ~€4.47 commission, so no CGT.

  ERO: Full Exit (mechanical Exit, day 3 of this run, **$2.34 below the $31.50 stop ref**). $29.16, RSI 34.0, below
    SMA50 $35.27, MACD bearish.
  Expected proceeds: ~$875 (~€782). Realized loss ≈ −$169 (≈ −€151 at today's FX) plus ~€4.47 commission, so no CGT.

  ORCL put: **Consider closing, not a mechanical signal.** The $120 Dec put is now $0.78 in the money and marked
    ~$10.49/sh (~€938), against €982 cost. It has recovered ~€375 in two sessions. There are 46 days left, and ORCL
    snapped back +10.7% in one day on 10-28. Selling now recovers ~96% of the premium. Holding keeps the downside bet
    on, but you already have the same direction through the 5-share short. If you hold, close it on a close back above
    ~$126 (the October low).
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire. The free-ride sells (ACN, SAP) are below.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. Nothing is RSI 35–50 above SMA50 with a bullish MACD. IQV and GSK are in the RSI band but have slipped
  below SMA50 with bearish MACDs, which makes them Watch, not Add.

  ── NEW POSITIONS ──────────────────────────────────────
  BBW:  Enter on a pullback to ~$28.30 (Mon close $29.54 after +7.0%, RSI 66.8) — Turso screen 5/5, MF#86, corroborated
        by llm-research + investor:burry
        Stop: $26.29 | Size: €750 (starter: RSI >65 and still 17% below its 200-day)
  MONY: Enter on a dip to ~200p (Mon close 206.2p, RSI 66.8) — Turso screen 5/5, MF#22
        Stop: 189.4p | Size: €750
  CF:   Enter on a close above SMA50 ~$123.30 (Mon close $120.33, −2.4%, RSI 51.2) — Turso screen 5/5, MF#29
        Stop: $117.13 | Size: €750
  Cash is €1,895 before Exit proceeds (~€2,352 more if all three Exits are executed, ~€1,820 net more from the two free
  rides). All three ideas already had active Pending Trade Idea cards, so the dedup check skipped them.
  BBW and MONY both ran up on Monday, so today's entries are pullback limits instead of market buys.

INVESTMENT OPPORTUNITIES
  5/5 · BBW (BURRY/investor-flagged, Consumer Discretionary — Build-A-Bear Workshop) — Magic Formula pass, P/E 6.9, EY 12.2%, ROIC 15.7%, yield 3.3% | MF#86
  Entry: ~$28.30 limit (Mon close $29.54) | Stop: $26.29 (1.5×ATR $1.34) | Size: €750 | RSI: 66.8 | MACD: Bullish
  Conviction: MF#86; Magic Formula pass; corroborated by llm-research, investor:burry, briefing-recommendation; bullish MACD.
  Portfolio fit: the most-corroborated name on the screen (4 signals). Monday's +7.0% took it 9% above SMA50 ($27.12),
    but it's still well below its 200-day ($35.58), so treat it as a starter-sized bounce trade on a pullback. It adds to
    Consumer (17.4% → ~21%), but Consumer falls back to ~18% once SFM is exited. Check the Q3 report date (typically late
    Nov / early Dec) before sizing up.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 13.0, EY 11.0%, ROIC 33.6% | MF#22
  Entry: ~200p limit (Mon close 206.2p) | Stop: 189.4p (1.5×ATR 7.1p) | Size: €750 | RSI: 66.8 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD.
  Portfolio fit: adds a new sector (Comms) and GBp exposure. +2.2% Monday, 7% above SMA50 (192.6p) and above the 200-day
    (181.2p), in a clean uptrend. It's the best-ranked UK marketplace on the screen; AUTO (4/5) still lacks an MF pass.

  5/5 · CF (S&P 500, Materials — CF Industries) — Magic Formula pass, P/E 9.2, EY 15.1%, ROIC 24.5%, yield 2.0% | MF#29
  Entry: close above SMA50 ~$123.30 | Stop: $117.13 (1.5×ATR $4.12) | Size: €750 | RSI: 51.2 | MACD: Bullish
  Conviction: MF#29; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD.
  Portfolio fit: Monday's −2.4% pushed it back to 2.4% below SMA50, so the trigger hasn't fired yet. It's above the
    200-day ($118.00). If ERO is exited, CF would be the book's only Materials name, in USD.

  Also considered: TMV (5/5, but Tech is the largest sleeve), DNLM (5/5, exited in Sept at a loss), EQNR, REP and BAMNB
    (5/5 but uncorroborated), BMY (5/5 but uncorroborated; adds to Healthcare at 19%), AUTO (4/5, no MF pass).

FREE RIDE OPPORTUNITIES
  ACN: Sell 4 of 6 shares at €232.90 → ~€932 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€466
  After CGT (€77.11 on €367.20 gain) and commission (~€4.47), net cash is ~€850, which **covers the cost after tax by
  +€3**. The after-tax break-even is ~€231.82, only €1.08 below Monday's close.
  Status: **Execute now (recommended).** RSI 74.7 is overbought, and the price is 30% above SMA50 (€179.78). It still
    qualifies on gross proceeds above €211.65.

  SAP: Sell 5 of 7 shares at €210.50 → ~€1,053 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€421
  After CGT (€77.49 on €369.00 gain) and commission (~€4.47), net cash is ~€971, which fully recovers the cost (+€14).
  Status: **Execute now (recommended).** RSI 65.5 is above 65. Below ~€207 the net proceeds would no longer cover the
    cost.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€693).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€389).
  WKL (+23.3%) and REL (+16.0%) are below the 25% threshold. WKL would qualify (sell 13 keep 2) once it's above ~€88.60.

PORTFOLIO RISKS TO WATCH
  - Three positions are on mechanical Exit (EDEN day 8, ERO, SFM), together ~€2,352 at a combined realized loss of
    ≈ −€491. SFM's bounce is the best exit price since Q3, so don't let it fade.
  - The trend is weakening in the free-ridden and core names: IQV is below SMA50 (1.8 RSI points from Exit), GSK is back
    below SMA50 with a bearish MACD, and REL's MACD turned bearish. Below SMA50 now: IQV, GSK, ADBE, QXO-PB and PRX, plus
    the three Exits (~44% of the long book, up from ~32%).
  - The bearish overlay is now concentrated in its win. The puts are ~€2,211 against €2,176 cost, and the ORCL short is
    +€158. ORCL and NBIS both fell 8%+ in one session; a reversal like 10-28's (+10.7%) would take back ~€300 in a day.
  - No stop orders are in place on any position. FLUT reports 11-12.
  - Data: the NBIS put is still marked by hand (its Turso row has no strike, expiry or type). ZOE has no Yahoo price
    feed, so its TA here is carried from 10-30.

NEXT ACTIONS
  1. SFM: execute the Full Exit into Monday's +11% bounce (~$552 / ~€494, ≈ −€223).
  2. EDEN: execute the Full Exit (~€1,076, ≈ −€117). Day 8 of Exit and 7.2% below the €25.77 floor.
  3. ERO: execute the Full Exit (~€782, ≈ −€151). It's $2.34 below the $31.50 stop ref.
  4. ACN: execute the 4-share free ride (~€850 net, cost +€3, 2 shares free). RSI 74.7; the cushion goes below ~€231.82.
  5. SAP: execute the 5-share free ride (~€971 net, cost +€14, 2 shares free) while it's above ~€207.
  6. ORCL put: decide whether to close it at ~€938 (−€44 vs cost) or hold with an exit on a close above ~$126.
  7. LULU patience review (due ~11-03): it's 22% above the $88.54 trim trigger, above SMA50 with a bullish MACD, so no
     trim is needed. Retire the override and use a normal ATR stop of ~$101.70.
  8. IQV: if RSI closes below 40 (mechanical Exit), sell the 3 free shares (~$775). GSK: set a real stop at ~1,742p.
  9. Optional entries: BBW at ~$28.30 and MONY at ~200p (both €750 starters, as limits), or CF on a close above ~$123.30.
     Approve or reject them in the Pending Trade Ideas panel.
  10. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
