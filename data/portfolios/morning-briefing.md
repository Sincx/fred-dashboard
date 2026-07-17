════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-07-17
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        7 open + cash
  Total Value:      ~€13,750 (invested €9,672 + €4,078 cash)
  Available Cap:    €4,078
  Best Performer:   KLR +36.5%
  Worst Performer:  AVGO -0.1%
  Largest Position: WOSG (€1,887 / 19.5% of invested)
  Unrealised P&L:   +€1,218 (+14.4% on cost)

DATA NOTE: Alpha Vantage's free daily quota (25 requests) was already exhausted before this run
started (used earlier by another scheduled task) — CURRENCY_EXCHANGE_RATE and GLOBAL_QUOTE/
TIME_SERIES_DAILY calls all returned the quota-exceeded message. Substitutions used instead:
  - FX: Massive forex tickers C:EURUSD / C:EURGBP (/v2/aggs/ticker/{pair}/prev) — EUR/USD 1.1477
    ($1 = €0.87131), EUR/GBP 0.8496 (£1 = €1.17705, 1p = €0.0117705).
  - LSE tickers (WOSG, MGNS, DNLM, KLR): Massive has no working LSE coverage (confirmed again —
    `/v2/aggs/ticker/{T}.L/prev` returns an empty schema). Priced directly via Yahoo Finance's
    chart API (query1.finance.yahoo.com/v8/finance/chart), which also supplied 6mo daily OHLC
    for the TA calc. Cross-checked: the array's last complete close matched each ticker's
    previously-recorded Last Price exactly (e.g. WOSG 778.0p, KLR 3,372p), confirming the feed
    is reliable; `regularMarketPrice`/`regularMarketTime` (~16:00 UTC, just after LSE close)
    was used as the newest complete session close (2026-07-16), appended as the latest bar.
  - US tickers (APH, AVGO, IQV): Massive `/prev` (2026-07-16 close) + `/range/1/day` (100-day
    window) as usual; the range query still lags one day behind `/prev`, so `/prev` was appended
    as the latest bar per the established pattern.
  All 7 tickers and both FX pairs are therefore priced to the same session (2026-07-16 close).

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬─────────────────────────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst                │
  ├──────────┼────────────┼─────────┼───────┼──────────┼─────────────────────────┤
  │ APH      │ +9.4%      │ 42.0    │ ↑     │ Watch    │ —                       │
  │ AVGO     │ -0.1%      │ 53.1    │ ↓     │ Watch    │ —                       │
  │ IQV      │ +28.3%     │ 80.0    │ ↑     │ TRIM*    │ Earnings 22 Jul (5d)    │
  │ WOSG     │ +16.5%     │ 73.0    │ ↑     │ Watch    │ —                       │
  │ MGNS     │ +3.1%      │ 40.5    │ ↑     │ Watch    │ Earnings 23 Jul (6d)    │
  │ DNLM     │ +7.6%      │ 64.4    │ ↑     │ Hold     │ —                       │
  │ KLR      │ +36.5%     │ 79.1    │ ↑     │ TRIM*    │ —                       │
  └──────────┴────────────┴─────────┴───────┴──────────┴─────────────────────────┘
  *Neither KLR nor IQV clears the strict mechanical Trim rule (RSI>70 AND weight ≥20% of
  invested) — KLR sits at 14.1% weight, IQV at 17.1%. Both are flagged as judgment-override
  TRIMs anyway:
  - KLR: RSI has now been >70 for a fourth consecutive session (85.2 → 83.6 → 79.1), the
    position carries the single largest unrealised gain in the book, and MACD histogram is
    now visibly contracting (56.7 → 38.5) — momentum fading, an early topping signal. The
    prior three sessions' trim recommendations were not executed.
  - IQV: RSI 80 is the most extreme reading in the portfolio, and earnings land in 5 days
    (22 Jul) — directly mirrors the setup that triggered the successful 07-09 trim at RSI 71
    ahead of the same earnings date, just more extreme this time.
  APH and MGNS both sit in the RSI 35–50 Add band with price above the 50d SMA, but MACD
  histogram is still negative on both (just contracting), so neither qualifies as a genuine
  pullback-in-uptrend Add setup yet.

ATR-BASED STOP SUGGESTIONS (none currently set — for reference; entry − 1.5×ATR14):
  APH:  $132.90 (ATR $7.07)      AVGO: $364.02 (ATR $15.49)     IQV:  $154.74 (ATR $6.17)
  WOSG: 640.6p (ATR 31.58p)      MGNS: 4,365.1p (ATR 172.59p)   DNLM: 757.9p (ATR 28.08p)
  KLR:  2,204.0p (ATR 142.65p)

