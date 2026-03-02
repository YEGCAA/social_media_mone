import React from 'react';
import { Compass, Target, Users, BarChart, Megaphone, CalendarCheck, CheckCircle2 } from 'lucide-react';

export function StrategyView() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-12 pb-24">
      <div className="text-center space-y-4 mb-12">
        <img 
          src="https://i.ibb.co/gZcFGqVt/Brand-03.png" 
          alt="Even Digital Logo" 
          className="h-12 w-auto mx-auto mb-6"
          referrerPolicy="no-referrer"
        />
        <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Guia Estratégico de Marca Pessoal</h1>
        <p className="text-lg text-zinc-500">M One Imobiliária • Metodologia Even Digital</p>
        <div className="mt-8 p-6 bg-[#5992db]/5 border border-[#5992db]/20 rounded-2xl inline-block text-left">
          <p className="text-lg font-medium text-[#5992db] italic">
            "Eles não só me venderam um imóvel… eles me ajudaram a tomar a melhor decisão da minha vida."
          </p>
          <p className="text-sm text-zinc-500 mt-2">— A frase que a M One quer ouvir de cada cliente</p>
        </div>
      </div>

      {/* 1. Diagnóstico Consolidado */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
          <div className="p-2 bg-[#5992db]/10 rounded-lg text-[#5992db]">
            <SearchIcon className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-zinc-900">1. Diagnóstico Consolidado</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5992db]" />
              Bloco EU — Identidade
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              A M One foi fundada a partir de uma insatisfação real com o mercado: 17 anos de experiência revelando o que funciona e o que não funciona.
            </p>
            <div className="space-y-3 pt-2">
              <div>
                <span className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Força Central</span>
                <p className="text-sm text-zinc-800 mt-1">Capacidade de ouvir além do que o cliente fala e orientar com franqueza (dizer "não compre agora").</p>
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Sombra Identificada</span>
                <p className="text-sm text-zinc-800 mt-1">Crescimento cuidadoso/contido. Transformar isso em escolha: a M One não atende todo mundo.</p>
              </div>
              <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                <span className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Tensão Estratégica</span>
                <p className="text-sm font-medium text-[#5992db] mt-1">Sombra + Força = CURADORIA HUMANA</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
            <h3 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5992db]" />
              Bloco PÚBLICO
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Adultos de 30 a 55 anos, renda média-alta, profissionais ocupados (Salvador e SP).
            </p>
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-zinc-50 p-2 rounded border border-zinc-100">
                  <span className="block text-xs text-zinc-500 mb-1">Dor declarada</span>
                  "Quero um bom imóvel"
                </div>
                <div className="bg-zinc-50 p-2 rounded border border-zinc-100">
                  <span className="block text-xs text-zinc-500 mb-1">Desejo oculto</span>
                  Não errar na decisão
                </div>
                <div className="bg-zinc-50 p-2 rounded border border-zinc-100">
                  <span className="block text-xs text-zinc-500 mb-1">Frustração</span>
                  "Tentei sozinho"
                </div>
                <div className="bg-zinc-50 p-2 rounded border border-zinc-100">
                  <span className="block text-xs text-zinc-500 mb-1">Vilão</span>
                  O corretor genérico
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Posicionamento Estratégico */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
          <div className="p-2 bg-[#5992db]/10 rounded-lg text-[#5992db]">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-zinc-900">2. Posicionamento Estratégico</h2>
        </div>

        <div className="bg-zinc-900 text-white p-8 rounded-2xl shadow-lg text-center space-y-6">
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-2">Marca de Duas Palavras</p>
            <h3 className="text-4xl font-bold text-white tracking-tight">CURADORIA HUMANA</h3>
          </div>
          <div className="w-16 h-px bg-zinc-700 mx-auto" />
          <div>
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-2">Promessa de Marca</p>
            <p className="text-xl font-medium text-[#5992db]">"Eu cuido da sua decisão imobiliária como se fosse minha."</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-zinc-200">
            <h4 className="font-bold text-zinc-900 mb-2">1. Exclusividade</h4>
            <p className="text-sm text-zinc-600">A M One não é para todo mundo. O cliente que entende valor é quem a marca quer. Exclusividade no atendimento e portfólio.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-zinc-200">
            <h4 className="font-bold text-zinc-900 mb-2">2. Segurança Estratégica</h4>
            <p className="text-sm text-zinc-600">17 anos de experiência. Conhecer o mercado o suficiente para dizer o que outros corretores não vão dizer.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-zinc-200">
            <h4 className="font-bold text-zinc-900 mb-2">3. Presença Real</h4>
            <p className="text-sm text-zinc-600">A fundadora é o rosto da marca. Ela está na negociação, conhece o imóvel e entende o momento do cliente.</p>
          </div>
        </div>
      </section>

      {/* 4. Diretrizes de Conteúdo */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
          <div className="p-2 bg-[#5992db]/10 rounded-lg text-[#5992db]">
            <Megaphone className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-zinc-900">4. Diretrizes de Conteúdo Mensal</h2>
        </div>

        <div className="space-y-4">
          {[
            { title: 'Bastidores & Rotina (25%)', desc: 'Humanização + reforço de presença real e exclusividade. Próximo, leve, elegante.' },
            { title: 'Conteúdo de Valor (25%)', desc: 'Autoridade + conselheira de patrimônio. Direto, seguro, didático.' },
            { title: 'Provas & Resultados (20%)', desc: 'Confiança + conversão. Factual, emocional, sem exagero.' },
            { title: 'Opinião & Posicionamento (20%)', desc: 'Diferenciação + ativação do vilão em comum. Firme, sem agressão.' },
            { title: 'Conexão Pessoal (10%)', desc: 'Identificação + história de marca. Pessoal, autêntico, vulnerabilidade estratégica.' }
          ].map((pilar, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-zinc-200">
              <div className="w-8 h-8 rounded-full bg-[#5992db]/10 text-[#5992db] flex items-center justify-center font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">{pilar.title}</h4>
                <p className="text-sm text-zinc-600 mt-1">{pilar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Métricas */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
          <div className="p-2 bg-[#5992db]/10 rounded-lg text-[#5992db]">
            <BarChart className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-zinc-900">5. Métricas de Validação</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-xl border border-zinc-200 overflow-hidden">
            <thead>
              <tr className="bg-zinc-50 border-b border-zinc-200">
                <th className="py-3 px-4 text-xs font-semibold text-zinc-500 uppercase">Categoria</th>
                <th className="py-3 px-4 text-xs font-semibold text-zinc-500 uppercase">Métrica Principal</th>
                <th className="py-3 px-4 text-xs font-semibold text-zinc-500 uppercase">Meta / Threshold</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-sm">
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-900">Posicionamento</td>
                <td className="py-3 px-4 text-zinc-600">Qualidade dos DMs</td>
                <td className="py-3 px-4 text-zinc-600">≥ 60% dentro do público-alvo</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-900">Alcance</td>
                <td className="py-3 px-4 text-zinc-600">Alcance médio de Reels</td>
                <td className="py-3 px-4 text-zinc-600">≥ 3x a base de seguidores</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-900">Engajamento</td>
                <td className="py-3 px-4 text-zinc-600">Taxa de salvamento (Carrossel)</td>
                <td className="py-3 px-4 text-zinc-600">≥ 5% do alcance</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium text-zinc-900">Conversão</td>
                <td className="py-3 px-4 text-zinc-600">Leads qualificados gerados</td>
                <td className="py-3 px-4 text-zinc-600">≥ 8 leads/mês</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. Plano de Ativação */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 border-b border-zinc-200 pb-4">
          <div className="p-2 bg-[#5992db]/10 rounded-lg text-[#5992db]">
            <CalendarCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-zinc-900">7. Plano de Ativação (30 Dias)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              Prioridades Absolutas
            </h3>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li className="flex items-start gap-2">
                <span className="text-[#5992db] font-bold">•</span>
                <span><strong>Organizar prova social:</strong> depoimentos existentes ativados imediatamente.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5992db] font-bold">•</span>
                <span><strong>Consistência de stories:</strong> presença diária antes de ads.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5992db] font-bold">•</span>
                <span><strong>Primeiro Reel estratégico:</strong> comunicar curadoria humana.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#5992db] font-bold">•</span>
                <span><strong>Estrutura de captação:</strong> clareza no contato via Instagram.</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-zinc-900 mb-4">Cronograma Semanal</h3>
            <div className="space-y-4 text-sm">
              <div>
                <span className="font-semibold text-zinc-900">Semana 1: Fundação</span>
                <p className="text-zinc-500 mt-1">Ajustes de identidade, destaques e organização de depoimentos.</p>
              </div>
              <div>
                <span className="font-semibold text-zinc-900">Semana 2: Primeiros Conteúdos</span>
                <p className="text-zinc-500 mt-1">Publicar conteúdos com DNA da marca (Reel topo, Carrossel meio).</p>
              </div>
              <div>
                <span className="font-semibold text-zinc-900">Semana 3: Ativação & Ads</span>
                <p className="text-zinc-500 mt-1">Stories contínuos e primeiro teste de tráfego pago.</p>
              </div>
              <div>
                <span className="font-semibold text-zinc-900">Semana 4: Análise</span>
                <p className="text-zinc-500 mt-1">Revisar o que funcionou e calibrar para o próximo mês.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Simple SearchIcon component since it wasn't imported from lucide-react in the list above
function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
