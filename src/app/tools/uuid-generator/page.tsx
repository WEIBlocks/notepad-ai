import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import UuidGeneratorTool from "@/components/tools/UuidGeneratorTool";

export const metadata: Metadata = {
  title: "UUID Generator Online — Free v4 UUIDs | Notepad AI",
  description: "Free online UUID generator. Generate up to 100 cryptographically random UUID v4 identifiers instantly. Uppercase, no-hyphen options. Browser-only, no signup.",
  keywords: "uuid generator, guid generator, uuid v4, random uuid, online uuid, generate uuid, unique identifier generator",
  alternates: { canonical: "https://www.notepad-ai.online/tools/uuid-generator" },
  openGraph: {
    title: "UUID Generator Online — Free v4 UUIDs | Notepad AI",
    description: "Generate cryptographically random UUID v4s instantly. Free, browser-only.",
    url: "https://www.notepad-ai.online/tools/uuid-generator",
  },
};

const faqs = [
  { question: "What is a UUID?", answer: "A UUID (Universally Unique Identifier), also called a GUID, is a 128-bit identifier formatted as 32 hexadecimal digits in five groups separated by hyphens (8-4-4-4-12). UUID v4 — the type this tool generates — is randomly generated, making collisions astronomically unlikely (you'd need to generate billions per second for decades to risk one)." },
  { question: "Is the UUID generator free?", answer: "Yes — completely free, no signup, no login. Generate up to 100 UUIDs at once, as many times as you like." },
  { question: "Are these UUIDs cryptographically secure?", answer: "Yes. The generator uses the browser-native crypto.randomUUID() API (with a crypto.getRandomValues fallback), which provides cryptographically strong randomness. UUIDs are never sent to any server." },
  { question: "What's the difference between UUID v4 and other versions?", answer: "UUID v4 is fully random. v1 is time-and-MAC-address-based (can leak info). v3/v5 are hash-based (deterministic from a name). v4 is the most common for general use because it's random and requires no input." },
  { question: "Can I generate UUIDs without hyphens?", answer: "Yes — toggle 'Include hyphens' off to get a 32-character hex string with no dashes. Useful for database keys or URL slugs where hyphens are inconvenient." },
  { question: "Is my data private?", answer: "Yes. All UUID generation happens in your browser using built-in crypto APIs. Nothing is uploaded, logged, or tracked." },
  { question: "What are UUIDs used for?", answer: "Database primary keys, distributed system identifiers, API request IDs, session tokens, file names that must not collide, and anywhere you need a unique identifier without a central coordinator handing out sequential IDs." },
];

export default function UuidGeneratorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "UUID Generator", url: "https://www.notepad-ai.online/tools/uuid-generator" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI UUID Generator"
        description="Free online UUID v4 generator using crypto.randomUUID(). Generate up to 100 cryptographically random identifiers with uppercase and no-hyphen options."
        features={["UUID v4 (cryptographically random)", "Generate 1-100 at once", "Uppercase option", "No-hyphen option", "crypto.randomUUID() based", "Browser-only — no upload"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free UUID Generator Online (v4)
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Generate up to 100 cryptographically random UUID v4 identifiers instantly. Uppercase and no-hyphen options. Browser-only, no signup.
          </p>
        </section>

        <UuidGeneratorTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">UUID generator</strong> creates Universally Unique Identifiers — 128-bit values formatted as 32 hex digits in the 8-4-4-4-12 pattern.
            Notepad AI&apos;s generator produces <strong className="text-white">UUID v4</strong> (fully random) using the browser-native <code className="text-blue-400">crypto.randomUUID()</code> API. Generate up to 100 at once, never uploaded.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/password-generator" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Password Generator →</h3>
              <p className="text-gray-400 text-sm">Crypto-secure passwords</p>
            </Link>
            <Link href="/tools/base64-encoder-decoder" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Base64 Encode/Decode →</h3>
              <p className="text-gray-400 text-sm">UTF-8 safe encoding</p>
            </Link>
            <Link href="/tools/lorem-ipsum-generator" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Lorem Ipsum →</h3>
              <p className="text-gray-400 text-sm">Placeholder text</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">UUID Generator FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">More Developer Tools in Notepad AI</h2>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
