════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-06 (Tue; US on Mon 10-05 closes, UK/EU on Fri 10-02)
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€19,406 (estimated; long equity €16,303 + options mtm ~€1,154 + ORCL short unrealized +€54 + cash €1,895)
  Available Cap:    €1,895.31 cash (rises to ~€2,471 if the SFM exit below is executed)
  Best Performer:   IQV +62.3%
  Worst Performer:  SFM −19.0% (FLUT −17.7%, LULU −17.5%, PRX −16.0%)
  Largest Position: LULU (9.1% of long book; GSK 9.0%, SAP 7.9%)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +62.34%    │ 53.9    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 661 │
  │ KLR      │ +38.67%    │ 64.3    │ ↑     │ Hold     │ ✅ free-ridden    │ 58  │
  │ SAP      │ +34.54%    │ 51.7    │ ↑     │ 👀 Watch │ MACD bearish      │ 344 │
  │ ACN      │ +24.27%    │ 58.3    │ ↑     │ Hold     │ −3.7% Mon (Xetra) │ —   │
  │ ERO      │ +10.44%    │ 59.3    │ ↑     │ Hold     │ MACD bullish      │ 86  │
  │ BIRK     │ +5.30%     │ 53.0    │ ↓     │ 👀 Watch │ < SMA50           │ 255 │
  │ EDEN     │ +2.15%     │ 39.6    │ ↓     │ 🔴 Exit  │ patience → ~10-15 │ —   │
  │ QXO-PB   │ +1.88%     │ 44.7    │ ↓     │ 👀 Watch │ < SMA50           │ —   │
  │ ZOE      │ −2.21%     │ 43.4    │ ↓     │ 👀 Watch │ —                 │ —   │
  │ REL      │ −2.22%     │ 49.5    │ ↓     │ 👀 Watch │ MACD bullish      │ 194 │
  │ WKL      │ −4.32%     │ 49.1    │ ↓     │ 👀 Watch │ —                 │ 73  │
  │ ADBE     │ −4.43%     │ 42.0    │ ↓     │ 👀 Watch │ reassess 10-08    │ 22  │
  │ GSK      │ −8.28%     │ 35.6    │ ↓     │ 🔴 Exit  │ ER 10-28          │ 35  │
  │ PRX      │ −15.99%    │ 36.7    │ ↓     │ 🔴 Exit  │ patience → ~10-16 │ 591 │
  │ LULU     │ −17.46%    │ 32.5    │ ↓     │ 🔴 Exit  │ NEW Exit (MACD x) │ 24  │
  │ FLUT     │ −17.70%    │ 29.8    │ ↓     │ 🔴 Exit  │ 1 sh; ER 11-12    │ —   │
  │ SFM      │ −19.01%    │ 35.7    │ ↓     │ 🔴 Exit  │ deadline passed   │ 142 │
  │ ORCL(sh) │ +7.81%     │ 48.5    │ ↓     │ 👀 Watch │ below SMA50       │ 601 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  Short P&L% is from the short's side (positive = price below entry). For ORCL, "vs50d" is the stock against its own
  SMA50 (↓ means the trend still favours the short).

  Freshness: this is the Tuesday 23:39 run. US holdings now use Monday 10-05 closes. A live check on massive found no
  Tuesday bar yet for SFM or LULU. UK/EU holdings (KLR, GSK, REL, SAP, EDEN, PRX, WKL, ZOE) are still on Friday
  10-02 closes. data_quality marks their technicals "degraded" because the latest bar (10-02) is older than the
  expected 10-05 session. That's a known yfinance gap (see the sheets-turso diff log). ACN is the exception: it has
  a 10-05 Xetra price (€175.35). In practice, every UK/EU signal below is two sessions old.
  No new trades or cash entries since the 10-02 sync. I checked Turso `trades` and `cash_ledger`, and no SFM sale is
  recorded. FX: EUR/USD 1.1264 (was 1.1223), GBP/EUR 1.1782 (was 1.1780).
  P&L%: KLR, IQV, PRX, WKL and FLUT use the corrected wiki entries. Turso `trades.entry_price` still holds the
  pre-reconciliation values for these five.
  Data quality: check_data_quality.py's retry loop was still running at write time (256 error and 688 degraded rows),
  so I read data_quality directly:
    • NBIS option_mark: NEEDS MANUAL REVIEW (10 consecutive failures, "missing strike/expiry/option_type"). Hand-marked
      below.
    • ACN EU and ZOE EU fundamentals ("no sa_prefix") and QXO-PB fundamentals ("no data from any source") have now
      failed 3 times each, which makes them NEEDS MANUAL REVIEW. These are known coverage gaps, so MF# shows "—".
      Prices are unaffected.

