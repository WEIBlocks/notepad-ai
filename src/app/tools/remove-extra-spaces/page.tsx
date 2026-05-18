import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import RemoveExtraSpacesTool from "@/components/tools/RemoveExtraSpacesTool";

export const metadata: Metadata = {
  title: "Remove Extra Spaces Online — Free | Notepad AI",
  description: "Free online tool to remove extra spaces from text. Collapses double/triple spaces into single spaces. Trims line whitespace. No signup, browser-only.",
  keywords: "remove extra spaces, remove double spaces, strip multiple spaces, collapse spaces, whitespace cleaner, trim whitespace",
  alternates: { canonical: "https://www.notepad-ai.online/tools/remove-extra-spaces" },
  openGraph: {
    title: "Remove Extra Spaces Online — Free | Notepad AI",
    description: "Clean up double / triple spaces in text instantly. Browser-only.",
    url: "https://www.notepad-ai.online/tools/remove-extra-spaces",
  },
};

const faqs = [
  { question: "What does this tool do?", answer: "It removes consecutive whitespace within each line, collapsing double/triple spaces and tabs into single spaces. Newlines (paragraph structure) are preserved. Leading and trailing whitespace on each line is also trimmed." },
  { question: "Why would I have extra spaces in my text?", answer: "Common sources: copy-paste from PDFs or Word docs with formatting artifacts, accidental double-spacing after periods (a habit from typewriter era), tab characters mixed with spaces, or text scraped from web pages with odd HTML whitespace." },
  { question: "Does it remove single spaces between words?", answer: "No. Single spaces between words are preserved. Only runs of 2+ consecutive whitespace characters are collapsed." },
  { question: "Is my text private?", answer: "Yes. All cleanup happens in your browser. Nothing is uploaded or logged." },
  { question: "Does it preserve newlines?", answer: "Yes. The tool only collapses spaces and tabs within lines. Line structure (newlines, paragraph breaks) is preserved." },
  { question: "What about tabs?", answer: "Tabs are treated as whitespace and collapsed along with spaces. If you need to keep tab indentation, this tool isn't right for code formatting." },
];

export default function RemoveExtraSpacesPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Remove Extra Spaces", url: "https://www.notepad-ai.online/tools/remove-extra-spaces" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Remove Extra Spaces"
        description="Free online tool to remove extra spaces from text — collapses multiple spaces/tabs into single spaces, trims line whitespace, preserves newlines."
        features={["Collapses double/triple spaces", "Handles tabs", "Trims line whitespace", "Preserves newlines", "Works offline", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Remove Extra Spaces Online — Free
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Clean up double/triple spaces and tabs in any text. Newlines preserved, line whitespace trimmed. Browser-only.
          </p>
        </section>

        <RemoveExtraSpacesTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            This tool <strong className="text-white">collapses runs of consecutive whitespace</strong> (spaces or tabs) into single spaces, and trims leading/trailing whitespace from each line. Newlines are preserved so your paragraph structure stays intact.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/remove-line-breaks" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Remove Line Breaks →</h3>
              <p className="text-gray-400 text-sm">Strip newlines</p>
            </Link>
            <Link href="/tools/duplicate-line-remover" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Duplicate Line Remover →</h3>
              <p className="text-gray-400 text-sm">Strip repeated lines</p>
            </Link>
            <Link href="/tools/text-sorter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text Sorter →</h3>
              <p className="text-gray-400 text-sm">Sort lines alphabetically</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Remove Extra Spaces FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">More Cleanup Tools in Notepad AI</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
