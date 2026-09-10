import { NextResponse } from "next/server";
import { getTursoClient } from "@/lib/turso";

export interface UniverseRow {
  ticker: string;
  exchange: string;
  sector: string | null;
  index_membership: string;
  close: number | null;
  pct_1d: number | null;
  ma20: number | null;
  ma50: number | null;
  ma200: number | null;
  rsi14: number | null;
  macd_signal: string | null;
  technical_rating: string | null;
  currency: string | null;
  date: string | null;
}

export async function GET() {
  try {
    const client = getTursoClient();
    // prices has no pct_1d/pct_1w column — computed here from consecutive
    // daily rows instead (returns NULL until 2+ days of history exist for
    // a ticker; technicals.py only started running 2026-09-10).
    const rs = await client.execute(`
      WITH ranked AS (
        SELECT ticker, exchange, date, close, ma20, ma50, ma200, rsi14,
               macd_signal, technical_rating, currency,
               ROW_NUMBER() OVER (PARTITION BY ticker, exchange ORDER BY date DESC) AS rn
        FROM prices
      )
      SELECT u.ticker, u.exchange, u.sector, u.index_membership,
             r.close, r.ma20, r.ma50, r.ma200, r.rsi14,
             r.macd_signal, r.technical_rating, r.currency, r.date,
             ROUND((r.close - prev.close) / NULLIF(prev.close, 0) * 100, 2) AS pct_1d
      FROM universe u
      LEFT JOIN ranked r ON r.ticker = u.ticker AND r.exchange = u.exchange AND r.rn = 1
      LEFT JOIN ranked prev ON prev.ticker = u.ticker AND prev.exchange = u.exchange AND prev.rn = 2
      WHERE u.active = 1
      ORDER BY u.ticker ASC;
    `);
    const rows: UniverseRow[] = rs.rows.map((r) => ({
      ticker: r.ticker as string,
      exchange: r.exchange as string,
      sector: r.sector as string | null,
      index_membership: r.index_membership as string,
      close: r.close as number | null,
      pct_1d: r.pct_1d as number | null,
      ma20: r.ma20 as number | null,
      ma50: r.ma50 as number | null,
      ma200: r.ma200 as number | null,
      rsi14: r.rsi14 as number | null,
      macd_signal: r.macd_signal as string | null,
      technical_rating: r.technical_rating as string | null,
      currency: r.currency as string | null,
      date: r.date as string | null,
    }));
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
