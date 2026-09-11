"use client";

import { useEffect, useState } from "react";
import { Loader2, TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, Clock } from "lucide-react";
import { SignalBadge } from "@/components/SignalBadge";

interface Portfolios {
  p1: PortfolioPayload;
  equity: PortfolioPayload;
  trading: PortfolioPayload;
  equityCurve: EquityCurvePoint[];
  briefing: string;
}

type Tab = "p1" | "equity" | "trading" | "briefing";

const TABS: { id: Tab; label: string }[] = [
  { id: "p1", label: "Paper Trading" },
  { id: "equity", label: "Equity Portfolio" },
  { id: "trading", label: "Trading Portfolio" },
  { id: "briefing", label: "Morning Briefing" },
];

// ── Shared helpers ──────────────────────────────────────────────────────────
// Phase 2 (P2.0a): P1 / Equity / Trading tabs now render from typed Turso
// query results (see app/api/portfolios/route.ts) instead of regex-parsing
// markdown. Morning Briefing is untouched — it's LLM-written prose, not row
// data (see "── Morning Briefing parser & components" below).

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
}

interface PortfolioStats {
  open_positions: number;
  closed_positions: number;
  open_value: number | null;
  net_pnl: number | null;
  win_rate: number | null;
}

interface PortfolioPayload {
  portfolio_id: string;
  name: string;
  open: TradeRow[];
  closed: TradeRow[];
  stats: PortfolioStats;
}

interface EquityCurvePoint { date: string; ticker: string; cumulative: number }

function PnlBadge({ val }: { val: string }) {
  const clean = val.replace(/\*\*/g, "").trim();
  const neg = clean.startsWith("−") || clean.startsWith("-");
  const pos = clean.startsWith("+");
  const cls = neg ? "badge-red" : pos ? "badge-green" : "badge-gray";
  return <span className={cls}>{clean}</span>;
}

