/**
 * Pure text-case transformation helpers used by case-converter tool widgets.
 * Kept in a separate file so they can be reused (and unit-tested without React).
 */

export function toUpperCase(text: string): string {
  return text.toUpperCase();
}

export function toLowerCase(text: string): string {
  return text.toLowerCase();
}

/**
 * Title Case — capitalize the first letter of every word.
 * Uses a simple word boundary heuristic. Doesn't preserve "small word" exceptions
 * (a, an, the, of, in, on, to, etc.) — that's a known stylistic trade-off; AP/MLA/
 * Chicago all differ on which small words stay lowercase.
 */
export function toTitleCase(text: string): string {
  return text.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

/**
 * Sentence case — lowercase everything, then capitalize the first letter of each
 * sentence (after . ! ? and any whitespace).
 */
export function toSentenceCase(text: string): string {
  const lower = text.toLowerCase();
  return lower.replace(/(^\s*|[.!?]\s+)([a-z])/g, (_m, prefix, char) => prefix + char.toUpperCase());
}

/** Alternating case — first letter lower, alternating up/down. Fun / meme use. */
export function toAlternatingCase(text: string): string {
  let i = 0;
  return text.replace(/[a-z]/gi, (c) => {
    const out = i % 2 === 0 ? c.toLowerCase() : c.toUpperCase();
    i++;
    return out;
  });
}

/** Inverse case — swap upper to lower and vice versa. */
export function toInverseCase(text: string): string {
  return text.replace(/[a-zA-Z]/g, (c) =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  );
}

export const CASE_MODES = [
  { key: "upper", label: "UPPERCASE", transform: toUpperCase },
  { key: "lower", label: "lowercase", transform: toLowerCase },
  { key: "title", label: "Title Case", transform: toTitleCase },
  { key: "sentence", label: "Sentence case", transform: toSentenceCase },
  { key: "alternating", label: "aLtErNaTiNg", transform: toAlternatingCase },
  { key: "inverse", label: "iNVERSE", transform: toInverseCase },
] as const;

export type CaseModeKey = (typeof CASE_MODES)[number]["key"];
