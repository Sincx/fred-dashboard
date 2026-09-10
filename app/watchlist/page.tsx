"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2, ArrowUpDown, Search } from "lucide-react";

interface UniverseRow {
  ticker: string;
  exchange: string;
  sector: string | null;
  index_membership: string;
  close: number | null;
  pct_1d: number | null;
  ma20: number | null;
  ma50: number | null;
  ma200: number | null;
  rsi14: number | null;
  macd_signal: string | null;
  technical_rating: string | null;
  currency: string | null;
  date: string | null;
}

interface ScreenerRow {
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

type Tab = "watchlist" | "screener";

function ratingBadge(rating: string | null) {
  if (!rating) return <span style={{ color: "var(--text-muted)" }}>—</span>;
  const cls = rating === "Buy" ? "badge-green" : rating === "Sell" ? "badge-red" : "badge-yellow";
  return <span className={cls}>{rating}</span>;
}

function pctCell(v: number | null) {
  if (v === null || v === undefined) return <span style={{ color: "var(--text-muted)" }}>—</span>;
  const color = v > 0 ? "var(--accent-green)" : v < 0 ? "var(--accent-red)" : "var(--text-secondary)";
  return <span style={{ color }}>{v > 0 ? "+" : ""}{v.toFixed(2)}%</span>;
}

function SortHeader<T>({
  label, field, sortField, sortDir, onSort,
}: {
  label: string; field: keyof T; sortField: keyof T | null; sortDir: "asc" | "desc";
  onSort: (f: keyof T) => void;
}) {
  const active = sortField === field;
  return (
    <th
      className="text-left px-3 py-2 text-xs font-medium cursor-pointer select-none whitespace-nowrap"
      style={{ color: active ? "var(--accent)" : "var(--text-muted)" }}
      onClick={() => onSort(field)}
    >
      <span className="flex items-center gap-1">
        {label}
        <ArrowUpDown size={11} style={{ opacity: active ? 1 : 0.4 }} />
        {active && <span className="text-[10px]">{sortDir === "asc" ? "↑" : "↓"}</span>}
      </span>
    </th>
  );
}

export default function WatchlistPage() {
  const [tab, setTab] = useState<Tab>("watchlist");
  const [universe, setUniverse] = useState<UniverseRow[]>([]);
  const [screener, setScreener] = useState<ScreenerRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [indexFilter, setIndexFilter] = useState("ALL");
  const [passOnly, setPassOnly] = useState(false);

  const [uSortField, setUSortField] = useState<keyof UniverseRow>("ticker");
  const [uSortDir, setUSortDir] = useState<"asc" | "desc">("asc");
  const [sSortField, setSSortField] = useState<keyof ScreenerRow>("mf_rank");
  const [sSortDir, setSSortDir] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    Promise.all([
      fetch("/api/finance/universe").then((r) => r.json()),
      fetch("/api/finance/screener").then((r) => r.json()),
    ])
      .then(([u, s]) => {
        if (u.error || s.error) throw new Error(u.error || s.error);
        setUniverse(Array.isArray(u) ? u : []);
        setScreener(Array.isArray(s) ? s : []);
        setLoading(false);
      })
      .catch((e) => {
        setError(String(e));
        setLoading(false);
      });
  }, []);

  const indexOptions = useMemo(() => {
    const set = new Set<string>();
    universe.forEach((r) => r.index_membership.split(",").forEach((i) => set.add(i)));
    return ["ALL", ...Array.from(set).sort()];
  }, [universe]);

  function sortRows<T extends Record<string, unknown>>(rows: T[], field: keyof T, dir: "asc" | "desc") {
    return [...rows].sort((a, b) => {
      const av = a[field], bv = b[field];
      if (av === null || av === undefined) return 1;
      if (bv === null || bv === undefined) return -1;
      if (typeof av === "string" || typeof bv === "string") {
        return dir === "asc" ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
      }
      return dir === "asc" ? (av as number) - (bv as number) : (bv as number) - (av as number);
    });
  }

  const filteredUniverse = useMemo(() => {
    let rows = universe;
    if (search.trim()) {
      const q = search.trim().toUpperCase();
      rows = rows.filter((r) => r.ticker.includes(q) || (r.sector ?? "").toUpperCase().includes(q));
    }
    if (indexFilter !== "ALL") {
      rows = rows.filter((r) => r.index_membership.split(",").includes(indexFilter));
    }
    return sortRows(rows, uSortField, uSortDir);
  }, [universe, search, indexFilter, uSortField, uSortDir]);

  const filteredScreener = useMemo(() => {
    let rows = screener;
    if (search.trim()) {
      const q = search.trim().toUpperCase();
      rows = rows.filter((r) => r.ticker.includes(q) || (r.sector ?? "").toUpperCase().includes(q));
    }
    if (indexFilter !== "ALL") {
      rows = rows.filter((r) => r.index_membership.split(",").includes(indexFilter));
    }
    if (passOnly) rows = rows.filter((r) => r.passes_thresholds === 1);
    return sortRows(rows, sSortField, sSortDir);
  }, [screener, search, indexFilter, passOnly, sSortField, sSortDir]);

  function handleUSort(field: keyof UniverseRow) {
    if (field === uSortField) setUSortDir(uSortDir === "asc" ? "desc" : "asc");
    else { setUSortField(field); setUSortDir("asc"); }
  }
  function handleSSort(field: keyof ScreenerRow) {
    if (field === sSortField) setSSortDir(sSortDir === "asc" ? "desc" : "asc");
    else { setSSortField(field); setSSortDir(field === "mf_rank" ? "asc" : "desc"); }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
        Watchlist &amp; Screener
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        {universe.length} tickers tracked · queried live from Turso
      </p>

      <div className="flex items-center gap-2 mb-4">
        <button
          className="px-3 py-1.5 rounded-lg text-sm font-medium"
          style={{
            backgroundColor: tab === "watchlist" ? "rgba(99,102,241,0.15)" : "transparent",
            color: tab === "watchlist" ? "var(--accent)" : "var(--text-secondary)",
            border: "1px solid var(--border)",
          }}
          onClick={() => setTab("watchlist")}
        >
          Full Watchlist ({universe.length})
        </button>
        <button
          className="px-3 py-1.5 rounded-lg text-sm font-medium"
          style={{
            backgroundColor: tab === "screener" ? "rgba(99,102,241,0.15)" : "transparent",
            color: tab === "screener" ? "var(--accent)" : "var(--text-secondary)",
            border: "1px solid var(--border)",
          }}
          onClick={() => setTab("screener")}
        >
          Magic Formula Screener ({screener.length})
        </button>
      </div>

      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="relative">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2" style={{ color: "var(--text-muted)" }} />
          <input
            className="pl-8 pr-3 py-1.5 rounded-lg text-sm"
            style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
            placeholder="Search ticker or sector..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select
          className="px-3 py-1.5 rounded-lg text-sm"
          style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
          value={indexFilter}
          onChange={(e) => setIndexFilter(e.target.value)}
        >
          {indexOptions.map((i) => <option key={i} value={i}>{i}</option>)}
        </select>
        {tab === "screener" && (
          <label className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-secondary)" }}>
            <input type="checkbox" checked={passOnly} onChange={(e) => setPassOnly(e.target.checked)} />
            Passing thresholds only
          </label>
        )}
      </div>

      {loading ? (
        <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <Loader2 size={16} className="animate-spin" /> Loading…
        </div>
      ) : error ? (
        <p className="text-sm" style={{ color: "var(--accent-red)" }}>{error}</p>
      ) : tab === "watchlist" ? (
        <div className="card overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead style={{ borderBottom: "1px solid var(--border)" }}>
              <tr>
                <SortHeader label="Ticker" field="ticker" sortField={uSortField} sortDir={uSortDir} onSort={handleUSort} />
                <SortHeader label="Index" field="index_membership" sortField={uSortField} sortDir={uSortDir} onSort={handleUSort} />
                <SortHeader label="Sector" field="sector" sortField={uSortField} sortDir={uSortDir} onSort={handleUSort} />
                <SortHeader label="Price" field="close" sortField={uSortField} sortDir={uSortDir} onSort={handleUSort} />
                <SortHeader label="1D %" field="pct_1d" sortField={uSortField} sortDir={uSortDir} onSort={handleUSort} />
                <SortHeader label="RSI14" field="rsi14" sortField={uSortField} sortDir={uSortDir} onSort={handleUSort} />
                <SortHeader label="MACD" field="macd_signal" sortField={uSortField} sortDir={uSortDir} onSort={handleUSort} />
                <SortHeader label="Rating" field="technical_rating" sortField={uSortField} sortDir={uSortDir} onSort={handleUSort} />
              </tr>
            </thead>
            <tbody>
              {filteredUniverse.map((r) => (
                <tr key={`${r.ticker}-${r.exchange}`} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="px-3 py-2 font-medium" style={{ color: "var(--text-primary)" }}>{r.ticker}</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{r.index_membership}</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-secondary)" }}>{r.sector || "—"}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-primary)" }}>
                    {r.close != null ? `${r.close.toFixed(2)} ${r.currency ?? ""}` : "—"}
                  </td>
                  <td className="px-3 py-2">{pctCell(r.pct_1d)}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}>{r.rsi14?.toFixed(1) ?? "—"}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}>{r.macd_signal ?? "—"}</td>
                  <td className="px-3 py-2">{ratingBadge(r.technical_rating)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUniverse.length === 0 && (
            <p className="text-sm text-center py-8" style={{ color: "var(--text-muted)" }}>No matching tickers.</p>
          )}
        </div>
      ) : (
        <div className="card overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead style={{ borderBottom: "1px solid var(--border)" }}>
              <tr>
                <SortHeader label="MF Rank" field="mf_rank" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="Ticker" field="ticker" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="Index" field="index_membership" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="Sector" field="sector" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="EY %" field="earnings_yield" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="ROIC %" field="roic" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="P/E" field="pe" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="Div %" field="div_yield" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="Passes" field="passes_thresholds" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
              </tr>
            </thead>
            <tbody>
              {filteredScreener.map((r) => (
                <tr key={`${r.ticker}-${r.exchange}`} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="px-3 py-2 font-mono" style={{ color: "var(--text-primary)" }}>#{r.mf_rank}</td>
                  <td className="px-3 py-2 font-medium" style={{ color: "var(--text-primary)" }}>{r.ticker}</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{r.index_membership}</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-secondary)" }}>{r.sector || "—"}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-primary)" }}>{r.earnings_yield.toFixed(2)}%</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-primary)" }}>{r.roic.toFixed(2)}%</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}>{r.pe?.toFixed(2) ?? "—"}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}>{r.div_yield?.toFixed(2) ?? "—"}</td>
                  <td className="px-3 py-2">
                    {r.passes_thresholds ? <span className="badge-green">Pass</span> : <span style={{ color: "var(--text-muted)" }}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredScreener.length === 0 && (
            <p className="text-sm text-center py-8" style={{ color: "var(--text-muted)" }}>No matching tickers.</p>
          )}
        </div>
      )}
    </div>
  );
}
