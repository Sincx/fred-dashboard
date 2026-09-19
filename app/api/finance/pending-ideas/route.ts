import { NextResponse } from "next/server";
import { getTursoClient } from "@/lib/turso";

// Phase 3 spec (2026-09-19) §3.1 — Pending Trade Ideas: every
// briefing-recommendation signal has exactly three intended fates
// (approved/rejected/expired), never a fourth of just scrolling off the
// bottom of a markdown file. Lazily applies the two time-based lifecycle
// rules on every read rather than needing a separate daily cron:
//   - a 'new' idea older than EXPIRE_DAYS auto-transitions to 'expired'
//   - a 'snoozed' idea past its stored snoozed_until reverts to 'new'
// Both are cheap UPDATEs scoped to source='briefing-recommendation', run
// once per GET before the SELECT that actually serves the response.

const EXPIRE_DAYS = 10; // approximates "10 trading days" as calendar days — a
                         // precise trading-calendar cutoff isn't worth the
                         // complexity for a soft expiry window like this.

export interface PendingIdea {
  signal_id: string;
  ticker: string;
  exchange: string;
  flagged_date: string;
  status: string;
  status_updated_at: string | null;
  entry: number | null;
  stop: number | null;
  size: number | null;
  conviction: string | null;
  thesis: string | null;
}

function parseDetail(detail: string | null): { entry: number | null; stop: number | null; size: number | null; conviction: string | null; thesis: string | null; snoozed_until?: string } {
  if (!detail) return { entry: null, stop: null, size: null, conviction: null, thesis: null };
  try {
    const d = JSON.parse(detail);
    return {
      entry: typeof d.entry === "number" ? d.entry : null,
      stop: typeof d.stop === "number" ? d.stop : null,
      size: typeof d.size === "number" ? d.size : null,
      conviction: typeof d.conviction === "string" ? d.conviction : null,
      thesis: typeof d.thesis === "string" ? d.thesis : null,
      snoozed_until: typeof d.snoozed_until === "string" ? d.snoozed_until : undefined,
    };
  } catch {
    return { entry: null, stop: null, size: null, conviction: null, thesis: null };
  }
}

export async function GET() {
  try {
    const client = getTursoClient();
    const today = new Date().toISOString().slice(0, 10);

    // Expire stale 'new' ideas.
    await client.execute({
      sql: `UPDATE signals SET status = 'expired', status_updated_at = ?
            WHERE source = 'briefing-recommendation' AND status = 'new'
              AND flagged_date <= date(?, ?)`,
      args: [new Date().toISOString(), today, `-${EXPIRE_DAYS} days`],
    });

    // Revive snoozed ideas whose snoozed_until has passed — read first
    // since snoozed_until lives inside the JSON `detail` blob, not a column.
    const snoozed = await client.execute({
      sql: `SELECT signal_id, detail FROM signals WHERE source = 'briefing-recommendation' AND status = 'snoozed'`,
    });
    for (const r of snoozed.rows) {
      const { snoozed_until } = parseDetail(r.detail as string | null);
      if (snoozed_until && snoozed_until <= today) {
        await client.execute({
          sql: `UPDATE signals SET status = 'new', status_updated_at = ? WHERE signal_id = ?`,
          args: [new Date().toISOString(), r.signal_id as string],
        });
      }
    }

    const rs = await client.execute(
      `SELECT signal_id, ticker, exchange, flagged_date, status, status_updated_at, detail
       FROM signals WHERE source = 'briefing-recommendation'
       ORDER BY flagged_date DESC, signal_id DESC`
    );
    const ideas: PendingIdea[] = rs.rows.map((r) => {
      const d = parseDetail(r.detail as string | null);
      return {
        signal_id: r.signal_id as string,
        ticker: r.ticker as string,
        exchange: r.exchange as string,
        flagged_date: r.flagged_date as string,
        status: r.status as string,
        status_updated_at: r.status_updated_at as string | null,
        entry: d.entry, stop: d.stop, size: d.size, conviction: d.conviction, thesis: d.thesis,
      };
    });
    return NextResponse.json(ideas);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
