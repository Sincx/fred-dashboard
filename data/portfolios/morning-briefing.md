════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-07
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€19,446 (estimated; long equity €16,446 + options mtm ~€1,061 + ORCL short unrealized +€44 + cash €1,895)
  Available Cap:    €1,895.31 cash (~€2,477 if SFM is exited)
  Best Performer:   IQV +58.6%
  Worst Performer:  SFM −18.7% (FLUT −17.1%, LULU −17.0%, PRX −14.4%)
  Largest Position: LULU (9.1% of long book; GSK 8.9%, SAP 8.0%)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +58.61%    │ 47.6    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 661 │
  │ SAP      │ +37.44%    │ 57.3    │ ↑     │ 👀 Watch │ MACD bearish      │ 344 │
  │ KLR      │ +36.67%    │ 58.8    │ ↑     │ Hold     │ ✅ free-ridden    │ 58  │
  │ ACN      │ +22.82%    │ 56.7    │ ↑     │ Hold     │ —                 │ —   │
  │ ERO      │ +8.96%     │ 57.1    │ ↑     │ Hold     │ MACD bullish      │ 86  │
  │ BIRK     │ +6.02%     │ 54.3    │ ↓     │ 👀 Watch │ just < SMA50      │ 255 │
  │ EDEN     │ +4.60%     │ 46.9    │ ↓     │ 👀 Watch │ patience ~10-15   │ —   │
  │ ZOE      │ +0.82%     │ 52.6    │ ↓     │ 👀 Watch │ MACD bullish      │ —   │
  │ QXO-PB   │ +0.72%*    │ 33.3*   │ ↓     │ ⚠ Exit?  │ $35.30 unverified │ —   │
  │ WKL      │ +0.48%     │ 60.8    │ ↑     │ Hold     │ above SMA50       │ 73  │
  │ REL      │ −1.91%     │ 50.4    │ ↓     │ 👀 Watch │ MACD bullish      │ 194 │
  │ ADBE     │ −4.69%     │ 41.6    │ ↓     │ 👀 Watch │ reassess 10-08    │ 22  │
  │ GSK      │ −9.00%     │ 34.7    │ ↓     │ 🔴 Exit  │ ER 10-28          │ 35  │
  │ PRX      │ −14.37%    │ 42.9    │ ↓     │ 👀 Watch │ patience ~10-16   │ 591 │
  │ LULU     │ −17.04%    │ 33.6    │ ↓     │ 🔴 Exit  │ reassess ~10-20   │ 24  │
  │ FLUT     │ −17.13%    │ 31.0    │ ↓     │ 🔴 Exit  │ 1 sh; ER 11-12    │ —   │
  │ SFM      │ −18.70%    │ 36.5    │ ↓     │ 👀 Watch │ exit rule stands  │ 142 │
  │ ORCL(sh) │ +6.33%     │ 51.1    │ ↑     │ 👀 Watch │ just > SMA50      │ 601 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  *QXO-PB: P&L uses Tuesday's verified close of $38.575 (massive). Turso's only newer row is $35.30 dated 10-07, and
  RSI/Exit are computed from it. Massive still serves Tuesday as the latest bar at 23:40 CEST, so Wednesday's close
  can't be confirmed tonight. Turso also has no 10-06 row for QXO-PB, which makes the 10-07 row more suspect.
  At $35.30 the position would be −7.8% (≈ €946, −€87 vs the verified figure).
  Short P&L% is from the short's side (positive = price below entry).

  Data freshness (Turso, same as the 18:30 revision):
    US: Tuesday 10-06 closes. Wednesday's session isn't in until refresh-technicals runs at 07:17.
    EU (SAP, EDEN, PRX, WKL, ZOE): Wednesday 10-07 closes.
    UK: KLR/REL still 10-05, GSK 10-06. The UK 10-06/10-07 bars for KLR/REL are still missing.
    FX: EUR/USD 1.1201, GBP/EUR 1.1796.
  Since the 18:30 revision: no new trades or cash entries in Turso (latest trade 10-01 NBIS put; latest cash
  10-01). Only FX moved (−€3).
  Pipeline health: OK, all tracked tasks healthy.
  Data quality: tonight's check_data_quality.py retry pass is still running (it took ~17h last time). The known
  failures carried from today are all MF#-only, so prices are unaffected:
    • NBIS option_mark: 10+ failures (Turso row missing strike/expiry/type). Hand-marked below.
    • ACN EU and ZOE EU fundamentals: "no sa_prefix".
    • QXO-PB fundamentals: "no data from any source".
    All three are NEEDS MANUAL REVIEW.

