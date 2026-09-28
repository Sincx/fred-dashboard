════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-09-29
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

PORTFOLIO SNAPSHOT
  Positions:        22 open (18 long equity, 1 short, 3 options)
  Total Value:      ~€18,650 (estimated; long equity €16,059 + options mtm €1,323 + short unrealized P&L +€46 + cash €1,223)
  Available Cap:    €1,222.86 cash (unchanged since 2026-09-21 — re-verified against Turso trades + cash_ledger at 23:40, no new entries)
  Best Performer:   IQV +65.2%
  Worst Performer:  SFM -20.9%
  Largest Position: SAP (~8.0% of long book)

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ APH      │ +17.94%    │ 59.2    │ ↑     │ Hold     │ —                 │ 444 │
  │ IQV      │ +65.24%    │ 61.1    │ ↑     │ 👀 Watch │ ✅ free-ridden    │ 626 │
  │ KLR      │ +42.18%    │ 77.7 ⚠  │ ↑     │ Hold     │ ✅ free-ridden    │ 39  │
  │ SAP      │ +34.62%    │ 53.0    │ ↑     │ 👀 Watch │ MACD bearish      │ 308 │
  │ GSK      │ -4.10%     │ 48.1    │ ↓     │ 👀 Watch │ Earnings 10-28    │ 31  │
  │ EDEN     │ +6.14%     │ 47.2    │ ↓     │ 👀 Watch │ +2.5% Mon         │ —   │
  │ ACN      │ ~+8.7%     │ 42.9    │ ↓     │ 👀 Watch │ slipped < SMA50   │ —   │
  │ ADBE     │ -7.54%     │ 34.5    │ ↓     │ 🔴 Exit  │ reassess ~10-08   │ 26  │
  │ FLUT     │ -16.80%    │ 26.2    │ ↓     │ 🔴 Exit  │ -7.9% Mon; ER11-12│ —   │
  │ PRX      │ -12.51%    │ 45.3    │ ↓     │ 👀 Watch │ —                 │ 579 │
  │ WKL      │ -5.06%     │ 47.2    │ ↓     │ 👀 Watch │ slipped < SMA50   │ 68  │
  │ LULU     │ -14.86%    │ 41.0    │ ↓     │ 👀 Watch │ —                 │ 18  │
  │ SFM      │ -20.85%    │ 28.7    │ ↓     │ 🔴 Exit  │ decide by ~10-05  │ 162 │
  │ ZOE      │ -0.82%     │ 46.3*   │ ↓     │ 👀 Watch │ *carried 09-28 AM │ —   │
  │ REL      │ -4.37%     │ 44.2    │ ↓     │ 👀 Watch │ -1.9% Mon         │ 181 │
  │ ORCL(sh) │ +11.53%    │ 37.3    │ ↓     │ Hold     │ short working     │ 620 │
  │ META     │ -4.05%     │ 60.9    │ ↑     │ Hold     │ -4.8% Mon; call→0 │ 258 │
  │ ERO      │ +7.47%     │ 57.2    │ ↑     │ Hold     │ —                 │ —   │
  │ QXO-PB   │ +11.02%    │ 59.3    │ ↑     │ Hold     │ back above SMA50  │ —   │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  Freshness: this is the 23:30 run, after US close. Turso's `prices` table had NOT yet
  taken Monday's closes: US names were still on Friday 09-25 and EU/UK on this morning's
  intraday prints, identical to the 12:15 briefing. So every price, RSI, SMA50 and MACD above
  was recomputed from Monday 2026-09-28 CLOSES pulled directly via yfinance, using the same
  RSI14/SMA50/MACD(12,26,9) definitions. The wiki's price columns (Step 8) still come from
  Turso and will lag until refresh-technicals next runs.
  ACN: the yfinance series is the USD NYSE line ($174.47, below its $175.95 SMA50). The EUR
  value (~€153.4) is FX-converted, so its P&L% is approximate.
  ZOE: Yahoo returns no data for ZOE.PA, so it carries Turso's 09-28 intraday €62.70 and
  RSI 46.3.
  Changes since the 12:15 briefing: META fell 4.8% to $715.62 and its RSI dropped from 71.4 to 60.9;
  it is no longer extended. FLUT fell 7.9% to $76.63 (RSI 26.2). ORCL fell to $132.60, so the
  short is now +11.5%. QXO-PB is back above its SMA50 (Watch→Hold). ACN and WKL slipped below
  their SMA50s. SAP's MACD turned bearish. No holding reports earnings in the next 14 days.
  MF ranks are unchanged from this morning. magic-formula-screen is healthy again, so the
  51h-stale banner from the 12:15 run is cleared.

