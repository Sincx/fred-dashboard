════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-25
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: the scheduled 23:30 run (started 23:40 CET), after the US close.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Prices: all signals, P&L and values use **Wed 11-25 closes from a direct yfinance pull**, computed with the pipeline's own
RSI, MACD and SMA code. Turso's newest rows are still 11-24 (refresh-technicals runs at 07:17), so they were not used.
FX: EUR/USD 1.0981 | GBP/EUR 1.1943.
Market: SPY −0.3%, QQQ −0.7%, after an intraday low near SPY 695 that recovered to 716.70. Nvidia −3.9% to $149.30, Oracle
−5.1% to $103.88. No dated report explaining the day was checked. US markets are shut Thu 11-26 (Thanksgiving) and close
early Fri 11-27.
Options: Black-Scholes on Wednesday's closes (ORCL 63.4% vol, PLTR 65.8%; NBIS a hand estimate at 80% vol because its Turso
row still has no strike, expiry or type).
Pipeline health: OK on all tracked tasks. Row-level data quality: check_data_quality.py was started in the background and
had printed nothing by write time (normal for this step). Last night it reported 227 failing rows, 112 needing manual
review, including ACN, ZOE and QXO-PB fundamentals and the NBIS option mark. None affects a price or TA figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€23,225 (estimated: long equity €16,901 + options ~€4,198 + ORCL short unrealized +€231 + cash €1,895)
                    **+€523 vs €22,702 on Tuesday's closes.** Long book +€96 (QXO-PB +€76, ACN +€32, LULU +€21, ERO +€16,
                    GSK +€15; PRX −€45, EDEN −€33, KLR −€10); the three puts +€402 (ORCL +€369, NBIS +€78, PLTR −€44);
                    ORCL short +€26.
  Available Cap:    €1,895.31 cash
  Best Performer:   ACN +54.8% (IQV +53.2%, SAP +38.9%)
  Worst Performer:  ERO −35.7% (SFM −33.5%, PRX −28.7%, FLUT −23.1%)
  Largest Position: LULU (10.4% of long book; GSK 9.5%, REL 8.6%, SAP 7.9%, ACN 7.8%, WKL 7.7%)
  FX:               EUR/USD 1.0981 | GBP/EUR 1.1943 | Prices are Wed 11-25 closes (direct yfinance)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ ACN      │ +54.8%     │ 53.3    │ ↑     │ Watch    │ FR live; 12-17    │ 77  │
  │ IQV      │ +53.2%     │ 38.9    │ ↓     │ EXIT     │ 3rd close RSI<40  │ 701 │
  │ SAP      │ +38.9%     │ 38.1    │ ↓     │ EXIT     │ below SMA50       │ 425 │
  │ WKL      │ +22.1%     │ 52.9    │ ↑     │ Watch    │ MACD bearish      │ 146 │
  │ ZOE      │ +17.9%     │ 56.4    │ ↑     │ Watch    │ MACD bearish      │ —   │
  │ REL      │ +17.5%     │ 59.0    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ KLR      │ +13.3%     │ 29.3    │ ↓     │ EXIT     │ < 2,900p rule hit │ 57  │
  │ BIRK     │ +11.4%     │ 53.2    │ ↑     │ Watch    │ MACD bearish      │ 268 │
  │ GSK      │ −1.1%      │ 57.6    │ ↑     │ Watch    │ MACD bearish      │ 47  │
  │ LULU     │ −4.8%      │ 53.1    │ ↑     │ Watch    │ earnings 12-08    │ 35  │
  │ QXO-PB   │ −5.3%      │ 52.0    │ ↓     │ Watch    │ $35.10 regained   │ —   │
  │ EDEN     │ −6.7%      │ 44.3    │ ↓     │ Watch*   │ < €25.77 floor    │ —   │
  │ ADBE     │ −6.8%      │ 45.5    │ ↓     │ Watch    │ earnings 12-09    │ 23  │
  │ FLUT     │ −23.1%     │ 38.3    │ ↓     │ EXIT     │ 1 share           │ —   │
  │ PRX      │ −28.7%     │ 26.8    │ ↓     │ EXIT     │ −4.9% on results? │ 596 │
  │ SFM      │ −33.5%     │ 47.6    │ ↓     │ Watch*   │ < $60.85 stop     │ 132 │
  │ ERO      │ −35.7%     │ 32.2    │ ↓     │ EXIT     │ < $31.50 stop     │ 71  │
  │ ORCL (S) │ +32.8%     │ 37.8    │ ↓     │ Watch    │ earnings 12-14    │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  * Mechanical Watch, but a standing stop or floor is broken, so the exit is still recommended. P&L% uses the reconciled
  real fills. Earnings dates are Yahoo's calendar, not confirmed with the companies. MF# is the full-universe rank
  (unchanged from Tuesday); EDEN, ZOE, FLUT and QXO-PB have none, and ACN's is from its US listing.
  Changes vs Tuesday's closes:
  - **QXO-PB: +8.4% to $36.28** on 1.7× volume, back above the $35.10 stop reference and $0.12 under SMA50 ($36.40).
    The stop question lapses for now.
  - **PRX: −4.9% to €29.27** on 1.7× volume, RSI 26.8, on the day Yahoo listed for H1 results. A web search found no
    coverage of a 2026 release, so the cause is unconfirmed. €3.76 under the €33.03 exit line.
  - **EDEN: −2.9% to €24.75**, back down and now €1.02 under the €25.77 floor.
  - **KLR: −2.9% to 2,718p**, RSI 29.3, fourth straight close under 2,900p.
  - **IQV: RSI 38.9**, third close under 40 ($251.12).
  - ACN +2.5% to €218.40 (best performer again, +54.8%). FLUT +5.1% and ERO +2.9% bounced but stay mechanical Exits.
  - ORCL −5.1% to $103.88 helps both bearish ORCL legs: the put is now $16.12 in the money.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.4%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 21.9% | Healthcare (GSK, ZOE, IQV) 20.2% | Consumer (LULU, SFM, BIRK) 18.1% |
                   Info services (REL, WKL) 16.3% | Industrials (QXO-PB, KLR) 7.8% | Fintech EDEN 6.6% | Internet/SOTP PRX 5.2% |
                   Materials ERO 3.6% | iGaming FLUT 0.4%
  Currency split:  EUR 41.7% | USD 38.3% | GBp 20.0% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  Recommendations only; nothing has been executed. Proceeds are at Wednesday's closes. No Trim signals: no position is
  ≥20% weight, so the Trim rule can't fire.

  ERO: **Full Exit.** RSI 32.2, below SMA50 ($32.11), MACD bearish; $9.13 under the $31.50 stop.
  Expected proceeds: ~$671 (~€611). Realized ≈ −€340. No CGT.
  SFM: **Full Exit on the stop** ($60.85, broken since 10-29). RSI 47.6, below SMA50 ($59.65), MACD bullish.
  Expected proceeds: ~$533 (~€486). Realized ≈ −€244. No CGT.
  PRX: **Full Exit**, on the mechanical signal and the €33.03 rule. Results day has passed with a −4.9% close.
  Expected proceeds: ~€878. Realized ≈ −€354. No CGT.
  EDEN: **Full Exit on the floor rule** (below €25.77 since 11-17). RSI 44.3, below SMA50 (€26.56), MACD bullish.
  Expected proceeds: ~€1,114. Realized ≈ −€80. No CGT.
  IQV: **Sell the 3 free shares** (RSI 38.9, below SMA50 $265.90, MACD bearish).
  Expected proceeds: ~$753 (~€686) gross; gain ~€238, CGT €50, commission ~€5, net ~€631.
  SAP: **Trim ~50% (4 of 7).** Mechanical Exit; the rest on a close below €176.9.
  Expected proceeds: ~€759 gross; gain ~€212, CGT €45, commission ~€5, net ~€710.
  KLR: **Full Exit of the 10 free shares; the 2,900p rule fired.** ~€325 gross; gain ~€38, CGT €8, net ~€312. The
    commission is ~1.4% of value, above the 1% guideline, so it's a small judgement call.
  ADBE: no sale. $232.83, $2.63 above the $230.20 stop; sell all 5 (~€1,060) only on a close below it.
  FLUT: mechanical Exit, no action. One share worth ~€64; a flat $5 commission would be ~7%.

  ORCL put: **Close rule not fired, but worth a decision now.** ORCL −5.1% to $103.88, $16.12 in the money. Mark ~$17.63/sh
    (~€1,605), 163% of the €982 cost, 23 days left. Closing nets ≈ +€488 profit after CGT (~€131) and commission. Earnings
    12-14 (Yahoo) fall four days before expiry, and an ORCL bounce like 11-23's +12% would take a large part of it back.
  NBIS put: **~4.2× cost and $5.01 in the money — I still lean towards taking it.** NBIS −2.7% to $84.99. Mark ~$21.88/sh
    (~€1,993) vs €479 cost; closing nets ≈ +€1,191 profit after CGT (~€318) and commission. The 80% vol input is well below
    realized vol (128%), so the real bid may be higher. 204 days left. Your call; check the bid (no live quote here).
  PLTR put: Hold. PLTR +1.5% to $163.59, mark ~$6.60/sh (~€601), 84% of €715 cost, 114 days left.
  ORCL short: Hold. Cover the 5 shares on a close above ~$130.03. Unrealized +$253 (+€231, +32.8%).

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. No name combines RSI 35–50, price above SMA50 and a bullish MACD.

  ── NEW POSITIONS ──────────────────────────────────────
  GIS:  Enter at ~$36.25 (+1.9%, RSI 59.5, 7.3% above SMA50) — Turso screen 4/5, MF#163, MACD bullish
        Stop: $34.50 | Size: €750 (starter: no Magic Formula pass)
  IAG:  Only on a bullish MACD re-cross: ~436.8p (−2.4% on 3.2× volume, RSI 49.7, 1.7% above SMA50) — 5/5 on Tuesday's
        screen, MF#16
        Stop: 418.3p | Size: €1,000
  Cash is €1,895, and the recommended sales above would add ~€4,700 net. Nothing is urgent ahead of a holiday-thinned
  session. GIS was recorded as a new Pending Trade Idea; IAG already has an active card (dedup skipped it), and the levels
  above replace its card's levels. STR's card stays open, but it is now 2.7% below SMA50 with a bearish MACD.

