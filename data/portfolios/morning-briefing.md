════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-04 (Sun, on Fri 10-02 closes)
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€19,436 (estimated; long equity €16,303 + options mtm ~€1,184 + ORCL short unrealized +€54 + cash €1,895)
  Available Cap:    €1,895.31 cash (rises to ~€2,467 if the SFM exit below is executed)
  Best Performer:   IQV +57.5%
  Worst Performer:  SFM −19.6% (FLUT −18.7%, LULU −16.3%, PRX −16.0%)
  Largest Position: LULU (9.3% of long book; GSK 9.0%, SAP 7.9%)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +57.53%    │ 45.3    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 660 │
  │ KLR      │ +38.67%    │ 64.3    │ ↑     │ Hold     │ ✅ free-ridden    │ 58  │
  │ SAP      │ +34.54%    │ 51.7    │ ↑     │ 👀 Watch │ MACD bearish      │ 343 │
  │ ACN      │ +29.02%    │ 63.6    │ ↑     │ Hold     │ −5.5% Fri (Xetra) │ —   │
  │ ERO      │ +8.91%     │ 57.8    │ ↑     │ Hold     │ MACD back to bull │ 85  │
  │ BIRK     │ +3.93%     │ 50.6    │ ↓     │ 👀 Watch │ < SMA50           │ 255 │
  │ EDEN     │ +2.15%     │ 39.6    │ ↓     │ 🔴 Exit  │ patience → ~10-15 │ —   │
  │ QXO-PB   │ +1.88%     │ 44.7    │ ↓     │ 👀 Watch │ < SMA50           │ —   │
  │ ZOE      │ −2.21%     │ 43.4    │ ↓     │ 👀 Watch │ direct EUR quote  │ —   │
  │ REL      │ −2.22%     │ 49.5    │ ↓     │ 👀 Watch │ —                 │ 193 │
  │ WKL      │ −4.32%     │ 49.1    │ ↓     │ 👀 Watch │ —                 │ 73  │
  │ ADBE     │ −4.87%     │ 41.0    │ ↓     │ 👀 Watch │ reassess ~10-08   │ 22  │
  │ GSK      │ −8.28%     │ 35.6    │ ↓     │ 🔴 Exit  │ ER 10-28          │ 35  │
  │ PRX      │ −15.99%    │ 36.7    │ ↓     │ 🔴 Exit  │ NEW: MACD → bear  │ 592 │
  │ LULU     │ −16.29%    │ 34.0    │ ↓     │ 👀 Watch │ 1 MACD x from Exit│ 24  │
  │ FLUT     │ −18.70%    │ 27.7    │ ↓     │ 🔴 Exit  │ 1 sh; ER 11-12    │ —   │
  │ SFM      │ −19.57%    │ 34.3    │ ↓     │ 🔴 Exit  │ DECIDE Mon 10-05  │ 141 │
  │ ORCL(sh) │ +7.93%     │ 48.3    │ ↓     │ 👀 Watch │ +3.1% Fri vs sh   │ 601 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  Short P&L% is from the short's side (positive = price below entry). "vs50d" for ORCL is the stock vs its own SMA50
  (↓ = trend still favours the short).

  Freshness: Sunday 23:30 run. This is the first briefing since 10-01; there was no Friday run. It includes the
  10-02 statement sync: META stock and call closed, the MU/NBIS #3/PLTR/AMAT shorts closed, and the NBIS $90 Jun-27 put
  opened. All prices are Friday 2026-10-02 closes straight from Turso `prices`. That's the first night in five
  without a yf.download fallback. FX: EUR/USD 1.1264, GBP/EUR 1.1756.
  ZOE now has a real EUR quote (€61.82), which retires the ZTS proxy. The 10-01 proxy "Exit*" has cleared to Watch
  (RSI 43.4).
  MF#: these ranks come from the full Turso universe (v_magic_formula_latest, ~1,350 names). They won't match the
  wiki's own Magic Formula table, which ranks only ~35 held names (e.g. GSK #4 there, #35 here). That's expected.
  P&L%: computed on the corrected wiki entries for KLR (2,400p), IQV ($163.91), PRX (€41.065), WKL (€70.88) and
  FLUT ($92.015). Turso `trades.entry_price` still holds the pre-reconciliation values for these five.
  Data quality: check_data_quality.py's retry loop was still running at write time (265 error rows across the
  universe), so I queried the data_quality table directly. Rows that touch holdings or candidates:
    • NBIS option_mark: NEEDS MANUAL REVIEW, 4 consecutive failures ("missing strike/expiry/option_type"). The
      10-01 NBIS put was written to Turso without option_type/strike/expiry/premium/contracts, so options_pricing.py
      can't mark it. The put is hand-marked below. The Turso row needs fixing (put / $90 / 2027-06-17 /
      $5.38 / 1 contract).
    • ACN EU and ZOE EU fundamentals ("no sa_prefix"), QXO-PB fundamentals ("no data from any source"): 1st failure
      each. These are known coverage gaps and explain the "—" MF#. Prices are unaffected.
    • Universe-wide: ~15+ EU tickers (HLI, FERR, PERP, BNPP, ASMI…) have failed technicals for 23–24 straight days.
      None is held, but this is a real recurring bug worth a dedicated look.

