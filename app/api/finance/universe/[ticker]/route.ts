import { NextRequest, NextResponse } from "next/server";
import { getTursoClient } from "@/lib/turso";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  try {
    const { ticker } = await params;
    const body = await req.json();
    const exchange = body?.exchange;
    const notes = body?.notes;
    if (typeof exchange !== "string" || typeof notes !== "string") {
      return NextResponse.json(
        { error: "exchange and notes are required strings" },
        { status: 400 }
      );
    }
    const client = getTursoClient();
    const rs = await client.execute({
      sql: "UPDATE universe SET notes = ? WHERE ticker = ? AND exchange = ?",
      args: [notes, ticker, exchange],
    });
    if (rs.rowsAffected === 0) {
      return NextResponse.json(
        { error: `No universe row for ${ticker}/${exchange}` },
        { status: 404 }
      );
    }
    return NextResponse.json({ ticker, exchange, notes });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
