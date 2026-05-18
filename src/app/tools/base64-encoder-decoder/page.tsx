import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import Base64Tool from "@/components/tools/Base64Tool";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder Online — Free | Notepad AI",
  description: "Free online Base64 encoder and decoder. Encode any UTF-8 text to Base64 or decode Base64 back to text. Browser-only — your data is never uploaded.",
  keywords: "base64 encoder, base64 decoder, base64 online, encode base64, decode base64, base64 converter, base64 to text",
  alternates: { canonical: "https://www.notepad-ai.online/tools/base64-encoder-decoder" },
  openGraph: {
    title: "Base64 Encoder & Decoder Online — Free | Notepad AI",
    description: "Encode and decode Base64 with full UTF-8 support. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/base64-encoder-decoder",
  },
};

const faqs = [
  { question: "What is Base64?", answer: "Base64 is a binary-to-text encoding that represents binary data using 64 printable ASCII characters (A-Z, a-z, 0-9, +, /). It's widely used to embed binary data (images, files, encryption keys) in text-only contexts like JSON, email (MIME), URLs, or HTTP headers." },
  { question: "Is the encoder free?", answer: "Yes — completely free, no signup, no login, no limits on text length." },
  { question: "Does it handle Unicode and emoji?", answer: "Yes. The encoder uses TextEncoder/TextDecoder for proper UTF-8 handling, so non-ASCII characters (emoji, Chinese, Cyrillic, etc.) encode and decode correctly." },
  { question: "Is my data private?", answer: "Yes. All encoding and decoding happens in your browser using built-in atob/btoa APIs. Nothing is uploaded, logged, or transmitted to any server." },
  { question: "What happens if I paste invalid Base64?", answer: "The decoder returns an error message ('Invalid Base64 input') if the input isn't well-formed Base64. Common issues: extra spaces, invalid characters, or missing padding (=)." },
  { question: "Why is Base64 longer than the original text?", answer: "Base64 encodes every 3 bytes of input as 4 characters of output — a ~33% size increase. This is the cost of using only 6 bits per character (vs 8 bits in raw binary). Worth it when you need to embed binary in text-only formats." },
  { question: "Is Base64 a form of encryption?", answer: "No. Base64 is encoding, not encryption — anyone can decode it without a key. Don't use Base64 to 'hide' sensitive data. It's only useful for safe transport through text-only channels." },
  { question: "When should I use Base64?", answer: "Common use cases: embedding small images in CSS/HTML data URIs, encoding binary attachments in email (MIME), passing tokens/keys in URLs, fitting binary data into JSON, and avoiding line-break issues in HTTP headers or auth tokens." },
];

export default function Base64Page() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Base64 Encoder/Decoder", url: "https://www.notepad-ai.online/tools/base64-encoder-decoder" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Base64 Encoder & Decoder"
        description="Free Base64 encoder and decoder with full UTF-8 support. Encode text to Base64 or decode Base64 back to UTF-8 text."
        features={["Real-time encode/decode", "Full UTF-8 support (emoji, Chinese, Cyrillic)", "Switch modes with one click", "Browser-only — no upload", "Invalid input handling", "Works offline"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Base64 Encoder & Decoder Online
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Encode UTF-8 text to Base64 or decode Base64 back to text. Real-time, browser-only, full Unicode support.
          </p>
        </section>

        <Base64Tool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">Base64</strong> is a binary-to-text encoding that represents data using only 64 printable ASCII characters (A-Z, a-z, 0-9, +, /). Used to embed binary data in JSON, email (MIME), URLs, and other text-only contexts. Notepad AI&apos;s encoder/decoder supports full UTF-8, runs in your browser, and never uploads your data.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Common Use Cases</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "🖼️", title: "Data URI images in CSS / HTML", desc: "Embed small images inline (data:image/png;base64,...) to skip an HTTP request." },
              { icon: "🔑", title: "API tokens & keys in URLs", desc: "Safely pass binary tokens through URL query strings without breaking on special characters." },
              { icon: "📧", title: "Email attachments (MIME)", desc: "Email protocols only handle ASCII — attachments must be Base64-encoded for transport." },
              { icon: "🔐", title: "JWT inspection", desc: "Decode the payload portion of JSON Web Tokens to inspect their contents during debugging." },
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
            <Link href="/tools/password-generator" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Password Generator →</h3>
              <p className="text-gray-400 text-sm">Crypto-secure passwords</p>
            </Link>
            <Link href="/tools/character-counter" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Character Counter →</h3>
              <p className="text-gray-400 text-sm">Count Base64 length</p>
            </Link>
            <Link href="/tools/text-reverser" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Text Reverser →</h3>
              <p className="text-gray-400 text-sm">Reverse strings</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Base64 Encoder/Decoder FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Work with Encoded Data in Notepad AI</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
