export interface StoredOutput {
  id: string;
  taskId: string;
  title: string;
  output: string;
  runAt: string;
  success: boolean;
}

const OUTPUTS_KEY = "fred_outputs";
const MAX_OUTPUTS = 50;

export function saveOutput(entry: Omit<StoredOutput, "id">) {
  try {
    const existing: StoredOutput[] = JSON.parse(localStorage.getItem(OUTPUTS_KEY) || "[]");
    const updated = [{ ...entry, id: `${entry.taskId}-${Date.now()}` }, ...existing].slice(0, MAX_OUTPUTS);
    localStorage.setItem(OUTPUTS_KEY, JSON.stringify(updated));
  } catch {}
}

export function loadOutputs(): StoredOutput[] {
  try { return JSON.parse(localStorage.getItem(OUTPUTS_KEY) || "[]"); } catch { return []; }
}

export function clearOutputs() {
  localStorage.removeItem(OUTPUTS_KEY);
}
