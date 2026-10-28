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
  investor_labels: string | null;
  // Phase 17 valuations (v_screener_valuations): per-share fair values and their
  // discount to the latest close (positive = trading below fair value). Null where
  // the ticker has no SEC filings on file yet or the model does not apply.
  dcf_fair_value: number | null;
  dcf_discount_pct: number | null;
  dcf_confidence: string | null;
  dcf_sbc_fair_value: number | null;
  dcf_sbc_discount_pct: number | null;
  dcf_sbc_confidence: string | null;
  sbc_delta_e: number | null;
  book_value_per_share: number | null;
  tangible_book_value_per_share: number | null;
}

export async function GET() {
  try {
    const client = getTursoClient();
    const rs = await client.execute(`
      SELECT v.ticker, v.exchange, v.sector, v.index_membership, v.mf_rank,
             v.earnings_yield, v.roic, v.ey_rank, v.roic_rank, v.passes_thresholds,
             v.pe, v.div_yield, u.notes,
             sig.source AS signal_source, sig.detail AS signal_detail,
             sig.flagged_date AS signal_flagged_date,
             vip.investor_labels AS investor_labels,
             val.dcf_fair_value, val.dcf_discount_pct, val.dcf_confidence,
             val.dcf_sbc_fair_value, val.dcf_sbc_discount_pct, val.dcf_sbc_confidence,
             val.sbc_delta_e, val.book_value_per_share, val.tangible_book_value_per_share
      FROM v_magic_formula_latest v
      LEFT JOIN universe u ON u.ticker = v.ticker AND u.exchange = v.exchange
      LEFT JOIN v_latest_signal sig ON sig.ticker = v.ticker AND sig.exchange = v.exchange
      LEFT JOIN v_ticker_investor_labels vip ON vip.ticker = v.ticker AND vip.exchange = v.exchange
      LEFT JOIN v_screener_valuations val ON val.ticker = v.ticker AND val.exchange = v.exchange
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
      investor_labels: r.investor_labels as string | null,
      dcf_fair_value: r.dcf_fair_value as number | null,
      dcf_discount_pct: r.dcf_discount_pct as number | null,
      dcf_confidence: r.dcf_confidence as string | null,
      dcf_sbc_fair_value: r.dcf_sbc_fair_value as number | null,
      dcf_sbc_discount_pct: r.dcf_sbc_discount_pct as number | null,
      dcf_sbc_confidence: r.dcf_sbc_confidence as string | null,
      sbc_delta_e: r.sbc_delta_e as number | null,
      book_value_per_share: r.book_value_per_share as number | null,
      tangible_book_value_per_share: r.tangible_book_value_per_share as number | null,
    }));
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
