════════════════════════════════════════════════════════
  PORTFOLIO MANAGEMENT BRIEFING — 2026-10-21
════════════════════════════════════════════════════════
Portfolio management exercise — not financial advice. Confirm independently before trading.

Pipeline health: OK, all tracked tasks healthy. This is Wednesday night's 23:30 slot. The 10-20 briefing was
written late (16:02 today, after its delayed slot), so this is a separate, full run, not a duplicate.
Turso check: no new trades or cash_ledger entries for trading-portfolio since 10-01.
Price source: Turso still holds prior-session closes (US/ACN 10-20; KLR/REL 10-19), and the view script's GBPUSD
fetch failed, so GBp rows came back with no EUR value. Every figure below therefore uses a direct yfinance pull of
**Wed 10-21 closes** for all holdings, with RSI(14), SMA50, MACD and ATR recomputed. ACN uses Xetra CSA.DE and ZOE
uses ZOE.DE. The wiki price cells (synced from Turso) will lag this briefing by a day.
Data quality: check_data_quality.py was started in the background at the start of this run and hadn't finished
when the briefing was written. It finished afterwards: 299 auto-recovered and 234 still failing. The UK technicals
for GSK, REL, KLR, MONY and AUTO were recovered via yfinance. The failures that matter for holdings are known repeats:
  - ZOE and QXO-PB fundamentals are missing (11+ consecutive failures), so they have no MF#.
  - NBIS option_mark is missing strike, expiry and option type (39+ consecutive failures). This needs a manual Turso fix.

PORTFOLIO SNAPSHOT
  Positions:        21 open (17 long equity, 1 short, 3 options)
  Total Value:      ~€20,782 (estimated: long equity €17,249 + options ~€1,525 + ORCL short unrealized +€113 + cash €1,895)
                    −€157 vs 10-20's €20,939. Long equity lost €136: EDEN fell 9.5% (−€124), LULU 3.4%, PRX 3.1% and
                    ERO 2.8%. SAP (+3.5%) and IQV (+3.3%) partly offset that. Options lost ~€29: the PLTR put
                    dropped ~€75 as PLTR rose 4.7%, and the ORCL put gained ~€49 as ORCL slid 1.5%. The ORCL short
                    gained ~€9.
  Available Cap:    €1,895.31 cash
  Best Performer:   IQV +68.7%
  Worst Performer:  SFM −18.3% (PRX −16.0%, FLUT −15.0%, LULU −14.5%)
  Largest Position: GSK (9.0% of long book; LULU 9.0%, SAP 8.5%, REL 8.2%)
  FX:               EUR/USD 1.1235 | GBP/EUR 1.1920 | Prices are Wed 10-21 closes

