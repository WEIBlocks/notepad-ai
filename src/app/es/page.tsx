import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Bloc de Notas Online Gratis con IA - Notepad AI en Español",
  description: "Bloc de notas online gratis con Inteligencia Artificial. Toma notas con procesamiento de lenguaje natural, guardado automático y privacidad total. Sin registro.",
  keywords: "bloc de notas online, bloc de notas gratis, notepad online español, tomar notas gratis, bloc de notas ia, notepad inteligente",
  alternates: {
    canonical: "https://www.notepad-ai.online/es",
    languages: {
      "en": "https://www.notepad-ai.online/",
      "es": "https://www.notepad-ai.online/es",
      "pt": "https://www.notepad-ai.online/pt",
      "fr": "https://www.notepad-ai.online/fr",
      "x-default": "https://www.notepad-ai.online/"
    }
  },
  openGraph: {
    title: "Bloc de Notas Online Gratis con IA",
    description: "Bloc de notas online gratis con Inteligencia Artificial. Privacidad total.",
    url: "https://www.notepad-ai.online/es",
    locale: "es_ES"
  }
};

export default function SpanishLanding() {
  const caracteristicas = [
    {
      icon: "🧠",
      titulo: "IA y Procesamiento de Lenguaje Natural",
      descripcion: "Análisis inteligente de texto mientras escribes"
    },
    {
      icon: "⚡",
      titulo: "Sin Registro Necesario",
      descripcion: "Abre y empieza a escribir instantáneamente"
    },
    {
      icon: "💾",
      titulo: "Guardado Automático",
      descripcion: "Tus notas se guardan automáticamente"
    },
    {
      icon: "🔒",
      titulo: "Privacidad Total",
      descripcion: "Todo se almacena localmente en tu dispositivo"
    },
    {
      icon: "🌐",
      titulo: "Funciona Sin Internet",
      descripcion: "Usa el bloc de notas incluso sin conexión"
    },
    {
      icon: "📤",
      titulo: "Exportar a PDF y Docs",
      descripcion: "Descarga tus notas en múltiples formatos"
    }
  ];

  const preguntasFrecuentes = [
    {
      pregunta: "¿Es realmente gratis?",
      respuesta: "Sí, Notepad AI es completamente gratis. No hay versión premium ni funciones de pago."
    },
    {
      pregunta: "¿Necesito crear una cuenta?",
      respuesta: "No, no necesitas registrarte. Solo abre la página y empieza a escribir."
    },
    {
      pregunta: "¿Dónde se guardan mis notas?",
      respuesta: "Todas las notas se guardan en el almacenamiento local de tu navegador. Nunca se envían a nuestros servidores."
    },
    {
      pregunta: "¿Funciona en móvil?",
      respuesta: "Sí, Notepad AI funciona perfectamente en teléfonos, tablets y computadoras."
    },
    {
      pregunta: "¿Puedo usar el bloc de notas sin internet?",
      respuesta: "Sí, después de la primera visita, puedes usar Notepad AI completamente sin conexión."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Español", url: "https://www.notepad-ai.online/es" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Bloc de Notas Online Gratis con IA
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Toma notas inteligentes con procesamiento de lenguaje natural. Privado, rápido y sin registro.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI</strong> es un bloc de notas online gratuito potenciado por Inteligencia Artificial.
            Con procesamiento de lenguaje natural (NLP), guardado automático, y modo offline, es la forma más simple y privada de tomar notas.
            Todo se almacena en tu dispositivo — nunca enviamos tus notas a ningún servidor.
          </p>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Abrir Notepad AI →
          </Link>
          <p className="text-gray-500 text-sm mt-3">
            (El editor está en inglés)
          </p>
        </section>

        {/* Características Principales */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Características Principales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caracteristicas.map((caracteristica, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{caracteristica.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{caracteristica.titulo}</h3>
                <p className="text-gray-400">{caracteristica.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preguntas Frecuentes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {preguntasFrecuentes.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.pregunta}</h3>
                <p className="text-gray-400">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">¿Listo para Empezar?</h2>
          <p className="text-gray-400 mb-6">Prueba el bloc de notas más inteligente y privado.</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300"
          >
            Abrir Notepad AI →
          </Link>
        </section>
      </div>
    </>
  );
}
