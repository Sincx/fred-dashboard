import { NextRequest, NextResponse } from "next/server";
import { getTursoClient } from "@/lib/turso";
import type { Client } from "@libsql/client";

// Phase 3 spec (2026-09-19) §3.1 — the three actions a Pending Trade Idea
// can take. Approve is the only one with real side effects: it writes a
// live `trades` row for trading-portfolio plus the matching `cash_ledger`
// debit (same conventions as trading_portfolio_sync.py's record_open(),
// reimplemented here in TS since Vercel's serverless routes can't shell
// out to the local Python pipeline — the two now share the SAME
// conventions/trade_id scheme by design, not by accident, so a position
// opened via either path looks identical in Turso).

async function rateOnDate(client: Client, currency: string, date: string): Promise<number | null> {
  const rs = await client.execute({
    sql: `SELECT usd_rate FROM fx_rates WHERE currency = ? AND date <= ? ORDER BY date DESC LIMIT 1`,
    args: [currency, date],
  });
  if (rs.rows.length) return rs.rows[0].usd_rate as number;
  // Fall back to the earliest available rate rather than failing outright.
  const earliest = await client.execute({
    sql: `SELECT usd_rate FROM fx_rates WHERE currency = ? ORDER BY date ASC LIMIT 1`,
    args: [currency],
  });
  return earliest.rows.length ? (earliest.rows[0].usd_rate as number) : null;
}

// Converts a EUR amount into the ticker's native trade currency (the
// inverse of app/api/portfolios/route.ts's toBaseCurrency) — Approve's
// `size` is always EUR (the briefing sizes everything in EUR per its own
// instructions), but the trade row needs shares priced in whatever
// currency the ticker actually trades in.
async function eurToNative(client: Client, amountEur: number, nativeCurrency: string, date: string): Promise<number> {
  if (nativeCurrency === "EUR") return amountEur;
  const targetCcy = nativeCurrency === "GBX" ? "GBP" : nativeCurrency;
  const eurRate = await rateOnDate(client, "EUR", date);
  const targetRate = await rateOnDate(client, targetCcy, date);
  if (eurRate == null || targetRate == null) return amountEur; // no rate available — better than failing the approval outright
  const nativeAmount = (amountEur * eurRate) / targetRate;
  return nativeCurrency === "GBX" ? nativeAmount * 100 : nativeAmount;
}

interface SignalRow {
  signal_id: string;
  ticker: string;
  exchange: string;
  detail: string | null;
  status: string;
}

