import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import TextDiffTool from "@/components/tools/TextDiffTool";

export const metadata: Metadata = {
  title: "Text Diff Checker Online — Free Compare Text | Notepad AI",
  description: "Free online text diff checker. Compare two texts line-by-line and see added and removed lines highlighted. Browser-only, no signup, 100% private.",
  keywords: "text diff, text compare, diff checker online, compare text online, text difference, diff tool, find differences text",
  alternates: { canonical: "https://www.notepad-ai.online/tools/text-diff" },
  openGraph: {
    title: "Text Diff Checker Online — Free Compare Text | Notepad AI",
    description: "Compare two texts line-by-line with highlighted changes. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/text-diff",
  },
};

const faqs = [
  { question: "How does the text diff checker work?", answer: "Paste your original text in the left box and the changed version in the right box. The tool computes a line-by-line difference using a longest-common-subsequence (LCS) algorithm, then highlights added lines in green and removed lines in red." },
  { question: "Is the diff checker free?", answer: "Yes — completely free, no signup, no login, no limits." },
  { question: "Is my text private?", answer: "Yes. The entire diff is computed in your browser. Neither text is uploaded, logged, or tracked — important when comparing sensitive documents, contracts, or code." },
  { question: "Does it compare word-by-word or line-by-line?", answer: "Line-by-line. Each line is treated as a unit. If a single word changes within a line, the whole line shows as removed (old) + added (new). Line-level diffing is the standard approach used by Git and most diff tools." },
  { question: "Can I compare code?", answer: "Yes. The diff works on any text including source code, config files, JSON, CSV — anything line-based. Monospace font preserves alignment." },
  { question: "How big a document can it handle?", answer: "The LCS algorithm is O(n×m) in lines, so it comfortably handles documents of a few thousand lines. Extremely large files (tens of thousands of lines) may slow down since it runs entirely in the browser." },
];

export default function TextDiffPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Text Diff", url: "https://www.notepad-ai.online/tools/text-diff" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Text Diff Checker"
        description="Free online text diff checker. Compares two texts line-by-line using an LCS algorithm, highlighting added and removed lines."
        features={["Line-by-line diff", "LCS-based algorithm", "Added/removed highlighting", "Add/remove line counts", "Works offline", "No upload — private"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Text Diff Checker Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Compare two texts line-by-line. Added lines in green, removed in red. Browser-only, no signup — perfect for sensitive documents.
          </p>
        </section>

        <TextDiffTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">text diff checker</strong> compares two pieces of text and highlights what changed. Notepad AI&apos;s diff tool uses a
            longest-common-subsequence (LCS) algorithm to compute line-by-line differences, showing added lines in green and removed lines in red — all in your browser, nothing uploaded.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/find-and-replace" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Find and Replace →</h3>
              <p className="text-gray-400 text-sm">Replace text with regex</p>
            </Link>
            <Link href="/tools/duplicate-line-remover" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Duplicate Line Remover →</h3>
              <p className="text-gray-400 text-sm">Strip repeated lines</p>
            </Link>
            <Link href="/tools/text-sorter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text Sorter →</h3>
              <p className="text-gray-400 text-sm">Sort lines</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Text Diff FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Compare + Edit in One Place</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
