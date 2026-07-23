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
 *
 * IMPORTANT: `@/utils/mongodb` throws at import time if MONGODB_URI isn't set
 * (by design, for the existing notes feature). That's fine for a route that
 * only exists to talk to Mongo, but it must NOT be able to take down the AI
 * Actions feature if the DB has any problem. So this loads mongo lazily
 * inside a try/catch and fails OPEN (allows the request, skips the cap)
 * rather than crashing the request if anything here goes wrong.
 */
export async function checkAndIncrementAIUsage(
  ip: string
): Promise<{ allowed: boolean; remaining: number; limit: number }> {
  try {
    const { connect } = await import('@/utils/mongodb');
    const { default: AIUsage } = await import('@/models/AIUsage');
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
  } catch (error) {
    console.error('AI rate limit check failed — failing open (request allowed, not counted):', error);
    return { allowed: true, remaining: -1, limit: DAILY_LIMIT };
  }
}
