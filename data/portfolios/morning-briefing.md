════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-05 (Mon, on Fri 10-02 closes)
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€19,461 (estimated; long equity €16,333 + options mtm ~€1,178 + ORCL short unrealized +€55 + cash €1,895)
  Available Cap:    €1,895.31 cash (rises to ~€2,469 if the SFM exit below is executed)
  Best Performer:   IQV +57.5%
  Worst Performer:  SFM −19.6% (FLUT −18.7%, LULU −16.3%, PRX −16.0%)
  Largest Position: LULU (9.3% of long book; GSK 9.0%, SAP 7.9%)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +57.53%    │ 45.3    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 661 │
  │ KLR      │ +38.67%    │ 64.3    │ ↑     │ Hold     │ ✅ free-ridden    │ 58  │
  │ SAP      │ +34.54%    │ 51.7    │ ↑     │ 👀 Watch │ MACD bearish      │ 344 │
  │ ACN      │ +29.02%    │ 63.6    │ ↑     │ Hold     │ −5.5% Fri (Xetra) │ —   │
  │ ERO      │ +8.91%     │ 57.8    │ ↑     │ Hold     │ MACD bullish      │ 86  │
  │ BIRK     │ +3.93%     │ 50.6    │ ↓     │ 👀 Watch │ < SMA50           │ 255 │
  │ EDEN     │ +2.15%     │ 39.6    │ ↓     │ 🔴 Exit  │ patience → ~10-15 │ —   │
  │ QXO-PB   │ +1.88%     │ 44.7    │ ↓     │ 👀 Watch │ < SMA50           │ —   │
  │ ZOE      │ −2.21%     │ 43.4    │ ↓     │ 👀 Watch │ —                 │ —   │
  │ REL      │ −2.22%     │ 49.5    │ ↓     │ 👀 Watch │ —                 │ 194 │
  │ WKL      │ −4.32%     │ 49.1    │ ↓     │ 👀 Watch │ —                 │ 73  │
  │ ADBE     │ −4.87%     │ 41.0    │ ↓     │ 👀 Watch │ reassess ~10-08   │ 22  │
  │ GSK      │ −8.28%     │ 35.6    │ ↓     │ 🔴 Exit  │ ER 10-28          │ 35  │
  │ PRX      │ −15.99%    │ 36.7    │ ↓     │ 🔴 Exit  │ patience → ~10-16 │ 591 │
  │ LULU     │ −16.29%    │ 34.0    │ ↓     │ 👀 Watch │ 1 MACD x from Exit│ 24  │
  │ FLUT     │ −18.70%    │ 27.7    │ ↓     │ 🔴 Exit  │ 1 sh; ER 11-12    │ —   │
  │ SFM      │ −19.57%    │ 34.3    │ ↓     │ 🔴 Exit  │ DECISION DAY 10-05│ 142 │
  │ ORCL(sh) │ +7.93%     │ 48.3    │ ↓     │ 👀 Watch │ near SMA50        │ 601 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  Short P&L% is from the short's side (positive = price below entry). "vs50d" for ORCL is the stock vs its own SMA50
  (↓ = trend still favours the short).

  Freshness: Monday 23:40 run. The prices are still Friday 2026-10-02 closes. Monday's closes aren't in Turso yet
  because refresh-technicals runs at 07:17 CEST, so tonight's prices and TA are the same as Sunday's briefing. A live
  check on massive also had no 10-05 bar for SFM yet. Only the FX moved: EUR/USD 1.1223 (was 1.1264), GBP/EUR 1.1780
  (was 1.1756). That FX move accounts for the whole +€25 change in total value. No new trades or cash entries since
  the 10-02 sync (checked Turso `trades` and `cash_ledger`).
  Structural note: an 11:30pm briefing always runs ~17h before that day's closes reach Turso. Each weekday briefing
  is therefore one session behind. Consider moving refresh-technicals to ~23:00, or this task to after 07:30.
  P&L%: uses the corrected wiki entries for KLR, IQV, PRX, WKL and FLUT. Turso `trades.entry_price` still holds
  pre-reconciliation values for these five.
  Data quality: check_data_quality.py's retry loop was still running at write time (255 error rows across the
  universe), so I queried the data_quality table directly. Rows that touch holdings or candidates:
    • NBIS option_mark: NEEDS MANUAL REVIEW, 7 consecutive failures ("missing strike/expiry/option_type"). The
      Turso row is still missing put/$90/2027-06-17/$5.38/1 contract. It also has direction='short' when it's a
      long put. Hand-marked below.
    • ACN EU and ZOE EU fundamentals ("no sa_prefix") and QXO-PB fundamentals ("no data from any source"): 2nd
      failure each. These are known coverage gaps and explain the "—" MF#. Prices are unaffected.

