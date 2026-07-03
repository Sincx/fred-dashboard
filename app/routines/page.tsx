"use client";

import { useEffect, useState } from "react";
import { Clock, Copy, Check, Loader2 } from "lucide-react";

interface Task {
  id: string;
  description: string;
  schedule: string;
}

function CopyBtn({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  function handle() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }
  return (
    <button
      className="btn-primary flex items-center gap-1.5 flex-shrink-0"
      onClick={handle}
      style={copied ? { backgroundColor: "var(--accent-green)" } : {}}
    >
      {copied ? <><Check size={13} /> Copied!</> : <><Copy size={13} /> {label}</>}
    </button>
  );
}

export default function RoutinesPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/tasks")
      .then((r) => r.json())
      .then((data) => { setTasks(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
        Daily Routines
      </h1>
      <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
        {tasks.length} scheduled tasks
      </p>

      {/* Explanation banner */}
      <div className="rounded-lg px-4 py-3 mb-6 text-sm"
        style={{ backgroundColor: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.3)", color: "var(--text-secondary)" }}>
        <strong style={{ color: "var(--accent)" }}>How to run:</strong> These routines use Claude Code skills and need local wiki file access.
        Copy the command below and paste it into <strong style={{ color: "var(--text-primary)" }}>Claude Code</strong> (this app or the CLI) to execute.
      </div>

      {loading ? (
        <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <Loader2 size={16} className="animate-spin" /> Loading tasks…
        </div>
      ) : (
        <div className="grid gap-3">
          {tasks.map((task) => {
            const cmd = `/${task.id}`;
            return (
              <div key={task.id} className="card">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                      {task.description || task.id}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-1.5">
                        <Clock size={12} style={{ color: "var(--text-muted)" }} />
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {task.schedule || "On demand"}
                        </span>
                      </div>
                      <code className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{ backgroundColor: "var(--bg-tertiary)", color: "var(--accent)", border: "1px solid var(--border)" }}>
                        {cmd}
                      </code>
                    </div>
                  </div>
                  <CopyBtn text={cmd} label="Copy to Claude Code" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
