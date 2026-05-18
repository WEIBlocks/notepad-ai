import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import LowercaseConverterTool from "@/components/tools/LowercaseConverterTool";

export const metadata: Metadata = {
  title: "Lowercase Converter Online — Free | Notepad AI",
  description: "Free online lowercase converter. Convert any text to all lowercase letters instantly. Useful for URLs, code, casual text. No signup, browser-only.",
  keywords: "lowercase converter, convert to lowercase, all lowercase, text to lowercase, lowercase online, lower case converter",
  alternates: { canonical: "https://www.notepad-ai.online/tools/lowercase-converter" },
  openGraph: {
    title: "Lowercase Converter Online — Free | Notepad AI",
    description: "Convert text to all lowercase instantly. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/lowercase-converter",
  },
};

const faqs = [
  { question: "How do I convert text to lowercase?", answer: "Paste your text into the input box and the lowercase result appears instantly in the output. Click Copy when you're ready." },
  { question: "Is the lowercase converter free?", answer: "Yes — completely free, no signup, no login, no limits." },
  { question: "When is lowercase appropriate?", answer: "Lowercase is the natural body-text case in English. It's also required for code identifiers in some languages (variable_name, css-class), most URLs, and email addresses. Use lowercase for casual social media tone." },
  { question: "Does it preserve punctuation and numbers?", answer: "Yes. Only letters are converted (A → a, B → b, etc.). Numbers, punctuation, symbols, and whitespace stay exactly as-is." },
  { question: "Is my text private?", answer: "Yes. All conversion happens in your browser — no data is uploaded, logged, or tracked." },
  { question: "Why use this instead of typing in lowercase?", answer: "When you have existing text in mixed case (e.g., text copied from a source, accidentally typed with Caps Lock on), this tool converts it all at once. Faster than retyping." },
];

export default function LowercaseConverterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Lowercase Converter", url: "https://www.notepad-ai.online/tools/lowercase-converter" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Lowercase Converter"
        description="Free online lowercase converter. Converts any text to all lowercase letters in real-time."
        features={["Real-time conversion", "Copy to clipboard", "Works offline", "No login required", "Privacy-first", "Unlimited text length"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free lowercase Converter Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Convert any text to all lowercase instantly. Useful for URLs, code, casual writing. No signup, no login.
          </p>
        </section>

        <LowercaseConverterTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">lowercase converter</strong> changes every letter in your text to its small-case form (A → a, B → b, etc.). Notepad AI&apos;s lowercase converter runs entirely in your browser. Useful for fixing accidental Caps Lock, normalizing URLs, or matching casual social media tone.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/uppercase-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">UPPERCASE →</h3>
              <p className="text-gray-400 text-sm">Convert to all caps</p>
            </Link>
            <Link href="/tools/sentence-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Sentence case →</h3>
              <p className="text-gray-400 text-sm">Capitalize sentence starts</p>
            </Link>
            <Link href="/tools/text-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">All-in-One Converter →</h3>
              <p className="text-gray-400 text-sm">6 case modes in one tool</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Lowercase Converter FAQ</h2>
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
