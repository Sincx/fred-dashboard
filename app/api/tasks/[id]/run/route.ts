import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import Anthropic from "@anthropic-ai/sdk";

const TASKS_FILE = path.join(process.cwd(), "data", "tasks.json");

interface Task {
  id: string;
  description: string;
  prompt: string;
}

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  let task: Task | undefined;
  try {
    const tasks: Task[] = JSON.parse(fs.readFileSync(TASKS_FILE, "utf-8"));
    task = tasks.find((t) => t.id === id);
  } catch (err) {
    return NextResponse.json({ error: `Failed to load tasks: ${err}` }, { status: 500 });
  }

  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY not set" }, { status: 500 });
  }

  try {
    const client = new Anthropic({ apiKey });
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 4096,
      messages: [{ role: "user", content: task.prompt }],
    });

    const output = message.content
      .filter((b) => b.type === "text")
      .map((b) => (b as { type: "text"; text: string }).text)
      .join("\n");

    return NextResponse.json({ success: true, output, taskId: id, runAt: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
