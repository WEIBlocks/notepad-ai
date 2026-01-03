import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, HowToSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "How It Works - Using Notepad AI for Smart Note Taking | Notepad AI",
  description: "Learn how Notepad AI works. Simple guide to using our AI-powered online notepad with NLP, autosave, offline mode, and privacy features. Start in seconds.",
  keywords: "how notepad ai works, how to use notepad, online notepad tutorial, notepad guide, using notepad ai, notepad instructions",
  alternates: {
    canonical: "https://www.notepad-ai.online/how-it-works"
  },
  openGraph: {
    title: "How It Works - Using Notepad AI for Smart Note Taking",
    description: "Learn how Notepad AI works. Simple guide to AI-powered note taking.",
    url: "https://www.notepad-ai.online/how-it-works"
  }
};

export default function HowItWorks() {
  const gettingStartedSteps = [
    { name: "Open Notepad AI", text: "Visit notepad-ai.online in any web browser on any device. The notepad loads instantly." },
    { name: "Start Writing", text: "Click in the editor area and begin typing. That's it — you're already using Notepad AI." },
    { name: "Your Notes Are Saved", text: "Everything you type is saved automatically to your browser's local storage. No save button needed." }
  ];

  const autosaveFeatures = [
    { step: "1", title: "Real-Time Saving", description: "Every character is saved within milliseconds" },
    { step: "2", title: "Local Storage", description: "Data stored in your browser's built-in storage" },
    { step: "3", title: "Persistent", description: "Notes survive browser restarts and device reboots" },
    { step: "4", title: "No Internet Needed", description: "Autosave works even offline" },
    { step: "5", title: "Automatic Recovery", description: "Reopen the page anytime to continue where you left off" }
  ];

  const nlpFeatures = [
    { step: "1", title: "Analyzes Your Writing", description: "Understands context and intent as you type" },
    { step: "2", title: "Detects Patterns", description: "Recognizes if you're listing, explaining, or brainstorming" },
    { step: "3", title: "Adapts Automatically", description: "Adjusts to your writing style over time" },
    { step: "4", title: "Non-Intrusive", description: "Works silently in the background without interrupting" },
    { step: "5", title: "Privacy-First", description: "All processing happens locally, nothing sent to servers" }
  ];

  const offlineSteps = [
    { step: "1", title: "First Visit", description: "Load the page once with internet connection" },
    { step: "2", title: "Automatic Caching", description: "App files saved to your device" },
    { step: "3", title: "Offline Ready", description: "Next time, works without internet" },
    { step: "4", title: "Full Features", description: "Write, edit, save — everything works offline" },
    { step: "5", title: "Auto-Sync", description: "When online again, any features requiring internet resume" }
  ];

  const exportGuide = [
    {
      title: "Export to PDF",
      steps: ["Write your note", "Click the Export/Download button", "Select \"PDF\"", "PDF downloads to your device"]
    },
    {
      title: "Export to Docs",
      steps: ["Write your note", "Click the Export/Download button", "Select \"Docs\" or \"DOCX\"", "Document file downloads"]
    },
    {
      title: "Copy to Clipboard",
      steps: ["Write your note", "Click \"Copy All\" or select text", "Paste anywhere you need"]
    }
  ];

  const sharingSteps = [
    { step: "1", title: "Create Your Note", description: "Write the content you want to share" },
    { step: "2", title: "Click Share", description: "Generate a unique shareable link" },
    { step: "3", title: "Optional Password", description: "Add password protection for sensitive notes" },
    { step: "4", title: "Send the Link", description: "Share via email, message, or any method" },
    { step: "5", title: "Recipient Views", description: "They click link and see the note (no account needed)" }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "How It Works", url: "https://www.notepad-ai.online/how-it-works" }
      ]} />
      <HowToSchema
        name="How to Use Notepad AI"
        description="Learn how to use Notepad AI for intelligent note-taking in simple steps."
        steps={gettingStartedSteps}
        totalTime="PT2M"
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            How Notepad AI Works — Start Writing in Seconds
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            No setup, no login, no learning curve. Just open and write.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI</strong> is designed to be the simplest, fastest way to take notes online.
            There's no account to create, no software to download, no settings to configure. Just visit the website and start typing.
            This guide explains how each feature works and how to get the most out of your AI-powered notepad.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Try Notepad AI Now →
          </Link>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Getting Started
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {gettingStartedSteps.map((step, index) => (
              <div key={index} className="relative bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800">
                <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mt-4 mb-3">{step.name}</h3>
                <p className="text-gray-400 text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Autosave Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How Autosave Works
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Notepad AI saves your work continuously as you type:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {autosaveFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 text-center">
                <div className="w-8 h-8 bg-blue-600/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                  {feature.step}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How NLP/AI Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How NLP/AI Works
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            The Natural Language Processing in Notepad AI:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {nlpFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 text-center">
                <div className="w-8 h-8 bg-purple-600/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                  {feature.step}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Offline Mode Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How Offline Mode Works
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Use Notepad AI without internet:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {offlineSteps.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 text-center">
                <div className="w-8 h-8 bg-green-600/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Export Notes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How to Export Notes
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {exportGuide.map((guide, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-4">{guide.title}</h3>
                <ol className="space-y-2">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-blue-400 font-semibold">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* How Note Sharing Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How Note Sharing Works
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Share notes with anyone:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sharingSteps.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 text-center">
                <div className="w-8 h-8 bg-pink-600/20 text-pink-400 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How Privacy Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How Privacy Works
          </h2>
          <div className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-gray-800 max-w-3xl mx-auto">
            <p className="text-gray-300 text-center mb-6">
              Your privacy is built into every aspect of Notepad AI:
            </p>
            <ul className="space-y-3">
              {[
                "Local Storage: All notes stored in your browser, not on external servers",
                "No Account Required: Use without creating an account or providing email",
                "Zero Tracking: No analytics, no cookies tracking behavior, no data collection",
                "Offline Processing: NLP and AI features run locally on your device",
                "Optional Sharing: You control when and what to share"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-400">
                  <span className="text-green-400 mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Writing?</h2>
          <p className="text-gray-400 mb-6">Experience the simplest, smartest way to take notes online.</p>
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