PORTFOLIO SHAPE
  Concentration:   OK — largest single position LULU 9.3%; nothing ≥ 25%
  Sector spread:   Tech/Software 21.1% (SAP, ACN, ADBE) | Info services/Fintech 21.0% (REL, WKL, EDEN) |
                   Healthcare 18.9% (GSK, ZOE, IQV) | Consumer 17.3% (LULU, BIRK, SFM) | Industrials 8.8% (QXO-PB, KLR) |
                   Internet/SOTP 6.3% (PRX) | Materials 6.2% (ERO) | Betting 0.4% (FLUT)
                   Bearish overlay: ORCL short 5sh + ORCL/PLTR/NBIS long puts (~€1,178 mtm)
  Currency split:  USD 41.0% | EUR 40.3% | GBp 18.7%
  Balance: well spread, and no sector is near the 25% cap. 5 positions are in mechanical Exit and 2 more (LULU, ADBE)
  are close. The risk is broad drift lower, not concentration.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (10 sh) — today was the deadline set on 10-01: "full exit Mon 10-05 unless RSI > 40". On the latest
    data (Fri), RSI is 34.3, price is below SMA50 ($77.35) and MACD is bearish. If you didn't sell during Monday's
    session, sell at Tuesday's open unless Monday's close reclaimed RSI 40. That would take roughly a +5% day to
    ~$68.
  Expected proceeds: ~$644.70 ≈ €574 | Gross P&L −$156.90 ≈ −€139.8 | CGT €0 (loss) | Commission ~€0.89 |
    Net ≈ −€140.7 (crystallises a loss that can offset future gains)

  PRX: Exit, patience override (SOTP thesis intact). Reassess by ~10-16. Trim 50% (15 sh ≈ €518, gross ≈ −€98.5,
    commission ~€3.2) on a close below €33.03 (price − 1.5×ATR).
  GSK: Exit (RSI 35.6), patience override stands (thesis intact, MF#35, earnings 10-28). Reassess ~10-15, max trim
    50%.
  EDEN: Exit (RSI 39.6, right at the line). Patience window to ~10-15, floor €25.77. Exiting now nets only ~€17
    after CGT (~€5.4) and commission (~€3.2).
  FLUT: Exit persists (RSI 27.7). 1 share ≈ €67, so commission is ~1.3% of the sale. It stays free-to-ride.
  No Trim signals (nothing RSI > 70 at ≥ 20% weight).
  Nothing was synced to Turso: these are recommendations, and Mike executes them himself. If SFM was sold today,
    record the real fill with `trading_portfolio_sync.py exit --ticker SFM --exchange US --exit-price <fill>`.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals today. No holding has RSI 35–50 + above SMA50 + MACD bullish. KLR, ACN and ERO are trend-qualified,
    but their RSI is above 50.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG: Enter at 441.2p (current) — 5/5 Turso screen, MF#11 pass, above SMA50 with RSI 57 and bullish MACD.
  Stop: 425.3p | Size: €1,000 (~192 sh)
  BBY or LOGN: second slot only if SFM is sold (see Investment Opportunities).

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350, Industrials — airlines) — Magic Formula pass, P/E 7.8, EY 18.5%, ROIC 27.5% | MF#11
  Entry: 441.2p | Stop: 425.3p | Size: €1,000 | RSI: 57.1 | MACD: Bullish
  Conviction: MF#11; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 57.
  Portfolio fit: adds GBp (18.7% → ~23%) and cyclical exposure with no AI link. Industrials go 8.8% → ~14%. This is
    the 8th briefing in a row to pick it, and it's still pending. Approve or reject it so the idea resolves.

  4/5 · BBY (FTSE350, Industrials — Balfour Beatty, UK infrastructure) — MF ranked (no pass), P/E 17.6, EY 6.3%, ROIC 105% | MF#91
  Entry: 937.5p | Stop: 900.2p | Size: €1,000 (~90 sh) | RSI: 61.2 | MACD: Bullish
  Conviction: MF#91; Magic Formula ranked (no pass); corroborated by briefing-recommendation; bullish MACD; RSI healthy at 61.
  Portfolio fit: GBp, defensive UK infrastructure spend, clean uptrend. It overlaps IAG's sector, so treat it as an
    either/or.

  4/5 · LOGN (STOXX600, Technology — Logitech) — MF ranked (no pass), P/E 19.2, EY 6.7%, ROIC 123% | MF#76
  Entry: 86.40 (CHF) | Stop: 82.33 | Size: €750 | RSI: 60.3 | MACD: Bullish
  Conviction: MF#76; Magic Formula ranked (no pass); corroborated by briefing-recommendation; bullish MACD; RSI healthy at 60.
  Portfolio fit: new CHF exposure. At €1,000 it would push Tech to ~26%, so size it at €750. Turso labels the
    currency "USD", but the price matches the SIX CHF line, so verify the listing before ordering.

  Considered, not carried: SAGA (MF#3, but RSI 69.6 and P/E 42.8, so extended; watch for ~700p). MU (AI-semis, a
    Burry-red name). EZJ (RSI 68, extended, and the same airline exposure as IAG). ACN (already held via Xetra CSA).
  All three carried picks already have active Pending Trade Ideas, so tonight's record calls were deduped no-ops.

