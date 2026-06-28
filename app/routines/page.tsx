"use client";

import { useEffect, useState } from "react";
import { Play, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface Task {
  id: string;
  description: string;
  schedule: string;
  enabled: boolean;
}

type RunState = "idle" | "running" | "done" | "error";

const SCHEDULE_LABELS: Record<string, string> = {
  "wiki-memory-update": "Daily 9:53 PM",
  "clippings-sorter": "Daily 11:18 PM",
  "daily-paper-trader": "Weekdays 8:06 PM",
  "portfolio-refresh": "Sat 2:09 PM",
  "podcast-summarizer": "Sat 10:02 AM",
  "podcast-recommender": "Thu 10:02 AM",
  "growth-value-tracker": "Mon 9:02 AM",
  "sector-performance-tracker": "Mon 9:01 AM",
  "recipe-recommender": "Fri 9:04 AM",
  "book-summarizer": "1st of month",
  "book-recommender": "15th of month",
  "spinoff-monitor": "1st of month",
};

export default function RoutinesPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [states, setStates] = useState<Record<string, RunState>>({});
  const [outputs, setOutputs] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/tasks")
      .then((r) => r.json())
      .then((data) => { setTasks(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  async function runTask(id: string) {
    setStates((s) => ({ ...s, [id]: "running" }));
    setOutputs((o) => ({ ...o, [id]: "" }));
    try {
      const res = await fetch(`/api/tasks/${id}/run`, { method: "POST" });
      const data = await res.json();
      setOutputs((o) => ({ ...o, [id]: data.output ?? data.error ?? "" }));
      setStates((s) => ({ ...s, [id]: res.ok ? "done" : "error" }));
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
        {tasks.length} scheduled tasks · click Run to trigger on demand
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
                        {SCHEDULE_LABELS[task.id] ?? task.schedule ?? "—"}
                      </span>
                      <span className="text-xs px-1.5" style={{ color: "var(--text-muted)" }}>·</span>
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
                    {state === "error" ? (
                      <div className="flex items-center gap-1.5 mb-1">
                        <AlertCircle size={12} /><span className="font-medium">Error</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 mb-1">
                        <CheckCircle size={12} style={{ color: "var(--accent-green)" }} />
                        <span style={{ color: "var(--accent-green)" }}>Completed</span>
                      </div>
                    )}
                    <pre className="whitespace-pre-wrap break-words">{outputs[task.id].slice(0, 800)}{outputs[task.id].length > 800 ? "\n…(truncated)" : ""}</pre>
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
