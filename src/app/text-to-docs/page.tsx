import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema, HowToSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Text to Docs - Convert Notes to Document Format Free | Notepad AI",
  description: "Convert text to Docs format instantly. Free text to document converter. Transform your notes into editable documents without uploading to any server. Privacy guaranteed.",
  keywords: "text to docs, convert text to document, text to word, notepad to doc, text to docx, convert notes to document, text converter",
  alternates: {
    canonical: "https://www.notepad-ai.online/text-to-docs"
  },
  openGraph: {
    title: "Text to Docs - Convert Notes to Document Format Free",
    description: "Convert text to Docs format instantly. Free, private, no upload required.",
    url: "https://www.notepad-ai.online/text-to-docs"
  }
};

export default function TextToDocsPage() {
  const howToSteps = [
    { name: "Write or Paste Your Text", text: "Create your note in Notepad AI or paste existing text into the editor." },
    { name: "Click Export to Docs", text: "Find the export button and select Docs format. Conversion starts instantly." },
    { name: "Download Your Document", text: "Your browser downloads the converted document. Open in Word, Google Docs, LibreOffice, or any compatible editor." }
  ];

  const whyUseFeatures = [
    { icon: "🔒", title: "100% Private", description: "Conversion happens in your browser — no server upload" },
    { icon: "⚡", title: "Instant Conversion", description: "No waiting, no queue, no processing time" },
    { icon: "📝", title: "Formatting Preserved", description: "Paragraphs, line breaks, and structure maintained" },
    { icon: "♾️", title: "Free Unlimited", description: "No limits on conversions, completely free" },
    { icon: "🚫", title: "No Signup", description: "Convert without creating an account" },
    { icon: "📴", title: "Works Offline", description: "Convert even without internet (after initial load)" }
  ];

  const outputFormats = [
    { format: "DOCX", description: "Microsoft Word format (2007+)" },
    { format: "DOC", description: "Legacy Word format (compatibility mode)" },
    { format: "ODT", description: "OpenDocument format for LibreOffice" },
    { format: "RTF", description: "Rich Text Format for universal compatibility" }
  ];

  const useCases = [
    { icon: "🎓", title: "Students", description: "Convert lecture notes to assignment-ready documents" },
    { icon: "✍️", title: "Writers", description: "Transform drafts into formatted manuscripts" },
    { icon: "💼", title: "Professionals", description: "Turn meeting notes into shareable documents" },
    { icon: "🔬", title: "Researchers", description: "Export research notes for papers and reports" }
  ];

  const faqs = [
    {
      question: "Is the conversion private?",
      answer: "Yes, the Text to Docs conversion happens entirely in your browser. No text is uploaded to any server. Your content stays on your device."
    },
    {
      question: "What document formats are supported?",
      answer: "You can export to DOCX (Word), DOC (legacy Word), ODT (OpenDocument), and RTF (Rich Text Format)."
    },
    {
      question: "Does it preserve my formatting?",
      answer: "Yes, paragraph breaks, line spacing, and text structure are preserved in the converted document."
    },
    {
      question: "Is there a limit on conversions?",
      answer: "No, you can convert unlimited notes to documents completely free."
    },
    {
      question: "Do I need Microsoft Word to open the file?",
      answer: "No, DOCX files can be opened in Google Docs, LibreOffice, Apple Pages, and any modern document editor."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Text to Docs", url: "https://www.notepad-ai.online/text-to-docs" }
      ]} />
      <HowToSchema
        name="How to Convert Text to Docs"
        description="Convert your notes to document format with Notepad AI in three simple steps."
        steps={howToSteps}
        totalTime="PT1M"
      />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Text to Docs — Convert Notes to Document Format Free
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your notes into editable documents instantly. No upload required.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI's Text to Docs feature</strong> converts your notes into editable document format with one click.
            Unlike online converters that upload your files to external servers, Notepad AI performs the conversion entirely in your browser.
            Your text stays private — nothing is sent anywhere. The resulting document maintains your formatting and is ready for editing
            in Word, Google Docs, or any document editor.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Convert Text to Docs Now →
          </Link>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How Text to Docs Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {howToSteps.map((step, index) => (
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

        {/* Why Use Notepad AI */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Why Use Notepad AI for Text to Docs?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUseFeatures.map((feature, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Output Formats */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Supported Output Formats
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {outputFormats.map((item, index) => (
              <div key={index} className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800 text-center">
                <h3 className="text-lg font-bold text-blue-400 mb-2">{item.format}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Text to Docs Use Cases
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800 text-center hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-3 block">{useCase.icon}</span>
                <h3 className="text-white font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Text to Docs FAQ
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
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Convert Your Notes?</h2>
          <p className="text-gray-400 mb-6">Transform your text into editable documents — completely free, no upload required.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Start Converting →
          </Link>
        </section>
      </div>
    </>
  );
}
