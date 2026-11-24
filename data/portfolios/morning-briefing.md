⚠ PIPELINE HEALTH WARNING ⚠
STALE/ERROR: refresh-technicals: stale — last successful signal 177h ago
STALE/ERROR: options-mark-to-market: stale — last successful signal 177h ago
STALE/ERROR: crypto-prices: stale — last successful signal 176h ago
STALE/ERROR: magic-formula-screen: stale — last successful signal 199h ago
STALE/ERROR: filings-refresh: stale — last successful signal 175h ago
Figures below may be based on stale data — verify before acting on any recommendation.
(Read at 15:54 CET. The catch-up runs finished during this briefing and a later re-check was OK on all tasks.)

════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-24
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: first briefing since 11-16. The pipeline has a gap of about 7 days, so this run started late, at 15:54 CET
on Tuesday with markets open. It covers five sessions (11-17 to 11-23).
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Prices: all signals, P&L and values below use **Mon 11-23 closes from a direct yfinance pull**, computed with the
pipeline's own indicator code. Turso's refresh ran at ~16:00 CET today, so its 11-24 rows are **mid-session prints**,
not closes. Today's prints are quoted only as "today ~16:00" for context. Re-check stops against tonight's close.
FX: EUR/USD 1.0972 | GBP/EUR 1.1934.
Market: the S&P 500 fell seven sessions running into correction (SPY −8.6% from 11-13 to 11-20), then rose 4.7% on
Monday after Nvidia reinstated Jensen Huang as CEO (Nvidia up more than 31%; QQQ +7.0%). Today ~16:00 SPY is −0.5%.
Options: Black-Scholes on Monday's closes (ORCL 63.1% vol, PLTR 66.0%, from options_pricing.py; NBIS a hand estimate
at 80% vol, because its Turso row still has no strike, expiry or type).
Data quality: check_data_quality.py was still running when this was written, so its result is not included.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€21,870 (estimated: long equity €16,511 + options ~€3,277 + ORCL short unrealized +€186 + cash €1,895)
                    **−€802 vs 11-16's €22,672.** The long book lost €1,164 (SAP −€189, ACN −€160, PRX −€117, ERO −€107,
                    WKL −€104, ADBE −€98); the three puts added €337 and the ORCL short €25.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +53.7% (ACN +43.5%, SAP +36.3%)
  Worst Performer:  SFM −36.8% (ERO −32.9%, FLUT −26.7%, PRX −23.4%)
  Largest Position: LULU (10.4% of long book; GSK 9.4%, REL 8.5%, SAP 7.9%, WKL 7.6%, ACN 7.4%)
  FX:               EUR/USD 1.0972 | GBP/EUR 1.1934 | Prices are Mon 11-23 closes (direct yfinance)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +53.7%     │ 39.4    │ ↓     │ EXIT     │ RSI < 40 rule hit │ 701 │
  │ ACN      │ +43.5%     │ 41.6    │ ↑     │ Watch    │ earnings 12-17    │ 77  │
  │ SAP      │ +36.3%     │ 33.2    │ ↓     │ EXIT     │ lost SMA50        │ 425 │
  │ KLR      │ +18.6%     │ 35.1    │ ↓     │ EXIT     │ < 2,900p rule hit │ 57  │
  │ WKL      │ +18.3%     │ 46.5    │ ↑     │ Watch    │ FR lapsed         │ 146 │
  │ ZOE      │ +15.7%     │ 52.6    │ ↑     │ Watch    │ MACD bearish      │ —   │
  │ REL      │ +13.4%     │ 49.4    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ BIRK     │ +7.5%      │ 48.0    │ ↑     │ Watch    │ MACD bearish      │ 268 │
  │ GSK      │ −4.5%      │ 47.8    │ ↓     │ Watch    │ 0.02p < SMA50     │ 47  │
  │ EDEN     │ −6.5%      │ 43.8    │ ↓     │ Watch*   │ < €25.77 floor    │ —   │
  │ LULU     │ −7.3%      │ 49.0    │ ↑     │ Watch    │ earnings 12-08    │ 35  │
  │ ADBE     │ −10.4%     │ 37.5    │ ↓     │ EXIT     │ < $230.20; 12-09  │ 23  │
  │ QXO-PB   │ −12.6%     │ 42.6    │ ↓     │ Watch    │ < $35.10 stop ref │ —   │
  │ PRX      │ −23.4%     │ 33.4    │ ↓     │ EXIT     │ H1 Wed 11-25      │ 596 │
  │ FLUT     │ −26.7%     │ 29.8    │ ↓     │ EXIT     │ 1 share           │ —   │
  │ ERO      │ −32.9%     │ 32.6    │ ↓     │ EXIT     │ < $31.50 stop     │ 71  │
  │ SFM      │ −36.8%     │ 40.6    │ ↓     │ Watch*   │ < $60.85 stop     │ 132 │
  │ ORCL (S) │ +26.4%     │ 43.4    │ ↓     │ Watch    │ earnings 12-14    │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  * Mechanical Watch, but a standing stop or floor is broken, so the exit is still recommended. P&L% uses the reconciled
  real fills. Earnings dates are Yahoo's calendar, not confirmed with the companies. MF# is the full-universe rank;
  EDEN, ZOE, FLUT and QXO-PB have none, and ACN's is from its US listing.
  Signal changes vs 11-16 (moves are 11-16 close to 11-23 close):
  - **SAP: Watch → EXIT.** −12.7% to €186.34, below SMA50 (€197.95), RSI 33.2. Coverage blames a software sell-off and,
    partly, board member Thomas Saueressig's announced departure (11-17).
  - **ADBE: Watch → EXIT.** −9.0% to $223.98, below the $230.20 stop on every close since 11-18 (low close $217.71).
    Today ~16:00 it is ~$233, back over the stop, so tonight's close matters.
  - **PRX: Watch → EXIT.** −11.1% to €31.47, below the €33.03 exit line on every close since 11-18. Monday was +4.2%;
    today ~16:00 ~€31.0. Half-year results are listed for Wed 11-25.
  - **KLR: Watch → EXIT, and the 2,900p rule fired** on 11-20 (2,812p) and again Monday (2,846p). RSI 35.06.
  - **IQV: Watch → EXIT, and the RSI < 40 rule fired** (Monday 39.4 even after +2.5%). Today ~16:00 ~$257.
  - **FLUT: Watch → EXIT.** −14.8% to $67.42, RSI 29.8. One share (~€61).
  - **ERO: still EXIT.** −14.5% to $23.36 even after Monday's +8.8%. Today ~16:00 ~$22.2.
  - **EDEN: back below the €25.77 floor** on every close since 11-17; Monday €24.80 (+1.9%). Today ~16:00 ~€25.2.
  - **GSK, BIRK: Hold → Watch.** GSK closed under its ~1,838p stop ref once (11-19, 1,827p), then recovered; today ~16:00
    ~1,893p. LULU closed under its ~$103.81 stop ref once (11-20, $102.62) and is back above.
  - ACN −11.6%, WKL −7.7%, QXO-PB −6.4%, REL −4.3% and ZOE −3.9% stay on Watch. SFM +0.9% is the only gainer.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 10.4%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 21.4% | Healthcare (GSK, ZOE, IQV) 20.2% | Consumer (LULU, SFM, BIRK) 18.0% |
                   Info services (REL, WKL) 16.1% | Industrials (QXO-PB, KLR) 7.6% | Fintech EDEN 6.8% | Internet/SOTP PRX 5.7% |
                   Materials ERO 3.9% | iGaming FLUT 0.4%
  Currency split:  EUR 42.0% | USD 38.1% | GBp 19.9% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  Monday's rally did not repair these. ADBE and IQV depend on tonight's close. Proceeds are at Monday's closes.

  ERO: **Full Exit.** RSI 32.6, below SMA50 ($32.52), MACD bearish; $8.14 under the $31.50 stop.
  Expected proceeds: ~$701 (~€639). Realized ≈ −€272. No CGT.
  SFM: **Full Exit on the stop** ($60.85, broken since 10-29). RSI 40.6, below SMA50 ($60.44), MACD bullish.
  Expected proceeds: ~$506 (~€462). Realized ≈ −€265. No CGT.
  EDEN: **Full Exit on the floor rule** (closes below €25.77 since 11-17). RSI 43.8, below SMA50 (€26.71), MACD bullish.
  Expected proceeds: ~€1,116. Realized ≈ −€78. No CGT. It has crossed this line and come back before.
  PRX: **Full Exit on the €33.03 rule**, also a mechanical Exit. Results are listed for tomorrow, so holding means taking
    that event with the exit line already broken.
  Expected proceeds: ~€944. Realized ≈ −€288. No CGT.
  ADBE: **Full Exit if tonight's close is below $230.20**; otherwise the stop has been reclaimed and the sale lapses.
  Expected proceeds: ~$1,120 (~€1,021) at Monday's close. Realized ≈ −€118 at current FX. No CGT.
  SAP: **Trim ~50% (4 of 7).** Mechanical Exit, but up 36% and in a sector-wide fall, so half now and the rest on a
    close below €176.9 (1.5×ATR).
  Expected proceeds: ~€745 gross; gain €199, CGT €42, commission ~€5, net ~€699.
  KLR: **Full Exit of the 10 free shares; the 2,900p rule fired.** ~€340 gross; gain ~€53, CGT €11, net ~€324. The
    commission is ~1.3% of value, above the 1% guideline, so it's a small judgement call.
  IQV: **Sell the 3 free shares if RSI still closes under 40 tonight** (rule fired at 39.4).
  Expected proceeds: ~€689 gross; gain ~€241, CGT €51, commission ~€5, net ~€634.
  FLUT: mechanical Exit, no action. One share worth ~€61; a flat $5 commission would be ~7%.

  NBIS put: **now 3.3× cost — I lean towards taking it.** NBIS went from $107.13 to $81.31 (11-20), then +20.3% to
    $97.80 on Monday, and ~$88.8 today ~16:00. Mark ~$17.37/sh (~€1,583) vs €479 cost. Closing nets ≈ +€868 after CGT
    (€232) and commission. The 80% vol input is well below NBIS's realized vol (128%), so the real bid may be higher.
    206 days left. Your call; check the bid.
  ORCL put: **Hold; close rule not fired.** ORCL $113.68 (−4.5%; $101.19 on 11-20, +12.3% Monday), $6.32 in the money. Mark
    ~$11.04/sh (~€1,006), 102% of the €982 cost, 25 days left. Close on a close above $120. Yahoo lists earnings for
    12-14, four days before expiry; decide before then whether to hold through it.
  PLTR put: Hold. PLTR $159.36 (−0.6%; +11.1% Monday), mark ~$7.55/sh (~€688), 96% of €715 cost, 116 days left.
  ORCL short: Hold. Cover the 5 shares on a close above ~$130.03 ($16.35 away). Unrealized +$204 (+€186).
  No Trim signals: no position is ≥20% weight, so the Trim rule can't fire.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. No name combines RSI 35–50, price above SMA50 and a bullish MACD.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG:  Enter at ~455.2p (Mon close, +3.8%, RSI 60.1, 6.3% above SMA50) — Turso screen 5/5, MF#16
        Stop: 434.9p | Size: €1,000
  STR:  Optional, only if MACD turns back up: ~€106.40 (Mon close, RSI 56.0, 2.3% above SMA50) — 4/5, MF#38
        Stop: €100.90 | Size: €750
  Cash is €1,895. No hurry: index moves of −4% and +5% on consecutive days argue for half size or a calmer close.
  Both already have active Pending Trade Idea cards (dedup skipped them); the levels above replace the cards' levels.
  **MONY comes off** (MACD bearish, −3.0% to 204.4p, no longer on the screen). **CF stays off** (2.3% below SMA50).
  **NEM stays off** ($100.73, 12.6% below SMA50, RSI 38). Leave those three cards alone.

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula pass, P/E 7.2, EY 20.1%,
        ROIC 27.5% | MF#16
  Entry: ~455.2p | Stop: 434.9p (1.5×ATR 13.6p) | Size: €1,000 | RSI: 60.1 | MACD: Bullish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD.
  Portfolio fit: held its level through the sell-off (+0.4% since 11-16). Industrials is 7.6%. Adds GBp. Cyclical and
    fuel-sensitive. Its P/E, EY and ROIC are unchanged from before the pipeline gap.

  4/5 · STR (MORNINGSTAR-EU, Industrials — Strabag) — Magic Formula pass, P/E 12.4, EY 12.7%, ROIC 23.5% | MF#38
  Entry: ~€106.40 on a bullish MACD cross | Stop: €100.90 (1.5×ATR €3.66) | Size: €750 | RSI: 56.0 | MACD: Bearish (just)
  Conviction: MF#38; Magic Formula pass; corroborated by briefing-recommendation (this task's own earlier pick).
  Portfolio fit: second Industrials name beside IAG, so pick one. Adds EUR, already 42%.

  Also considered: **GAMA** (5/5, MF#70; ~1,099–1,105p for a week with ATR under 3p, which looks like a bid-pinned
    price; not checked, so skipped). **BAMNB** (4/5, MACD bearish). **BBY** (4/5; below SMA50 on Monday's close). **AF** (RSI 72,
    extended). **SUBC, DPZ, SYY** (4/5, no Magic Formula pass). The screen itself runs on today's mid-session prints.

