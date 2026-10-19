════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-19
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Pipeline health: OK, all tracked tasks healthy. This is Monday night's 23:30 slot. Turso still holds the Fri 10-16
closes for every position, because Monday's session only lands at tomorrow's 07:17 refresh-technicals run. That's the
normal timing gap, not a failure. massive's /prev endpoint also still serves Friday's bar (LULU $97.10), so no fresher
price was available. The only inputs that changed since the 10-18 run are FX and options time decay.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Data quality (check_data_quality.py, finished after the first write): 2 auto-recovered and 234 still failing. Most
failures are again EU/UK-universe technicals and fundamentals. None of the failures touch today's candidates (MEGP,
CF, MONY). The failures relevant to holdings are all known, repeated ones:
  - ACN and ZOE fundamentals: no sa_prefix, 10 consecutive failures (hence no MF#).
  - QXO-PB fundamentals: no data from any source, 10 consecutive failures.
  - NBIS option_mark: missing strike, expiry and option type, 36 consecutive failures. This needs a manual Turso fix.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€21,033 (estimated: long equity €17,248 + options ~€1,773 + ORCL short unrealized +€117 + cash €1,895)
                    −€38 vs 10-18's €21,071. Of that, ~−€22 comes from the stronger euro (EUR/USD 1.1192 → 1.1215,
                    GBP/EUR 1.1892 → 1.1862) and ~−€16 from options theta (ORCL put $8.18 → $8.09, PLTR put $5.14 → $5.10).
                    No price change and no trades.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +62.8%
  Worst Performer:  SFM −18.7% (FLUT −17.9%, LULU −14.0%, PRX −12.6%)
  Largest Position: LULU (9.0% of long book; GSK 9.0%, SAP 8.1%, REL 8.0%)
  FX:               EUR/USD 1.1215 | GBP/EUR 1.1862 | All prices are Fri 10-16 closes

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
  │ LULU     │ −14.0%     │ 46.0    │ ↓     │ Watch    │ reassess 10-20    │ 23  │
  │ FLUT     │ −17.9%     │ 37.0    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ SFM      │ −18.7%     │ 41.7    │ ↓     │ Watch    │ Q3 late Oct (tbc) │ 128 │
  │ ORCL (S) │ +17.0%     │ 40.0    │ ↓     │ Hold     │ short working     │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses Turso entry prices. KLR/WKL entries in Turso (2,418p / €71.08) differ slightly from the reconciled
  real fills (2,400p / €70.88), so the reconciled P&L is ~+1pt higher for KLR and +0.3pt higher for WKL.
  MF# is unchanged vs 10-18 (full-universe ranks, ~1,350 tickers).
  ORCL (S): the script's mechanical "Exit" (RSI 40.0, below SMA50, MACD bearish) is a long-side rule. For a short,
  that setup is favourable, so it stays Hold.
  Signal changes vs 10-18: none, since there's no new session in Turso.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.0%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 21.5% | Healthcare (GSK, ZOE, IQV) 19.2% | Consumer (LULU, BIRK, SFM) 16.8% |
                   Info services (REL, WKL) 15.1% | Fintech EDEN 7.8% | Industrials (QXO-PB, KLR) 7.6% | Internet/SOTP PRX 6.3% |
                   Materials ERO 5.3% | iGaming FLUT 0.4%
                   The book is balanced, with no sector above 25%. There's still no energy or staples exposure. The
                   bearish overlays (ORCL short plus ORCL, PLTR and NBIS puts) are the only AI-infrastructure exposure.
  Currency split:  EUR 42.4% | USD 38.5% | GBp 19.1% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  No exit signals triggered today. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - REL (RSI 78.2), WKL (77.7), ZOE (73.1) and ACN (71.9) are all still overbought together.
  - ACN: a 2-share trim at €202.70 grosses ~€123 of gain, leaving ~€94 after CGT (€26) and commission (~€3), and
    returns ~€405 cash. Optional, not recommended.
  - SFM: −18.7%, below SMA50 ($73.77), RSI 41.7. Keep the hard stop at $60.85. A full exit (≈€581 proceeds,
    realized loss ≈−€134, no CGT) remains Mike's call.
  - LULU: the patience window ends 10-20. Monday's close isn't in Turso yet. The standing rule is to trim 50%
    (9 sh) on a close below $88.54; at Friday's $97.10 it's 9.7% above that trigger.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. PRX (RSI 49.9, MACD bullish) fails only because it's below SMA50 (€36.71). An add would trigger
  on a close above ~€36.75.

  ── NEW POSITIONS ──────────────────────────────────────
  MEGP: Enter at 121.4p (Fri close; holding above SMA50 119.9p) — Turso screen 5/5, MF#13, RSI 56 | Stop: 113.3p | Size: €1,000
  CF:   Enter on a close above $123.50 (SMA50 reclaim; last $120.85) — Turso screen 5/5, MF#22, RSI 53 | Stop: $115.25 | Size: €1,000
  MONY: limit 195p (last 201.8p, RSI 67) — Turso screen 5/5, MF#14 | Stop: 184.2p | Size: €750
  Combined €2,750 is more than the €1,895 cash, so at most two can fill unless something is sold first.
  MEGP + MONY (~€1,750) fits. All three are already active Pending Trade Ideas, so no new cards were created.