POSITION SIGNALS
  ┌──────────┬────────────┬─────────┬───────┬──────────┬───────────────────┬─────┐
  │ Ticker   │ P&L%       │ RSI(14) │ vs50d │ Signal   │ Catalyst          │ MF# │
  ├──────────┼────────────┼─────────┼───────┼──────────┼───────────────────┼─────┤
  │ IQV      │ +68.7%     │ 63.4    │ ↑     │ Hold     │ Q3 late Oct (tbc) │ 602 │
  │ ACN      │ +52.7%     │ 76.5    │ ↑     │ Hold     │ overbought; FR ✓  │ 36  │
  │ SAP      │ +52.6%     │ 74.3    │ ↑     │ Hold     │ Q3 out 10-21 pm   │ 310 │
  │ KLR      │ +32.0%     │ 50.7    │ ↑     │ Watch    │ free-ridden       │ 53  │
  │ WKL      │ +19.7%     │ 80.3    │ ↑     │ Hold     │ overbought        │ 69  │
  │ REL      │ +15.0%     │ 79.7    │ ↑     │ Hold     │ overbought        │ 174 │
  │ ZOE      │ +12.0%     │ 72.9    │ ↑     │ Hold     │ overbought        │ —   │
  │ ADBE     │ +2.1%      │ 56.7    │ ↓     │ Watch    │ $0.62 below SMA50 │ 18  │
  │ BIRK     │ +0.8%      │ 43.8    │ ↓     │ Watch    │ MACD turned bear  │ 232 │
  │ EDEN     │ −0.3%      │ 37.4    │ ↓     │ Watch    │ −9.5% on 10-21    │ —   │
  │ GSK      │ −3.7%      │ 56.6    │ ↑     │ Hold     │ Earnings 10-28    │ 31  │
  │ ERO      │ −8.1%      │ 36.4    │ ↓     │ EXIT     │ Exit day 2        │ 80  │
  │ QXO-PB   │ −9.4%      │ 39.4    │ ↓     │ EXIT     │ new mech. Exit    │ —   │
  │ LULU     │ −14.5%     │ 45.4    │ ↓     │ Watch    │ trim < $88.54     │ 23  │
  │ FLUT     │ −15.0%     │ 43.1    │ ↓     │ Watch    │ Earnings 11-12    │ —   │
  │ PRX      │ −16.0%     │ 39.2    │ ↓     │ Watch    │ 1 cond. from Exit │ 539 │
  │ SFM      │ −18.3%     │ 44.0    │ ↓     │ Watch    │ Q3 late Oct (tbc) │ 128 │
  │ ORCL (S) │ +16.4%     │ 41.1    │ ↓     │ Hold     │ short working     │ 543 │
  └──────────┴────────────┴─────────┴───────┴──────────┴───────────────────┴─────┘
  P&L% uses Turso entry prices. KLR/WKL entries in Turso (2,418p / €71.08) differ slightly from the reconciled
  real fills (2,400p / €70.88), so the reconciled P&L is ~+1pt higher for KLR and +0.3pt higher for WKL.
  MF# is a full-universe rank (~1,350 tickers). ACN now shows MF#36: the lookup ran on the NYSE ACN fundamentals,
  where earlier briefings showed "—" for the Xetra listing. That's the same company, not a data jump.
  ORCL (S) P&L is the short's gain on entry ($154.552 → $129.13).
  Signal changes vs 10-20:
  - QXO-PB: Watch → **Exit** ($34.70, RSI 39.4, below SMA50 $39.26, MACD bearish).
  - ERO: still **Exit** (2nd day), $31.99, RSI 36.4. It's now $0.49 above the alternative $31.50 hard stop.
  - EDEN: Hold → Watch. It fell 9.5% to €26.46 (RSI 37.4, below SMA50 €28.71); MACD is still bullish. Its Q3 revenue
    release was expected around 10-21, but this run couldn't confirm the cause of the drop. Check the news before acting.
  - ADBE: Hold → Watch ($255.06, just under SMA50 $255.68).
  - IQV: Watch → Hold (MACD turned bullish, +3.3%).
  - BIRK: still Watch, but MACD has turned bearish. Only RSI ≥40 (43.8) separates it from Exit.

PORTFOLIO SHAPE
  Concentration:   OK — no position ≥25% (largest GSK 9.0%)
  Sector spread:   Tech/Software (SAP, ACN, ADBE) 22.5% | Healthcare (GSK, ZOE, IQV) 19.5% | Consumer (LULU, BIRK, SFM) 16.5% |
                   Info services (REL, WKL) 15.6% | Industrials (QXO-PB, KLR) 7.6% | Fintech EDEN 6.9% | Internet/SOTP PRX 6.0% |
                   Materials ERO 5.0% | iGaming FLUT 0.4%
                   The book is balanced, with no sector above 25%. Tech/Software keeps creeping up as SAP and ACN rally.
                   There's still no energy or staples exposure. If both Exits are taken, Industrials falls to ~2% (KLR only)
                   and Materials to zero.
  Currency split:  EUR 42.4% | USD 38.1% | GBp 19.5% (long book)

