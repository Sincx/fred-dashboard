// Shared signal-badge styling — extracted from app/portfolios/page.tsx (Phase 2 P2.0c)
// so both the Portfolios (briefing action signals) and Watchlist (DB `signals.source`
// values) pages can render badges consistently.

const SIGNAL_STYLES: Record<string, { bg: string; color: string; label: string }> = {
  exit:  { bg: "rgba(239,68,68,0.15)",  color: "var(--accent-red)",   label: "Exit"  },
  trim:  { bg: "rgba(249,115,22,0.15)", color: "#f97316",              label: "Trim"  },
  add:   { bg: "rgba(16,185,129,0.15)", color: "var(--accent-green)",  label: "Add"   },
  hold:  { bg: "rgba(100,116,139,0.12)",color: "var(--text-muted)",    label: "Hold"  },
  watch: { bg: "rgba(96,165,250,0.15)", color: "#60a5fa",              label: "Watch" },
};

// Briefing action-signal badge (e.g. "🔴 Exit", "Watch") — free-text, substring-matched.
export function SignalBadge({ signal }: { signal: string }) {
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

// DB signals.source badge (e.g. "magic-formula-pass", "investor:burry") — used on the
// Watchlist/Screener tables' Signal column, sourced from v_latest_signal.
const SOURCE_STYLES: Record<string, { emoji: string; label: string; color: string }> = {
  "morningstar-undervalued": { emoji: "🔵", label: "Morningstar Undervalued", color: "#60a5fa" },
  "morningstar-dividend":    { emoji: "🔵", label: "Morningstar Dividend",    color: "#60a5fa" },
  "magic-formula-pass":      { emoji: "🟢", label: "Magic Formula Pass",      color: "var(--accent-green)" },
  "llm-research":            { emoji: "🟡", label: "LLM Research",           color: "#eab308" },
  "wiki-mention":            { emoji: "⚪", label: "Wiki Mention",            color: "var(--text-muted)" },
  "manual":                  { emoji: "⚪", label: "Manual",                  color: "var(--text-muted)" },
};

export function SourceSignalBadge({ source }: { source: string | null | undefined }) {
  if (!source) return null;
  const style = SOURCE_STYLES[source]
    ?? (source.startsWith("investor:")
      ? { emoji: "🟣", label: `${source.slice("investor:".length)} position`, color: "#a78bfa" }
      : { emoji: "⚪", label: source, color: "var(--text-muted)" });
  return (
    <span className="px-2 py-0.5 rounded text-xs font-semibold whitespace-nowrap"
      style={{ backgroundColor: "rgba(100,116,139,0.12)", color: style.color }}>
      {style.emoji} {style.label}
    </span>
  );
}
