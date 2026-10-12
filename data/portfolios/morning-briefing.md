════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-12
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€19,708 (estimated; long equity €16,729 + options mtm ~€1,024 + ORCL short unrealized +€59 + cash €1,895)
  Available Cap:    €1,895.31 cash (~€3,430 if SFM and QXO-PB are exited)
  Best Performer:   IQV +58.5%
  Worst Performer:  SFM −18.7% (LULU −16.3%, FLUT −13.4%, PRX −12.6%)
  Largest Position: LULU (9.1% of long book; GSK 8.7%, SAP 8.0%)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +58.47%    │ 47.9    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 661 │
  │ SAP      │ +40.06%    │ 60.6    │ ↑     │ Hold     │ free ride (2 sh)  │ 344 │
  │ KLR      │ +34.99%    │ 56.0    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 58  │
  │ ACN      │ +31.54%    │ 63.8    │ ↑     │ Hold     │ —                 │ —   │
  │ ERO      │ +8.04%     │ 55.1    │ ↑     │ 👀 Watch │ MACD bearish      │ 86  │
  │ EDEN     │ +6.48%     │ 51.8    │ ↓     │ 👀 Watch │ reassess 10-15    │ —   │
  │ WKL      │ +5.51%     │ 70.0    │ ↑     │ Hold     │ RSI at 70         │ 73  │
  │ REL      │ +5.20%     │ 67.4    │ ↑     │ Hold     │ near overbought   │ 194 │
  │ ZOE      │ +4.97%     │ 62.9    │ ↑     │ Hold     │ —                 │ —   │
  │ BIRK     │ +4.93%     │ 52.2    │ ↓     │ 👀 Watch │ MACD bullish      │ 255 │
  │ ADBE     │ −3.03%     │ 46.8    │ ↓     │ 👀 Watch │ stop $230.20      │ 22  │
  │ QXO-PB   │ −7.62%     │ 33.1    │ ↓     │ 🔴 Exit  │ 3rd run of Exit   │ —   │
  │ GSK      │ −9.80%     │ 36.6    │ ↓     │ 🔴 Exit  │ reassess 10-15    │ 35  │
  │ PRX      │ −12.55%    │ 49.8    │ ↓     │ 👀 Watch │ reassess 10-16    │ 591 │
  │ FLUT     │ −13.38%    │ 40.5    │ ↓     │ 👀 Watch │ 1 sh; ER 11-12    │ —   │
  │ LULU     │ −16.26%    │ 38.1    │ ↓     │ 👀 Watch │ reassess ~10-20   │ 24  │
  │ SFM      │ −18.74%    │ 37.5    │ ↓     │ 👀 Watch │ exit rule stands  │ 142 │
  │ ORCL(sh) │ +8.51%     │ 48.7    │ ↓     │ 👀 Watch │ below SMA50       │ 601 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  Short P&L% is from the short's side (positive = price below entry).

  Data freshness (Turso):
    Every position, US, EU and UK, is still on Friday 10-09 closes, the same prices as last night's 10-11 run.
    This is expected: Monday's session only reaches Turso at Tuesday's 07:17 refresh-technicals run. So tonight's
    signals, RSI values and stop levels are unchanged from the 10-11 briefing. The only inputs that moved are FX
    (EUR/USD 1.1194 → 1.1159; GBP/EUR 1.1817 → 1.1837) and the options re-mark (one more day of time decay).
  Since the 10-11 run (00:26 CEST today): no new trades or cash entries in Turso. The latest trade is still the
    10-01 NBIS put, and the latest cash entry is still 10-01. Cash is unchanged at €1,895.31.
  Pipeline health: OK, all tracked tasks healthy.
  Data quality: check_data_quality.py was started tonight but is still running its retry loop; it hadn't
    produced output when this briefing was written. Per the 10-11 run, the known items affecting this portfolio
    don't affect prices:
    • NBIS option_mark: NEEDS MANUAL REVIEW (Turso row is missing strike/expiry/type, so the put is hand-marked).
    • ACN EU and ZOE EU fundamentals: "no sa_prefix", so neither has an MF#.
    • QXO-PB fundamentals: "no data from any source".

