import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { checkAndIncrementAIUsage, getClientIp } from '@/utils/aiRateLimit';

const MAX_CHARS = 6000;

const ALLOWED_TONES = ['formal', 'casual', 'concise'] as const;
type Tone = (typeof ALLOWED_TONES)[number];

const TONE_INSTRUCTIONS: Record<Tone, string> = {
  formal: 'Rewrite the text in a more formal, professional tone. Keep the same meaning and roughly the same length.',
  casual: 'Rewrite the text in a more casual, conversational tone. Keep the same meaning.',
  concise: 'Rewrite the text to be more concise and clear, cutting unnecessary words while keeping the full meaning.',
};

function isTone(value: unknown): value is Tone {
  return typeof value === 'string' && (ALLOWED_TONES as readonly string[]).includes(value);
}

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
    const tone: Tone = isTone(body?.tone) ? body.tone : 'concise';

    if (!text || typeof text !== 'string' || !text.trim()) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }
    if (text.length > MAX_CHARS) {
      return NextResponse.json(
        { error: `That's too long for Rewrite (max ${MAX_CHARS} characters). Select a shorter passage.` },
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
    const model = process.env.OPENAI_MODEL || 'gpt-5-nano';

    const completion = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content:
            `You are a writing assistant inside a plain-text notepad app. ${TONE_INSTRUCTIONS[tone]} ` +
            'Return ONLY the rewritten text — no commentary, no explanation, no quotation marks around it.',
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
    console.error('Error in /api/ai/rewrite:', error);
    return NextResponse.json({ error: 'Failed to rewrite text. Try again in a moment.' }, { status: 500 });
  }
}
