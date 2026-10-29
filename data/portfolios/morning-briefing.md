════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-28
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Wednesday 23:30 slot, a separate full run. The previous briefing (dated 10-27) was rewritten at 15:52 on 10-28.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso has US on Tue 10-27, EU on 10-28 intraday prints, and KLR/REL on Mon 10-26 (refresh-technicals runs at 07:17).
Every figure below uses a direct yfinance pull of **Wed 10-28 closes** for all holdings, with RSI(14), SMA50, MACD and ATR
recomputed (ACN via Xetra CSA.DE, ZOE via ZOE.DE). Options are re-marked by hand (Black-Scholes, r 4%).
Data quality (check_data_quality.py finished after the first write): 301 rows auto-recovered (including AUTO's
technicals) and 282 are still failing, mostly non-held UK/EU technicals. The NEEDS MANUAL REVIEW list is dominated by EU
technicals failing for ~59 days straight (FERR, HMB, BNPP, MT, PANDORA, NOV-N…), so it looks like an EU ticker-mapping bug
worth a dedicated fix. Holdings still failing are only the known repeats: ACN and ZOE EU fundamentals ("no sa_prefix"),
QXO-PB fundamentals, and the NBIS option_mark row (missing strike). None of these changes a figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€20,218 (estimated: long equity €17,248 + options ~€1,030 + ORCL short unrealized +€45 + cash €1,895)
                    −€551 vs 10-27's €20,769. Most of it is the bearish overlay again: **ORCL +10.7% to $144.54** (cause
                    not found in news search) cut the ORCL put from ~€575 to ~€276 (−€299) and the short's gain from +€108
                    to +€45 (−€63). NBIS +7.0% to $182.34 took ~€88 off the NBIS put. Long equity lost only €109: GSK −4.8%
                    after Q3 (−€77), WKL −2.6% (−€34), REL −1.6% (−€23) and SFM −3.7% (−€22), partly offset by ACN +4.1%
                    (+€52) and IQV +2.8% (+€20).
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +70.2%
  Worst Performer:  SFM −22.7% (PRX −16.3%, FLUT −14.7%, EDEN −7.8%, QXO-PB −7.6%)
  Largest Position: LULU (9.8% of long book; GSK 8.9%, SAP 8.6%, REL 8.0%)
  FX:               EUR/USD 1.1154 | GBP/EUR 1.1942 | Prices are Wed 10-28 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +70.2%     │ 61.8    │ ↑     │ Hold     │ Q3 late Oct (tbc) │ 602 │
  │ ACN      │ +56.0%     │ 70.2    │ ↑     │ Hold     │ overbought; FR ✓  │ 36  │
  │ SAP      │ +54.5%     │ 69.1    │ ↑     │ Hold     │ FR ✓ (execute)    │ 310 │
  │ KLR      │ +31.7%     │ 49.5    │ ↑     │ Watch    │ MACD bearish      │ 53  │
  │ WKL      │ +18.2%     │ 65.5    │ ↑     │ Hold     │ cooling           │ 69  │
  │ REL      │ +11.8%     │ 60.7    │ ↑     │ Hold     │ cooling           │ 174 │
  │ ZOE      │ +10.7%     │ 60.0    │ ↑     │ Hold     │ —                 │ —   │
  │ ADBE     │ −0.0%      │ 49.8    │ ↓     │ Watch    │ < SMA50           │ 18  │
  │ BIRK     │ −1.5%      │ 41.3    │ ↓     │ Watch    │ MACD bearish      │ 232 │
  │ GSK      │ −5.6%      │ 47.2    │ ↓     │ Watch    │ Q3 out: −4.8%     │ 31  │
  │ LULU     │ −6.8%      │ 58.1    │ ↑     │ Hold     │ patience ~11-03   │ 23  │
  │ ERO      │ −7.5%      │ 42.3    │ ↓     │ Watch    │ $31.50 stop       │ 80  │
  │ QXO-PB   │ −7.6%      │ 44.3    │ ↓     │ Watch    │ MACD bullish      │ —   │
  │ EDEN     │ −7.8%      │ 30.0    │ ↓     │ EXIT     │ Exit day 5; <floor│ —   │
  │ FLUT     │ −14.7%     │ 44.4    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ PRX      │ −16.3%     │ 40.9    │ ↓     │ Watch    │ Exit cleared      │ 539 │
  │ SFM      │ −22.7%     │ 37.3    │ ↓     │ Watch    │ RSI<40; stop $60.85│ 128 │
  │ ORCL (S) │ +6.5%      │ 57.6    │ ↑     │ Watch    │ +10.7% vs short   │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065), not
  Turso's older entry prices.
  MF# is a full-universe rank (~1,350 tickers), unchanged from 10-27. EDEN, ZOE, FLUT and QXO-PB return no rank.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $144.54).
  Signal changes vs 10-27:
  - **PRX: Exit cleared → Watch.** €34.385 (+0.4%), RSI 40.9 is back above 40. It's still below SMA50 (€36.05) with a
    bearish MACD. The trim-15 recommendation lapses; exit everything on a close below €33.03 (3.9% away).
  - **GSK: Hold → Watch.** Q3 results came out today: turnover £8,887m vs £8,547m a year ago, but operating profit fell to
    £2,127m from £2,593m (SEC 6-K). The shares fell 4.8% to 1,831.5p (RSI 47.2), below SMA50 (1,848.6p) and through the
    ~1,848p stop ref. MACD is still bullish. New stop ref: ~1,746p (1.5×ATR).
  - **ORCL short: Hold → Watch.** +10.7% to $144.54 took it back above SMA50 ($142.11) with a bullish MACD cross. The short
    is still +$50 (+6.5%), but it's now $2 below the ~$146.6 price-based stop ref (entry-based ref ~$163.7).
  - **SFM:** −3.7% to $62.00 and RSI 37.3. It's below 40 for the first time since 10-13. The mechanical signal stays Watch
    only because MACD is still bullish. It's 1.9% above the $60.85 hard stop.
  - **EDEN: Exit day 5.** €24.46 (+0.7%, RSI 30.0), still 5.1% below the €25.77 patience floor.
  - ACN +4.1% to €220.10 is overbought again (RSI 70.2) and qualifies as a free ride again (see below). SAP cooled to
    69.1, WKL to 65.5 and REL to 60.7.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.8%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.7% | Healthcare (GSK, ZOE, IQV) 19.3% | Consumer (LULU, SFM, BIRK) 17.2% |
                   Info services (REL, WKL) 15.3% | Industrials (QXO-PB, KLR) 7.7% | Fintech EDEN 6.4% | Internet/SOTP PRX 6.0% |
                   Materials ERO 5.0% | iGaming FLUT 0.4%
                   No sector is above 25%. There's still no staples, energy or communication-services exposure (MO would
                   add staples, AUTO or MONY would add comms).
  Currency split:  EUR 42.0% | USD 39.0% | GBp 19.1% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  EDEN: Full Exit (mechanical Exit, day 5, and **5.1% below the €25.77 patience floor**). €24.46, RSI 30.0, below SMA50
    €28.41, MACD bearish.
  Expected proceeds: ~€1,101. Realized loss ≈ −€93 against the €1,193.85 cost, plus ~€4.48 commission, so no CGT.
    Today's small bounce doesn't change anything. Both the signal and the hard-stop route have said exit since 10-26.

  PRX: no longer an Exit (RSI 40.9, cleared to Watch). Hold, with a full-exit trigger on a close below €33.03. A full exit
    now would be ~€1,032 (≈ −€200 realized).

  SFM: not a mechanical Exit (MACD still bullish), but RSI is back under 40 and the standing 10-01 exit rule still says
    sell. Full exit ~€556 (≈ −€163 realized, no CGT). At minimum, keep the $60.85 hard stop (1.9% below).

  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - SAP (RSI 69.1) still qualifies as a free ride and still covers cost. ACN (RSI 70.2) qualifies again. See FREE RIDE below.
  - ORCL short: back above SMA50. Decide whether to keep the ~$146.6 stop ref or move to the entry-based ~$163.7.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. Nothing is RSI 35–50 above SMA50 with a bullish MACD. KLR (RSI 49.5, above SMA50) is still held back by
  a bearish MACD.

  ── NEW POSITIONS ──────────────────────────────────────
  MO:   Enter at $72.99 (Wed close, RSI 54.9) — Turso screen 5/5, MF#12, corroborated by llm-research
        Stop: $70.84 | Size: €1,000
  AUTO: Enter at ~522p (Wed close, RSI 55.7) — Turso screen 5/5, MF#15, corroborated by llm-research
        Stop: 500.2p | Size: €750
  MONY: Enter at ~198p (Wed close, RSI 57.6) — Turso screen 5/5, MF#14. Either/or with AUTO (same sector, same currency).
        Stop: 187.2p | Size: €750
  Cash is €1,895 before any Exit proceeds, enough for MO plus one UK starter. All three are already active Pending Trade
  Ideas, so no new cards were created (the dedup check skipped them).
  CF is back on the screen (5/5, MF#22) at $119.92, RSI 51.0, but still 2.9% below SMA50 ($123.51). Its 10-18 Pending
  Trade Idea is still open.

INVESTMENT OPPORTUNITIES
  5/5 · MO (S&P 500, Consumer Staples — Altria) — Magic Formula pass, P/E 14.2, EY 11.5%, ROIC 46.1%, yield 6.6% | MF#12
  Entry: $72.99 (Wed close) | Stop: $70.84 (1.5×ATR $1.43) | Size: €1,000 | RSI: 54.9 | MACD: Bullish (Turso 10-27;
    today's recompute shows the line just ticking below signal — watch for confirmation)
  Conviction: MF#12; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 58.
  Portfolio fit: still the top-ranked, most-corroborated name. It fills the book's missing Staples sleeve in USD. It's
    4.2% above SMA50 ($70.02), so it's an at-market entry.

  5/5 · AUTO (FTSE350, Communication Services — Auto Trader Group) — Magic Formula pass, P/E 13.3, EY 10.5%, ROIC 49.0% | MF#15
  Entry: 522p (Wed close) | Stop: 500.2p (1.5×ATR 14.6p) | Size: €750 | RSI: 55.7 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 59.
  Portfolio fit: a new sector with GBp exposure. It dipped 1.1% but is still 3.7% above SMA50 (503p).

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#14
  Entry: ~198p (Wed close) | Stop: 187.2p (1.5×ATR 7.2p) | Size: €750 | RSI: 57.6 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 60.
  Portfolio fit: the cheaper of the two UK marketplaces, but less corroborated. Take AUTO or MONY, not both.

  Also considered: CF (5/5, below SMA50), APA, EOG and TMV (5/5 but RSI ~68–69, near-extended; TMV adds Tech at 22.7%),
    DNLM (5/5, exited in Sept at a loss), ACN (5/5, already held), RMV (4/5, no MF pass).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €211.20 → ~€1,056 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€422
  After CGT (€78.22 on €372.50 gain) and commission (~€4.48), net cash is ~€973, which fully recovers the cost (+€16).
  Status: **Execute now (recommended).** RSI 69.1 is still near overbought. The cushion is shrinking (+€25 on 10-27,
    +€16 now), and below ~€207.40 the net proceeds would no longer cover the cost.

  ACN: Sell 4 of 6 shares at €220.10 → ~€880 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€440
  After CGT (€66.36 on €316.00 gain) and commission, net is ~€810, which is €37 short of full cost recovery after tax.
  Status: **Monitor, lean execute.** It qualifies again (it needs to stay above €211.65) and RSI 70.2 is overbought. It
    would only fully cover cost after tax above ~€231.80.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€751).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€378).

