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
  investor_labels: string | null;
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
  investor_labels: string | null;
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

// ScreenerRow plus the dashboard-only valuation ranks (see rankScreener).
interface RankedScreenerRow extends ScreenerRow {
  value_discount_pct: number | null;   // SBC-adjusted DCF discount, else plain DCF; null = no usable valuation
  value_basis: "sbc" | "dcf" | null;
  value_confidence: string | null;
  value_rank: number | null;           // 1 = most undervalued among rows with a usable valuation
  combined_rank: number;               // 1 = best blend of Magic Formula and value rank
  combined_has_value: boolean;         // false = no usable valuation (scored as median value)
}

// Valuations feed the ranking only when the model was confident enough: a
// 'low' confidence DCF is usually a data problem (see valuation.py), and letting
// it rank would put the noisiest numbers at the top of the list.
const RANKABLE_CONFIDENCE = new Set(["high", "medium"]);

// Dashboard-only blend. The Magic Formula rank is untouched (the pipeline's
// recommendations still use it); this adds a second view: each row's Magic
// Formula percentile and its value percentile are averaged, so a stock that is
// cheap on earnings AND below its (SBC-adjusted) fair value rises, and one that
// looks cheap on the screen but expensive on cash flows falls. Rows with no
// usable valuation are scored as median value (0.5), so being uncovered is
// neither rewarded nor penalised: using their Magic Formula percentile alone
// would put every uncovered name above any covered name with a middling value.
function rankScreener(rows: ScreenerRow[]): RankedScreenerRow[] {
  const base = rows.map((r) => {
    const sbcOk = r.dcf_sbc_discount_pct != null && RANKABLE_CONFIDENCE.has(r.dcf_sbc_confidence ?? "");
    // The SBC-adjusted figure is the stricter one; fall back to the plain DCF only when it is absent
    // (no usable SBC history) — never when it exists but is low-confidence.
    const dcfOk = r.dcf_sbc_discount_pct == null && r.dcf_discount_pct != null
      && RANKABLE_CONFIDENCE.has(r.dcf_confidence ?? "");
    return {
      ...r,
      value_discount_pct: sbcOk ? r.dcf_sbc_discount_pct : dcfOk ? r.dcf_discount_pct : null,
      value_basis: (sbcOk ? "sbc" : dcfOk ? "dcf" : null) as "sbc" | "dcf" | null,
      value_confidence: sbcOk ? r.dcf_sbc_confidence : dcfOk ? r.dcf_confidence : null,
    };
  });
  const valued = base.filter((r) => r.value_discount_pct != null)
    .sort((a, b) => (b.value_discount_pct as number) - (a.value_discount_pct as number));
  const vRank = new Map(valued.map((r, i) => [`${r.ticker}-${r.exchange}`, i + 1]));
  const nMf = Math.max(rows.length, 1), nV = Math.max(valued.length, 1);
  const withBlend = base.map((r) => {
    const vr = vRank.get(`${r.ticker}-${r.exchange}`) ?? null;
    const mfPct = r.mf_rank / nMf;
    return { r, vr, score: (mfPct + (vr != null ? vr / nV : 0.5)) / 2 };
  });
  const cRank = new Map([...withBlend].sort((a, b) => a.score - b.score)
    .map((o, i) => [`${o.r.ticker}-${o.r.exchange}`, i + 1]));
  return withBlend.map(({ r, vr }) => ({
    ...r, value_rank: vr, combined_rank: cRank.get(`${r.ticker}-${r.exchange}`) as number, combined_has_value: vr != null,
  }));
}

