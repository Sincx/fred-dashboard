════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-01
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Sunday 23:30 slot (started 23:39 CET). This is a separate full run; the last briefing was the 10-29
Thursday-night run.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso holds **Fri 10-30 closes** for every holding (refreshed Sat/Sun), so this run uses Turso directly with no
yfinance pull. massive spot-checks confirm ACN (US $258.24, +4.5%), NBIS ($154.14, −10.4%) and QXO common ($11.04, −3.0%).
Options: ORCL and PLTR are marked by options_pricing.py on 10-30 closes. NBIS is a hand Black-Scholes estimate (80% vol,
r 4%, 228 days), because its Turso row still has no strike.
Data quality (check_data_quality.py finished after the first write): REL fundamentals auto-recovered. 223 rows are
still failing. The holdings among them are the known repeats: ACN/ZOE EU fundamentals ("no sa_prefix", 20 days), QXO-PB
fundamentals (20 days) and the NBIS option_mark row (67 days, no strike). There are also filings rows for BIRK, ERO and
SAP, and a PRX valuation row. None of these changes a figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€20,947 (estimated: long equity €17,303 + options ~€1,641 + ORCL short unrealized +€107 + cash €1,895)
                    +€620 vs 10-29's €20,327. Most of the gain came from the bearish overlay: **NBIS −10.4% to $154.14**,
                    **ORCL −6.4% to $130.67** and **PLTR −6.3% to $184.11** lifted the three puts by ~€445 and the ORCL
                    short by ~€40. Long equity rose €134: **ACN +6.3% to €232.50**, WKL +2.7%, REL +2.6%, ZOE +3.5% and
                    GSK +2.3%. ERO −6.7%, QXO-PB −4.5%, LULU −2.4%, IQV −2.8% and SFM +3.5% (a small bounce) moved the
                    other way.
  Available Cap:    €1,895.31 cash
  Best Performer:   ACN +64.8% (IQV +63.1%, SAP +54.5%)
  Worst Performer:  SFM −38.0% (PRX −16.5%, ERO −16.5%, FLUT −10.2%, EDEN −9.3%)
  Largest Position: LULU (10.0% of long book; GSK 9.0%, SAP 8.5%, REL 8.3%, ACN 8.1%)
  FX:               EUR/USD 1.1159 | GBP/EUR 1.2000 | Prices are Fri 10-30 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ ACN      │ +64.8%     │ 74.8    │ ↑     │ Hold     │ FR ✓ (execute)    │ 62  │
  │ IQV      │ +63.1%     │ 49.0    │ ↑     │ Watch    │ MACD bearish      │ 582 │
  │ SAP      │ +54.5%     │ 67.0    │ ↑     │ Hold     │ FR ✓ (execute)    │ 297 │
  │ KLR      │ +32.7%     │ 51.3    │ ↑     │ Watch    │ MACD bearish      │ 49  │
  │ WKL      │ +22.7%     │ 71.1    │ ↑     │ Hold     │ overbought        │ 69  │
  │ REL      │ +15.7%     │ 67.8    │ ↑     │ Hold     │ —                 │ 157 │
  │ ZOE      │ +13.9%     │ 67.3    │ ↑     │ Hold     │ —                 │ —   │
  │ BIRK     │ +4.2%      │ 51.4    │ ↑     │ Watch    │ MACD bearish      │ 216 │
  │ ADBE     │ +0.2%      │ 50.3    │ ↓     │ Watch    │ < SMA50           │ 20  │
  │ GSK      │ −4.4%      │ 50.9    │ ↑     │ Hold     │ stop ref ~1,751p  │ 42  │
  │ LULU     │ −5.0%      │ 58.9    │ ↑     │ Hold     │ patience ~11-03   │ 30  │
  │ QXO-PB   │ −8.9%      │ 45.5    │ ↓     │ Watch    │ stop ref ~$32.57  │ —   │
  │ EDEN     │ −9.3%      │ 28.5    │ ↓     │ EXIT     │ Exit day 7; <floor│ —   │
  │ FLUT     │ −10.2%     │ 53.3    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ ERO      │ −16.5%     │ 33.4    │ ↓     │ EXIT     │ <$31.50 stop ref  │ 79  │
  │ PRX      │ −16.5%     │ 40.1    │ ↓     │ Watch    │ exit < €33.03     │ 513 │
  │ SFM      │ −38.0%     │ 25.4    │ ↓     │ EXIT     │ stop broken (Q3)  │ 125 │
  │ ORCL (S) │ +15.5%     │ 45.8    │ ↓     │ Hold     │ stop ref ~$142.7  │ 514 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065, FLUT $92.02), not
  Turso's older entry prices.
  MF# is the full-universe rank. **The ranks moved since 10-29 because magic-formula-screen reran on new fundamentals**
  (e.g. GSK 31→42, ADBE 18→20, LULU 23→30, ACN 36→62). This is expected, not a bug. EDEN, ZOE, FLUT and QXO-PB have no
  rank. ACN's rank is from its US listing.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $130.67).
  Signal changes vs 10-29:
  - **GSK: Watch → Hold.** +2.3% to 1,855p, back above SMA50 (1,845p), RSI 50.9, MACD bullish. The new stop ref is
    ~1,751p (1.5×ATR).
  - **IQV: Hold → Watch.** −2.8% to $267.33, RSI 49.0. MACD has turned bearish and the price is only $1.24 above SMA50.
    It's fully free-ridden, so there's no cost at risk.
  - **ACN overbought:** +6.3% to €232.50 (US listing +4.5% on Friday), RSI 74.8. **Its free ride now covers the full
    cost after tax** (see FREE RIDE below).
  - **ERO is deeper into Exit:** −6.7% to $29.05, RSI 33.4. That's $2.45 below the $31.50 stop ref.
  - **PRX is 0.12 RSI points from Exit** (40.12) at €34.29, 3.8% above the €33.03 hard line.
  - **QXO-PB:** −4.5% to $34.88, RSI 45.5, below SMA50 ($37.56). It's still on Watch.
  - **ORCL short:** −6.4% to $130.67, RSI 45.8, $10.8 below SMA50. The short is working (+$119 / +15.5%). Turso's
    long-side rule labels it Watch because MACD is bullish, but for a short this setup is a Hold.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.0%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 23.1% | Healthcare (GSK, ZOE, IQV) 19.4% | Consumer (LULU, SFM, BIRK) 16.9% |
                   Info services (REL, WKL) 15.8% | Industrials (QXO-PB, KLR) 7.6% | Fintech EDEN 6.3% | Internet/SOTP PRX 5.9% |
                   Materials ERO 4.5% | iGaming FLUT 0.4%
                   No sector is above 25%. Tech/Software has risen with ACN, and executing the three Exits (EDEN, ERO, SFM,
                   13.4% of the book together) would lift it to ~27% of the remaining long book. Running the ACN and SAP
                   free rides (9 shares, ~€1,986) would bring it back to ~15%, which is a second reason to do them now.
  Currency split:  EUR 42.6% | USD 37.9% | GBp 19.5% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (mechanical Exit; the $60.85 hard stop broke on the 10-29 post-Q3 gap). $49.70 (+3.5% Friday bounce),
    RSI 25.4, below SMA50 $69.68, MACD bearish.
  Expected proceeds: ~$497 (~€445). Realized loss ≈ −$305 (≈ −€273) plus ~€0.90 commission, so no CGT.
    The trade is under the ~€465 minimum, but the thesis broke on the comp decline. Exit on strength, or set a hard stop
    just under Thursday's low.

  EDEN: Full Exit (mechanical Exit, day 7, **6.6% below the €25.77 patience floor**). €24.07, RSI 28.5, below SMA50
    €28.21, MACD bearish.
  Expected proceeds: ~€1,083. Realized loss ≈ −€111 against the €1,193.85 cost, plus ~€3.50 commission, so no CGT.

  ERO: Full Exit (mechanical Exit, day 2 of this run, **$2.45 below the $31.50 stop ref**). $29.05 (−6.7%), RSI 33.4,
    below SMA50 $35.48, MACD bearish.
  Expected proceeds: ~$872 (~€781). Realized loss ≈ −$173 (≈ −€155 at today's FX) plus ~€0.90 commission, so no CGT.

  PRX: Hold, but **this is the closest it's been to Exit** (RSI 40.12). Exit all 30 on a close below €33.03 or on an RSI
    print below 40 (mechanical Exit). Proceeds at today's price would be ~€1,029, ≈ −€203.
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire. The free-ride sells (ACN, SAP) are below.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. Nothing is RSI 35–50 above SMA50 with a bullish MACD. IQV (RSI 49.0, above SMA50) has a bearish MACD,
  and GSK (RSI 50.9) is just over the band. GSK is the nearest to an Add on a pullback toward SMA50 with MACD still
  bullish, but it's already 9% of the book at a loss, so don't add.

  ── NEW POSITIONS ──────────────────────────────────────
  BBW:  Enter at ~$27.61 (Fri close, RSI 60.1) — Turso screen 5/5, MF#71, corroborated by llm-research + investor:burry
        Stop: $25.72 | Size: €750 (starter: still 25% below its 200-day)
  MONY: Enter at ~201.8p (Fri close, RSI 62.2) — Turso screen 5/5, MF#17
        Stop: 191.1p | Size: €750
  CF:   Enter on a close above SMA50 ~$123.50 (Fri close $123.30, RSI 57.7) — Turso screen 5/5, MF#23
        Stop: $117.58 | Size: €750
  Cash is €1,895 before Exit proceeds (~€2,309 more if all three Exits are executed, ~€1,822 more from the two free
  rides). BBW is a new Pending Trade Idea card. MONY and CF already had active cards, so the dedup check skipped them.
  AUTO (still pending) dropped to 4/5 after losing its Magic Formula pass. MO (still pending) is now extended (RSI 70.1,
  $78.03, 11% above SMA50) and is off the top-10 screen. Let both age out or reject them.

INVESTMENT OPPORTUNITIES
  5/5 · BBW (BURRY/investor-flagged, Consumer Discretionary — Build-A-Bear Workshop) — Magic Formula pass, P/E 6.9, EY 13.1%, ROIC 15.7%, yield 3.3% | MF#71
  Entry: ~$27.61 (Fri close) | Stop: $25.72 (1.5×ATR $1.26) | Size: €750 | RSI: 60.1 | MACD: Bullish
  Conviction: MF#71; Magic Formula pass; corroborated by llm-research, investor:burry; bullish MACD; RSI healthy at 60.
  Portfolio fit: the most-corroborated name on the screen (3 signals). It reclaimed SMA50 ($27.18) on 2.8× volume Thursday
    and Friday, but the stock is still well below its 200-day ($36.75), so this is a starter-sized bounce trade, not a trend
    entry. It adds to Consumer (16.9% → ~21%), but Consumer falls back to ~18% once SFM is exited. Check the Q3 report date
    (typically late Nov / early Dec) before sizing up.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 13.0, EY 12.5%, ROIC 33.6% | MF#17
  Entry: ~201.8p (Fri close) | Stop: 191.1p (1.5×ATR 7.1p) | Size: €750 | RSI: 62.2 | MACD: Bullish
  Conviction: MF#17; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 62.
  Portfolio fit: adds a new sector (Comms) and GBp exposure. It's 4.8% above SMA50 (192.6p) and above the 200-day, in a
    clean uptrend. Now the best-ranked UK marketplace, since AUTO lost its MF pass.

  5/5 · CF (S&P 500, Materials — CF Industries) — Magic Formula pass, P/E 9.2, EY 15.1%, ROIC 24.5%, yield 2.0% | MF#23
  Entry: close above SMA50 ~$123.50 | Stop: $117.58 (1.5×ATR $3.81) | Size: €750 | RSI: 57.7 | MACD: Bullish
  Conviction: MF#23; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 58.
  Portfolio fit: Friday's +4.4% took it from 4.4% below SMA50 to $0.14 under it, so wait for a confirmed close above.
    If ERO is exited, CF would be the book's only Materials name, in USD.

  Also considered: TMV (5/5, but Tech is the largest sleeve), DNLM (5/5, exited in Sept at a loss), BMY (5/5 but
    uncorroborated; adds to Healthcare at 19%), AUTO, FOUR and INCY (4/5, no MF pass), APA (4/5, RSI 74.5, extended).

FREE RIDE OPPORTUNITIES
  ACN: Sell 4 of 6 shares at €232.50 → ~€930 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€465
  After CGT (€76.78 on €365.60 gain) and commission (~€4.48), net cash is ~€849, which **fully recovers the cost after tax
  (+€2)** for the first time.
  Status: **Execute now (recommended).** RSI 74.8 is overbought, and the price is 31% above SMA50 after a +6.3% day. It
    still qualifies on gross proceeds above €211.65, but only covers cost after tax above ~€232.

  SAP: Sell 5 of 7 shares at €211.25 → ~€1,056 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€423
  After CGT (€78.28 on €372.75 gain) and commission (~€4.48), net cash is ~€973, which fully recovers the cost (+€17).
  Status: **Execute now (recommended).** RSI 67.0 is above 65, and the cushion recovered from +€7 to +€17 on Friday's
    +1.1%. Below ~€207 the net proceeds would no longer cover the cost.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€719).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€382).
  WKL (+22.7%) and REL (+15.7%) are below the 25% threshold.

