"use client";

import { useEffect, useState, useCallback } from "react";
import { Loader2, RefreshCw, FileText, ChevronDown, ChevronRight } from "lucide-react";

interface Output {
  file: string;
  title: string;
  runAt: string;
  content: string;
}

function timeAgo(iso: string): string {
  try {
    const diff = Date.now() - new Date(iso).getTime();
    const m = Math.floor(diff / 60000);
    if (m < 1) return "just now";
    if (m < 60) return `${m}m ago`;
    const h = Math.floor(m / 60);
    if (h < 24) return `${h}h ago`;
    return `${Math.floor(h / 24)}d ago`;
  } catch {
    return iso;
  }
}

export default function OutputsPage() {
  const [outputs, setOutputs] = useState<Output[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  const load = useCallback(() => {
    setLoading(true);
    fetch("/api/outputs")
      .then((r) => r.json())
      .then((d) => { setOutputs(Array.isArray(d) ? d : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => { load(); }, [load]);

  function toggle(file: string) {
    setExpanded((e) => (e === file ? null : file));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>Routine Outputs</h1>
        <button className="btn-ghost flex items-center gap-1.5" onClick={load}>
          <RefreshCw size={13} /> Refresh
        </button>
      </div>
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        Results from on-demand task runs · {outputs.length} saved
      </p>

      {loading ? (
        <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <Loader2 size={16} className="animate-spin" /> Loading outputs…
        </div>
      ) : outputs.length === 0 ? (
        <div className="card flex flex-col items-center py-12 text-center">
          <FileText size={32} className="mb-3" style={{ color: "var(--text-muted)" }} />
          <p className="font-medium mb-1" style={{ color: "var(--text-secondary)" }}>No outputs yet</p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>Run a routine from the Daily Routines page to see output here.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {outputs.map((o) => (
            <div key={o.file} className="card cursor-pointer" onClick={() => toggle(o.file)}>
              <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {expanded === o.file ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                    <span className="font-medium text-sm truncate" style={{ color: "var(--text-primary)" }}>{o.title}</span>
                  </div>
                  <p className="text-xs ml-5 mt-0.5" style={{ color: "var(--text-muted)" }}>
                    {timeAgo(o.runAt)} · <span className="font-mono">{o.file}</span>
                  </p>
                </div>
              </div>

              {expanded === o.file && (
                <div className="mt-3 rounded-lg p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}
                  onClick={(e) => e.stopPropagation()}>
                  <pre className="text-xs font-mono whitespace-pre-wrap break-words"
                    style={{ color: "var(--text-secondary)", maxHeight: "400px", overflowY: "auto" }}>
                    {o.content}
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
