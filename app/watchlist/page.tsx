"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2, ArrowUpDown, Search } from "lucide-react";
import { SourceSignalBadge } from "@/components/SignalBadge";

interface UniverseRow {
  ticker: string;
  exchange: string;
  sector: string | null;
  index_membership: string;
  asset_class: string;
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
  notes: string | null;
  signal_source: string | null;
  signal_detail: string | null;
  signal_flagged_date: string | null;
  investor_names: string | null;
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
  notes: string | null;
  signal_source: string | null;
  signal_detail: string | null;
  signal_flagged_date: string | null;
  investor_names: string | null;
}

// Master spec Phase 15 — small pill(s) for "which tracked investor(s) hold
// this ticker right now", from v_ticker_investor_positions (comma-joined
// investor_names). Separate from SourceSignalBadge/signal_source: that
// column shows only the single MOST RECENT signal per ticker, so an
// investor holding can get silently crowded out by a newer
// magic-formula-pass/llm-research signal on the same ticker.
function InvestorBadges({ names }: { names: string | null }) {
  if (!names) return <span style={{ color: "var(--text-muted)" }}>—</span>;
  return (
    <span className="flex flex-wrap gap-1">
      {names.split(",").map((name) => (
        <span key={name} className="px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap"
          style={{ backgroundColor: "rgba(167,139,250,0.15)", color: "#a78bfa" }}>
          🟣 {name}
        </span>
      ))}
    </span>
  );
}

interface TickerResearchDetail {
  ticker: string;
  exchange: string;
  sector: string | null;
  index_membership: string;
  notes: string | null;
  signals: { source: string; detail: string | null; flagged_date: string; source_ref: string | null }[];
  investors: { investor_id: string; name: string; direction: string; disclosed_date: string;
    entry_price_hint: number | null; status: string }[];
}