PORTFOLIO SHAPE
  Concentration:   OK — largest single position LULU 9.3%; nothing ≥ 25%
  Sector spread:   Tech/Software 21.1% (SAP, ACN, ADBE) | Info services/Fintech 21.0% (REL, WKL, EDEN) |
                   Healthcare 18.9% (GSK, ZOE, IQV) | Consumer 17.3% (LULU, BIRK, SFM) | Industrials 8.8% (QXO-PB, KLR) |
                   Internet/SOTP 6.3% (PRX) | Materials 6.2% (ERO) | Betting 0.4% (FLUT)
                   Bearish overlay: ORCL short 5sh + ORCL/PLTR/NBIS long puts (~€1,184 mtm)
  Currency split:  USD 41.0% | EUR 40.4% | GBp 18.7%
  Balance: well spread, and no sector is near the 25% cap. Five positions are in mechanical Exit and two more (LULU,
  ADBE) are close. The book's weakness is broad drift lower, not concentration.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (10 sh) — the decision rule set on 10-01 was "full exit Mon 10-05 unless RSI > 40". RSI is still 34.3,
    price is below SMA50 ($77.35) and MACD is bearish. The bounce failed and Friday closed flat at $64.47.
  Expected proceeds: ~$644.70 ≈ €572 | Gross P&L −$156.90 ≈ −€139.3 | CGT €0 (loss) | Commission ~€0.89 |
    Net ≈ −€140.2 (crystallises a loss that can offset future gains)

  PRX: NEW mechanical Exit — patience override, no trade today. MACD crossed bearish (RSI 36.7, below SMA50 €37.66).
    The SOTP / Tencent-NAV-discount thesis hasn't changed, so the patience rule applies: reassess by ~10-16.
    Trim 50% (15 sh ≈ €517, gross loss ≈ −€98.5, commission ~€3.2) on a close below €33.03 (price − 1.5×ATR).
  GSK: Exit (RSI 35.6), patience override stands (thesis intact, earnings 10-28), reassess ~10-15, max trim 50%.
  EDEN: Exit (RSI 39.6, right at the line). Patience window to ~10-15, floor €25.77. Exiting now nets only
    ~€15 after CGT + commission.
  FLUT: Exit persists (RSI 27.7). 1 share ≈ €66, so commission is ~1.3% of the sale. It stays free-to-ride.
  No Trim signals (nothing RSI > 70 at ≥ 20% weight).
  Nothing was synced to Turso: these are recommendations, and Mike executes them himself.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals today. No holding has RSI 35–50 + above SMA50 + MACD bullish. KLR, ACN and ERO qualify
    trend-wise, but their RSI is above 50.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG: Enter at 441.2p (current) — 5/5 Turso screen, MF#11 pass. It reclaimed SMA50 (431.8p) Friday with RSI 57.
  Stop: 425.3p | Size: €1,000 (~190 sh)
  BBY or LOGN: second slot only if SFM is sold (see Investment Opportunities). Don't take both BBY and IAG unless
    you want Industrials near 21%.

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350, Industrials — airlines) — Magic Formula pass, P/E 7.8, EY 18.5%, ROIC 27.5% | MF#11
  Entry: 441.2p | Stop: 425.3p | Size: €1,000 | RSI: 57.1 | MACD: Bullish
  Conviction: MF#11; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 57.
  Portfolio fit: adds GBp (18.7% → ~23%) and cyclical exposure with no AI link. Industrials go 8.8% → ~14%. This is
    the 7th briefing in a row to pick it, and it's still unexecuted. Fuel-price and cycle risk.

  4/5 · BBY (FTSE350, Industrials — Balfour Beatty, UK infrastructure) — MF ranked (no pass), P/E 17.6, EY 6.3%, ROIC 105% | MF#90
  Entry: 937.5p | Stop: 900.2p | Size: €1,000 (~90 sh) | RSI: 61.2 | MACD: Bullish
  Conviction: MF#90; Magic Formula ranked (no pass); corroborated by briefing-recommendation; bullish MACD; RSI healthy at 61.
  Portfolio fit: GBp, defensive UK infrastructure spend, clean uptrend above SMA50 (888.7p). It overlaps IAG's
    sector, so treat it as an either/or.

  4/5 · LOGN (STOXX600, Technology — Logitech) — MF ranked (no pass), P/E 19.2, EY 6.7%, ROIC 123% | MF#76
  Entry: 86.40 (CHF) | Stop: 82.33 | Size: €1,000 (~11 sh) | RSI: 60.3 | MACD: Bullish
  Conviction: MF#76; Magic Formula ranked (no pass); bullish MACD; RSI healthy at 60.
  Portfolio fit: new CHF currency exposure. Tech goes 21.1% → ~26%, slightly over the 25% guide, so size down to
    €750 or swap it for BBY. Turso labels this listing's currency "USD", but 86.40 matches the SIX CHF line, so
    verify the listing before ordering.

  Considered, not carried: SAGA (MF#3, but RSI 69.6 and P/E 42.8, so extended; watch for a pullback toward ~700p).
    MU (AI-semis, a Burry-red name, and we closed a short in it on 09-28). ACN (already held via Xetra CSA).
  All three carried picks are recorded as briefing-recommendation signals (Pending Trade Ideas panel).

FREE RIDE OPPORTUNITIES
  IQV: ✅ Already free-ridden — cumulative trim proceeds exceed the original 12-sh cost. All 3 remaining shares are at
    zero effective cost (~€688).
  KLR: ✅ Already free-ridden — all 10 remaining shares are at zero effective cost (~€391).
  SAP (+34.5%): selling 6 of 7 sh @ €183.92 covers the €956.90 cost and leaves only 1 free share, so it's below the
    2-share threshold. Not flagged.
  ACN (+29.0%): selling 5 of 6 sh @ €182.05 covers the €846.60 cost and leaves only 1 free share. Not flagged.
  No new positions meet the free ride criteria.

PORTFOLIO RISKS TO WATCH
  - Broad technical deterioration: 5 Exit signals (SFM, PRX, GSK, EDEN, FLUT) and 7 Watches, with 12 of 17 longs below
    SMA50. Three of the Exits sit under patience overrides that all expire around 10-15/10-16. That's a cluster of
    decisions landing in the same week.
  - LULU (largest, 9.3%, −16.3%): RSI 34.0, below SMA50. Only bullish MACD keeps it out of Exit, so one bearish cross
    triggers it.
  - Options book bleeding time value: ORCL put ~€467 (cost €982, ORCL $142.30, 18% above breakeven $108.62,
    expires 12-18), PLTR put ~€485 (cost €715), NBIS put ~€230 by hand-mark (cost €479). NBIS rallied to $242.81
    after the put opened. That's a Black-Scholes estimate at 80% vol and the range is €120–380 for 70–90% vol.
    Combined about −€944 vs cost.
  - ORCL short: up 3.1% Friday to $142.30, close to SMA50 ($143.59). A reclaim of SMA50 would turn the trend against
    the short. The ATR stop reference is $164.06.
  - Data integrity: the NBIS put has no mark in Turso, and Turso entry prices for KLR/IQV/PRX/WKL/FLUT are still
    pre-reconciliation. Until both are fixed, dashboard P&L won't match this briefing.

NEXT ACTIONS
  1. Mon 10-05: sell SFM in full (10 sh, ~$64.47 ≈ €572, net ≈ −€140) per the rule set on 10-01. The only reason to
     hold is an RSI reclaim above 40 at the open.
  2. Consider IAG at ~441p, stop 425.3p, ~190 sh (≈€1,000) from existing cash. It's the 7th consecutive pick, so
     approve or reject it in Pending Trade Ideas so it stops recurring.
  3. Fix the Turso NBIS put row (option_type=put, strike=90, expiry=2027-06-17, premium=5.38, contracts=1) so
     options_pricing.py can mark it. Correct the five stale entry prices while you're there.
  4. ADBE: reassess ~10-08 (RSI 41, below SMA50, MACD bearish).
  5. PRX/GSK/EDEN patience windows close ~10-15/10-16. Pre-decide the 50% trims now. GSK earnings 10-28,
     FLUT earnings 11-12.
════════════════════════════════════════════════════════
