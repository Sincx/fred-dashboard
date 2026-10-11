════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-11
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€19,689 (estimated; long equity €16,703 + options mtm ~€1,031 + ORCL short unrealized +€59 + cash €1,895)
  Available Cap:    €1,895.31 cash (~€3,425 if SFM and QXO-PB are exited)
  Best Performer:   IQV +58.6%
  Worst Performer:  SFM −18.7% (LULU −16.3%, FLUT −13.4%, PRX −12.3%)
  Largest Position: LULU (9.1% of long book; GSK 8.7%, SAP 8.0%)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +58.55%    │ 47.9    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 661 │
  │ SAP      │ +40.06%    │ 60.6    │ ↑     │ Hold     │ free ride (2 sh)  │ 344 │
  │ KLR      │ +36.00%    │ 56.0    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 58  │
  │ ACN      │ +31.54%    │ 63.8    │ ↑     │ Hold     │ —                 │ —   │
  │ ERO      │ +8.06%     │ 55.1    │ ↑     │ 👀 Watch │ MACD bearish      │ 86  │
  │ EDEN     │ +6.48%     │ 51.8    │ ↓     │ 👀 Watch │ patience ~10-15   │ —   │
  │ WKL      │ +5.81%     │ 70.0    │ ↑     │ Hold     │ RSI at 70         │ 73  │
  │ REL      │ +5.20%     │ 67.4    │ ↑     │ Hold     │ reclaimed SMA50   │ 194 │
  │ ZOE      │ +4.97%     │ 62.9    │ ↑     │ Hold     │ reclaimed SMA50   │ —   │
  │ BIRK     │ +4.93%     │ 52.2    │ ↓     │ 👀 Watch │ MACD bullish      │ 255 │
  │ ADBE     │ −3.03%     │ 46.8    │ ↓     │ 👀 Watch │ Exit cleared      │ 22  │
  │ QXO-PB   │ −7.62%     │ 33.1    │ ↓     │ 🔴 Exit  │ 2nd day of Exit   │ —   │
  │ GSK      │ −9.80%     │ 36.6    │ ↓     │ 🔴 Exit  │ reassess 10-15    │ 35  │
  │ PRX      │ −12.33%    │ 49.8    │ ↓     │ 👀 Watch │ patience ~10-16   │ 591 │
  │ FLUT     │ −13.38%    │ 40.5    │ ↓     │ 👀 Watch │ 1 sh; ER 11-12    │ —   │
  │ LULU     │ −16.25%    │ 38.1    │ ↓     │ 👀 Watch │ reassess ~10-20   │ 24  │
  │ SFM      │ −18.74%    │ 37.5    │ ↓     │ 👀 Watch │ exit rule stands  │ 142 │
  │ ORCL(sh) │ +8.51%     │ 48.7    │ ↓     │ 👀 Watch │ below SMA50       │ 601 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  Short P&L% is from the short's side (positive = price below entry). P&L% uses the wiki's reconciled entry prices
  (Turso still holds the pre-reconciliation entries for IQV/KLR/PRX/WKL/ERO, so its own pl_pct differs slightly).

  Data freshness (Turso):
    Every position, US, EU and UK, is on Friday 10-09 closes. That's normal for a Sunday-night run; Monday's
    session lands at the 07:17 refresh on Tuesday morning. FX: EUR/USD 1.1194, GBP/EUR 1.1817.
  Since the 10-08 run: no new trades or cash entries in Turso. The latest trade is still the 10-01 NBIS put and the
    latest cash entry is still 10-01. Cash is unchanged at €1,895.31.
  Pipeline health: OK, all tracked tasks healthy.
  Data quality (check_data_quality.py finished after the first push): 1 AUTO-RECOVERED, 255 STILL FAILING (mostly
    UK/EU fundamentals). Only the four known items affect this portfolio, and none of them affect prices:
    • NBIS option_mark: 23 consecutive failures, NEEDS MANUAL REVIEW. The Turso row is missing strike/expiry/type,
      so the put is hand-marked below.
    • ACN EU and ZOE EU fundamentals: 6 consecutive failures, "no sa_prefix", so neither has an MF#.
    • QXO-PB fundamentals: 6 consecutive failures, "no data from any source".

