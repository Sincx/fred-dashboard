import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { getTursoClient } from "@/lib/turso";
import type { Client } from "@libsql/client";

// Phase 2 (P2.0a): P1 / Equity / Trading now come from Turso `trades` — the
// real backfilled trade history from Phase 1 — instead of fs.readFileSync
// over data/portfolios/*.md. Morning Briefing stays markdown: it's LLM-
// written prose (sell/trim/add cards, Free Ride Opportunities), not row data.

const DATA_DIR = path.join(process.cwd(), "data", "portfolios");

interface TradeRow {
  trade_id: string;
  ticker: string;
  exchange: string;
  strategy_id: string | null;
  direction: string;
  instrument_type: string;
  entry_date: string | null;
  entry_price: number | null;
  shares: number | null;
  currency: string | null;
  stop_loss: number | null;
  target1: number | null;
  target2: number | null;
  exit_date: string | null;
  exit_price: number | null;
  status: string;
  option_type: string | null;
  strike: number | null;
  expiry_date: string | null;
  premium: number | null;
  contracts: number | null;
  premium_flow: string | null;
  close: number | null;
  realized_pnl_partial: number | null;
  // Daily Black-Scholes mark from option_marks (options_pricing.py, added
  // 2026-09-14) — null for equity rows, and null for an option row that
  // hasn't been priced yet (e.g. a brand-new position before the next
  // refresh-technicals run), not fabricated as zero.
  option_mkt_value: number | null;
  option_unrealized_pnl: number | null;
  option_premium_estimate: number | null;
  option_mark_date: string | null;
}

interface PortfolioPayload {
  portfolio_id: string;
  name: string;
  open: TradeRow[];
  closed: TradeRow[];
  stats: {
    open_positions: number;
    closed_positions: number;
    open_value: number | null;
    net_pnl: number | null;
    win_rate: number | null;
  };
}

const LATEST_PRICE_CTE = `
  WITH ranked AS (
    SELECT ticker, exchange, close,
           ROW_NUMBER() OVER (PARTITION BY ticker, exchange ORDER BY date DESC) AS rn
    FROM prices
  )
`;

// Recommended Trades spec (2026-09-19) §1a — a trade's P&L needs converting
// to EUR at ITS OWN entry/exit date's rate, not today's: Trading Portfolio
// positions span months and FX moves meaningfully over that window. Sorted
// ascending per currency so rateOnOrBefore() can binary-search; built once
// per request and shared across all four portfolios (fx_rates is small,
// ~600 rows, no per-portfolio cost to re-fetch it).
type FxTable = Map<string, Array<{ date: string; rate: number }>>;

async function loadFxTable(client: Client): Promise<FxTable> {
  const rs = await client.execute("SELECT date, currency, usd_rate FROM fx_rates ORDER BY date ASC;");
  const table: FxTable = new Map();
  for (const r of rs.rows) {
    const ccy = r.currency as string;
    if (!table.has(ccy)) table.set(ccy, []);
    table.get(ccy)!.push({ date: r.date as string, rate: r.usd_rate as number });
  }
  return table;
}

// Latest known rate on or before `date` (falls back to the earliest known
// rate if `date` predates all history, rather than failing a position whose
// entry predates fx_rates' own backfill window).
function rateOnOrBefore(fx: FxTable, currency: string, date: string): number | null {
  const series = fx.get(currency);
  if (!series || series.length === 0) return null;
  let best: number | null = null;
  for (const point of series) {
    if (point.date <= date) best = point.rate;
    else break;
  }
  return best ?? series[0].rate;
}

const TODAY_ISO = new Date().toISOString().slice(0, 10);

// Converts a native-currency amount to EUR using the rate as of `date`.
// GBX (pence) is pre-scaled to its GBP value before the GBP cross-rate
// lookup. NULL currency is treated as USD, matching the schema's own
// documented convention for USD-equivalent-sized portfolios (paper-trading).
function toEUR(amount: number, currency: string | null, date: string | null, fx: FxTable): number {
  const native = currency === "GBX" ? amount * 0.01 : amount;
  const baseCcy = currency === "GBX" ? "GBP" : currency ?? "USD";
  const d = date ?? TODAY_ISO;
  if (baseCcy === "EUR") return native;
  const usdRate = rateOnOrBefore(fx, baseCcy, d);
  const eurRate = rateOnOrBefore(fx, "EUR", d);
  if (usdRate == null || eurRate == null) return native; // no rate available — better than silently dropping the position
  return (native * usdRate) / eurRate;
}

