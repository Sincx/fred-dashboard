════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-18
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Pipeline health: OK. All tracked tasks are healthy again; refresh-technicals, options-mark-to-market, crypto-prices
and magic-formula-screen have all caught up since the 10-17 warning. Turso `prices` now holds the Fri 10-16 closes,
so this run uses Turso directly, with no one-off fetch. ZOE now has a real 10-16 EUR quote (€70.28).
Data quality: check_data_quality.py was started this run but was still retrying at write time (it took ~17h on
10-06/07). The last completed pass (10-17) had 570 auto-recovered, 259 still failing and 253 needing manual review;
most were EU-universe technicals. Known failures relevant here: ACN, ZOE, EDEN and FLUT have no MF#, QXO-PB has no
fundamentals, and the NBIS put row is missing its strike and expiry.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€21,071 (estimated: long equity €17,270 + options ~€1,789 + ORCL short unrealized +€118 + cash €1,895)
                    +€112 vs 10-17's €20,959. It's the weekend, so there are no new closes. The gain comes from ZOE's
                    refreshed quote (+€59 vs its stale 10-09 price), the slightly stronger dollar (EUR/USD 1.1242 →
                    1.1192), and options now marked by options_pricing.py. No trades.
  Available Cap:    €1,895.31 cash (no new trades or cash entries in Turso since 10-01; checked this run)
  Best Performer:   IQV +62.8%
  Worst Performer:  SFM −18.7% (FLUT −17.9%, LULU −14.0%, PRX −12.6%)
  Largest Position: LULU (9.0% of long book; GSK 9.0%, SAP 8.1%, REL 8.0%)
  FX:               EUR/USD 1.1192 | GBP/EUR 1.1892 | All prices are Fri 10-16 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +62.8%     │ 54.8    │ ↑     │ Watch    │ Q3 late Oct (tbc) │ 602 │
  │ SAP      │ +45.7%     │ 66.0    │ ↑     │ Hold     │ Q3 ~10-21 (tbc)   │ 310 │
  │ ACN      │ +43.7%     │ 71.9    │ ↑     │ Hold     │ overbought        │ —   │
  │ KLR      │ +26.6%     │ 40.1    │ ↓     │ Watch    │ near-Exit; free   │ 53  │
  │ WKL      │ +14.7%     │ 77.7    │ ↑     │ Hold     │ overbought        │ 69  │
  │ EDEN     │ +13.3%     │ 64.3    │ ↑     │ Hold     │ Q3 rev ~10-21 tbc │ —   │
  │ REL      │ +12.7%     │ 78.2    │ ↑     │ Hold     │ overbought        │ 174 │
  │ ZOE      │ +11.2%     │ 73.1    │ ↑     │ Hold     │ overbought        │ —   │
  │ BIRK     │ +5.6%      │ 51.1    │ ↓     │ Watch    │ —                 │ 232 │
  │ ADBE     │ −1.9%      │ 50.1    │ ↓     │ Watch    │ —                 │ 18  │
  │ ERO      │ −1.9%      │ 42.9    │ ↓     │ Watch    │ MACD bearish      │ 80  │
  │ GSK      │ −4.0%      │ 56.0    │ ↑     │ Hold     │ Earnings 10-28    │ 31  │
  │ QXO-PB   │ −6.9%      │ 41.2    │ ↓     │ Watch    │ MACD bearish      │ —   │
  │ PRX      │ −12.6%     │ 49.9    │ ↓     │ Watch    │ reassess (ext.)   │ 539 │
  │ LULU     │ −14.0%     │ 46.0    │ ↓     │ Watch    │ reassess ~10-20   │ 23  │
  │ FLUT     │ −17.9%     │ 37.0    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ SFM      │ −18.7%     │ 41.7    │ ↓     │ Watch    │ Q3 late Oct (tbc) │ 128 │
  │ ORCL (S) │ +17.0%     │ 40.0    │ ↓     │ Hold     │ short working     │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses Turso entry prices. KLR/WKL entries in Turso (2,418p / €71.08) differ slightly from the reconciled
  real fills (2,400p / €70.88), so the reconciled P&L is ~+1pt higher for KLR and +0.3pt higher for WKL.
  MF# changed vs 10-17 because magic-formula-screen reran (e.g. GSK 35→31, IQV 661→602, ADBE 22→18). These are
  full-universe ranks (~1,350 tickers).
  ORCL (S): the script's mechanical "Exit" (RSI 40.0, below SMA50, MACD bearish) is a long-side rule. For a short,
  that setup is favourable, so it stays Hold.

  Signal changes vs 10-17: none on price, since there's no new session. ZOE moves from proxy TA to its own quote
  (RSI 73.1, above SMA50 €64.38) and joins the overbought cluster.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.0%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 21.5% | Healthcare (GSK, ZOE, IQV) 19.2% | Consumer (LULU, BIRK, SFM) 16.8% |
                   Info services (REL, WKL) 15.1% | Fintech EDEN 7.8% | Industrials (QXO-PB, KLR) 7.6% | Internet/SOTP PRX 6.2% |
                   Materials ERO 5.3% | iGaming FLUT 0.4%
                   The book is balanced, with no sector above 25%. There's still no energy or staples exposure. The
                   bearish overlays (ORCL short plus ORCL, PLTR and NBIS puts) are the only AI-infrastructure exposure.
  Currency split:  EUR 42.4% | USD 38.5% | GBp 19.1% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  No exit signals triggered today. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - REL (RSI 78.2), WKL (77.7), ZOE (73.1) and ACN (71.9) are all overbought together.
  - ACN has the largest gain (+43.7%). A 2-share trim at €202.70 grosses ~€123 of gain, leaving ~€94 after CGT (€26)
    and commission (~€3), and returns ~€405 cash. Optional, not recommended.
  - The REL, WKL and ZOE gains (+11–15%) are too small for a trim to be worth the tax and commission.
  - SFM: −18.7%, below SMA50 ($73.77), RSI 41.7. Keep the hard stop at $60.85. A full exit (≈€583 proceeds,
    realized loss ≈−€133, no CGT) remains Mike's call.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. PRX (RSI 49.9, MACD bullish) fails only because it's below SMA50 (€36.71). An add would trigger
  on a close above ~€36.75.

  ── NEW POSITIONS ──────────────────────────────────────
  MEGP: Enter at 121.4p (Fri close; holding above SMA50 119.9p) — Turso screen 5/5, MF#13, RSI 56 | Stop: 113.3p | Size: €1,000
  CF:   Enter on a close above $123.50 (SMA50 reclaim; last $120.85) — Turso screen 5/5, MF#22, RSI 53 | Stop: $115.25 | Size: €1,000
  MONY: limit 195p (last 201.8p, RSI 67) — Turso screen 5/5, MF#14 | Stop: 184.2p | Size: €750
  Combined €2,750 is more than the €1,895 cash, so at most two can fill unless something is sold first.
  MEGP + MONY (~€1,750) fits.
  MO (now 4/5, RSI 77.6) and EOG (4/5, RSI 71.3) remain active Pending Trade Ideas from earlier runs. Both are more
  extended, so their earlier limits ($72.00 / $152.50) still apply. Don't chase.