FREE RIDE OPPORTUNITIES
  No new free ride qualifies; the 11-16 candidates have all lapsed:
  SAP: covering the €956.90 cost now takes 6 of 7 shares, leaving 1 (needs 2). See the 4-share trim above.
  ACN: covering €846.60 takes 5 of 6, leaving 1. P&L +43.5%. Status: Monitor; requalifies (4 of 6) above ~€211.65 before tax.
  WKL: P&L +18.3%, under the 25% threshold; requalifies above ~€88.60.
  IQV: ✅ Already free-ridden (3 shares, ~€689; sale rule fired, see above).
  KLR: ✅ Already free-ridden (10 shares, ~€340; sale rule fired, see above).

PORTFOLIO RISKS TO WATCH
  - Eight recommended sales total ~€5,956, 36% of the long book, with about −€528 realized net across them before CGT.
    Five standing rules (EDEN, PRX, ADBE, KLR, IQV) fired while no briefing ran, so some went unflagged for up to a week.
  - Eleven of 17 longs (~55% of the book) are below SMA50, up from ~31%, and 15 of 17 have a bearish MACD.
  - The bearish overlay (3 puts plus the ORCL short) is ~€3,463, 15.8% of net value. It offset under a third of the long
    book's loss, and another AI bounce like Monday's would cut it. €1,583 of it is a hand estimate on NBIS.
  - Event risk: PRX 11-25, LULU 12-08, ADBE 12-09, ORCL 12-14, ACN 12-17. US markets close for Thanksgiving on 11-26.
  - No stop orders are in place on any position.
  - Data: Turso's 11-24 rows are mid-session. The causes of the ERO, FLUT, ACN, PRX and KLR falls weren't checked.

NEXT ACTIONS
  1. ERO, SFM: execute the Full Exits (~€1,101 together, ≈ −€537).
  2. PRX: decide before Wednesday's results; the rule says exit all 30 (~€944, ≈ −€288).
  3. EDEN: sell all 45 (~€1,116, ≈ −€78) unless it closes back above €25.77 tonight.
  4. NBIS put: check the real bid and consider banking ≈ €868 net (~€1,583 mark, 330% of cost).
  5. SAP: sell 4 of 7 (~€699 net); the other 3 on a close below €176.9.
  6. ADBE: sell all 5 if tonight's close is below $230.20. IQV: sell 3 if RSI still closes under 40.
  7. KLR: sell the 10 free shares (~€324 net), or accept the thin economics and reset the line.
  8. ORCL put: hold under $120; decide before 12-14 earnings. ORCL short: cover above ~$130.03. PLTR put: hold.
  9. Optional entry: IAG ~455.2p (€1,000). Leave the MONY, CF and NEM cards alone.
  10. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
