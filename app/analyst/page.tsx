"use client";

import { useState } from "react";
import { Play, Copy, Check, Loader2, TrendingUp, BarChart2 } from "lucide-react";
import { saveOutput } from "../routines/page";

const EQUITY_TICKERS = [
  "GOOGL","AMZN","MSFT","WDAY","MSTR","BRK.B","TER","NGLOY","GLNCY",
  "ASML","CHIP","AVGO","CEG","CRWD","NOW","IBM","GAW","IQV","PEP",
];

type Mode = "ta" | "ea";

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }
  return (
    <button onClick={handleCopy}
      className="btn-ghost flex items-center gap-1.5 text-xs px-3 py-1.5"
      style={{ minHeight: "auto", ...(copied ? { color: "var(--accent-green)", borderColor: "rgba(16,185,129,0.4)" } : {}) }}>
      {copied ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy</>}
    </button>
  );
}

export default function AnalystPage() {
  const [ticker, setTicker] = useState("");
  const [mode, setMode] = useState<Mode>("ta");
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [runningPortfolio, setRunningPortfolio] = useState(false);

  async function runAnalysis(opts: { ticker?: string; portfolio?: boolean }) {
    const isPortfolio = !!opts.portfolio;
    if (isPortfolio) setRunningPortfolio(true); else setRunning(true);
    setOutput(null);
    setError(null);

    try {
      const res = await fetch("/api/analyst", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ticker: opts.ticker, mode, portfolio: opts.portfolio }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.error ?? "Analysis failed");

      setOutput(data.output);
      saveOutput({ taskId: `analyst-${mode}`, title: data.title, output: data.output, runAt: data.runAt, success: true });
    } catch (err) {
      const msg = String(err);
      setError(msg);
      saveOutput({ taskId: `analyst-${mode}`, title: `Error: ${opts.ticker ?? "portfolio"}`, output: msg, runAt: new Date().toISOString(), success: false });
    } finally {
      setRunning(false);
      setRunningPortfolio(false);
    }
  }

  const canRun = ticker.trim().length > 0;
  const modeLabel = mode === "ta" ? "Technical" : "Fundamental";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>Analyst</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        Run technical or fundamental analysis via Claude API · results saved to Outputs
      </p>

      {/* ── Controls ── */}
      <div className="card mb-4">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setMode("ta")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: mode === "ta" ? "var(--accent)" : "var(--bg-tertiary)",
              color: mode === "ta" ? "white" : "var(--text-secondary)",
              border: "1px solid",
              borderColor: mode === "ta" ? "var(--accent)" : "var(--border)",
            }}>
            <TrendingUp size={14} /> Technical Analysis
          </button>
          <button
            onClick={() => setMode("ea")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: mode === "ea" ? "var(--accent)" : "var(--bg-tertiary)",
              color: mode === "ea" ? "white" : "var(--text-secondary)",
              border: "1px solid",
              borderColor: mode === "ea" ? "var(--accent)" : "var(--border)",
            }}>
            <BarChart2 size={14} /> Fundamental / Equity
          </button>
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 px-3 py-2 rounded-lg text-sm"
            style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border)", color: "var(--text-primary)", outline: "none" }}
            placeholder="Enter ticker e.g. AAPL, NVDA, LHA.DE…"
            value={ticker}
            onChange={(e) => setTicker(e.target.value.toUpperCase())}
            onKeyDown={(e) => { if (e.key === "Enter" && canRun && !running) runAnalysis({ ticker: ticker.trim() }); }}
          />
          <button
            className="btn-primary flex items-center gap-1.5"
            onClick={() => runAnalysis({ ticker: ticker.trim() })}
            disabled={!canRun || running || runningPortfolio}
          >
            {running ? <><Loader2 size={13} className="animate-spin" /> Running…</> : <><Play size={13} /> Run {modeLabel}</>}
          </button>
        </div>

        <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
          Analysis uses Claude&apos;s training knowledge · prices may not be current · verify with your broker
        </p>
      </div>

      {/* ── Portfolio sweep ── */}
      <div className="card mb-6">
        <p className="text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>Equity Portfolio Sweep</p>
        <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
          Run {modeLabel} for all {EQUITY_TICKERS.length} equity holdings in sequence.
          This may take 1–2 minutes.
        </p>
        <div className="flex items-center gap-3 flex-wrap">
          <button
            className="btn-primary flex items-center gap-1.5"
            onClick={() => runAnalysis({ portfolio: true })}
            disabled={running || runningPortfolio}
          >
            {runningPortfolio
              ? <><Loader2 size={13} className="animate-spin" /> Analysing {EQUITY_TICKERS.length} stocks…</>
              : <><Play size={13} /> Run {modeLabel} — All {EQUITY_TICKERS.length} Holdings</>}
          </button>
          <div className="flex flex-wrap gap-1">
            {EQUITY_TICKERS.map((t) => (
              <span key={t} className="text-xs font-mono px-1.5 py-0.5 rounded"
                style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--text-muted)", border: "1px solid var(--border)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Output ── */}
      {error && (
        <div className="card" style={{ borderColor: "rgba(239,68,68,0.3)" }}>
          <p className="text-sm font-medium mb-1" style={{ color: "var(--accent-red)" }}>Error</p>
          <pre className="text-xs font-mono whitespace-pre-wrap" style={{ color: "var(--text-secondary)" }}>{error}</pre>
        </div>
      )}

      {output && (
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium" style={{ color: "var(--accent-green)" }}>
              ✓ Analysis complete — also saved to Outputs
            </p>
            <CopyBtn text={output} />
          </div>
          <pre className="text-xs font-mono whitespace-pre-wrap break-words"
            style={{ color: "var(--text-secondary)", maxHeight: "600px", overflowY: "auto" }}>
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
