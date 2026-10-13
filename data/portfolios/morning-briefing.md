════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-13
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€19,818 (estimated; long equity €16,721 + options mtm ~€1,125 + ORCL short unrealized +€77 + cash €1,895)
  Available Cap:    €1,895.31 cash (~€3,415 if SFM and QXO-PB are exited)
  Best Performer:   IQV +59.9%
  Worst Performer:  SFM −19.7% (LULU −16.1%, FLUT −15.0%, PRX −12.6%)
  Largest Position: LULU (9.1% of long book; GSK 8.7%, SAP 8.0%)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +59.89%    │ 50.7    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 661 │
  │ SAP      │ +40.06%    │ 60.6*   │ ↑     │ Hold     │ free ride (2 sh)  │ 344 │
  │ ACN      │ +35.50%    │ 67.3    │ ↑     │ Hold     │ near overbought   │ —   │
  │ KLR      │ +34.99%    │ 56.0*   │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 58  │
  │ ERO      │ +7.81%     │ 54.8    │ ↑     │ 👀 Watch │ MACD bearish      │ 86  │
  │ EDEN     │ +6.48%     │ 51.8*   │ ↓     │ 👀 Watch │ reassess 10-15    │ —   │
  │ BIRK     │ +5.55%     │ 53.4    │ ↓     │ 👀 Watch │ MACD bullish      │ 255 │
  │ WKL      │ +5.51%     │ 70.0*   │ ↑     │ Hold     │ RSI at 70         │ 73  │
  │ REL      │ +5.20%     │ 67.4*   │ ↑     │ Hold     │ near overbought   │ 194 │
  │ ZOE      │ +4.97%     │ 62.9*   │ ↑     │ Hold     │ —                 │ —   │
  │ ADBE     │ −4.69%     │ 43.7    │ ↓     │ 👀 Watch │ stop $230.20      │ 22  │
  │ QXO-PB   │ −7.62%     │ 33.1*   │ ↓     │ 🔴 Exit  │ 4th run of Exit   │ —   │
  │ GSK      │ −9.80%     │ 36.6*   │ ↓     │ 🔴 Exit  │ reassess 10-15    │ 35  │
  │ PRX      │ −12.55%    │ 49.8*   │ ↓     │ 👀 Watch │ reassess 10-16    │ 591 │
  │ FLUT     │ −15.01%    │ 38.6    │ ↓     │ 👀 Watch │ 1 sh; ER 11-12    │ —   │
  │ LULU     │ −16.11%    │ 38.5    │ ↓     │ 👀 Watch │ reassess ~10-20   │ 24  │
  │ SFM      │ −19.75%    │ 35.7    │ ↓     │ 👀 Watch │ exit rule stands  │ 142 │
  │ ORCL(sh) │ +11.10%    │ 44.9    │ ↓     │ 👀 Watch │ MACD now bearish  │ 601 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  * = still on Friday 10-09 data (see Data freshness). Short P&L% is from the short's side (positive = price below entry).

  Data freshness (Turso):
    US positions are on Monday 10-12 closes. That's the expected one-session lag, because refresh-technicals runs at 07:17.
    ACN (Xetra) is also on 10-12.
    Gap: every other UK/EU position (GSK, REL, KLR, SAP, EDEN, WKL, PRX, ZOE) is still on Friday 10-09 closes. So is
      QXO-PB. Today's 07:17 refresh should have brought in Monday's European bars, and it didn't. check_pipeline_health
      reports OK, so this is a per-ticker gap. data_quality may still back-fill it (check_data_quality.py was still
      running when this briefing was written).
    Spot check: Alpha Vantage shows GSK closed Monday at 1,771p (+1.2% vs the 1,750p used below). That's still below
      SMA50 (~1,859p) and well above the 1,687p trim trigger, so the GSK plan doesn't change.
  Since the 10-12 run (00:26 CEST today): no new trades or cash entries in Turso. The latest trade is still the
    10-01 NBIS put, and the latest cash entry is 10-01. Cash is unchanged at €1,895.31.
  Pipeline health: OK, all tracked tasks healthy.
  Data quality: check_data_quality.py was still running at write time, so this run has no fresh result. The four known
    items affecting this portfolio carry over from 10-12, and none of them affect prices:
    • NBIS option_mark: the Turso row is missing strike, expiry and type, so the put is hand-marked.
    • ACN EU and ZOE EU fundamentals: "no sa_prefix", so neither has an MF#.
    • QXO-PB fundamentals: "no data from any source".