function fmtMoney(v: number | null): string {
  if (v == null) return "—";
  const sign = v < 0 ? "−" : "+";
  return `${sign}$${Math.abs(v).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
}

function fmtPct(v: number | null): string {
  if (v == null) return "—";
  return `${v >= 0 ? "+" : ""}${v.toFixed(2)}%`;
}

// Directional P&L% — a short position profits when price falls, same
// convention as v_strategy_performance / v_portfolio_performance in schema.sql.
function pnlPct(entry: number | null, current: number | null, direction: string): number | null {
  if (entry == null || current == null || entry === 0) return null;
  const sign = direction === "short" ? -1 : 1;
  return sign * ((current - entry) / entry) * 100;
}

function daysBetween(dateStr: string | null): number | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return Math.floor((Date.now() - d.getTime()) / 86400000);
}

// GBX (pence) prices are ~100x their GBP value — same correction the API
// route's aggregate stats and v_portfolio_performance (schema.sql) apply.
function fxScale(currency: string | null): number {
  return currency === "GBX" ? 0.01 : 1.0;
}

function P1Stats({ stats }: { stats: PortfolioStats }) {
  const items: { label: string; value: string; colored: boolean }[] = [
    { label: "Net P&L", value: fmtMoney(stats.net_pnl), colored: true },
    { label: "Open Positions Value", value: fmtMoney(stats.open_value), colored: false },
    { label: "Open Positions", value: String(stats.open_positions), colored: false },
    { label: "Win Rate", value: stats.win_rate != null ? `${stats.win_rate.toFixed(1)}%` : "—", colored: false },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
      {items.map(({ label, value, colored }) => (
        <div key={label} className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{label}</p>
          <p className="font-semibold text-sm" style={{
            color: colored ? (value.startsWith("−") ? "var(--accent-red)" : "var(--accent-green)") : "var(--text-primary)",
          }}>{value}</p>
        </div>
      ))}
    </div>
  );
}

// Known simplification (flagged in the Phase 2 plan, not silently dropped):
// no company display name exists in Turso (universe/trades have ticker only),
// and no per-tranche T1/T2 "Realised $" — one entry + one exit per trade row.
function OpenPositionsTable({ rows }: { rows: TradeRow[] }) {
  if (!rows.length) return <p className="text-xs" style={{ color: "var(--text-muted)" }}>No open positions.</p>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border)" }}>
            {["Ticker", "Exchange", "Entry Date", "Entry", "Curr Price", "P&L%", "Value", "Days", "T1", "T2"].map((h) => (
              <th key={h} className="text-left py-2 px-3 font-medium" style={{ color: "var(--text-muted)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const pct = pnlPct(r.entry_price, r.close, r.direction);
            // Options: shares is a 100-per-contract notional placeholder, not
            // real quantity — shares × underlying price isn't the position's
            // value, so it's left "—" rather than shown wrong.
            const value = r.instrument_type === "equity" && r.shares != null && r.close != null
              ? (r.direction === "short" ? -1 : 1) * r.shares * r.close * fxScale(r.currency) : null;
            const days = daysBetween(r.entry_date);
            return (
              <tr key={r.trade_id} className="border-b transition-colors hover:opacity-80" style={{ borderColor: "var(--border)" }}>
                <td className="py-2 px-3 font-medium" style={{ color: "var(--text-primary)" }}>{r.ticker}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-secondary)" }}>{r.exchange}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-secondary)" }}>{r.entry_date ?? "—"}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-primary)" }}>{r.entry_price != null ? r.entry_price.toFixed(2) : "—"}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-primary)" }}>{r.close != null ? r.close.toFixed(2) : "—"}</td>
                <td className="py-2 px-3">{pct != null ? <PnlBadge val={fmtPct(pct)} /> : <span style={{ color: "var(--text-muted)" }}>—</span>}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-primary)" }}>{value != null ? fmtMoney(value).replace("+", "") : "—"}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-secondary)" }}>{days ?? "—"}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-secondary)" }}>{r.target1 ?? "—"}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-secondary)" }}>{r.target2 ?? "—"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function ClosedPositionsTable({ rows }: { rows: TradeRow[] }) {
  if (!rows.length) return <p className="text-xs" style={{ color: "var(--text-muted)" }}>No closed positions yet.</p>;
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border)" }}>
            {["Ticker", "Exchange", "Entry Date", "Exit Date", "Entry", "Exit", "P&L%", "P&L $", "Result"].map((h) => (
              <th key={h} className="text-left py-2 px-3 font-medium" style={{ color: "var(--text-muted)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => {
            const pct = pnlPct(r.entry_price, r.exit_price, r.direction);
            const dollar = r.shares != null && r.entry_price != null && r.exit_price != null
              ? (r.direction === "short" ? -1 : 1) * r.shares * (r.exit_price - r.entry_price) * fxScale(r.currency) : null;
            const isWin = dollar != null && dollar > 0;
            const isLoss = dollar != null && dollar < 0;
            return (
              <tr key={r.trade_id} className="border-b" style={{
                borderColor: "var(--border)",
                backgroundColor: isWin ? "rgba(16,185,129,0.04)" : isLoss ? "rgba(239,68,68,0.04)" : "transparent",
              }}>
                <td className="py-2 px-3 font-medium" style={{ color: "var(--text-primary)" }}>{r.ticker}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-secondary)" }}>{r.exchange}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-secondary)" }}>{r.entry_date ?? "—"}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-secondary)" }}>{r.exit_date ?? "—"}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-primary)" }}>{r.entry_price != null ? r.entry_price.toFixed(2) : "—"}</td>
                <td className="py-2 px-3" style={{ color: "var(--text-primary)" }}>{r.exit_price != null ? r.exit_price.toFixed(2) : "—"}</td>
                <td className="py-2 px-3">{pct != null ? <PnlBadge val={fmtPct(pct)} /> : <span style={{ color: "var(--text-muted)" }}>—</span>}</td>
                <td className="py-2 px-3">{dollar != null ? <PnlBadge val={fmtMoney(dollar)} /> : <span style={{ color: "var(--text-muted)" }}>—</span>}</td>
                <td className="py-2 px-3" style={{ color: isWin ? "var(--accent-green)" : isLoss ? "var(--accent-red)" : "var(--text-muted)" }}>
                  {isWin ? "Win" : isLoss ? "Loss" : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function EquityCurveChart({ points }: { points: { cumulative: number }[] }) {
  if (points.length < 2) return null;
  const W = 600, H = 90, PAD = 10;
  const values = points.map((p) => p.cumulative);
  const minV = Math.min(0, ...values);
  const maxV = Math.max(0, ...values);
  const range = maxV - minV || 1;
  const toX = (i: number) => PAD + (i / (points.length - 1)) * (W - PAD * 2);
  const toY = (v: number) => PAD + ((maxV - v) / range) * (H - PAD * 2);
  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${toX(i).toFixed(1)},${toY(p.cumulative).toFixed(1)}`)
    .join(" ");
  const fillD = `${pathD} L ${toX(points.length - 1).toFixed(1)},${toY(0).toFixed(1)} L ${toX(0).toFixed(1)},${toY(0).toFixed(1)} Z`;
  const last = points[points.length - 1]?.cumulative ?? 0;
  const lineColor = last >= 0 ? "var(--accent-green)" : "var(--accent-red)";
  const zeroY = toY(0).toFixed(1);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: H, display: "block" }} preserveAspectRatio="none">
      <defs>
        <linearGradient id="ecFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={lineColor} stopOpacity="0.25" />
          <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
        </linearGradient>
      </defs>
      {minV < 0 && maxV > 0 && (
        <line x1={PAD} y1={zeroY} x2={W - PAD} y2={zeroY}
          stroke="var(--border)" strokeWidth="0.75" strokeDasharray="4,4" />
      )}
      <path d={fillD} fill="url(#ecFill)" />
      <path d={pathD} fill="none" stroke={lineColor} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx={toX(points.length - 1)} cy={toY(last)} r="3" fill={lineColor} />
    </svg>
  );
}

