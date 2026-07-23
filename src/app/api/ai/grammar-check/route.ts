import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { checkAndIncrementAIUsage, getClientIp } from '@/utils/aiRateLimit';

// Keep requests small and cheap. Users pick a passage (or we use the whole
// note if nothing is selected) — this cap keeps a single request affordable
// on the nano-tier model and gives a clear error instead of a silent failure.
const MAX_CHARS = 6000;

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'AI features are not configured on this server yet.' },
        { status: 503 }
      );
    }

    const body = await req.json().catch(() => null);
    const text = body?.text;

    if (!text || typeof text !== 'string' || !text.trim()) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }
    if (text.length > MAX_CHARS) {
      return NextResponse.json(
        { error: `That's too long for AI Check (max ${MAX_CHARS} characters). Select a shorter passage.` },
        { status: 400 }
      );
    }

    const ip = getClientIp(req);
    const usage = await checkAndIncrementAIUsage(ip);
    if (!usage.allowed) {
      return NextResponse.json(
        { error: `Daily AI limit reached (${usage.limit}/day). Try again tomorrow.` },
        { status: 429 }
      );
    }

    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    // Cheapest current OpenAI nano-tier model; override via env if pricing/models change.
    const model = process.env.OPENAI_MODEL || 'gpt-5-nano';

    const completion = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content:
            "You are a grammar and spelling correction assistant inside a plain-text notepad app. " +
            "Fix grammar, spelling, and punctuation errors only. Preserve the user's original meaning, " +
            "tone, line breaks, and wording choices as much as possible — do not rewrite for style, " +
            "do not add or remove content, do not add any commentary, explanation, or quotation marks. " +
            "Return ONLY the corrected text.",
        },
        { role: 'user', content: text },
      ],
      // gpt-5-nano only supports the default temperature (1) — don't set it explicitly.
    });

    const result = completion.choices[0]?.message?.content?.trim();
    if (!result) {
      return NextResponse.json({ error: 'AI returned an empty response, try again.' }, { status: 502 });
    }

    return NextResponse.json({ result, remaining: usage.remaining, limit: usage.limit });
  } catch (error) {
    console.error('Error in /api/ai/grammar-check:', error);
    return NextResponse.json({ error: 'Failed to check grammar. Try again in a moment.' }, { status: 500 });
  }
}