PORTFOLIO SHAPE
  Concentration:   OK — WOSG 19.5% is the largest single position, below the 25% WARNING
                   threshold, though it has now crossed above RSI 70 as well (see Watch note).
  Sector spread:   Tech/AI 29.5% | UK Consumer 28.9% | UK Industrials 24.5% | Healthcare 17.1%
                   Tech/AI (APH+AVGO) remains the largest theme; AVGO continues to lag below
                   its 50d SMA while APH holds its uptrend — the pair remains diverged.
  Currency split:  GBp 53.4% | USD 46.6% — reasonably balanced.

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────────────────────────────
  KLR: Trim 50% (sell 17 of 35 shares at ~3,300p) — RSI 79.1 extreme for a fourth straight
  session, MACD histogram now contracting (momentum fading), largest unrealised gain in the
  book, and still no stop-loss. A 25% trim (9 shares, the size used in the last two briefings)
  no longer clears the minimum viable trade size at today's price — 9 shares × 3,300p = £297
  (~€350), and $5 commission would be ~1.25% of that, above the 1% guideline. Sizing up to 17
  shares (~€660 proceeds) keeps commission to ~0.66% of trade value.
    Gross profit: €176.48 | CGT @21%: −€37.06 | Commission: −€4.36 | Net realised gain: €135.06
    Proceeds: £561.00 (~€660.46) | Total cash received after commission: ~€656.10
    Remaining position: 18 shares, cost basis £435.24, weight falls to ~7.4% of invested.

  IQV: Trim ~33% (sell 3 of 9 shares at ~$210.49) — RSI 80.0 is the most extreme reading in the
  portfolio, with earnings 5 days out (22 Jul). Mirrors the 07-09 trim (RSI 71, same earnings
  date) that worked well; de-risking further ahead of the print given the more extreme RSI.
    Gross profit: €121.55 | CGT @21%: −€25.53 | Commission: −€4.36 | Net realised gain: €91.66
    Proceeds: $631.47 (~€550.15) | Total cash received after commission: ~€545.79
    Remaining position: 6 shares, cost basis $983.94, weight falls to ~11.5% of invested.

  Combined: if both execute, cash reserve rises from €4,078 to ~€5,280 (pre-tax-accrual);
  combined net realised gain ~€226.72 after CGT and commission.

  ── ADDS TO EXISTING ───────────────────────────────────────────────────────────
  No trades today / Capital held in reserve: no position meets the Add condition (RSI 35–50
  AND price above 50d SMA AND MACD bullish) this run. APH (RSI 42.0) and MGNS (RSI 40.5) are
  both in-band and above their 50d SMA, but MACD histogram is still negative on both — not
  yet a genuine pullback-in-uptrend setup.

  ── NEW POSITIONS ──────────────────────────────────────────────────────────────
  No trades today / Capital held in reserve: checked wiki/finance/Investment ideas.md — Eden
  Red (ERF.PA) remains the only Active thesis, with no live TA trigger recorded. Checked
  wiki/finance/morningstar/morningstar-watchlist.md — entries there (Edenred, SAP, Adyen,
  Broadcom, APH, etc.) are fundamentally-flagged value ideas with prices last checked
  2026-05-10, not live TA data, so none can be mechanically screened for a bullish setup today.
  Nothing warranted a new entry; €4,078 remains in reserve.

PORTFOLIO RISKS TO WATCH
  - No stop losses are in place on any of the 7 positions — the full book carries unmanaged
    downside risk, most acutely on KLR and IQV given their extreme RSI readings. See the
    ATR-based reference stops above.
  - KLR RSI 79.1 with MACD momentum now visibly fading — fourth consecutive session flagged
    for a trim with no action taken.
  - IQV RSI 80.0 (the most extreme reading in the book) heading into 22 Jul earnings (5 days)
    with the second-largest unrealised gain (+28.3%) unprotected.
  - MGNS and IQV both report earnings within 6 days (23 Jul and 22 Jul respectively) — event
    risk sits on ~27.5% of invested capital (MGNS 10.4% + IQV 17.1% of invested).
  - WOSG has crossed above RSI 70 for the first time this cycle and is now the largest single
    position (19.5%, just under the 20% strict-Trim weight threshold) — worth watching in case
    both conditions align on the next run.
  - AVGO remains below its 50d SMA despite the broader portfolio uptrend — the persistent
    technical laggard in the Tech/AI sleeve, and now the only position showing a loss.

NEXT ACTIONS
  1. Execute the KLR trim: sell 17 of 35 shares (~50%) near 3,300p — nets ~€135 realised and
     cuts the book's most persistently overbought, least-protected position down to ~7.4% of
     invested. This is the fourth consecutive briefing flagging this trim.
  2. Execute the IQV trim: sell 3 of 9 shares (~33%) near $210.49 ahead of the 22 Jul earnings
     print — nets ~€92 realised and de-risks the most extreme RSI reading in the portfolio
     before the event.
  3. Set broker stops across the book using the ATR-based reference levels above — none
     currently exist on any position.
  4. Monitor MGNS into 23 Jul earnings (6 days) — RSI (40.5) and MACD (still bearish) are both
     one step from a mechanical Exit signal; a close back below the 50d SMA would trigger it.
  5. Watch WOSG — RSI just crossed above 70 and weight (19.5%) is approaching the 20% Trim
     threshold; if both cross on the next run this becomes a mechanical Trim, not a judgment
     call.
════════════════════════════════════════════════════════
