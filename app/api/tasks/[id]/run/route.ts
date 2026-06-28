import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);
const TASKS_DIR = "C:\\Users\\Mike\\.claude\\scheduled-tasks";
const OUTPUTS_DIR = "C:\\Users\\Mike\\fred-dashboard\\outputs";

export async function POST(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const skillPath = path.join(TASKS_DIR, id, "SKILL.md");

  if (!fs.existsSync(skillPath)) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }

  if (!fs.existsSync(OUTPUTS_DIR)) {
    fs.mkdirSync(OUTPUTS_DIR, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outFile = path.join(OUTPUTS_DIR, `${id}-${timestamp}.txt`);

  // Run via Claude Code CLI: claude --print <skill prompt>
  // The skill prompt is the content of SKILL.md
  const skill = fs.readFileSync(skillPath, "utf-8");
  const firstLine = skill.split("\n").find((l) => l.trim())?.trim() ?? id;

  try {
    const { stdout, stderr } = await execAsync(
      `claude --print "${firstLine.replace(/"/g, '\\"')}"`,
      { timeout: 300_000, windowsHide: true }
    );
    const output = stdout || stderr || "(no output)";
    fs.writeFileSync(outFile, `# ${id}\nRun at: ${new Date().toISOString()}\n\n${output}`);
    return NextResponse.json({ success: true, output, file: path.basename(outFile) });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    fs.writeFileSync(outFile, `# ${id}\nRun at: ${new Date().toISOString()}\n\nERROR: ${msg}`);
    return NextResponse.json({ success: false, error: msg, file: path.basename(outFile) }, { status: 500 });
  }
}
