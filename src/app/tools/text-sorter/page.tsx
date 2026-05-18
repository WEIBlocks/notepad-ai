import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import TextSorterTool from "@/components/tools/TextSorterTool";

export const metadata: Metadata = {
  title: "Sort Text Online — Free Text Sorter | Notepad AI",
  description: "Free online text sorter. Sort lines alphabetically (A→Z, Z→A), by length, or numerically. Case-sensitive option. No signup, browser-only, 100% private.",
  keywords: "sort text online, text sorter, sort lines alphabetically, alphabetize text, sort list, sort lines online, line sorter",
  alternates: { canonical: "https://www.notepad-ai.online/tools/text-sorter" },
  openGraph: {
    title: "Sort Text Online — Free Text Sorter | Notepad AI",
    description: "Sort lines alphabetically, by length, or numerically. Free.",
    url: "https://www.notepad-ai.online/tools/text-sorter",
  },
};

const faqs = [
  { question: "What sorting modes are available?", answer: "Eight modes total: A→Z (case-sensitive), Z→A, A→Z case-insensitive, Z→A case-insensitive, Shortest first, Longest first, Numeric ascending, Numeric descending." },
  { question: "What's the difference between case-sensitive and case-insensitive sorting?", answer: "Case-sensitive treats 'Apple' and 'apple' as different — uppercase letters sort before lowercase (so 'Z' < 'a'). Case-insensitive ignores case, sorting purely on letter order. Use case-insensitive for names and most lists." },
  { question: "How does numeric sorting work?", answer: "Each line is parsed as a number (the leading numeric portion). Lines that don't start with a number are treated as 0. Useful for sorting lines that begin with numbers like '12 apples', '3 oranges', '7 pears'." },
  { question: "Is the text sorter free?", answer: "Yes — completely free, no signup, no login, no limits." },
  { question: "Is my text private?", answer: "Yes. All sorting happens in your browser. Nothing uploaded or logged." },
  { question: "Can I sort + dedupe in one step?", answer: "Run your text through Duplicate Line Remover first (preserves original order), then this Text Sorter. Two clicks, fully deduped + sorted output." },
];

export default function TextSorterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Text Sorter", url: "https://www.notepad-ai.online/tools/text-sorter" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Text Sorter"
        description="Free online text sorter — sort lines alphabetically (case-sensitive or insensitive), by length, or numerically. 8 modes."
        features={["8 sort modes", "Alphabetical (A→Z, Z→A)", "Case-insensitive options", "By length (shortest / longest)", "Numeric (ascending / descending)", "Works offline", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Text Sorter Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Sort lines alphabetically, by length, or numerically. 8 modes. Browser-only. No signup.
          </p>
        </section>

        <TextSorterTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">text sorter</strong> reorders lines according to a sorting rule. Notepad AI&apos;s sorter supports 8 modes — alphabetical (case-sensitive or insensitive, both directions), by length (shortest or longest first), and numeric (ascending or descending). All sorting happens locally in your browser.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/duplicate-line-remover" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Duplicate Line Remover →</h3>
              <p className="text-gray-400 text-sm">Strip repeated lines</p>
            </Link>
            <Link href="/tools/line-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Line Counter →</h3>
              <p className="text-gray-400 text-sm">Count lines</p>
            </Link>
            <Link href="/tools/text-reverser" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text Reverser →</h3>
              <p className="text-gray-400 text-sm">Reverse lines / words / chars</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Text Sorter FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Sort + Edit in One Tool</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
