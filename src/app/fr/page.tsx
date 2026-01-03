import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Bloc-Notes en Ligne Gratuit avec IA - Notepad AI en Français",
  description: "Bloc-notes en ligne gratuit avec Intelligence Artificielle. Prenez des notes avec traitement du langage naturel, sauvegarde automatique et confidentialité totale. Sans inscription.",
  keywords: "bloc-notes en ligne, bloc-notes gratuit, notepad online français, prendre des notes gratuit, bloc-notes ia, notepad intelligent",
  alternates: {
    canonical: "https://www.notepad-ai.online/fr",
    languages: {
      "en": "https://www.notepad-ai.online/",
      "es": "https://www.notepad-ai.online/es",
      "pt": "https://www.notepad-ai.online/pt",
      "fr": "https://www.notepad-ai.online/fr",
      "x-default": "https://www.notepad-ai.online/"
    }
  },
  openGraph: {
    title: "Bloc-Notes en Ligne Gratuit avec IA",
    description: "Bloc-notes en ligne gratuit avec Intelligence Artificielle. Confidentialité totale.",
    url: "https://www.notepad-ai.online/fr",
    locale: "fr_FR"
  }
};

export default function FrenchLanding() {
  const fonctionnalites = [
    {
      icon: "🧠",
      titre: "IA et Traitement du Langage Naturel",
      description: "Analyse intelligente du texte pendant que vous écrivez"
    },
    {
      icon: "⚡",
      titre: "Sans Inscription Nécessaire",
      description: "Ouvrez et commencez à écrire instantanément"
    },
    {
      icon: "💾",
      titre: "Sauvegarde Automatique",
      description: "Vos notes sont sauvegardées automatiquement"
    },
    {
      icon: "🔒",
      titre: "Confidentialité Totale",
      description: "Tout est stocké localement sur votre appareil"
    },
    {
      icon: "🌐",
      titre: "Fonctionne Hors Ligne",
      description: "Utilisez le bloc-notes même sans connexion"
    },
    {
      icon: "📤",
      titre: "Exporter en PDF et Docs",
      description: "Téléchargez vos notes dans plusieurs formats"
    }
  ];

  const questionsFrequentes = [
    {
      question: "Est-ce vraiment gratuit ?",
      reponse: "Oui, Notepad AI est complètement gratuit. Il n'y a pas de version premium ni de fonctions payantes."
    },
    {
      question: "Dois-je créer un compte ?",
      reponse: "Non, vous n'avez pas besoin de vous inscrire. Ouvrez simplement la page et commencez à écrire."
    },
    {
      question: "Où sont stockées mes notes ?",
      reponse: "Toutes les notes sont stockées dans le stockage local de votre navigateur. Elles ne sont jamais envoyées à nos serveurs."
    },
    {
      question: "Ça fonctionne sur mobile ?",
      reponse: "Oui, Notepad AI fonctionne parfaitement sur téléphones, tablettes et ordinateurs."
    },
    {
      question: "Puis-je utiliser le bloc-notes sans internet ?",
      reponse: "Oui, après la première visite, vous pouvez utiliser Notepad AI complètement hors ligne."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Français", url: "https://www.notepad-ai.online/fr" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Bloc-Notes en Ligne Gratuit avec IA
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Prenez des notes intelligentes avec traitement du langage naturel. Privé, rapide et sans inscription.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI</strong> est un bloc-notes en ligne gratuit alimenté par l'Intelligence Artificielle.
            Avec le traitement du langage naturel (NLP), la sauvegarde automatique et le mode hors ligne, c'est le moyen le plus simple et privé de prendre des notes.
            Tout est stocké sur votre appareil — nous n'envoyons jamais vos notes à aucun serveur.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Ouvrir Notepad AI →
          </Link>
          <p className="text-gray-500 text-sm mt-3">
            (L'éditeur est en anglais)
          </p>
        </section>

        {/* Fonctionnalités Principales */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Fonctionnalités Principales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fonctionnalites.map((fonctionnalite, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{fonctionnalite.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{fonctionnalite.titre}</h3>
                <p className="text-gray-400">{fonctionnalite.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Questions Fréquentes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Questions Fréquentes
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {questionsFrequentes.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.reponse}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Prêt à Commencer ?</h2>
          <p className="text-gray-400 mb-6">Essayez le bloc-notes le plus intelligent et privé.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Ouvrir Notepad AI →
          </Link>
        </section>
      </div>
    </>
  );
}
