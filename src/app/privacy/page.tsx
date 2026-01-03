import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Privacy - How Notepad AI Protects Your Data | Notepad AI",
  description: "Learn how Notepad AI protects your privacy. All notes stored locally, zero tracking, no ads, no server uploads. Complete privacy by design.",
  keywords: "notepad ai privacy, privacy policy, data privacy, secure notepad, private notepad, no tracking notepad",
  alternates: {
    canonical: "https://www.notepad-ai.online/privacy"
  },
  openGraph: {
    title: "Privacy - How Notepad AI Protects Your Data",
    description: "All notes stored locally, zero tracking, no ads. Complete privacy by design.",
    url: "https://www.notepad-ai.online/privacy"
  }
};

export default function Privacy() {
  const privacyFeatures = [
    {
      icon: "🔒",
      title: "Local Storage Only",
      description: "All your notes are stored in your browser's local storage on your device. We don't have access to them, can't read them, and never store them on our servers."
    },
    {
      icon: "👁️",
      title: "Zero Tracking",
      description: "No analytics, no cookies tracking your behavior, no third-party scripts monitoring you. We literally don't know who you are or what you write."
    },
    {
      icon: "🚫",
      title: "No Ads",
      description: "No advertisements anywhere in Notepad AI. No ad networks tracking you to serve targeted ads."
    },
    {
      icon: "📧",
      title: "No Account Required",
      description: "No email, no password, no personal information collected. You're anonymous by default."
    },
    {
      icon: "🌐",
      title: "No Server Uploads",
      description: "When you write, nothing is sent to any server. All processing (including AI/NLP) happens locally in your browser."
    },
    {
      icon: "🗑️",
      title: "Easy Data Deletion",
      description: "Clear your browser's local storage anytime to delete all notes. You're in complete control."
    }
  ];

  const dataNotCollected = [
    "Your email address",
    "Your name",
    "Your location",
    "Your IP address (not logged)",
    "Your writing content",
    "Your browsing history",
    "Your device information",
    "Any personal identifiers"
  ];

  const sharedNotesInfo = [
    "The shared content is stored temporarily to generate the link",
    "Password-protected notes are encrypted before storage",
    "You can delete shared notes anytime",
    "We don't read or analyze shared content",
    "Sharing is optional — you never have to share anything"
  ];

  const faqs = [
    {
      question: "Where are my notes stored?",
      answer: "In your browser's local storage on your device. We never see or store them."
    },
    {
      question: "Do you track users?",
      answer: "No. We have zero tracking, zero analytics, zero cookies."
    },
    {
      question: "Is my data sold to third parties?",
      answer: "No. We don't have your data to sell. All notes stay on your device."
    },
    {
      question: "What happens when I share a note?",
      answer: "The content is stored temporarily to enable sharing. You can delete it anytime."
    },
    {
      question: "Are password-protected notes encrypted?",
      answer: "Yes, password-protected notes are encrypted before storage."
    },
    {
      question: "How do I delete my data?",
      answer: "Clear your browser's local storage for notepad-ai.online to delete all local notes."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Privacy", url: "https://www.notepad-ai.online/privacy" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Your Privacy at Notepad AI — Complete Protection by Design
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Zero tracking. Zero ads. Zero server storage. Your notes stay yours.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI</strong> is built with privacy as the foundation, not an afterthought.
            All notes are stored locally in your browser's storage — nothing is ever uploaded to our servers.
            We don't track you, we don't show ads, and we don't collect any personal data. This is privacy by design.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Writing Securely →
          </Link>
        </section>

        {/* Privacy Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Privacy Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What About Shared Notes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            What About Shared Notes?
          </h2>
          <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-gray-800 max-w-3xl mx-auto">
            <p className="text-gray-300 mb-6 text-center">
              When you share a note via link:
            </p>
            <ul className="space-y-3">
              {sharedNotesInfo.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <span className="text-blue-400 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Data We Don't Collect */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Data We Don't Collect
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {dataNotCollected.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 flex items-center gap-3">
                <span className="text-red-500">❌</span>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Privacy FAQ
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Link to Privacy Policy */}
        <section className="mb-16 text-center">
          <p className="text-gray-400 mb-4">For the full legal privacy policy, see:</p>
          <Link
            href="/privacy-policy"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Privacy Policy →
          </Link>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Write Privately?</h2>
          <p className="text-gray-400 mb-6">Take notes with complete privacy — no tracking, no ads, no data collection.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Writing →
          </Link>
        </section>
      </div>
    </>
  );
}