// Master spec Phase 15's research popover — read-only, DB-only (no live
// LLM/WebSearch call from here, per Mike's own scope call 2026-09-20).
// Shows EVERY signal ever recorded for this ticker, not just the single
// most recent one the table's own Signal column shows, so an older
// llm-research thesis doesn't look like it never existed just because a
// newer magic-formula-pass signal landed on top of it.
function TickerResearchPopover({ ticker, exchange, onClose }: { ticker: string; exchange: string; onClose: () => void }) {
  const [data, setData] = useState<TickerResearchDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/finance/universe/${encodeURIComponent(ticker)}?exchange=${encodeURIComponent(exchange)}`)
      .then((r) => r.json())
      .then((d) => { if (!cancelled) { if (d.error) setError(d.error); else setData(d); } })
      .catch((e) => { if (!cancelled) setError(String(e)); });
    return () => { cancelled = true; };
  }, [ticker, exchange]);

  function parseDetail(raw: string | null): Record<string, unknown> | null {
    if (!raw) return null;
    try { return JSON.parse(raw); } catch { return null; }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}>
      <div className="rounded-lg p-5 max-w-lg w-full max-h-[80vh] overflow-y-auto"
        style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}
        onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
            {ticker} <span className="text-xs font-normal" style={{ color: "var(--text-muted)" }}>({exchange})</span>
          </h3>
          <button onClick={onClose} className="text-sm" style={{ color: "var(--text-muted)" }}>✕</button>
        </div>
        {error && <p className="text-sm" style={{ color: "var(--accent-red)" }}>{error}</p>}
        {!data && !error && <p className="text-sm" style={{ color: "var(--text-muted)" }}>Loading…</p>}
        {data && (
          <div className="space-y-4">
            <div className="text-xs" style={{ color: "var(--text-muted)" }}>
              {data.sector || "—"} · {data.index_membership}
            </div>
            {data.notes && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--text-muted)" }}>Notes</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{data.notes}</p>
              </div>
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-muted)" }}>
                Signals ({data.signals.length})
              </p>
              {data.signals.length === 0 ? (
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>No signals recorded for this ticker.</p>
              ) : (
                <div className="space-y-2">
                  {data.signals.map((s, i) => {
                    const detail = parseDetail(s.detail);
                    return (
                      <div key={i} className="rounded p-2 text-sm" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                        <div className="flex items-center justify-between mb-1">
                          <SourceSignalBadge source={s.source} />
                          <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.flagged_date}</span>
                        </div>
                        {detail && (
                          <pre className="text-xs whitespace-pre-wrap break-words" style={{ color: "var(--text-secondary)" }}>
                            {Object.entries(detail).map(([k, v]) => `${k}: ${v}\n`).join("")}
                          </pre>
                        )}
                        {s.source_ref && <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{s.source_ref}</p>}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "var(--text-muted)" }}>
                Investor holdings ({data.investors.length})
              </p>
              {data.investors.length === 0 ? (
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>No tracked investor holds this ticker.</p>
              ) : (
                <div className="space-y-1">
                  {data.investors.map((inv, i) => (
                    <div key={i} className="text-sm flex items-center justify-between">
                      <span style={{ color: "var(--text-secondary)" }}>
                        🟣 {inv.name} — {inv.direction} since {inv.disclosed_date}
                        {inv.entry_price_hint != null ? ` @ ${inv.entry_price_hint}` : ""}
                      </span>
                      <span className="text-xs" style={{ color: inv.status === "open" ? "var(--accent-green)" : "var(--text-muted)" }}>
                        {inv.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface ConvergenceRow {
  ticker: string;
  exchange: string;
  sector: string | null;
  index_membership: string;
  mf_rank: number;
  earnings_yield: number;
  roic: number;
  close: number | null;
  pct_1d: number | null;
  rsi14: number | null;
  macd_signal: string | null;
  technical_rating: string | null;
  currency: string | null;
}

type Tab = "watchlist" | "screener" | "convergence";

// Sub-$1 prices (common for micro-cap crypto, e.g. $EV at ~$0.00026) round
// to "0.00" under a flat 2-decimal format, which reads as no data rather
// than a real price. 3 significant figures keeps it meaningful either way.
function fmtPrice(v: number): string {
  if (v === 0) return "0";
  return Math.abs(v) >= 1 ? v.toFixed(2) : v.toPrecision(3);
}

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

function NotesCell({
  ticker, exchange, value, onSaved,
}: {
  ticker: string; exchange: string; value: string | null; onSaved: (notes: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value ?? "");
  const [saving, setSaving] = useState(false);

  useEffect(() => { setDraft(value ?? ""); }, [value]);

  async function save() {
    setEditing(false);
    if (draft === (value ?? "")) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/finance/universe/${encodeURIComponent(ticker)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exchange, notes: draft }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      onSaved(draft);
    } catch {
      setDraft(value ?? "");
    } finally {
      setSaving(false);
    }
  }

  if (editing) {
    return (
      <input
        autoFocus
        className="px-1.5 py-0.5 rounded text-xs w-40"
        style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--accent)", color: "var(--text-primary)" }}
        value={draft}
        disabled={saving}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={save}
        onKeyDown={(e) => {
          if (e.key === "Enter") e.currentTarget.blur();
          if (e.key === "Escape") { setDraft(value ?? ""); setEditing(false); }
        }}
      />
    );
  }
  return (
    <span
      className="text-xs cursor-text"
      style={{ color: value ? "var(--text-secondary)" : "var(--text-muted)", opacity: saving ? 0.5 : 1 }}
      onClick={() => setEditing(true)}
      title="Click to edit"
    >
      {value || "add note…"}
    </span>
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
  // Crypto never appears in the Screener/Convergence tabs by design (no
  // fundamentals data — same mechanism that already excludes Financials/
  // Utilities/REITs from the Magic Formula), so this only affects the Full
  // Watchlist tab. Defaults to equities per the Phase 2 spec.
  const [assetClass, setAssetClass] = useState<"equity" | "crypto">("equity");
  const [researchTarget, setResearchTarget] = useState<{ ticker: string; exchange: string } | null>(null);

  const [uSortField, setUSortField] = useState<keyof UniverseRow>("ticker");
  const [uSortDir, setUSortDir] = useState<"asc" | "desc">("asc");
  const [sSortField, setSSortField] = useState<keyof ScreenerRow>("mf_rank");
  const [sSortDir, setSSortDir] = useState<"asc" | "desc">("asc");
  const [cSortField, setCSortField] = useState<keyof ConvergenceRow>("mf_rank");
  const [cSortDir, setCSortDir] = useState<"asc" | "desc">("asc");

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

  const universeByAssetClass = useMemo(
    () => universe.filter((r) => r.asset_class === assetClass),
    [universe, assetClass]
  );

  const indexOptions = useMemo(() => {
    const set = new Set<string>();
    universeByAssetClass.forEach((r) => r.index_membership.split(",").forEach((i) => set.add(i)));
    return ["ALL", ...Array.from(set).sort()];
  }, [universeByAssetClass]);

  function handleAssetClassChange(ac: "equity" | "crypto") {
    setAssetClass(ac);
    setIndexFilter("ALL"); // avoid a stale equity-index selection showing 0 crypto rows or vice versa
  }

  function sortRows<T>(rows: T[], field: keyof T, dir: "asc" | "desc") {
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
    let rows = universeByAssetClass;
    if (search.trim()) {
      const q = search.trim().toUpperCase();
      rows = rows.filter((r) => r.ticker.includes(q) || (r.sector ?? "").toUpperCase().includes(q));
    }
    if (indexFilter !== "ALL") {
      rows = rows.filter((r) => r.index_membership.split(",").includes(indexFilter));
    }
    return sortRows(rows, uSortField, uSortDir);
  }, [universeByAssetClass, search, indexFilter, uSortField, uSortDir]);

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

  // Convergence: Magic Formula passes AND technical rating is "Buy" — the
  // intersection of the value screen and the momentum/trend read, joined on
  // (ticker, exchange) since the same ticker can appear under more than one
  // exchange row (e.g. dual-listed names).
  const convergenceRows: ConvergenceRow[] = useMemo(() => {
    const uByKey = new Map(universe.map((r) => [`${r.ticker}-${r.exchange}`, r]));
    const rows: ConvergenceRow[] = [];
    for (const s of screener) {
      if (s.passes_thresholds !== 1) continue;
      const u = uByKey.get(`${s.ticker}-${s.exchange}`);
      if (!u || u.technical_rating !== "Buy") continue;
      rows.push({
        ticker: s.ticker, exchange: s.exchange, sector: s.sector, index_membership: s.index_membership,
        mf_rank: s.mf_rank, earnings_yield: s.earnings_yield, roic: s.roic,
        close: u.close, pct_1d: u.pct_1d, rsi14: u.rsi14, macd_signal: u.macd_signal,
        technical_rating: u.technical_rating, currency: u.currency,
      });
    }
    return rows;
  }, [screener, universe]);

  const filteredConvergence = useMemo(() => {
    let rows = convergenceRows;
    if (search.trim()) {
      const q = search.trim().toUpperCase();
      rows = rows.filter((r) => r.ticker.includes(q) || (r.sector ?? "").toUpperCase().includes(q));
    }
    if (indexFilter !== "ALL") {
      rows = rows.filter((r) => r.index_membership.split(",").includes(indexFilter));
    }
    return sortRows(rows, cSortField, cSortDir);
  }, [convergenceRows, search, indexFilter, cSortField, cSortDir]);

  function handleUSort(field: keyof UniverseRow) {
    if (field === uSortField) setUSortDir(uSortDir === "asc" ? "desc" : "asc");
    else { setUSortField(field); setUSortDir("asc"); }
  }
  function handleSSort(field: keyof ScreenerRow) {
    if (field === sSortField) setSSortDir(sSortDir === "asc" ? "desc" : "asc");
    else { setSSortField(field); setSSortDir(field === "mf_rank" ? "asc" : "desc"); }
  }
  function updateNotes(ticker: string, exchange: string, notes: string) {
    setUniverse((prev) => prev.map((r) => (r.ticker === ticker && r.exchange === exchange ? { ...r, notes } : r)));
  }
  function handleCSort(field: keyof ConvergenceRow) {
    if (field === cSortField) setCSortDir(cSortDir === "asc" ? "desc" : "asc");
    else { setCSortField(field); setCSortDir(field === "mf_rank" ? "asc" : "desc"); }
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
          Full Watchlist ({universeByAssetClass.length})
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
        <button
          className="px-3 py-1.5 rounded-lg text-sm font-medium"
          style={{
            backgroundColor: tab === "convergence" ? "rgba(99,102,241,0.15)" : "transparent",
            color: tab === "convergence" ? "var(--accent)" : "var(--text-secondary)",
            border: "1px solid var(--border)",
          }}
          onClick={() => setTab("convergence")}
        >
          Buy + Magic Formula ({convergenceRows.length})
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
        {tab === "watchlist" && (
          <div className="flex gap-1 p-0.5 rounded-lg" style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border)" }}>
            {(["equity", "crypto"] as const).map((ac) => (
              <button key={ac} onClick={() => handleAssetClassChange(ac)}
                className="px-2.5 py-1 rounded-md text-xs font-medium capitalize"
                style={{
                  backgroundColor: assetClass === ac ? "var(--accent)" : "transparent",
                  color: assetClass === ac ? "white" : "var(--text-secondary)",
                }}>
                {ac === "equity" ? "Equities" : "Crypto"}
              </button>
            ))}
          </div>
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
                <SortHeader label="Signal" field="signal_source" sortField={uSortField} sortDir={uSortDir} onSort={handleUSort} />
                <th className="text-left px-3 py-2 text-xs font-medium whitespace-nowrap" style={{ color: "var(--text-muted)" }}>Investors</th>
                <th className="text-left px-3 py-2 text-xs font-medium whitespace-nowrap" style={{ color: "var(--text-muted)" }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {filteredUniverse.map((r) => (
                <tr key={`${r.ticker}-${r.exchange}`} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="px-3 py-2 font-medium">
                    <button onClick={() => setResearchTarget({ ticker: r.ticker, exchange: r.exchange })}
                      className="hover:underline" style={{ color: "var(--text-primary)" }}
                      title="View research and signals">
                      {r.ticker}
                    </button>
                  </td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{r.index_membership}</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-secondary)" }}>{r.sector || "—"}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-primary)" }}>
                    {r.close != null ? `${fmtPrice(r.close)} ${r.currency ?? ""}` : "—"}
                  </td>
                  <td className="px-3 py-2">{pctCell(r.pct_1d)}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}>{r.rsi14?.toFixed(1) ?? "—"}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}>{r.macd_signal ?? "—"}</td>
                  <td className="px-3 py-2">{ratingBadge(r.technical_rating)}</td>
                  <td className="px-3 py-2">
                    {r.signal_source ? <SourceSignalBadge source={r.signal_source} /> : <span style={{ color: "var(--text-muted)" }}>—</span>}
                  </td>
                  <td className="px-3 py-2"><InvestorBadges names={r.investor_names} /></td>
                  <td className="px-3 py-2">
                    <NotesCell ticker={r.ticker} exchange={r.exchange} value={r.notes}
                      onSaved={(notes) => updateNotes(r.ticker, r.exchange, notes)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUniverse.length === 0 && (
            <p className="text-sm text-center py-8" style={{ color: "var(--text-muted)" }}>No matching tickers.</p>
          )}
        </div>
      ) : tab === "screener" ? (
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
                <SortHeader label="Signal" field="signal_source" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <th className="text-left px-3 py-2 text-xs font-medium whitespace-nowrap" style={{ color: "var(--text-muted)" }}>Investors</th>
              </tr>
            </thead>
            <tbody>
              {filteredScreener.map((r) => (
                <tr key={`${r.ticker}-${r.exchange}`} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="px-3 py-2 font-mono" style={{ color: "var(--text-primary)" }}>#{r.mf_rank}</td>
                  <td className="px-3 py-2 font-medium">
                    <button onClick={() => setResearchTarget({ ticker: r.ticker, exchange: r.exchange })}
                      className="hover:underline" style={{ color: "var(--text-primary)" }}
                      title="View research and signals">
                      {r.ticker}
                    </button>
                  </td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{r.index_membership}</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-secondary)" }}>{r.sector || "—"}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-primary)" }}>{r.earnings_yield.toFixed(2)}%</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-primary)" }}>{r.roic.toFixed(2)}%</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}>{r.pe?.toFixed(2) ?? "—"}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}>{r.div_yield?.toFixed(2) ?? "—"}</td>
                  <td className="px-3 py-2">
                    {r.passes_thresholds ? <span className="badge-green">Pass</span> : <span style={{ color: "var(--text-muted)" }}>—</span>}
                  </td>
                  <td className="px-3 py-2">
                    {r.signal_source ? <SourceSignalBadge source={r.signal_source} /> : <span style={{ color: "var(--text-muted)" }}>—</span>}
                  </td>
                  <td className="px-3 py-2"><InvestorBadges names={r.investor_names} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredScreener.length === 0 && (
            <p className="text-sm text-center py-8" style={{ color: "var(--text-muted)" }}>No matching tickers.</p>
          )}
        </div>
      ) : (
        <div className="card overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead style={{ borderBottom: "1px solid var(--border)" }}>
              <tr>
                <SortHeader label="MF Rank" field="mf_rank" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="Ticker" field="ticker" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="Index" field="index_membership" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="Sector" field="sector" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="EY %" field="earnings_yield" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="ROIC %" field="roic" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="Price" field="close" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="1D %" field="pct_1d" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="RSI14" field="rsi14" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="Rating" field="technical_rating" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
              </tr>
            </thead>
            <tbody>
              {filteredConvergence.map((r) => (
                <tr key={`${r.ticker}-${r.exchange}`} style={{ borderBottom: "1px solid var(--border)" }}>
                  <td className="px-3 py-2 font-mono" style={{ color: "var(--text-primary)" }}>#{r.mf_rank}</td>
                  <td className="px-3 py-2 font-medium">
                    <button onClick={() => setResearchTarget({ ticker: r.ticker, exchange: r.exchange })}
                      className="hover:underline" style={{ color: "var(--text-primary)" }}
                      title="View research and signals">
                      {r.ticker}
                    </button>
                  </td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-muted)" }}>{r.index_membership}</td>
                  <td className="px-3 py-2 text-xs" style={{ color: "var(--text-secondary)" }}>{r.sector || "—"}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-primary)" }}>{r.earnings_yield.toFixed(2)}%</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-primary)" }}>{r.roic.toFixed(2)}%</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-primary)" }}>
                    {r.close != null ? `${fmtPrice(r.close)} ${r.currency ?? ""}` : "—"}
                  </td>
                  <td className="px-3 py-2">{pctCell(r.pct_1d)}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}>{r.rsi14?.toFixed(1) ?? "—"}</td>
                  <td className="px-3 py-2">{ratingBadge(r.technical_rating)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredConvergence.length === 0 && (
            <p className="text-sm text-center py-8" style={{ color: "var(--text-muted)" }}>
              No tickers currently pass the Magic Formula screen AND carry a technical Buy rating.
            </p>
          )}
        </div>
      )}
      {researchTarget && (
        <TickerResearchPopover
          ticker={researchTarget.ticker}
          exchange={researchTarget.exchange}
          onClose={() => setResearchTarget(null)}
        />
      )}
    </div>
  );
}
