import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import SentenceCaseConverterTool from "@/components/tools/SentenceCaseConverterTool";

export const metadata: Metadata = {
  title: "Sentence Case Converter Online — Free | Notepad AI",
  description: "Free online sentence case converter. Capitalize the first letter of each sentence. Perfect for body text. No signup, browser-only, 100% private.",
  keywords: "sentence case converter, capitalize sentence start, sentence case online, body text capitalization, first letter capitalize",
  alternates: { canonical: "https://www.notepad-ai.online/tools/sentence-case-converter" },
  openGraph: {
    title: "Sentence Case Converter Online — Free | Notepad AI",
    description: "Convert text to Sentence case instantly. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/sentence-case-converter",
  },
};

const faqs = [
  { question: "What is Sentence case?", answer: "Sentence case is a capitalization style where only the first letter of each sentence is uppercase. Everything else is lowercase. Example: 'This is sentence case. Each sentence starts with a capital.' It's the standard style for paragraphs, blog body text, and prose." },
  { question: "Is the sentence case converter free?", answer: "Yes — completely free, no signup, no login, no character limits." },
  { question: "How does it detect sentences?", answer: "Sentence boundaries are detected by sentence-ending punctuation (.!?) followed by whitespace. The first letter after each boundary is capitalized; everything else is lowercased." },
  { question: "What about proper nouns?", answer: "Proper nouns (names, places, brands) won't be capitalized by this tool unless they start a sentence. After conversion, manually capitalize any proper nouns. We may add proper-noun detection in a future update." },
  { question: "Is my text private?", answer: "Yes. All conversion happens in your browser. No data is uploaded or logged." },
  { question: "Sentence case vs Title Case — which should I use?", answer: "Sentence case for body text, paragraphs, descriptions, and most modern web copy (Google, Apple, GitHub all use Sentence case in their UI). Title Case for headlines, article titles, book names, and section headings." },
];

export default function SentenceCaseConverterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Sentence Case Converter", url: "https://www.notepad-ai.online/tools/sentence-case-converter" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Sentence Case Converter"
        description="Free online Sentence case converter. Capitalizes the first letter of each sentence in real-time."
        features={["Real-time conversion", "Sentence-boundary detection (.!?)", "Copy to clipboard", "Works offline", "No login required", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Sentence Case Converter Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Capitalize only the first letter of each sentence — perfect for body text, paragraphs, and modern web copy.
          </p>
        </section>

        <SentenceCaseConverterTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">sentence case converter</strong> capitalizes only the first letter of each sentence, lowering everything else. Notepad AI&apos;s converter detects sentences by punctuation (. ! ?) and runs entirely in your browser.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/title-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Title Case →</h3>
              <p className="text-gray-400 text-sm">Capitalize every word</p>
            </Link>
            <Link href="/tools/lowercase-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">lowercase →</h3>
              <p className="text-gray-400 text-sm">Convert to all lower</p>
            </Link>
            <Link href="/tools/text-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">All-in-One Converter →</h3>
              <p className="text-gray-400 text-sm">6 case modes in one tool</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Sentence Case Converter FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Need More Writing Tools?</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
