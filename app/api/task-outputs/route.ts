import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const OUTPUT_DIR = path.join(process.cwd(), "data", "task-outputs");

// Found live 2026-10-08 — growth-value-tracker.json had been written with a
// UTF-8 BOM (a scheduled-task run almost certainly used a PowerShell
// Out-File/Set-Content with -Encoding utf8, which adds a BOM in this
// environment unlike plain UTF-8), and JSON.parse() rejects a leading BOM.
// One bad file threw inside the old single try/catch around the whole
// files.map(), so the entire route 500'd and the dashboard's Daily
// Routines page silently showed "0 scheduled tasks" — every task card
// below Pipeline Health disappeared, not just the one with the bad file.
// Fixed two ways: strip a leading BOM before parsing (the actual fix for
// this file), and isolate each file's parse in its own try/catch so a
// FUTURE malformed file only drops that one task card, never the whole list.
function stripBom(s: string): string {
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

export async function GET() {
  try {
    const files = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith(".json"));
    const outputs = [];
    for (const f of files) {
      try {
        const raw = fs.readFileSync(path.join(OUTPUT_DIR, f), "utf-8");
        outputs.push(JSON.parse(stripBom(raw)));
      } catch (err) {
        console.error(`task-outputs: skipping unparseable file ${f}:`, err);
      }
    }
    return NextResponse.json(outputs);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