PORTFOLIO SHAPE
  Concentration:   OK. The largest single position is LULU at 9.1%; nothing is ≥ 25%.
  Sector spread:   Info services/Fintech 22.0% (REL, WKL, EDEN) | Tech/Software 21.2% (SAP, ACN, ADBE) |
                   Healthcare 18.8% (GSK, ZOE, IQV) | Consumer 17.1% (LULU, BIRK, SFM) | Industrials 8.0% (QXO-PB, KLR) |
                   Internet/SOTP 6.5% (PRX) | Materials 6.0% (ERO) | Betting 0.4% (FLUT)
                   Bearish overlay: ORCL short 5 sh, plus ORCL/PLTR/NBIS long puts (~€1,031 mtm)
  Currency split:  USD 39.9% | EUR 41.5% | GBp 18.7%
  Balance: sectors are still evenly spread. Friday was broadly positive (+€389 on long equity since the 10-08
    run). ADBE, LULU, REL and ZOE recovered, while GSK and QXO-PB kept falling.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  QXO-PB: Full Exit (30 sh). The Exit is now confirmed for a second session: $35.38 (down from $36.25), RSI 33.1,
    below SMA50 $40.78, MACD bearish. The preferred keeps falling with the common, and no patience thesis covers it.
    Alternative: a hard stop at $35.10, which is now only 0.8% below the price.
  Expected proceeds: ~$1,061.40 ≈ €948 | Gross P&L −$87.60 ≈ −€78.3 | CGT €0 (loss) | Commission ~€0.89 |
    Net ≈ −€79.2

  SFM: Full Exit (10 sh). The rule set on 10-01 still applies: exit unless RSI is above 40. RSI is 37.5 and price
    is $65.14, below SMA50 $75.97. The mechanical signal is only Watch because MACD is bullish.
    Alternative: a hard stop at $61.55 (price − 1.5×ATR).
  Expected proceeds: ~$651.40 ≈ €582 | Gross −$150.20 ≈ −€134.2 | CGT €0 | Commission ~€0.89 | Net ≈ −€135.1

  GSK: Exit has returned (RSI 36.6, 1,750p, below SMA50 1,859p, MACD bearish). It cleared to Watch on 10-08, but
    Thursday and Friday took it back down. The patience override (MF#35) runs to the ~10-15 reassessment, and
    earnings are 10-28. Trim 50% (35 sh) on a close below 1,687p (price − 1.5×ATR). If it hasn't reclaimed
    RSI 40 by 10-15, trim 35 sh then.
  A 35-sh trim at today's price: proceeds £612.50 ≈ €724 | Gross −£66.53 ≈ −€78.6 | CGT €0 | Commission ~€3.50 |
    Net ≈ −€82.1

  ADBE: Exit cleared to Watch. It closed at $242.27 (up from $232.77) and MACD turned bullish, but it's still
    below SMA50 $257.88. The 10-08 trim-3-sh idea lapses because the mechanical Exit is gone. Hold with a stop at
    $230.20 (price − 1.5×ATR).
  LULU: Exit cleared to Watch (MACD bullish, RSI 38.1, $94.50). The patience override stands until the ~10-20
    reassessment. Trim 9 sh on a close below $88.54.
  FLUT: Exit cleared to Watch (RSI 40.5). It's 1 share and stays free-to-ride.
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
  If QXO-PB and SFM are exited, cash would be ~€3,425. That funds MONY and EOG and still leaves a reserve.

INVESTMENT OPPORTUNITIES
  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#15
  Entry: 185.9p (10-09) | Stop: 174.2p | Size: €1,000 | RSI: 51.1 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 51.
  Portfolio fit: adds GBp exposure in a sector the portfolio doesn't own, with no AI link. The caveat is that price
    is 4% below SMA50 (194.2p), so this is a recovery entry, not a trend entry. New Pending Trade Idea card tonight.

  5/5 · EOG (S&P 500, Energy — EOG Resources) — Magic Formula pass, P/E 10.8, EY 11.8%, ROIC 19.8% | MF#50
  Entry: $148.16 (10-09) | Stop: $143.23 | Size: €1,000 (~7 sh) | RSI: 58.8 | MACD: Bullish
  Conviction: MF#50; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 59.
  Portfolio fit: the portfolio has 0% energy, and this is USD exposure unrelated to AI. Dividend yield 3.0%. It's up
    2.7% since it was first flagged at $144.21.

  5/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1% | MF#14
  Entry: pullback to ~$69.75 (last $71.68) | Stop: $67.81 | Size: €750 starter | RSI: 67.2 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 67.
  Portfolio fit: a defensive staple with a 6.6% yield, which would offset the cyclical consumer names (LULU, BIRK).
    It's a starter only because RSI is near overbought.

  Also considered: APA (5/5, MF#34, a second energy name, so EOG is preferred), TMV (5/5, still pending, but
    Tech/Software is already 21.2%), MONY EU/RMV EU (duplicate listings), ACN US (already held via Xetra), and
    SAGA/RMV (4/5).
  IAG has dropped off the screen: 415.9p, RSI 41, now below SMA50 430.8p. Its Pending Trade Idea card is still
    active. Reject it, or let it expire.
  Pending Trade Ideas: MONY is a new card. EOG and MO were already active, so they were deduped (no new cards).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €191.46 → ~€957 proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€383
  Status: Monitor. Hold the thesis and execute at the next RSI extension (RSI 60.6 is below 65; no Trim signal).
    This is a new flag: SAP crossed the 2-free-share threshold on Friday's close. The margin is thin, though. After
    ~€0.89 commission and ~€57.50 CGT on the €273.80 gain, net cash is ~€899, about €58 short of full cost recovery.
  IQV: ✅ Already free-ridden. 3 shares at zero effective cost (~€696).
  KLR: ✅ Already free-ridden. 10 shares at zero effective cost (~€386).
  ACN (+31.5%): selling 5 of 6 sh would leave only 1 free share. Not flagged.

PORTFOLIO RISKS TO WATCH
  - US drawdown cluster: LULU, SFM and QXO-PB are down 7.6–18.7%, and two of them have exit recommendations. With ADBE
    they total €4,132, or 24.7% of the long book.
  - GSK is back in Exit, with earnings on 10-28. At 8.7% it's the second-largest position and down 9.8%. The 10-15
    reassessment is this week.
  - ORCL short: +8.5% ($141.40, below SMA50 $145.22). The ATR stop reference is ~$150.6 (price + 1.5×ATR) and the
    entry-based reference is ~$163.7.
  - Options: ORCL put ~€442 and PLTR put ~€300 (options_pricing.py, 10-11 mark). The NBIS put is ~€289 (hand
    Black-Scholes at 80% vol on NBIS $221.07; range €161–450 for 70–90% vol). Together that's ≈ €1,031 against
    €2,176 cost. PLTR's mark fell as PLTR rose to $209.
  - WKL and REL are near overbought (RSI 70.0 and 67.4). These aren't trims at their weights, but chasing them with
    adds isn't warranted either.

NEXT ACTIONS
  1. QXO-PB: exit 30 sh (≈ €948, net ≈ −€79), or set the stop at $35.10.
  2. SFM: exit 10 sh (≈ €582, net ≈ −€135), or set the stop at $61.55. Record any fills in Turso.
  3. GSK: trim 35 sh on a close below 1,687p, otherwise reassess 10-15. EDEN reassess ~10-15, PRX ~10-16,
     LULU ~10-20 (trim 9 sh below $88.54).
  4. Decide on MONY (new), EOG and MO in Pending Trade Ideas, and reject IAG. ADBE: set a stop at $230.20.
  5. Fix the Turso NBIS put row (strike/expiry/type, direction='short'). GSK earnings 10-28, FLUT earnings 11-12.
════════════════════════════════════════════════════════