PORTFOLIO SHAPE
  Concentration:   OK — largest is SAP at 8.0% of the long book (EDEN 7.9%, META 7.8%); nothing near 25%
  Sector spread:   Enterprise Software (SAP/ACN/ADBE) 20.1% | Healthcare (IQV/GSK/ZOE) 17.3% |
                   Info Services (REL/WKL) 10.3% | Fintech (EDEN) 7.9% | META 7.8% |
                   Consumer (LULU/SFM) 7.3% | QXO-PB 7.0% | Intl SOTP (PRX) 6.7% |
                   APH 6.5% | Materials (ERO) 6.1% | UK Industrials (KLR) 2.5% | FLUT 0.4%
                   → Tech/AI-linked (software + APH + META) = 34.4% of the long book
  Currency split:  USD 46.0% | EUR 40.5% | GBp 13.5%  (of €16,059 long equity)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  No sell or trim executed. The three Exit signals stay under their existing patience overrides,
  or are too small to trade:
  SFM: Exit signal. Patience window is on day 7; decide by ~2026-10-05. RSI 28.7, up slightly from 25.8, with a +1.5% bounce Monday.
    A 50% trim (5 sh ≈ $317) is still below the ~$500 minimum viable trade, so the only real choices are hold or full exit.
    Full exit (10 sh @ $63.45): proceeds ≈ $634.50 ≈ €558 → €554 after commission
    Gross loss ≈ -€147 | CGT €0 | Net ≈ -€151 (realised)
  ADBE: Exit signal (RSI 34.5, below SMA50 $257.29, MACD bearish). Patience window is on day 4; reassess by ~2026-10-08.
    Now $231.01, below its 1.5×ATR stop reference (~$236.5) for a second session. The Burry fat-pitch thesis is the reason for holding.
    Maximum 50% trim is 3 sh ≈ $693 → gross loss ≈ -€50, CGT €0, net ≈ -€54.
  FLUT: Exit signal, sharper after Monday's -7.9% (RSI 26.2, -16.8%). Still not executable: 1 sh ≈ $77, so the $5
    commission would be ~6.5% of the trade. Free-to-ride designation stands; revisit at 11-12 earnings.
  Expected proceeds: none today

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. The only holdings with RSI 35–50 and a bullish MACD (GSK, PRX, LULU) are all below their SMA50.

  ── NEW POSITIONS ──────────────────────────────────────
  IAG: Enter at 437.2p — Turso screen 5/5, Technical Buy, RSI 55.3, MACD bullish, above SMA50 (431.7p)
  Stop: 421.3p | Size: €1,500 target (cash only covers ~€1,000 → ~196 sh)
  FOUR: Enter at 4,526p — Turso screen 4/5, Technical Buy, RSI 57.5, MACD bullish, above SMA50 (4,437p)
  Stop: 4,194.5p | Size: €1,000 (~25 sh)
  MO: Wait for the MACD to cross back up before entering at ~$69.13. The screen still scores it 5/5 on Friday data, but
    Monday's close flipped MACD bearish, which makes it 4/5 today.
  Stop: $67.14 | Size: €1,000 (reduced from €1,500 until MACD re-crosses)
  Cash constraint: €1,223 covers one ~€1,000 entry. IAG is the top pick tonight. All three ideas are re-recorded to the
  Pending Trade Ideas queue (2026-09-29 rows). Nothing was executed; that decision is Mike's.

