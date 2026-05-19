import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, SoftwareApplicationSchema, FAQSchema } from "@/components/seo/SchemaMarkup";
import PasswordGeneratorTool from "@/components/tools/PasswordGeneratorTool";

export const metadata: Metadata = {
  title: "Strong Password Generator — Free, Secure | Notepad AI",
  description: "Free secure password generator. Customize length, character types, exclude similar characters. Crypto-secure random generation. Browser-only — nothing sent to servers.",
  keywords: "password generator, strong password generator, secure password, random password, password creator, password maker, free password tool",
  alternates: { canonical: "https://www.notepad-ai.online/tools/password-generator" },
  openGraph: {
    title: "Strong Password Generator — Free, Secure | Notepad AI",
    description: "Crypto-secure passwords generated in your browser. No upload.",
    url: "https://www.notepad-ai.online/tools/password-generator",
  },
};

const faqs = [
  { question: "Is this password generator secure?", answer: "Yes — it uses the browser's crypto.getRandomValues() API, which provides cryptographically secure random numbers. The generated passwords are never sent to any server, logged, or stored. Each password lives only in your browser tab until you copy it." },
  { question: "What makes a password strong?", answer: "Length + character variety + unpredictability. NIST guidelines recommend at least 12 characters with mixed case, numbers, and symbols. The strength meter on this page estimates entropy: passwords above 60 bits of entropy are 'Strong' and resist offline brute-force attacks for years." },
  { question: "Should I exclude similar characters (i, l, 1, L, o, 0, O)?", answer: "Optional. Excluding them helps when you might need to type the password from a printout or read it aloud, where 'l' and '1' or 'O' and '0' are easily confused. For passwords you'll only copy-paste, leave them in for maximum entropy." },
  { question: "Is the password I generate private?", answer: "Completely. Generation happens entirely in your browser using built-in crypto APIs. No data leaves your device. The page has no analytics on generated passwords." },
  { question: "How long should my password be?", answer: "For most accounts: 16-20 characters with all character types. For very high-security accounts (banking, password manager master): 24+ characters. For PINs or codes you'll memorize: shorter passwords with a longer passphrase strategy may be more practical." },
  { question: "Can I generate multiple passwords at once?", answer: "Click 'Generate New' repeatedly to produce as many as you need. Each click creates a fresh password using new cryptographic randomness." },
  { question: "Should I reuse this password across accounts?", answer: "Never. Every account should have a unique password. Use a password manager (Bitwarden, 1Password, KeePass) to store them. This tool generates the passwords; the manager holds them securely." },
  { question: "What if my service rejects certain symbols?", answer: "Some sites disallow specific symbols. Turn off 'Symbols' in the settings, or generate and edit by hand to remove unsupported characters. The strength meter will update to reflect the actual entropy of the modified password." },
];

