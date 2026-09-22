════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-09-22 (23:40 CEST run)
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

⚠ DATA CORRECTION NOTICE ⚠
This run found and fixed a real bug in how options mark-to-market values were being
reported: `option_marks.mkt_value` from Turso is in the option's NATIVE currency (USD for
all three current options — ORCL, PLTR, META), not EUR, but prior briefings (including
this morning's 08:49 run) copied that USD figure directly into the "€" column without
converting. Corrected options total: €1,182.74 (was reported as €1,355 twice today).
Corrected Total Net Value: ≈€18,512 (was ≈€18,605). This is a reporting fix, not a real
€93 portfolio loss — cash, long equity, and the short are unaffected; only the options
EUR conversion was wrong. Fixing the wiki Options Positions table in Step 8 below.

PORTFOLIO SNAPSHOT
  Positions:        22 open (18 long equity, 1 short, 3 options)
  Total Value:      ~€18,512 (corrected; see notice above)
  Available Cap:    €1,222.86 cash (unchanged since 09-21 — no trades executed today)
  Best Performer:   IQV +64.57%
  Worst Performer:  SFM -14.35%
  Largest Position: META (~7.0% of portfolio, narrowly ahead of SAP ~6.9%)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ APH      │ +12.50%    │ 51.6    │ ↑     │ 👀 Watch │ —                 │ 444 │
  │ IQV      │ +64.57%    │ 64.3    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 626 │
  │ KLR      │ +34.24%    │ 69.1    │ ↑     │ Hold     │ ✅ free-ridden    │ 39  │
  │ SAP      │ +33.37%    │ 52.0    │ ↑     │ 👀 Watch │ —                 │ 308 │
  │ GSK      │ -1.40%     │ 57.3    │ ↑     │ Hold     │ Earnings 10-28    │ 31  │
  │ EDEN     │ +5.13%     │ 42.3    │ ↓     │ 👀 Watch │ —                 │ —   │
  │ ACN      │ +14.88%    │ 54.7    │ ↑     │ 👀 Watch │ price stale 09-21 │ —   │
  │ ADBE     │ -0.13%     │ 42.8    │ ↓     │ 👀 Watch │ —                 │ 26  │
  │ FLUT     │ -5.69%     │ 32.1    │ ↓     │ 🔴 Exit  │ Earnings 11-12    │ —   │
  │ PRX      │ -8.75%     │ 54.2    │ ↓     │ 👀 Watch │ —                 │ 579 │
  │ WKL      │ -5.99%     │ 46.0    │ ↓     │ 👀 Watch │ —                 │ 68  │
  │ LULU     │ -14.25%    │ 41.3    │ ↓     │ 👀 Watch │ —                 │ 18  │
  │ SFM      │ -14.35%    │ 33.5    │ ↓     │ 🔴 Exit  │ reassess ~10-05   │ 162 │
  │ ZOE      │ -0.25%     │ 45.8    │ ↓     │ 👀 Watch │ —                 │ —   │
  │ REL      │ -3.79%     │ 44.2    │ ↓     │ 👀 Watch │ —                 │ 181 │
  │ ORCL(sh) │ +0.89%     │ 50.5    │ ↑     │ 👀 Watch │ —                 │ 620 │
  │ META     │ -0.62%     │ 77.9 ⚠ │ ↑     │ Hold     │ RSI extended      │ 258 │
  │ ERO      │ -0.32%     │ 50.7    │ ↑     │ 👀 Watch │ —                 │ —   │
  │ QXO-PB   │ +6.45%     │ 53.3    │ ↓     │ 👀 Watch │ —                 │ —   │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  Freshness: all UK/EU positions carry genuine same-day 2026-09-22 closes EXCEPT ACN,
  which is still on its 2026-09-21 close despite sitting in the same EU/Xetra group as
  SAP/EDEN/PRX/WKL/ZOE/QXO-PB (all fresh) — an isolated one-ticker gap, not a batch issue.
  All US-listed positions (APH, IQV, ADBE, FLUT, LULU, SFM, ORCL, META, ERO) still carry
  2026-09-21 closes — today's US close hadn't landed in Turso as of this 23:40 CEST run;
  expected given `refresh-technicals` typically runs after US close settles, not a fault.
  META RSI 77.9 remains extended/overbought; still no mechanical Trim (position well under
  the 20% weight threshold) — flagged for manual attention only.

PORTFOLIO SHAPE
  Concentration:   OK (largest is META at ~7.0%, well under the 25% warning threshold)
  Sector spread:   Tech/Enterprise (SAP+ACN+ADBE) ~18.0% | Other (WKL/LULU/SFM/ZOE/REL) ~20.6% |
                   New (META+ERO+QXO-PB) ~17.7% | Healthcare/CRO (IQV+GSK) ~10.1% |
                   European/Fintech (EDEN) ~6.8% | Intl/SOTP (PRX) ~6.1% | AI-infra indirect (APH) ~5.3% |
                   UK Industrials (KLR) ~2.0% | Sports Betting (FLUT) ~0.4%
  Currency split:  USD ~45.6% | EUR ~40.9% | GBp ~13.5% (of long equity value)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  No trades executed today.
  FLUT: mechanical Exit persists (RSI 32.1, below SMA50, MACD bearish) — still not viable;
  1 share at $86.86, $5 commission = 5.8% of trade value, well above the 1% minimum-viable-
  trade threshold. Free-to-ride designation stands. Hold.
  SFM: mechanical Exit persists (re-triggered 2026-09-21) — day 2 of a 10-trading-day
  patience window. Hold, reassess by ~2026-10-05.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals triggered today.

  ── NEW POSITIONS ──────────────────────────────────────
  No trades today / Capital held in reserve: available cash (€1,222.86) is still below the
  €1,500 target size for any of today's top-screened candidates. See INVESTMENT
  OPPORTUNITIES below — 3 ideas recorded to the Pending Trade Ideas queue.

INVESTMENT OPPORTUNITIES
  5/5 · MO (SP500, Consumer Staples) — MF pass, P/E 14.3, Earnings Yield 11.43%, ROIC 46.1% | MF#9
  Entry: $68.53 | Stop: $66.47 | Size: €1,500 | RSI: 52.1 | MACD: Bullish
  Conviction: MF#9; Magic Formula pass; corroborated by llm-research + prior briefing-
  recommendation (3rd time screened, still not executed). RSI healthy at 52, near SMA50.
  Portfolio fit: Consumer Staples 0% held (CPB exited 09-08) — clean diversification. USD,
  6.5% dividend yield. Highest-conviction repeat idea; still doesn't fit at target size with
  only €1,223 available.

  5/5 · IAG (FTSE350, Industrials) — MF pass, P/E 7.4, Earnings Yield 19.36%, ROIC 27.47% | MF#6
  Entry: 430.30p | Stop: 415.58p | Size: €1,500 | RSI: 52.7 | MACD: Bullish
  Conviction: MF#6; Magic Formula pass (top decile); corroborated by llm-research; bullish
  MACD; RSI 52.7 — healthy, near SMA50. New candidate today (also appears as an EU/Euronext
  dual listing at MF#8, lower signal count — UK listing preferred here).
  Portfolio fit: no current exposure to this name; broad "Industrials" sector label is
  distinct from KLR's UK Industrials bucket (~2.0%) — combined still nowhere near 25%. GBp
  (currency split already GBp-light at ~13.5% — genuine diversification, not concentration).

  5/5 · MONY (FTSE350, Communication Services) — MF pass, P/E 12.4, Earnings Yield 11.49%, ROIC 33.64% | MF#12
  Entry: 203.77p | Stop: 193.59p | Size: €1,500 | RSI: 58.2 | MACD: Bullish
  Conviction: MF#12; Magic Formula pass; bullish MACD; RSI 58.2 — healthy, approaching but
  not yet at the upper end of the entry band. New candidate today.
  Portfolio fit: no Communication Services exposure currently held — clean diversification.
  GBp.

  Note: AF (Euronext, Industrials, MF#40, score 5/5) was also on today's screen but ranked
  4th by the signal-strengthened tiebreak (signal_count 1 vs IAG's 2) — passed over in favour
  of IAG. VLO and BBY (yesterday's 4/5 picks) dropped out of today's top-3 now that four
  genuine 5/5 candidates are available; both remain in the Pending Trade Ideas queue from
  this morning's run if still relevant.

FREE RIDE OPPORTUNITIES
  IQV: ✅ Already free-ridden — cumulative trim proceeds ($2,117.62 across 4 trims) exceed the
  original $1,967.88 cost basis; all 3 remaining shares at zero effective cost. Current
  value: ~€707.
  KLR: ✅ Already free-ridden — gross trim proceeds (£1,326.40) exceed the original £1,209.00
  cost basis; all 10 remaining shares at zero effective cost. Current value: ~€378.
  SAP: P&L +33.4% clears the 25% threshold but free_shares = 1 (shares_to_sell = 6 of 7) —
  below the free_shares ≥ 2 flag criteria. Not a free ride opportunity yet.

PORTFOLIO RISKS TO WATCH
  - Options mark-to-market EUR conversion bug found and fixed this run (see notice above) —
    total net value corrected from ~€18,605 to ~€18,512; worth double-checking the fix
    actually lands correctly in the wiki's Options Positions table in Step 8.
  - Cash remains genuinely scarce (€1,222.86), below the €1,500 target size for all three of
    today's top candidates (MO, IAG, MONY) — new entries will have to wait for a free-ride
    trim, a patience-window exit (FLUT/SFM), or a fresh deposit.
  - META combines an extended RSI (77.9) with a bullish $885 call on the same name expiring
    2026-10-09 (<3 weeks) — concentrated, compounding AI-infra exposure with no hedge.
  - FLUT (1 share) remains economically stuck — Exit signal active but too small to trim
    without commission eating most of the value; SFM's patience window runs to ~2026-10-05.
  - ACN's price is one day stale (2026-09-21) despite sitting in the same batch as other
    fresh EU tickers — an isolated gap worth a look if it persists tomorrow.
  - All US-listed positions still on 2026-09-21 closes as of this 23:40 CEST run — expected
    (today's US close hadn't landed in Turso yet), but worth confirming tomorrow's run picks
    up genuine 09-22 closes.
  - check_data_quality.py's retry pass finished: 2 auto-recovered (BP, DLN — benign,
    transient yfinance misses). 106 still failing, all at 7-8 consecutive daily failures
    (the same EU-exchange cluster as this morning's run — HLI, FERR, LIN, ROG, ARGX, NGG,
    MRW, DSM, ~100 more — "no bars from yfinance batch"/"all sources failed"), now one day
    longer and 2 tickers larger than the 08:49 run's count (104→106). None are current
    holdings or today's candidates. This is the same real batch-fetch bug flagged this
    morning, unaddressed and still growing — worth the dedicated fix, not another daily
    auto-retry cycle.

NEXT ACTIONS
  1. Verify the corrected options EUR figures once written to the wiki (Step 8) look right —
     ORCL put ~€458, PLTR put ~€627, META call ~€98 (native USD values divided by EUR/USD,
     not copied directly).
  2. Decide on MO/IAG/MONY given ~€1,223 available cash — none fit fully at €1,500 target;
     MO remains the highest-conviction repeat pick if capital allows a smaller entry.
  3. Monitor SFM's patience-override window (reassess by ~2026-10-05) and FLUT's persistent
     too-small-to-execute problem.
  4. Watch META's RSI (77.9, extended) for a pullback, and track the Oct-09 $885 call's
     expiry (<3 weeks left).
════════════════════════════════════════════════════════
