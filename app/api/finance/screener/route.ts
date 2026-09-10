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
}

export async function GET() {
  try {
    const client = getTursoClient();
    const rs = await client.execute(`
      SELECT ticker, exchange, sector, index_membership, mf_rank,
             earnings_yield, roic, ey_rank, roic_rank, passes_thresholds, pe, div_yield
      FROM v_magic_formula_latest
      ORDER BY mf_rank ASC;
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
    }));
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