export default function PasswordGeneratorPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Tools", url: "https://www.notepad-ai.online/tools" },
        { name: "Password Generator", url: "https://www.notepad-ai.online/tools/password-generator" },
      ]} />
      <FAQSchema faqs={faqs} />
      <SoftwareApplicationSchema
        name="Notepad AI Password Generator"
        description="Free strong password generator using cryptographically secure randomness. Customizable length and character types."
        features={["Cryptographically secure (crypto.getRandomValues)", "Length 6-64 characters", "Toggle uppercase / lowercase / numbers / symbols", "Exclude similar characters option", "Real-time strength meter", "Browser-only — no upload"]}
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Free Strong Password Generator
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Cryptographically secure passwords generated entirely in your browser. Customize length, character types, exclude lookalikes. Never uploaded.
          </p>
        </section>

        <PasswordGeneratorTool />

        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            A <strong className="text-white">strong password generator</strong> creates random passwords using cryptographically secure randomness. Notepad AI&apos;s generator uses the browser-native <code className="text-blue-400">crypto.getRandomValues()</code> API, supports passwords up to 64 characters, lets you mix character types, and never transmits anything off your device.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Password Strength Reference</h2>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Length & Mix</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Entropy</th>
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Time to Crack (offline)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["8 chars, lowercase only", "~38 bits", "Hours"],
                  ["8 chars, mixed", "~52 bits", "Days"],
                  ["12 chars, mixed", "~78 bits", "Centuries"],
                  ["16 chars, mixed", "~104 bits", "Effectively unbreakable"],
                  ["20 chars, mixed", "~130 bits", "Effectively unbreakable"],
                ].map((row) => (
                  <tr key={row[0]} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800 font-medium">{row[0]}</td>
                    <td className="p-4 text-center text-blue-400 border border-gray-800 font-mono">{row[1]}</td>
                    <td className="p-4 text-gray-400 text-sm border border-gray-800">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2 text-center">Crack times assume 1 trillion guesses/sec offline attack on a leaked hash database.</p>
          </div>
        </section>

        {/* Comparison Table — GEO Law 4 */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Password Generator Comparison (2026)</h2>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6">
            Notepad AI vs popular password generators. Verified 2026.
          </p>
          <div className="overflow-x-auto bg-[#1A1A1A] rounded-2xl border border-gray-800/50">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-900/30 to-purple-900/30">
                  <th className="p-4 text-left text-gray-300 border-b border-gray-800 font-semibold">Generator</th>
                  <th className="p-4 text-center text-gray-300 border-b border-gray-800 font-semibold">No Signup</th>
                  <th className="p-4 text-center text-gray-300 border-b border-gray-800 font-semibold">Browser-Only</th>
                  <th className="p-4 text-center text-gray-300 border-b border-gray-800 font-semibold">crypto.getRandomValues</th>
                  <th className="p-4 text-center text-gray-300 border-b border-gray-800 font-semibold">Length to 64+</th>
                  <th className="p-4 text-center text-gray-300 border-b border-gray-800 font-semibold">Strength Meter</th>
                  <th className="p-4 text-center text-gray-300 border-b border-gray-800 font-semibold">Free Forever</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ["Notepad AI Password Gen", "✅", "✅", "✅", "✅ (6-64)", "✅", "✅"],
                  ["Bitwarden Password Gen", "✅", "✅", "✅", "✅ (5-128)", "❌", "✅"],
                  ["1Password Generator", "✅", "✅", "✅", "✅", "❌", "Freemium"],
                  ["F-Secure Generator", "✅", "✅", "Likely", "✅", "❌", "✅"],
                  ["StrongPasswordGenerator.org", "✅", "Unknown", "Unknown", "✅", "⚠️ Basic", "✅"],
                  ["Bitdefender Generator", "✅", "Likely", "Unknown", "✅", "❌", "✅"],
                ].map((row, i) => (
                  <tr key={i} className={`hover:bg-[#0f0f0f] ${i === 0 ? "bg-blue-900/10" : ""}`}>
                    <td className={`p-4 border-b border-gray-800/50 font-medium ${i === 0 ? "text-white" : "text-gray-300"}`}>{row[0]}</td>
                    {row.slice(1).map((cell, j) => (
                      <td key={j} className="p-4 text-center border-b border-gray-800/50 text-sm">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            Comparison last verified 2026-05-18. The unique angle: Notepad AI is the only one paired with a full-feature notepad.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/tools/base64-encoder-decoder" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Base64 Encode/Decode →</h3>
              <p className="text-gray-400 text-sm">Encode strings, hashes, tokens</p>
            </Link>
            <Link href="/password-protect" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Password Protect Notes →</h3>
              <p className="text-gray-400 text-sm">Encrypt shared notes</p>
            </Link>
            <Link href="/tools/lorem-ipsum-generator" className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors">
              <h3 className="text-blue-400 font-semibold mb-1">Lorem Ipsum →</h3>
              <p className="text-gray-400 text-sm">Placeholder text generator</p>
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Password Generator FAQ</h2>
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
          <h2 className="text-2xl font-bold text-white mb-4">Store Sensitive Notes Securely</h2>
          <p className="text-gray-400 mb-6">Notepad AI keeps your notes local with optional password protection on shared notes. Pair it with this generator for end-to-end security.</p>
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300">
            Open Notepad AI — Free →
          </Link>
        </section>
      </div>
    </>
  );
}
