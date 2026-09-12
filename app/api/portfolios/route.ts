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
  close: number | null;
  realized_pnl_partial: number | null;
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

async function fetchPortfolio(client: Client, portfolioId: string, name: string): Promise<PortfolioPayload> {
  const rs = await client.execute({
    sql: `${LATEST_PRICE_CTE}
      SELECT t.trade_id, t.ticker, t.exchange, t.strategy_id, t.direction, t.instrument_type,
             t.entry_date, t.entry_price, t.shares, t.currency, t.stop_loss, t.target1, t.target2,
             t.exit_date, t.exit_price, t.status, t.option_type, t.strike, p.close AS close,
             t.realized_pnl_partial
      FROM trades t
      LEFT JOIN ranked p ON p.ticker = t.ticker AND p.exchange = t.exchange AND p.rn = 1
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
    close: r.close as number | null,
    realized_pnl_partial: r.realized_pnl_partial as number | null,
  }));

  const open = rows.filter((r) => r.status === "open");
  const closed = rows.filter((r) => r.status === "closed");

  // GBX (pence) prices are ~100x their GBP value — same correction already
  // applied in v_portfolio_performance (schema.sql). Does not attempt full
  // GBP/EUR/USD normalization, matching that view's own documented, accepted
  // limitation (multi-currency portfolios still sum as if currencies were equal).
  const fxScale = (currency: string | null) => (currency === "GBX" ? 0.01 : 1.0);

  // Options excluded: shares (100/contract) × the underlying's price is its
  // full notional, not what the option position is worth — and entry_price
  // is NULL for options here anyway (Phase 7c: not recorded in the source).
  // Showing "—" is honest; a computed number here would be actively wrong.
  let openValue = 0, hasOpenValue = false;
  for (const r of open) {
    if (r.instrument_type === "equity" && r.shares != null && r.close != null) {
      openValue += (r.direction === "short" ? -1 : 1) * r.shares * r.close * fxScale(r.currency);
      hasOpenValue = true;
    }
  }
  let realizedPnl = 0, hasRealized = false;
  for (const r of closed) {
    if (r.shares != null && r.entry_price != null && r.exit_price != null) {
      realizedPnl += (r.direction === "short" ? -1 : 1) * r.shares * (r.exit_price - r.entry_price) * fxScale(r.currency);
      hasRealized = true;
    }
  }
  let unrealizedPnl = 0, hasUnrealized = false;
  for (const r of open) {
    if (r.shares != null && r.entry_price != null && r.close != null) {
      unrealizedPnl += (r.direction === "short" ? -1 : 1) * r.shares * (r.close - r.entry_price) * fxScale(r.currency);
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
  // positive) just recurs the moment it closes.
  let realizedPartialPnl = 0, hasRealizedPartial = false;
  for (const r of rows) {
    if (r.realized_pnl_partial != null) {
      realizedPartialPnl += r.realized_pnl_partial * fxScale(r.currency);
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
    const [p1, equity, trading, burry, equityCurve] = await Promise.all([
      fetchPortfolio(client, "paper-trading-p1", "Paper Trading Portfolio (P1)"),
      fetchPortfolio(client, "equity-pension", "Equity / Pension Portfolio"),
      fetchPortfolio(client, "trading-portfolio", "Trading Portfolio"),
      fetchPortfolio(client, "burry-shadow", "Michael Burry (Shadow)"),
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
