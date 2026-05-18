import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import LoremIpsumTool from "@/components/tools/LoremIpsumTool";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator — Free, Customizable | Notepad AI",
  description: "Free online lorem ipsum generator. Choose paragraph count, sentence length, and whether to start with the classic 'Lorem ipsum dolor sit amet'. Copy with one click.",
  keywords: "lorem ipsum generator, lorem ipsum text, dummy text generator, placeholder text, lipsum generator, fake text, lorem ipsum copy",
  alternates: { canonical: "https://www.notepad-ai.online/tools/lorem-ipsum-generator" },
  openGraph: {
    title: "Lorem Ipsum Generator — Free, Customizable | Notepad AI",
    description: "Generate placeholder text with custom paragraph and sentence counts.",
    url: "https://www.notepad-ai.online/tools/lorem-ipsum-generator",
  },
};

const faqs = [
  { question: "What is Lorem Ipsum?", answer: "Lorem Ipsum is placeholder text derived from a scrambled passage of Cicero's 1st-century BC De finibus bonorum et malorum. Designers and developers have used it since the 1500s to mock up layouts before final copy is ready. It's preferred over English placeholder because its random shape doesn't distract reviewers with readable content." },
  { question: "Is the lorem ipsum generator free?", answer: "Yes — completely free, no signup, no login, no limits on generation count." },
  { question: "How does the generator pick words?", answer: "It draws from a curated pool of ~160 classic lorem ipsum words and randomly assembles sentences of 6-14 words. Optionally, the first paragraph can start with the canonical 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' opening." },
  { question: "Can I generate different amounts of text?", answer: "Yes — adjust the 'Paragraphs' slider (1-20) and 'Sentences per paragraph' slider (1-15) to get anywhere from one short sentence to a 300-sentence document." },
  { question: "Is the generated text the same every time?", answer: "No — every click of 'Generate New' produces a fresh randomized variation. The configuration controls the size, not the exact words." },
  { question: "Is this text safe to use in production by mistake?", answer: "It's pseudo-Latin and clearly recognizable as placeholder. If accidentally left in a production page, it's obvious — unlike if you'd used real English copy. That's the main historical reason it's preferred." },
  { question: "Does it work offline?", answer: "Yes. After the page loads, generation runs entirely in your browser." },
  { question: "Is it really Latin?", answer: "It's based on Latin but heavily scrambled. The first line is real Cicero, but most generated text is jumbled. It looks Latin-like but isn't readable Latin prose." },
];

export default function LoremIpsumPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Lorem Ipsum Generator", url: "https://www.notepad-ai.online/tools/lorem-ipsum-generator" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Lorem Ipsum Generator"
        description="Free customizable lorem ipsum placeholder text generator. Choose paragraph count, sentence length, and starting phrase."
        features={["Customizable paragraph count (1-20)", "Customizable sentences per paragraph (1-15)", "Optional canonical opening", "One-click regenerate", "Copy to clipboard", "Works offline"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Lorem Ipsum Generator
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Generate placeholder text with full control over paragraph and sentence count. Copy with one click. Browser-only.
          </p>
        </section>

        <LoremIpsumTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">lorem ipsum generator</strong> produces pseudo-Latin placeholder text that designers and developers use to fill layouts before real copy is ready. Notepad AI&apos;s generator lets you control paragraph count (1-20) and sentences-per-paragraph (1-15), and optionally starts with the canonical &quot;Lorem ipsum dolor sit amet&quot; opening.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Common Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "🎨", title: "UI / web design mockups", desc: "Fill text fields in Figma, Sketch, or Webflow before final copy is written." },
              { icon: "📐", title: "Wireframe placeholders", desc: "Show clients what an article or product description will look like at length." },
              { icon: "📰", title: "Layout testing", desc: "Stress-test text overflow, line-height, and typography at realistic body length." },
              { icon: "🛠️", title: "Demo / sandbox content", desc: "Seed content management systems with realistic-shaped articles for testing." },
            ].map((item) => (
              <div key={item.title} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/word-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Word Counter →</h3>
              <p className="text-gray-400 text-sm">Count generated word totals</p>
            </Link>
            <Link href="/tools/paragraph-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Paragraph Counter →</h3>
              <p className="text-gray-400 text-sm">Count paragraphs in any text</p>
            </Link>
            <Link href="/tools/password-generator" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Password Generator →</h3>
              <p className="text-gray-400 text-sm">Crypto-secure passwords</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Lorem Ipsum FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Write Real Copy in Notepad AI</h2>
          <p className="text-gray-400 mb-6">When placeholder time is over and you&apos;re ready to write the real thing, Notepad AI has live counters, AI assist, and PDF export.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
