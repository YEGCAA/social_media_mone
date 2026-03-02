import React from 'react';
import { BarChart3, TrendingUp, Users, Target, AlertCircle } from 'lucide-react';
import { Post } from '../data';

interface DashboardProps {
  posts: Post[];
}

export function Dashboard({ posts }: DashboardProps) {
  const totalPosts = posts.length;
  const reelsCount = posts.filter(p => p.format === 'Reels').length;
  const carrosselCount = posts.filter(p => p.format === 'Carrossel').length;
  const estaticoCount = posts.filter(p => p.format === 'Post Estático').length;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">Visão Estratégica</h2>
        <p className="text-zinc-500 mt-1">Análise e planejamento para Abril 2026</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500">Total de Posts</h3>
            <BarChart3 className="w-5 h-5 text-[#5992db]" />
          </div>
          <p className="text-3xl font-semibold text-zinc-900 mt-2">{totalPosts}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500">Reels</h3>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          <p className="text-3xl font-semibold text-zinc-900 mt-2">{reelsCount}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500">Carrosséis</h3>
            <Users className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-semibold text-zinc-900 mt-2">{carrosselCount}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500">Posts Estáticos</h3>
            <Target className="w-5 h-5 text-orange-500" />
          </div>
          <p className="text-3xl font-semibold text-zinc-900 mt-2">{estaticoCount}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-100 bg-zinc-50/50">
            <h3 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#5992db]" />
              O que os dados dizem
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md inline-block text-sm">Formatos que performam</h4>
              <ul className="list-disc list-inside text-sm text-zinc-600 space-y-1 ml-1">
                <li>Reels com produção diferenciada (drone, avatar 3D, apresentador presencial).</li>
                <li>Tours silenciosos com trilha acústica e decoração diferenciada.</li>
                <li>Dados técnicos como gancho funcionam apenas com raridade tangível.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-red-700 bg-red-50 px-3 py-1 rounded-md inline-block text-sm">O que não funcionou</h4>
              <ul className="list-disc list-inside text-sm text-zinc-600 space-y-1 ml-1">
                <li>Legendas de catálogo genérico ("excelente localização").</li>
                <li>Evento social sem narrativa ou gancho.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-md inline-block text-sm">Sinal subexplorado</h4>
              <p className="text-sm text-zinc-600 ml-1">
                Reel de bastidor teve o maior eng rate do portfólio (3,6%) — audiência pequena mas altamente qualificada.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-zinc-100 bg-zinc-50/50">
            <h3 className="text-lg font-semibold text-zinc-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-[#5992db]" />
              Prioridades do Mês
            </h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5992db]/10 text-[#5992db] flex items-center justify-center flex-shrink-0 text-sm font-medium mt-0.5">1</div>
                <div>
                  <p className="font-medium text-zinc-900">Reels de identidade e posicionamento pessoal</p>
                  <p className="text-sm text-zinc-500 mt-0.5">DNA da M One + padrão comprovado nos top 2 do portfólio.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5992db]/10 text-[#5992db] flex items-center justify-center flex-shrink-0 text-sm font-medium mt-0.5">2</div>
                <div>
                  <p className="font-medium text-zinc-900">Bastidor com humor (#vidadecorretor)</p>
                  <p className="text-sm text-zinc-500 mt-0.5">Único formato com eng rate acima de 3% + comprovação de escala.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5992db]/10 text-[#5992db] flex items-center justify-center flex-shrink-0 text-sm font-medium mt-0.5">3</div>
                <div>
                  <p className="font-medium text-zinc-900">Conteúdo relacional (casal/família)</p>
                  <p className="text-sm text-zinc-500 mt-0.5">Gap total no portfólio + 550k views de prova de mercado.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5992db]/10 text-[#5992db] flex items-center justify-center flex-shrink-0 text-sm font-medium mt-0.5">4</div>
                <div>
                  <p className="font-medium text-zinc-900">Formato IA como personagem</p>
                  <p className="text-sm text-zinc-500 mt-0.5">Janela de primeiro movimento em Salvador ainda aberta.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#5992db]/10 text-[#5992db] flex items-center justify-center flex-shrink-0 text-sm font-medium mt-0.5">5</div>
                <div>
                  <p className="font-medium text-zinc-900">Carrosséis educativos de autoridade</p>
                  <p className="text-sm text-zinc-500 mt-0.5">Alinhamento com atributos Curadora e Orientadora.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
