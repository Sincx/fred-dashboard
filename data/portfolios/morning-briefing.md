⚠ PIPELINE HEALTH WARNING ⚠
STALE/ERROR: refresh-technicals: stale — last successful signal 105h ago
STALE/ERROR: options-mark-to-market: stale — last successful signal 105h ago
STALE/ERROR: crypto-prices: stale — last successful signal 104h ago
STALE/ERROR: magic-formula-screen: stale — last successful signal 103h ago
Figures below may be based on stale data — verify before acting on any recommendation.
(Mitigation this run: Turso `prices` still holds 10-09 to 10-13 closes, so every holding was re-priced from a direct
 yfinance pull of Friday 10-16 closes (US cross-checked against massive), and RSI/MACD/SMA50/ATR were recomputed from
 those bars. The only exception is ZOE, which has no Yahoo EUR feed: its price stays on 10-09 and its TA uses the ZTS proxy.
 check_data_quality.py (finished after the first write): 570 AUTO-RECOVERED, 259 STILL FAILING, 253 NEEDS MANUAL REVIEW
 (3+ consecutive failures). Most of the failures are EU-universe technicals ("all sources failed"), which looks systemic:
 a broken EU source or ticker mapping, not bad luck on individual tickers.
 Relevant to this briefing, and all failing repeatedly for known reasons:
   - ACN and ZOE fundamentals: no sa_prefix, so they have no MF#.
   - QXO-PB fundamentals: no data from any source.
   - NBIS option_mark: the Turso row is missing strike and underlying.)