TODAY'S TRADE IDEAS
  ── SELLS / TRIMS ──────────────────────────────────────
  ERO: Full Exit (mechanical Exit, 2nd day). It slid another 2.8% to $31.99. RSI 36.4, 11% below SMA50 $36.00, MACD bearish.
  Expected proceeds: ~$960 (≈€854). Realized loss ≈ −€75 plus ~€4.45 commission, so no CGT.
    If you're still giving the copper thesis time, the $31.50 hard stop is now only 1.5% away. Treat a close below
    it as final.

  QXO-PB: Full Exit (new mechanical Exit). Close $34.70, RSI 39.4, 11.6% below SMA50 $39.26, MACD bearish. It has
    already closed below the earlier $35.10 stop ref.
  Expected proceeds: ~$1,041 (≈€927). Realized loss ≈ −€96 plus ~€4.45 commission, so no CGT.
    Alternative: a hard stop at $32.16 (1.5×ATR below the close). This is a preferred share, so it should trade more
    slowly than QXO common.
  No Trim signals. No position is ≥20% weight, so the Trim rule can't fire.
  Discretionary watch (not a signal):
  - SAP (RSI 74.3) and ACN (RSI 76.5) both qualify as free rides now. See FREE RIDE below; that's the preferred way to
    take profit.
  - WKL 80.3, REL 79.7, ACN 76.5, SAP 74.3 and ZOE 72.9 are all overbought together, about 38% of the long book.
  - SFM: −18.3%, RSI 44.0, still below SMA50 ($72.55). Keep the hard stop at $60.85.
  - PRX: RSI 39.2 and below SMA50. Only its bullish MACD keeps it off Exit. The trim-50% rule triggers on a close
    below €33.03.

  ── ADDS TO EXISTING ───────────────────────────────────
  No Add signals. Nothing is RSI 35–50 above SMA50 with a bullish MACD. The closest is KLR (RSI 50.7, above SMA50),
  but its MACD is bearish and the position is already free-ridden, so it doesn't need an add.

  ── NEW POSITIONS ──────────────────────────────────────
  MONY: Enter at ~198.9p (Wed close; RSI has cooled to 62) — Turso screen 5/5, MF#14 | Stop: 188.0p | Size: €1,000
  AUTO: Enter at ~530.2p (Wed close) — Turso screen 5/5, MF#15, corroborated by llm-research | Stop: 509.1p | Size: €1,000
  TRN:  Enter at ~222.2p (Wed close, −2.6% pullback) — Turso screen 5/5, MF#37 | Stop: 207.2p | Size: €1,000
  MONY and AUTO are both UK online marketplaces in Communication Services, so pick one of them, not both.
  Cash is €1,895 before any Exit proceeds, which funds one entry plus a starter. Taking both Exits (+≈€1,772 net) would
  fund all three and still leave reserve. MONY was already an active Pending Trade Idea, so no duplicate card was
  created. AUTO and TRN are new cards.
  MEGP (−5.0% to 113.4p, below SMA50 and its 10-20 entry) and NEM fell out of today's Buy-rated screen. Their pending
  cards stay open until they expire.

INVESTMENT OPPORTUNITIES
  5/5 · MONY (FTSE350, Communication Services — MONY Group) — Magic Formula pass, P/E 11.3, EY 12.5%, ROIC 33.6% | MF#14
  Entry: 198.9p (10-21 close) | Stop: 188.0p (1.5×ATR 7.2p) | Size: €1,000 | RSI: 62.1 | MACD: Bullish
  Conviction: MF#14; Magic Formula pass; corroborated by briefing-recommendation; bullish MACD; RSI healthy at 66 (Turso, 10-19).
  Portfolio fit: a new sector for the book, with GBp exposure. RSI has eased from 65 to 62, so it's now normal size,
    not a starter.

  5/5 · AUTO (FTSE350, Communication Services — Auto Trader Group) — Magic Formula pass, P/E 13.3, EY 10.5%, ROIC 49.0% | MF#15
  Entry: 530.2p (10-21 close) | Stop: 509.1p (1.5×ATR 14.0p) | Size: €1,000 | RSI: 63.9 | MACD: Bullish
  Conviction: MF#15; Magic Formula pass; corroborated by llm-research; bullish MACD; RSI healthy at 67 (Turso, 10-20).
  Portfolio fit: the highest-quality name on the screen, with independent llm-research corroboration. It overlaps
    MONY's sector and currency, so treat it as an either/or with MONY.

  5/5 · TRN (FTSE350, Consumer Discretionary — Trainline) — Magic Formula pass, P/E 10.4, EY 13.9%, ROIC 21.0% | MF#37
  Entry: 222.2p (10-21 close) | Stop: 207.2p (1.5×ATR 10.0p) | Size: €1,000 | RSI: 62.2 | MACD: Bullish
  Conviction: MF#37; Magic Formula pass; bullish MACD; RSI healthy at 62.
  Portfolio fit: GBp platform business. It would lift the Consumer sleeve from 16.5% to ~21%, still under 25%.

  Also considered: DNLM (5/5, MF#20, RSI 68.0 — exited in Sept at a loss), TMV (5/5, RSI 72.5 after a 6.3% jump,
    and Tech is already 22.5%), MO (4/5, RSI 64.7; it has cooled from 71 and is an active Pending idea at the $72.00
    limit, close $73.83, adding Staples), APA/EOG (4/5, RSI ~71, energy, EOG already pending), SAGA/EXPE (4/5, no MF pass).

