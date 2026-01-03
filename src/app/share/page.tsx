import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Share Notes Online Free - Instant Text Sharing | Notepad AI",
  description: "Share notes online free with one click. Generate instant shareable links with optional password protection. No account needed. Share text, ideas, and documents easily.",
  keywords: "share notes online, share text online, share notes free, instant text sharing, share notepad online, shareable link generator, share notes link",
  alternates: {
    canonical: "https://www.notepad-ai.online/share"
  },
  openGraph: {
    title: "Share Notes Online Free - Instant Text Sharing",
    description: "Share notes online free with one click. Generate instant shareable links.",
    url: "https://www.notepad-ai.online/share"
  }
};

export default function Share() {
  const howToShare = [
    { step: "1", title: "Write Your Note", description: "Create or paste your content in Notepad AI" },
    { step: "2", title: "Click Share", description: "Click the Share button in the toolbar" },
    { step: "3", title: "Generate Link", description: "A unique shareable link is created instantly" },
    { step: "4", title: "Add Password (Optional)", description: "Protect sensitive notes with a password" },
    { step: "5", title: "Send the Link", description: "Share via email, message, social media, or any method" }
  ];

  const whyShare = [
    {
      icon: "⚡",
      title: "Instant Links",
      description: "Generate shareable links in one click — no waiting"
    },
    {
      icon: "🔒",
      title: "Password Protection",
      description: "Add optional password for sensitive content"
    },
    {
      icon: "📧",
      title: "No Account Needed",
      description: "Share without creating accounts — for you or recipients"
    },
    {
      icon: "🗑️",
      title: "Delete Anytime",
      description: "Remove shared notes whenever you want"
    },
    {
      icon: "📱",
      title: "Works Everywhere",
      description: "Recipients can view on any device with a browser"
    },
    {
      icon: "🆓",
      title: "Completely Free",
      description: "No limits on sharing — always free"
    }
  ];

  const useCases = [
    { icon: "📝", title: "Meeting Notes", description: "Share meeting summaries with team members instantly" },
    { icon: "💼", title: "Work Documents", description: "Send drafts or documents for quick review" },
    { icon: "📚", title: "Study Notes", description: "Share class notes with classmates" },
    { icon: "💡", title: "Ideas & Brainstorms", description: "Collaborate on ideas with colleagues" },
    { icon: "📋", title: "Lists & Instructions", description: "Share to-do lists, recipes, or how-to guides" }
  ];

  const faqs = [
    {
      question: "How long do shared notes last?",
      answer: "Shared notes remain available until you delete them. There's no automatic expiration."
    },
    {
      question: "Can I edit a note after sharing?",
      answer: "The shared version is a snapshot. To share updated content, create a new share link."
    },
    {
      question: "Is password protection secure?",
      answer: "Yes, password-protected notes are encrypted before storage. Only someone with the password can view them."
    },
    {
      question: "Can recipients edit the shared note?",
      answer: "Shared notes are view-only. Recipients can copy the content but cannot edit the original."
    },
    {
      question: "Do recipients need an account?",
      answer: "No, anyone with the link (and password if set) can view the note without creating an account."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Share", url: "https://www.notepad-ai.online/share" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Share Notes Online — Free & Instant
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Generate shareable links in one click. No account required.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI's note sharing</strong> feature lets you share any note with anyone instantly.
            Generate a unique link with one click, optionally add password protection, and send it via email, message, or any method.
            Recipients don't need an account — they just click and view. It's the fastest, simplest way to share text online.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Sharing Notes →
          </Link>
        </section>

        {/* How to Share Notes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How to Share Notes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howToShare.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Use Notepad AI for Sharing */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Why Use Notepad AI for Sharing
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyShare.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sharing Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Sharing Use Cases
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {useCases.slice(0, 3).map((useCase, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 flex items-start gap-3">
                <span className="text-2xl">{useCase.icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-4 max-w-2xl mx-auto">
            {useCases.slice(3).map((useCase, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 flex items-start gap-3">
                <span className="text-2xl">{useCase.icon}</span>
                <div>
                  <h3 className="text-white font-semibold">{useCase.title}</h3>
                  <p className="text-gray-400 text-sm">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Share Notes FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Share Notes FAQ
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

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Share?</h2>
          <p className="text-gray-400 mb-6">Share notes instantly with anyone — no signup required.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Open Notepad AI →
          </Link>
        </section>
      </div>
    </>
  );
}
