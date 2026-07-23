import mongoose from 'mongoose';

// Tracks AI Actions (grammar check + rewrite) usage per IP per day, so a
// free, no-signup tool doesn't let one visitor rack up unbounded OpenAI cost.
const aiUsageSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
  },
  date: {
    type: String, // 'YYYY-MM-DD' in UTC
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 24 * 3, // TTL: auto-delete after 3 days, nothing to clean up manually
  },
});

aiUsageSchema.index({ ip: 1, date: 1 }, { unique: true });

const AIUsage = mongoose.models.AIUsage || mongoose.model('AIUsage', aiUsageSchema);
export default AIUsage;
