════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-20
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Pipeline health: OK, all tracked tasks healthy. This is Tuesday night's 23:30 slot.
Price source: Turso only has Mon 10-19 closes for US names and ACN. For UK holdings (KLR, GSK, REL) and most EU
holdings (SAP, EDEN, PRX, WKL, ZOE), plus QXO-PB, Turso is still on Fri 10-16 closes: their 10-19 bars didn't land
at this morning's 07:17 refresh. So every figure below uses a direct yfinance pull of **Tue 10-20 closes**, with
RSI(14), SMA50 and MACD recomputed from that data. ACN uses the Xetra CSA.DE listing and ZOE uses ZOE.DE. The wiki
price cells (synced from Turso) will lag this briefing until the UK/EU bars land.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Data quality (check_data_quality.py, finished after the first write): 607 auto-recovered and 230 still failing.
The missing UK/EU technicals for holdings and candidates were recovered automatically via yfinance: GSK, REL, KLR,
SAP, EDEN, WKL, PRX, ZOE, QXO-PB, MEGP, MONY and NEM. So Turso should now match the 10-20 figures used here.
The failures relevant to holdings are all known, repeated ones:
  - ACN and ZOE fundamentals: no sa_prefix, 11 consecutive failures (hence no MF#).
  - QXO-PB fundamentals: no data from any source, 11 consecutive failures.
  - NBIS option_mark: missing strike, expiry and option type, 39 consecutive failures. This needs a manual Turso fix.
No other STILL FAILING ticker is a holding or one of today's candidates.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€20,939 (estimated: long equity €17,385 + options ~€1,554 + ORCL short unrealized +€104 + cash €1,895)
                    −€94 vs 10-19's €21,033. Long equity gained €137 on two sessions of moves (ACN +5.6%, KLR +6.1%,
                    ADBE +4.7%, LULU +2.9%; ERO −4.4%, EDEN −2.8%). Options lost ~€219 as ORCL, PLTR and NBIS
                    bounced and theta kept working. The ORCL short gave back ~€13.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +63.3%
  Worst Performer:  SFM −19.3% (FLUT −14.3%, PRX −13.4%, LULU −11.4%)
  Largest Position: LULU (9.2% of long book; GSK 9.0%, SAP 8.1%, REL 8.0%)
  FX:               EUR/USD 1.1240 | GBP/EUR 1.1904 | Prices are Tue 10-20 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +63.3%     │ 55.6    │ ↑     │ Watch    │ Q3 late Oct (tbc) │ 602 │
  │ ACN      │ +51.7%     │ 76.1    │ ↑     │ Hold     │ overbought; FR ✓  │ —   │
  │ SAP      │ +47.4%     │ 68.3    │ ↑     │ Hold     │ Q3 ~10-21 (tbc)   │ 310 │
  │ KLR      │ +34.4%     │ 55.1    │ ↑     │ Watch    │ rebound; free     │ 53  │
  │ WKL      │ +17.8%     │ 78.7    │ ↑     │ Hold     │ overbought        │ 69  │
  │ REL      │ +13.3%     │ 77.7    │ ↑     │ Hold     │ overbought        │ 174 │
  │ ZOE      │ +12.4%     │ 74.9    │ ↑     │ Hold     │ overbought        │ —   │
  │ EDEN     │ +10.1%     │ 55.6    │ ↑     │ Hold     │ Q3 rev ~10-21 tbc │ —   │
  │ ADBE     │ +2.8%      │ 58.2    │ ↑     │ Hold     │ SMA50 reclaimed   │ 18  │
  │ BIRK     │ +2.2%      │ 46.0    │ ↓     │ Watch    │ —                 │ 232 │
  │ GSK      │ −3.7%      │ 56.6    │ ↑     │ Hold     │ Earnings 10-28    │ 31  │
  │ ERO      │ −5.5%      │ 39.1    │ ↓     │ EXIT     │ new mech. Exit    │ 80  │
  │ QXO-PB   │ −8.6%      │ 40.2    │ ↓     │ Watch    │ 0.2 from Exit     │ —   │
  │ LULU     │ −11.4%     │ 52.0    │ ↓     │ Watch    │ reassessed 10-20  │ 23  │
  │ PRX      │ −13.4%     │ 47.5    │ ↓     │ Watch    │ —                 │ 539 │
  │ FLUT     │ −14.3%     │ 44.3    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ SFM      │ −19.3%     │ 41.1    │ ↓     │ Watch    │ Q3 late Oct (tbc) │ 128 │
  │ ORCL (S) │ +15.2%     │ 42.6    │ ↓     │ Hold     │ short working     │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses Turso entry prices. KLR/WKL entries in Turso (2,418p / €71.08) differ slightly from the reconciled
  real fills (2,400p / €70.88), so the reconciled P&L is ~+1pt higher for KLR and +0.3pt higher for WKL.
  MF# is unchanged vs 10-19 (full-universe ranks, ~1,350 tickers).
  ORCL (S) P&L is the short's gain on entry ($154.552 → $131.14).
  Signal changes vs 10-19:
  - ERO: Watch → **Exit** ($32.90, −4.4% on the day, RSI 39.1, below SMA50 $36.09, MACD bearish).
  - ADBE: Watch → Hold (back above SMA50 at $256.73).
  - EDEN, GSK and IQV are unchanged. KLR is out of near-Exit territory (RSI 40.1 → 55.1, back above SMA50).

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.2%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.1% | Healthcare (GSK, ZOE, IQV) 19.2% | Consumer (LULU, BIRK, SFM) 16.7% |
                   Info services (REL, WKL) 15.2% | Industrials (QXO-PB, KLR) 7.6% | Fintech EDEN 7.6% | Internet/SOTP PRX 6.2% |
                   Materials ERO 5.1% | iGaming FLUT 0.4%
                   The book is balanced, with no sector above 25%. Tech/Software is creeping up on ACN's run. There's
                   still no energy or staples exposure. The bearish overlays (ORCL short plus ORCL, PLTR and NBIS puts)
                   are the only AI-infrastructure exposure.
  Currency split:  EUR 42.6% | USD 38.2% | GBp 19.2% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  ERO: Full Exit (mechanical Exit, first day) — $32.90 close broke down −4.4%. All three Exit conditions are met:
    RSI 39.1, price 8.8% below SMA50 $36.09, MACD bearish. The copper thesis isn't broken by one day, but the trend is.
  Expected proceeds: ~$987 (≈€878). Realized loss ≈ −€51 plus ~€4.45 commission, so no CGT.
    Alternative if you want to give the thesis a few more days: a hard stop at $31.50 (≈1.5×ATR below Tuesday's
    close) and a reassessment by ~10-27.
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - ACN (RSI 76.1, +51.7%) now qualifies as a free ride. See FREE RIDE below; that's the preferred way to take profit.
  - WKL 78.7, REL 77.7, ZOE 74.9 and ACN 76.1 are all overbought together, about 29% of the long book.
  - SFM: −19.3%, below SMA50 ($72.93), RSI 41.1. Keep the hard stop at $60.85. A full exit (≈€576 proceeds,
    realized loss ≈ −€137, no CGT) remains Mike's call.
  - LULU reassessment (due 10-20): closed $99.94 (RSI 52.0, MACD bullish), 12.9% above the $88.54 trim trigger and
    recovering toward SMA50 ($105.57). No trim is warranted. Extend the patience window to ~11-03 and keep the
    trim-9-shares-below-$88.54 rule.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. PRX (RSI 47.5, MACD bullish) still fails only because it's below SMA50 (€36.47). An add would
  trigger on a close above ~€36.50. BIRK (RSI 46.0, MACD bullish) is in the same position below SMA50 ($33.86).

  ── NEW POSITIONS ──────────────────────────────────────
  MEGP: Enter at ~119.4p (Tue close, sitting on SMA50 119.9p) — Turso screen 5/5, MF#13, RSI 52 | Stop: 111.3p | Size: €1,000
  NEM:  Enter at ~$116.81 (Tue close, near MA20 $117.40) — Turso screen 5/5, MF#21, RSI 48 | Stop: $111.88 | Size: €1,000
  MONY: limit 195p (last 200.6p, RSI 65) — Turso screen 5/5, MF#14 | Stop: 184.2p | Size: €750
  The cash is €1,895 before ERO's proceeds. Taking the ERO exit (+≈€874 net) would fund two full entries. Without it,
  MEGP + MONY (~€1,750) fits. MEGP and MONY were already active Pending Trade Ideas, so no duplicate cards were
  created. NEM is a new card. CF dropped out: it fell to $118.51 on 10-19 and is now rated Hold, not Buy.