function PaperTradingView({ portfolio, equityPoints }: { portfolio: PortfolioPayload; equityPoints: EquityCurvePoint[] }) {
  const last = equityPoints[equityPoints.length - 1];
  return (
    <div className="space-y-5">
      <P1Stats stats={portfolio.stats} />

      {equityPoints.length > 1 && (
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--text-secondary)" }}>
              Equity Curve — Realised P&L (closed trades)
            </h3>
            {last && (
              <span className="text-sm font-bold" style={{
                color: last.cumulative >= 0 ? "var(--accent-green)" : "var(--accent-red)",
              }}>
                {last.cumulative >= 0 ? "+" : ""}${last.cumulative}
              </span>
            )}
          </div>
          <EquityCurveChart points={equityPoints} />
          {equityPoints[0] && last && (
            <div className="flex justify-between mt-1">
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{equityPoints[0].date}</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{last.date} · {last.ticker}</span>
            </div>
          )}
        </div>
      )}

      <div className="card">
        <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-secondary)" }}>Open Positions</h3>
        <OpenPositionsTable rows={portfolio.open} />
      </div>

      <div className="card">
        <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-secondary)" }}>Closed Positions</h3>
        <ClosedPositionsTable rows={portfolio.closed} />
      </div>
    </div>
  );
}

// Equity/Pension: shares is NULL for all 19 holdings (Phase 7b — the source
// data had entry price but no quantities), so cost basis / $ P&L stay "—"
// via OpenPositionsTable's own null-handling; only Entry vs Curr Price and
// %-change render, which is a strict improvement over the old markdown view.
function EquityPortfolioView({ portfolio }: { portfolio: PortfolioPayload }) {
  return (
    <div className="space-y-5">
      <P1Stats stats={portfolio.stats} />
      <OpenPositionsTable rows={portfolio.open} />
    </div>
  );
}