FREE RIDE OPPORTUNITIES
  IQV: ✅ Already free-ridden — cumulative trim proceeds exceed the original 12-sh cost. 3 shares at zero effective
    cost (~€690).
  KLR: ✅ Already free-ridden — 10 shares at zero effective cost (~€392).
  SAP (+34.5%): selling 6 of 7 sh @ €183.92 leaves 1 free share, below the 2-share threshold. Not flagged.
  ACN (+29.0%): selling 5 of 6 sh @ €182.05 leaves 1 free share. Not flagged.
  No new positions meet the free ride criteria.

PORTFOLIO RISKS TO WATCH
  - Broad technical deterioration: 5 Exits (SFM, PRX, GSK, EDEN, FLUT) and 7 Watches, with 12 of 17 longs below SMA50.
    The PRX/GSK/EDEN patience windows all expire ~10-15/10-16.
  - LULU (largest, 9.3%, −16.3%): RSI 34.0, below SMA50. Only bullish MACD keeps it out of Exit.
  - Options book bleeding time value: ORCL put ~€462 (cost €982, ORCL $142.30 vs breakeven $108.62, expires 12-18),
    PLTR put ~€483 (cost €715), NBIS put ~€233 by hand-mark (cost €479). That's about −€998 vs cost combined.
  - ORCL short: $142.30, just below SMA50 ($143.59). A reclaim of SMA50 flips the trend against the short. The ATR
    stop reference is $164.06.
  - Stale-by-design data: this briefing can't see Monday's session. Before acting, check live prices on anything
    near a threshold (SFM RSI 40, EDEN RSI 40, PRX €33.03).

NEXT ACTIONS
  1. SFM: if it wasn't sold Monday, sell all 10 sh at Tuesday's open (~$64.47 ≈ €574, net ≈ −€141). Then record the
     fill in Turso.
  2. IAG at ~441p, stop 425.3p, ~192 sh (≈€1,000) from cash. Approve or reject it in Pending Trade Ideas (8th pick).
  3. Fix the Turso NBIS put row (option_type=put, strike=90, expiry=2027-06-17, premium=5.38, contracts=1,
     direction=long) and the five stale entry prices.
  4. ADBE: reassess ~10-08 (RSI 41, below SMA50, MACD bearish).
  5. PRX/GSK/EDEN patience windows close ~10-15/10-16. Pre-decide the 50% trims. GSK earnings 10-28, FLUT 11-12.
════════════════════════════════════════════════════════