async function fetchPortfolio(client: Client, portfolioId: string, name: string, fx: FxTable): Promise<PortfolioPayload> {
  const rs = await client.execute({
    sql: `${LATEST_PRICE_CTE},
      latest_mark AS (
        SELECT trade_id, mkt_value, unrealized_pnl, premium_estimate, date,
               ROW_NUMBER() OVER (PARTITION BY trade_id ORDER BY date DESC) AS rn
        FROM option_marks
      )
      SELECT t.trade_id, t.ticker, t.exchange, t.strategy_id, t.direction, t.instrument_type,
             t.entry_date, t.entry_price, t.shares, t.currency, t.stop_loss, t.target1, t.target2,
             t.exit_date, t.exit_price, t.status, t.option_type, t.strike, t.expiry_date,
             t.premium, t.contracts, t.premium_flow, p.close AS close,
             t.realized_pnl_partial,
             m.mkt_value AS option_mkt_value, m.unrealized_pnl AS option_unrealized_pnl,
             m.premium_estimate AS option_premium_estimate, m.date AS option_mark_date
      FROM trades t
      LEFT JOIN ranked p ON p.ticker = t.ticker AND p.exchange = t.exchange AND p.rn = 1
      LEFT JOIN latest_mark m ON m.trade_id = t.trade_id AND m.rn = 1
      WHERE t.portfolio_id = ?
      ORDER BY t.entry_date DESC`,
    args: [portfolioId],
  });

  const rows: TradeRow[] = rs.rows.map((r) => ({
    trade_id: r.trade_id as string,
    ticker: r.ticker as string,
    exchange: r.exchange as string,
    strategy_id: r.strategy_id as string | null,
    direction: r.direction as string,
    instrument_type: r.instrument_type as string,
    entry_date: r.entry_date as string | null,
    entry_price: r.entry_price as number | null,
    shares: r.shares as number | null,
    currency: r.currency as string | null,
    stop_loss: r.stop_loss as number | null,
    target1: r.target1 as number | null,
    target2: r.target2 as number | null,
    exit_date: r.exit_date as string | null,
    exit_price: r.exit_price as number | null,
    status: r.status as string,
    option_type: r.option_type as string | null,
    strike: r.strike as number | null,
    expiry_date: r.expiry_date as string | null,
    premium: r.premium as number | null,
    contracts: r.contracts as number | null,
    premium_flow: r.premium_flow as string | null,
    close: r.close as number | null,
    realized_pnl_partial: r.realized_pnl_partial as number | null,
    option_mkt_value: r.option_mkt_value as number | null,
    option_unrealized_pnl: r.option_unrealized_pnl as number | null,
    option_premium_estimate: r.option_premium_estimate as number | null,
    option_mark_date: r.option_mark_date as string | null,
  }));

  const open = rows.filter((r) => r.status === "open");
  const closed = rows.filter((r) => r.status === "closed");

  // Options: shares (100/contract) × the underlying's price is its full
  // notional, not what the option position is worth, so equity-style Value/
  // P&L math is skipped for them — but option_mkt_value/option_unrealized_pnl
  // (Black-Scholes marks from options_pricing.py, added 2026-09-14) ARE real
  // computed numbers now, so they're counted here instead of being silently
  // omitted from the portfolio-level totals. Converted at today's rate (the
  // mark itself is always as-of today, per options_pricing.py's own design).
  let openValue = 0, hasOpenValue = false;
  for (const r of open) {
    if (r.instrument_type === "equity" && r.shares != null && r.close != null) {
      openValue += (r.direction === "short" ? -1 : 1) * r.shares * toEUR(r.close, r.currency, TODAY_ISO, fx);
      hasOpenValue = true;
    } else if (r.instrument_type === "option" && r.option_mkt_value != null) {
      openValue += toEUR(r.option_mkt_value, r.currency, TODAY_ISO, fx);
      hasOpenValue = true;
    }
  }
  // Each leg converted at ITS OWN date's rate (§1a) — an entry and exit
  // months apart can see meaningfully different FX, so converting the raw
  // native-currency difference at one rate (the old approach) understates
  // or overstates realized P&L by however much the currency moved between
  // the two dates.
  let realizedPnl = 0, hasRealized = false;
  for (const r of closed) {
    if (r.shares != null && r.entry_price != null && r.exit_price != null) {
      const entryEur = toEUR(r.entry_price, r.currency, r.entry_date, fx);
      const exitEur = toEUR(r.exit_price, r.currency, r.exit_date, fx);
      realizedPnl += (r.direction === "short" ? -1 : 1) * r.shares * (exitEur - entryEur);
      hasRealized = true;
    }
  }
  let unrealizedPnl = 0, hasUnrealized = false;
  for (const r of open) {
    if (r.instrument_type === "equity" && r.shares != null && r.entry_price != null && r.close != null) {
      const entryEur = toEUR(r.entry_price, r.currency, r.entry_date, fx);
      const closeEur = toEUR(r.close, r.currency, TODAY_ISO, fx);
      unrealizedPnl += (r.direction === "short" ? -1 : 1) * r.shares * (closeEur - entryEur);
      hasUnrealized = true;
    } else if (r.instrument_type === "option" && r.option_unrealized_pnl != null) {
      unrealizedPnl += toEUR(r.option_unrealized_pnl, r.currency, TODAY_ISO, fx);
      hasUnrealized = true;
    }
  }
  // Realized-but-not-otherwise-counted: a T1/T2 partial exit banks real $
  // that only ever lives in this column — `shares` gets reduced to the
  // remainder so it's never part of unrealizedPnl (open) or realizedPnl
  // (closed, since that's computed off the same reduced shares vs entry).
  // Runs over BOTH open and closed rows: a position with a prior partial
  // exit that later fully closes still needs this counted, or the same
  // bug (found 2026-09-12: $5,872 across 7 P1 positions was invisible,
  // enough to flip the portfolio's displayed Net P&L from negative to
  // positive) just recurs the moment it closes. No single date is attached
  // to this running-total field (it accumulates across possibly multiple
  // tranche sales) — converted at exit_date if closed, else entry_date, as
  // the best available anchor; an approximation, not exact per-tranche FX.
  let realizedPartialPnl = 0, hasRealizedPartial = false;
  for (const r of rows) {
    if (r.realized_pnl_partial != null) {
      const anchorDate = r.exit_date ?? r.entry_date ?? TODAY_ISO;
      realizedPartialPnl += toEUR(r.realized_pnl_partial, r.currency, anchorDate, fx);
      hasRealizedPartial = true;
    }
  }
  const wins = closed.filter((r) => {
    if (r.entry_price == null || r.exit_price == null) return false;
    return r.direction === "short" ? r.exit_price < r.entry_price : r.exit_price > r.entry_price;
  }).length;

  return {
    portfolio_id: portfolioId,
    name,
    open,
    closed,
    stats: {
      open_positions: open.length,
      closed_positions: closed.length,
      open_value: hasOpenValue ? openValue : null,
      net_pnl: hasRealized || hasUnrealized || hasRealizedPartial
        ? realizedPnl + unrealizedPnl + realizedPartialPnl : null,
      win_rate: closed.length ? (wins / closed.length) * 100 : null,
    },
  };
}