// Trading Portfolio: cash_ledger was never populated for this portfolio
// (Phase 7c — a live-task concern, not a backfill one), so cash/YTD are
// deliberately omitted here rather than shown as a fabricated $0.
function TradingPortfolioView({ portfolio }: { portfolio: PortfolioPayload }) {
  const longs = portfolio.open.filter((r) => r.direction === "long" && r.instrument_type === "equity");
  const shorts = portfolio.open.filter((r) => r.direction === "short" && r.instrument_type === "equity");
  const options = portfolio.open.filter((r) => r.instrument_type === "option");
  return (
    <div className="space-y-6">
      <P1Stats stats={portfolio.stats} />

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent-green)", opacity: 0.85 }}>
          Long Equity · {longs.length} positions
        </p>
        <OpenPositionsTable rows={longs} />
      </div>

      {shorts.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--accent-red)", opacity: 0.85 }}>
            Short Equity · {shorts.length} position{shorts.length !== 1 ? "s" : ""}
          </p>
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(239,68,68,0.3)", backgroundColor: "rgba(239,68,68,0.03)" }}>
            <OpenPositionsTable rows={shorts} />
          </div>
        </div>
      )}

      {options.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#a78bfa", opacity: 0.9 }}>
            Options · {options.length} position{options.length !== 1 ? "s" : ""}
          </p>
          <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(139,92,246,0.3)", backgroundColor: "rgba(139,92,246,0.03)" }}>
            <OpenPositionsTable rows={options} />
          </div>
        </div>
      )}

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-muted)", opacity: 0.85 }}>
          Closed Positions · {portfolio.closed.length} exits
        </p>
        <ClosedPositionsTable rows={portfolio.closed} />
      </div>
    </div>
  );
}

// ── Morning Briefing parser & components ────────────────────────────────────

interface BriefingSnapshot {
  date: string;
  positions: string;
  totalValue: string;
  availableCap: string;
  bestPerformer: string;
  worstPerformer: string;
  largestPosition: string;
}

interface SignalRow {
  ticker: string;
  pnl: string;
  rsi: string;
  vs50d: string;
  signal: string;
  catalyst: string;
  mf: string;
}

interface TradeIdea {
  ticker: string;
  action: string;
  rationale: string;
  detail: string;
}

interface FreeRideItem {
  ticker: string;
  detail: string;
  freePos: string;
  status: string;
}

interface BriefingData {
  raw: string;
  isPlaceholder: boolean;
  date: string;
  snapshot: Partial<BriefingSnapshot>;
  signals: SignalRow[];
  shape: { concentration: string; sectors: string; currency: string };
  sells: TradeIdea[];
  adds: TradeIdea[];
  newPositions: TradeIdea[];
  noTrades: string;
  freeRides: FreeRideItem[];
  risks: string[];
  actions: string[];
}