PORTFOLIO SHAPE
  Concentration:   OK — largest single position LULU 9.1%; nothing ≥ 25%
  Sector spread:   Tech/Software 20.9% (SAP, ACN, ADBE) | Info services/Fintech 21.0% (REL, WKL, EDEN) |
                   Healthcare 19.0% (GSK, ZOE, IQV) | Consumer 17.3% (LULU, BIRK, SFM) | Industrials 8.8% (QXO-PB, KLR) |
                   Internet/SOTP 6.3% (PRX) | Materials 6.3% (ERO) | Betting 0.4% (FLUT)
                   Bearish overlay: ORCL short 5sh + ORCL/PLTR/NBIS long puts (~€1,154 mtm)
  Currency split:  USD 41.2% | EUR 40.1% | GBp 18.7%
  Balance: spread is still even, and no sector is near the 25% cap. Six positions are now in mechanical Exit, worth
  ~€5,854 (36% of the long book). The risk is broad drift lower, not concentration.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (10 sh). The 10-05 deadline has passed. Monday closed at $64.92 with RSI 35.7, which didn't reclaim
    40. Price is below SMA50 ($77.15) and MACD is bearish. Turso shows no sale, so this is still outstanding.
  Expected proceeds: ~$649.20 ≈ €576 | Gross P&L −$152.40 ≈ −€135.3 | CGT €0 (loss) | Commission ~€0.89 |
    Net ≈ −€136.2 (the realised loss can offset future gains)

  LULU: NEW mechanical Exit. MACD crossed bearish on Monday, so all three conditions now hold: RSI 32.5, price below
    SMA50 ($111.51), MACD bearish. This is the largest position (9.1%, −17.5%). Apply the patience override, since
    the MF#24 value thesis is intact. Reassess by ~10-20, max trim 50%: 9 sh on a close below $87.97 (price − 1.5×ATR).
    A 9-sh trim at $93.14 ≈ $838 ≈ €744 | gross ≈ −€157 | CGT €0 | commission ~€0.89.
  PRX: Exit, patience override (the SOTP thesis is intact). Reassess by ~10-16. Trim 50% (15 sh) on a close below
    €33.03. The price is still Friday's €34.50.
  GSK: Exit (RSI 35.6, Friday data), patience override stands (MF#35, earnings 10-28). Reassess ~10-15, max trim 50%.
  EDEN: Exit (RSI 39.6, Friday data). Patience window runs to ~10-15, floor €25.77. Exiting now nets only ~€17 after
    CGT (~€5.4) and commission (~€3.2).
  FLUT: Exit persists (RSI 29.8). It's only 1 share (≈ €67), so commission would be ~1.3% of the sale. It stays
    free-to-ride.
  No Trim signals (nothing has RSI > 70 at ≥ 20% weight).
  Nothing was synced to Turso. These are recommendations, and Mike executes them himself. Once SFM is sold, record
    the real fill with `trading_portfolio_sync.py exit --ticker SFM --exchange US --exit-price <fill>`.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals today. No holding meets all of RSI 35–50, above SMA50 and MACD bullish. IQV's MACD is bearish, and
    KLR, ACN and ERO have RSI above 50.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG: Enter at 441.2p (Friday close) — 5/5 Turso screen, MF#11 pass, above SMA50, RSI 57, MACD bullish.
  Stop: 425.3p | Size: €1,000 (~192 sh)
  BBY or LOGN: take a second slot only if SFM is sold (see Investment Opportunities).

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350, Industrials — airlines) — Magic Formula pass, P/E 7.8, EY 18.5%, ROIC 27.5% | MF#11
  Entry: 441.2p | Stop: 425.3p | Size: €1,000 | RSI: 57.1 | MACD: Bullish
  Conviction: MF#11; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 57.
  Portfolio fit: adds GBp (18.7% → ~23%) and cyclical exposure with no AI link. Industrials would go from 8.8% to
    ~14%. This is the 9th briefing in a row to pick IAG and it's still pending, so approve or reject it to close the
    idea out. The price is Friday's, and the 10-05 bar is missing.

  4/5 · BBY (FTSE350, Industrials — Balfour Beatty, UK infrastructure) — MF ranked (no pass), P/E 17.6, EY 6.3%, ROIC 105% | MF#91
  Entry: 937.5p | Stop: 900.2p | Size: €1,000 (~90 sh) | RSI: 61.2 | MACD: Bullish
  Conviction: MF#91; Magic Formula ranked (no pass); corroborated by briefing-recommendation; bullish MACD; RSI healthy at 61.
  Portfolio fit: GBp exposure to defensive UK infrastructure spending, in a clean uptrend. It's in the same sector as
    IAG, so pick one or the other.

  4/5 · LOGN (STOXX600, Technology — Logitech) — MF ranked (no pass), P/E 19.2, EY 6.7%, ROIC 123% | MF#76
  Entry: 84.50 (CHF, 10-05) | Stop: 80.43 | Size: €750 | RSI: 54.6 | MACD: Bullish
  Conviction: MF#76; Magic Formula ranked (no pass); corroborated by briefing-recommendation; bullish MACD; RSI healthy at 55.
  Portfolio fit: adds new CHF exposure. At €750, Tech stays under ~25%. It eased −2.2% on Monday to a better entry
    than 86.40. Verify the SIX listing before ordering, because Turso's currency label is unreliable.

  Not carried forward: HAS (new 4/5, MF#68, US consumer; Consumer is already 17% and has 3 Exit/Watch names), SAGA
  (RSI 69.6, P/E 42.8, extended), MU (AI semis, Burry-red), EZJ (RSI 68, overlaps IAG), ACN (already held).
  All three carried picks already have active Pending Trade Ideas, so tonight's record calls were deduped no-ops.

FREE RIDE OPPORTUNITIES
  IQV: ✅ Already free-ridden — cumulative trim proceeds exceed the original 12-sh cost. 3 shares at zero effective
    cost (~€709).
  KLR: ✅ Already free-ridden — 10 shares at zero effective cost (~€392).
  SAP (+34.5%): selling 6 of 7 sh @ €183.92 to cover cost leaves 1 free share, below the 2-share threshold. Not flagged.
  ACN (+24.3%): below the 25% threshold, and covering cost would leave just 1 free share. Not flagged.
  No new positions meet free ride criteria.

PORTFOLIO RISKS TO WATCH
  - The Exit list has widened to 6 (SFM, LULU, PRX, GSK, EDEN, FLUT), with 9 Watches, and 12 of 17 longs are below
    SMA50. LULU joining makes the largest position a mechanical Exit. The PRX/GSK/EDEN patience windows all expire
    ~10-15/10-16.
  - UK/EU prices are two sessions stale (10-02). GSK, PRX, EDEN, REL, WKL, SAP and ZOE could have moved through
    their thresholds without this briefing seeing it. Check live quotes before acting.
  - The options book keeps losing time value: ORCL put ~€446 (cost €982; ORCL $142.48 vs breakeven $108.62, expires
    12-18), PLTR put ~€464 (cost €715), NBIS put ~€244 by hand-mark (cost €479; NBIS fell to $232.57). Combined that's
    about −€1,022 vs cost.
  - ORCL short: $142.48, still below SMA50 ($144.14). An SMA50 reclaim would flip the trend against the short. The ATR
    stop reference is $164.00.
  - ADBE: $238.79 is sitting on its 1.5×ATR stop reference ($237.98), with RSI 42 and MACD bearish. A further down
    day likely tips it into Exit before the 10-08 reassessment.

NEXT ACTIONS
  1. SFM: sell all 10 sh at Wednesday's open (~$64.92 ≈ €576, net ≈ −€136). Then record the fill in Turso.
  2. LULU: pre-set the patience plan. Trim 9 sh on a close below $87.97, and reassess fully by ~10-20.
  3. IAG at ~441p, stop 425.3p, ~192 sh (≈ €1,000) from cash. Approve or reject it in Pending Trade Ideas (9th pick).
  4. Fix the Turso NBIS put row (option_type=put, strike=90, expiry=2027-06-17, premium=5.38, contracts=1,
     direction=long; 10 failures now) and the five stale entry prices. Look at why yfinance has no 10-05 UK/EU bars.
  5. ADBE reassess 10-08. PRX/GSK/EDEN windows close ~10-15/10-16. GSK earnings 10-28, FLUT 11-12.
════════════════════════════════════════════════════════
