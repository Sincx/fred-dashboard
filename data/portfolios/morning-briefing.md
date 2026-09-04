════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-09-04
════════════════════════════════════════════════════════
This is a portfolio management exercise, not financial advice. Recommendations are
based on technical signals and portfolio construction heuristics — not guarantees.
Confirm independently and manage risk before trading.

⚠️ MANUAL RUN — the Aug 7–21 trade backfill was reconciled into the wiki today.
Cash position is NEGATIVE (-€785.39) and unresolved — see PORTFOLIO RISKS. Available
capital for new buys is treated as €0/nil this run, overriding the standard €3,000
default, until the user reconciles the balance.

PORTFOLIO SNAPSHOT
  Positions:         22 open (18 long equity, 2 short, 2 options)
  Long Equity Value:  ~€17,948 (converted at EURUSD 1.16277 / EURGBP 0.8608)
  Cash:               -€785.39 ⚠️ UNRESOLVED — see risks
  Net (equity+cash):  ~€17,163 (excludes short margin & options mark-to-market)
  Available Cap:      €0 — treat as nil until cash is reconciled (do NOT size new
                       buys against this negative balance)
  Best Performer:     IQV +65.63%
  Worst Performer:    PRX -10.41%
  Largest Position:   EDEN (7.52% of long equity)
  Smallest Position:  KLR (1.96% — see concentration note)

  Data caveats this run: REL (RELX, LSE) still priced at entry (£25.95/2,595p,
  0.00% P&L) — Massive has no LSE entitlement (confirmed again this session) and
  Alpha Vantage hit its 25 req/day cap before this run started. ZOE (Xetra) still
  priced via the ZTS USD/EUR proxy (ZTS closed $76.29 today, consistent with the
  existing estimate) — not a direct EUR-listing quote. Both flagged for next refresh.

