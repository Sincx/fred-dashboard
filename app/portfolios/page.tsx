"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface Portfolios {
  p1: string;
  p2: string;
  equity: string;
}

type Tab = "p1" | "p2" | "equity";

const TABS: { id: Tab; label: string }[] = [
  { id: "p1", label: "P1 — 7-Strategy Rotation" },
  { id: "p2", label: "P2 — Volume Spike" },
  { id: "equity", label: "Equity Portfolio" },
];

function parsePositionsTable(md: string): { headers: string[]; rows: string[][] } | null {
  const lines = md.split("\n");
  const tableStart = lines.findIndex((l) => l.trim().startsWith("|") && l.includes("Ticker"));
  if (tableStart === -1) return null;
  const tableLines = lines.slice(tableStart).filter((l) => l.trim().startsWith("|") && !l.match(/^\|[-: |]+\|$/));
  if (tableLines.length < 2) return null;
  const parse = (line: string) => line.split("|").map((c) => c.trim()).filter((_, i, a) => i > 0 && i < a.length - 1);
  return { headers: parse(tableLines[0]), rows: tableLines.slice(1).map(parse) };
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
  if (!table) return <pre className="text-xs whitespace-pre-wrap" style={{ color: "var(--text-secondary)" }}>{md.slice(0, 2000)}</pre>;
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
            <tr key={i} className="border-b transition-colors hover:opacity-80"
              style={{ borderColor: "var(--border)" }}>
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

function SummaryStats({ md }: { md: string }) {
  const pnlMatch = md.match(/Net P&L.*?\*\*([^*]+)\*\*/i) ??
    md.match(/Net P&L[^|]+\|([^|]+)\|/i);
  const totalMatch = md.match(/Total portfolio value[^|]+\|([^|]+)\|/i);
  const tradesMatch = md.match(/Total trades[^:]*:\s*(\d+)/i);

  return (
    <div className="grid grid-cols-3 gap-3 mb-4">
      {pnlMatch && (
        <div className="rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
          <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Net P&L</p>
          <p className="font-semibold text-sm" style={{ color: pnlMatch[1].includes("−") || pnlMatch[1].includes("-") ? "var(--accent-red)" : "var(--accent-green)" }}>
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
          <SummaryStats md={data[tab]} />
          <PortfolioTable md={extractSection(data[tab], "Open Positions")} />
        </div>
      ) : (
        <p style={{ color: "var(--accent-red)" }}>Failed to load portfolios</p>
      )}
    </div>
  );
}