INVESTMENT OPPORTUNITIES
  5/5 · MEGP (FTSE350, Industrials — Me Group International) — Magic Formula pass, P/E 8.4, EY 16.8%, ROIC 27.8% | MF#13
  Entry: 121.4p (10-16 close) | Stop: 113.3p (1.5×ATR 5.4p) | Size: €1,000 | RSI: 56.2 | MACD: Bullish
  Conviction: MF#13; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 56.
  Portfolio fit: GBp exposure in an Industrials sleeve that's only 7.6% of the book, with no AI or software link.
    It's the cleanest entry on the screen, just above SMA50 and SMA200.

  5/5 · CF (S&P 500, Materials — CF Industries) — Magic Formula pass, P/E 8.6, EY 16.1%, ROIC 24.5%, yield 2.1% | MF#22
  Entry: close above $123.50 (last $120.85, SMA50 $123.31) | Stop: $115.25 | Size: €1,000 | RSI: 52.5 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 53.
  Portfolio fit: a cyclical nitrogen producer, uncorrelated with the AI and consumer names. Materials would go from
    5.3% to ~11% alongside ERO. Wait for the SMA50 reclaim.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#14
  Entry: pullback to ~195p, near SMA50 193.5p (last 201.8p) | Stop: 184.2p | Size: €750 starter | RSI: 67.0 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD.
  Portfolio fit: a new sector for the book, with GBp exposure. It's a starter size because RSI is above 65.

  Also considered: APA (5/5, RSI 69.7, energy; EOG is already pending), TMV (5/5, but Tech/Software is already 21.5%),
    TRN (5/5, UK consumer, adds to a 16.8% consumer sleeve), MO (4/5, RSI 77.6), AUTO (4/5, RSI 73.8), EOG (4/5,
    RSI 71.3), SAGA (4/5, no MF pass). MO and EOG remain active Pending Trade Ideas at their earlier limits
    ($72.00 / $152.50).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €199.22 → ~€996 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€398
  After CGT (€65.65 on €312.60 gain) and commission (~€3.25), net cash is ~€927, ~€30 short of full cost recovery.
  Status: Monitor. RSI 66.0 is approaching overbought, and Q3 lands ~10-21 (tbc). Consider executing into
    strength if RSI pushes above 70.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€714).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€363).
  ACN: +43.7% but doesn't qualify. Covering €846.60 at €202.70 needs 5 of 6 shares, leaving only 1 free share.

PORTFOLIO RISKS TO WATCH
  - Overbought cluster: REL 78.2, WKL 77.7, ZOE 73.1, ACN 71.9 and SAP 66.0 make up ~36% of the long book. A
    rotation out of quality and defensives would hit several at once.
  - Losers still below SMA50: SFM, FLUT, LULU, PRX, ERO, QXO-PB and BIRK (~34% of the long book).
  - KLR sits at RSI 40.08, 0.08 above a mechanical Exit. It's free-ridden, so only profit is at risk.
  - The bearish overlay (~€1,890: puts ~€1,773 + ORCL short +€117) is exposed to an AI-infra bounce, and it's
    losing ~€16 a day to theta. The NBIS put (~€597) is still a hand estimate at 80% vol, because its Turso row
    lacks strike and expiry.
  - Catalyst-heavy fortnight: SAP and EDEN ~10-21, IQV and SFM late Oct, GSK 10-28.
  - Every figure above is a Friday close. Monday's moves will only show in tomorrow night's briefing.

NEXT ACTIONS
  1. LULU reassessment is due 10-20. Check Monday's and Tuesday's closes against the $88.54 trim trigger, and
     decide whether to extend the patience window or cut 9 sh.
  2. Optional entries, max two given €1,895 cash: MEGP at ~121p (stop 113.3p, €1,000), MONY limit 195p (stop
     184.2p, €750), CF on a close above $123.50 (stop $115.25, €1,000). Approve or reject in the Pending Trade
     Ideas panel.
  3. SAP Q3 ~10-21 (tbc): consider the 5-share free-ride sale into strength if RSI pushes above 70.
  4. KLR: a Monday close with RSI below 40 flips it to a mechanical Exit. It's free-ridden, so selling all 10 sh
     (~€363) is a profit-taking call.
  5. GSK earnings 10-28. Keep the stop near 1,766p.
  6. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
