"use client";
import { Suspense, useState } from 'react';
import Editor from "@/components/Editor";
import Loader from "@/components/Loader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StatsSection from "@/components/ui/StatsSection";
import GradientText from "@/components/ui/GradientText";

// Feature card component with CSS animations
function FeatureCard({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) {
  return (
    <ScrollReveal delay={index * 100} direction="up">
      <div className="group relative bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-gray-800/50 overflow-hidden transform-gpu hover:scale-[1.02] hover:border-purple-500/30 transition-all duration-500 h-full">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        {/* Animated border glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
        </div>
        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {title}
            </h3>
          </div>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
        {/* Animated corner accent */}
        <div className="absolute -right-12 -top-12 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl rotate-12 scale-0 group-hover:scale-100 transition-transform duration-700" />
        {/* Bottom glow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </ScrollReveal>
  );
}

// FAQ Accordion Item
function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-[#1A1A1A] hover:bg-[#222] transition-colors"
      >
        <h3 className="text-base sm:text-lg font-medium text-white pr-4">{question}</h3>
        <span className={`text-2xl text-purple-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="p-4 sm:p-6 pt-0 text-gray-300 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // 8 Features from SEO strategy
  const features = [
    {
      icon: "🧠",
      title: "AI-Powered Writing with NLP",
      description: "Notepad AI uses advanced Natural Language Processing to understand and support your writing process. The NLP system detects patterns, recognizes intent, and adapts to your writing context automatically.",
    },
    {
      icon: "⚡",
      title: "No Login, No Hassle",
      description: "Start writing instantly without creating an account. No email verification, no passwords, no forms. Just open Notepad AI and begin taking notes. Your privacy is respected from the first keystroke.",
    },
    {
      icon: "💾",
      title: "Autosave & Local Storage",
      description: "All content is autosaved automatically in real-time and stored locally in your browser. Your notes are never sent to external servers, ensuring complete privacy.",
    },
    {
      icon: "📴",
      title: "Works Completely Offline",
      description: "After the initial page load, Notepad AI works without an internet connection. Write, edit, and organize notes anywhere, anytime — even in airplane mode.",
    },
    {
      icon: "📄",
      title: "Export to PDF & Docs",
      description: "Convert your notes to professional PDF documents or editable Docs format with one click. All conversion happens locally in your browser — no data is uploaded to any server.",
    },
    {
      icon: "🔗",
      title: "Share Notes Securely",
      description: "Share notes with a unique link. Add password protection for sensitive content. Recipients can view without creating an account. Perfect for collaboration.",
    },
    {
      icon: "📱",
      title: "Works on All Devices",
      description: "Access Notepad AI from desktop, laptop, tablet, or smartphone. The responsive interface adapts to any screen size for comfortable note-taking on any device.",
    },
    {
      icon: "🔒",
      title: "Secure, Private, Free",
      description: "Zero ads, zero tracking, zero data collection. Notepad AI is a completely free, privacy-focused notepad that respects your data. No analytics, no cookies tracking your behavior.",
    },
  ];

  // How It Works steps
  const howItWorks = [
    {
      step: 1,
      title: "Open & Start Writing",
      description: "Visit notepad-ai.online in any browser. No download, no login, no setup. Just open and start typing immediately.",
    },
    {
      step: 2,
      title: "Let AI Assist You",
      description: "As you write, the NLP system understands your context and helps structure your notes. Write naturally — the AI adapts to you.",
    },
    {
      step: 3,
      title: "Auto-Save Protects Your Work",
      description: "Every keystroke is saved automatically to your browser's local storage. No manual saving needed. Your work is always protected.",
    },
    {
      step: 4,
      title: "Export or Share",
      description: "When ready, export to PDF, convert to Docs, or share via link. Add password protection for sensitive notes. All features are free.",
    },
  ];

  // Use cases
  const useCases = [
    { icon: "🎓", title: "Students", description: "Take lecture notes, create study guides, organize research with AI assistance" },
    { icon: "✍️", title: "Writers", description: "Draft articles, blog posts, and stories with intelligent writing support" },
    { icon: "💼", title: "Professionals", description: "Capture meeting notes, create to-do lists, organize project ideas" },
    { icon: "👨‍💻", title: "Developers", description: "Save code snippets, document APIs, keep technical notes" },
    { icon: "📓", title: "Journalers", description: "Write daily entries with complete privacy — data never leaves your device" },
    { icon: "✈️", title: "Travelers", description: "Work offline during flights, trains, or areas without internet" },
  ];

  // FAQs for homepage
  const faqs = [
    {
      question: "What is Notepad AI?",
      answer: "Notepad AI is a free AI-powered online notepad that uses Natural Language Processing (NLP) to help users write, organize, and save notes intelligently. It works offline, requires no login, and stores all data locally for complete privacy."
    },
    {
      question: "Is Notepad AI free?",
      answer: "Yes, Notepad AI is completely free to use. All features including AI-powered writing, offline mode, PDF export, note sharing, and password protection are available at no cost with no hidden fees."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account or login is required. Simply visit notepad-ai.online and start writing immediately. Your notes are saved automatically in your browser's local storage."
    },
    {
      question: "Does Notepad AI work offline?",
      answer: "Yes, Notepad AI works completely offline after the initial page load. You can write and edit notes without an internet connection. All data is stored locally on your device."
    },
    {
      question: "Is my data private?",
      answer: "Yes, all notes are stored locally in your browser using local storage. No data is sent to external servers. Notepad AI has zero tracking, zero ads, and complete privacy by design."
    },
    {
      question: "What is NLP in Notepad AI?",
      answer: "NLP (Natural Language Processing) in Notepad AI analyzes your writing patterns, detects intent, and helps structure notes automatically. It adapts to your writing context to provide a smarter note-taking experience."
    },
    {
      question: "Can I export notes to PDF?",
      answer: "Yes, Notepad AI can export any note to PDF format with one click. The conversion happens entirely in your browser — no data is uploaded to any server."
    },
    {
      question: "Can I share notes with others?",
      answer: "Yes, you can share notes using a unique link. Recipients can view the note without creating an account. You can also add password protection for sensitive content."
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <div className="relative min-h-[calc(100vh-72px)] mb-12">
        <div className="absolute inset-0 h-full bg-grid-pattern opacity-[0.05] pointer-events-none" />
        <Suspense fallback={<div><Loader /></div>}>
          <Editor />
        </Suspense>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Entity Definition Section - Critical for GEO */}
      <ScrollReveal className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-14 relative py-8">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            <strong className="text-white">Notepad AI</strong> is a free AI-powered online notepad that uses Natural Language Processing (NLP)
            to help users write, organize, and save notes intelligently. Unlike traditional text editors, Notepad AI understands your writing
            context, adapts to your patterns, and structures your notes automatically. It works completely offline after initial load, requires
            no login or account creation, and stores all data locally in your browser for complete privacy. With features like real-time autosave,
            PDF export, document conversion, and note sharing, Notepad AI is the smart, secure, and simple way to take notes online.
          </p>
        </div>
      </ScrollReveal>

      {/* What is Online Notepad Section */}
      <ScrollReveal className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-14 relative py-8">
        <div className="flex flex-row flex-wrap items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
              What is an <GradientText>online notepad</GradientText>?
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                An online notepad is a versatile, browser-based text editor that allows you to create, save,
                and share notes instantly without needing software installation or account creation. Unlike
                traditional note-taking tools, online notepads are accessible from any device with an
                internet connection, making them the perfect solution for people who require a flexible
                and portable workspace.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Whether you&apos;re jotting down quick ideas, managing projects, or drafting documents, our
                online notepad is designed to make your life easier.
              </p>
            </div>
          </div>

          {/* Image/Logo Section */}
          <div className="flex-1 flex justify-center items-center min-w-[250px]">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-72 lg:h-72">
              {/* Animated glow effect */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-2xl animate-spin-slow" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl animate-pulse" />
              </div>

              {/* Animated circle border */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-700/50 backdrop-blur-sm">
                <div className="absolute inset-0 rounded-full border-t-2 border-blue-500/50 animate-spin-slower" />
              </div>

              {/* Center AI symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-[#1A1A1A]/80 rounded-2xl backdrop-blur-sm flex items-center justify-center overflow-hidden group animate-float-enhanced">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
                  {/* AI Symbol */}
                  <div className="relative flex space-x-1">
                    <div className="w-2 h-10 sm:w-3 sm:h-12 lg:w-4 lg:h-16 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full animate-pulse-scale" />
                    <div className="w-2 h-10 sm:w-3 sm:h-12 lg:w-4 lg:h-16 bg-gradient-to-t from-purple-500 to-blue-400 rounded-full animate-pulse-scale" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Features Section */}
      <div className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-14 py-12 sm:py-16">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12">
            What Makes <GradientText>Notepad AI</GradientText> Different?
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.slice(0, 4).map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 gap-6">
          {features.slice(4, 8).map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index + 4} />
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-14 py-12 sm:py-16">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">
            How to Use <GradientText>Notepad AI</GradientText>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="relative bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 h-full">
                <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mt-4 mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-14 py-12 sm:py-16">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">
            Perfect for <GradientText>Everyone</GradientText>
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {useCases.map((useCase, index) => (
            <ScrollReveal key={index} delay={index * 50} direction="up">
              <div className="bg-[#1A1A1A] p-4 sm:p-6 rounded-xl border border-gray-800 text-center hover:border-purple-500/30 transition-colors h-full">
                <span className="text-3xl mb-3 block">{useCase.icon}</span>
                <h3 className="text-white font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{useCase.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-14 py-12 sm:py-16">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12 text-center">
            Frequently Asked <GradientText>Questions</GradientText>
          </h2>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
            />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <ScrollReveal className="max-w-[1370px] mx-auto px-4 sm:px-6 lg:px-14 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 p-8 sm:p-12 lg:p-16 border border-gray-800/50">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[#0a0a0a]/80" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to transform your <GradientText>note-taking</GradientText>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already discovered the power of AI-enhanced writing.
            </p>
            <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg group magnetic-btn">
              {/* Shimmer effect */}
              <span className="absolute inset-0 w-full h-full">
                <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />
              </span>
              <span className="relative flex items-center justify-center gap-2">
                Start Writing Now
                <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
