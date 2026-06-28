import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const OUTPUTS_DIR = "C:\\Users\\Mike\\fred-dashboard\\outputs";

export async function GET() {
  try {
    if (!fs.existsSync(OUTPUTS_DIR)) {
      return NextResponse.json([]);
    }
    const files = fs.readdirSync(OUTPUTS_DIR)
      .filter((f) => f.endsWith(".txt"))
      .sort()
      .reverse()
      .slice(0, 50);

    const outputs = files.map((f) => {
      const content = fs.readFileSync(path.join(OUTPUTS_DIR, f), "utf-8");
      const lines = content.split("\n");
      const title = lines[0]?.replace(/^#\s*/, "") ?? f;
      const runAt = lines[1]?.replace("Run at: ", "") ?? "";
      return { file: f, title, runAt, content };
    });

    return NextResponse.json(outputs);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
