import { NextRequest, NextResponse } from "next/server";
import { getTursoClient } from "@/lib/turso";

// Master spec Phase 15 — backs the Magic Formula Screener's research
// popover. Deliberately read-only and DB-only (no live WebSearch/LLM call
// from here, per Mike's own scope call 2026-09-20) — returns EVERY signal
// for this ticker, not just the single most recent one v_latest_signal
// exposes elsewhere, since an older llm-research thesis shouldn't vanish
// just because a newer magic-formula-pass signal landed on top of it.
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  try {
    const { ticker } = await params;
    const exchange = req.nextUrl.searchParams.get("exchange");
    if (!exchange) {
      return NextResponse.json({ error: "exchange query param is required" }, { status: 400 });
    }
    const client = getTursoClient();

    const [universeRs, signalsRs, investorsRs] = await Promise.all([
      client.execute({
        sql: "SELECT ticker, exchange, sector, index_membership, notes FROM universe WHERE ticker = ? AND exchange = ?",
        args: [ticker, exchange],
      }),
      client.execute({
        sql: "SELECT source, detail, flagged_date, source_ref FROM signals WHERE ticker = ? AND exchange = ? ORDER BY flagged_date DESC",
        args: [ticker, exchange],
      }),
      client.execute({
        sql: `SELECT p.investor_id, t.name, p.direction, p.disclosed_date, p.entry_price_hint, p.status
              FROM investor_positions p JOIN tracked_investors t ON t.investor_id = p.investor_id
              WHERE p.ticker = ? AND p.exchange = ? ORDER BY p.disclosed_date DESC`,
        args: [ticker, exchange],
      }),
    ]);

    if (universeRs.rows.length === 0) {
      return NextResponse.json({ error: `No universe row for ${ticker}/${exchange}` }, { status: 404 });
    }
    const u = universeRs.rows[0];

    return NextResponse.json({
      ticker: u.ticker,
      exchange: u.exchange,
      sector: u.sector,
      index_membership: u.index_membership,
      notes: u.notes,
      signals: signalsRs.rows.map((r) => ({
        source: r.source, detail: r.detail, flagged_date: r.flagged_date, source_ref: r.source_ref,
      })),
      investors: investorsRs.rows.map((r) => ({
        investor_id: r.investor_id, name: r.name, direction: r.direction,
        disclosed_date: r.disclosed_date, entry_price_hint: r.entry_price_hint, status: r.status,
      })),
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  try {
    const { ticker } = await params;
    const body = await req.json();
    const exchange = body?.exchange;
    const notes = body?.notes;
    if (typeof exchange !== "string" || typeof notes !== "string") {
      return NextResponse.json(
        { error: "exchange and notes are required strings" },
        { status: 400 }
      );
    }
    const client = getTursoClient();
    const rs = await client.execute({
      sql: "UPDATE universe SET notes = ? WHERE ticker = ? AND exchange = ?",
      args: [notes, ticker, exchange],
    });
    if (rs.rowsAffected === 0) {
      return NextResponse.json(
        { error: `No universe row for ${ticker}/${exchange}` },
        { status: 404 }
      );
    }
    return NextResponse.json({ ticker, exchange, notes });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