INVESTMENT OPPORTUNITIES
  5/5 · IAG (FTSE350, Industrials — airlines) — Magic Formula pass, P/E 7.4, EY 19.4%, ROIC 27.5% | MF#6
  Entry: 437.2p | Stop: 421.3p | Size: €1,500 | RSI: 55.3 | MACD: Bullish
  Conviction: MF#6; Magic Formula pass; corroborated by llm-research, briefing-recommendation; bullish MACD; RSI healthy at 55.
  Portfolio fit: adds GBp exposure (book only 13.5% GBp). Industrials would be ~9.5% of the book with KLR + QXO-PB. Cyclical/fuel-price risk.
    Fifth consecutive review on the screen.

  4/5 · FOUR (FTSE350, Communication Services — 4imprint promo products) — MF ranked (no pass), P/E 15.8, EY 9.1%, ROIC 366% | MF#10
  Entry: 4,526p | Stop: 4,194.5p | Size: €1,000 | RSI: 57.5 | MACD: Bullish
  Conviction: MF#10; Magic Formula ranked (no pass); bullish MACD; RSI healthy at 57.
  Portfolio fit: new sector for the book. Asset-light, very high ROIC. GBp listing but US-revenue business.

  4/5 · MO (S&P 500, Consumer Staples) — Magic Formula pass, P/E 14.3, EY 11.4%, ROIC 46.1%, div 6.5% | MF#9
  Entry: ~$69.13 on MACD re-cross | Stop: $67.14 | Size: €1,000 | RSI: 51.6 | MACD: Bearish (crossed 09-28)
  Conviction: MF#9; Magic Formula pass; corroborated by llm-research, briefing-recommendation. Price is still above SMA50 ($68.86), but momentum rolled over.
  Portfolio fit: defensive, low-beta income name that offsets the 34.4% tech/AI tilt. Adds USD (already 46%). Tobacco ESG/regulatory risk.

FREE RIDE OPPORTUNITIES
  IQV: ✅ Already free-ridden — cumulative trim proceeds $2,117.62 exceed the $1,967.88 original cost;
    3 sh held at zero effective cost | Current value: ~€715
  KLR: ✅ Already free-ridden — trim proceeds £1,326.40 exceed the £1,209.00 original cost;
    10 sh held at zero effective cost | Current value: ~€401 | RSI 77.7 but only 2.5% of the book, so no Trim signal
  SAP (+34.6%): Sell 6 of 7 sh at €184.02 → ~€1,104 proceeds covers cost basis (€956.90)
    Free position: only 1 share → below the ≥2 free-share threshold. Not flagged; monitor.
  No other positions currently meet free ride criteria.

PORTFOLIO RISKS TO WATCH
  - Tech/AI concentration: 34.4% of the long book. Monday showed both sides of the hedge: META fell 4.8%
    (-€63 on the shares), while the ORCL short (+€46 unrealized) and ORCL $120 put (mark ~€759, up from ~€654)
    gained as ORCL fell to $132.60. The PLTR $125 put is ~€557.
  - Three live Exit signals and no stop-losses anywhere in the book. SFM (-21%) and ADBE (-7.5%, below its ATR
    stop reference) have patience deadlines ~10-05 and ~10-08. FLUT is -16.8%, but it's 1 share (€67), so the risk is immaterial.
  - The META $885 Oct-09 call is now worth ~$8 (€7) of the $308 paid, after META fell to $715.62 (24% OTM, 8 trading days left).
    It is effectively worthless; selling isn't worth the $5 commission. Let it lapse.
  - Data freshness: refresh-technicals had not yet written Monday closes to Turso at 23:40. This briefing's
    numbers come from a direct yfinance pull, but the wiki/dashboard price columns will lag until the next
    refresh. Data-quality retry pass: all non-ok rows remain NEEDS MANUAL REVIEW; none are holdings or tonight's
    candidates. The ~57-ticker EU technicals failure cluster (e.g. ARGX, UN01, NGG, SKG — 15 consecutive days, "all
    sources failed") is still one systematic EU suffix/mapping bug, plus SKYT (US technicals, 11) and VAR1 (EU fundamentals, 5).
  - FX: USD is 46% of the long book. EUR/USD is 1.137 and falling (daily RSI 25, euro oversold). A stronger USD currently flatters the EUR value of the USD book, and a snap-back would reverse that.

NEXT ACTIONS
  1. SFM: decide by ~2026-10-05 between holding and a FULL exit (10 sh ≈ $635). A 50% trim is below minimum trade size.
  2. ADBE: reassess by ~2026-10-08. It has now closed below the ~$236.5 stop reference twice. If RSI stays <40, consider trimming 3 sh (max 50%).
  3. Pending Trade Ideas: cash covers one ~€1,000 entry. The top pick is IAG (limit 437.2p, stop 421.3p). Hold MO until its MACD re-crosses bullish.
  4. META $885 call (exp 2026-10-09): let it lapse. The ~$8 residual is below the $5 commission's worth.
  5. Check why refresh-technicals hadn't picked up Monday 09-28 closes by 23:40, and fix the EU technicals mapping bug (~57 tickers).
  6. GSK and SFM earnings 2026-10-28; FLUT earnings 2026-11-12. Reassess after each.
════════════════════════════════════════════════════════