PORTFOLIO RISKS TO WATCH
  - The bearish overlay was hit hard again: the puts are now ~€1,030 against €2,176 cost (−€1,146), and the ORCL short is
    down to +€45. In two sessions ORCL went from $126 to $144.54 (now above SMA50, MACD bullish), and NBIS went from
    $153 to $182. The ORCL put has 51 days left, at $3.08 est. vs a $11.31 premium. Decide whether the ORCL bear
    thesis still holds or whether to cut the short at the ~$146.6 stop ref.
  - Downside cluster: EDEN (Exit day 5, below its floor), SFM (RSI 37.3, 1.9% above its hard stop), PRX (RSI only 0.9
    pts above the Exit line, 3.9% above €33.03), plus ERO, QXO-PB, BIRK, ADBE, FLUT and now GSK all below SMA50 (~45% of
    the long book).
  - GSK's post-Q3 drop (−4.8%) on a fall in operating profit took it below SMA50. New stop ref ~1,746p.
  - Catalysts: IQV and SFM Q3 (late Oct, tbc), FLUT 11-12. The cause of EDEN's slide since 10-21 is still unconfirmed.
  - Data: Turso still lags (US on 10-27, KLR/REL 10-26). This briefing used direct yfinance Wednesday closes, and the
    wiki price cells show Turso's values.

NEXT ACTIONS
  1. EDEN: execute the Full Exit (~€1,101, ≈ −€93). Day 5 of Exit and 5.1% below the €25.77 floor.
  2. SAP: execute the 5-share free ride (~€973 net, full cost recovery plus €16, 2 shares free) before the cushion goes.
  3. ORCL short: decide whether to honour the ~$146.6 stop ref after Wednesday's +10.7% (close $144.54).
  4. SFM: exit (~€556), or keep the $60.85 hard stop strictly.
  5. PRX: hold; exit all 30 on a close below €33.03. GSK: hold with a new stop ref of ~1,746p.
  6. Optional entries: MO at market ($72.99); AUTO at ~522p or MONY at ~198p (one, not both). Approve or reject them
     in the Pending Trade Ideas panel, and decide on the CF idea.
  7. ACN: free ride qualifies again (sell 4, keep 2; ~€810 net). Execute if it extends above ~€225 with RSI > 70.
  8. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
