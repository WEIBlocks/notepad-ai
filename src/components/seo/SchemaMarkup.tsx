// Schema Markup Components for SEO
// All schema types needed for Notepad AI

// WebApplication Schema (Homepage)
export const WebApplicationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://www.notepad-ai.online/#application",
    "name": "Notepad AI",
    "alternateName": ["AI Notepad", "Online Notepad", "NLP Notepad", "Free Notepad"],
    "url": "https://www.notepad-ai.online",
    "description": "Free AI-powered online notepad with Natural Language Processing. Write, organize, and save notes with autosave, offline mode, and complete privacy. No login required.",
    "applicationCategory": "ProductivityApplication",
    "applicationSubCategory": "Note Taking Application",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript. Works in Chrome, Firefox, Safari, Edge.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "AI-powered writing with NLP",
      "Real-time autosave",
      "Offline mode support",
      "Local storage privacy",
      "No login required",
      "Export to PDF",
      "Export to Docs",
      "Mobile responsive",
      "Note sharing",
      "Password protection",
      "Word counter",
      "Character counter"
    ],
    "screenshot": "https://www.notepad-ai.online/og-image.png",
    "softwareVersion": "2.0",
    "author": {
      "@type": "Organization",
      "name": "Notepad AI",
      "url": "https://www.notepad-ai.online"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Organization Schema (Sitewide)
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.notepad-ai.online/#organization",
    "name": "Notepad AI",
    "url": "https://www.notepad-ai.online",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.notepad-ai.online/logo.webp",
      "width": 512,
      "height": 512
    },
    "description": "Free AI-powered online notepad with NLP, offline mode, and privacy-first design.",
    "sameAs": [
      "https://twitter.com/notepadai",
      "https://github.com/notepadai"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// FAQ Schema Component
interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSchema = ({ faqs }: { faqs: FAQItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// HowTo Schema Component
interface HowToStep {
  name: string;
  text: string;
}

export const HowToSchema = ({
  name,
  description,
  steps,
  totalTime = "PT2M"
}: {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Breadcrumb Schema Component
interface BreadcrumbItem {
  name: string;
  url: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// SoftwareApplication Schema (For Tools)
export const SoftwareApplicationSchema = ({
  name,
  description,
  features
}: {
  name: string;
  description: string;
  features: string[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": features,
    "description": description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Homepage FAQ Data
export const homepageFAQs: FAQItem[] = [
  {
    question: "What is Notepad AI?",
    answer: "Notepad AI is a free AI-powered online notepad that uses Natural Language Processing (NLP) to help users write, organize, and save notes intelligently. It works offline, requires no login, and stores all data locally in your browser for complete privacy."
  },
  {
    question: "Is Notepad AI free?",
    answer: "Yes, Notepad AI is completely free to use. All features including AI-powered writing, offline mode, PDF export, note sharing, and password protection are available at no cost with no hidden fees."
  },
  {
    question: "Do I need to create an account or login?",
    answer: "No account, no login, and no signup is required. Simply visit notepad-ai.online and start writing immediately. Your notes are saved automatically in your browser's local storage — no registration ever needed."
  },
  {
    question: "Does Notepad AI work offline?",
    answer: "Yes, Notepad AI works completely offline after the initial page load. You can write, edit, and organize notes without any internet connection. All data is stored locally on your device using browser localStorage."
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes, completely. All notes are stored locally in your browser using localStorage. No data is ever sent to external servers. Notepad AI has zero tracking, zero ads, zero data collection, and complete privacy by design. Your notes never leave your device."
  },
  {
    question: "Can I use Notepad AI without creating an account?",
    answer: "Yes. Notepad AI is specifically designed to work without any account or signup. Open it in your browser and start writing instantly. No email, no password, no forms — just a notepad."
  },
  {
    question: "What is NLP note taking?",
    answer: "NLP (Natural Language Processing) note taking uses AI to understand your writing context in real time. In Notepad AI, the NLP engine detects whether you're writing a list, an outline, or free text, and adapts accordingly. It helps structure your notes automatically and adapts to your writing rhythm without interrupting your flow."
  },
  {
    question: "How is Notepad AI different from Google Keep or Evernote?",
    answer: "Unlike Google Keep and Evernote, Notepad AI requires zero login, stores all data locally in your browser (not in the cloud), works fully offline, has no ads, and uses NLP AI to assist your writing. There is no account required, no sync to any server, and no tracking of any kind."
  },
  {
    question: "Can I export notes to PDF?",
    answer: "Yes, Notepad AI can export any note to PDF format with one click. The conversion happens entirely in your browser — no data is uploaded to any server."
  },
  {
    question: "Does it have a word counter and character counter?",
    answer: "Yes. Notepad AI includes a built-in real-time word counter, character counter, sentence counter, paragraph counter, and estimated reading time. All counting happens instantly as you type, with no need to copy text to a separate tool."
  },
  {
    question: "Can I share notes with others?",
    answer: "Yes, you can share notes using a unique link. Recipients can view the note without creating an account. You can also add password protection for sensitive content."
  },
  {
    question: "Does Notepad AI work on mobile?",
    answer: "Yes. Notepad AI is fully responsive and works on all devices — iPhone, Android, tablets, and desktops. It also works offline on mobile after the first load, making it perfect for taking notes during flights, commutes, or in areas without WiFi."
  },
  {
    question: "How many sentences does Notepad AI count?",
    answer: "Notepad AI counts sentences in real-time as you type — there is no limit. It detects sentences by identifying ending punctuation marks (periods, exclamation marks, and question marks). The sentence count is displayed alongside word count, character count, and paragraph count in the built-in writing metrics panel."
  },
  {
    question: "Is Notepad AI a private notepad that stores nothing online?",
    answer: "Yes. Notepad AI is a fully local-first notepad. All notes are stored in your browser's localStorage — nothing is ever uploaded to any server, cloud service, or database. There is no account, no sync, and no analytics. Your notes exist only on your device, in your browser."
  },
  {
    question: "What is the best free notepad with no cloud?",
    answer: "Notepad AI is the best free notepad with no cloud storage. It saves everything to browser localStorage only, requires no login or account, works offline after the first page load, and has zero tracking or data collection. Your notes never leave your device."
  }
];

// How It Works Steps
export const howItWorksSteps: HowToStep[] = [
  {
    name: "Open Notepad AI",
    text: "Visit notepad-ai.online in any web browser. No download or login required."
  },
  {
    name: "Start Writing",
    text: "Begin typing your notes. The AI-powered NLP system adapts to your writing style and context."
  },
  {
    name: "Auto-Save",
    text: "Your notes save automatically in real-time. No manual saving needed."
  },
  {
    name: "Export or Share",
    text: "Export to PDF, convert to Docs, or share via link. Add password protection for sensitive content."
  }
];
