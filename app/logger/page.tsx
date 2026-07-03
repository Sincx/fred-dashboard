"use client";

import { useState, useEffect } from "react";
import { Copy, Check, Trash2, BookOpen, Headphones } from "lucide-react";

type LogType = "book" | "podcast";

interface LogEntry {
  id: string;
  type: LogType;
  title: string;
  author?: string;
  host?: string;
  genre: string;
  tags: string;
  notes: string;
  date: string;
}

const BOOK_GENRES = ["Non-fiction","Fiction","Memoir","Business","Psychology","Science","Biography","History","Investing","Technology","Sci-Fi","Other"];
const POD_GENRES  = ["Long-form interview","Storytelling","Educational","News","Investigative","Debate","Solo monologue","Roundtable"];

const STORAGE_KEY = "fred_log_queue";

function loadQueue(): LogEntry[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; }
}
function saveQueue(items: LogEntry[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function makeCommand(e: LogEntry): string {
  if (e.type === "book") {
    const parts = [e.title, e.author, e.genre, e.tags, e.notes].filter(Boolean).join(" · ");
    return `/add-book ${parts}`;
  }
  const parts = [e.title, e.host, e.genre, e.tags, e.notes].filter(Boolean).join(" · ");
  return `/add-podcast ${parts}`;
}

function CopyBtn({ text, small = false }: { text: string; small?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); }); }}
      className={small ? "btn-ghost flex items-center gap-1 text-xs px-2 py-1" : "btn-ghost flex items-center gap-1.5 text-sm"}
      style={{
        minHeight: "auto",
        ...(copied ? { color: "var(--accent-green)", borderColor: "rgba(16,185,129,0.4)" } : {}),
      }}>
      {copied ? <><Check size={12} /> Copied</> : <><Copy size={12} /> {small ? "" : "Copy command"}</>}
    </button>
  );
}

