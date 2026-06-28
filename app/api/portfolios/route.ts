import { NextResponse } from "next/server";
import fs from "fs";

const WIKI = "C:\\Users\\Mike\\Documents\\Fred\\Fred\\wiki";

const FILES = {
  p1: `${WIKI}\\finance\\paper-trading\\Paper Trading Portfolio.md`,
  p2: `${WIKI}\\finance\\paper-trading-vol\\portfolio.md`,
  equity: `${WIKI}\\finance\\portfolio-overview.md`,
};

export async function GET() {
  const result: Record<string, string> = {};
  for (const [key, filePath] of Object.entries(FILES)) {
    try {
      result[key] = fs.readFileSync(filePath, "utf-8");
    } catch {
      result[key] = `Error reading ${filePath}`;
    }
  }
  return NextResponse.json(result);
}
