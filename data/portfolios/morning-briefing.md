════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-08
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€19,322 (estimated; long equity €16,314 + options mtm ~€1,063 + ORCL short unrealized +€49 + cash €1,895)
  Available Cap:    €1,895.31 cash (~€3,446 if SFM and QXO-PB are exited)
  Best Performer:   IQV +57.5%
  Worst Performer:  SFM −18.6% (LULU −18.6%, FLUT −17.6%, PRX −14.4%)
  Largest Position: GSK (9.1% of long book; LULU 9.0%, SAP 8.1%)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +57.47%    │ 45.9    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 661 │
  │ SAP      │ +37.44%    │ 57.3    │ ↑     │ 👀 Watch │ MACD bearish      │ 344 │
  │ KLR      │ +35.75%    │ 56.4    │ ↑     │ Hold     │ ✅ free-ridden    │ 58  │
  │ ACN      │ +24.42%    │ 58.1    │ ↑     │ Hold     │ —                 │ —   │
  │ ERO      │ +5.67%     │ 52.5    │ ↑     │ Hold     │ MACD bullish      │ 86  │
  │ EDEN     │ +4.60%     │ 46.9    │ ↓     │ 👀 Watch │ patience ~10-15   │ —   │
  │ BIRK     │ +3.43%     │ 49.2    │ ↓     │ 👀 Watch │ MACD bullish      │ 255 │
  │ ZOE      │ +0.82%     │ 52.6    │ ↓     │ 👀 Watch │ just < SMA50      │ —   │
  │ WKL      │ +0.48%     │ 60.8    │ ↑     │ Hold     │ above SMA50       │ 73  │
  │ REL      │ −0.56%     │ 54.3    │ ↓     │ 👀 Watch │ UK bar 10-06      │ 194 │
  │ QXO-PB   │ −5.35%     │ 35.7    │ ↓     │ 🔴 Exit  │ −6% confirmed     │ —   │
  │ ADBE     │ −6.84%     │ 38.0    │ ↓     │ 🔴 Exit  │ stop ref broken   │ 22  │
  │ GSK      │ −7.71%     │ 40.6    │ ↓     │ 👀 Watch │ ER 10-28          │ 35  │
  │ PRX      │ −14.37%    │ 42.9    │ ↓     │ 👀 Watch │ patience ~10-16   │ 591 │
  │ FLUT     │ −17.57%    │ 30.6    │ ↓     │ 🔴 Exit  │ 1 sh; ER 11-12    │ —   │
  │ LULU     │ −18.57%    │ 31.5    │ ↓     │ 🔴 Exit  │ reassess ~10-20   │ 24  │
  │ SFM      │ −18.59%    │ 36.8    │ ↓     │ 👀 Watch │ exit rule stands  │ 142 │
  │ ORCL(sh) │ +7.11%     │ 49.7    │ ↓     │ 👀 Watch │ back < SMA50      │ 601 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  Short P&L% is from the short's side (positive = price below entry). P&L% uses the wiki's reconciled entry prices
  (Turso still holds the pre-reconciliation entries for IQV/KLR/PRX/WKL/LULU/ERO, so its own pl_pct differs slightly).

  Data freshness (Turso):
    US: Wednesday 10-07 closes (now in). Thursday's session lands at the 07:17 refresh.
    EU (SAP, EDEN, PRX, WKL, ZOE, ACN): Wednesday 10-07 closes.
    UK: GSK 10-07. KLR and REL are still on 10-06 (Turso's EU-listed REL row shows 2,614p for 10-07, so the UK bar
    is missing, not the price). FX: EUR/USD 1.1220, GBP/EUR 1.1793.
  Since the 10-07 23:50 run: no new trades or cash entries in Turso (latest trade 10-01 NBIS put; latest cash 10-01).
  QXO-PB resolved: Wednesday's close was $36.25 (−6.0%, low $35.10), confirmed on massive. Turso's earlier $35.30 was
    a mid-session print that has since been corrected. QXO common fell 6.6% to $11.31 on about twice its normal
    volume. The massive news feed has nothing new (the latest item is from June), so the cause is unknown.
  Pipeline health: OK, all tracked tasks healthy.
  Data quality (check_data_quality.py finished after the briefing was first pushed): 686 AUTO-RECOVERED. This
    includes the technicals for every held UK/EU name (KLR, REL, GSK, SAP, EDEN, WKL, PRX, ZOE) and for IAG/TMV, so
    the missing KLR/REL 10-07 UK bars may now be in Turso. The prices above weren't re-run. 260 rows are STILL
    FAILING and 252 are NEEDS MANUAL REVIEW, mostly UK/EU tickers where "all sources failed". That likely points to
    a ticker-format issue in the universe, not missing prices. The only rows relevant to this portfolio are the
    known four, which affect MF# and the NBIS put mark, not prices:
    • NBIS option_mark: 16 consecutive failures. The Turso row is missing strike/expiry/type, so it's hand-marked below.
    • ACN EU and ZOE EU fundamentals: "no sa_prefix".
    • QXO-PB fundamentals: "no data from any source".