INVESTMENT OPPORTUNITIES
  4/5 · GIS (S&P 500, Consumer Staples — General Mills) — Magic Formula ranked (no pass), EY 9.1%, ROIC 13.8% | MF#163
  Entry: ~$36.25 | Stop: $34.50 (1.5×ATR $1.17) | Size: €750 | RSI: 60 | MACD: Bullish
  Conviction: MF#163; Magic Formula ranked (no pass); bullish MACD; RSI healthy at 60.
  Portfolio fit: the book has no Consumer Staples. Adds USD (38%). P/E was not available from the screen.

  4/5 live (5/5 on the screen) · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula
        pass, P/E 7.2, EY 20.1%, ROIC 27.5% | MF#16
  Entry: ~436.8p on a bullish MACD re-cross | Stop: 418.3p (1.5×ATR 12.4p) | Size: €1,000 | RSI: 50 | MACD: Bearish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation.
  Portfolio fit: Industrials is 7.8%. Adds GBp. Cyclical and fuel-sensitive. Wednesday's 3.2× volume drop turned the MACD
  bearish, so it misses the screen's MACD point on live data.

  Also considered: **SUBC** (4/5, MACD bullish) — skipped because Subsea7 is being absorbed into Saipem (completion was
    expected in H2 2026 as of an August report; status not checked), so its price follows the deal. **SYY** (4/5, P/E 22.7)
    — same sector as GIS, one staples name is enough. **EXPD** (P/E 29). **STR**, **BAMNB**, **BMY**, **BBY** (MACD bearish).
    **GAMA** (5/5, but a 2.6p ATR at 0.12× volume looks bid-pinned). **AF** (19% above SMA50) and **SONY** (RSI 73),
    extended. The screen's ratings are on Tuesday's Turso prices; the figures above are Wednesday's live closes.

