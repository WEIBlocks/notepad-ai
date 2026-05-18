import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import DuplicateLineRemoverTool from "@/components/tools/DuplicateLineRemoverTool";

export const metadata: Metadata = {
  title: "Duplicate Line Remover Online — Free | Notepad AI",
  description: "Free online duplicate line remover. Strip repeated lines from any list. Case-sensitive option, trim option. No signup, browser-only, 100% private.",
  keywords: "duplicate line remover, remove duplicate lines, dedupe lines, unique lines, strip duplicates, remove repeats",
  alternates: { canonical: "https://www.notepad-ai.online/tools/duplicate-line-remover" },
  openGraph: {
    title: "Duplicate Line Remover Online — Free | Notepad AI",
    description: "Strip duplicate lines from any list. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/duplicate-line-remover",
  },
};

const faqs = [
  { question: "How does the duplicate remover work?", answer: "It splits your text by line, keeps the first occurrence of each unique line, and removes subsequent duplicates. The original order of first-occurrences is preserved." },
  { question: "What's the 'case-sensitive' option?", answer: "When ON, 'Hello' and 'hello' are treated as different lines. When OFF, they're treated as the same. Turn off for email lists or names where capitalization varies but the content is the same." },
  { question: "What's the 'trim whitespace' option?", answer: "When ON, leading/trailing whitespace on each line is ignored for comparison. So 'apple' and ' apple ' are treated as duplicates. Recommended ON for most use cases — output preserves original whitespace." },
  { question: "Is the tool free?", answer: "Yes — completely free, no signup, no login." },
  { question: "Is my data private?", answer: "Yes. All deduplication happens in your browser. No data is uploaded or logged." },
  { question: "What about empty lines?", answer: "Multiple empty lines are treated as duplicates and removed — only the first empty line is kept. If you want to preserve paragraph spacing, remove duplicates from your content list before adding empty separators." },
  { question: "Can I sort the result?", answer: "This tool preserves original order. If you want sorted unique lines, run the result through the Text Sorter tool." },
];

export default function DuplicateLineRemoverPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Duplicate Line Remover", url: "https://www.notepad-ai.online/tools/duplicate-line-remover" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Duplicate Line Remover"
        description="Free online duplicate line remover. Strips repeated lines from any list with case-sensitive and trim options."
        features={["Case-sensitive toggle", "Trim whitespace option", "Preserves first-occurrence order", "Shows count of duplicates removed", "Works offline", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Duplicate Line Remover Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Strip duplicate lines from any list. Case-sensitive option, trim option, original order preserved. Browser-only.
          </p>
        </section>

        <DuplicateLineRemoverTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">duplicate line remover</strong> deduplicates a list by line, keeping the first occurrence of each unique line. Notepad AI&apos;s tool gives you case-sensitivity and whitespace-trim toggles for clean deduplication of lists, emails, URLs, or any line-based data.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/text-sorter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text Sorter →</h3>
              <p className="text-gray-400 text-sm">Sort lines alphabetically</p>
            </Link>
            <Link href="/tools/line-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Line Counter →</h3>
              <p className="text-gray-400 text-sm">Count total / non-empty lines</p>
            </Link>
            <Link href="/tools/word-frequency-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Word Frequency →</h3>
              <p className="text-gray-400 text-sm">Most used words</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Duplicate Line Remover FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Dedupe + Edit in Notepad AI</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
