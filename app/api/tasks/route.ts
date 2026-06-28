import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const TASKS_DIR = "C:\\Users\\Mike\\.claude\\scheduled-tasks";

export interface Task {
  id: string;
  description: string;
  schedule: string;
  enabled: boolean;
  skill?: string;
}

export async function GET() {
  try {
    const entries = fs.readdirSync(TASKS_DIR, { withFileTypes: true });
    const tasks: Task[] = [];

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;
      const skillPath = path.join(TASKS_DIR, entry.name, "SKILL.md");
      let description = entry.name;
      let schedule = "";
      let skill = "";

      if (fs.existsSync(skillPath)) {
        const raw = fs.readFileSync(skillPath, "utf-8");
        const descMatch = raw.match(/^#\s+(.+)/m);
        const schedMatch = raw.match(/schedule[:\s]+(.+)/i);
        if (descMatch) description = descMatch[1].trim();
        if (schedMatch) schedule = schedMatch[1].trim();
        skill = raw.slice(0, 500);
      }

      tasks.push({ id: entry.name, description, schedule, enabled: true, skill });
    }

    return NextResponse.json(tasks);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
