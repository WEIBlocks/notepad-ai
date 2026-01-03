import Link from "next/link";
import { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Bloco de Notas Online Grátis com IA - Notepad AI em Português",
  description: "Bloco de notas online grátis com Inteligência Artificial. Faça anotações com processamento de linguagem natural, salvamento automático e privacidade total. Sem cadastro.",
  keywords: "bloco de notas online, bloco de notas grátis, notepad online português, fazer anotações grátis, bloco de notas ia, notepad inteligente",
  alternates: {
    canonical: "https://www.notepad-ai.online/pt",
    languages: {
      "en": "https://www.notepad-ai.online/",
      "es": "https://www.notepad-ai.online/es",
      "pt": "https://www.notepad-ai.online/pt",
      "fr": "https://www.notepad-ai.online/fr",
      "x-default": "https://www.notepad-ai.online/"
    }
  },
  openGraph: {
    title: "Bloco de Notas Online Grátis com IA",
    description: "Bloco de notas online grátis com Inteligência Artificial. Privacidade total.",
    url: "https://www.notepad-ai.online/pt",
    locale: "pt_BR"
  }
};

export default function PortugueseLanding() {
  const recursos = [
    {
      icon: "🧠",
      titulo: "IA e Processamento de Linguagem Natural",
      descricao: "Análise inteligente de texto enquanto você escreve"
    },
    {
      icon: "⚡",
      titulo: "Sem Cadastro Necessário",
      descricao: "Abra e comece a escrever instantaneamente"
    },
    {
      icon: "💾",
      titulo: "Salvamento Automático",
      descricao: "Suas notas são salvas automaticamente"
    },
    {
      icon: "🔒",
      titulo: "Privacidade Total",
      descricao: "Tudo é armazenado localmente no seu dispositivo"
    },
    {
      icon: "🌐",
      titulo: "Funciona Sem Internet",
      descricao: "Use o bloco de notas mesmo sem conexão"
    },
    {
      icon: "📤",
      titulo: "Exportar para PDF e Docs",
      descricao: "Baixe suas notas em múltiplos formatos"
    }
  ];

  const perguntasFrequentes = [
    {
      pergunta: "É realmente grátis?",
      resposta: "Sim, o Notepad AI é completamente grátis. Não há versão premium nem funções pagas."
    },
    {
      pergunta: "Preciso criar uma conta?",
      resposta: "Não, você não precisa se cadastrar. Apenas abra a página e comece a escrever."
    },
    {
      pergunta: "Onde minhas notas são salvas?",
      resposta: "Todas as notas são salvas no armazenamento local do seu navegador. Nunca são enviadas para nossos servidores."
    },
    {
      pergunta: "Funciona no celular?",
      resposta: "Sim, o Notepad AI funciona perfeitamente em celulares, tablets e computadores."
    },
    {
      pergunta: "Posso usar o bloco de notas sem internet?",
      resposta: "Sim, após a primeira visita, você pode usar o Notepad AI completamente offline."
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://www.notepad-ai.online/" },
        { name: "Português", url: "https://www.notepad-ai.online/pt" }
      ]} />

      <div className="min-h-screen max-w-6xl mx-auto text-white px-4 mt-20 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Bloco de Notas Online Grátis com IA
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Faça anotações inteligentes com processamento de linguagem natural. Privado, rápido e sem cadastro.
          </p>
        </section>

        {/* Entity Definition */}
        <section className="mb-16 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 sm:p-8 rounded-2xl border border-gray-800">
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            <strong className="text-white">Notepad AI</strong> é um bloco de notas online gratuito potenciado por Inteligência Artificial.
            Com processamento de linguagem natural (NLP), salvamento automático e modo offline, é a forma mais simples e privada de fazer anotações.
            Tudo é armazenado no seu dispositivo — nunca enviamos suas notas para nenhum servidor.
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
            (O editor está em inglês)
          </p>
        </section>

        {/* Recursos Principais */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Recursos Principais
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recursos.map((recurso, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl mb-4 block">{recurso.icon}</span>
                <h3 className="text-xl font-bold text-white mb-3">{recurso.titulo}</h3>
                <p className="text-gray-400">{recurso.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Perguntas Frequentes */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {perguntasFrequentes.map((faq, index) => (
              <div key={index} className="bg-[#1A1A1A] p-6 rounded-xl border border-gray-800">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.pergunta}</h3>
                <p className="text-gray-400">{faq.resposta}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-gray-800">
          <h2 className="text-2xl font-bold text-white mb-4">Pronto para Começar?</h2>
          <p className="text-gray-400 mb-6">Experimente o bloco de notas mais inteligente e privado.</p>
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
