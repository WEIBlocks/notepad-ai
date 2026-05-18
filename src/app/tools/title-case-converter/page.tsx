import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import TitleCaseConverterTool from "@/components/tools/TitleCaseConverterTool";

export const metadata: Metadata = {
  title: "Title Case Converter Online — Free | Notepad AI",
  description: "Free online title case converter. Capitalize the first letter of every word — perfect for headlines, blog titles, book names. No signup, browser-only, 100% private.",
  keywords: "title case converter, capitalize words, title case online, headline case, capitalize each word, title case tool",
  alternates: { canonical: "https://www.notepad-ai.online/tools/title-case-converter" },
  openGraph: {
    title: "Title Case Converter Online — Free | Notepad AI",
    description: "Convert text to Title Case instantly. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/title-case-converter",
  },
};

const faqs = [
  { question: "What is Title Case?", answer: "Title Case is a capitalization style where the first letter of every word is uppercase, with the rest lowercase. Example: 'The Quick Brown Fox Jumps Over The Lazy Dog'. It's the standard style for book titles, article headlines, song names, and section headings." },
  { question: "Is the title case converter free?", answer: "Yes — completely free, no signup, no login, no character limits." },
  { question: "Does the converter follow AP, MLA, or Chicago style?", answer: "Our converter capitalizes every word, including 'small words' like 'a', 'an', 'the', 'of', 'in'. AP, MLA, and Chicago each have different rules for which small words stay lowercase. After converting, manually lowercase small words to match your house style if needed." },
  { question: "What's the difference between Title Case and Sentence case?", answer: "Title Case: 'Every Word Is Capitalized'. Sentence case: 'Only the first word and proper nouns are capitalized.' Use Title Case for titles and headings; use Sentence case for body text." },
  { question: "Is my text private?", answer: "Yes. All conversion happens in your browser. No data is uploaded or logged." },
  { question: "Does it work offline?", answer: "Yes. After the page loads, the tool runs entirely in your browser." },
  { question: "Why use Title Case instead of all uppercase?", answer: "Title Case is much easier to read than ALL UPPERCASE while still feeling 'titlelike'. UPPERCASE in titles can come across as shouting; Title Case is the standard professional convention." },
];

export default function TitleCaseConverterPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Title Case Converter", url: "https://www.notepad-ai.online/tools/title-case-converter" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Title Case Converter"
        description="Free online Title Case converter. Capitalizes the first letter of every word in real-time."
        features={["Real-time conversion", "Word-boundary detection", "Copy to clipboard", "Works offline", "No login required", "Privacy-first"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Title Case Converter Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Capitalize the first letter of every word — perfect for headlines, blog titles, book names, and section headings.
          </p>
        </section>

        <TitleCaseConverterTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">title case converter</strong> capitalizes the first letter of every word in your text. Notepad AI&apos;s converter handles this instantly in your browser — perfect for blog titles, headings, article names, song titles, and book covers.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/sentence-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Sentence case →</h3>
              <p className="text-gray-400 text-sm">Capitalize sentence starts only</p>
            </Link>
            <Link href="/tools/uppercase-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">UPPERCASE →</h3>
              <p className="text-gray-400 text-sm">Convert to all caps</p>
            </Link>
            <Link href="/tools/text-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">All-in-One Converter →</h3>
              <p className="text-gray-400 text-sm">6 case modes in one tool</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Title Case Converter FAQ</h2>
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