FREE RIDE OPPORTUNITIES
  ACN: Sell 4 of 6 shares at €218.40 → ~€874 proceeds covers cost basis (€847)
  Free position: 2 shares at zero effective cost | Current value: ~€437
  Status: Monitor — RSI 53.3. After CGT (€65) and commission it nets ~€804, so cost is covered before tax only.

  SAP: covering the €956.90 cost takes 6 of 7 shares, leaving 1 (needs 2). See the 4-share trim above.
  WKL: P&L +22.1%, under the 25% threshold; requalifies above ~€88.60.
  IQV: ✅ Already free-ridden (3 shares, ~€686; sale rule confirmed, see above).
  KLR: ✅ Already free-ridden (10 shares, ~€325; sale rule fired, see above).

PORTFOLIO RISKS TO WATCH
  - Seven recommended sales total ~€4,859 gross, 29% of the long book: about −€1,018 realized on the four losers and
    +€488 on IQV, SAP and KLR, so roughly −€530 net before CGT.
  - Ten of 17 longs (~45% of the book) are below SMA50, and 15 of 17 have a bearish MACD.
  - The bearish overlay (3 puts plus the ORCL short) is ~€4,429, 19.1% of net value, up from 17.6%. Two-thirds of it is in
    the ORCL put (23 days left) and the NBIS put (a hand estimate). Another AI bounce would cut it quickly.
  - PRX fell 4.9% on its expected results day without a confirmed cause; ERO, PRX and SFM are names Burry was buying on
    11-19 against our stop-rule exits.
  - Event risk: US closed 11-26 and half-day 11-27; LULU 12-08, ADBE 12-09, ORCL 12-14, ACN 12-17.
  - No stop orders are in place on any position. Causes of today's single-stock moves were not established.

NEXT ACTIONS
  1. ERO, SFM, PRX: execute the Full Exits (~€1,975 together, ≈ −€938).
  2. ORCL put: decide whether to bank ≈ €488 net now (~€1,605 mark, 163% of cost, 23 days left) or hold under $120 into 12-14.
  3. NBIS put: check the real bid and consider banking ≈ €1,191 net (~€1,993 mark, 4.2× cost).
  4. IQV: sell the 3 free shares (~€631 net).
  5. SAP: sell 4 of 7 (~€710 net); the other 3 on a close below €176.9.
  6. EDEN: sell all 45 (~€1,114, ≈ −€80); it is €1.02 under the floor.
  7. KLR: sell the 10 free shares (~€312 net), or accept the thin economics and reset the line.
  8. ADBE: hold; sell 5 on a close below $230.20. QXO-PB: back above $35.10, hold.
  9. ORCL short: cover above ~$130.03. PLTR put: hold.
  10. Optional entry: GIS starter ~$36.25 (€750). IAG only on a MACD re-cross. Fill in the NBIS put's strike, expiry and type in Turso.
════════════════════════════════════════════════════════