INVESTMENT OPPORTUNITIES
  5/5 · MEGP (FTSE350, Industrials — Me Group International) — Magic Formula pass, P/E 8.4, EY 16.8%, ROIC 27.8% | MF#13
  Entry: 119.4p (10-20 close) | Stop: 111.3p (1.5×ATR 5.4p) | Size: €1,000 | RSI: 52.4 | MACD: Bullish
  Conviction: MF#13; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 56 (Turso, 10-16).
  Portfolio fit: GBp exposure in a 7.6% Industrials sleeve, with no AI or software link. It's testing SMA50 from above,
    so a close below ~117p would weaken the setup.

  5/5 · NEM (S&P 500, Materials — Newmont) — Magic Formula pass, P/E 14.6, EY 12.2%, ROIC 27.9%, yield 0.9% | MF#21
  Entry: ~$116.81 (10-20 close); a close above SMA50 $121.85 would confirm | Stop: $111.88 (1.5×ATR 3.29) | Size: €1,000 | RSI: 47.9 | MACD: Bullish
  Conviction: MF#21; Magic Formula pass; bullish MACD; RSI healthy at 50.
  Portfolio fit: a gold major that's uncorrelated with the AI, consumer and quality names. It hedges the same risk-off
    case as the put overlay. Materials would go to ~11% if ERO is kept, or stay ~6% if ERO is exited (effectively a swap
    from copper to gold).

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#14
  Entry: pullback to ~195p, near SMA50 193.4p (last 200.6p) | Stop: 184.2p | Size: €750 starter | RSI: 65.0 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD.
  Portfolio fit: a new sector for the book, with GBp exposure. It's a starter size because RSI is at 65.

  Also considered: MO (5/5, MF#12, corroborated by llm-research, but RSI 70.3 is extended; it stays an active Pending
    idea at the $72.00 limit and would add the missing Staples exposure), TMV (5/5, but Tech/Software is already 22.1%),
    TRN (5/5, UK consumer, adds to a 16.7% consumer sleeve), AUTO (4/5, RSI 73.8), APA/EOG (4/5, RSI 70–71, energy,
    EOG already pending at $152.50), SAGA/EXPE/RMV (4/5, no MF pass).

