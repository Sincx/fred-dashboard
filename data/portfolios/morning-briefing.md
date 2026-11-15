════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-11-15
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Run context: Sunday 23:30 slot (started 23:40 CET). The last briefing was Thursday night's (dated 11-12), so this
one covers Friday 11-13's session. It is a full run, not a duplicate.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Pipeline health: OK, all tracked tasks are healthy.
Prices: Turso holds **Fri 11-13 closes for every holding** (refreshed today 14:39 UTC), so everything below comes
straight from Turso: prices, RSI14, SMA50, MACD, ATR14. Thursday's briefing used a direct yfinance pull, so a few TA
values moved for source reasons as well as price (QXO-PB's SMA50 is $36.99 here against $37.63 on Thursday).
"vs Thursday" changes compare Friday's Turso close with Thursday's yfinance close.
FX: EUR/USD 1.1028 | GBP/EUR 1.1985.
Options: ORCL and PLTR puts are options_pricing.py's Black-Scholes marks (ORCL 65.2% vol, PLTR 66.5% vol, marked
11-15). NBIS is still a hand estimate at 80% vol, because its Turso row still has no strike, expiry or type.
Data quality: check_data_quality.py was still running its retries when this was written, so its results aren't
included. The known repeats from Thursday (ACN, ZOE and QXO-PB fundamentals; the NBIS option_mark row) are assumed
unchanged. None of them affects a price or TA figure here.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€22,159 (estimated: long equity €17,728 + options ~€2,403 + ORCL short unrealized +€132 + cash €1,895)
                    **+€371 vs Thursday's €21,788.** Most of it is the NBIS put again: NBIS fell another 9.9% to
                    $115.88 (low $109.00, 1.8× volume, cause not checked), lifting the hand mark ~€221. Options
                    +€278 in total, the ORCL short +€8. The long book gained €85: ADBE +1.9%, REL +1.7%, BIRK +1.7%,
                    WKL +1.5%, SFM +1.3%, LULU +1.1%, EDEN +1.1%; ERO −2.4%, QXO-PB −2.3%, IQV −2.2%, PRX −1.1%.
                    A slightly stronger dollar (EUR/USD 1.1057 → 1.1028) added roughly €18.
  Available Cap:    €1,895.31 cash
  Best Performer:   ACN +62.2% (IQV +61.7%, SAP +56.1%)
  Worst Performer:  SFM −35.0% (ERO −16.5%, PRX −13.1%, FLUT −11.8%)
  Largest Position: LULU (9.7% of long book; GSK 9.0%, SAP 8.4%, REL 8.3%, ACN 7.7%, WKL 7.7%)
  FX:               EUR/USD 1.1028 | GBP/EUR 1.1985 | Prices are Fri 11-13 closes (Turso)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ ACN      │ +62.2%     │ 63.4    │ ↑     │ Watch    │ FR lapsed (−€9)   │ 77  │
  │ IQV      │ +61.7%     │ 46.5    │ ↓     │ Watch    │ free-ridden       │ 701 │
  │ SAP      │ +56.1%     │ 61.7    │ ↑     │ Watch    │ FR ✓ (monitor)    │ 425 │
  │ WKL      │ +28.2%     │ 65.7    │ ↑     │ Watch    │ FR: RSI > 65      │ 146 │
  │ KLR      │ +27.7%     │ 46.0    │ ↓     │ Watch    │ free-ridden       │ 57  │
  │ REL      │ +18.7%     │ 65.0    │ ↑     │ Watch    │ MACD bearish      │ 288 │
  │ ZOE      │ +18.3%     │ 62.2    │ ↑     │ Watch    │ MACD bearish      │ —   │
  │ BIRK     │ +13.2%     │ 56.0    │ ↑     │ Hold     │ —                 │ 268 │
  │ GSK      │ −1.5%      │ 57.4    │ ↑     │ Hold     │ stop ref ~1,838p  │ 47  │
  │ ADBE     │ −2.7%      │ 47.4    │ ↓     │ Watch    │ stop $230.20      │ 23  │
  │ QXO-PB   │ −3.3%      │ 50.4    │ ↑     │ Hold     │ $0.06 > SMA50     │ —   │
  │ EDEN     │ −3.8%      │ 46.8    │ ↓     │ Watch    │ < €25.77 floor    │ —   │
  │ LULU     │ −6.4%      │ 50.8    │ ↑     │ Watch    │ ATR stop ~$103.8  │ 35  │
  │ FLUT     │ −11.8%     │ 48.2    │ ↓     │ Watch    │ reported 11-12    │ —   │
  │ PRX      │ −13.1%     │ 49.3    │ ↑     │ Add*     │ exit < €33.03     │ 596 │
  │ ERO      │ −16.5%     │ 40.4    │ ↓     │ Watch    │ < $31.50 stop     │ 71  │
  │ SFM      │ −35.0%     │ 39.6    │ ↓     │ EXIT     │ Exit day 12       │ 132 │
  │ ORCL (S) │ +18.9%     │ 47.2    │ ↓     │ Watch    │ stop ref ~$130.0  │ 619 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses the reconciled real fills from the wiki (KLR 2,400p, WKL €70.88, IQV $163.91, PRX €41.065, FLUT $92.02), not
  Turso's older entry prices. MF# is the full-universe rank. EDEN, ZOE, FLUT and QXO-PB have no rank. ACN's rank is
  from its US listing.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $125.35). GSK and LULU keep their earlier stop refs.
  Signal changes vs Thursday:
  - **PRX: Hold → mechanical Add (\*not recommended).** −1.1% to €35.69, RSI 49.3 (now inside the 35–50 band), above
    SMA50 (€35.46) by only €0.23, MACD bullish. The position cost €1,232, so an add within the €1,500 cap would be
    ~€268, below the ~€465 minimum trade size. It is also a −13% position sitting 0.6% above its SMA50.
  - **LULU: mechanical Add → Watch.** +1.1% to $105.65, RSI 50.8, above SMA50 ($100.95), but Turso has MACD bearish
    (Thursday's yfinance recompute had it bullish). $1.84 above the ~$103.81 ATR stop ref.
  - **IQV: Hold → Watch.** −2.2% to $265.12, back below SMA50 ($267.41), MACD bearish, RSI 46.5. The rule stands:
    sell the 3 free shares on an RSI close under 40.
  - **EDEN: Watch, third close below the floor.** +1.1% to €25.52, still €0.25 under the €25.77 patience floor.
    RSI 46.8, MACD bullish, below SMA50 (€27.15). Exit stands. See SELLS.
  - **ERO: Watch, stop still broken.** −2.4% to $29.06, $2.44 below the $31.50 stop (fifth session running).
    RSI 40.4, only 0.4 pts above the Exit line. Exit stands. See SELLS.
  - **SFM: still EXIT (day 12).** +1.3% to $52.07, RSI 39.6, below SMA50 ($63.52), MACD bearish. Third up day, and
    0.4 RSI pts from clearing the mechanical Exit. The broken $60.85 stop still decides it.
  - **WKL: still Watch, but RSI is back above 65.** +1.5% to €90.84, RSI 65.7, MACD bearish. See FREE RIDE.
  - **ADBE: still Watch.** +1.9% to $243.08, RSI 47.4 (7.4 pts above the Exit line), $3.31 below SMA50 ($246.39),
    $12.88 above the $230.20 stop.
  - **QXO-PB: still Hold, by $0.06.** −2.3% to $37.05 against SMA50 $36.99. RSI 50.4, MACD bullish.
  - **KLR: still Watch.** −0.8% to 3,064p, RSI 46.0, 91p below SMA50 (3,155p), MACD bearish. 5.4% above the 2,900p line.
  - **ORCL short: still Watch.** −1.4% to $125.35, below SMA50 ($136.41), MACD bullish (against the short). $4.68
    under the ~$130.03 stop ref.
  - REL (+1.7% to 3,069p, RSI 65.0), SAP (+0.4%), ACN (+0.4%), ZOE (+0.2%), GSK (+0.6%), BIRK (+1.7%) and FLUT (−1.0%)
    keep Thursday's signals.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest LULU 9.7%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.4% | Healthcare (GSK, ZOE, IQV) 19.4% | Consumer (LULU, SFM, BIRK) 17.0% |
                   Info services (REL, WKL) 16.0% | Industrials (QXO-PB, KLR) 7.8% | Fintech EDEN 6.5% | Internet/SOTP PRX 6.0% |
                   Materials ERO 4.5% | iGaming FLUT 0.4%
                   No sector is above 25%. Exiting SFM, ERO and EDEN (13.6% of the book) would lift Tech/Software to
                   ~25.9% of the remaining long book, just over the 25% line.
  Currency split:  EUR 42.7% | USD 37.9% | GBp 19.4% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  SFM: Full Exit (mechanical Exit, day 12; the $60.85 hard stop broke on the 10-29 post-Q3 gap). $52.07 (+1.3%), RSI
    39.6, below SMA50 $63.52, MACD bearish. Best close since 11-04.
  Expected proceeds: ~$521 (~€472). Realized loss ≈ −€255 plus ~€4.53 commission, so no CGT.

  ERO: **Full Exit on the stop.** $29.06 (−2.4%) is the fifth straight close below the $31.50 stop, now $2.44
    under it. The mechanical signal is Watch (RSI 40.4, MACD bullish), but it's below SMA50 ($33.89) and the stop
    decides this one.
  Expected proceeds: ~$872 (~€791). Realized loss ≈ −€156 against the $1,044.15 cost, plus ~€4.53 commission, so no CGT.

  EDEN: **Full Exit on the floor.** €25.52 (+1.1%) is the third straight close below the €25.77 patience floor. The
    mechanical signal is Watch (RSI 46.8, MACD bullish), and it's under SMA50 (€27.15). A close back above €25.77
    would withdraw this, as it did on 11-10.
  Expected proceeds: ~€1,148 (45 sh). Realized loss ≈ −€49 against the €1,197 real cost, so no CGT.

  ORCL put: **close rule still fired — close it.** ORCL closed at $125.35, $5.35 above the $120 strike. Marked
    ~$6.94/sh (~€629), 64% of the €982 cost, with 33 days left. Closing realizes ≈ −€353, so no CGT. Check the real bid.
  NBIS put: **now 2.4× cost — consider taking it.** NBIS −9.9% to $115.88 (RSI 35.8, low $109.00; cause not checked),
    down 25% in two sessions. The hand mark is ~$12.89/sh (~€1,169), 244% of the €479 cost and above the 11-05 peak
    (~€1,102). Closing would bank ≈ +€690 gross, ≈ €145 CGT, ≈ €541 net after commission. It has given back gains of
    this size twice in the last seven sessions. 214 days left, so there's no time pressure; it's your call. The mark
    is an 80%-vol estimate, so check the real bid.
  PLTR put: Hold. PLTR $167.99 (−2.1%, RSI 39.5), marked ~$6.67/sh (~€605), 85% of the €715 cost, 124 days left.
  ORCL short: Hold. Cover the 5 shares on a close above ~$130.03 ($4.68 away). Unrealized +$146 (+€132).
  KLR: no action. The 10 shares are free-ridden (~€367). Keep the rule: sell all 10 on a close below 2,900p (5.4%
    away) or an RSI close under 35.
  IQV: no action. The 3 shares are free-ridden (~€721). Sell them on an RSI close under 40 (now 46.5).
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire. The free rides (WKL, SAP, ACN) are below.

  ── ADDS TO EXISTING ───────────────────────────────────
  PRX: mechanical Add (RSI 49.3, above SMA50, MACD bullish), **not recommended**. Room under the €1,500 cap is only
    ~€268, below the ~€465 minimum trade size, and the price is 0.6% above SMA50. If taken anyway: stop €34.17.
  No other Add signals. KLR, EDEN, ERO, ADBE, IQV and FLUT are in the RSI band but below SMA50.

  ── NEW POSITIONS ──────────────────────────────────────
  CF:   Enter at ~$125.09 (Fri close, +0.1%, RSI 59.1, 3.1% above SMA50) — Turso screen 5/5, MF#29
        Stop: $117.95 | Size: €1,000
  MONY: Enter at ~210.8p (Fri close, −0.4%, RSI 61.8, 8.7% above SMA50) — Turso screen 5/5, MF#22
        Stop: 199.2p | Size: €1,000
  IAG:  Enter at ~452.9p (Fri close, +0.2%, RSI 62.4, 6.6% above SMA50) — Turso screen 5/5, MF#16
        Stop: 431.7p | Size: €1,000
  Cash is €1,895, enough for one of these now (three if the SFM, ERO and EDEN exits go through, ~€2,411 more).
  All three already have active Pending Trade Idea cards, so dedup skipped them. The Friday-close levels above
  replace the ones on the cards. **NEM stays off the list**: $113.14, still 4.2% below SMA50 ($118.04), RSI 46.3,
  technical rating down to Hold. Don't act on its card until it closes back above SMA50.

INVESTMENT OPPORTUNITIES
  5/5 · CF (SP500, Materials — CF Industries) — Magic Formula pass, P/E 9.2, EY 15.1%, ROIC 24.5%, yield 2.0% | MF#29
  Entry: ~$125.09 (current) | Stop: $117.95 (1.5×ATR $4.76) | Size: €1,000 | RSI: 59.1 | MACD: Bullish
  Conviction: MF#29; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 59.
  Portfolio fit: the cleanest setup of the three (RSI under 60, closest to SMA50 $121.35). Materials is 4.5% (ERO), and
    0% if ERO is sold on its stop. Adds USD. Fertiliser prices follow natural gas and crop prices, so it's cyclical.

  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 13.0, EY 11.0%, ROIC 33.6% | MF#22
  Entry: ~210.8p (current) | Stop: 199.2p (1.5×ATR 7.8p) | Size: €1,000 | RSI: 61.8 | MACD: Bullish
  Conviction: MF#22; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 62.
  Portfolio fit: a new sector for the book (0% today). Adds GBp. It's 8.7% above SMA50, so a limit near 205p (the
    20-day) is the deeper-pullback alternative.

  5/5 · IAG (FTSE350/STOXX600, Industrials — International Consolidated Airlines) — Magic Formula pass, P/E 7.2, EY 20.1%,
        ROIC 27.5% | MF#16
  Entry: ~452.9p (current) | Stop: 431.7p (1.5×ATR 14.2p) | Size: €1,000 | RSI: 62.4 | MACD: Bullish
  Conviction: MF#16; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 62.
  Portfolio fit: the top-ranked name on the screen, and the only one with an llm-research signal. Industrials is 7.8%,
    so there's room. Adds GBp. Airlines are cyclical and sensitive to fuel prices.

  Also considered: **STR** (5/5, MF#38, €106.60, RSI 57.1; Industrials). **REP** (5/5, MF#43, €30.89, RSI 58.4; Energy,
    new on the screen, P/E 5.8, no corroborating signal yet). **BMY** (5/5, MF#54; would add to Healthcare at 19.4%).
    **GAMA** (5/5, MF#70). **BAMNB** (5/5, RSI 69.6, extended). AF (4/5, RSI 78, overbought). WISE (4/5, no MF pass).
    The "briefing-recommendation" corroboration on CF, MONY, BAMNB, STR and AF comes from this task's own earlier
    picks, so it isn't independent evidence. Only IAG's llm-research signal is.

FREE RIDE OPPORTUNITIES
  WKL: Sell 12 of 15 shares at €90.84 → ~€1,090 gross proceeds covers the cost basis (€1,063.20)
  Free position: 3 shares at zero effective cost | Current value: ~€273
  After CGT (€50.30 on €239.52 gain) and commission (~€4.53), net cash is ~€1,035, €28 short of cost after tax.
  Status: **Lean execute — RSI is back above 65 (65.7) with P&L +28.2%.** MACD is still bearish, which argues for
    taking it on this push. The after-tax break-even is ~€93.78; a limit near €92 gets closer to it.

  SAP: Sell 5 of 7 shares at €213.45 → ~€1,067 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€427
  After CGT (€80.59 on €383.75 gain) and commission, net cash is ~€982, **+€25 over cost after tax**.
  Status: **Monitor — execute on the next RSI push above 65.** RSI 61.7, MACD bearish. A limit sell near €214 would
    catch the next push (Friday's close was €0.55 below it). After-tax break-even ~€207.05.

  ACN: **still lapsed.** Selling 4 of 6 at €228.90 grosses ~€916 against €846.60 cost, but nets ~€837 after CGT
    (€73.75) and commission, €9 short of cost. It requalifies above ~€231.82. Status: Monitor. RSI 63.4, MACD bearish.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€721).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€367).
  REL (+18.7%), ZOE (+18.3%) and BIRK (+13.2%) are below the 25% threshold.

PORTFOLIO RISKS TO WATCH
  - The bearish overlay (3 puts plus the ORCL short) is ~€2,535, 11.4% of net value, and it has driven the total for
    two weeks. The three puts are marked at €2,403 against €2,176 cost, but €1,169 of that is the NBIS put on a hand
    estimate. That one position has moved between ~€617 and ~€1,169 in three sessions.
  - Three positions carry full exit recommendations (SFM day 12, ERO and EDEN on broken stops), together ~€2,411 at a
    combined realized loss of ≈ −€460. None has been executed.
  - Six of the ten names above SMA50 have a bearish MACD (ACN, SAP, WKL, REL, ZOE, LULU), including the three biggest
    winners still above their average.
  - Below SMA50: IQV, KLR, EDEN, ADBE, FLUT, SFM and ERO, ~26% of the long book (IQV joined on Friday). QXO-PB and PRX
    are each within 1% of their SMA50.
  - No stop orders are in place on any position.
  - Data: the NBIS put is still marked by hand. The causes of the NBIS move (−25% in two sessions) and FLUT's
    post-earnings fall weren't checked. Data-quality results for this run weren't available at write time.

NEXT ACTIONS
  1. NBIS put: decide whether to bank ≈ €541 net (~€1,169 at the estimated mark, 244% of cost) or hold (214 days left). Check the real bid.
  2. ORCL put: close it (rule fired; ORCL $125.35 vs the $120 strike; ~€629 at the mark, ≈ −€353). 33 days left.
  3. SFM: execute the Full Exit (~$521 / ~€472, ≈ −€255). Day 12.
  4. ERO: execute the Full Exit on the broken stop (~$872 / ~€791, ≈ −€156).
  5. EDEN: execute the Full Exit, 45 shares (~€1,148, ≈ −€49), unless Monday closes back above €25.77.
  6. WKL: free ride, sell 12 of 15 (limit ~€92, or at market ~€90.84 for ~€1,035 net). RSI 65.7.
  7. SAP: place a limit sell for 5 shares near €214, or execute on an RSI close above 65 (+€25 over cost after tax now).
  8. ORCL short: cover 5 shares on a close above ~$130.03. PLTR put: hold.
  9. KLR: sell all 10 free shares on a close below 2,900p or RSI under 35. IQV: sell the 3 free shares on RSI under 40.
     LULU: watch the ~$103.81 stop ref.
  10. Optional entries: CF at ~$125.09 (€1,000), MONY at ~210.8p (€1,000), IAG at ~452.9p (€1,000). Cash covers one now.
  11. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it. Read FLUT's 11-12 results.
════════════════════════════════════════════════════════