════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-17
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€20,959 (estimated: long equity €17,171 + options mtm ~€1,776 + ORCL short unrealized +€117 + cash €1,895)
                    +€1,141 vs the 10-13 run's €19,818. Options gained ~€651 as NBIS (−21% to $165.47), PLTR (−11%) and ORCL (−7%) fell.
                    Long equity gained ~€450 (REL, WKL, SAP, EDEN, ACN and GSK up). No trades.
  Available Cap:    €1,895.31 cash (no new trades or cash entries in Turso since 10-01; checked this run)
  Best Performer:   IQV +62.8%
  Worst Performer:  SFM −18.7% (FLUT −17.9%, LULU −14.0%, PRX −12.6%)
  Largest Position: LULU (9.1% of long book; GSK 9.0%, SAP 8.1%, REL 8.0%)
  FX:               EUR/USD 1.1242 | GBP/EUR 1.1854 | All prices are Fri 10-16 closes unless noted

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +62.8%     │ 54.8    │ ↑     │ Watch    │ Q3 late Oct (tbc) │ 661 │
  │ SAP      │ +45.7%     │ 66.0    │ ↑     │ Hold     │ Q3 ~10-21 (tbc)   │ 344 │
  │ ACN      │ +43.7%     │ 71.4    │ ↑     │ Hold     │ overbought        │ —   │
  │ KLR      │ +26.6%     │ 40.1    │ ↓     │ Watch    │ near-Exit; free   │ 58  │
  │ WKL      │ +14.7%     │ 77.3    │ ↑     │ Hold     │ overbought        │ 73  │
  │ EDEN     │ +13.3%     │ 64.3    │ ↑     │ Hold     │ Q3 rev ~10-21 tbc │ —   │
  │ REL      │ +12.7%     │ 78.2    │ ↑     │ Hold     │ overbought        │ 194 │
  │ BIRK     │ +5.6%      │ 51.1    │ ↓     │ Watch    │ —                 │ 255 │
  │ ZOE      │ +5.0%*     │ 69.4†   │ ↑     │ Hold     │ *10-09 price      │ —   │
  │ ADBE     │ −1.9%      │ 50.1    │ ↓     │ Watch    │ —                 │ 22  │
  │ ERO      │ −1.9%      │ 42.9    │ ↓     │ Watch    │ MACD bearish      │ 86  │
  │ GSK      │ −4.0%      │ 56.0    │ ↑     │ Hold     │ Earnings 10-28    │ 35  │
  │ QXO-PB   │ −6.9%      │ 41.2    │ ↓     │ Watch    │ Exit cleared      │ —   │
  │ PRX      │ −12.6%     │ 49.9    │ ↓     │ Watch    │ reassess date hit │ 591 │
  │ LULU     │ −14.0%     │ 46.0    │ ↓     │ Watch    │ reassess ~10-20   │ 24  │
  │ FLUT     │ −17.9%     │ 37.0    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ SFM      │ −18.7%     │ 41.7    │ ↓     │ Watch    │ Q3 late Oct (tbc) │ 142 │
  │ ORCL (S) │ +17.0%     │ 39.7    │ ↓     │ Hold     │ short working     │ 601 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  * ZOE has no fresh EUR quote; € price is still 10-09 (€66.36). † RSI/MACD/SMA50 from the ZTS proxy ($79.38).
  P&L% uses Turso entry prices. KLR/WKL entries in Turso (2,418p / €71.08) differ slightly from the reconciled
  real fills (2,400p / €70.88), so the reconciled P&L is ~+1pt higher for KLR and +0.3pt higher for WKL.
  MF# is the full-universe Turso rank (~1,350 tickers), not the old mf-update table on the wiki page, so GSK
  shows 35 here vs 4 there. The difference comes from the universe size, not an error.

  Signal changes vs 10-13: GSK Exit → Hold (closed 1,862.5p, back above SMA50 1,849p, MACD turned bullish, +6.2% in 4 sessions).
  QXO-PB Exit → Watch (RSI back to 41.2, but still below SMA50 $39.93 with bearish MACD).
  SFM RSI is back above 40 (41.7), so the 10-05 "RSI<40 → exit" rule no longer fires.
  KLR has slipped to the edge of Exit (3,062p, −6.2%; RSI 40.1, below SMA50, MACD bearish).

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.1%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 21.6% | Healthcare (GSK, ZOE, IQV) 18.9% | Consumer (LULU, BIRK, SFM) 16.8% |
                   Info services (REL, WKL) 15.2% | Fintech EDEN 7.9% | Industrials (QXO-PB, KLR) 7.7% | Internet/SOTP PRX 6.3% |
                   Materials ERO 5.3% | iGaming FLUT 0.4%
                   The book is balanced, with no sector above 25%. It has no energy or staples exposure, and its bearish
                   overlays (ORCL short plus ORCL, PLTR and NBIS puts) are the only AI-infrastructure exposure.
  Currency split:  EUR 42.3% | USD 38.6% | GBp 19.2% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  No exit signals triggered today. Both standing Exits (GSK and QXO-PB) cleared on Friday's closes, and no position
  is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - REL (RSI 78.2), WKL (77.3) and ACN (71.4) are all overbought together.
  - ACN is the only one with a large gain: +43.7%, ≈€369 gross on 6 sh. A 2-share trim at €202.70 grosses ~€123,
    leaves ~€94 after CGT (€26) and commission (~€3), and returns ~€405 cash. That is optional, not recommended:
    the free ride leaves only 1 share.
  - REL (+12.7%) and WKL (+14.7%) gains are too small for a trim to be worth the tax and commission.
  - SFM: still −18.7% and below SMA50 ($73.77), but RSI 41.7 no longer meets the exit rule. Keep the hard stop at
    $60.85; a full exit (≈€580 proceeds, realized loss ≈−€133, no CGT) remains Mike's call.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. PRX (RSI 49.9, MACD bullish) fails the rule only because it is below SMA50 (€36.71).

  ── NEW POSITIONS ──────────────────────────────────────
  All three carried-forward ideas rallied this week and are now extended (RSI 67–76). Use limit orders on pullbacks;
  don't chase.
  MO:   limit $72.00 (last $75.11) — Turso screen 5/5, MF#14 | Stop: $69.83 | Size: €750
  MONY: limit 195p (last 201.8p) — Turso screen 5/5, MF#15 | Stop: 183.6p | Size: €750
  EOG:  limit $152.50 (last $158.01) — Turso screen 5/5, MF#50 | Stop: $147.19 | Size: €750
  Combined €2,250 is more than the €1,895 cash, so at most two can fill unless something else is sold first.