PORTFOLIO SHAPE
  Concentration:   OK — largest single position GSK 9.1%; nothing ≥ 25%
  Sector spread:   Info services/Fintech 21.6% (REL, WKL, EDEN) | Tech/Software 20.9% (SAP, ACN, ADBE) |
                   Healthcare 19.2% (GSK, ZOE, IQV) | Consumer 17.1% (LULU, BIRK, SFM) | Industrials 8.3% (QXO-PB, KLR) |
                   Internet/SOTP 6.5% (PRX) | Materials 6.0% (ERO) | Betting 0.4% (FLUT)
                   Bearish overlay: ORCL short 5 sh + ORCL/PLTR/NBIS long puts (~€1,063 mtm)
  Currency split:  USD 40.1% | EUR 41.0% | GBp 18.8%
  Balance: still even across sectors. Today's damage was all in the US book: QXO-PB, ADBE and LULU fell on
    Wednesday, while the European positions held up.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  QXO-PB: Full Exit (30 sh). There's now a confirmed mechanical Exit: RSI 35.7, price $36.25 below SMA50 $40.99, and
    MACD bearish. The preferred is trading in line with the common (−6% vs −6.6%), so it isn't protecting the
    downside the way a preferred is supposed to. No documented patience thesis covers it.
    Alternative: a hard stop at $35.10 (Wednesday's low).
  Expected proceeds: ~$1,087.50 ≈ €969 | Gross P&L −$61.50 ≈ −€54.8 | CGT €0 (loss) | Commission ~€0.89 |
    Net ≈ −€55.7

  ADBE: Trim 50% (3 of 5 sh). The 10-08 reassessment date has arrived. Price is $232.77, which is through the
    $238 stop reference, and the signal has moved from Watch to a mechanical Exit (RSI 38.0, below SMA50 $258.44,
    MACD bearish). MF#22 means the value case is intact, so the patience-override cap applies (max 50%). Put a stop
    on the remaining 2 sh at $220.97 (price − 1.5×ATR).
  Expected proceeds: ~$698 ≈ €622 | Gross P&L −$51.24 ≈ −€45.7 | CGT €0 | Commission ~€0.89 | Net ≈ −€46.6

  SFM: Full Exit (10 sh). Still the rule set on 10-01: exit unless RSI is above 40. RSI is 36.8 and price is $65.26,
    below SMA50 $76.67. The mechanical signal is only Watch because MACD is bullish.
    Alternative: a hard stop at $61.74.
  Expected proceeds: ~$652.60 ≈ €582 | Gross ≈ −€132.8 | CGT €0 | Commission ~€0.89 | Net ≈ −€133.7

  LULU: Exit signal (RSI 31.5, $91.88). The patience override stands (MF#24) until the ~10-20 reassessment.
    Trim 9 sh on a close below $88.54. A 9-sh trim at today's price would bring ≈ €737, gross ≈ −€168.
  GSK: Exit cleared to Watch (RSI 40.6, 1,790.5p, +1.4% on Wednesday). Hold until the ~10-15 reassessment;
    earnings are 10-28.
  FLUT: Exit persists (RSI 30.6). It's 1 share and stays free-to-ride; commission would be ~1.3% of the sale.
  No Trim signals (nothing has RSI > 70 at ≥ 20% weight).
  Nothing was synced to Turso, because this task doesn't execute trades. Record any fills with
    `trading_portfolio_sync.py exit|trim ...`.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. IQV (RSI 45.9, above SMA50) is the closest, but MACD is still bearish.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG: Enter at ~439.7p — 5/5, MF#11 pass, above SMA50, RSI 55, MACD bullish.
  Stop: 418p | Size: €1,000 (~193 sh)
  EOG: Enter at ~$144.21 — 5/5, MF#50 pass, first energy exposure.
  Stop: $139.60 | Size: €1,000 (~7 sh)
  If QXO-PB and SFM are exited, cash would be ~€3,446, enough to fund both and keep a reserve.

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350, Industrials — airlines) — Magic Formula pass, P/E 7.8, EY 18.5%, ROIC 27.5% | MF#11
  Entry: 439.7p (10-06) | Stop: 418.0p | Size: €1,000 | RSI: 55.3 | MACD: Bullish
  Conviction: MF#11; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 55.
  Portfolio fit: adds GBp and cyclical exposure with no AI link. If QXO-PB is exited, Industrials falls to ~2%, so
    IAG would replace that exposure rather than add to it.

  5/5 · EOG (S&P 500, Energy — EOG Resources) — Magic Formula pass, P/E 10.8, EY 11.8%, ROIC 19.8% | MF#50
  Entry: $144.21 (10-07) | Stop: $139.60 | Size: €1,000 (~7 sh) | RSI: 51.9 | MACD: Bullish
  Conviction: MF#50; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 52.
  Portfolio fit: the portfolio has 0% energy, and this is USD exposure unrelated to AI. Dividend yield 3.0%.

  5/5 · TMV (STOXX600, Technology — TeamViewer) — Magic Formula pass, P/E 7.4, EY 13.8%, ROIC 15.7% | MF#64
  Entry: €6.66 (10-07) | Stop: €6.30 | Size: €750 (~112 sh) | RSI: 56.8 | MACD: Bullish
  Conviction: MF#64; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 57.
  Portfolio fit: starter size only, because Tech/Software is already 20.9%. The ADBE trim would offset some of that.
    Verify the Xetra EUR listing before ordering (Turso labels the currency USD).

  Also considered: IAG EU (duplicate listing), ACN US (already held via Xetra), MO (MACD bearish), SAGA/MOON/HAS/LOGN (4/5).
  Pending Trade Ideas: IAG, EOG and TMV are all still active and were deduped tonight (no new cards). Stops are
    carried from 10-07, because Turso's ATR query errored tonight.

FREE RIDE OPPORTUNITIES
  IQV: ✅ Already free-ridden — 3 shares at zero effective cost (~€690).
  KLR: ✅ Already free-ridden — 10 shares at zero effective cost (~€384).
  SAP (+37.4%): selling 6 of 7 sh @ €187.88 to cover the €956.90 cost leaves 1 free share, below the 2-share
    threshold. Not flagged.
  ACN (+24.4%): just under the 25% threshold. Selling 5 of 6 sh would leave 1 free share. Not flagged.
  No positions newly meet the free ride criteria.

PORTFOLIO RISKS TO WATCH
  - US drawdown cluster: LULU, SFM, ADBE and QXO-PB are all down 5–19% and three of them have Exit signals. Together
    they're €4,062, or 24.9% of the long book.
  - QXO-PB/QXO: a −6% day on heavy volume with no identified news. It could be deal, financing or dilution related,
    so check QXO's filings or press before Thursday's open.
  - ORCL short: price is back below SMA50 ($143.56 vs $145.11) and the short is +7.1%. Hold. ATR stop ref ~$163.1.
  - Options: ORCL put ~€408 and PLTR put ~€414 (options_pricing.py), NBIS put ~€241 (hand-mark at 80% vol,
    NBIS $237.15; range €128–389 for 70–90% vol). Together ≈ €1,063 vs €2,176 cost.
  - Data lag: KLR/REL UK bars are one session behind. US is one session behind at briefing time, which is normal for
    the 23:30 slot.

NEXT ACTIONS
  1. QXO-PB: exit 30 sh (≈ €969, net ≈ −€56), or set a stop at $35.10. Check QXO news first.
  2. ADBE: trim 3 of 5 sh (≈ €622), with a stop at $220.97 on the rest. SFM: exit 10 sh (≈ €582), or stop at $61.74.
     Record any fills in Turso.
  3. LULU: trim 9 sh on a close below $88.54, and reassess by ~10-20. GSK/EDEN reassess ~10-15, PRX ~10-16.
  4. Decide on IAG, EOG and TMV in Pending Trade Ideas. Cash freed from step 1/2 could fund IAG and EOG.
  5. Fix the Turso NBIS put row (strike/expiry/type, direction='short'). GSK earnings 10-28, FLUT earnings 11-12.
════════════════════════════════════════════════════════