// Master spec Phase 15 — one pill per tracked investor holding this ticker, from
// v_ticker_investor_labels: ';'-separated entries like "Buffett (L)",
// "Burry (S)" or "Ackman (L, trimmed)" — L/S is long/short, "trimmed" means the
// investor cut the position by >25% in their latest filing. Separate from
// SourceSignalBadge/signal_source: that column shows only the single MOST
// RECENT signal per ticker, so an investor holding can get crowded out by a
// newer magic-formula-pass/llm-research signal on the same ticker.
function InvestorBadges({ labels }: { labels: string | null }) {
  if (!labels) return <span style={{ color: "var(--text-muted)" }}>—</span>;
  return (
    <span className="flex flex-wrap gap-1">
      {labels.split(";").map((label) => {
        const isShort = /\(S[,)]/.test(label);
        return (
          <span key={label} className="px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap"
            style={{
              backgroundColor: isShort ? "rgba(239,68,68,0.12)" : "rgba(167,139,250,0.15)",
              color: isShort ? "var(--accent-red)" : "#a78bfa",
            }}>
            🟣 {label}
          </span>
        );
      })}
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
  valuations: { method: string; fair_value: number; discount_pct: number | null; current_price: number | null;
    confidence: string | null; discount_rate: number | null; run_date: string; stage1_growth: number | null;
    pooled_delta_e: number | null; gaap_overstatement: number | null; rho: number | null; notes: string[] | null }[];
}

const METHOD_LABEL: Record<string, string> = {
  dcf_fair_value: "DCF", dcf_sbc_adjusted: "DCF, SBC-adjusted (Burry)", book_value: "Book value",
  tangible_book_value: "Tangible book", burry_iv15: "Burry IV15",
};

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
                Valuation ({data.valuations?.length ?? 0})
              </p>
              {!data.valuations || data.valuations.length === 0 ? (
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  No valuation yet (SEC filings not loaded, or a bank/REIT/utility/foreign filer where cash-flow models do not apply).
                </p>
              ) : (
                <div className="space-y-2">
                  {data.valuations.map((v) => (
                    <div key={v.method} className="rounded p-2 text-sm" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                      <div className="flex items-center justify-between">
                        <span style={{ color: "var(--text-primary)" }}>{METHOD_LABEL[v.method] ?? v.method}</span>
                        <span style={{ color: "var(--text-primary)" }}>
                          {fmtPrice(v.fair_value)}{" "}
                          {v.method.endsWith("book_value") ? (
                            // a "discount" to book is not an undervaluation signal; show the multiple instead
                            v.current_price != null && v.fair_value > 0 && (
                              <span style={{ color: "var(--text-muted)" }}>({(v.current_price / v.fair_value).toFixed(1)}× price/book)</span>
                            )
                          ) : v.discount_pct != null && (
                            <span style={{ color: v.discount_pct > 0 ? "var(--accent-green)" : "var(--accent-red)" }}>
                              ({v.discount_pct > 0 ? "+" : ""}{v.discount_pct.toFixed(0)}% vs price)
                            </span>
                          )}
                        </span>
                      </div>
                      <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                        {v.confidence ? `${v.confidence} confidence` : ""}
                        {v.discount_rate != null ? ` · ${(v.discount_rate * 100).toFixed(0)}% discount rate` : ""}
                        {v.stage1_growth != null ? ` · ${(v.stage1_growth * 100).toFixed(1)}% growth` : ""}
                        {v.pooled_delta_e != null ? ` · ΔE ${(v.pooled_delta_e * 100).toFixed(0)}%` : ""}
                        {v.rho != null ? ` · SBC cost ${(v.rho * 100).toFixed(0)}% of FCF` : ""}
                      </div>
                      {v.notes && v.notes.length > 0 && (
                        <ul className="text-xs mt-1 list-disc pl-4" style={{ color: "var(--text-muted)" }}>
                          {v.notes.map((n, i) => <li key={i}>{n}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
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
  value_discount_pct: number | null;
  combined_rank: number;
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

// A fair-value discount: positive = trading below fair value. Fair value and basis go in the tooltip.
function discountCell(pct: number | null, conf: string | null, fairValue: number | null, label: string) {
  if (pct === null || pct === undefined) return <span style={{ color: "var(--text-muted)" }}>—</span>;
  const low = conf === "low";
  const color = low ? "var(--text-muted)" : pct > 0 ? "var(--accent-green)" : "var(--accent-red)";
  return (
    <span style={{ color }} title={`${label}${fairValue != null ? `: fair value ${fmtPrice(fairValue)}` : ""}${conf ? ` (${conf} confidence${low ? ", not used in ranking" : ""})` : ""}`}>
      {pct > 0 ? "+" : ""}{pct.toFixed(0)}%{low ? "*" : ""}
    </span>
  );
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
  const [undervaluedOnly, setUndervaluedOnly] = useState(false);
  // Crypto never appears in the Screener/Convergence tabs by design (no
  // fundamentals data — same mechanism that already excludes Financials/
  // Utilities/REITs from the Magic Formula), so this only affects the Full
  // Watchlist tab. Defaults to equities per the Phase 2 spec.
  const [assetClass, setAssetClass] = useState<"equity" | "crypto">("equity");
  const [researchTarget, setResearchTarget] = useState<{ ticker: string; exchange: string } | null>(null);

  const [uSortField, setUSortField] = useState<keyof UniverseRow>("ticker");
  const [uSortDir, setUSortDir] = useState<"asc" | "desc">("asc");
  const [sSortField, setSSortField] = useState<keyof RankedScreenerRow>("mf_rank");
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

  const rankedScreener = useMemo(() => rankScreener(screener), [screener]);

  const filteredScreener = useMemo(() => {
    let rows = rankedScreener;
    if (search.trim()) {
      const q = search.trim().toUpperCase();
      rows = rows.filter((r) => r.ticker.includes(q) || (r.sector ?? "").toUpperCase().includes(q));
    }
    if (indexFilter !== "ALL") {
      rows = rows.filter((r) => r.index_membership.split(",").includes(indexFilter));
    }
    if (passOnly) rows = rows.filter((r) => r.passes_thresholds === 1);
    if (undervaluedOnly) rows = rows.filter((r) => (r.value_discount_pct ?? -1) > 0);
    return sortRows(rows, sSortField, sSortDir);
  }, [rankedScreener, search, indexFilter, passOnly, undervaluedOnly, sSortField, sSortDir]);

  // Convergence: Magic Formula passes AND technical rating is "Buy" — the
  // intersection of the value screen and the momentum/trend read, joined on
  // (ticker, exchange) since the same ticker can appear under more than one
  // exchange row (e.g. dual-listed names).
  const convergenceRows: ConvergenceRow[] = useMemo(() => {
    const uByKey = new Map(universe.map((r) => [`${r.ticker}-${r.exchange}`, r]));
    const rows: ConvergenceRow[] = [];
    for (const s of rankedScreener) {
      if (s.passes_thresholds !== 1) continue;
      const u = uByKey.get(`${s.ticker}-${s.exchange}`);
      if (!u || u.technical_rating !== "Buy") continue;
      rows.push({
        ticker: s.ticker, exchange: s.exchange, sector: s.sector, index_membership: s.index_membership,
        mf_rank: s.mf_rank, earnings_yield: s.earnings_yield, roic: s.roic,
        close: u.close, pct_1d: u.pct_1d, rsi14: u.rsi14, macd_signal: u.macd_signal,
        technical_rating: u.technical_rating, currency: u.currency,
        value_discount_pct: s.value_discount_pct, combined_rank: s.combined_rank,
      });
    }
    return rows;
  }, [rankedScreener, universe]);

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
  function handleSSort(field: keyof RankedScreenerRow) {
    if (field === sSortField) setSSortDir(sSortDir === "asc" ? "desc" : "asc");
    else { setSSortField(field); setSSortDir(field === "mf_rank" || field === "value_rank" || field === "combined_rank" ? "asc" : "desc"); }
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
        {tab === "screener" && (
          <label className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-secondary)" }}
            title="Fair value above price on the SBC-adjusted DCF (plain DCF where no SBC-adjusted figure exists); low-confidence valuations excluded">
            <input type="checkbox" checked={undervaluedOnly} onChange={(e) => setUndervaluedOnly(e.target.checked)} />
            Below fair value only
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
                  <td className="px-3 py-2"><InvestorBadges labels={r.investor_labels} /></td>
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
                <SortHeader label="DCF disc." field="dcf_discount_pct" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="SBC-adj disc." field="dcf_sbc_discount_pct" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="ΔE" field="sbc_delta_e" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="Value #" field="value_rank" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
                <SortHeader label="Combined #" field="combined_rank" sortField={sSortField} sortDir={sSortDir} onSort={handleSSort} />
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
                  <td className="px-3 py-2">{discountCell(r.dcf_discount_pct, r.dcf_confidence, r.dcf_fair_value, "DCF")}</td>
                  <td className="px-3 py-2">{discountCell(r.dcf_sbc_discount_pct, r.dcf_sbc_confidence, r.dcf_sbc_fair_value, "SBC-adjusted DCF")}</td>
                  <td className="px-3 py-2" style={{ color: "var(--text-secondary)" }}
                    title="Burry's ΔE: share of GAAP earnings that really belongs to owners after the true cost of stock-based compensation (10-year pool)">
                    {r.sbc_delta_e != null ? `${(r.sbc_delta_e * 100).toFixed(0)}%` : "—"}
                  </td>
                  <td className="px-3 py-2 font-mono" style={{ color: "var(--text-secondary)" }}>{r.value_rank != null ? `#${r.value_rank}` : "—"}</td>
                  <td className="px-3 py-2 font-mono" style={{ color: "var(--text-primary)" }}
                    title={r.combined_has_value ? "Average of Magic Formula and value percentiles" : "No usable valuation: scored as median value"}>
                    #{r.combined_rank}{!r.combined_has_value && <span style={{ color: "var(--text-muted)" }}>·</span>}
                  </td>
                  <td className="px-3 py-2">
                    {r.passes_thresholds ? <span className="badge-green">Pass</span> : <span style={{ color: "var(--text-muted)" }}>—</span>}
                  </td>
                  <td className="px-3 py-2">
                    {r.signal_source ? <SourceSignalBadge source={r.signal_source} /> : <span style={{ color: "var(--text-muted)" }}>—</span>}
                  </td>
                  <td className="px-3 py-2"><InvestorBadges labels={r.investor_labels} /></td>
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
                <SortHeader label="Value disc." field="value_discount_pct" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
                <SortHeader label="Combined #" field="combined_rank" sortField={cSortField} sortDir={cSortDir} onSort={handleCSort} />
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
                  <td className="px-3 py-2">{discountCell(r.value_discount_pct, null, null, "Fair-value discount")}</td>
                  <td className="px-3 py-2 font-mono" style={{ color: "var(--text-primary)" }}>#{r.combined_rank}</td>
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
