import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Notepad AI",
  description: "Answers to common questions about Notepad AI. Learn about features, privacy, offline mode, sharing, and more. Get help with our free AI-powered notepad.",
  keywords: "notepad ai faq, notepad ai help, notepad ai questions, online notepad help, notepad ai support, frequently asked questions",
  alternates: {
    canonical: "https://www.notepad-ai.online/faq"
  },
  openGraph: {
    title: "FAQ - Frequently Asked Questions",
    description: "Answers to common questions about Notepad AI. Learn about features, privacy, and more.",
    url: "https://www.notepad-ai.online/faq"
  }
};

export default function FAQ() {
  const generalFaqs = [
    {
      question: "What is Notepad AI?",
      answer: "Notepad AI is a free, AI-powered online notepad with Natural Language Processing (NLP) features. It works in your browser, requires no account, saves automatically, and keeps all your data private."
    },
    {
      question: "Is Notepad AI free?",
      answer: "Yes, Notepad AI is completely free. There are no premium tiers, no hidden fees, and no features locked behind paywalls. Free forever."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account is required. Just open the website and start writing. No email, no password, no personal information needed."
    },
    {
      question: "Does Notepad AI work offline?",
      answer: "Yes, after your first visit, Notepad AI works completely offline. It's a Progressive Web App (PWA) that caches itself on your device."
    }
  ];

  const privacyFaqs = [
    {
      question: "Where are my notes stored?",
      answer: "All notes are stored in your browser's local storage on your device. We don't have access to your notes and never store them on our servers."
    },
    {
      question: "Do you track users or collect data?",
      answer: "No. We have zero tracking, zero analytics, zero cookies. We don't know who you are or what you write."
    },
    {
      question: "Is my writing sent to AI servers?",
      answer: "No. All AI/NLP processing happens locally in your browser. Your writing never leaves your device."
    },
    {
      question: "How do I delete my data?",
      answer: "Clear your browser's local storage for notepad-ai.online to delete all local notes. You're in complete control."
    }
  ];

  const featureFaqs = [
    {
      question: "How does autosave work?",
      answer: "Notepad AI saves your work automatically as you type. Every keystroke is saved to your browser's local storage within milliseconds."
    },
    {
      question: "Can I export my notes?",
      answer: "Yes, you can export notes to PDF, Docs (DOCX), or copy to clipboard. All export features are free."
    },
    {
      question: "How do I share a note?",
      answer: "Click the Share button to generate a unique link. Optionally add password protection for sensitive content."
    },
    {
      question: "What AI features does it have?",
      answer: "Notepad AI uses NLP to analyze your writing, detect patterns, count words/characters, and provide insights — all locally and privately."
    }
  ];

  const technicalFaqs = [
    {
      question: "What browsers are supported?",
      answer: "Notepad AI works on all modern browsers: Chrome, Firefox, Safari, Edge, and their mobile versions."
    },
    {
      question: "Does it work on mobile devices?",
      answer: "Yes, Notepad AI is fully responsive and works on phones, tablets, and desktops."
    },
    {
      question: "Can I install it as an app?",
      answer: "Yes, Notepad AI is a PWA. On mobile, use 'Add to Home Screen'. On desktop, use your browser's install option."
    },
    {
      question: "What if I clear my browser cache?",
      answer: "Notes are stored in localStorage, separate from cache. Clearing cache won't delete notes, but clearing all site data will."
    }
  ];

  // Combine all FAQs for schema
  const allFaqs = [...generalFaqs, ...privacyFaqs, ...featureFaqs, ...technicalFaqs];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "FAQ", url: "https://www.notepad-ai.online/faq" }
      ]} />
      <FAQSchema faqs={allFaqs} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to know about Notepad AI.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Try Notepad AI →
          </Link>
        </section>

        {/* General Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-blue-400">📝</span> General Questions
          </h2>
          <div className="space-y-4">
            {generalFaqs.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-green-400">🔒</span> Privacy Questions
          </h2>
          <div className="space-y-4">
            {privacyFaqs.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-purple-400">✨</span> Feature Questions
          </h2>
          <div className="space-y-4">
            {featureFaqs.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-orange-400">⚙️</span> Technical Questions
          </h2>
          <div className="space-y-4">
            {technicalFaqs.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 mb-6">We'd love to hear from you.</p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Contact Us →
          </Link>
        </section>
      </div>
    </>
  );
}
