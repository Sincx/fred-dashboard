import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const EQUITY_TICKERS = [
  "GOOGL","AMZN","MSFT","WDAY","MSTR","BRK.B","TER","NGLOY","GLNCY",
  "ASML","CHIP","AVGO","CEG","CRWD","NOW","IBM","GAW","IQV","PEP",
];

function buildPrompt(ticker: string, mode: "ta" | "ea"): string {
  if (mode === "ta") {
    return `You are an expert technical analyst. Perform a comprehensive technical analysis of ${ticker}.

Apply the following 5 frameworks:
1. **Murphy (Trend)**: Primary trend (vs 200d SMA), secondary trend (vs 50d SMA), volume confirmation
2. **Nison (Candlesticks)**: Recent candlestick patterns and what they signal
3. **Bulkowski (Chart Patterns)**: Any forming or completed chart patterns (Cup & Handle, H&S, triangles, flags)
4. **Elder (Triple Screen)**: Weekly MACD trend + daily RSI oscillator + entry trigger alignment
5. **O'Neil (CAN SLIM)**: C/A/N/S/L/I/M criteria assessment

Format your response as:

════════════════════════════════════════
  TECHNICAL ANALYSIS — ${ticker}
════════════════════════════════════════

PRICE SNAPSHOT
  [Approximate current price, 52w range, trend direction]

INDICATORS
  RSI (14): [value and interpretation]
  MACD: [signal]
  Moving Averages: [50d vs 200d position]

FRAMEWORK ANALYSIS
  Murphy (Trend): [Bullish/Neutral/Bearish] — [rationale]
  Nison (Candles): [Bullish/Neutral/Bearish] — [pattern]
  Bulkowski (Charts): [Bullish/Neutral/Bearish] — [pattern]
  Elder (Triple Screen): [Bullish/Neutral/Bearish] — [screens]
  O'Neil (CAN SLIM): [Strong/Moderate/Weak] — [criteria]

KEY LEVELS
  Resistance: [levels]
  Support: [levels]

OVERALL VERDICT
  [★ rating] [BULLISH/BEARISH/NEUTRAL]
  [2-3 sentence summary]

WATCH FOR
  - [Key risk or catalyst]
  - [Level that changes the picture]
════════════════════════════════════════

Note: Analysis based on training data — verify current prices with your broker.`;
  }

  return `You are an expert fundamental/equity analyst. Perform a comprehensive equity analysis of ${ticker}.

Cover:
1. **Business model**: Revenue streams, unit economics, moat sources
2. **Financial performance**: Revenue growth, margins, FCF, balance sheet strength (last 3-4 years trend)
3. **Competitive position**: Market share, switching costs, network effects, pricing power
4. **Management & capital allocation**: CEO track record, buybacks, M&A quality, insider ownership
5. **Valuation**: P/E, EV/EBITDA, P/FCF vs sector peers; implied fair value vs current price
6. **Key risks**: Top 3 risks to the thesis
7. **Investment thesis**: Bull case, base case, bear case

Format your response as:

════════════════════════════════════════
  EQUITY ANALYSIS — ${ticker}
════════════════════════════════════════

BUSINESS OVERVIEW
  [2-3 sentences on what the company does and how it makes money]

FINANCIAL SNAPSHOT
  Revenue: [trend]
  Margins: [gross / operating / net]
  FCF: [generation and yield]
  Balance sheet: [debt / cash position]

COMPETITIVE MOAT
  [Assessment of moat sources and durability — score each: strong/moderate/weak]

MANAGEMENT
  [CEO, capital allocation track record, insider ownership]

VALUATION
  [Current multiples vs historical and peers — cheap/fair/expensive]
  Implied fair value range: [estimate]

SCENARIOS
  Bull: [assumption + target]
  Base: [assumption + target]
  Bear: [assumption + target]

KEY RISKS
  1. [Risk]
  2. [Risk]
  3. [Risk]

VERDICT
  [★ rating] [BUY/HOLD/SELL equivalent]
  [2-3 sentence investment thesis summary]
════════════════════════════════════════

Note: Analysis based on training data — verify financials and current price with latest filings.`;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY not set" }, { status: 500 });
  }

  let body: { ticker?: string; mode?: string; portfolio?: boolean };
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const mode = (body.mode === "ea" ? "ea" : "ta") as "ta" | "ea";
  const tickers = body.portfolio ? EQUITY_TICKERS : [body.ticker?.toUpperCase()].filter(Boolean) as string[];

  if (!tickers.length) {
    return NextResponse.json({ error: "ticker required" }, { status: 400 });
  }

  try {
    const client = new Anthropic({ apiKey });
    const results: string[] = [];

    for (const ticker of tickers) {
      const message = await client.messages.create({
        model: "claude-sonnet-4-6",
        max_tokens: 2048,
        messages: [{ role: "user", content: buildPrompt(ticker, mode) }],
      });
      const text = message.content.filter((b) => b.type === "text").map((b) => (b as { type: "text"; text: string }).text).join("\n");
      results.push(text);
    }

    const output = results.join("\n\n---\n\n");
    const label = mode === "ta" ? "Technical Analysis" : "Equity Analysis";
    const title = body.portfolio
      ? `${label} — Equity Portfolio (${tickers.length} stocks)`
      : `${label} — ${tickers[0]}`;

    return NextResponse.json({ success: true, output, title, runAt: new Date().toISOString() });
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
