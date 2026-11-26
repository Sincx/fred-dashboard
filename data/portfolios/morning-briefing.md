════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-26
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: the scheduled 23:30 run (started 23:40 CET) on US Thanksgiving. US markets were shut; UK and Europe traded.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Prices: UK/EU holdings use **Thu 11-26 closes from a direct yfinance pull**, run through the pipeline's own RSI, MACD
and SMA code. Turso's UK/EU rows are still 11-24. US holdings are on **Wed 11-25 closes** (no session today), which match
Turso's rows exactly.
FX: EUR/USD 1.0975 | GBP/EUR 1.1940.
Market: a broad European rally, FTSE 100 +1.7% and Euro Stoxx 50 +2.0%. Every UK/EU holding closed higher. No dated
report explaining the move was checked.
Options: Black-Scholes from options_pricing.py on Wednesday's underlyings with one day less to expiry (ORCL 63.4% vol,
PLTR 65.8%). NBIS is still a hand estimate at 80% vol, because its Turso row has no strike, expiry or type.
Pipeline health: OK on all tracked tasks. Row-level data quality: check_data_quality.py was started in the background and
had printed nothing by write time (normal for this step). It reported 227 failing rows on 11-24; none affected a price or
TA figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€23,399 (estimated: long equity €17,090 + options ~€4,183 + ORCL short unrealized +€231 + cash €1,895)
                    **+€174 vs €23,225 last night.** Long book +€189, all from UK/EU names: REL +€32, SAP +€30, EDEN +€26,
                    WKL +€25, PRX +€23, GSK +€21, ZOE +€21, KLR +€5, ACN +€4. US names unchanged apart from FX. Options −€15
                    (one day of time decay).
  Available Cap:    €1,895.31 cash
  Best Performer:   ACN +55.3% (IQV +53.2%, SAP +42.0%)
  Worst Performer:  ERO −35.7% (SFM −33.5%, PRX −26.9%, FLUT −23.1%)
  Largest Position: LULU (10.3% of long book; GSK 9.5%, REL 8.7%, SAP 8.0%, ACN 7.7%, WKL 7.7%)
  FX:               EUR/USD 1.0975 | GBP/EUR 1.1940 | UK/EU on Thu 11-26 closes, US on Wed 11-25 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ ACN      │ +55.3%     │ 53.7    │ ↑     │ Watch    │ FR live; 12-17    │ 77  │
  │ IQV      │ +53.2%     │ 38.9    │ ↓     │ EXIT     │ 3 free shares     │ 701 │
  │ SAP      │ +42.0%     │ 43.9    │ ↓     │ Watch    │ Exit cleared; FR  │ 425 │
  │ WKL      │ +24.4%     │ 56.7    │ ↑     │ Watch    │ FR at > €88.60    │ 146 │
  │ ZOE      │ +20.1%     │ 59.9    │ ↑     │ Watch    │ MACD bearish      │ —   │
  │ REL      │ +20.0%     │ 64.0    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ KLR      │ +14.9%     │ 33.1    │ ↓     │ EXIT     │ < 2,900p rule hit │ 57  │
  │ BIRK     │ +11.4%     │ 53.2    │ ↑     │ Watch    │ MACD bearish      │ 268 │
  │ GSK      │ +0.3%      │ 60.8    │ ↑     │ Hold     │ MACD now bullish  │ 47  │
  │ LULU     │ −4.8%      │ 53.1    │ ↑     │ Watch    │ earnings 12-08    │ 35  │
  │ QXO-PB   │ −5.3%      │ 52.0    │ ↓     │ Watch    │ above $35.10      │ —   │
  │ EDEN     │ −4.6%      │ 48.7    │ ↓     │ Watch*   │ < €25.77 floor    │ —   │
  │ ADBE     │ −6.8%      │ 45.5    │ ↓     │ Watch    │ earnings 12-09    │ 23  │
  │ FLUT     │ −23.1%     │ 38.3    │ ↓     │ EXIT     │ 1 share           │ —   │
  │ PRX      │ −26.9%     │ 31.6    │ ↓     │ EXIT     │ < €33.03 line     │ 596 │
  │ SFM      │ −33.5%     │ 47.6    │ ↓     │ Watch*   │ < $60.85 stop     │ 132 │
  │ ERO      │ −35.7%     │ 32.2    │ ↓     │ EXIT     │ < $31.50 stop     │ 71  │
  │ ORCL (S) │ +32.8%     │ 37.8    │ ↓     │ Watch    │ earnings 12-14    │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  * Mechanical Watch, but a standing stop or floor is broken, so the exit is still recommended. P&L% uses the reconciled
  real fills. US rows are unchanged from last night (no session). Earnings dates are Yahoo's calendar, not confirmed with
  the companies. MF# is the full-universe rank (unchanged); EDEN, ZOE, FLUT and QXO-PB have none, and ACN's is from its
  US listing.
  Changes vs last night:
  - **SAP: +2.3% to €194.14, RSI 43.9, so the mechanical Exit has cleared → Watch.** It is still below SMA50 (€198.20) with
    a bearish MACD. At this price the free ride qualifies for the first time since early November: sell 5 of 7, keep 2.
  - **GSK: +1.3% to 1,945p, MACD turned bullish → Hold** (RSI 60.8, above SMA50 at 1,857p). The position is back above
    cost (+0.3%).
  - **WKL: +1.9% to €88.20**, P&L +24.4%, €0.40 short of the 25% free-ride bar.
  - **PRX: +2.6% to €30.03**, but RSI 31.6 keeps it a mechanical Exit, still €3.00 under the €33.03 line.
  - **EDEN: +2.3% to €25.32**, €0.45 under the €25.77 floor (was €1.02 under).
  - **KLR: +1.5% to 2,758p**, RSI 33.1, fifth straight close under 2,900p.
  - REL +2.2% to 3,103p (RSI 64.0, on 1.4× volume). ZOE +1.9%. ACN +0.3% on very thin volume.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.3%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 21.9% | Healthcare (GSK, ZOE, IQV) 20.2% | Consumer (LULU, SFM, BIRK) 17.9% |
                   Info services (REL, WKL) 16.4% | Industrials (QXO-PB, KLR) 7.7% | Fintech EDEN 6.7% | Internet/SOTP PRX 5.3% |
                   Materials ERO 3.6% | iGaming FLUT 0.4%
  Currency split:  EUR 42.0% | USD 37.9% | GBp 20.1% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  Recommendations only; nothing has been executed. Proceeds are at the latest closes. No Trim signals: no position is
  ≥20% weight, so the Trim rule can't fire. US orders can't fill until Friday's half-day session (closes 19:00 CET).

  ERO: **Full Exit.** RSI 32.2, below SMA50 ($32.11), MACD bearish; $9.13 under the $31.50 stop.
  Expected proceeds: ~$671 (~€611). Realized ≈ −€345 after commission. No CGT.
  SFM: **Full Exit on the stop** ($60.85, broken since 10-29). RSI 47.6, below SMA50 ($59.65), MACD bullish.
  Expected proceeds: ~$533 (~€486). Realized ≈ −€249 after commission. No CGT.
  PRX: **Full Exit**, on the mechanical signal and the €33.03 rule. Today's bounce changed neither.
  Expected proceeds: ~€901. Realized ≈ −€336 after commission. No CGT.
  EDEN: **Full Exit on the floor rule** (below €25.77 since 11-17). RSI 48.7, below SMA50 (€26.48), MACD bullish.
  Expected proceeds: ~€1,139. Realized ≈ −€60 after commission. No CGT. It is getting close to the floor, and a close
    back above €25.77 would withdraw this.
  IQV: **Sell the 3 free shares** (RSI 38.9, below SMA50 $265.90, MACD bearish). Unchanged; US was shut.
  Expected proceeds: ~$753 (~€686) gross; gain ~€238, CGT €50, commission ~€5, net ~€631.
  KLR: **Full Exit of the 10 free shares; the 2,900p rule fired.** ~€329 gross; gain ~€43, CGT €9, net ~€316. The
    commission is ~1.4% of value, above the 1% guideline, so it's a small judgement call.
  SAP: **Trim withdrawn.** Last night's 4-of-7 trim rested on the mechanical Exit, which cleared today. See the free ride
    below. Sell the lot on a close below €176.9.
  ADBE: no sale. $232.83, $2.63 above the $230.20 stop; sell all 5 (~€1,061) only on a close below it.
  FLUT: mechanical Exit, no action. One share worth ~€64; a flat $5 commission would be ~7%.

  ORCL put: **Close rule not fired, but the decision is still open.** ORCL $103.88 (Wed), $16.12 in the money. Mark ~$17.53/sh
    (~€1,598), 163% of the €982 cost, 22 days left. Closing nets ≈ +€482 after CGT (~€129) and commission. Earnings 12-14
    (Yahoo) fall four days before expiry.
  NBIS put: **~4.2× cost and $5.01 in the money — I still lean towards taking it.** Hand mark ~$21.84/sh (~€1,990) vs
    €479 cost; closing nets ≈ +€1,189 after CGT (~€317) and commission. The 80% vol input is below realized vol, so the
    real bid may be higher. 203 days left. Your call; check the bid on Friday (no live quote here).
  PLTR put: Hold. Mark ~$6.53/sh (~€595), 83% of €715 cost, 113 days left.
  ORCL short: Hold. Cover the 5 shares on a close above ~$130.03. Unrealized +$253 (+€231, +32.8%).

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. No name combines RSI 35–50, price above SMA50 and a bullish MACD (GSK has the trend and MACD, but RSI 60.8).

  ── NEW POSITIONS ──────────────────────────────────────
  WSE:  Enter at ~$11.68 (RSI 56.8, 3.2% above SMA50, MACD bullish) — Turso screen 4/5, MF#2, corroborated by wiki-mention
        Stop: $11.05 | Size: €750 (starter: no Magic Formula pass)
  GIS:  Enter at ~$36.25 (RSI 59.1, 6.6% above SMA50, MACD bullish) — Turso screen 4/5, MF#163. Unchanged; US was shut.
        Stop: $34.50 | Size: €750 (starter)
  IAG:  Only on a bullish MACD re-cross: 441.4p (+1.1%, RSI 52.0, 2.7% above SMA50, MACD still bearish) — 5/5 on the screen, MF#16
        Stop: 424.8p | Size: €1,000
  Cash is €1,895, and the recommended sales above would add ~€4,100 net. Nothing is urgent going into a half-day US
  session. WSE and IAG were recorded as Pending Trade Ideas. IAG's old card is no longer active, so this is a fresh one.
  GIS already has an active card (dedup skipped it).

