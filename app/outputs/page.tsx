"use client";

import { useEffect, useState, useCallback } from "react";
import { RefreshCw, FileText, ChevronDown, ChevronRight, Trash2 } from "lucide-react";
import { type StoredOutput, loadOutputs, clearOutputs } from "@/lib/outputs";

function timeAgo(iso: string): string {
  try {
    const diff = Date.now() - new Date(iso).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return "just now";
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  } catch { return iso; }
}

export default function OutputsPage() {
  const [outputs, setOutputs] = useState<StoredOutput[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);

  const load = useCallback(() => {
    setOutputs(loadOutputs());
  }, []);

  useEffect(() => { load(); }, [load]);

  function handleClear() {
    clearOutputs();
    setOutputs([]);
    setExpanded(null);
  }

  function removeOne(id: string) {
    const updated = outputs.filter((o) => o.id !== id);
    localStorage.setItem(OUTPUTS_KEY, JSON.stringify(updated));
    setOutputs(updated);
    if (expanded === id) setExpanded(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Outputs</h1>
        <div className="flex gap-2">
          <button className="btn-ghost flex items-center gap-1.5" onClick={load}>
            <RefreshCw size={13} /> Refresh
          </button>
          {outputs.length > 0 && (
            <button className="btn-ghost flex items-center gap-1.5" onClick={handleClear}
              style={{ color: "var(--accent-red)", borderColor: "rgba(239,68,68,0.3)" }}>
              <Trash2 size={13} /> Clear all
            </button>
          )}
        </div>
      </div>
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        Results from routine runs, analyst tasks, and analyst triggers · {outputs.length} saved
      </p>

      {outputs.length === 0 ? (
        <div className="card flex flex-col items-center py-12 text-center">
          <FileText size={32} className="mb-3" style={{ color: "var(--text-muted)" }} />
          <p className="font-medium mb-1" style={{ color: "var(--text-secondary)" }}>No outputs yet</p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Run a routine or analyst task to see output here.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {outputs.map((o) => (
            <div key={o.id} className="card">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setExpanded(e => e === o.id ? null : o.id)}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {expanded === o.id ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <span className="font-medium text-sm truncate" style={{ color: "var(--text-primary)" }}>{o.title}</span>
                    {o.success
                      ? <span className="badge-green flex-shrink-0">Done</span>
                      : <span className="badge-red flex-shrink-0">Error</span>}
                  </div>
                  <p className="text-xs ml-5 mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {timeAgo(o.runAt)} · <span className="font-mono">{o.taskId}</span>
                  </p>
                </div>
                <button
                  className="flex-shrink-0 p-1 rounded opacity-40 hover:opacity-100 transition-opacity"
                  style={{ color: "var(--accent-red)" }}
                  onClick={(e) => { e.stopPropagation(); removeOne(o.id); }}
                  title="Remove"
                >
                  <Trash2 size={13} />
                </button>
              </div>

              {expanded === o.id && (
                <div className="mt-3 rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
                  <pre className="text-xs font-mono whitespace-pre-wrap break-words"
                    style={{ color: "var(--text-secondary)", maxHeight: "500px", overflowY: "auto" }}>
                    {o.output}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