PORTFOLIO SHAPE
  Concentration:   OK. The largest single position is LULU at 9.1%; nothing is ≥ 25%.
  Sector spread:   Info services/Fintech 22.0% (REL, WKL, EDEN) | Tech/Software 21.2% (SAP, ACN, ADBE) |
                   Healthcare 18.8% (GSK, ZOE, IQV) | Consumer 17.1% (LULU, BIRK, SFM) | Industrials 8.0% (QXO-PB, KLR) |
                   Internet/SOTP 6.5% (PRX) | Materials 6.0% (ERO) | Betting 0.4% (FLUT)
                   Bearish overlay: ORCL short 5 sh, plus ORCL/PLTR/NBIS long puts (~€1,024 mtm)
  Currency split:  USD 39.9% | EUR 41.4% | GBp 18.7%
  Balance: sectors are still evenly spread, and nothing changed tonight except FX. The slightly stronger dollar
    added ~€26 to the USD holdings in EUR terms.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  QXO-PB: Full Exit (30 sh). This is the third straight run with the Exit signal: $35.38, RSI 33.1, below SMA50
    $40.78, MACD bearish. No patience thesis covers it. Alternative: a hard stop at $35.10, only 0.8% below the price.
  Expected proceeds: ~$1,061.40 ≈ €951 | Gross P&L −$87.60 ≈ −€78.5 | CGT €0 (loss) | Commission ~€0.89 |
    Net ≈ −€79.4

  SFM: Full Exit (10 sh). The rule set on 10-01 still applies: exit unless RSI is above 40. RSI is 37.5 and the
    price is $65.14, below SMA50 $75.97. The mechanical signal is only Watch because MACD is bullish.
    Alternative: a hard stop at $61.55 (price − 1.5×ATR).
  Expected proceeds: ~$651.40 ≈ €584 | Gross −$150.20 ≈ −€134.6 | CGT €0 | Commission ~€0.89 | Net ≈ −€135.5

  GSK: Exit (RSI 36.6, 1,750p, below SMA50 1,859p, MACD bearish). The patience override (MF#35) runs to the
    10-15 reassessment, now three days away, and earnings are 10-28. Trim 50% (35 sh) on a close below 1,687p
    (price − 1.5×ATR). If it hasn't reclaimed RSI 40 by 10-15, trim 35 sh then.
  A 35-sh trim at the current price: proceeds £612.50 ≈ €725 | Gross −£66.52 ≈ −€78.7 | CGT €0 | Commission ~€3.50 |
    Net ≈ −€82.2

  ADBE: Watch. Hold with a stop at $230.20. LULU: Watch; the patience override stands until ~10-20, and the plan is
    to trim 9 sh on a close below $88.54. FLUT: Watch, 1 share, free-to-ride.
  No Trim signals. WKL's RSI is 70.0, but it's only 6.7% of the book, so the Trim rule (RSI > 70 at ≥ 20%) doesn't
    apply.
  Nothing was written to Turso. This task only recommends trades; Turso records only fills you confirm.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. IQV (RSI 47.9, above SMA50) is still the closest, but MACD is bearish.

  ── NEW POSITIONS ──────────────────────────────────────
  MONY: Enter at ~185.9p. It scores 5/5 with MF#15 (pass), RSI 51, MACD bullish.
  Stop: 174.2p | Size: €1,000 (~455 sh)
  EOG: Enter at ~$148.16. It scores 5/5 with MF#50 (pass), is above SMA50 with RSI 59, and would be the first
    energy holding.
  Stop: $143.23 | Size: €1,000 (~7 sh)
  MO: Enter on a pullback to ~$69.75. It scores 5/5 with MF#14 (pass), but RSI 67 is extended.
  Stop: $67.81 | Size: €750 (~12 sh)
  If QXO-PB and SFM are exited, cash would be ~€3,430. That funds MONY and EOG and still leaves a reserve.

INVESTMENT OPPORTUNITIES
  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#15
  Entry: 185.9p (10-09) | Stop: 174.2p | Size: €1,000 | RSI: 51.1 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 51.
  Portfolio fit: adds GBp exposure in a sector the portfolio doesn't own, with no AI link. The caveat is that the
    price is 4% below SMA50 (194.2p), so this is a recovery entry, not a trend entry.

  5/5 · EOG (S&P 500, Energy — EOG Resources) — Magic Formula pass, P/E 10.8, EY 11.8%, ROIC 19.8% | MF#50
  Entry: $148.16 (10-09) | Stop: $143.23 | Size: €1,000 (~7 sh) | RSI: 58.8 | MACD: Bullish
  Conviction: MF#50; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 59.
  Portfolio fit: the portfolio has 0% energy, and this is USD exposure unrelated to AI. Dividend yield 3.0%.

  5/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1% | MF#14
  Entry: pullback to ~$69.75 (last $71.68) | Stop: $67.81 | Size: €750 starter | RSI: 67.2 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 67.
  Portfolio fit: a defensive staple with a 6.6% yield, which would offset the cyclical consumer names (LULU, BIRK).
    It's a starter only because RSI is near overbought.

  Also considered: APA (5/5, MF#34, a second energy name, so EOG is preferred), TMV (5/5, but Tech/Software is
    already 21.2%), MONY EU/RMV EU (duplicate listings), ACN US (already held via Xetra), and SAGA/RMV (4/5).
  Pending Trade Ideas: MONY, EOG and MO were all already active cards, so tonight's calls were deduped (no new
    cards). IAG's card is still active from before; reject it or let it expire.

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €191.46 → ~€957 proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€383
  Status: Monitor. Hold the thesis and execute at the next RSI extension (RSI 60.6 is below 65; no Trim signal).
    The margin is thin: after ~€0.89 commission and ~€57.50 CGT on the €273.80 gain, net cash is ~€899, about
    €58 short of full cost recovery.
  IQV: ✅ Already free-ridden. 3 shares at zero effective cost (~€699).
  KLR: ✅ Already free-ridden. 10 shares at zero effective cost (~€386).
  ACN (+31.5%): selling 5 of 6 sh would leave only 1 free share. Not flagged.

