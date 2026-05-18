import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import TextCaseConverterTool from "@/components/tools/TextCaseConverterTool";

export const metadata: Metadata = {
  title: "Text Case Converter Online — Free | Notepad AI",
  description: "Free online text case converter. Convert text to UPPERCASE, lowercase, Title Case, Sentence case, aLtErNaTiNg, or iNVERSE — all in one tool. No signup, browser-only.",
  keywords: "text case converter, change case online, uppercase lowercase converter, title case converter, sentence case, case changer, online case tool",
  alternates: { canonical: "https://www.notepad-ai.online/tools/text-case-converter" },
  openGraph: {
    title: "Text Case Converter Online — Free | Notepad AI",
    description: "Convert text between 6 case styles in one tool. Free, no signup.",
    url: "https://www.notepad-ai.online/tools/text-case-converter",
  },
};

const faqs = [
  { question: "What is a text case converter?", answer: "A text case converter changes the capitalization style of a piece of text. Notepad AI's converter supports six modes: UPPERCASE, lowercase, Title Case, Sentence case, aLtErNaTiNg, and iNVERSE — switchable with one click." },
  { question: "Is the converter free?", answer: "Yes — completely free, no signup, no login, no limits on text length. Convert as much text as you like in any mode." },
  { question: "What's the difference between Title Case and Sentence case?", answer: "Title Case capitalizes the first letter of every word (e.g., 'Quick Brown Fox Jumps Over The Lazy Dog'). Sentence case capitalizes only the first letter of each sentence (e.g., 'Quick brown fox jumps over the lazy dog.'). Title Case is for headings and titles; Sentence case is for body text." },
  { question: "Does it handle small words in Title Case (a, an, the)?", answer: "The current Title Case implementation capitalizes every word. AP, MLA, and Chicago style guides each have different rules for which 'small words' stay lowercase — we don't apply any single house style. If you need strict style compliance, manually lowercase small words after conversion." },
  { question: "Is my text private?", answer: "Yes. All conversion happens in your browser. No data is uploaded, logged, or tracked." },
  { question: "Does the converter work offline?", answer: "Yes. After the page loads, the tool runs entirely in your browser. Works on planes, in airplane mode, anywhere offline." },
  { question: "What's iNVERSE case useful for?", answer: "iNVERSE swaps the case of every letter (uppercase becomes lowercase and vice versa). Useful for undoing accidental Caps Lock typos, or for stylistic effect in social media posts." },
  { question: "What's aLtErNaTiNg case?", answer: "aLtErNaTiNg case (sometimes called 'mocking SpongeBob case') alternates between lowercase and uppercase letter-by-letter. Popular for memes and ironic emphasis on social media." },
];

export default function TextCaseConverterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Text Case Converter", url: "https://www.notepad-ai.online/tools/text-case-converter" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Text Case Converter"
        description="Free online text case converter with 6 modes: UPPERCASE, lowercase, Title Case, Sentence case, alternating, and inverse."
        features={["6 case conversion modes", "Real-time conversion", "Copy to clipboard", "Works offline", "No login required", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Text Case Converter — All-in-One
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Convert your text between 6 case styles instantly. UPPERCASE, lowercase, Title Case, Sentence case, aLtErNaTiNg, iNVERSE. No signup. Browser-only.
          </p>
        </section>

        <TextCaseConverterTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">text case converter</strong> changes the capitalization of text between standard styles. Notepad AI&apos;s converter handles all six common cases in one tool, runs entirely in your browser, and never uploads your text.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Case Style Reference</h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Style</th>
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Example</th>
                  <th className="p-4 text-left text-gray-300 border border-gray-800">When to Use</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["UPPERCASE", "HELLO WORLD", "Headings, emphasis, acronyms"],
                  ["lowercase", "hello world", "Code identifiers, URLs, casual text"],
                  ["Title Case", "Hello World", "Article titles, headings, book names"],
                  ["Sentence case", "Hello world", "Standard body text, paragraphs"],
                  ["aLtErNaTiNg", "hElLo WoRlD", "Memes, ironic emphasis"],
                  ["iNVERSE", "hELLO wORLD", "Undo accidental Caps Lock, stylistic effect"],
                ].map((row) => (
                  <tr key={row[0]} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800 font-mono">{row[0]}</td>
                    <td className="p-4 text-blue-400 border border-gray-800 font-mono">{row[1]}</td>
                    <td className="p-4 text-gray-400 text-sm border border-gray-800">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Single-Mode Converters</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: "/tools/uppercase-converter", label: "UPPERCASE", desc: "Convert to all caps" },
              { href: "/tools/lowercase-converter", label: "lowercase", desc: "Convert to all lower" },
              { href: "/tools/title-case-converter", label: "Title Case", desc: "Capitalize every word" },
              { href: "/tools/sentence-case-converter", label: "Sentence case", desc: "Capitalize sentence starts" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <h3 className="text-blue-400 font-semibold mb-1">{item.label} →</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Text Case Converter FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Write + Convert in One Editor</h2>
          <p className="text-gray-400 mb-6">Open Notepad AI for a full editor with case conversion, counters, and AI assistance.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
