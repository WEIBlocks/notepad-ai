import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Mobile Notepad - Free Note Taking App for Phone & Tablet | Notepad AI",
  description: "Free mobile notepad for iPhone, Android, and tablets. Take notes on your phone with AI-powered assistance, offline mode, and autosave. No app download required.",
  keywords: "mobile notepad, notepad app, mobile notes, notepad for phone, phone notepad, tablet notepad, mobile note taking",
  alternates: {
    canonical: "https://www.notepad-ai.online/mobile"
  },
  openGraph: {
    title: "Mobile Notepad - Free Note Taking for Phone & Tablet",
    description: "Free mobile notepad with AI, offline mode, and autosave. Works on any phone or tablet.",
    url: "https://www.notepad-ai.online/mobile"
  }
};

export default function Mobile() {
  const mobileFeatures = [
    {
      icon: "📱",
      title: "No App Download Required",
      description: "Access Notepad AI directly in your mobile browser. No App Store, no Play Store, no installation, no updates. Just open and write."
    },
    {
      icon: "👆",
      title: "Touch-Optimized Interface",
      description: "The interface is designed for touchscreens with large buttons, easy scrolling, and comfortable text editing on smaller screens."
    },
    {
      icon: "📴",
      title: "Works Offline",
      description: "Write notes without internet connection. Perfect for subway commutes, flights, or areas with poor signal."
    },
    {
      icon: "💾",
      title: "Automatic Saving",
      description: "Never lose a note. Content saves automatically as you type, stored safely in your mobile browser's local storage."
    },
    {
      icon: "🔋",
      title: "Battery Friendly",
      description: "Lightweight design uses minimal resources. Take notes all day without draining your battery."
    },
    {
      icon: "🔄",
      title: "Sync Across Devices",
      description: "Start a note on your phone, continue on your tablet, finish on your laptop. Your notes are accessible on any device."
    }
  ];

  const supportedDevices = [
    { device: "iPhone (Safari, Chrome)", supported: true },
    { device: "Android Phones (Chrome, Firefox)", supported: true },
    { device: "iPad", supported: true },
    { device: "Android Tablets", supported: true },
    { device: "Windows Tablets", supported: true },
    { device: "Kindle Fire", supported: true }
  ];

  const mobileFeaturesList = [
    { icon: "⚡", text: "Quick Notes: Jot down ideas instantly on the go" },
    { icon: "🎤", text: "Voice Typing: Use your phone's voice-to-text for hands-free notes" },
    { icon: "📤", text: "Share via Apps: Send notes through WhatsApp, Email, or any sharing app" },
    { icon: "🏠", text: "Add to Home Screen: Save Notepad AI as a PWA for app-like access" },
    { icon: "🌙", text: "Dark Mode: Easy on the eyes for nighttime note-taking" },
    { icon: "🔄", text: "Landscape Support: Use your device in any orientation" }
  ];

  const faqs = [
    {
      question: "Do I need to download an app?",
      answer: "No app download is required. Notepad AI works directly in your mobile browser. Just visit notepad-ai.online and start writing."
    },
    {
      question: "Does it work on iPhone?",
      answer: "Yes, Notepad AI works on all iPhones using Safari, Chrome, or any other browser. iOS 12 and later are fully supported."
    },
    {
      question: "Does it work on Android?",
      answer: "Yes, Notepad AI works on all Android phones and tablets. Use Chrome, Firefox, Samsung Internet, or any modern browser."
    },
    {
      question: "Can I use it offline on mobile?",
      answer: "Yes, after the initial page load, Notepad AI works completely offline on mobile. Your notes save locally even without internet."
    },
    {
      question: "How do I add it to my home screen?",
      answer: "On iPhone: Tap Share → Add to Home Screen. On Android: Tap Menu → Add to Home Screen. This creates an app-like shortcut."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Mobile", url: "https://www.notepad-ai.online/mobile" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mobile Notepad — Take Notes Anywhere on Any Device
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Free AI-powered notepad for iPhone, Android, and tablets. No app download needed.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI Mobile</strong> is a free web-based notepad optimized for smartphones and tablets.
            Unlike native apps that require downloads and updates, Notepad AI works directly in your mobile browser — just visit
            the website and start writing. With touch-optimized controls, offline support, and automatic saving, it's the perfect
            note-taking solution for iOS, Android, and any mobile device.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Writing on Mobile →
          </Link>
        </section>

        {/* Why Use Notepad AI on Mobile */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Why Use Notepad AI on Mobile?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Devices Table */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Supported Devices
          </h2>
          <div className="max-w-2xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#1A1A1A]">
                  <th className="p-4 text-left text-gray-300 border border-gray-800">Device Type</th>
                  <th className="p-4 text-center text-gray-300 border border-gray-800">Supported</th>
                </tr>
              </thead>
              <tbody>
                {supportedDevices.map((item, index) => (
                  <tr key={index} className="hover:bg-[#1A1A1A]/50">
                    <td className="p-4 text-gray-300 border border-gray-800">{item.device}</td>
                    <td className="p-4 text-center border border-gray-800">
                      {item.supported ? "✅ Yes" : "❌ No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Mobile Features List */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Mobile Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {mobileFeaturesList.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#1A1A1A] p-4 rounded-xl border border-gray-800">
                <span className="text-xl">{feature.icon}</span>
                <p className="text-gray-300 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mobile FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Mobile Notepad FAQ
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Write on Your Mobile?</h2>
          <p className="text-gray-400 mb-6">Start taking notes on your phone or tablet — completely free, no app download required.</p>
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
