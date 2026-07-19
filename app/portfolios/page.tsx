"use client";

import { useEffect, useState } from "react";
import { Loader2, TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

interface Portfolios {
  p1: string;
  equity: string;
  trading: string;
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

function parsePositionsTable(md: string): { headers: string[]; rows: string[][] } | null {
  const lines = md.split("\n");
  const tableStart = lines.findIndex((l) => l.trim().startsWith("|") && l.includes("Ticker"));
  if (tableStart === -1) return null;
  const block: string[] = [];
  for (let i = tableStart; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!t.startsWith("|")) break;
    if (!t.match(/^\|[-: |]+\|$/)) block.push(lines[i]);
  }
  if (block.length < 2) return null;
  const parse = (line: string) =>
    line.split("|").map((c) => c.trim()).filter((_, i, a) => i > 0 && i < a.length - 1);
  return { headers: parse(block[0]), rows: block.slice(1).map(parse) };
}

function PnlBadge({ val }: { val: string }) {
  const neg = val.startsWith("−") || val.startsWith("-");
  const pos = val.startsWith("+");
  const cls = neg ? "badge-red" : pos ? "badge-green" : "badge-gray";
  return <span className={cls}>{val}</span>;
}

function isPnlHeader(h: string) {
  return /p&l|change|pnl/i.test(h);
}

function PortfolioTable({ md }: { md: string }) {
  const table = parsePositionsTable(md);
  if (!table) return (
    <pre className="text-xs whitespace-pre-wrap" style={{ color: "var(--text-secondary)" }}>
      {md.slice(0, 2000)}
    </pre>
  );
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border)" }}>
            {table.headers.map((h) => (
              <th key={h} className="text-left py-2 px-3 font-medium" style={{ color: "var(--text-muted)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-b transition-colors hover:opacity-80" style={{ borderColor: "var(--border)" }}>
              {row.map((cell, j) => (
                <td key={j} className="py-2 px-3" style={{ color: "var(--text-primary)" }}>
                  {isPnlHeader(table.headers[j] ?? "") ? <PnlBadge val={cell} /> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function extractSection(md: string, heading: string): string {
  const lines = md.split("\n");
  const start = lines.findIndex((l) => l.toLowerCase().includes(heading.toLowerCase()) && l.startsWith("#"));
  if (start === -1) return md;
  const end = lines.findIndex((l, i) => i > start && l.match(/^#{1,2} /));
  return lines.slice(start, end === -1 ? undefined : end).join("\n");
}

function TradingStats({ md }: { md: string }) {
  const pnlMatch = md.match(/\|\s*\*\*Net P&L\*\*\s*\|\s*\*\*([^*]+)\*\*/i);
  const totalMatch = md.match(/Total portfolio value[^|]+\|([^|]+)\|/i);
  const tradesMatch = md.match(/Total trades[^:]*:\s*(\d+)/i);
  if (!pnlMatch && !totalMatch && !tradesMatch) return null;
  return (
    <div className="grid grid-cols-3 gap-3 mb-4">
      {pnlMatch && (
        <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Net P&L</p>
          <p className="font-semibold text-sm" style={{
            color: pnlMatch[1].includes("−") || pnlMatch[1].includes("-") ? "var(--accent-red)" : "var(--accent-green)"
          }}>{pnlMatch[1].trim()}</p>
        </div>
      )}
      {totalMatch && (
        <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Portfolio Value</p>
          <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{totalMatch[1].trim()}</p>
        </div>
      )}
      {tradesMatch && (
        <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Total Trades</p>
          <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{tradesMatch[1]}</p>
        </div>
      )}
    </div>
  );
}

function EquityStats({ md }: { md: string }) {
  const table = parsePositionsTable(md);
  if (!table) return null;
  const changeIdx = table.headers.findIndex((h) => /change/i.test(h));
  const tickerIdx = table.headers.findIndex((h) => /ticker/i.test(h));
  if (changeIdx === -1) return null;
  const parseVal = (v: string) => {
    const m = v.replace("−", "-").match(/([-+]?\d+\.?\d*)/);
    return m ? parseFloat(m[1]) : null;
  };
  const changes = table.rows
    .map((r, i) => ({ val: parseVal(r[changeIdx] ?? ""), ticker: r[tickerIdx] ?? String(i) }))
    .filter((x): x is { val: number; ticker: string } => x.val !== null);
  if (!changes.length) return null;
  const avg = changes.reduce((s, x) => s + x.val, 0) / changes.length;
  const best = changes.reduce((a, b) => b.val > a.val ? b : a);
  const worst = changes.reduce((a, b) => b.val < a.val ? b : a);
  const pos = changes.filter((x) => x.val >= 0).length;
  return (
    <div className="grid grid-cols-4 gap-3 mb-4">
      <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
        <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Positions</p>
        <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
          {changes.length} &nbsp;<span style={{ color: "var(--text-muted)", fontWeight: 400 }}>({pos} up)</span>
        </p>
      </div>
      <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
        <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Avg Change</p>
        <p className="font-semibold text-sm" style={{ color: avg >= 0 ? "var(--accent-green)" : "var(--accent-red)" }}>
          {avg >= 0 ? "+" : ""}{avg.toFixed(1)}%
        </p>
      </div>
      <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
        <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Best · {best.ticker}</p>
        <p className="font-semibold text-sm" style={{ color: "var(--accent-green)" }}>+{best.val.toFixed(1)}%</p>
      </div>
      <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
        <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Worst · {worst.ticker}</p>
        <p className="font-semibold text-sm" style={{ color: "var(--accent-red)" }}>{worst.val.toFixed(1)}%</p>
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
}

interface TradeIdea {
  ticker: string;
  action: string;
  rationale: string;
  detail: string;
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

  return { raw: md, isPlaceholder, date, snapshot: snap, signals, shape, sells, adds, newPositions, noTrades, risks, actions };
}

const SIGNAL_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  exit:  { bg: "rgba(239,68,68,0.15)",  color: "var(--accent-red)",   label: "Exit"  },
  trim:  { bg: "rgba(249,115,22,0.15)", color: "#f97316",              label: "Trim"  },
  add:   { bg: "rgba(16,185,129,0.15)", color: "var(--accent-green)",  label: "Add"   },
  hold:  { bg: "rgba(100,116,139,0.12)",color: "var(--text-muted)",    label: "Hold"  },
  watch: { bg: "rgba(96,165,250,0.15)", color: "#60a5fa",              label: "Watch" },
};

function SignalBadge({ signal }: { signal: string }) {
  const key = signal.toLowerCase().replace(/\s+/g, "");
  const style = Object.entries(SIGNAL_STYLES).find(([k]) => key.includes(k))?.[1]
    ?? { bg: "rgba(100,116,139,0.12)", color: "var(--text-muted)", label: signal };
  return (
    <span className="px-2 py-0.5 rounded text-xs font-semibold"
      style={{ backgroundColor: style.bg, color: style.color }}>
      {style.label || signal}
    </span>
  );
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
                  {["Ticker", "P&L", "RSI (14)", "vs 50d", "Signal", "Catalyst"].map(h => (
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
                    <td className="py-2 px-3" style={{ color: "var(--text-primary)" }}>{row.vs50d}</td>
                    <td className="py-2 px-3"><SignalBadge signal={row.signal} /></td>
                    <td className="py-2 px-3" style={{ color: "var(--text-muted)" }}>{row.catalyst}</td>
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
          ) : (
            <div className="card">
              {tab === "p1"
                ? <TradingStats md={data.p1} />
                : <EquityStats md={tab === "equity" ? data.equity : data.trading} />
              }
              <PortfolioTable md={
                tab === "p1"
                  ? extractSection(data.p1, "Open Positions")
                  : tab === "equity" ? data.equity : data.trading
              } />
            </div>
          )}
        </>
      ) : (
        <p style={{ color: "var(--accent-red)" }}>Failed to load portfolios</p>
      )}
    </div>
  );
}