function parseBriefing(md: string): BriefingData {
  const isPlaceholder = md.includes("No briefing has been generated");

  // Extract date from heading
  const dateMatch = md.match(/BRIEFING[^—\n]*[—–-]\s*(\d{4}-\d{2}-\d{2})/i);
  const date = dateMatch ? dateMatch[1] : "";

  // Extract snapshot fields
  const snap: Partial<BriefingSnapshot> = {};
  const field = (label: string) => {
    const m = md.match(new RegExp(label + "[:\\s]+([^\\n]+)", "i"));
    return m ? m[1].trim() : "";
  };
  snap.positions     = field("Positions");
  snap.totalValue    = field("Total Value");
  snap.availableCap  = field("Available Cap");
  snap.bestPerformer = field("Best Performer");
  snap.worstPerformer= field("Worst Performer");
  snap.largestPosition = field("Largest Position");

  // Extract shape
  const shape = {
    concentration: field("Concentration"),
    sectors: field("Sector spread"),
    currency: field("Currency split"),
  };

  // Extract position signals table rows (pipe-delimited inside the ══ block)
  const signals: SignalRow[] = [];
  const tableBlockMatch = md.match(/POSITION SIGNALS[\s\S]*?(?=PORTFOLIO SHAPE|TODAY'S TRADE|$)/i);
  if (tableBlockMatch) {
    const tableLines = tableBlockMatch[0].split("\n").filter(l => l.includes("│"));
    for (const line of tableLines) {
      const cells = line.split("│").map(c => c.trim()).filter(Boolean);
      if (cells.length >= 5 && !/ticker/i.test(cells[0]) && !/^[-─┌┐└┘┤├]+/.test(cells[0])) {
        signals.push({
          ticker:   cells[0] ?? "",
          pnl:      cells[1] ?? "",
          rsi:      cells[2] ?? "",
          vs50d:    cells[3] ?? "",
          signal:   cells[4] ?? "",
          catalyst: cells[5] ?? "",
          mf:       cells[6] ?? "",
        });
      }
    }
  }

  // Extract trade ideas — find today's trade ideas block
  const tradesBlock = md.match(/TODAY'S TRADE IDEAS([\s\S]*?)(?=PORTFOLIO RISKS|$)/i);
  const sells: TradeIdea[] = [];
  const adds: TradeIdea[] = [];
  const newPositions: TradeIdea[] = [];
  let noTrades = "";

  if (tradesBlock) {
    const block = tradesBlock[1];
    const sections = {
      sells: block.match(/SELLS?\s*\/?\s*TRIMS?([\s\S]*?)(?=──\s*ADDS?|──\s*NEW|$)/i)?.[1] ?? "",
      adds:  block.match(/ADDS? TO EXISTING([\s\S]*?)(?=──\s*NEW|$)/i)?.[1] ?? "",
      newP:  block.match(/NEW POSITIONS?([\s\S]*?)$/i)?.[1] ?? "",
    };

    const parseIdeas = (text: string): TradeIdea[] => {
      const ideas: TradeIdea[] = [];
      const lines = text.split("\n").filter(l => l.trim());
      for (const line of lines) {
        // Format: "TICKER: Action — rationale" or "TICKER: Action at price — rationale"
        const m = line.match(/^\s*([A-Z]{1,6}(?:\.[A-Z])?)\s*:\s*(.+)/);
        if (m) {
          const rest = m[2];
          const dashIdx = rest.indexOf("—");
          const action   = dashIdx > -1 ? rest.slice(0, dashIdx).trim() : rest;
          const rationale = dashIdx > -1 ? rest.slice(dashIdx + 1).trim() : "";
          // Pull out "Expected proceeds" or "Rationale:" lines following this ticker
          ideas.push({ ticker: m[1], action, rationale, detail: "" });
        }
        // Grab detail lines (indented or prefixed with "Expected proceeds:", "Rationale:")
        if (/^\s*(Expected proceeds|Rationale|Size|Stop|Entry)/i.test(line) && ideas.length) {
          ideas[ideas.length - 1].detail += line.trim() + " ";
        }
      }
      return ideas;
    };

    sells.push(...parseIdeas(sections.sells));
    adds.push(...parseIdeas(sections.adds));
    newPositions.push(...parseIdeas(sections.newP));

    // Detect "no trades" message
    const noTradesMatch = block.match(/No trades today[^\n]*/i) || block.match(/Capital held in reserve[^\n]*/i);
    if (noTradesMatch) noTrades = noTradesMatch[0].trim();
  }

  // Extract free ride opportunities
  const freeRidesBlock = md.match(/FREE RIDE OPPORTUNITIES([\s\S]*?)(?=PORTFOLIO RISKS|NEXT ACTIONS|═|$)/i);
  const freeRides: FreeRideItem[] = [];
  if (freeRidesBlock) {
    let current: FreeRideItem | null = null;
    for (const line of freeRidesBlock[1].split("\n").map((l) => l.trim()).filter(Boolean)) {
      const tickerMatch = line.match(/^([A-Z]{1,6})\s*:/);
      if (tickerMatch && !/^status/i.test(line)) {
        if (current) freeRides.push(current);
        current = { ticker: tickerMatch[1], detail: line.slice(tickerMatch[0].length).trim(), freePos: "", status: "" };
      } else if (current) {
        if (/^Status:/i.test(line)) current.status = line.replace(/^Status:\s*/i, "").trim();
        else if (/Free position:|shares at zero/i.test(line)) current.freePos = line;
      }
    }
    if (current) freeRides.push(current);
  }

  // Extract risks
  const risksBlock = md.match(/PORTFOLIO RISKS TO WATCH([\s\S]*?)(?=NEXT ACTIONS|$)/i);
  const risks: string[] = [];
  if (risksBlock) {
    for (const line of risksBlock[1].split("\n")) {
      const m = line.match(/^\s*[-–•]\s*(.+)/);
      if (m) risks.push(m[1].trim());
    }
  }

  // Extract next actions
  const actionsBlock = md.match(/NEXT ACTIONS([\s\S]*?)(?=═|$)/i);
  const actions: string[] = [];
  if (actionsBlock) {
    for (const line of actionsBlock[1].split("\n")) {
      const m = line.match(/^\s*\d+\.\s*(.+)/);
      if (m) actions.push(m[1].trim());
    }
  }

  return { raw: md, isPlaceholder, date, snapshot: snap, signals, shape, sells, adds, newPositions, noTrades, freeRides, risks, actions };
}

function TradeCard({ idea, type }: { idea: TradeIdea; type: "sell" | "add" | "new" }) {
  const colors = {
    sell: { border: "var(--accent-red)",   bg: "rgba(239,68,68,0.06)",  label: "SELL / TRIM", icon: <TrendingDown size={13} /> },
    add:  { border: "var(--accent-green)", bg: "rgba(16,185,129,0.06)", label: "ADD",          icon: <TrendingUp size={13} />   },
    new:  { border: "#60a5fa",             bg: "rgba(96,165,250,0.06)", label: "NEW",          icon: <TrendingUp size={13} />   },
  }[type];

  return (
    <div className="rounded-lg p-4" style={{ border: `1px solid ${colors.border}`, backgroundColor: colors.bg }}>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono font-bold text-sm" style={{ color: "var(--text-primary)" }}>{idea.ticker}</span>
        <span className="text-xs px-1.5 py-0.5 rounded font-semibold flex items-center gap-1"
          style={{ backgroundColor: colors.border + "22", color: colors.border }}>
          {colors.icon}{colors.label}
        </span>
      </div>
      <p className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>{idea.action}</p>
      {idea.rationale && <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{idea.rationale}</p>}
      {idea.detail    && <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{idea.detail.trim()}</p>}
    </div>
  );
}

function FreeRideCard({ item }: { item: FreeRideItem }) {
  const isAlreadyFree = /already free/i.test(item.status);
  const isExecute     = /execute/i.test(item.status);
  const borderColor   = isAlreadyFree ? "var(--accent-green)" : isExecute ? "#f97316" : "#60a5fa";
  const bgColor       = isAlreadyFree ? "rgba(16,185,129,0.06)" : isExecute ? "rgba(249,115,22,0.06)" : "rgba(96,165,250,0.06)";
  const label         = isAlreadyFree ? "✓ ALREADY FREE" : "FREE RIDE";

  return (
    <div className="rounded-lg p-4" style={{ border: `1px solid ${borderColor}`, backgroundColor: bgColor }}>
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono font-bold text-sm" style={{ color: "var(--text-primary)" }}>{item.ticker}</span>
        <span className="text-xs px-1.5 py-0.5 rounded font-semibold"
          style={{ backgroundColor: borderColor + "22", color: borderColor }}>{label}</span>
      </div>
      {item.detail  && <p className="text-sm mb-1" style={{ color: "var(--text-primary)" }}>{item.detail}</p>}
      {item.freePos && <p className="text-xs mb-1" style={{ color: "var(--text-secondary)" }}>{item.freePos}</p>}
      {item.status  && <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Status: {item.status}</p>}
    </div>
  );
}

function MorningBriefing({ md }: { md: string }) {
  const b = parseBriefing(md);

  if (b.isPlaceholder) {
    return (
      <div className="card flex flex-col items-center justify-center py-16 gap-4" style={{ textAlign: "center" }}>
        <Clock size={40} style={{ color: "var(--text-muted)", opacity: 0.4 }} />
        <div>
          <p className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>No briefing yet</p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            The portfolio-management task runs Monday–Friday at 3 AM CEST.<br />
            Your first briefing will appear here on the next weekday morning.
          </p>
        </div>
      </div>
    );
  }

  const hasTradeIdeas = b.sells.length > 0 || b.adds.length > 0 || b.newPositions.length > 0;
  const snap = b.snapshot;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
            Morning Briefing
          </h2>
          {b.date && <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{b.date}</p>}
        </div>
        <span className="text-xs px-2 py-1 rounded-full font-medium"
          style={{ backgroundColor: "rgba(16,185,129,0.12)", color: "var(--accent-green)", border: "1px solid rgba(16,185,129,0.25)" }}>
          ● Live
        </span>
      </div>

      {/* Disclaimer */}
      <p className="text-xs px-3 py-2 rounded" style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--text-muted)", borderLeft: "3px solid var(--border)" }}>
        Portfolio management exercise — not financial advice. Confirm independently before trading.
      </p>

      {/* Snapshot stats */}
      {(snap.positions || snap.totalValue || snap.bestPerformer || snap.worstPerformer) && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {snap.positions && (
            <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
              <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Positions</p>
              <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{snap.positions}</p>
            </div>
          )}
          {snap.totalValue && (
            <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
              <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Est. Value</p>
              <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{snap.totalValue}</p>
            </div>
          )}
          {snap.availableCap && snap.availableCap.toLowerCase() !== "nil" && snap.availableCap !== "" && (
            <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
              <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Available Capital</p>
              <p className="font-semibold text-sm" style={{ color: "var(--accent-green)" }}>{snap.availableCap}</p>
            </div>
          )}
          {snap.bestPerformer && (
            <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
              <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Best Performer</p>
              <p className="font-semibold text-sm" style={{ color: "var(--accent-green)" }}>{snap.bestPerformer}</p>
            </div>
          )}
          {snap.worstPerformer && (
            <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
              <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Worst Performer</p>
              <p className="font-semibold text-sm" style={{ color: "var(--accent-red)" }}>{snap.worstPerformer}</p>
            </div>
          )}
          {snap.largestPosition && (
            <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
              <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Largest Position</p>
              <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{snap.largestPosition}</p>
            </div>
          )}
        </div>
      )}

      {/* Position signals table */}
      {b.signals.length > 0 && (
        <div className="card">
          <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-secondary)" }}>Position Signals</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {["Ticker", "P&L", "RSI (14)", "vs 50d", "Signal", "Catalyst", "MF#"].map(h => (
                    <th key={h} className="text-left py-2 px-3 font-medium" style={{ color: "var(--text-muted)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.signals.map((row, i) => (
                  <tr key={i} className="border-b" style={{ borderColor: "var(--border)" }}>
                    <td className="py-2 px-3 font-mono font-semibold" style={{ color: "var(--text-primary)" }}>{row.ticker}</td>
                    <td className="py-2 px-3"><PnlBadge val={row.pnl} /></td>
                    <td className="py-2 px-3" style={{ color: "var(--text-primary)" }}>{row.rsi}</td>
                    <td className="py-2 px-3" style={{ color: row.vs50d.includes("↑") ? "var(--accent-green)" : row.vs50d.includes("↓") ? "var(--accent-red)" : "var(--text-primary)" }}>{row.vs50d}</td>
                    <td className="py-2 px-3"><SignalBadge signal={row.signal} /></td>
                    <td className="py-2 px-3" style={{ color: "var(--text-muted)" }}>{row.catalyst}</td>
                    <td className="py-2 px-3 font-mono" style={{ color: row.mf && row.mf !== "—" && row.mf !== "---" ? "var(--text-primary)" : "var(--text-muted)" }}>{row.mf || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Portfolio shape */}
      {(b.shape.concentration || b.shape.sectors || b.shape.currency) && (
        <div className="card">
          <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-secondary)" }}>Portfolio Shape</h3>
          <div className="space-y-2 text-xs">
            {b.shape.concentration && (
              <div className="flex gap-2">
                <span style={{ color: "var(--text-muted)", minWidth: 120 }}>Concentration</span>
                <span style={{ color: b.shape.concentration.toLowerCase().includes("warning") ? "var(--accent-red)" : "var(--text-primary)" }}>
                  {b.shape.concentration}
                </span>
              </div>
            )}
            {b.shape.sectors && (
              <div className="flex gap-2">
                <span style={{ color: "var(--text-muted)", minWidth: 120 }}>Sector spread</span>
                <span style={{ color: "var(--text-primary)" }}>{b.shape.sectors}</span>
              </div>
            )}
            {b.shape.currency && (
              <div className="flex gap-2">
                <span style={{ color: "var(--text-muted)", minWidth: 120 }}>Currency split</span>
                <span style={{ color: "var(--text-primary)" }}>{b.shape.currency}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Trade ideas */}
      <div>
        <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-secondary)" }}>
          Today&apos;s Trade Ideas
        </h3>
        {!hasTradeIdeas && (
          <div className="card flex items-center gap-3 py-4">
            <CheckCircle2 size={18} style={{ color: "var(--text-muted)" }} />
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {b.noTrades || "No trades recommended today — all positions in good shape."}
            </p>
          </div>
        )}
        {b.sells.length > 0 && (
          <div className="space-y-2 mb-3">
            <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--accent-red)", opacity: 0.8 }}>
              Sells &amp; Trims
            </p>
            {b.sells.map((idea, i) => <TradeCard key={i} idea={idea} type="sell" />)}
          </div>
        )}
        {b.adds.length > 0 && (
          <div className="space-y-2 mb-3">
            <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "var(--accent-green)", opacity: 0.8 }}>
              Add to Existing
            </p>
            {b.adds.map((idea, i) => <TradeCard key={i} idea={idea} type="add" />)}
          </div>
        )}
        {b.newPositions.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: "#60a5fa", opacity: 0.8 }}>
              New Positions
            </p>
            {b.newPositions.map((idea, i) => <TradeCard key={i} idea={idea} type="new" />)}
          </div>
        )}
      </div>

      {/* Free ride opportunities */}
      {b.freeRides.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-secondary)" }}>
            Free Ride Opportunities
          </h3>
          <div className="space-y-2">
            {b.freeRides.map((item, i) => <FreeRideCard key={i} item={item} />)}
          </div>
        </div>
      )}

      {/* Risks */}
      {b.risks.length > 0 && (
        <div className="card">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
            <AlertTriangle size={14} style={{ color: "#f97316" }} /> Risks to Watch
          </h3>
          <ul className="space-y-1.5">
            {b.risks.map((r, i) => (
              <li key={i} className="flex gap-2 text-xs">
                <span style={{ color: "#f97316", marginTop: 1 }}>•</span>
                <span style={{ color: "var(--text-primary)" }}>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Next actions */}
      {b.actions.length > 0 && (
        <div className="card">
          <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--text-secondary)" }}>Next Actions</h3>
          <ol className="space-y-2">
            {b.actions.map((a, i) => (
              <li key={i} className="flex gap-3 text-xs">
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: "var(--accent)", color: "white", fontSize: "0.6rem" }}>
                  {i + 1}
                </span>
                <span style={{ color: "var(--text-primary)", paddingTop: 2 }}>{a}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function PortfoliosPage() {
  const [data, setData] = useState<Portfolios | null>(null);
  const [tab, setTab] = useState<Tab>("p1");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/portfolios")
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>Portfolios</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>Live positions from wiki markdown files</p>

      <div className="flex gap-1 mb-5 p-1 rounded-lg w-fit" style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
        {TABS.map(({ id, label }) => (
          <button key={id} onClick={() => setTab(id)}
            className="px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-150"
            style={{
              backgroundColor: tab === id ? "var(--accent)" : "transparent",
              color: tab === id ? "white" : "var(--text-secondary)",
            }}>
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <Loader2 size={16} className="animate-spin" /> Loading portfolios…
        </div>
      ) : data ? (
        <>
          {tab === "briefing" ? (
            <MorningBriefing md={data.briefing ?? ""} />
          ) : tab === "p1" ? (
            <PaperTradingView portfolio={data.p1} equityPoints={data.equityCurve} />
          ) : tab === "equity" ? (
            <div className="card">
              <EquityPortfolioView portfolio={data.equity} />
            </div>
          ) : (
            <div className="card">
              <TradingPortfolioView portfolio={data.trading} />
            </div>
          )}
        </>
      ) : (
        <p style={{ color: "var(--accent-red)" }}>Failed to load portfolios</p>
      )}
    </div>
  );
}
