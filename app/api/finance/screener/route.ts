import { NextResponse } from "next/server";
import { getTursoClient } from "@/lib/turso";

export interface ScreenerRow {
  ticker: string;
  exchange: string;
  sector: string | null;
  index_membership: string;
  mf_rank: number;
  earnings_yield: number;
  roic: number;
  ey_rank: number;
  roic_rank: number;
  passes_thresholds: number;
  pe: number | null;
  div_yield: number | null;
  notes: string | null;
  signal_source: string | null;
  signal_detail: string | null;
  signal_flagged_date: string | null;
}

export async function GET() {
  try {
    const client = getTursoClient();
    const rs = await client.execute(`
      SELECT v.ticker, v.exchange, v.sector, v.index_membership, v.mf_rank,
             v.earnings_yield, v.roic, v.ey_rank, v.roic_rank, v.passes_thresholds,
             v.pe, v.div_yield, u.notes,
             sig.source AS signal_source, sig.detail AS signal_detail,
             sig.flagged_date AS signal_flagged_date
      FROM v_magic_formula_latest v
      LEFT JOIN universe u ON u.ticker = v.ticker AND u.exchange = v.exchange
      LEFT JOIN v_latest_signal sig ON sig.ticker = v.ticker AND sig.exchange = v.exchange
      ORDER BY v.mf_rank ASC;
    `);
    const rows: ScreenerRow[] = rs.rows.map((r) => ({
      ticker: r.ticker as string,
      exchange: r.exchange as string,
      sector: r.sector as string | null,
      index_membership: r.index_membership as string,
      mf_rank: r.mf_rank as number,
      earnings_yield: r.earnings_yield as number,
      roic: r.roic as number,
      ey_rank: r.ey_rank as number,
      roic_rank: r.roic_rank as number,
      passes_thresholds: r.passes_thresholds as number,
      pe: r.pe as number | null,
      div_yield: r.div_yield as number | null,
      notes: r.notes as string | null,
      signal_source: r.signal_source as string | null,
      signal_detail: r.signal_detail as string | null,
      signal_flagged_date: r.signal_flagged_date as string | null,
    }));
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
