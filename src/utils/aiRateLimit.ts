import { connect } from '@/utils/mongodb';
import AIUsage from '@/models/AIUsage';

// Fixed daily cap per IP, across both AI Actions (grammar check + rewrite)
// combined. Override with AI_DAILY_LIMIT in env if you want a different number.
const DAILY_LIMIT = parseInt(process.env.AI_DAILY_LIMIT || '20', 10);

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') || 'unknown';
}

/**
 * Atomically increments today's usage count for this IP and reports whether
 * the request is still within the daily limit. Call this BEFORE making the
 * OpenAI request, so a request that's over the limit never reaches OpenAI.
 */
export async function checkAndIncrementAIUsage(
  ip: string
): Promise<{ allowed: boolean; remaining: number; limit: number }> {
  await connect();
  const today = new Date().toISOString().slice(0, 10); // UTC YYYY-MM-DD

  const doc = await AIUsage.findOneAndUpdate(
    { ip, date: today },
    { $inc: { count: 1 }, $setOnInsert: { ip, date: today } },
    { upsert: true, new: true }
  );

  if (doc.count > DAILY_LIMIT) {
    return { allowed: false, remaining: 0, limit: DAILY_LIMIT };
  }
  return { allowed: true, remaining: DAILY_LIMIT - doc.count, limit: DAILY_LIMIT };
}
