import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import MarkdownToHtmlTool from "@/components/tools/MarkdownToHtmlTool";

export const metadata: Metadata = {
  title: "Markdown to HTML Converter Online — Free | Notepad AI",
  description: "Free online Markdown to HTML converter. Paste Markdown, get clean HTML instantly. Headings, bold, links, lists, code blocks. Browser-only, no signup, 100% private.",
  keywords: "markdown to html, convert markdown, markdown converter, md to html, markdown to html online, markdown html converter",
  alternates: { canonical: "https://www.notepad-ai.online/tools/markdown-to-html" },
  openGraph: {
    title: "Markdown to HTML Converter Online — Free | Notepad AI",
    description: "Convert Markdown to clean HTML instantly. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/markdown-to-html",
  },
};

const faqs = [
  { question: "What does this Markdown to HTML converter support?", answer: "It handles the common Markdown subset: headings (# through ######), bold (**text**), italic (*text*), inline code (`code`), fenced code blocks (```), links [text](url), images, unordered lists (-/*), ordered lists (1.), blockquotes (>), and horizontal rules (---)." },
  { question: "Is the converter free?", answer: "Yes — completely free, no signup, no login, no character limits." },
  { question: "Is my Markdown private?", answer: "Yes. All conversion happens in your browser. Nothing is uploaded, logged, or tracked — safe for converting private docs, drafts, or internal documentation." },
  { question: "Does it produce clean HTML?", answer: "Yes. The output is semantic HTML (h1-h6, p, strong, em, code, pre, ul/ol/li, blockquote, a, img, hr). Text is HTML-escaped to prevent injection, so the output is safe to use." },
  { question: "Does it work offline?", answer: "Yes. After the page loads, conversion runs entirely in your browser. Use it without an internet connection." },
  { question: "Is this a full CommonMark parser?", answer: "It's an intentionally lightweight converter covering the most common Markdown features. For 100% CommonMark/GFM edge-case compliance (nested lists, tables, footnotes), a dedicated library may handle more — but for typical Markdown documents this converts cleanly." },
  { question: "Can I convert README files?", answer: "Yes — paste the contents of a README.md and get the HTML equivalent. Great for previewing how docs will render or for pasting into a CMS that expects HTML." },
];

export default function MarkdownToHtmlPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Markdown to HTML", url: "https://www.notepad-ai.online/tools/markdown-to-html" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Markdown to HTML Converter"
        description="Free online Markdown to HTML converter. Converts headings, bold, italic, links, lists, code blocks, and more to clean semantic HTML in real-time."
        features={["Real-time Markdown to HTML", "Headings, bold, italic, code", "Links and images", "Lists (ordered + unordered)", "Code blocks + blockquotes", "Browser-only — private"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Markdown to HTML Converter
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Paste Markdown, get clean semantic HTML instantly. Headings, bold, links, lists, code blocks. Browser-only, no signup.
          </p>
        </section>

        <MarkdownToHtmlTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">Markdown to HTML converter</strong> transforms Markdown syntax into HTML markup. Notepad AI&apos;s converter handles headings, bold, italic,
            inline code, code blocks, links, images, lists, and blockquotes — producing clean, semantic, HTML-escaped output entirely in your browser. Nothing is uploaded.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/text-case-converter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Case Converter →</h3>
              <p className="text-gray-400 text-sm">6 case modes</p>
            </Link>
            <Link href="/tools/base64-encoder-decoder" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Base64 Encode/Decode →</h3>
              <p className="text-gray-400 text-sm">UTF-8 safe encoding</p>
            </Link>
            <Link href="/tools/find-and-replace" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Find and Replace →</h3>
              <p className="text-gray-400 text-sm">Replace text with regex</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Markdown to HTML FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Write Markdown in Notepad AI</h2>
          <p className="text-gray-400 mb-6">Draft in Markdown, convert to HTML, export to PDF or Docs — all in one private, browser-only notepad.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
