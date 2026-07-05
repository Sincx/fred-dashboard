import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface Task {
  id: string;
  description: string;
  prompt: string;
}

const TASKS_FILE = path.join(process.cwd(), "data", "tasks.json");

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
  "wiki-thinker": "Daily 12:17 PM",
  "daily-paper-trader-vol": "Weekdays 8:06 PM",
};

export async function GET() {
  try {
    const raw = fs.readFileSync(TASKS_FILE, "utf-8");
    const tasks: Task[] = JSON.parse(raw);
    const enriched = tasks.map((t) => ({ ...t, schedule: SCHEDULE_LABELS[t.id] ?? "" }));
    return NextResponse.json(enriched);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