async function getSignal(client: Client, id: string): Promise<SignalRow | null> {
  const rs = await client.execute({
    sql: `SELECT signal_id, ticker, exchange, detail, status FROM signals WHERE signal_id = ? AND source = 'briefing-recommendation'`,
    args: [id],
  });
  if (!rs.rows.length) return null;
  const r = rs.rows[0];
  return { signal_id: r.signal_id as string, ticker: r.ticker as string, exchange: r.exchange as string, detail: r.detail as string | null, status: r.status as string };
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json();
    const action = body?.action;
    const client = getTursoClient();

    const signal = await getSignal(client, id);
    if (!signal) return NextResponse.json({ error: `No pending idea found for ${id}` }, { status: 404 });
    if (signal.status !== "new" && signal.status !== "snoozed") {
      return NextResponse.json({ error: `Idea is already '${signal.status}' — only 'new' or 'snoozed' ideas can be acted on` }, { status: 409 });
    }

    const now = new Date().toISOString();
    const today = now.slice(0, 10);

    if (action === "reject") {
      await client.execute({
        sql: `UPDATE signals SET status = 'rejected', status_updated_at = ? WHERE signal_id = ?`,
        args: [now, id],
      });
      return NextResponse.json({ status: "rejected" });
    }

    if (action === "snooze") {
      const days = typeof body?.days === "number" && body.days > 0 ? body.days : 7;
      const snoozedUntil = new Date(Date.now() + days * 86_400_000).toISOString().slice(0, 10);
      const detail = signal.detail ? JSON.parse(signal.detail) : {};
      detail.snoozed_until = snoozedUntil;
      await client.execute({
        sql: `UPDATE signals SET status = 'snoozed', status_updated_at = ?, detail = ? WHERE signal_id = ?`,
        args: [now, JSON.stringify(detail), id],
      });
      return NextResponse.json({ status: "snoozed", snoozed_until: snoozedUntil });
    }

    if (action === "approve") {
      const entryPrice = Number(body?.entryPrice);
      const stopLoss = body?.stopLoss != null ? Number(body.stopLoss) : null;
      const sizeEur = Number(body?.sizeEur);
      if (!Number.isFinite(entryPrice) || entryPrice <= 0 || !Number.isFinite(sizeEur) || sizeEur <= 0) {
        return NextResponse.json({ error: "entryPrice and sizeEur must be positive numbers" }, { status: 400 });
      }

      // Cash guardrail (Phase 3 §3.1 open risk #1, Mike's explicit call:
      // a real cash_ledger check, not a manual-confirm shortcut) — hard
      // block, not a soft warning, since silently letting three approvals
      // together overspend Available Cap is exactly the failure mode the
      // spec's own open risk named.
      const cashRs = await client.execute({
        sql: `SELECT cash_balance FROM v_portfolio_cash_balance WHERE portfolio_id = 'trading-portfolio'`,
      });
      const availableCash = cashRs.rows.length ? (cashRs.rows[0].cash_balance as number) : 0;
      if (sizeEur > availableCash) {
        return NextResponse.json(
          { error: `Insufficient cash: this idea needs €${sizeEur.toFixed(2)} but only €${availableCash.toFixed(2)} is available in trading-portfolio's cash_ledger.` },
          { status: 400 }
        );
      }

      const univRs = await client.execute({
        sql: `SELECT currency FROM universe WHERE ticker = ? AND exchange = ?`,
        args: [signal.ticker, signal.exchange],
      });
      const currency = (univRs.rows[0]?.currency as string | undefined) ?? "USD";

      const nativeSize = await eurToNative(client, sizeEur, currency, today);
      const shares = Math.floor(nativeSize / entryPrice);
      if (shares < 1) {
        return NextResponse.json({ error: `Computed 0 shares (size €${sizeEur} / entry ${entryPrice} ${currency}) — size too small for this entry price` }, { status: 400 });
      }

      const detail = signal.detail ? JSON.parse(signal.detail) : {};
      const tradeId = `trading-portfolio-${signal.ticker}-long-${today}`;

      await client.execute({
        sql: `INSERT OR REPLACE INTO trades
              (trade_id, portfolio_id, ticker, exchange, instrument_type, direction,
               entry_date, entry_price, shares, currency, stop_loss, status, thesis, source_signal_id)
              VALUES (?, 'trading-portfolio', ?, ?, 'equity', 'long', ?, ?, ?, ?, ?, 'open', ?, ?)`,
        args: [tradeId, signal.ticker, signal.exchange, today, entryPrice, shares, currency, stopLoss, detail.thesis ?? null, id],
      });

      const entryId = `tp-cash-${tradeId}-approve`;
      await client.execute({
        sql: `INSERT OR REPLACE INTO cash_ledger (entry_id, portfolio_id, entry_date, amount, entry_type, trade_id, note)
              VALUES (?, 'trading-portfolio', ?, ?, 'buy', ?, ?)`,
        args: [entryId, today, -sizeEur, tradeId, `${signal.ticker} buy (approved from Pending Trade Ideas)`],
      });

      await client.execute({
        sql: `UPDATE signals SET status = 'approved', status_updated_at = ? WHERE signal_id = ?`,
        args: [now, id],
      });

      return NextResponse.json({ status: "approved", trade_id: tradeId, shares, currency });
    }

    return NextResponse.json({ error: `Unknown action '${action}' — expected approve/reject/snooze` }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
