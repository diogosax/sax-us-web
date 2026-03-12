import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SAX Global Brasil",
  description:
    "Conheça a SAX Global e como apoiamos empresas latino-americanas na entrada e operação nos Estados Unidos com estrutura societária, coordenação bancária, suporte jurídico-contábil e operação.",
  openGraph: {
    title: "SAX Global Brasil | SAX Group",
    description:
      "Conheça a SAX Global e como apoiamos empresas latino-americanas na entrada e operação nos Estados Unidos com estrutura societária, coordenação bancária, suporte jurídico-contábil e operação.",
    url: "https://www.sax-us.com/pt/sax-global",
    locale: "pt_BR",
  },
  alternates: {
    canonical: "https://www.sax-us.com/pt/sax-global",
  },
};

const servicos = [
  {
    titulo: "Abertura de Empresa",
    descricao:
      "Cuidamos de todo o processo de constituição da sua empresa nos EUA — LLC ou C-Corp — escolhendo a estrutura e o estado ideal para o seu perfil de negócio.",
  },
  {
    titulo: "Conta Bancária Empresarial",
    descricao:
      "Abrir uma conta bancária comercial nos EUA é um dos passos mais importantes. Facilitamos o processo e ajudamos você a atender aos requisitos dos bancos americanos.",
  },
  {
    titulo: "Contabilidade e Estrutura Fiscal",
    descricao:
      "Coordenamos com CPAs e escritórios de contabilidade americanos para garantir que as suas finanças estejam organizadas e em conformidade desde o início.",
  },
  {
    titulo: "Suporte Jurídico",
    descricao:
      "De contratos societários a compliance, conectamos você aos profissionais jurídicos certos para a sua realidade.",
  },
  {
    titulo: "Estratégia de Imigração",
    descricao:
      "Para fundadores e executivos que planejam se mudar para os EUA, avaliamos as opções de visto e coordenamos com advogados de imigração.",
  },
  {
    titulo: "Estrutura Operacional",
    descricao:
      "Apoiamos nos elementos práticos da operação nos EUA: agente registrado, endereço comercial, EIN e muito mais.",
  },
];

const paraQuem = [
  "Empresas latino-americanas entrando no mercado americano pela primeira vez",
  "Fundadores que planejam se mudar para os Estados Unidos",
  "Negócios que precisam formalizar a sua presença nos EUA",
  "Empresas que buscam suporte contínuo de compliance e operações",
];

const diferenciais = [
  {
    titulo: "Conhecemos os Dois Mundos",
    descricao:
      "Nossa equipe tem experiência direta nos ambientes de negócios da América Latina e dos Estados Unidos. Fazemos a ponte entre os dois.",
  },
  {
    titulo: "Execução Coordenada",
    descricao:
      "Não entregamos uma lista de tarefas. Trabalhamos junto com você, coordenando os aspectos jurídicos, financeiros e operacionais.",
  },
  {
    titulo: "Rede de Parceiros Confiáveis",
    descricao:
      "Trabalhamos com advogados, CPAs e prestadores de serviços de confiança nos EUA para entregar resultados de qualidade aos nossos clientes.",
  },
  {
    titulo: "Visão de Longo Prazo",
    descricao:
      "Estamos comprometidos com o seu sucesso ao longo do tempo — não apenas na abertura da empresa. Permanecemos ao seu lado enquanto o negócio cresce.",
  },
];

export default function SaxGlobalPtPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C84B3A] mb-5">
            SAX Global
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
            Sua Plataforma para<br className="hidden md:block" /> Expansão para os EUA
          </h1>
          <p className="text-lg text-[#555555] max-w-2xl leading-relaxed mb-8">
            A SAX Global é a unidade de negócios do SAX Group dedicada a ajudar empresas latino-americanas a se estabelecer, estruturar e operar nos Estados Unidos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-[#C84B3A] hover:bg-[#b03e2e] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm inline-block"
            >
              Agendar uma Consulta
            </Link>
            <Link
              href="/sax-global"
              className="border border-gray-300 text-[#555555] hover:border-[#111111] hover:text-[#111111] font-medium px-8 py-3.5 rounded-md transition-colors text-sm inline-block"
            >
              View in English
            </Link>
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111111] mb-6">O Que é a SAX Global?</h2>
          <p className="text-[#555555] leading-relaxed mb-5">
            A SAX Global foi criada para empreendedores e empresas latino-americanas que desejam construir uma presença real nos Estados Unidos — não apenas uma entidade registrada, mas um negócio plenamente operacional.
          </p>
          <p className="text-[#555555] leading-relaxed">
            Combinamos orientação estratégica com execução prática, trabalhando com especialistas jurídicos, financeiros e operacionais para garantir que a sua empresa americana seja estruturada corretamente desde o primeiro dia.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">Nossos Serviços</h2>
            <p className="text-[#555555] max-w-xl leading-relaxed">
              Cobrimos todos os serviços necessários para abrir e operar um negócio nos EUA.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicos.map((servico) => (
              <div
                key={servico.titulo}
                className="bg-[#F5F5F5] rounded-lg p-6 border border-gray-200"
              >
                <div className="w-6 h-0.5 bg-[#C84B3A] mb-4" />
                <h3 className="text-base font-semibold text-[#111111] mb-3">
                  {servico.titulo}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {servico.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="bg-[#F5F5F5] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#111111] mb-8">Para Quem É</h2>
          <ul className="flex flex-col gap-4">
            {paraQuem.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C84B3A] shrink-0" />
                <span className="text-[#555555] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#111111] mb-4">
              Por Que Trabalhar com a SAX Global
            </h2>
            <p className="text-[#555555] max-w-xl leading-relaxed">
              Oferecemos mais do que um serviço. Nos tornamos um parceiro confiável na sua jornada nos EUA.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diferenciais.map((item) => (
              <div key={item.titulo} className="bg-[#F5F5F5] rounded-lg p-6 border border-gray-200">
                <h3 className="text-base font-semibold text-[#111111] mb-2">{item.titulo}</h3>
                <p className="text-sm text-[#555555] leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#111111] mb-5">Vamos Começar</h2>
          <p className="text-[#555555] mb-8 leading-relaxed">
            Pronto para estruturar o seu negócio nos EUA da forma correta? Fale com o nosso time e dê o primeiro passo.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C84B3A] hover:bg-[#b03e2e] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm"
          >
            Agendar uma Consulta
          </Link>
        </div>
      </section>
    </>
  );
}
