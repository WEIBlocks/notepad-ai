import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import UppercaseConverterTool from "@/components/tools/UppercaseConverterTool";

export const metadata: Metadata = {
  title: "Uppercase Converter Online — Free | Notepad AI",
  description: "Free online uppercase converter. Convert any text to ALL CAPS instantly. No signup, no login, works in any browser, 100% private.",
  keywords: "uppercase converter, convert to uppercase, all caps converter, caps lock text, uppercase online, text to capitals",
  alternates: { canonical: "https://www.notepad-ai.online/tools/uppercase-converter" },
  openGraph: {
    title: "Uppercase Converter Online — Free | Notepad AI",
    description: "Convert text to UPPERCASE instantly. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/uppercase-converter",
  },
};

const faqs = [
  { question: "How do I convert text to uppercase?", answer: "Paste your text into the input box above and the uppercase result appears instantly in the output panel. Click Copy to copy the result. No buttons, no waiting." },
  { question: "Is the uppercase converter free?", answer: "Yes — completely free, no signup, no login, no limits on text length." },
  { question: "When should I use UPPERCASE?", answer: "UPPERCASE is appropriate for headings, acronyms (NASA, FBI, HTML), constants in code, emphasis in short bursts, and warning labels. Avoid in body text — UPPERCASE is harder to read and reads as shouting in digital communication." },
  { question: "Does it work offline?", answer: "Yes. After page load, all conversion happens in your browser. Works without internet." },
  { question: "Is my text private?", answer: "Yes. The converter runs entirely on your device. No data is uploaded, logged, or analyzed." },
  { question: "How is this different from pressing Caps Lock?", answer: "Caps Lock only affects what you type next. This tool converts existing text — useful when you've already typed something in mixed case and want to convert it all at once." },
];

export default function UppercaseConverterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Uppercase Converter", url: "https://www.notepad-ai.online/tools/uppercase-converter" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Uppercase Converter"
        description="Free online uppercase converter. Converts any text to ALL CAPS in real-time."
        features={["Real-time conversion", "Copy to clipboard", "Works offline", "No login required", "Privacy-first", "Unlimited text length"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free UPPERCASE Converter Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Convert any text to ALL CAPS instantly. Paste, see, copy. No signup, no login, 100% private.
          </p>
        </section>

        <UppercaseConverterTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            An <strong className="text-white">uppercase converter</strong> converts every letter in your text to its capital form (a → A, b → B, etc.). Notepad AI&apos;s uppercase converter runs entirely in your browser — paste any text and the result appears instantly.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/lowercase-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">lowercase →</h3>
              <p className="text-gray-400 text-sm">Convert to all lowercase</p>
            </Link>
            <Link href="/tools/title-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Title Case →</h3>
              <p className="text-gray-400 text-sm">Capitalize every word</p>
            </Link>
            <Link href="/tools/text-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">All-in-One Converter →</h3>
              <p className="text-gray-400 text-sm">6 case modes in one tool</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Uppercase Converter FAQ</h2>
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