PORTFOLIO SHAPE
  Concentration:   OK. The largest single position is LULU at 9.1%; nothing is ≥ 25%.
  Sector spread:   Info services/Fintech 22.0% (REL, WKL, EDEN) | Tech/Software 21.2% (SAP, ACN, ADBE) |
                   Healthcare 18.8% (GSK, ZOE, IQV) | Consumer 17.0% (LULU, BIRK, SFM) | Industrials 8.0% (QXO-PB, KLR) |
                   Internet/SOTP 6.5% (PRX) | Materials 6.0% (ERO) | Betting 0.4% (FLUT)
                   Bearish overlay: ORCL short 5 sh, plus ORCL/PLTR/NBIS long puts (~€1,125 mtm)
  Currency split:  USD 39.7% | EUR 41.6% | GBp 18.7%
  Balance: unchanged and evenly spread. Monday's US moves were small: ACN +3%, IQV +0.9%, ADBE −1.7%, SFM −1.2%.
    The bearish overlay gained, with ORCL down 2.8% to $137.39.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  QXO-PB: Full Exit (30 sh). This is the fourth straight run with the Exit signal: $35.38, RSI 33.1, below SMA50
    $40.78, MACD bearish. Turso still has no Monday bar for it, so check the live quote first. Alternative: a hard
    stop at $35.10.
  Expected proceeds: ~$1,061.40 ≈ €948 | Gross P&L −$87.60 ≈ −€78 | CGT €0 (loss) | Commission ~€0.89 | Net ≈ −€79

  SFM: Full Exit (10 sh). The 10-01 rule still applies: exit unless RSI is back above 40. RSI fell further to 35.7 at
    $64.33, below SMA50 $75.51. The mechanical signal is only Watch because MACD is bullish. Alternative: a hard
    stop at $60.85 (price − 1.5×ATR).
  Expected proceeds: ~$643.30 ≈ €574 | Gross −$158.30 ≈ −€141 | CGT €0 | Commission ~€0.89 | Net ≈ −€142

  GSK: Exit (RSI 36.6, 1,750p on Friday data, below SMA50 1,859p, MACD bearish). Monday's 1,771p close is a small
    bounce. The patience override (MF#35) runs to Thursday's 10-15 reassessment, and earnings are 10-28. Trim 50%
    (35 sh) on a close below 1,687p. If RSI hasn't reclaimed 40 by 10-15, trim 35 sh then.
  A 35-sh trim at 1,771p: proceeds £619.85 ≈ €734 | Gross −£59.17 ≈ −€70 | CGT €0 | Commission ~€3.50 | Net ≈ −€74

  ADBE: Watch, at $238.14 and RSI 43.7. Hold with a stop at $230.20, which is 3.3% below the price.
  LULU: Watch, at $94.66 and RSI 38.5. The patience override stands until ~10-20; trim 9 sh on a close below $88.54.
  FLUT: Watch, 1 share, free-to-ride.
  No Trim signals. ACN (RSI 67.3), REL (67.4) and WKL (70.0) are each under 8% of the book, so the Trim rule doesn't
    apply.
  Nothing was written to Turso. This task only recommends trades; Turso records only fills you confirm.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. IQV (RSI 50.7, above SMA50 $257.41) is the closest, but MACD is still bearish and RSI is just past
    the 35–50 band.

  ── NEW POSITIONS ──────────────────────────────────────
  MONY: Enter at ~185.9p. It scores 5/5 with MF#15 (pass), RSI 51, MACD bullish.
  Stop: 174.2p | Size: €1,000 (~455 sh)
  EOG: Enter at ~$150.51. It scores 5/5 with MF#50 (pass), is above SMA50 $144.61 with RSI 63, and would be the
    first energy holding.
  Stop: $145.59 | Size: €1,000 (~7 sh)
  MO: Enter on a pullback to ~$69.75. It scores 5/5 with MF#14 (pass), but RSI 67 is extended.
  Stop: $67.79 | Size: €750 (~12 sh)
  If QXO-PB and SFM are exited, cash would be ~€3,415. That funds MONY and EOG and still leaves a reserve.

INVESTMENT OPPORTUNITIES
  5/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1% | MF#14
  Entry: pullback to ~$69.75 (last $71.66) | Stop: $67.79 | Size: €750 starter | RSI: 67.1 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 67.
  Portfolio fit: a defensive staple with a 6.6% yield, which would offset the cyclical consumer names (LULU, BIRK,
    SFM). It's a starter only because RSI is near overbought.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#15
  Entry: 185.9p (10-09, no Monday bar yet) | Stop: 174.2p | Size: €1,000 | RSI: 51.1 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 51.
  Portfolio fit: adds GBp exposure in a sector the portfolio doesn't own, with no AI link. The caveat is that the
    price is 4% below SMA50 (194.2p), so this is a recovery entry, not a trend entry.

  5/5 · EOG (S&P 500, Energy — EOG Resources) — Magic Formula pass, P/E 10.8, EY 11.8%, ROIC 19.8% | MF#50
  Entry: $150.51 (10-12) | Stop: $145.59 | Size: €1,000 (~7 sh) | RSI: 62.6 | MACD: Bullish
  Conviction: MF#50; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 63.
  Portfolio fit: the portfolio has 0% energy, and this is USD exposure unrelated to AI. Dividend yield 3.0%. RSI rose
    from 59 to 63; above 65, cut the size to a €750 starter.

  Also considered: APA (5/5, MF#34, RSI 65, a second energy name, so EOG is preferred), TMV (5/5, but Tech/Software
    is already 21.2%), MONY EU/RMV EU (duplicate listings), ACN US (already held via Xetra), and SAGA/RMV (4/5).
  Pending Trade Ideas: MONY, EOG and MO were all already active cards, so tonight's calls were deduped (no new cards).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €191.46 → ~€957 proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€383
  Status: Monitor. Hold the thesis and execute at the next RSI extension (RSI 60.6 on 10-09 is below 65; no Trim
    signal). After ~€3 commission and ~€57.50 CGT, net cash is ~€896, which is ~€60 short of full cost recovery.
  IQV: ✅ Already free-ridden. 3 shares at zero effective cost (~€702).
  KLR: ✅ Already free-ridden. 10 shares at zero effective cost (~€386).
  ACN (+35.5%): selling 5 of 6 sh at €191.19 would leave only 1 free share. Not flagged, but RSI 67.3 is approaching
    the zone where a partial trim becomes worth considering.

PORTFOLIO RISKS TO WATCH
  - Stale European data: 8 UK/EU positions (≈ 58% of the long book) and QXO-PB are still priced on Friday. Their
    signals may be out of date, so check live quotes before acting on any GSK, QXO-PB or PRX level.
  - US drawdown cluster: LULU, SFM, QXO-PB and ADBE total €4,106, or 24.6% of the long book. Two of them have open
    exit recommendations, and SFM's RSI kept falling on Monday (35.7).
  - Three reassessments this week: GSK (Exit, 8.7% of the book, earnings 10-28) and EDEN on Thursday 10-15, and PRX
    on Friday 10-16.
  - ORCL short: +11.1% ($137.39), and MACD has turned bearish, which favours the short. The price-based ATR stop
    reference is ~$146.6 (price + 1.5×ATR); the entry-based reference is ~$163.7.
  - Options: ORCL put ~€508 ($5.69/sh, up from $4.88 as ORCL fell) and PLTR put ~€289 ($3.24/sh) are from the
    options_pricing.py 10-13 mark. The NBIS put is ~€328 ($3.68/sh), a hand Black-Scholes at 80% vol on NBIS
    $210.06 (range €190–499 for 70–90% vol). Together that's ≈ €1,125 against €2,176 cost.

NEXT ACTIONS
  1. QXO-PB: exit 30 sh (≈ €948, net ≈ −€79), or set the stop at $35.10. Check the live quote first, because Turso
     has no Monday bar.
  2. SFM: exit 10 sh (≈ €574, net ≈ −€142), or set the stop at $60.85. Record any fills in Turso.
  3. GSK: trim 35 sh on a close below 1,687p, otherwise reassess Thursday 10-15. EDEN reassess 10-15, PRX 10-16,
     LULU ~10-20 (trim 9 sh below $88.54). ADBE: stop at $230.20.
  4. Decide on MONY, EOG and MO in Pending Trade Ideas.
  5. Investigate why the UK/EU bars for 10-12 didn't land in Turso at the 07:17 refresh. Fix the Turso NBIS put row
     (strike, expiry, type, direction='short'). GSK earnings 10-28, FLUT earnings 11-12.
════════════════════════════════════════════════════════