FREE RIDE OPPORTUNITIES
  SAP: Sell 5 of 7 shares at €208.65 → ~€1,043 gross proceeds covers the cost basis (€956.90)
  Free position: 2 shares at zero effective cost | Current value: ~€417
  After CGT (€75.55 on €359.75 gain) and commission (~€4.45), net cash is ~€963, which fully recovers the cost (+€6).
  Status: **Consider executing.** RSI 74.3 is overbought, and this is the first day net proceeds fully cover the cost
    basis. Q3 results came out after Wednesday's close (22:05 CEST), so check Thursday's open reaction first. A beat
    gives a better price to sell into, and a miss argues for selling sooner.

  ACN: Sell 4 of 6 shares at €215.40 → ~€862 gross proceeds covers the cost basis (€846.60)
  Free position: 2 shares at zero effective cost | Current value: ~€431
  After CGT (€62.41 on €297.20 gain) and commission (~€4.45), net cash is ~€795, ~€52 short of full cost recovery.
  Status: **Consider executing now.** RSI 76.5 has been overbought for a third session. There's no Trim signal only
    because weight is 7.5%.

  IQV: ✅ Already free-ridden. All 3 remaining shares are held at zero effective cost (current value ~€739).
  KLR: ✅ Already free-ridden. All 10 remaining shares are held at zero effective cost (current value ~€381).

PORTFOLIO RISKS TO WATCH
  - Overbought cluster: WKL 80.3, REL 79.7, ACN 76.5, SAP 74.3 and ZOE 72.9 make up ~38% of the long book. A rotation
    out of quality and defensives would hit several at once. SAP's post-close Q3 print is the first test.
  - Downside cluster: ERO and QXO-PB are on Exit, PRX and BIRK are one condition away, and EDEN has just broken down
    (−9.5%). These five plus LULU, SFM and FLUT, all below SMA50, make up ~45% of the long book.
  - The bearish overlay (~€1,638: puts ~€1,525 + ORCL short +€113) slipped ~€20. PLTR's rally to $201.72 cost the
    PLTR put ~€75. The ORCL put now has 58 days left. The NBIS put (~€530) is still a hand estimate at 80% vol,
    because its Turso row lacks strike and expiry.
  - Catalyst-heavy fortnight: the SAP Q3 reaction on 10-22, EDEN's drop (cause unconfirmed), IQV and SFM late Oct,
    GSK 10-28, FLUT 11-12.
  - Data: Turso's prices table is a session behind and GBPUSD failed in the view script. This briefing used direct
    yfinance closes. The wiki cells show Turso's lagging values.

NEXT ACTIONS
  1. ERO and QXO-PB: decide on both Exits (~€854 + ~€927 proceeds, −€75 / −€96 realized). If you keep them, use the
     hard stops at $31.50 (ERO) and $32.16 (QXO-PB).
  2. SAP: check Thursday's Q3 reaction, then consider the 5-share free ride (~€963 net, full cost recovery, 2 shares free).
  3. ACN: consider the 4-share free-ride sale (~€862 gross, ~€795 net) while RSI is 76.
  4. EDEN: find out why it fell 9.5% on 10-21 (Q3 revenue?) before deciding whether the patience floor of €25.77 still holds.
  5. Optional entries: MONY or AUTO (pick one), plus TRN. Approve or reject them in the Pending Trade Ideas panel.
     Funding more than one depends on the Exit decisions.
  6. LULU: hold to ~11-03 and trim 9 shares only on a close below $88.54 (close $96.53). GSK earnings 10-28; stop ref ~1,766p.
  7. Fill in the NBIS put's strike, expiry and type in Turso so options_pricing.py can mark it.
════════════════════════════════════════════════════════
