"use client";

import { useEffect, useState } from "react";
import { Play, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface Task {
  id: string;
  description: string;
  schedule: string;
}

type RunState = "idle" | "running" | "done" | "error";

export default function RoutinesPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [states, setStates] = useState<Record<string, RunState>>({});
  const [outputs, setOutputs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/tasks")
      .then((r) => r.json())
      .then((data) => { setTasks(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  async function runTask(id: string) {
    setStates((s) => ({ ...s, [id]: "running" }));
    setOutputs((o) => ({ ...o, [id]: "" }));
    try {
      const res = await fetch(`/api/tasks/${id}/run`, { method: "POST" });
      const data = await res.json();
      const output = data.output ?? data.error ?? "";
      setOutputs((o) => ({ ...o, [id]: output }));
      setStates((s) => ({ ...s, [id]: res.ok && data.success ? "done" : "error" }));
      // Save to outputs store
      if (data.runAt) {
        fetch("/api/outputs", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ taskId: id, output, runAt: data.runAt, success: data.success }),
        }).catch(() => {});
      }
    } catch (err) {
      setOutputs((o) => ({ ...o, [id]: String(err) }));
      setStates((s) => ({ ...s, [id]: "error" }));
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
        Daily Routines
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        {tasks.length} scheduled tasks · click Run to trigger on demand via Claude API
      </p>

      {loading ? (
        <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <Loader2 size={16} className="animate-spin" /> Loading tasks…
        </div>
      ) : (
        <div className="grid gap-3">
          {tasks.map((task) => {
            const state = states[task.id] ?? "idle";
            return (
              <div key={task.id} className="card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>
                        {task.description || task.id}
                      </span>
                      {state === "done" && <span className="badge-green">Done</span>}
                      {state === "error" && <span className="badge-red">Error</span>}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Clock size={12} style={{ color: "var(--text-muted)" }} />
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {task.schedule || "—"}
                      </span>
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>·</span>
                      <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{task.id}</span>
                    </div>
                  </div>

                  <button
                    className="btn-primary flex items-center gap-1.5 flex-shrink-0"
                    onClick={() => runTask(task.id)}
                    disabled={state === "running"}
                    aria-label={`Run ${task.id}`}
                  >
                    {state === "running" ? (
                      <><Loader2 size={13} className="animate-spin" /> Running…</>
                    ) : (
                      <><Play size={13} /> Run</>
                    )}
                  </button>
                </div>

                {outputs[task.id] && (
                  <div className="mt-3 rounded-lg p-3 text-xs font-mono overflow-x-auto"
                    style={{ backgroundColor: "var(--bg-tertiary)", color: state === "error" ? "var(--accent-red)" : "var(--text-secondary)" }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      {state === "error"
                        ? <><AlertCircle size={12} /><span className="font-medium">Error</span></>
                        : <><CheckCircle size={12} style={{ color: "var(--accent-green)" }} /><span style={{ color: "var(--accent-green)" }}>Completed — see Outputs tab for full result</span></>
                      }
                    </div>
                    <pre className="whitespace-pre-wrap break-words">{outputs[task.id].slice(0, 600)}{outputs[task.id].length > 600 ? "\n…(see Outputs tab)" : ""}</pre>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