POSITION SIGNALS
  ┌────────┬──────────┬─────────┬───────┬──────────┬────────────────────────┬─────┐
  │ Ticker │ P&L%     │ RSI(14) │ vs50d │ Signal   │ Catalyst / Note         │ MF# │
  ├────────┼──────────┼─────────┼───────┼──────────┼────────────────────────┼─────┤
  │ APH    │ +14.38%  │ 54.0    │ ↑     │ ✅ Hold   │ Post 2:1 split (14 sh)  │ 17  │
  │ WOSG   │ -3.56%   │ 34.8    │ ↓     │ 🔴 Exit   │ Exit signal, 2nd session│ 13  │
  │ DNLM   │ +8.19%   │ 48.9    │ ↑     │ 👀 Watch  │ Recovered above SMA50   │ 2   │
  │ IQV    │ +65.63%  │ 75.2    │ ↑     │ 👀 Watch* │ Free-ride today         │ 22  │
  │ KLR    │ +25.14%  │ 50.5    │ ↓     │ 👀 Watch  │ Free-ride, not extended │ 7   │
  │ SAP    │ +35.76%  │ 59.9    │ ↑     │ 👀 Watch  │ —                       │ 15  │
  │ CPB    │ +1.03%   │ 40.9    │ ↓     │ 👀 Watch  │ —                       │ 16  │
  │ GSK    │ -3.77%   │ 44.4    │ ↓     │ 👀 Watch  │ 1 tick from Exit        │ 3   │
  │ EDEN   │ +13.08%  │ 63.6    │ ↑     │ 👀 Watch  │ —                       │ —   │
  │ ACN    │ +18.32%  │ 66.8    │ ↑     │ 👀 Watch  │ Listed as Xetra:CSA     │ 5   │
  │ ADBE   │ +14.37%  │ 61.5    │ ↑     │ 👀 Watch  │ MACD turned bearish     │ 4   │
  │ FLUT   │ +11.12%  │ 52.8    │ ↓     │ 👀 Watch  │ Reassess 09-10 (6d out) │ —   │
  │ PRX    │ -10.41%  │ 40.0    │ ↓     │ 👀 Watch  │ Right at Exit boundary  │ 19  │
  │ WKL    │ -0.70%   │ 58.5    │ ↑     │ 👀 Watch  │ —                       │ 8   │
  │ LULU   │ -4.56%   │ 53.6    │ ↑     │ ✅ Hold   │ Fresh TA (was pending)  │ —   │
  │ SFM    │ -1.29%   │ 43.7    │ ↓     │ 👀 Watch  │ Fresh TA; 2/3 conditions│ —   │
  │        │          │         │       │          │ negative — close to Exit│     │
  │ ZOE    │ +5.84%   │ N/A     │ N/A   │ 👀 Watch  │ ZTS-proxy price only    │ —   │
  │ REL    │ 0.00%    │ N/A     │ N/A   │ 👀 Watch  │ Price unfetched — see   │ —   │
  │        │          │         │       │          │ caveats above           │     │
  └────────┴──────────┴─────────┴───────┴──────────┴────────────────────────┴─────┘
  *IQV: mechanical Trim needs RSI>70 AND largest allocation; IQV is only 6.5% of
  book so the mechanical signal reads Watch, but RSI 75.2 is deep overbought —
  free-ride sell recommended below regardless.
  LULU/SFM RSI/MACD/SMA50/ATR computed fresh this run from 57 days of daily bars
  (previously "pending"). All other RSI/MACD/SMA figures are carried from the
  2026-09-03 refresh (prices for APH/IQV/CPB/ADBE/FLUT were re-fetched today and
  are UNCHANGED from 09-03 — market hadn't moved between snapshots).

  Short positions (not in signal table above — no RSI framework applied):
  NBIS short: 3 sh @ $273.32, now $210.63 → +22.93% (unrealized gain on the short,
    ~+$188) ✅ Hold — thesis intact, Burry-aligned neocloud short.
  ORCL short: 3 sh @ $149.89, now $154.04 → -2.77% (unrealized loss, ~-$12)
    ✅ Hold — small move, no stop threatened; OCI momentum still the risk to watch.

  Options (deep OTM, no action):
  ORCL put: $120 strike, exp 2026-12-18, premium $11.38/sh, breakeven $108.62.
    ORCL now $154.04 — 27% above breakeven, deep out-of-the-money.
  PLTR put: $125 strike, exp 2027-03-19, premium $8.24/sh, breakeven $116.76.
    PLTR now $182.53 — 46% above breakeven, deep out-of-the-money. Long-dated
    (6+ months to expiry), thesis has room to play out — monitor, no action.

PORTFOLIO SHAPE
  Concentration:   OK overall — largest position EDEN at 7.52%, nothing near the
                   25% flag. WARNING (minor): KLR is only 1.96% of the book — well
                   under the 5% "underweight" threshold after 3 rounds of trims;
                   consider either letting the free-ride play out and closing the
                   remainder, or topping it back up if the thesis still warrants a
                   full-size position.
  Sector spread:   Tech/Enterprise SW (SAP/ACN/ADBE) 19.67% | Healthcare/CRO/Animal
                   Health (IQV/GSK/ZOE) 18.38% | UK Consumer (WOSG/DNLM) 10.84% |
                   Info Services/Intl (WKL/REL) 9.26% | Consumer Discretionary
                   (LULU/SFM) 8.46% | Fintech (EDEN) 7.52% | Consumer Staples (CPB)
                   6.36% | SOTP Intl Holding (PRX) 6.16% | Sports Betting (FLUT)
                   5.88% | Connectors/AI Infra indirect (APH) 5.51% | UK Industrials
                   (KLR) 1.96%. No sector exceeds 25%; Tech+Healthcare combined is
                   the heaviest cluster at 38.0% but spread across 11 groups overall.
                   Bearish overlays (not in the long-equity sector mix): NBIS short
                   (AI-infra/neocloud), ORCL short + long put (AI/OCI), PLTR long
                   put (AI/data-analytics) — three separate bets that AI-capex
                   momentum stalls, worth tracking as one correlated cluster.
  Currency split:  USD 39.56% | EUR 38.00% | GBP 22.44%
                   (of the €17,948 long equity book; cash and short margin excluded)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  WOSG: Trim ~50% (67 of 135 shares) — RSI 34.8, below 50d SMA (726.9p), MACD
  bearish; mechanical Exit signal persisting (2nd+ session). Patience-override caps
  the trim at 50% given the UK consumer thesis is still considered intact.
  This realises a small loss: Gross P&L ≈ -£16.42 (-€19.07), CGT €0 (loss, no tax),
  commission ≈ -€4.30, Net ≈ -€23.37. Loss can offset gains elsewhere for CGT.
  Expected proceeds: ~£444.55 (~€516.50)

  IQV: Free-ride sell 3 of 5 shares (see FREE RIDE OPPORTUNITIES below) at $271.62.
  RSI 75.2 is deep overbought — priority sell action today.
  Expected proceeds: ~$814.86 gross → ~€215 net after CGT + commission

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals triggered today — all 18 long positions cleared the Add screen
  (RSI 35–50 + above SMA50 + MACD bullish) without qualifying. DNLM came closest
  (RSI 48.9, above SMA50) but MACD is still bearish.

  ── NEW POSITIONS ──────────────────────────────────────
  Capital note: available cash is effectively €0 (cash balance is -€785.39,
  unresolved). The three candidates below are identified for planning only —
  do NOT size or execute until the cash position is reconciled and/or the WOSG
  trim + IQV free-ride proceeds land (~€731 combined, still short of even one
  full-size €1,000-1,500 entry once the -€785 hole is filled).

  CI: Enter at $286.26 (current price, RSI 55.9 — healthy zone) — Market Watchlist
  screen, Score 5/5, Undervalued (P/E 11.5x), passes Magic Formula EV/EBIT (8.9x✓)
  and Fwd P/E (8.8x✓) screens. Healthcare — would push Healthcare/CRO/Animal Health
  sector weight from 18.4% to ~24.7% at €1,500 size, approaching (not breaching)
  the 25% flag.
  Stop: $276.61 (entry − 1.5×ATR14, ATR14=$6.43) | Size: €1,500 (high conviction)

  T: Enter on a pullback, not at market — RSI 69.2 is above the 65 extended
  threshold. Wait for a close back below ~$25.70 (recent MA20-ish level) or a
  fresh pullback before entering. Score 5/5, Undervalued (P/E 8.6x), passes Fwd
  P/E (10.8x✓). New sector for the book (Communication Services) — no overlap.
  Reference stop: $25.38 (current price − 1.5×ATR14, ATR14=$0.54) | Size: €1,500

  DVN: Enter at $48.79 (current price, RSI 62.2 — upper end of healthy range) —
  Score 5/5, Undervalued (P/E 10.2x), passes Fwd P/E (9.1x✓). New sector (Energy)
  — no overlap; note AR (also 5/5, Energy) was skipped to avoid doubling the same
  sector in one sitting.
  Stop: $46.97 (entry − 1.5×ATR14, ATR14=$1.21) | Size: €1,500 (or €750 starter
  given capital constraints)

  Sources checked: Google Sheet "Buy Opportunities" tab (live, used above) →
  Investment Ideas wiki page (no fresh "ready to enter" flags — RKT.L/MOH/FLUT-
  adjacent names all long-standing watch items, no new triggers) → Morningstar
  watchlist (file not found at the expected wiki path — likely renamed/moved;
  skipped, flagging for the user to check the path) → Paper trading book (35 open
  positions, strongest live performers MRNA/TNET/CMCL/HPQ/CRWD — none flagged for
  promotion today, this is a discretionary call outside the standing rules).

FREE RIDE OPPORTUNITIES
  IQV: Sell 3 of 5 shares at $271.62 → $814.86 gross proceeds. Remaining cost basis
  on the 5 held shares is $819.95 ($163.99/sh); 3 shares nearly fully recovers it
  (~$5 short of exact — selling a 4th share would fully bank the cost basis with
  $266 to spare but leaves only 1 free share instead of 2). Recommended: sell 3,
  running 2 shares near-zero effective cost. Gross gain on the 3 sold: $322.89
  (~€277.69) → CGT 21% -€58.32, commission -€4.30 → Net ≈ €215.07.
  Status: Execute now — RSI 75.2 is well above the 65 threshold and overbought.

  KLR: Sell 8 of 10 shares would fully cover the £241.80 remaining cost basis
  (8 × 30.26p... i.e. 3,026p = £242.08, matches almost exactly), leaving 2 shares
  running free. Status: Monitor only — RSI 50.5 is not yet extended and no Trim
  signal is active; hold for a stronger overbought reading before executing.

  APH: 1 of 14 shares would be free (13 shares covers the $1,004.50 cost basis at
  $82.07) but P&L is only +14.38%, below the ~25% qualifying threshold used
  elsewhere in this book — not actionable, note only.

  WOSG: NOT free-ride eligible. The position is underwater (Mkt Value £895.73 <
  Cost Basis £928.80) — you would need to sell MORE shares (140) than are held
  (135) to recover the cost basis. This is a loss position, not a free-ride
  candidate; see the Exit/Trim recommendation above instead.

PORTFOLIO RISKS TO WATCH
  - ⚠️ CASH BALANCE IS NEGATIVE: -€785.39, unresolved as of this backfill. Likely a
    missing deposit between 08-06 and 08-21, or the flat-margin treatment of the
    two new shorts (NBIS, ORCL) overstates cash required. This needs manual
    reconciliation against the broker statement before ANY new capital is
    deployed — treated as €0 available this run.
  - REL (RELX) and ZOE (Zoetis EUR) still carry non-live prices (entry placeholder
    and USD proxy respectively) — LSE data unavailable via Massive (not entitled)
    and Alpha Vantage was already at its 25/day cap before this run started.
  - WOSG mechanical Exit signal persisting multiple sessions — deteriorating UK
    consumer momentum; patience-override trim window narrowing if it doesn't
    stabilise after today's 50% trim.
  - IQV RSI 75.2 with MACD bearish — sharp reversal risk on the book's best
    performer (+65.6%); free-ride sell reduces exposure without abandoning it.
  - Cluster of positions sitting right at the RSI-40 Exit boundary: PRX (40.0),
    CPB (40.9), GSK (44.4), SFM (43.7, new) — a broad-market pullback could
    trigger several mechanical Exit signals simultaneously.
  - FLUT reassessment deadline is 6 days out (2026-09-10), price still below SMA50.
  - Three correlated AI-capex-bearish overlays (NBIS short, ORCL short+put, PLTR
    put) — all thesis-aligned but all lose together if AI infrastructure spend
    proves durable; concentrated directional bet dressed as diversification.
  - KLR down to 1.96% of the book after three trims — orphaned small position,
    decide whether to let it fully free-ride out or rebuild it.

NEXT ACTIONS
  1. Reconcile the -€785.39 cash balance against the broker statement — check for
     a missing deposit (Aug 6-21 window) or margin double-counting on the NBIS/
     ORCL shorts before placing any new trades.
  2. Execute IQV free-ride sell: 3 of 5 shares at $271.62 (~€215 net proceeds).
  3. Execute WOSG 50% trim: 67 of 135 shares at 663.5p (~€516.50 gross proceeds,
     small realised loss ~-€23.37) — mechanical Exit signal persisting.
  4. Next session: retry REL.LON and ZOE/ZOE.DE pricing (Alpha Vantage quota
     resets daily; Massive lacks LSE/Xetra entitlement — consider a paid tier or
     a different data source if this recurs).
  5. Once cash is reconciled, prioritise CI first among new candidates (best
     Magic Formula pass-count, healthiest RSI) — do not size T or DVN until
     capital is actually available.
  6. Monitor FLUT — reassessment deadline 2026-09-10 (6 days out).
  7. Watch the RSI-40 cluster (PRX, CPB, GSK, SFM) for a broad Exit-signal wave.
════════════════════════════════════════════════════════