PORTFOLIO RISKS TO WATCH
  - Three positions are on mechanical Exit (EDEN day 7, ERO, SFM), together ~€2,309 at a combined realized loss of
    ≈ −€539. All three have gone lower since they were first flagged. PRX is 0.12 RSI points from joining them.
  - The bearish overlay just had its best day: the puts are ~€1,641 against €2,176 cost (−€535, vs −€980 on 10-29). The
    ORCL put has 47 days left and is $10.67 OTM. Theta is accelerating, so consider taking part of the gain if ORCL tests
    its ~$126 October low.
  - No stop orders are in place on any position. FLUT reports 11-12, and LULU's patience review is ~11-03 (it's 21% above
    the $88.54 trim trigger).
  - Below SMA50: ADBE, QXO-PB, FLUT and PRX, plus the three Exits (~32% of the long book, down from ~45%).
  - Data: the NBIS put is still marked by hand (its Turso row has no strike, expiry or type). Its option_mark row is
    now at 67 straight days of failures.

NEXT ACTIONS
  1. EDEN: execute the Full Exit (~€1,083, ≈ −€111). Day 7 of Exit and 6.6% below the €25.77 floor.
  2. ERO: execute the Full Exit (~€781, ≈ −€155). It's $2.45 below the $31.50 stop ref.
  3. SFM: execute the Full Exit (~$497 / ~€445, ≈ −€273). The thesis and the hard stop both broke on Q3.
  4. ACN: execute the 4-share free ride (~€849 net, cost +€2, 2 shares free). RSI 74.8 is overbought.
  5. SAP: execute the 5-share free ride (~€973 net, cost +€17, 2 shares free) while it's above ~€207.
  6. PRX: exit all 30 on a close below €33.03 or RSI below 40. LULU: patience review ~11-03 (trim 9 shares below $88.54).
  7. Optional entries: BBW at ~$27.61 and MONY at ~201.8p (both €750 starters), or CF on a close above ~$123.50. Approve or
     reject them in the Pending Trade Ideas panel, and clear out the stale AUTO and MO cards.
  8. Place real stop orders on the remaining losers (PRX €33.03, QXO-PB ~$32.57, GSK ~1,751p) before FLUT's 11-12 report.
  9. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
