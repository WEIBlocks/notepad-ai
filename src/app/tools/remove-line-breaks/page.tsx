import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import RemoveLineBreaksTool from "@/components/tools/RemoveLineBreaksTool";

export const metadata: Metadata = {
  title: "Remove Line Breaks Online — Free | Notepad AI",
  description: "Free online tool to remove line breaks from text. 3 modes — replace with space, remove entirely, or keep paragraph breaks. No signup, browser-only, 100% private.",
  keywords: "remove line breaks, strip line breaks, remove newlines, remove line endings, line break remover, paragraph join",
  alternates: { canonical: "https://www.notepad-ai.online/tools/remove-line-breaks" },
  openGraph: {
    title: "Remove Line Breaks Online — Free | Notepad AI",
    description: "Strip line breaks from text instantly. 3 modes. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/remove-line-breaks",
  },
};

const faqs = [
  { question: "Why would I need to remove line breaks?", answer: "Common reasons: text copied from a PDF where every line wraps at a hard line break, joining a list of items into a single sentence, prepping CSV/data cells, or cleaning up text that was force-wrapped at some character width." },
  { question: "What's the difference between the three modes?", answer: "'Replace with space' converts every line break into a single space — best for re-joining wrapped paragraphs. 'Remove entirely' deletes line breaks without inserting anything — useful for joining words without space. 'Keep paragraph breaks' preserves blank lines (paragraph boundaries) while removing within-paragraph line breaks — best for cleaning PDF-extracted text." },
  { question: "Is the tool free?", answer: "Yes — completely free, no signup, no login, no limits." },
  { question: "Is my text private?", answer: "Yes. All processing happens in your browser. Nothing is uploaded or logged." },
  { question: "Does it handle CRLF (Windows) and LF (Unix) line endings?", answer: "Yes. The tool normalizes both Windows-style (CRLF) and Unix-style (LF) line breaks." },
  { question: "What about whitespace cleanup after removing line breaks?", answer: "All modes also collapse consecutive spaces into single spaces and trim leading/trailing whitespace, so you don't end up with extra spacing around joined text." },
];

export default function RemoveLineBreaksPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Remove Line Breaks", url: "https://www.notepad-ai.online/tools/remove-line-breaks" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Remove Line Breaks"
        description="Free online tool to remove line breaks from text — 3 modes (replace with space, remove entirely, preserve paragraphs)."
        features={["3 line-break removal modes", "Handles CRLF and LF", "Whitespace cleanup included", "Works offline", "No login required", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Remove Line Breaks Online — Free
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Strip line breaks from any text — choose to replace with spaces, remove entirely, or preserve paragraph boundaries. Browser-only.
          </p>
        </section>

        <RemoveLineBreaksTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">Remove line breaks</strong> from any text in your browser. Pick from three modes depending on whether you want to join wrapped lines, strip line breaks entirely, or preserve paragraph boundaries while removing within-paragraph wraps.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/remove-extra-spaces" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Remove Extra Spaces →</h3>
              <p className="text-gray-400 text-sm">Collapse double/triple spaces</p>
            </Link>
            <Link href="/tools/duplicate-line-remover" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Duplicate Line Remover →</h3>
              <p className="text-gray-400 text-sm">Strip repeated lines</p>
            </Link>
            <Link href="/tools/line-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Line Counter →</h3>
              <p className="text-gray-400 text-sm">Count total / non-empty lines</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Remove Line Breaks FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Clean Up & Write in One Editor</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