PORTFOLIO SHAPE
  Concentration:   OK — largest single position LULU 9.1%; nothing ≥ 25%
  Sector spread:   Info services/Fintech 21.4% (REL, WKL, EDEN) | Tech/Software 20.8% (SAP, ACN, ADBE) |
                   Healthcare 18.9% (GSK, ZOE, IQV) | Consumer 17.2% (LULU, BIRK, SFM) | Industrials 8.6% (QXO-PB, KLR) |
                   Internet/SOTP 6.4% (PRX) | Materials 6.2% (ERO) | Betting 0.4% (FLUT)
                   Bearish overlay: ORCL short 5 sh + ORCL/PLTR/NBIS long puts (~€1,061 mtm)
  Currency split:  USD 40.9% | EUR 40.6% | GBp 18.5%
  Balance: even. The weakness is concentrated in US consumer (LULU, SFM) and GSK. The European book is steady.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (10 sh). This is still the rule set on 10-01: exit unless RSI is above 40. RSI is 36.5 and price is
    below SMA50 ($76.92). MACD turned bullish, which eased the mechanical signal to Watch, but the deadline passed on
    10-05. Alternative: a hard stop at $61.55 (price − 1.5×ATR).
  Expected proceeds: ~$651.70 ≈ €582 | Gross P&L −$149.90 ≈ −€133.8 | CGT €0 (loss) | Commission ~€0.89 |
    Net ≈ −€134.7

  LULU: Exit (RSI 33.6, below SMA50 $111.03, MACD bearish). The patience override stands (MF#24, thesis intact).
    Reassess by ~10-20. Trim 50% (9 sh) on a close below $88.54.
    A 9-sh trim at $93.61 ≈ $842 ≈ €752 | gross ≈ −€155 | CGT €0 | commission ~€0.89.
  QXO-PB: provisional Exit. Don't act on the unverified $35.30. Once Wednesday's real close is in at 07:17, check it.
    If ~$35 is confirmed, check for news before acting (a QXO raise or deal, or the preferred's conversion terms).
    QXO common was +1.6% on Tuesday, so no stress is visible in the parent yet.
  GSK: Exit (RSI 34.7, 1,765.5p). The patience override stands (MF#35, earnings 10-28). Reassess ~10-15, max trim 50%.
  FLUT: the Exit persists (RSI 31.0). It's 1 share and stays free-to-ride; commission would be ~1.3% of the sale.
  No Trim signals (nothing has RSI > 70 at ≥ 20% weight).
  Nothing was synced to Turso, since no trade was executed. If SFM was sold, record it with
    `trading_portfolio_sync.py exit --ticker SFM --exchange US --exit-price <fill>`.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. IQV has RSI 47.6 and is above SMA50, but MACD is bearish. REL and PRX have bullish MACD but are
    below SMA50.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG: Enter at ~434p — 5/5, MF#11 pass, above SMA50, RSI 52, MACD bullish.
  Stop: 418p | Size: €1,000 (~195 sh)
  EOG: Enter at ~$144.28 — 5/5, MF#50 pass, first energy exposure.
  Stop: $139.60 | Size: €1,000 (~7 sh)

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350, Industrials — airlines) — Magic Formula pass, P/E 7.8, EY 18.5%, ROIC 27.5% | MF#11
  Entry: 434.0p (10-05) | Stop: 418.0p | Size: €1,000 | RSI: 51.8 | MACD: Bullish
  Conviction: MF#11; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 52.
  Portfolio fit: adds GBp and cyclical exposure with no AI link. Industrials would go from 8.6% to ~14%. The EU-listed
    line shows 437.8 (10-07, RSI 54.2), so it's holding up. It's still pending, so approve or reject it.

  5/5 · EOG (S&P 500, Energy — EOG Resources) — Magic Formula pass, P/E 10.8, EY 11.8%, ROIC 19.8% | MF#50
  Entry: $144.28 (10-06) | Stop: $139.60 | Size: €1,000 (~7 sh) | RSI: 52.1 | MACD: Bullish
  Conviction: MF#50; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 52.
  Portfolio fit: the portfolio has 0% energy, so this diversifies away from the software/consumer drift. It's USD and
    unrelated to AI.

  5/5 · TMV (STOXX600, Technology — TeamViewer) — Magic Formula pass, P/E 7.4, EY 13.8%, ROIC 15.7% | MF#64
  Entry: €6.66 (10-07) | Stop: €6.30 | Size: €750 (~112 sh) | RSI: 56.8 | MACD: Bullish
  Conviction: MF#64; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 57.
  Portfolio fit: deep-value EUR software. Tech would go from 20.8% to ~25%, so it's starter size only. Verify the
    Xetra EUR listing before ordering (Turso labels the currency USD).

  Also considered: IAG EU (duplicate listing), ACN US (already held via Xetra), MO and APA (MACD bearish), MOON/COST/HAS (4/5).
  Pending Trade Ideas: IAG deduped (still active). EOG and TMV re-recorded under today's signal id, which is idempotent.

FREE RIDE OPPORTUNITIES
  IQV: ✅ Already free-ridden — 3 shares at zero effective cost (~€696).
  KLR: ✅ Already free-ridden — 10 shares at zero effective cost (~€387).
  SAP (+37.4%): selling 6 of 7 sh @ €187.88 to cover cost leaves 1 free share, below the 2-share threshold. Not flagged.
  No new positions meet the free ride criteria.

PORTFOLIO RISKS TO WATCH
  - US consumer weakness: LULU (Exit) and SFM (−18.7%) together are €2,086 (12.7% of the long book).
  - QXO-PB: Turso has an unverified −8.5% print dated 10-07. If it's real, it's a thesis question for a preferred.
  - ORCL short: price is just above SMA50 ($144.77 vs $144.64), so the trend is turning against the short. ATR stop
    reference is ~$163.7.
  - Options are still decaying: ORCL put ~€395, PLTR put ~€438 (options_pricing.py), NBIS put ~€228 (hand-mark, NBIS
    $249.87). Together ≈ €1,061 vs €2,176 cost.
  - Data lag: UK KLR/REL are two sessions stale, and US is one session behind at briefing time (normal for the 23:30
    slot).

NEXT ACTIONS
  1. SFM: exit 10 sh (≈ €582, net ≈ −€135), or set a hard stop at $61.55. Record any fill in Turso.
  2. QXO-PB: check Wednesday's real close after 07:17. If ~$35, look for news before deciding.
  3. LULU: trim 9 sh on a close below $88.54, and reassess by ~10-20. ADBE: reassess 10-08 (sits on its $238.45 stop ref).
  4. Decide on IAG, EOG and TMV in Pending Trade Ideas.
  5. Fix the Turso NBIS put row (strike/expiry/type, direction='short'). GSK patience ~10-15 / earnings 10-28,
     FLUT earnings 11-12.
════════════════════════════════════════════════════════