INVESTMENT OPPORTUNITIES
  5/5 · MEGP (FTSE350, Industrials — Me Group International) — Magic Formula pass, P/E 8.4, EY 16.8%, ROIC 27.8% | MF#13
  Entry: 121.4p (10-16 close) | Stop: 113.3p (1.5×ATR 5.4p) | Size: €1,000 | RSI: 56.2 | MACD: Bullish
  Conviction: MF#13; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 56.
  Portfolio fit: GBp exposure in an Industrials sleeve that's only 7.6% of the book, with no AI or software link.
    Price is just above SMA50 (119.9p) and SMA200 (121.1p), so this is the cleanest entry on the screen. It was
    already an active Pending Trade Idea, so no new card was created.

  5/5 · CF (S&P 500, Materials — CF Industries) — Magic Formula pass, P/E 8.6, EY 16.1%, ROIC 24.5%, yield 2.1% | MF#22
  Entry: close above $123.50 (last $120.85, SMA50 $123.31) | Stop: $115.25 (1.5×ATR $3.74 below last) | Size: €1,000 | RSI: 52.5 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; bullish MACD; RSI healthy at 53.
  Portfolio fit: a low-cost nitrogen producer, cyclical but not tied to the AI or consumer names. Materials would go
    from 5.3% to ~11% alongside ERO. Price is above MA20 and SMA200 but just under SMA50, so wait for the reclaim.
    New Pending Trade Idea card recorded (briefing-rec-CF-US-2026-10-18).

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#14
  Entry: pullback to ~195p, near SMA50 193.5p (last 201.8p) | Stop: 184.2p | Size: €750 starter | RSI: 67.0 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD.
  Portfolio fit: a new sector for the book, with GBp exposure and no AI link. It's a starter size because RSI is
    above 65. It was already an active Pending Trade Idea, so no new card was created.

  Also considered: APA (5/5, RSI 69.7, energy; EOG is already pending), TMV (5/5, but Tech/Software is already 21.5%),
    TRN (5/5, RSI 62.4, UK consumer; adds to a consumer sleeve already at 16.8%), AUTO (4/5, RSI 73.8), SAGA (4/5,
    no MF pass).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €199.22 → ~€996 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€398
  After CGT (€65.65 on €312.60 gain) and commission (~€3.25), net cash is ~€927, ~€30 short of full cost recovery.
  Status: Monitor. RSI 66.0 is above 65 and approaching overbought, and Q3 results land ~10-21 (tbc). Consider
    executing into strength on an RSI push above 70.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€715).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€364).
  ACN: +43.7% but doesn't qualify. Covering €846.60 at €202.70 needs 5 of 6 shares, leaving only 1 free share.

