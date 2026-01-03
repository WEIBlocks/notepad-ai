import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Offline Notepad - Take Notes Without Internet | Notepad AI",
  description: "Use Notepad AI completely offline. Take notes without internet connection on any device. Works on planes, trains, and areas without WiFi. Free offline notepad.",
  keywords: "offline notepad, notepad offline, offline notes, notes without internet, offline note taking, no internet notepad, offline writing",
  alternates: {
    canonical: "https://www.notepad-ai.online/offline"
  },
  openGraph: {
    title: "Offline Notepad - Take Notes Without Internet",
    description: "Use Notepad AI completely offline. Take notes without internet on any device.",
    url: "https://www.notepad-ai.online/offline"
  }
};

export default function Offline() {
  const howItWorks = [
    { step: "1", title: "First Visit", description: "Load Notepad AI once with internet connection" },
    { step: "2", title: "Automatic Caching", description: "Progressive Web App (PWA) technology saves the app to your device" },
    { step: "3", title: "Use Offline", description: "Open anytime without internet — all features work" },
    { step: "4", title: "Local Saving", description: "Notes save to your browser's storage, not the cloud" },
    { step: "5", title: "Seamless Experience", description: "No difference between online and offline usage" }
  ];

  const offlineFeatures = [
    { feature: "Writing & Editing", offline: true },
    { feature: "Autosave", offline: true },
    { feature: "NLP/AI Features", offline: true },
    { feature: "PDF Export", offline: true },
    { feature: "Docs Export", offline: true },
    { feature: "Word Counter", offline: true },
    { feature: "Note Sharing*", offline: "partial", note: "Creates link, recipient needs internet" },
    { feature: "Load Existing Notes", offline: true }
  ];

  const useCases = [
    { icon: "✈️", title: "Airplane Mode", description: "Write during flights without WiFi purchase" },
    { icon: "🚇", title: "Commutes", description: "Take notes on subway or train underground" },
    { icon: "🏕️", title: "Remote Areas", description: "Work in mountains, countryside, or wilderness" },
    { icon: "🌐", title: "Poor Connection", description: "Use normally when WiFi is weak or unstable" },
    { icon: "💰", title: "Data Saving", description: "Avoid mobile data usage completely" },
    { icon: "🔒", title: "Maximum Privacy", description: "Ensure nothing can be transmitted" }
  ];

  const setupSteps = [
    { step: "1", instruction: "Visit notepad-ai.online once with internet" },
    { step: "2", instruction: "Wait a few seconds for the app to cache" },
    { step: "3", instruction: "(Optional) Add to Home Screen for app-like access", details: [
      "iPhone: Safari → Share → Add to Home Screen",
      "Android: Chrome → Menu → Add to Home Screen",
      "Desktop: Chrome → Menu → Install Notepad AI"
    ]},
    { step: "4", instruction: "Open anytime without internet" }
  ];

  const faqs = [
    {
      question: "Do I need to do anything special for offline mode?",
      answer: "No, just visit the site once with internet. Offline mode is automatic after that."
    },
    {
      question: "Will my notes sync when I'm back online?",
      answer: "Notes are stored locally, so they're always available on that device. For multi-device sync, export and transfer files manually."
    },
    {
      question: "How much storage does it use?",
      answer: "The app uses minimal storage (under 5MB). Notes use additional storage based on content length."
    },
    {
      question: "Does offline mode work on mobile?",
      answer: "Yes, offline mode works on all devices — iPhone, Android, tablets, and desktop."
    },
    {
      question: "What if I clear my browser cache?",
      answer: "Notes are stored in localStorage, separate from cache. However, clearing all site data will delete notes, so export important notes first."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Offline", url: "https://www.notepad-ai.online/offline" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Offline Notepad — Take Notes Without Internet
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Write anywhere, anytime — no WiFi or data connection required.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI</strong> works completely offline after the initial page load.
            Unlike cloud-based note apps that require constant internet, Notepad AI stores everything locally and functions
            fully without any connection. Perfect for flights, remote locations, commutes, or anywhere with unreliable internet.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Writing Offline →
          </Link>
        </section>

        {/* How Offline Mode Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How Offline Mode Works
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

        {/* What Works Offline Table */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            What Works Offline
          </h2>
          <div className="max-w-2xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Feature</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Offline</th>
                </tr>
              </thead>
              <tbody>
                {offlineFeatures.map((item, index) => (
                  <tr key={index} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800">{item.feature}</td>
                    <td className="p-4 text-center border border-gray-800">
                      {item.offline === true ? "✅ Yes" : item.offline === "partial" ? `⚠️ ${item.note}` : "❌ No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Perfect for Offline Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Perfect for Offline Use Cases
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
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

        {/* Setting Up Offline Access */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Setting Up Offline Access
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{step.instruction}</p>
                    {step.details && (
                      <ul className="mt-2 space-y-1">
                        {step.details.map((detail, i) => (
                          <li key={i} className="text-gray-400 text-sm">• {detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Offline FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Offline FAQ
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Write Offline?</h2>
          <p className="text-gray-400 mb-6">Take notes anywhere, anytime — no internet required.</p>
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
