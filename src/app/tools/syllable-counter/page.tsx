import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import SyllableCounterTool from "@/components/tools/SyllableCounterTool";

export const metadata: Metadata = {
  title: "Syllable Counter Online — Free, No Login | Notepad AI",
  description: "Free online syllable counter. Count syllables in any English text instantly. Useful for poetry, lyrics, readability checks. Works in any browser, no signup, 100% private.",
  keywords: "syllable counter, count syllables online, free syllable counter, syllable count tool, syllables in word, how many syllables",
  alternates: { canonical: "https://www.notepad-ai.online/tools/syllable-counter" },
  openGraph: {
    title: "Syllable Counter Online — Free, No Login | Notepad AI",
    description: "Count syllables in text instantly. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/syllable-counter",
  },
};

const faqs = [
  { question: "How accurate is the syllable counter?", answer: "The counter uses an English vowel-group heuristic with adjustments for silent trailing 'e' and the 'le' rule. It's accurate for ~95% of common English words. For poetry where exact syllable counts matter (e.g., haiku), spot-check edge cases manually." },
  { question: "Is the syllable counter free?", answer: "Yes, completely free with no signup, no login, no limits, no ads on the tool. Count syllables in any text length." },
  { question: "Does it count syllables in any language?", answer: "It's tuned for English. Other languages with different vowel-group rules (Spanish, Japanese romaji) may have lower accuracy. We may add language modes in future updates." },
  { question: "Is my text private?", answer: "Yes. The counter runs entirely in your browser — no uploads, no server logging, no analytics on what you paste." },
  { question: "Why is poetry meter often based on syllables?", answer: "Many poetic forms (haiku 5-7-5, iambic pentameter, sonnets) rely on syllable counts. Counting syllables helps you fit a strict meter without manually tapping out each word." },
  { question: "How does it handle compound words?", answer: "Compound words (like 'breakfast' or 'sunlight') are treated as single words. The vowel-group method generally handles them correctly because the underlying syllable structure is preserved." },
  { question: "What's a typical syllables-per-word average?", answer: "Conversational English averages 1.4–1.5 syllables per word. Academic or technical text averages 1.7–2.0. Higher averages indicate denser, harder-to-read text — useful for readability assessment." },
  { question: "Does it count syllables in song lyrics?", answer: "Yes — lyrics are just text. Songwriters and lyricists use syllable counts to fit melodies. The tool is fast enough to use line-by-line while writing." },
];

export default function SyllableCounterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Syllable Counter", url: "https://www.notepad-ai.online/tools/syllable-counter" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Syllable Counter"
        description="Free online syllable counter for English text. Counts syllables, words, and average syllables per word in real-time."
        features={["Real-time syllable counting", "Vowel-group heuristic detection", "English silent-e and 'le' rules applied", "Words and average syllables per word", "Works offline", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Syllable Counter Online — No Login Required
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Paste English text and instantly count syllables, words, and average syllables per word. Useful for poetry, lyrics, speech writing, and readability checks.
          </p>
        </section>

        <SyllableCounterTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">syllable counter</strong> counts the rhythmic units in a piece of text. Notepad AI&apos;s syllable counter uses an English vowel-group heuristic with silent-e and &quot;le&quot; rule adjustments — accurate for ~95% of common English. Updates live as you type, runs entirely in your browser.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">How to Use the Syllable Counter</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { step: 1, title: "Paste or type your text", body: "Drop in your poem, lyrics, speech, or any English text." },
              { step: 2, title: "See live syllable count", body: "Total syllables, words, and average syllables per word — all live." },
              { step: 3, title: "Iterate on meter", body: "Edit text and watch the count change to hit specific syllable targets (haiku, sonnet, song line)." },
            ].map((s) => (
              <div key={s.step} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">{s.step}</div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Common Poetic Forms & Syllable Counts</h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Form</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Syllable Pattern</th>
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Origin</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Haiku", "5 / 7 / 5", "Japan"],
                  ["Tanka", "5 / 7 / 5 / 7 / 7", "Japan"],
                  ["Limerick", "8-9 / 8-9 / 5-6 / 5-6 / 8-9", "Ireland"],
                  ["Iambic pentameter", "10 syllables (5 iambs)", "English"],
                  ["Cinquain", "2 / 4 / 6 / 8 / 2", "American"],
                ].map((row) => (
                  <tr key={row[0]} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800 font-medium">{row[0]}</td>
                    <td className="p-4 text-center text-blue-400 border border-gray-800 font-mono">{row[1]}</td>
                    <td className="p-4 text-gray-400 text-sm border border-gray-800">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/word-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Word Counter →</h3>
              <p className="text-gray-400 text-sm">Count words and characters</p>
            </Link>
            <Link href="/tools/reading-time-calculator" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Reading Time →</h3>
              <p className="text-gray-400 text-sm">Estimate reading duration</p>
            </Link>
            <Link href="/tools/speaking-time-calculator" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Speaking Time →</h3>
              <p className="text-gray-400 text-sm">Estimate speech duration</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Syllable Counter FAQ</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Need More Writing Tools?</h2>
          <p className="text-gray-400 mb-6">Notepad AI gives you a full editor with syllable, word, sentence, and reading-time metrics always visible.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
