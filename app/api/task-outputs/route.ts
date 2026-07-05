import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.join(process.cwd(), "data", "task-outputs");

export async function GET() {
  try {
    const files = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith(".json"));
    const outputs = files.map((f) => {
      const raw = fs.readFileSync(path.join(OUTPUT_DIR, f), "utf-8");
      return JSON.parse(raw);
    });
    return NextResponse.json(outputs);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
