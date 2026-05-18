import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import TextReverserTool from "@/components/tools/TextReverserTool";

export const metadata: Metadata = {
  title: "Text Reverser Online — Free | Notepad AI",
  description: "Free online text reverser. Reverse text by characters, words, or lines. Three modes in one tool. No signup, browser-only, 100% private.",
  keywords: "text reverser, reverse text, reverse string, backward text, reverse words, reverse lines, mirror text",
  alternates: { canonical: "https://www.notepad-ai.online/tools/text-reverser" },
  openGraph: {
    title: "Text Reverser Online — Free | Notepad AI",
    description: "Reverse text by characters, words, or lines. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/text-reverser",
  },
};

const faqs = [
  { question: "What are the three reversal modes?", answer: "Reverse Characters reverses every character: 'hello' becomes 'olleh'. Reverse Words keeps each word intact but flips word order: 'the quick fox' becomes 'fox quick the'. Reverse Lines flips the line order without touching word order: line 1 becomes the last line." },
  { question: "Is the text reverser free?", answer: "Yes — completely free, no signup, no login, no character limits." },
  { question: "What are common use cases?", answer: "Word reversal: anagram puzzles, palindrome checks, encoding mirror text. Line reversal: flipping a chronological log to most-recent-first, reversing a sorted list. Character reversal: cryptography exercises, creating mirror text for stylistic effect." },
  { question: "Does it handle Unicode and emoji correctly?", answer: "Character mode uses Array.from() which splits by Unicode code points, handling most emoji and surrogate pairs correctly. Some grapheme clusters (e.g., combined emoji with skin tone) may split unexpectedly — this is a JavaScript Unicode limitation." },
  { question: "Is my text private?", answer: "Yes. All reversal happens in your browser. No data is uploaded." },
];

export default function TextReverserPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Text Reverser", url: "https://www.notepad-ai.online/tools/text-reverser" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Text Reverser"
        description="Free online text reverser with 3 modes — reverse characters, words, or lines in real-time."
        features={["Reverse by characters", "Reverse by words", "Reverse by lines", "Unicode-aware character mode", "Works offline", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Text Reverser Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Reverse text by characters, words, or lines — three modes in one tool. Useful for palindromes, log flipping, mirror text, anagram puzzles.
          </p>
        </section>

        <TextReverserTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">text reverser</strong> flips text in one of three ways. Notepad AI&apos;s reverser supports character reversal, word reversal, and line reversal — switchable with one click. Runs entirely in your browser.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/text-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Case Converter →</h3>
              <p className="text-gray-400 text-sm">6 case modes</p>
            </Link>
            <Link href="/tools/text-sorter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text Sorter →</h3>
              <p className="text-gray-400 text-sm">Sort lines</p>
            </Link>
            <Link href="/tools/remove-extra-spaces" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Remove Extra Spaces →</h3>
              <p className="text-gray-400 text-sm">Collapse whitespace</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Text Reverser FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need More Text Tools?</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