async function fetchEquityCurve(client: Client, portfolioId: string) {
  const rs = await client.execute({
    sql: `SELECT exit_date, ticker,
                 SUM((CASE WHEN direction = 'short' THEN -1 ELSE 1 END) * shares * (exit_price - entry_price))
                   OVER (ORDER BY exit_date, trade_id) AS cumulative
          FROM trades
          WHERE portfolio_id = ? AND status = 'closed' AND exit_date IS NOT NULL
                AND shares IS NOT NULL AND entry_price IS NOT NULL AND exit_price IS NOT NULL
          ORDER BY exit_date, trade_id`,
    args: [portfolioId],
  });
  return rs.rows.map((r) => ({
    date: r.exit_date as string,
    ticker: r.ticker as string,
    cumulative: Math.round((r.cumulative as number) * 100) / 100,
  }));
}

export async function GET() {
  try {
    const client = getTursoClient();
    const fx = await loadFxTable(client);
    const [p1, equity, trading, burry, equityCurve] = await Promise.all([
      fetchPortfolio(client, "paper-trading-p1", "Paper Trading Portfolio (P1)", fx),
      fetchPortfolio(client, "equity-pension", "Equity / Pension Portfolio", fx),
      fetchPortfolio(client, "trading-portfolio", "Trading Portfolio", fx),
      fetchPortfolio(client, "burry-shadow", "Michael Burry (Shadow)", fx),
      fetchEquityCurve(client, "paper-trading-p1"),
    ]);

    let briefing = "";
    try {
      briefing = fs.readFileSync(path.join(DATA_DIR, "morning-briefing.md"), "utf-8");
    } catch {
      briefing = "Error reading morning-briefing.md";
    }

    return NextResponse.json({ p1, equity, trading, burry, equityCurve, briefing });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
