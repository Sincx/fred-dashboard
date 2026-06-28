import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data", "portfolios");

export async function GET() {
  const result: Record<string, string> = {};
  for (const [key, file] of [["p1", "p1.md"], ["p2", "p2.md"], ["equity", "equity.md"]] as const) {
    try {
      result[key] = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
    } catch {
      result[key] = `Error reading ${file}`;
    }
  }
  return NextResponse.json(result);
}