PORTFOLIO RISKS TO WATCH
  - Overbought cluster: REL 78.2, WKL 77.7, ZOE 73.1, ACN 71.9 and SAP 66.0 make up ~36% of the long book, and all
    are extended. A rotation out of quality and defensives would hit several at once.
  - Losers still below SMA50: SFM, FLUT, LULU, PRX, ERO, QXO-PB and BIRK (~34% of the long book). None has reclaimed
    its 50-day average.
  - KLR sits at RSI 40.08, 0.08 above a mechanical Exit (below SMA50, MACD bearish). It's free-ridden, so only
    profit is at risk.
  - Bearish overlay (~€1,907: puts ~€1,789 + ORCL short +€118) is exposed to an AI-infra bounce. ORCL RSI 40 and
    NBIS (−21% last week) are oversold. The NBIS put (~€598) is still a hand estimate at an assumed 80% vol, because
    its Turso row lacks strike and expiry.
  - Catalyst-heavy fortnight: SAP and EDEN ~10-21, IQV and SFM late Oct, GSK 10-28.

NEXT ACTIONS
  1. Optional entries, max two given €1,895 cash: MEGP at ~121p (stop 113.3p, €1,000), MONY limit 195p (stop 184.2p,
     €750), CF on a close above $123.50 (stop $115.25, €1,000). Approve or reject in the Pending Trade Ideas panel.
  2. SAP Q3 ~10-21 (tbc): consider the 5-share free-ride sale into strength if RSI pushes above 70.
  3. LULU patience window ends ~10-20 ($97.10, Watch). Keep the trim-9-sh trigger at a close below $88.54; decide
     after Monday's close whether to extend.
  4. KLR: if Monday closes with RSI below 40, it flips to a mechanical Exit. It's free-ridden, so selling all 10 sh
     (~€364) is a profit-taking decision, not a risk one.
  5. GSK earnings 10-28. Keep the stop near 1,766p (1.5×ATR below the 1,862.5p close).
  6. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
