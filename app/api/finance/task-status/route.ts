import { NextResponse } from "next/server";
import { getTursoClient } from "@/lib/turso";

// Phase 3 spec (2026-09-19) §3.3 — task_registry existed in schema since
// v2.2 but nothing wrote to it until now, so a scheduled pipeline job
// silently not firing had zero visibility anywhere on the dashboard.
// Only 'daily' kind is wired up as of this route's creation (technicals.py,
// crypto_prices.py) — a task_id with no row here just isn't tracked yet,
// not necessarily healthy.

export interface TaskStatusRow {
  task_id: string;
  description: string | null;
  last_run_at: string | null;
  last_run_status: string | null;
  hours_since: number | null;
  stale: boolean;
}

// Grace period before a 'daily' task counts as stale — 36h covers a task
// that runs once/day plus reasonable slack, without flagging on ordinary
// timing jitter (scheduled_tasks' own jitterSeconds already adds noise to
// exact run times).
const DAILY_STALE_HOURS = 36;

export async function GET() {
  try {
    const client = getTursoClient();
    const rs = await client.execute(
      "SELECT task_id, kind, description, last_run_at, last_run_status FROM task_registry ORDER BY task_id;"
    );
    const now = Date.now();
    const rows: TaskStatusRow[] = rs.rows.map((r) => {
      const lastRunAt = r.last_run_at as string | null;
      const hoursSince = lastRunAt ? (now - new Date(lastRunAt).getTime()) / 3_600_000 : null;
      const kind = r.kind as string | null;
      const staleThreshold = kind === "daily" ? DAILY_STALE_HOURS : null;
      const statusIsError = typeof r.last_run_status === "string" && r.last_run_status.startsWith("error");
      return {
        task_id: r.task_id as string,
        description: r.description as string | null,
        last_run_at: lastRunAt,
        last_run_status: r.last_run_status as string | null,
        hours_since: hoursSince !== null ? Math.round(hoursSince * 10) / 10 : null,
        stale: statusIsError || (hoursSince !== null && staleThreshold !== null && hoursSince > staleThreshold),
      };
    });
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
