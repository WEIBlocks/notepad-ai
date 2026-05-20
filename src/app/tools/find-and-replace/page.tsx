import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import FindAndReplaceTool from "@/components/tools/FindAndReplaceTool";

export const metadata: Metadata = {
  title: "Find and Replace Text Online — Free | Notepad AI",
  description: "Free online find and replace tool. Replace text with case-sensitive and regex options. See match counts live. Browser-only, no signup, 100% private.",
  keywords: "find and replace online, replace text online, find replace tool, bulk find replace, regex replace, text replace online",
  alternates: { canonical: "https://www.notepad-ai.online/tools/find-and-replace" },
  openGraph: {
    title: "Find and Replace Text Online — Free | Notepad AI",
    description: "Find and replace text with regex + case options. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/find-and-replace",
  },
};

const faqs = [
  { question: "How does find and replace work?", answer: "Type the text you want to find and the text to replace it with. The result updates live in the output panel, with a count of how many matches were found and replaced. Toggle case-sensitivity or regex mode for more control." },
  { question: "Is the find and replace tool free?", answer: "Yes — completely free, no signup, no login, no limits on text length." },
  { question: "What is regex mode?", answer: "Regex (regular expression) mode lets you match patterns instead of literal text. For example, \\d+ matches any sequence of digits, and \\s matches whitespace. When regex mode is off, your search text is matched literally (special characters are escaped automatically)." },
  { question: "Is my text private?", answer: "Yes. All find-and-replace happens in your browser. Nothing is uploaded, logged, or tracked." },
  { question: "Can I do case-sensitive replacement?", answer: "Yes — toggle 'Case-sensitive' on. When off, the search matches regardless of capitalization (e.g., 'Apple' and 'apple' both match)." },
  { question: "Does it work on large documents?", answer: "Yes. The tool handles documents of tens of thousands of words instantly, since all processing happens locally in your browser." },
  { question: "Can I use capture groups in regex replacements?", answer: "Yes. In regex mode you can reference capture groups in the replacement using $1, $2, etc. For example, find (\\w+)@(\\w+) and replace with $2.$1 to swap around an email-like pattern." },
];

export default function FindAndReplacePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Find and Replace", url: "https://www.notepad-ai.online/tools/find-and-replace" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Find and Replace"
        description="Free online find and replace tool with case-sensitive and regex options, live match counts. Browser-only."
        features={["Live find & replace", "Case-sensitive toggle", "Regex mode with capture groups", "Live match count", "Works offline", "No upload"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Find and Replace Tool Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Replace text with case-sensitive and regex options. Live match counts. Browser-only, no signup, 100% private.
          </p>
        </section>

        <FindAndReplaceTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">Find and replace</strong> swaps occurrences of one piece of text for another. Notepad AI&apos;s tool supports literal and regex matching,
            case-sensitivity, capture groups, and shows a live match count — all running in your browser with nothing uploaded.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/remove-extra-spaces" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Remove Extra Spaces →</h3>
              <p className="text-gray-400 text-sm">Clean up whitespace</p>
            </Link>
            <Link href="/tools/text-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Case Converter →</h3>
              <p className="text-gray-400 text-sm">6 case modes</p>
            </Link>
            <Link href="/tools/text-diff" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text Diff →</h3>
              <p className="text-gray-400 text-sm">Compare two texts</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Find and Replace FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Edit + Replace in One Tool</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