INVESTMENT OPPORTUNITIES
  4/5 · WSE (wiki-mentioned, Technology — Wise plc, US listing) — Magic Formula ranked (no pass), P/E 23.8 trailing / 16.8
        forward | MF#2
  Entry: ~$11.68 | Stop: $11.05 (1.5×ATR $0.42) | Size: €750 | RSI: 57 | MACD: Bullish
  Conviction: MF#2; Magic Formula ranked (no pass); corroborated by wiki-mention; bullish MACD; RSI healthy at 57.
  Portfolio fit: payments overlap with EDEN (6.7%), which is on an exit recommendation, so this would roughly replace it.
  Adds USD (37.9%). The price is from Wednesday's close.

  4/5 · GIS (S&P 500, Consumer Staples — General Mills) — Magic Formula ranked (no pass), EY 9.1%, ROIC 13.8% | MF#163
  Entry: ~$36.25 | Stop: $34.50 (1.5×ATR $1.17) | Size: €750 | RSI: 59 | MACD: Bullish
  Conviction: MF#163; Magic Formula ranked (no pass); bullish MACD; RSI healthy at 59.
  Portfolio fit: the book has no Consumer Staples. Adds USD. P/E was not available from the screen.

  4/5 live (5/5 on the screen) · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula
        pass, P/E 7.2, EY 20.1%, ROIC 27.5% | MF#16
  Entry: ~441p on a bullish MACD re-cross | Stop: 424.8p (1.5×ATR 11.0p) | Size: €1,000 | RSI: 52 | MACD: Bearish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation.
  Portfolio fit: Industrials is 7.7%. Adds GBp. Cyclical and fuel-sensitive. The screen's MACD point is on Tuesday's Turso
  row; on Thursday's live data the MACD is still bearish.

  Also considered: **HPQ** (4/5, MF#30, P/E 11.9) — skipped for now after a +11.5% one-day jump on 11-25. Wait for it to
    settle. **INCY** (4/5, P/E 62), **AOS** (RSI 65, 10.6% above SMA50), **FNTN** (RSI 68.8) and **AF** (18% above
    SMA50, MACD bearish) are extended or expensive. **GAMA** (5/5) still looks bid-pinned. **BBY** (MACD bearish
    yesterday). **SUBC** is tied to the Saipem deal. The screen's ratings are on Turso's 11-24/11-25 prices.

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €194.14 → ~€971 proceeds covers cost basis (€957)
  Free position: 2 shares at zero effective cost | Current value: ~€388
  Status: Monitor — RSI 43.9, no Trim signal. After CGT (€60) and commission it nets ~€906, so cost is covered before tax only.

  ACN: Sell 4 of 6 shares at €219.10 → ~€876 proceeds covers cost basis (€847)
  Free position: 2 shares at zero effective cost | Current value: ~€438
  Status: Monitor — RSI 53.7. After CGT (€66) and commission it nets ~€806, so cost is covered before tax only.

  WKL: P&L +24.4%, just under the 25% threshold; it qualifies above ~€88.60 (sell 12 of 15 at that price, keeping 3).
  IQV: ✅ Already free-ridden (3 shares, ~€686; the sale rule is live, see above).
  KLR: ✅ Already free-ridden (10 shares, ~€329; the sale rule fired, see above).

PORTFOLIO RISKS TO WATCH
  - Six recommended sales total ~€4,150 gross, 24% of the long book: about −€990 realized on the four losers and
    +€281 on IQV and KLR, so roughly −€710 net before CGT.
  - Ten of 17 longs (~45% of the book) are below SMA50, and 14 of 17 have a bearish MACD. Today's European bounce eased
    the signals (SAP and GSK improved) but didn't turn the trend.
  - The bearish overlay (3 puts plus the ORCL short) is ~€4,414, 18.9% of net value. Two-thirds of it is in the ORCL put
    (22 days left) and the NBIS put (a hand estimate). US names reprice on Friday's thin half-day session.
  - ERO, PRX and SFM are names Burry was buying on 11-19, against our stop-rule exits.
  - Event risk: US half-day 11-27; LULU 12-08, ADBE 12-09, ORCL 12-14, ACN 12-17.
  - No stop orders are in place on any position. The cause of today's European rally was not established.

NEXT ACTIONS
  1. ERO, SFM, PRX: execute the Full Exits (~€1,998 together, ≈ −€930). US orders can fill on Friday's half day.
  2. ORCL put: decide whether to bank ≈ €482 net now (~€1,598 mark, 163% of cost, 22 days left) or hold into 12-14.
  3. NBIS put: check the real bid on Friday and consider banking ≈ €1,189 net (~€1,990 mark, 4.2× cost).
  4. IQV: sell the 3 free shares (~€631 net).
  5. EDEN: sell all 45 (~€1,139, ≈ −€60) unless it closes back above €25.77 first.
  6. KLR: sell the 10 free shares (~€316 net), or accept the thin economics and reset the line.
  7. SAP: trim withdrawn; free ride is live (sell 5, keep 2) but only covers cost before tax, so monitor. Sell all below €176.9.
  8. ADBE: hold; sell 5 on a close below $230.20. WKL: free ride at > €88.60.
  9. ORCL short: cover above ~$130.03. PLTR put: hold.
  10. Optional entries: WSE starter ~$11.68 (€750) or GIS starter ~$36.25 (€750). IAG only on a MACD re-cross. Fill in the NBIS put's strike, expiry and type in Turso.
════════════════════════════════════════════════════════
