"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface Portfolios {
  p1: string;
  p2: string;
  equity: string;
  trading: string;
}

type Tab = "p1" | "p2" | "equity" | "trading";

const TABS: { id: Tab; label: string }[] = [
  { id: "p1", label: "P1 — 7-Strategy Rotation" },
  { id: "p2", label: "P2 — Volume Spike" },
  { id: "equity", label: "Equity Portfolio" },
  { id: "trading", label: "Trading Portfolio" },
];

function parsePositionsTable(md: string): { headers: string[]; rows: string[][] } | null {
  const lines = md.split("\n");
  const tableStart = lines.findIndex((l) => l.trim().startsWith("|") && l.includes("Ticker"));
  if (tableStart === -1) return null;

  // Collect only the contiguous block — stop at first non-| line so we don't bleed into later tables
  const block: string[] = [];
  for (let i = tableStart; i < lines.length; i++) {
    const t = lines[i].trim();
    if (!t.startsWith("|")) break;
    if (!t.match(/^\|[-: |]+\|$/)) block.push(lines[i]); // skip separator rows
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

// Stats for P1/P2 — extracted from markdown summary text
function TradingStats({ md }: { md: string }) {
  // Match table row: | **Net P&L** | **+$1,869 (+7.48%)** |
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
          }}>
            {pnlMatch[1].trim()}
          </p>
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

// Stats for Equity tab — computed from the table's Change column
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
        <div className="card">
          {tab === "p1" || tab === "p2"
            ? <TradingStats md={data[tab]} />
            : <EquityStats md={tab === "equity" ? data.equity : data.trading} />
          }
          <PortfolioTable md={tab === "p1" || tab === "p2" ? extractSection(data[tab], "Open Positions") : tab === "equity" ? data.equity : data.trading} />
        </div>
      ) : (
        <p style={{ color: "var(--accent-red)" }}>Failed to load portfolios</p>
      )}
    </div>
  );
}