function BookForm({ onAdd }: { onAdd: (e: LogEntry) => void }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Non-fiction");
  const [tags, setTags] = useState("");
  const [notes, setNotes] = useState("");

  const entry: LogEntry = { id: "", type: "book", title, author, genre, tags, notes, date: new Date().toISOString().slice(0, 10) };
  const cmd = title.trim() ? makeCommand(entry) : "";

  function handleSave() {
    if (!title.trim()) return;
    onAdd({ ...entry, id: `book-${Date.now()}` });
    setTitle(""); setAuthor(""); setTags(""); setNotes("");
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Title *</span>
          <input className="input-field" placeholder="e.g. The Big Short" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Author</span>
          <input className="input-field" placeholder="e.g. Michael Lewis" value={author} onChange={e => setAuthor(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Genre</span>
          <select className="input-field" value={genre} onChange={e => setGenre(e.target.value)}>
            {BOOK_GENRES.map(g => <option key={g}>{g}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Tags</span>
          <input className="input-field" placeholder="e.g. finance, crisis" value={tags} onChange={e => setTags(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1 col-span-2">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Notes (optional)</span>
          <input className="input-field" placeholder="Personal notes or rating…" value={notes} onChange={e => setNotes(e.target.value)} />
        </label>
      </div>

      {cmd && (
        <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg overflow-x-auto"
          style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border)" }}>
          <code className="text-xs font-mono flex-1 truncate" style={{ color: "var(--accent)" }}>{cmd}</code>
          <CopyBtn text={cmd} />
        </div>
      )}

      <div className="flex items-center gap-3">
        <button className="btn-primary" onClick={handleSave} disabled={!title.trim()}>Save to queue</button>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          Saves here · paste command into Claude Code to add to wiki
        </span>
      </div>
    </div>
  );
}

function PodcastForm({ onAdd }: { onAdd: (e: LogEntry) => void }) {
  const [title, setTitle] = useState("");
  const [host, setHost] = useState("");
  const [genre, setGenre] = useState("Long-form interview");
  const [tags, setTags] = useState("");
  const [notes, setNotes] = useState("");

  const entry: LogEntry = { id: "", type: "podcast", title, host, genre, tags, notes, date: new Date().toISOString().slice(0, 10) };
  const cmd = title.trim() ? makeCommand(entry) : "";

  function handleSave() {
    if (!title.trim()) return;
    onAdd({ ...entry, id: `pod-${Date.now()}` });
    setTitle(""); setHost(""); setTags(""); setNotes("");
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Podcast / Episode *</span>
          <input className="input-field" placeholder="e.g. Acquired — Berkshire Hathaway" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Host(s)</span>
          <input className="input-field" placeholder="e.g. Ben Gilbert, David Rosenthal" value={host} onChange={e => setHost(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Genre</span>
          <select className="input-field" value={genre} onChange={e => setGenre(e.target.value)}>
            {POD_GENRES.map(g => <option key={g}>{g}</option>)}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Tags</span>
          <input className="input-field" placeholder="e.g. investing, long-form" value={tags} onChange={e => setTags(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1 col-span-2">
          <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>Notes (optional)</span>
          <input className="input-field" placeholder="Episode notes or key takeaways…" value={notes} onChange={e => setNotes(e.target.value)} />
        </label>
      </div>

      {cmd && (
        <div className="flex items-center gap-2 mb-3 px-3 py-2 rounded-lg overflow-x-auto"
          style={{ backgroundColor: "var(--bg-tertiary)", border: "1px solid var(--border)" }}>
          <code className="text-xs font-mono flex-1 truncate" style={{ color: "var(--accent)" }}>{cmd}</code>
          <CopyBtn text={cmd} />
        </div>
      )}

      <div className="flex items-center gap-3">
        <button className="btn-primary" onClick={handleSave} disabled={!title.trim()}>Save to queue</button>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
          Saves here · paste command into Claude Code to add to wiki
        </span>
      </div>
    </div>
  );
}

export default function LoggerPage() {
  const [tab, setTab] = useState<LogType>("book");
  const [queue, setQueue] = useState<LogEntry[]>([]);

  useEffect(() => { setQueue(loadQueue()); }, []);

  function addEntry(e: LogEntry) {
    const updated = [e, ...queue];
    setQueue(updated);
    saveQueue(updated);
  }

  function removeEntry(id: string) {
    const updated = queue.filter(e => e.id !== id);
    setQueue(updated);
    saveQueue(updated);
  }

  const books = queue.filter(e => e.type === "book");
  const pods  = queue.filter(e => e.type === "podcast");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>Logger</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
        Log books read and podcasts listened to · queue is saved in browser · copy commands for Claude Code
      </p>

      {/* ── Toggle ── */}
      <div className="flex gap-1 mb-5 p-1 rounded-lg w-fit" style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
        {([["book", "Book read", BookOpen], ["podcast", "Podcast listened", Headphones]] as const).map(([id, label, Icon]) => (
          <button key={id} onClick={() => setTab(id)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all"
            style={{
              backgroundColor: tab === id ? "var(--accent)" : "transparent",
              color: tab === id ? "white" : "var(--text-secondary)",
            }}>
            <Icon size={14} /> {label}
          </button>
        ))}
      </div>

      {/* ── Form ── */}
      <div className="card mb-5">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--text-primary)" }}>
          {tab === "book" ? "Add a book" : "Add a podcast"}
        </p>
        {tab === "book" ? <BookForm onAdd={addEntry} /> : <PodcastForm onAdd={addEntry} />}
      </div>

      {/* ── Queue ── */}
      <div className="card">
        <p className="text-sm font-medium mb-3" style={{ color: "var(--text-primary)" }}>
          Queue · {tab === "book" ? books.length : pods.length} {tab === "book" ? "book" : "podcast"}{(tab === "book" ? books.length : pods.length) !== 1 ? "s" : ""}
        </p>

        {(tab === "book" ? books : pods).length === 0 ? (
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Nothing in queue yet. Add one above.
          </p>
        ) : (
          <div className="flex flex-col gap-2">
            {(tab === "book" ? books : pods).map(e => (
              <div key={e.id} className="flex items-start gap-3 py-2 border-b last:border-0" style={{ borderColor: "var(--border)" }}>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate" style={{ color: "var(--text-primary)" }}>{e.title}</p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {e.author || e.host || "—"} · {e.genre} · {e.date}
                  </p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <CopyBtn text={makeCommand(e)} small />
                  <button className="p-1 rounded opacity-40 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--accent-red)" }}
                    onClick={() => removeEntry(e.id)}>
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs mt-4" style={{ color: "var(--text-muted)" }}>
        Queue is saved in browser localStorage. Copy the command and paste into Claude Code to write it to your wiki.
      </p>
    </div>
  );
}
