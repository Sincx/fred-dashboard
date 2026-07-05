"use client";

import { useEffect, useState } from "react";
import { Clock, ChevronDown, ChevronRight, Loader2 } from "lucide-react";

interface PickDetail {
  ticker: string;
  strategy: string;
  entry: number;
  stop: number;
  t1: number;
  t2?: number;
}

interface TaskRun {
  runAt: string;
  summary: string;
  content: string;
  picks?: {
    p1?: PickDetail;
    p2?: PickDetail;
  };
}

interface TaskOutput {
  taskId: string;
  label: string;
  schedule: string;
  icon: string;
  runs: TaskRun[];
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const h = Math.floor(diff / 3_600_000);
  const d = Math.floor(h / 24);
  if (h < 1) return "just now";
  if (h < 24) return `${h}h ago`;
  if (d === 1) return "yesterday";
  return `${d}d ago`;
}

function statusDot(runs: TaskRun[]) {
  if (!runs.length) return "var(--text-muted)";
  const h = (Date.now() - new Date(runs[0].runAt).getTime()) / 3_600_000;
  if (h < 30) return "#4ade80";
  if (h < 168) return "#f59e0b";
  return "var(--text-muted)";
}

function RunContent({ run }: { run: TaskRun }) {
  return (
    <div
      className="rounded p-3 mt-2"
      style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border)" }}
    >
      <p className="text-xs mb-2" style={{ color: "var(--text-muted)" }}>
        {new Date(run.runAt).toLocaleString()} &mdash; {run.summary}
      </p>
      <pre
        className="text-xs whitespace-pre-wrap leading-relaxed"
        style={{ color: "var(--text-secondary)", fontFamily: "inherit" }}
      >
        {run.content}
      </pre>
    </div>
  );
}

function PickCard({ label, pick }: { label: string; pick: PickDetail }) {
  return (
    <div className="rounded p-3" style={{ backgroundColor: "var(--bg-tertiary)" }}>
      <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>
        {label}
      </p>
      <p className="text-xl font-bold mb-0.5" style={{ color: "var(--accent)" }}>
        {pick.ticker}
      </p>
      <p className="text-xs mb-2" style={{ color: "var(--text-secondary)" }}>
        {pick.strategy}
      </p>
      <div className="grid grid-cols-3 gap-1 text-xs">
        <div>
          <span style={{ color: "var(--text-muted)" }}>Entry</span>
          <br />
          <span style={{ color: "var(--text-primary)" }}>${pick.entry}</span>
        </div>
        <div>
          <span style={{ color: "var(--text-muted)" }}>Stop</span>
          <br />
          <span style={{ color: "#f87171" }}>${pick.stop}</span>
        </div>
        <div>
          <span style={{ color: "var(--text-muted)" }}>T1</span>
          <br />
          <span style={{ color: "#4ade80" }}>${pick.t1}</span>
        </div>
      </div>
    </div>
  );
}

function PaperTraderCard({ task }: { task: TaskOutput }) {
  const [open, setOpen] = useState(false);
  const latest = task.runs[0];

  return (
    <div
      className="card mb-4"
      style={{ border: "1px solid rgba(99,102,241,0.4)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{task.icon}</span>
          <div>
            <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
              {task.label}
            </h3>
            <div className="flex items-center gap-1.5">
              <Clock size={11} style={{ color: "var(--text-muted)" }} />
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                {task.schedule}
              </span>
              {latest && (
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  &middot; {timeAgo(latest.runAt)}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: statusDot(task.runs) }} />
          {task.runs.length > 0 && (
            <button
              onClick={() => setOpen(!open)}
              className="text-xs"
              style={{ color: "var(--accent)" }}
            >
              {open ? "Hide" : "Details"}
            </button>
          )}
        </div>
      </div>

      {!latest ? (
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          Awaiting first run
        </p>
      ) : latest.picks ? (
        <div className="grid grid-cols-2 gap-3">
          {latest.picks.p1 && <PickCard label="P1 — Strategy Pick" pick={latest.picks.p1} />}
          {latest.picks.p2 && <PickCard label="P2 — Vol Spike" pick={latest.picks.p2} />}
          {!latest.picks.p1 && !latest.picks.p2 && (
            <p className="text-xs col-span-2" style={{ color: "var(--text-muted)" }}>
              {latest.summary}
            </p>
          )}
        </div>
      ) : (
        <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
          {latest.summary}
        </p>
      )}

      {open && task.runs.map((run, i) => <RunContent key={i} run={run} />)}
    </div>
  );
}

function TaskCard({ task }: { task: TaskOutput }) {
  const [open, setOpen] = useState(false);
  const latest = task.runs[0];
  const canExpand = task.runs.length > 0;

  return (
    <div className="card">
      <button
        className="w-full flex items-center justify-between gap-3"
        onClick={() => canExpand && setOpen(!open)}
        style={{ cursor: canExpand ? "pointer" : "default" }}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span className="text-base flex-shrink-0">{task.icon}</span>
          <div className="flex-1 min-w-0 text-left">
            <p className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>
              {task.label}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                <Clock size={11} style={{ color: "var(--text-muted)" }} />
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {task.schedule}
                </span>
              </div>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                &middot; {latest ? timeAgo(latest.runAt) : "Never run"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: statusDot(task.runs) }} />
          {canExpand &&
            (open ? (
              <ChevronDown size={14} style={{ color: "var(--text-muted)" }} />
            ) : (
              <ChevronRight size={14} style={{ color: "var(--text-muted)" }} />
            ))}
        </div>
      </button>

      {open && task.runs.map((run, i) => <RunContent key={i} run={run} />)}
    </div>
  );
}

const TASK_ORDER = [
  "daily-paper-trader",
  "sector-performance-tracker",
  "growth-value-tracker",
  "podcast-recommender",
  "recipe-recommender",
  "podcast-summarizer",
  "book-recommender",
  "book-summarizer",
  "spinoff-monitor",
  "clippings-sorter",
  "wiki-memory-update",
];

export default function RoutinesPage() {
  const [outputs, setOutputs] = useState<TaskOutput[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/task-outputs")
      .then((r) => r.json())
      .then((data) => {
        setOutputs(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const sorted = [...outputs].sort((a, b) => {
    const ai = TASK_ORDER.indexOf(a.taskId);
    const bi = TASK_ORDER.indexOf(b.taskId);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  const paperTrader = sorted.find((t) => t.taskId === "daily-paper-trader");
  const others = sorted.filter((t) => t.taskId !== "daily-paper-trader");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
        Daily Routines
      </h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        {outputs.length} scheduled tasks &middot; outputs auto-sync via GitHub
      </p>

      {loading ? (
        <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <Loader2 size={16} className="animate-spin" /> Loading&hellip;
        </div>
      ) : (
        <>
          {paperTrader && <PaperTraderCard task={paperTrader} />}
          <div className="grid gap-3">
            {others.map((task) => (
              <TaskCard key={task.taskId} task={task} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
