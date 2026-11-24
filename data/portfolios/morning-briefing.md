════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-24
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: the scheduled 23:30 run, replacing this afternoon's late catch-up briefing (Monday closes).
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Prices: all signals, P&L and values use **Tue 11-24 closes from a direct yfinance pull**, computed with the pipeline's own
RSI, MACD and SMA code. Turso's 11-24 rows are still this afternoon's ~16:00 mid-session prints, so they were not used.
FX: EUR/USD 1.0970 | GBP/EUR 1.1953.
Market: SPY −0.5%, QQQ −2.0%, Nvidia −5.9% to $155.38 after Monday's rebound. No dated report explaining the day was found.
Options: Black-Scholes on Tuesday's closes (ORCL 63.0% vol, PLTR 65.7%; NBIS a hand estimate at 80% vol because its Turso
row still has no strike, expiry or type).
Pipeline health: OK on all tracked tasks. Row-level data quality (added after the retry finished): nothing auto-recovered.
227 rows still fail, 112 of them at 3+ consecutive failures (NEEDS MANUAL REVIEW): for holdings, ACN, ZOE and QXO-PB
fundamentals (32 in a row) and the NBIS option mark (98). BIRK, ERO and SAP (US) filings and PRX's EU valuation also failed. None affects a price or TA figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€22,702 (estimated: long equity €16,805 + options ~€3,796 + ORCL short unrealized +€205 + cash €1,895)
                    **+€832 vs €21,870 on Monday's closes.** Long book +€295 (ACN +€63, REL +€45, GSK +€42, WKL +€39, ADBE +€37;
                    ERO −€44, PRX −€20); the three puts +€519 (NBIS +€331, ORCL +€230, PLTR −€42); ORCL short +€19.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +53.7% (ACN +51.0%, SAP +39.0%)
  Worst Performer:  ERO −37.5% (SFM −35.4%, FLUT −26.9%, PRX −25.0%)
  Largest Position: LULU (10.4% of long book; GSK 9.5%, REL 8.6%, SAP 7.9%, WKL 7.7%, ACN 7.6%)
  FX:               EUR/USD 1.0970 | GBP/EUR 1.1953 | Prices are Tue 11-24 closes (direct yfinance)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +53.7%     │ 39.5    │ ↓     │ EXIT     │ RSI<40 confirmed  │ 701 │
  │ ACN      │ +51.0%     │ 49.7    │ ↑     │ Watch    │ FR back; 12-17    │ 77  │
  │ SAP      │ +39.0%     │ 38.3    │ ↓     │ EXIT     │ below SMA50       │ 425 │
  │ WKL      │ +22.0%     │ 52.9    │ ↑     │ Watch    │ MACD bearish      │ 146 │
  │ ZOE      │ +18.6%     │ 58.0    │ ↑     │ Watch    │ MACD bearish      │ —   │
  │ REL      │ +16.9%     │ 57.8    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ KLR      │ +16.7%     │ 32.9    │ ↓     │ EXIT     │ < 2,900p rule hit │ 57  │
  │ BIRK     │ +9.9%      │ 51.2    │ ↑     │ Watch    │ MACD bearish      │ 268 │
  │ GSK      │ −2.0%      │ 55.0    │ ↑     │ Watch    │ regained SMA50    │ 47  │
  │ EDEN     │ −4.0%      │ 49.3    │ ↓     │ Watch*   │ < €25.77 floor    │ —   │
  │ LULU     │ −6.0%      │ 51.1    │ ↑     │ Watch    │ earnings 12-08    │ 35  │
  │ ADBE     │ −7.1%      │ 44.9    │ ↓     │ Watch    │ stop regained     │ 23  │
  │ QXO-PB   │ −12.6%     │ 42.7    │ ↓     │ Watch    │ < $35.10 stop ref │ —   │
  │ PRX      │ −25.0%     │ 31.1    │ ↓     │ EXIT     │ H1 Wed 11-25      │ 596 │
  │ FLUT     │ −26.9%     │ 29.7    │ ↓     │ EXIT     │ 1 share           │ —   │
  │ SFM      │ −35.4%     │ 43.7    │ ↓     │ Watch*   │ < $60.85 stop     │ 132 │
  │ ERO      │ −37.5%     │ 29.7    │ ↓     │ EXIT     │ < $31.50 stop     │ 71  │
  │ ORCL (S) │ +29.2%     │ 40.9    │ ↓     │ Watch    │ earnings 12-14    │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  * Mechanical Watch, but a standing stop or floor is broken, so the exit is still recommended. P&L% uses the reconciled
  real fills. Earnings dates are Yahoo's calendar, not confirmed with the companies. MF# is the full-universe rank;
  EDEN, ZOE, FLUT and QXO-PB have none, and ACN's is from its US listing.
  Changes vs Monday's closes:
  - **ADBE: EXIT → Watch; the sale lapses.** +3.6% to $232.08, back above the $230.20 stop, by $1.88.
  - **IQV: RSI < 40 confirmed** for a second close (39.5 at $252.01). It faded from a $260.36 high.
  - **EDEN: +2.7% to €25.48, still €0.29 under the €25.77 floor** (traded to €26.16). The exit stands, narrowly.
  - **PRX: −2.2% to €30.79**, RSI 31.1, €2.24 under the exit line with results listed for Wednesday.
  - **KLR: −1.6% to 2,800p** on 1.8× volume, third straight close under 2,900p.
  - **ERO: −6.9% to $21.75**, giving back most of Monday's bounce; $9.75 under its stop.
  - **SAP: +2.0% to €190.08** but still a mechanical Exit (RSI 38.3, SMA50 €198.01).
  - GSK +2.5%, regained SMA50 (1,854p) but MACD is bearish. ACN +5.2% (free ride back, thin Xetra volume at 0.23×).

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.4%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 21.8% | Healthcare (GSK, ZOE, IQV) 20.3% | Consumer (LULU, SFM, BIRK) 17.9% |
                   Info services (REL, WKL) 16.3% | Industrials (QXO-PB, KLR) 7.4% | Fintech EDEN 6.8% | Internet/SOTP PRX 5.5% |
                   Materials ERO 3.5% | iGaming FLUT 0.4%
  Currency split:  EUR 42.3% | USD 37.7% | GBp 20.1% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  Recommendations only; nothing has been executed. Proceeds are at Tuesday's closes.

  ERO: **Full Exit.** RSI 29.7, below SMA50 ($32.30), MACD bearish; $9.75 under the $31.50 stop.
  Expected proceeds: ~$653 (~€595). Realized ≈ −€316. No CGT.
  SFM: **Full Exit on the stop** ($60.85, broken since 10-29). RSI 43.7, below SMA50 ($60.00), MACD bullish.
  Expected proceeds: ~$518 (~€472). Realized ≈ −€255. No CGT.
  PRX: **Full Exit**, on the mechanical signal and the €33.03 rule. Results are listed for Wed 11-25.
  Expected proceeds: ~€924. Realized ≈ −€308. No CGT.
  EDEN: **Full Exit on the floor rule** (below €25.77 since 11-17). RSI 49.3, below SMA50 (€26.65), MACD bullish.
  Expected proceeds: ~€1,147. Realized ≈ −€47. No CGT. The weakest case here: a close above €25.77 cancels it.
  IQV: **Sell the 3 free shares; rule confirmed** (RSI 39.5, below SMA50 $266.26, MACD bearish).
  Expected proceeds: ~€689 gross; gain ~€241, CGT €51, commission ~€5, net ~€634.
  SAP: **Trim ~50% (4 of 7).** Mechanical Exit; the rest on a close below €176.9.
  Expected proceeds: ~€760 gross; gain ~€214, CGT €45, commission ~€5, net ~€711.
  KLR: **Full Exit of the 10 free shares; the 2,900p rule fired.** ~€335 gross; gain ~€48, CGT €10, net ~€320. The
    commission is ~1.4% of value, above the 1% guideline, so it's a small judgement call.
  ADBE: no sale. Sell all 5 (~€1,058) only on a new close below $230.20.
  FLUT: mechanical Exit, no action. One share worth ~€61; a flat $5 commission would be ~7%.

  NBIS put: **~4.0× cost and $2.69 in the money — I lean towards taking it.** NBIS −10.7% to $87.31. Mark ~$21.00/sh
    (~€1,915) vs €479 cost; closing nets ≈ +€1,130 profit after CGT (~€302) and commission. The 80% vol input is well below
    realized vol (128%), so the real bid may be higher. It is the largest of the three puts and the mark swung from
    ~€1,583 to ~€1,915 in a day. 205 days left. Your call; check the bid (no live quote was available here).
  ORCL put: **Hold; close rule not fired.** ORCL −3.7% to $109.50, $10.50 in the money. Mark ~$13.56/sh (~€1,236), 126% of
    the €982 cost, 24 days left; closing nets ≈ +€196 profit after CGT and commission. Close on a close above $120, and decide
    before 12-14 earnings (Yahoo date), four days before expiry.
  PLTR put: Hold. PLTR +1.1% to $161.18, mark ~$7.08/sh (~€645), 90% of €715 cost, 115 days left.
  ORCL short: Hold. Cover the 5 shares on a close above ~$130.03. Unrealized +$225 (+€205).
  No Trim signals: no position is ≥20% weight, so the Trim rule can't fire.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. No name combines RSI 35–50, price above SMA50 and a bullish MACD.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG:  Enter at ~447.6p (−1.7%, RSI 55.5, 4.3% above SMA50) — Turso screen 5/5, MF#16
        Stop: 428.0p | Size: €1,000
  STR:  Only on a bullish MACD cross: ~€104.20 (−2.1%, RSI 50.7, 0.3% above SMA50) — 4/5, MF#38
        Stop: €98.70 | Size: €750
  Cash is €1,895. No hurry while the index swings 2–5% a day; half size is reasonable.
  Both already have active Pending Trade Idea cards (dedup skipped them); the levels above replace the cards' levels.
  MONY (MACD bearish), CF (1.4% below SMA50) and NEM (13% below SMA50) stay off. Leave those cards alone.

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula pass, P/E 7.2, EY 20.1%,
        ROIC 27.5% | MF#16
  Entry: ~447.6p | Stop: 428.0p (1.5×ATR 13.0p) | Size: €1,000 | RSI: 56 | MACD: Bullish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD.
  Portfolio fit: Industrials is 7.4%. Adds GBp. Cyclical and fuel-sensitive. Closed on its low of the day.

  4/5 · STR (MORNINGSTAR-EU, Industrials — Strabag) — Magic Formula pass, P/E 12.4, EY 12.7%, ROIC 23.5% | MF#38
  Entry: ~€104.20 on a bullish MACD cross | Stop: €98.70 (1.5×ATR €3.68) | Size: €750 | RSI: 51 | MACD: Bearish
  Conviction: MF#38; Magic Formula pass; corroborated by briefing-recommendation (this task's own earlier pick).
  Portfolio fit: second Industrials name beside IAG, so pick one. Adds EUR, already 42%.

  Also considered: **GAMA** (5/5, MF#70; ATR under 3p looks like a bid-pinned price, not checked). **BAMNB** (MACD bearish).
    **BBY** (4/5, 884p, MACD bullish, only 0.5% above SMA50, no Magic Formula pass). **AF** (RSI 69). **DPZ** (RSI 70) and
    **IPAR** (RSI 72), extended. **SUBC**, **SONY** (no Magic Formula pass). The screen list is on mid-session ratings.

FREE RIDE OPPORTUNITIES
  ACN: Sell 4 of 6 shares at €213.00 → ~€852 proceeds covers cost basis (€847)
  Free position: 2 shares at zero effective cost | Current value: ~€426
  Status: Monitor — RSI 49.7. After CGT (€60) and commission it nets ~€787, so cost is covered before tax only.

  SAP: covering the €956.90 cost takes 6 of 7 shares, leaving 1 (needs 2). See the 4-share trim above.
  WKL: P&L +22.0%, under the 25% threshold; requalifies above ~€88.60.
  IQV: ✅ Already free-ridden (3 shares, ~€689; sale rule confirmed, see above).
  KLR: ✅ Already free-ridden (10 shares, ~€335; sale rule fired, see above).

PORTFOLIO RISKS TO WATCH
  - Seven recommended sales total ~€4,922, 29% of the long book, with about −€424 realized across them before CGT.
  - Ten of 17 longs (~45% of the book) are below SMA50, and 15 of 17 have a bearish MACD.
  - The bearish overlay (3 puts plus the ORCL short) is ~€4,001, 17.6% of net value. Another AI bounce like Monday's would
    cut it quickly; €1,915 of it is a hand estimate on NBIS.
  - Burry's latest post cites 12 past Nasdaq −5%/+5% whipsaws: 11 were lower three days later. A small sample, but a
    reason not to rush entries. On 11-19 he was buying ERO, ADBE, Tencent (PRX's main asset) and SFM calls, against our
    ERO, PRX and SFM exits; those are stop-rule sales, not a verdict on his theses. On 11-20 he sold most of his own
    semiconductor and Nasdaq puts into high volatility.
  - Event risk: PRX 11-25, LULU 12-08, ADBE 12-09, ORCL 12-14, ACN 12-17. US markets close for Thanksgiving on 11-26.
  - No stop orders are in place on any position. Causes of today's single-stock moves were not established.

NEXT ACTIONS
  1. PRX: decide before Wednesday's results; the rule says exit all 30 (~€924, ≈ −€308).
  2. ERO, SFM: execute the Full Exits (~€1,067 together, ≈ −€571).
  3. NBIS put: check the real bid and consider banking ≈ €1,130 net (~€1,915 mark, 4.0× cost).
  4. IQV: sell the 3 free shares (~€634 net); rule confirmed.
  5. SAP: sell 4 of 7 (~€711 net); the other 3 on a close below €176.9.
  6. EDEN: sell all 45 (~€1,147, ≈ −€47) unless it closes back above €25.77.
  7. KLR: sell the 10 free shares (~€320 net), or accept the thin economics and reset the line.
  8. ADBE: hold; sell 5 on a close below $230.20. QXO-PB: decide whether the broken $35.10 reference is a real stop.
  9. ORCL put: hold under $120; decide before 12-14 earnings. ORCL short: cover above ~$130.03. PLTR put: hold.
  10. Optional entry: IAG ~447.6p (€1,000). Fill in the NBIS put's strike, expiry and type in Turso.
════════════════════════════════════════════════════════
