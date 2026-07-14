════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-07-14
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        7 open + cash
  Total Value:      ~€13,599 (invested €9,521 + €4,078 cash)
  Available Cap:    €4,078
  Best Performer:   KLR +42.4%
  Worst Performer:  AVGO -0.8%
  Largest Position: WOSG (€1,758 / 18.5% of invested)
  Unrealised P&L:   +€1,053 (+12.4% on cost)

DATA NOTE: All 7 positions priced as of 2026-07-13 close. US tickers (APH, AVGO, IQV)
via Massive /v2/aggs/ticker/{t}/prev (Massive's range endpoint still lags to 07-10, same
gap as the prior briefing — /prev is the current workaround). LSE tickers (WOSG, MGNS,
DNLM, KLR) via Alpha Vantage GLOBAL_QUOTE + TIME_SERIES_DAILY. AVGO and APH both pulled
back from Monday's levels; WOSG gapped sharply higher (684.5–778.5 intraday range) into
its FY26 results release.
FX: EUR/USD 1.13889 ($1 = €0.87805) | EUR/GBP 0.85275 (£1 = €1.17267, 1p = €0.011727)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬─────────────────────────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst                │
  ├──────────┼────────────┼─────────┼───────┼──────────┼─────────────────────────┤
  │ APH      │ +8.7%      │ 48.3    │ ↑     │ Watch    │ —                       │
  │ AVGO     │ -0.8%      │ 48.1    │ ↓     │ Watch    │ —                       │
  │ IQV      │ +26.6%     │ 68.0    │ ↑     │ Watch    │ Earnings 22 Jul (8d)    │
  │ WOSG     │ +8.9%      │ 62.0    │ ↑     │ Hold     │ FY26 results 14 Jul (today) │
  │ MGNS     │ +2.6%      │ 46.7    │ ↑     │ Watch    │ —                       │
  │ DNLM     │ +1.1%      │ 56.1    │ ↑     │ Hold     │ —                       │
  │ KLR      │ +42.4%     │ 86.3    │ ↑     │ TRIM*    │ —                       │
  └──────────┴────────────┴─────────┴───────┴──────────┴─────────────────────────┘
  *KLR mechanically stays "Watch" (RSI 86.3 >70, but weight 14.9% sits under the ≥20%
  formal Trim threshold). Flagged TRIM here as a judgment override: RSI has been pinned
  in extreme territory (83–86) since before the 2026-07-11 trim, the position carries
  the largest unrealised gain in the book (+42.4%), and there is no stop-loss in place —
  the same override logic applied to IQV in the 2026-07-13 briefing.
  No position hit the mechanical Exit or Add conditions this run.

ATR-BASED STOP SUGGESTIONS (none currently set — for reference; entry − 1.5×ATR14):
  APH:  $132.07 (ATR $7.62)      AVGO: $364.51 (ATR $15.16)     IQV:  $153.32 (ATR $7.11)
  WOSG: 635.96p (ATR 34.69p)     MGNS: 4,367.9p (ATR 170.73p)   DNLM: 760.25p (ATR 26.50p)
  KLR:  2,209.7p (ATR 138.86p)

PORTFOLIO SHAPE
  Concentration:   OK — WOSG 18.5% is the largest single position, below the 25%
                   WARNING threshold.
  Sector spread:   Tech/AI 30.0% | UK Consumer 27.4% | UK Industrials 25.4% | Healthcare 17.2%
                   Tech/AI (APH+AVGO) remains the single largest theme, and both names
                   pulled back together today — a reminder they're correlated in an
                   AI-infrastructure drawdown.
  Currency split:  GBp 52.8% | USD 47.2% — reasonably balanced.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────────────────────────────
  KLR: Trim ~25% (sell 9 of 35 shares at ~3,444p) — RSI 86.3 remains extreme, position
  has the largest unrealised gain in the book (+42.4%), and there is still no stop-loss
  protecting it. Weight (14.9% of invested) sits below the strict ≥20% trim threshold,
  but the persistence of the extreme reading plus zero downside protection make further
  profit-taking prudent — same reasoning already applied once on 2026-07-11 at this RSI
  level.
  Expected proceeds: £309.96 gross (~€363.48)
  Gross profit: £92.34 (€108.28) | CGT @21%: −€22.74 | Commission: −€4.39
  Net realised gain: ~€81.15 (~€359 total cash received after commission)
  Remaining position: 26 shares, cost basis £628.68, weight falls to ~11.0% of invested.

  ── ADDS TO EXISTING ───────────────────────────────────────────────────────────
  No trades today / Capital held in reserve: no position met the Add condition (RSI
  35–50 AND price above 50d SMA AND MACD bullish-expanding) this run. APH and MGNS both
  sit in the 35–50 RSI band above their 50d SMA but their MACD histograms are bearish
  and expanding (weakening momentum, not a pullback-in-uptrend setup); AVGO is in the
  RSI band but trading below its 50d SMA.

  ── NEW POSITIONS ──────────────────────────────────────────────────────────────
  No trades today / Capital held in reserve: checked wiki/finance/Investment ideas.md
  — Eden Red (ERF.PA) is the only Active thesis and has no live TA trigger recorded this
  session. Also checked wiki/finance/morningstar/morningstar-watchlist.md — prices
  there are stale (last checked 2026-05-10) and none of the ~20 names were re-screened
  against today's signal rules (out of scope for a daily pass). Nothing warranted a new
  entry; €4,078 remains in reserve (rising to ~€4,437 if the KLR trim above executes).

PORTFOLIO RISKS TO WATCH
  - No stop losses are in place on any of the 7 positions — the full book carries
    unmanaged downside risk. See ATR-based reference stops above.
  - KLR RSI 86.3, still extremely overbought and effectively unchanged since the partial
    trim on 2026-07-11 (15 shares at 3,430p) — see Trim recommendation above.
  - IQV RSI 68.0 and climbing back toward overbought territory heading into 22 Jul
    earnings (8 days) with the second-largest unrealised gain (+26.6%) unprotected.
  - AVGO is now the worst performer (-0.8%) and trading below its 50d SMA with a
    weakening MACD histogram — the only position showing outright technical softness.
  - WOSG FY26 results landed today (14 Jul) with an unusually wide intraday range
    (684.5p–778.5p) — expect continued volatility as the market digests the print;
    reassess sizing once the move settles.
  - Tech/AI is the single largest sector exposure (30.0% of invested) via APH + AVGO,
    both of which pulled back together today.

NEXT ACTIONS
  1. Consider trimming KLR: sell ~9 of 35 shares (~25%) near 3,444p — nets ~€81 realised
     and cuts concentration in the book's most extreme-RSI, least-protected position.
  2. Set broker stops across the book using the ATR-based reference levels above — none
     currently exist on any position.
  3. Reassess WOSG once the FY26 results reaction settles — no add recommended into a
     binary event already this volatile.
  4. Watch IQV into 22 Jul earnings (8 days) — consider trimming into strength if RSI
     clears 70 before the print.
  5. Monitor AVGO — first position in the book trading below its 50d SMA; watch for
     RSI break below 40 to escalate toward a formal Exit signal.
════════════════════════════════════════════════════════