PORTFOLIO RISKS TO WATCH
  - Tonight's figures are on Friday's closes. Monday's session (10-12) may already have moved QXO-PB through its
    $35.10 stop or GSK through 1,687p; check live quotes before acting on any level here.
  - US drawdown cluster: LULU, SFM and QXO-PB are down 7.6–18.7%, and two of them have exit recommendations. With
    ADBE they total €4,145, or 24.8% of the long book.
  - GSK is in Exit, with the 10-15 reassessment this week and earnings on 10-28. At 8.7% it's the second-largest
    position and down 9.8%. EDEN (10-15) and PRX (10-16) reassessments also fall this week.
  - ORCL short: +8.5% ($141.40, below SMA50 $145.22). The ATR stop reference is ~$150.6 (price + 1.5×ATR) and the
    entry-based reference is ~$163.7.
  - Options: ORCL put ~€437 ($4.88/sh) and PLTR put ~€298 ($3.32/sh) (options_pricing.py, 10-12 mark). The NBIS
    put is ~€289 (hand Black-Scholes at 80% vol on NBIS $221.07, carried from 10-11). Together that's ≈ €1,024
    against €2,176 cost.

NEXT ACTIONS
  1. QXO-PB: exit 30 sh (≈ €951, net ≈ −€79), or set the stop at $35.10. Check Monday's close first.
  2. SFM: exit 10 sh (≈ €584, net ≈ −€136), or set the stop at $61.55. Record any fills in Turso.
  3. GSK: trim 35 sh on a close below 1,687p, otherwise reassess 10-15. EDEN reassess 10-15, PRX 10-16,
     LULU ~10-20 (trim 9 sh below $88.54).
  4. Decide on MONY, EOG and MO in Pending Trade Ideas, and reject IAG. ADBE: set a stop at $230.20.
  5. Fix the Turso NBIS put row (strike/expiry/type, direction='short'). GSK earnings 10-28, FLUT earnings 11-12.
════════════════════════════════════════════════════════
