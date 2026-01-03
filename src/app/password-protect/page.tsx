import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Password Protect Notes - Secure Note Encryption | Notepad AI",
  description: "Password protect your notes for free. Encrypt shared notes with a password so only authorized people can view them. Secure, private note sharing with encryption.",
  keywords: "password protect notes, encrypt notes, secure notes, password protected notepad, encrypted notepad, secure text sharing, protected notes",
  alternates: {
    canonical: "https://www.notepad-ai.online/password-protect"
  },
  openGraph: {
    title: "Password Protect Notes - Secure Note Encryption",
    description: "Password protect your notes for free. Encrypt shared notes with secure encryption.",
    url: "https://www.notepad-ai.online/password-protect"
  }
};

export default function PasswordProtect() {
  const howItWorks = [
    { step: "1", title: "Write Your Note", description: "Create or paste your content" },
    { step: "2", title: "Click Share", description: "Open the sharing options" },
    { step: "3", title: "Enable Password", description: "Toggle password protection on" },
    { step: "4", title: "Set Password", description: "Choose a strong password" },
    { step: "5", title: "Share Link", description: "Recipient needs password to view" }
  ];

  const securityFeatures = [
    {
      icon: "🔐",
      title: "Client-Side Encryption",
      description: "Notes are encrypted in your browser before being stored"
    },
    {
      icon: "🔑",
      title: "Password Never Stored",
      description: "We don't store your password — only you and recipients know it"
    },
    {
      icon: "🛡️",
      title: "Secure Transmission",
      description: "HTTPS encryption for all data in transit"
    },
    {
      icon: "⏱️",
      title: "No Backdoors",
      description: "If you forget the password, even we can't recover the note"
    },
    {
      icon: "🗑️",
      title: "Delete Anytime",
      description: "Remove protected notes whenever you want"
    },
    {
      icon: "🆓",
      title: "Always Free",
      description: "Password protection included free, no premium tier"
    }
  ];

  const whatToProtect = [
    { icon: "💼", text: "Confidential work documents" },
    { icon: "🔢", text: "Account credentials or passwords" },
    { icon: "💳", text: "Financial information" },
    { icon: "🏥", text: "Medical or health notes" },
    { icon: "📝", text: "Private personal notes" },
    { icon: "📋", text: "Sensitive meeting notes" }
  ];

  const faqs = [
    {
      question: "How secure is the password protection?",
      answer: "Notes are encrypted using industry-standard encryption before storage. Without the password, the content cannot be decrypted."
    },
    {
      question: "What if I forget the password?",
      answer: "There is no password recovery. If you forget the password, the note cannot be accessed. We recommend keeping passwords in a secure location."
    },
    {
      question: "Can I change the password after sharing?",
      answer: "No, once a note is shared with a password, that password is fixed. To use a different password, create a new share link."
    },
    {
      question: "Is password protection free?",
      answer: "Yes, password protection is completely free. There's no premium tier or hidden charges."
    },
    {
      question: "How do I share the password with recipients?",
      answer: "Share the password through a separate, secure channel (like a phone call or encrypted message) — don't include it in the same message as the link."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Password Protect", url: "https://www.notepad-ai.online/password-protect" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Password Protect Your Notes — Free Encryption
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Add a password to any shared note. Only people with the password can view it.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI's password protection</strong> feature encrypts your shared notes so only people with the password can read them.
            When you share a note with password protection enabled, the content is encrypted before storage. Recipients must enter the correct password to decrypt and view the note.
            This ensures sensitive information stays private even when shared via link.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Protect a Note Now →
          </Link>
        </section>

        {/* How Password Protection Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How Password Protection Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {howItWorks.map((item, index) => (
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

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Security Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to Protect */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            What to Protect
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {whatToProtect.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Password Protection FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Password Protection FAQ
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Notes?</h2>
          <p className="text-gray-400 mb-6">Share sensitive information safely with password protection.</p>
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
