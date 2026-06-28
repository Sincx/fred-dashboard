import { NextResponse } from "next/server";
import fs from "fs";
import os from "os";
import path from "path";

const OUTPUTS_DIR = path.join(os.tmpdir(), "fred-dashboard-outputs");

export async function GET() {
  try {
    if (!fs.existsSync(OUTPUTS_DIR)) return NextResponse.json([]);
    const files = fs.readdirSync(OUTPUTS_DIR)
      .filter((f) => f.endsWith(".json"))
      .sort()
      .reverse()
      .slice(0, 50);

    const outputs = files.map((f) => {
      try {
        return JSON.parse(fs.readFileSync(path.join(OUTPUTS_DIR, f), "utf-8"));
      } catch {
        return null;
      }
    }).filter(Boolean);

    return NextResponse.json(outputs);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!fs.existsSync(OUTPUTS_DIR)) fs.mkdirSync(OUTPUTS_DIR, { recursive: true });
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const file = path.join(OUTPUTS_DIR, `${body.taskId}-${timestamp}.json`);
    fs.writeFileSync(file, JSON.stringify(body));
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