INVESTMENT OPPORTUNITIES
  5/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1%, yield 6.6% | MF#14
  Entry: pullback to ~$72.00 (last $75.11, 10-16) | Stop: $69.83 (1.5×ATR $1.44) | Size: €750 starter | RSI: 76.2 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD.
  Portfolio fit: the book has no staples exposure, and MO's defensive yield would offset the cyclical consumer names
    (LULU, BIRK, SFM). Now overbought after +4.8% since 10-12, so it is a watch/limit candidate only.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#15
  Entry: pullback to ~195p, near SMA50 193.5p (last 201.8p, 10-16) | Stop: 183.6p | Size: €750 starter | RSI: 67.0 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD.
  Portfolio fit: a new sector for the book, with GBp exposure and no AI link. It has reclaimed SMA50 since 10-13,
    so this is now a trend entry rather than a recovery entry. Size is cut to a starter because RSI is above 65.

  5/5 · EOG (S&P 500, Energy — EOG Resources) — Magic Formula pass, P/E 10.8, EY 11.8%, ROIC 19.8%, yield 3.0% | MF#50
  Entry: pullback to ~$152.50, Friday's low area (last $158.01) | Stop: $147.19 | Size: €750 starter | RSI: 70.3 | MACD: Bullish
  Conviction: MF#50; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD.
  Portfolio fit: the book has 0% energy, and this is USD exposure unrelated to AI. RSI crossed 70, so the size drops
    to a starter, as flagged on 10-13.

  All three are already active Pending Trade Ideas. record_briefing_recommendation.py skipped them as duplicates,
  so no new cards were created.
  Also considered: AUTO (5/5, MF#17, RSI 64.6 on 10-13; would double up with MONY in UK Communication Services),
    APA (5/5, a second energy name; EOG preferred), TMV (5/5, but Tech/Software is already 21.6%),
    MONY EU (duplicate listing), ACN US (already held via Xetra), SAGA/RMV (4/5).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €199.22 → ~€996 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€398
  After CGT (€65.65 on €312.60 gain) and commission (~€3.25), net cash is ~€927, ~€30 short of full cost recovery.
  Status: Monitor. RSI 66.0 is above 65 and approaching overbought, and Q3 results land ~10-21 (tbc). Consider
    executing into strength on an RSI push above 70 before or after the print.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€712).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€363). It is near
    an Exit signal, but no capital is at risk.
  ACN: +43.7% but doesn't qualify. Covering €846.60 at €202.70 needs 5 of 6 shares, which leaves only 1 free share
    (the rule needs ≥2).

PORTFOLIO RISKS TO WATCH
  - Pipeline staleness: refresh-technicals, options-mark-to-market, magic-formula-screen and crypto-prices have all
    been stale ~4.4 days. Turso and the dashboard still show 10-09 to 10-13 prices until they rerun, and this
    briefing's numbers come from a one-off direct fetch.
  - AI-infrastructure selloff: NBIS (−21% in four sessions, RSI 30.6), PLTR and ORCL fell sharply. The bearish overlay
    is now worth ~€1,893 (puts ~€1,776 + ORCL short +€117).
    - The NBIS put mark (~$6.69/sh, ~€595) is a hand estimate at an assumed 80% vol. Its Turso row is still missing
      strike/expiry, so options_pricing.py can't mark it.
    - ORCL RSI 39.7 is oversold, so a reflex bounce could quickly give back gains on the short and the put.
  - Overbought cluster: REL 78.2, WKL 77.3, ACN 71.4 and SAP 66.0 make up ~38% of the long book and are all extended.
    A sector rotation would hit several at once.
  - Losers still below SMA50: SFM, FLUT, LULU, PRX, ERO, QXO-PB and BIRK (~37% of the long book combined).
    Exits have cleared, but none has reclaimed its 50-day average.
  - KLR: −6.2% this week to 3,062p, one RSI point from a mechanical Exit. It is free-ridden, so this is profit-at-risk
    only.

NEXT ACTIONS
  1. Fix or restart refresh-technicals (and options-mark-to-market / magic-formula-screen). All are stale ~105h; check
     whether the machine was off or the tasks erred. Turso prices won't update until they run.
  2. Optional limit orders, max two given €1,895 cash: MO $72.00 (stop $69.83), EOG $152.50 (stop $147.19), MONY 195p
     (stop 183.6p), each €750. Approve or reject in the Pending Trade Ideas panel.
  3. SAP Q3 ~10-21 (tbc): consider the 5-share free-ride sale into strength if RSI pushes above 70.
  4. LULU patience window ends ~10-20. It is at $97.10 (+2.6% vs 10-12) and Exit has cleared; keep the trim-9-sh
     trigger at a close below $88.54.
  5. PRX reassess date (10-16) has passed. Thesis intact, RSI 49.9, MACD bullish: extend the patience window and keep
     the trim-50% trigger at a close below €33.03.
  6. GSK earnings 10-28. The Exit cleared, so the 35-share trim trigger (<1,687p) can be relaxed to a stop near 1,766p
     (1.5×ATR below the close).
  7. Fill in the NBIS put's strike, expiry and type in Turso so it can be auto-marked.
════════════════════════════════════════════════════════
