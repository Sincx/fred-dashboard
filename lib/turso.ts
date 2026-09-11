import { createClient, type Client } from "@libsql/client";

let client: Client | null = null;

/**
 * Shared Turso connection — the same database the market-watchlist-tracker
 * Python pipeline writes to (universe, prices, fundamentals, screen_results,
 * signals, strategies, portfolios, trades all live; task_registry is still
 * schema-only).
 *
 * @libsql/client is HTTP-based (no persistent TCP connection), which is what
 * makes it work from Vercel serverless functions — see spec §3/§13.
 */
export function getTursoClient(): Client {
  if (!client) {
    const url = process.env.TURSO_DATABASE_URL;
    const authToken = process.env.TURSO_AUTH_TOKEN;
    if (!url || !authToken) {
      throw new Error("TURSO_DATABASE_URL / TURSO_AUTH_TOKEN not set");
    }
    client = createClient({ url, authToken });
  }
  return client;
}