FREE RIDE OPPORTUNITIES
  ACN: Sell 4 of 6 shares at €214.10 → ~€856 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€428
  After CGT (€61.32 on €292.00 gain) and commission (~€4.45), net cash is ~€790, ~€56 short of full cost recovery.
  Status: **Consider executing now.** This is newly eligible (+51.7%, 2 free shares). RSI 76.1 is overbought, and
    there's no Trim signal only because weight is 7.4%. That meets the "RSI above 65 and approaching overbought" bar.

  SAP: Sell 5 of 7 shares at €201.55 → ~€1,008 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€403
  After CGT (€68.09 on €324.25 gain) and commission (~€4.45), net cash is ~€935, ~€22 short of full cost recovery.
  Status: Monitor, leaning execute. RSI 68.3 is approaching overbought, and Q3 lands ~10-21 (tbc). Selling before the
    print locks in cost recovery; holding through it keeps the upside on all 7 shares.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€715).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€387).

PORTFOLIO RISKS TO WATCH
  - Overbought cluster: WKL 78.7, REL 77.7, ACN 76.1 and ZOE 74.9 (plus SAP 68.3) make up ~37% of the long book. A
    rotation out of quality and defensives would hit several at once.
  - Losers still below SMA50: SFM, FLUT, LULU, PRX, ERO, QXO-PB and BIRK (~34% of the long book). ERO has now tipped
    into Exit, and QXO-PB is 0.2 RSI points away from following it.
  - The bearish overlay (~€1,658: puts ~€1,554 + ORCL short +€104) lost ~€230 in two sessions as AI-infra names
    bounced (ORCL $131.14, PLTR $192.60, NBIS $171.45). The ORCL put has 59 days left and is decaying fastest. The NBIS
    put (~€534) is still a hand estimate at 80% vol, because its Turso row lacks strike and expiry.
  - Catalyst-heavy fortnight: SAP and EDEN ~10-21, IQV and SFM late Oct, GSK 10-28, FLUT 11-12.
  - Data: Turso is missing 10-19 UK/EU bars. If the 10-21 07:17 refresh doesn't backfill them, check_data_quality.py
    should flag them.

NEXT ACTIONS
  1. ERO: decide between a full exit (~€878 proceeds, −€51 realized) and a hard stop at $31.50 with a reassessment ~10-27.
  2. ACN: consider the 4-share free-ride sale (~€856 gross, ~€790 net) while RSI is 76. It leaves 2 free shares.
  3. SAP Q3 ~10-21 (tbc): decide before the print whether to take the 5-share free ride.
  4. Optional entries: MEGP at ~119p (stop 111.3p, €1,000), NEM at ~$117 (stop $111.88, €1,000), MONY limit 195p
     (stop 184.2p, €750). Approve or reject in the Pending Trade Ideas panel. Funding two depends on the ERO decision.
  5. LULU: patience window extended to ~11-03. Trim 9 shares only on a close below $88.54.
  6. GSK earnings 10-28. Keep the stop near 1,766p.
  7. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
