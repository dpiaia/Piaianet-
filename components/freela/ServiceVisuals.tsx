import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Sparkles, CheckCircle2, TrendingUp, Search, QrCode, 
  Palette, FileText, Monitor, Smartphone, Gauge, Zap, 
  Code2, Check, ArrowRight, Layers, Eye, RefreshCw, Star,
  Share2, Calendar, Image as ImageIcon, MessageCircle, Heart, Users
} from 'lucide-react';

/* 1. Visual: Modernização de Design System para IA (Dobra 1) */
export const VisualAIDesignSystemModernization: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'audit' | 'tokens' | 'ai-prompt'>('ai-prompt');

  return (
    <div className="w-full bg-[#08090D] rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl text-xs font-mono text-neutral-300 relative overflow-hidden select-none">
      {/* macOS Window Titlebar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-xs" />
          </div>
          <span className="ml-2 text-[11px] text-neutral-400 font-sans font-medium tracking-tight">
            DesignOps • Modernização & Tokens
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#251408] text-[#F59E0B] px-3 py-1 rounded-full border border-[#6B3208] text-[10px] font-semibold font-sans">
          <Bot size={12} className="text-[#F59E0B]" />
          <span>IA Sem Alucinações</span>
        </div>
      </div>

      {/* Segmented Switcher */}
      <div className="grid grid-cols-3 gap-1.5 mb-4 bg-white/[0.04] p-1 rounded-xl border border-white/[0.06]">
        <button 
          onClick={() => setActiveTab('audit')}
          className={`px-3 py-2 rounded-lg text-[11px] transition-all flex items-center justify-center gap-1.5 font-sans cursor-pointer ${
            activeTab === 'audit' 
              ? 'bg-[#2D2E33] text-white font-medium shadow-xs' 
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <RefreshCw size={12} />
          <span>1. Diagnóstico</span>
        </button>
        <button 
          onClick={() => setActiveTab('tokens')}
          className={`px-3 py-2 rounded-lg text-[11px] transition-all flex items-center justify-center gap-1.5 font-sans cursor-pointer ${
            activeTab === 'tokens' 
              ? 'bg-[#2D2E33] text-white font-medium shadow-xs' 
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Code2 size={12} />
          <span>2. Tokens & React</span>
        </button>
        <button 
          onClick={() => setActiveTab('ai-prompt')}
          className={`px-3 py-2 rounded-lg text-[11px] transition-all flex items-center justify-center gap-1.5 font-sans cursor-pointer ${
            activeTab === 'ai-prompt' 
              ? 'bg-[#2D2E33] text-white font-medium shadow-xs' 
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Sparkles size={12} />
          <span>3. Prompt no Cursor</span>
        </button>
      </div>

      {/* Terminal View */}
      <div className="bg-[#050608] rounded-xl p-4 sm:p-5 border border-white/[0.06] font-mono text-xs leading-relaxed min-h-[145px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === 'audit' && (
            <motion.div 
              key="audit" 
              initial={{ opacity: 0, y: 4 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -4 }}
              className="space-y-2"
            >
              <div className="text-red-400/90 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
                <span>Antes: Código legado com CSS disperso e semântica quebrada</span>
              </div>
              <div className="text-neutral-500 text-[11px]">
                Claude/Cursor alucina cores, quebra layouts mobile e gera retrabalho.
              </div>
              <div className="p-2.5 rounded-xl bg-red-950/30 border border-red-800/30 text-red-300 text-[11px] flex items-center gap-2 mt-2">
                <span>⚠️ Diagnóstico: 48 tokens duplicados e 12 componentes órfãos mapeados.</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'tokens' && (
            <motion.div 
              key="tokens" 
              initial={{ opacity: 0, y: 4 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -4 }}
              className="space-y-2"
            >
              <div className="text-neutral-500">// Mapeamento W3C Token ↔ Tailwind ↔ React:</div>
              <div>
                <span className="text-purple-400 font-semibold">$color.primary</span>: <span className="text-orange-400">oklch(0.6698 0.1803 42.9750)</span>;
              </div>
              <div>
                <span className="text-blue-400">bg-primary</span> <span className="text-neutral-600">→</span> <span className="text-emerald-400">text-primary-foreground</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-[11px] flex items-center gap-2 mt-2">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>Tokens matematicamente alinhados entre Figma e React/Tailwind.</span>
              </div>
            </motion.div>
          )}

          {activeTab === 'ai-prompt' && (
            <motion.div 
              key="ai-prompt" 
              initial={{ opacity: 0, y: 4 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -4 }}
              className="space-y-2.5"
            >
              <div className="text-neutral-400 text-xs font-mono">// Prompt no Cursor com contexto AGENTS.md:</div>
              <div className="text-[#FCD34D] text-xs font-mono leading-relaxed">
                &gt; &quot;Crie a tela de faturamento usando Button e Card do Design System&quot;
              </div>
              <div className="p-3 rounded-xl bg-[#141108] border border-amber-900/50 text-[#FCD34D] text-xs flex items-center gap-2.5 mt-2.5 shadow-inner">
                <Sparkles size={15} className="text-[#F7D032] shrink-0" />
                <span className="font-sans font-medium text-amber-200">Resultado instantâneo no 1º comando: código 100% fiel e padronizado.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Metrics Bar */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-[11px]">
        <span className="flex items-center gap-1.5 text-neutral-300 font-sans">
          <CheckCircle2 size={14} className="text-[#F7D032]" />
          Figma ↔ Tokens ↔ React ↔ Cursor/Claude
        </span>
        <span className="text-emerald-400 font-semibold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40 flex items-center gap-1 text-[11px]">
          <Zap size={11} /> Zero Retrabalho
        </span>
      </div>
    </div>
  );
};

/* 2. Visual: Criação de Design System Compatível com IA (Dobra 2) */
export const VisualAIDesignSystemCreation: React.FC = () => {
  const [componentMode, setComponentMode] = useState<'button' | 'card' | 'input'>('button');

  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs font-mono text-neutral-300 relative overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
          </div>
          <span className="ml-2 text-[11px] text-neutral-400 font-sans font-medium tracking-tight">
            UI Kit & Tokens do Zero
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-purple-500/15 text-purple-400 px-3 py-0.5 rounded-full border border-purple-500/30 text-[10px] font-semibold font-sans">
          <Layers size={12} />
          <span>Biblioteca Viva & Escalável</span>
        </div>
      </div>

      {/* Component Tabs */}
      <div className="grid grid-cols-3 gap-1.5 mb-4 bg-white/[0.04] p-1 rounded-2xl border border-white/[0.06]">
        <button 
          onClick={() => setComponentMode('button')}
          className={`px-3 py-1.5 rounded-xl text-[11px] transition-all font-sans ${
            componentMode === 'button' ? 'bg-white/20 text-white font-semibold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          Button Atomic
        </button>
        <button 
          onClick={() => setComponentMode('card')}
          className={`px-3 py-1.5 rounded-xl text-[11px] transition-all font-sans ${
            componentMode === 'card' ? 'bg-white/20 text-white font-semibold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          Card & Surface
        </button>
        <button 
          onClick={() => setComponentMode('input')}
          className={`px-3 py-1.5 rounded-xl text-[11px] transition-all font-sans ${
            componentMode === 'input' ? 'bg-white/20 text-white font-semibold' : 'text-neutral-400 hover:text-white'
          }`}
        >
          Input & Form
        </button>
      </div>

      {/* Interactive Component Forge */}
      <div className="bg-black/80 rounded-2xl p-4 sm:p-5 border border-white/[0.06] flex flex-col justify-between min-h-[145px]">
        {componentMode === 'button' && (
          <div className="space-y-3">
            <div className="text-[11px] text-neutral-400 font-sans">
              Variantes atômicas padronizadas (Primary, Secondary, Outline):
            </div>
            <div className="flex flex-wrap gap-2.5 items-center">
              <div className="px-4 py-2 rounded-xl bg-[#EC6726] dark:bg-[#FFD600] text-white dark:text-black font-sans font-bold text-xs shadow-md flex items-center gap-1.5">
                <Sparkles size={12} /> Primary Action
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/10 text-white font-sans font-medium text-xs border border-white/20">
                Secondary
              </div>
              <div className="px-4 py-2 rounded-xl border border-white/30 text-neutral-300 font-sans text-xs">
                Outline
              </div>
            </div>
          </div>
        )}

        {componentMode === 'card' && (
          <div className="space-y-2">
            <div className="text-[11px] text-neutral-400 font-sans">
              Superfície com raio aninhado e contraste WCAG AA:
            </div>
            <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-between">
              <div className="space-y-1">
                <div className="text-white font-bold font-sans text-xs">Analytics Card</div>
                <div className="text-[10px] text-neutral-400 font-mono">radius: 1rem • shadow: md</div>
              </div>
              <div className="w-8 h-8 rounded-xl bg-[#EC6726]/20 border border-[#EC6726]/40 flex items-center justify-center text-[#FFD600] font-bold">
                ✓
              </div>
            </div>
          </div>
        )}

        {componentMode === 'input' && (
          <div className="space-y-2">
            <div className="text-[11px] text-neutral-400 font-sans">
              Campos com acessibilidade e feedback de estado:
            </div>
            <div className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-emerald-500/50 flex items-center justify-between text-xs text-white">
              <span>email@empresa.com.br</span>
              <span className="text-emerald-400 text-[10px] font-mono">● Válido</span>
            </div>
          </div>
        )}

        <div className="text-[10px] text-neutral-500 font-mono pt-2 border-t border-white/[0.06] flex items-center justify-between">
          <span>Dark / Light Mode Automático</span>
          <span className="text-[#FFD600]">100% Pronto para IA</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-purple-400" />
          Figma UI Kit + Código React + Tokens
        </span>
        <span className="text-purple-400 font-semibold font-mono">Novas telas em minutos</span>
      </div>
    </div>
  );
};

// Aliases for backwards compatibility
export const VisualAIDesignSystem = VisualAIDesignSystemModernization;

/* 2. Visual: Criação de Sites (Apple Studio Display / Safari Preview) */
export const VisualSites: React.FC = () => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Safari Window Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block" />
          </div>
          <span className="ml-2 text-[11px] text-neutral-400 bg-white/[0.06] px-3 py-0.5 rounded-full font-mono">
            https://suaempresa.com.br
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-emerald-500/15 text-emerald-400 px-3 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-500/30">
            <Gauge size={13} />
            <span>99 PageSpeed</span>
          </div>
          <div className="hidden sm:flex bg-white/[0.06] rounded-full p-0.5 border border-white/[0.08]">
            <button 
              onClick={() => setDevice('desktop')}
              className={`p-1.5 rounded-full ${device === 'desktop' ? 'bg-white/20 text-white' : 'text-neutral-400'}`}
              title="Desktop View"
            >
              <Monitor size={12} />
            </button>
            <button 
              onClick={() => setDevice('mobile')}
              className={`p-1.5 rounded-full ${device === 'mobile' ? 'bg-white/20 text-white' : 'text-neutral-400'}`}
              title="Mobile View"
            >
              <Smartphone size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Website Mockup Frame */}
      <div className="bg-black/70 rounded-2xl p-4 sm:p-5 border border-white/[0.06] space-y-3.5">
        {/* Navigation Mock */}
        <div className="h-8 bg-white/[0.04] rounded-xl flex items-center px-3 justify-between border border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-[#EC6726] dark:bg-[#FFD600] flex items-center justify-center font-bold text-white dark:text-black text-[9px]">
              D
            </div>
            <div className="w-16 h-2 bg-white/40 rounded-full" />
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-2 bg-white/20 rounded-full hidden sm:block" />
            <div className="w-8 h-2 bg-white/20 rounded-full hidden sm:block" />
            <div className="w-14 h-4 bg-[#EC6726] dark:bg-[#FFD600] rounded-full text-[8px] font-bold text-white dark:text-black flex items-center justify-center px-1">
              Contato
            </div>
          </div>
        </div>

        {/* Hero Banner Mock */}
        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1 space-y-2 text-left w-full">
            <div className="w-3/4 h-3 bg-[#EC6726] dark:bg-[#FFD600] rounded-full" />
            <div className="w-1/2 h-2.5 bg-white/60 rounded-full" />
            <div className="w-full h-2 bg-white/20 rounded-full" />
            <div className="w-2/3 h-2 bg-white/20 rounded-full" />
            <div className="pt-1">
              <div className="w-24 h-5 bg-[#EC6726] dark:bg-[#FFD600] rounded-full text-[9px] font-bold text-white dark:text-black flex items-center justify-center gap-1">
                <Zap size={10} /> Saiba Mais
              </div>
            </div>
          </div>
          <div className="w-full sm:w-28 h-20 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
            <Monitor size={26} className="text-white/60" />
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
            <div className="text-[10px] font-bold text-[#FFD600]">React / Next</div>
            <div className="text-[8px] text-neutral-400 mt-0.5">SSR & Rápido</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
            <div className="text-[10px] font-bold text-emerald-400">SEO Técnico</div>
            <div className="text-[8px] text-neutral-400 mt-0.5">Top no Google</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-center">
            <div className="text-[10px] font-bold text-blue-400">Responsivo</div>
            <div className="text-[8px] text-neutral-400 mt-0.5">Mobile First</div>
          </div>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1.5 text-neutral-300">
          <CheckCircle2 size={13} className="text-[#FFD600]" />
          Código limpo, seguro e escalável
        </span>
        <span className="text-[#FFD600] font-semibold">Entrega Completa</span>
      </div>
    </div>
  );
};

/* 3. Visual: Criação de Landing Pages (Apple CRO Performance) */
export const VisualLandingPages: React.FC = () => {
  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-sans text-neutral-300 flex items-center gap-1.5 font-semibold">
            <TrendingUp size={14} className="text-emerald-400" /> CRO & Neuromarketing
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-500/15 text-emerald-400 px-3 py-0.5 rounded-full font-semibold border border-emerald-500/30 text-[10px]">
          <Sparkles size={12} />
          <span>Alta Conversão de Vendas</span>
        </div>
      </div>

      {/* Landing Page Funnel Frame */}
      <div className="bg-black/70 rounded-2xl p-4 sm:p-5 border border-white/[0.06] text-center space-y-3.5">
        {/* Headline */}
        <div className="space-y-1.5">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#EC6726]/20 text-[#FFD600] text-[9px] font-bold uppercase tracking-wider">
            Oferta Exclusiva
          </div>
          <div className="w-4/5 h-3 bg-white/90 mx-auto rounded-full" />
          <div className="w-3/5 h-2.5 bg-neutral-400 mx-auto rounded-full" />
        </div>

        {/* Dynamic CTA */}
        <div className="py-2">
          <motion.div 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="inline-flex items-center gap-2 bg-[#1D1D1F] hover:bg-black dark:bg-[#FFD600] text-white dark:text-black px-6 py-2.5 rounded-full text-xs font-bold shadow-md cursor-pointer font-sans"
          >
            <Sparkles size={13} />
            <span>GARANTIR VAGA AGORA</span>
            <ArrowRight size={13} />
          </motion.div>
        </div>

        {/* Social Proof & Metrics Mock */}
        <div className="pt-2 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-left">
          <div className="p-2.5 rounded-xl bg-white/[0.03]">
            <div className="text-[11px] font-bold text-white flex items-center gap-1">
              <Star size={11} className="text-yellow-400 fill-yellow-400" /> 4.9/5.0
            </div>
            <div className="text-[8px] text-neutral-400 mt-0.5">Satisfação</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03]">
            <div className="text-[11px] font-bold text-emerald-400">+42%</div>
            <div className="text-[8px] text-neutral-400 mt-0.5">Conversão</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.03]">
            <div className="text-[11px] font-bold text-blue-400">&lt; 0.8s</div>
            <div className="text-[8px] text-neutral-400 mt-0.5">Carregamento</div>
          </div>
        </div>
      </div>

      {/* Footer Trackers */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-emerald-400" />
          Pixel + GA4 + GTM Configurados
        </span>
        <span className="text-[#FFD600] font-semibold">A/B Test Ready</span>
      </div>
    </div>
  );
};

/* 4. Visual: Tráfego Pago Google ADS */
export const VisualGoogleAds: React.FC = () => {
  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Header Search Top */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-semibold">
          <Search size={14} className="text-[#FFD600]" />
          <span>Google Search • Posição #1</span>
        </div>
        <span className="text-[10px] bg-blue-500/15 text-blue-400 px-3 py-0.5 rounded-full font-semibold border border-blue-500/30 flex items-center gap-1">
          <TrendingUp size={12} /> ROAS 4.8x Médio
        </span>
      </div>

      {/* Ad Card Mockup */}
      <div className="bg-black/70 rounded-2xl p-4 sm:p-5 border border-white/[0.06] text-left space-y-2">
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-400">
          <span className="bg-white/10 text-neutral-200 px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider font-bold">
            Patrocinado
          </span>
          <span className="text-neutral-400">https://suaempresa.com.br/solucoes</span>
        </div>
        
        <div className="text-blue-400 font-semibold text-sm hover:underline cursor-pointer tracking-tight">
          Soluções Estratégicas de Alto Nível | Fale com Especialistas
        </div>
        
        <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
          Aumente suas vendas e capte clientes qualificados todos os dias. Atendimento consultivo, metodologia validada e resultados rápidos.
        </p>

        {/* Extensions Sitelinks */}
        <div className="grid grid-cols-2 gap-2 pt-1.5">
          <div className="p-2 rounded-xl bg-white/[0.03] text-[10px] text-blue-300">
            • Solicitar Orçamento Rápido
          </div>
          <div className="p-2 rounded-xl bg-white/[0.03] text-[10px] text-blue-300">
            • Ver Portfólio de Cases
          </div>
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-blue-400" />
          PMax + Rede de Pesquisa + Remarketing
        </span>
        <span className="text-emerald-400 font-semibold">Menor Custo por Lead</span>
      </div>
    </div>
  );
};

/* 5. Visual: Criação de Logo & Identidade Visual (Apple Precision Golden Ratio Grid) */
export const VisualLogoBrand: React.FC = () => {
  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <span className="text-[11px] font-sans text-neutral-300 flex items-center gap-1.5 font-semibold">
          <Palette size={14} className="text-[#EC6726]" /> Proporção Áurea & Geometria
        </span>
        <span className="text-[10px] bg-[#EC6726]/15 text-[#FFD600] px-3 py-0.5 rounded-full font-semibold border border-[#EC6726]/30">
          Manual de Marca Completo
        </span>
      </div>

      {/* Grid Construction & Color Swatches */}
      <div className="bg-black/70 p-4 sm:p-5 rounded-2xl border border-white/[0.06] space-y-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Emblem Construct */}
          <div className="w-20 h-20 rounded-2xl border border-white/20 flex items-center justify-center relative shrink-0 bg-white/[0.03]">
            {/* Concentric Golden Ratio Circles */}
            <div className="absolute inset-2 rounded-full border border-dashed border-[#EC6726]/40" />
            <div className="absolute inset-4 rounded-full border border-dashed border-[#FFD600]/30" />
            <div className="w-10 h-10 rounded-full bg-[#EC6726] dark:bg-[#FFD600] flex items-center justify-center font-display font-black text-white dark:text-black text-lg shadow-md">
              D
            </div>
            <span className="absolute -bottom-2 text-[8px] font-mono text-[#FFD600] bg-black px-1.5 py-0.2 rounded-full border border-white/20">
              Φ 1.618
            </span>
          </div>

          {/* Typography Specimen */}
          <div className="flex-1 space-y-1 text-left">
            <div className="text-xs font-bold text-white tracking-widest uppercase font-display">
              DENIS PIAIA
            </div>
            <div className="text-[10px] text-neutral-400 font-mono">
              Font: Inter Variable + Space Grotesk
            </div>
            <div className="text-[9px] text-emerald-400 flex items-center gap-1 pt-1">
              <CheckCircle2 size={11} /> Vetores com Precisão Matemática
            </div>
          </div>
        </div>

        {/* Color Palette Swatches */}
        <div className="pt-2 border-t border-white/[0.06]">
          <div className="text-[10px] text-neutral-400 mb-2 font-mono">Paleta Cromática Semântica:</div>
          <div className="grid grid-cols-4 gap-2">
            <div className="p-1.5 rounded-xl bg-white/[0.03] text-center">
              <div className="h-6 rounded-lg bg-[#EC6726] mb-1" />
              <span className="text-[8px] text-neutral-300 font-mono">#EC6726</span>
            </div>
            <div className="p-1.5 rounded-xl bg-white/[0.03] text-center">
              <div className="h-6 rounded-lg bg-[#FFD600] mb-1" />
              <span className="text-[8px] text-neutral-300 font-mono">#FFD600</span>
            </div>
            <div className="p-1.5 rounded-xl bg-white/[0.03] text-center">
              <div className="h-6 rounded-lg bg-[#111114] mb-1 border border-white/10" />
              <span className="text-[8px] text-neutral-300 font-mono">#111114</span>
            </div>
            <div className="p-1.5 rounded-xl bg-white/[0.03] text-center">
              <div className="h-6 rounded-lg bg-[#F5F5F7] mb-1" />
              <span className="text-[8px] text-neutral-300 font-mono">#F5F5F7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-[#FFD600]" />
          Arquivos em .AI, .SVG, .PDF e .PNG
        </span>
        <span className="text-[#FFD600] font-semibold">Autoridade Imediata</span>
      </div>
    </div>
  );
};

/* 6. Visual: Folhetos & Folders (Apple Minimalist Blueprint) */
export const VisualFolhetosFolders: React.FC = () => {
  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <span className="text-[11px] font-sans text-neutral-300 flex items-center gap-1.5 font-semibold">
          <FileText size={14} className="text-[#FFD600]" /> Fechamento Gráfico & Editorial
        </span>
        <span className="text-[10px] bg-yellow-500/15 text-yellow-400 px-3 py-0.5 rounded-full font-semibold border border-yellow-500/30">
          PDF/X-1a Ready
        </span>
      </div>

      {/* 3-fold brochure diagram */}
      <div className="bg-black/70 p-4 sm:p-5 rounded-2xl border border-white/[0.06] space-y-3.5">
        <div className="grid grid-cols-3 gap-2">
          {/* Fold 1 */}
          <div className="h-28 bg-white/[0.04] rounded-xl border-r border-dashed border-white/20 p-2.5 flex flex-col justify-between">
            <div className="w-8 h-2 bg-[#EC6726] rounded-full" />
            <div className="space-y-1.5">
              <div className="w-full h-1 bg-white/30 rounded-full" />
              <div className="w-4/5 h-1 bg-white/30 rounded-full" />
              <div className="w-2/3 h-1 bg-white/30 rounded-full" />
            </div>
            <div className="text-[8px] text-neutral-400 font-mono text-center bg-black/60 py-0.5 rounded-md">
              Dobra 1 (Capa)
            </div>
          </div>

          {/* Fold 2 */}
          <div className="h-28 bg-white/[0.04] rounded-xl border-r border-dashed border-white/20 p-2.5 flex flex-col justify-between">
            <div className="w-8 h-2 bg-[#FFD600] rounded-full" />
            <div className="space-y-1.5">
              <div className="w-full h-1 bg-white/30 rounded-full" />
              <div className="w-full h-1 bg-white/30 rounded-full" />
              <div className="w-3/4 h-1 bg-white/30 rounded-full" />
            </div>
            <div className="text-[8px] text-neutral-400 font-mono text-center bg-black/60 py-0.5 rounded-md">
              Dobra 2 (Corpo)
            </div>
          </div>

          {/* Fold 3 */}
          <div className="h-28 bg-white/[0.04] rounded-xl p-2.5 flex flex-col justify-between">
            <div className="w-8 h-2 bg-emerald-500 rounded-full" />
            <div className="space-y-1.5">
              <div className="w-4/5 h-1 bg-white/30 rounded-full" />
              <div className="w-3/5 h-1 bg-white/30 rounded-full" />
            </div>
            <div className="text-[8px] text-neutral-400 font-mono text-center bg-black/60 py-0.5 rounded-md">
              Dobra 3 (Contato)
            </div>
          </div>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-yellow-400" />
          Sangrias, marcas de corte e verniz definidos
        </span>
        <span className="text-yellow-400 font-semibold">Impressão Sem Erros</span>
      </div>
    </div>
  );
};

/* 7. Visual: Cartão de Visita & Papelaria (Apple Wallet Card Style) */
export const VisualCartaoPapelaria: React.FC = () => {
  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <span className="text-[11px] font-sans text-neutral-300 flex items-center gap-1.5 font-semibold">
          <QrCode size={14} className="text-[#FFD600]" /> Cartão Executivo & QR Dinâmico
        </span>
        <span className="text-[10px] bg-purple-500/15 text-purple-400 px-3 py-0.5 rounded-full font-semibold border border-purple-500/30">
          Papelaria Completa
        </span>
      </div>

      {/* Business Card Showcase */}
      <div className="bg-black/70 p-4 sm:p-5 rounded-2xl border border-white/[0.06] space-y-3.5">
        <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 rounded-2xl border border-white/10 shadow-xl flex items-center justify-between gap-4">
          <div className="space-y-1.5 text-left">
            <div className="text-sm font-bold text-white font-display tracking-tight">DENIS PIAIA</div>
            <div className="text-[11px] text-[#FFD600] font-mono">
              Product Design • Frontend • IA
            </div>
            <div className="text-[10px] text-neutral-400">
              dpiaia@gmail.com • +55 (19) 98151-7551
            </div>
          </div>

          {/* Clean Frosted QR Code graphic */}
          <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex items-center justify-center shrink-0 shadow-md">
            <QrCode size={50} className="text-black" />
          </div>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-purple-400" />
          Salva contato instantâneo no celular + Papel timbrado & Pastas
        </span>
        <span className="text-purple-400 font-semibold">Elegância Corporativa</span>
      </div>
    </div>
  );
};

/* 8. Visual: Administração de Redes Sociais (Content Ops & Planner Dashboard) */
export const VisualSocialMediaManagement: React.FC = () => {
  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-semibold font-sans">
          <Share2 size={14} className="text-[#EC6726] dark:text-[#FFD600]" />
          <span>Gestão & Calendário Editorial</span>
        </div>
        <span className="text-[10px] bg-emerald-500/15 text-emerald-400 px-3 py-0.5 rounded-full font-semibold border border-emerald-500/30 flex items-center gap-1 font-mono">
          <TrendingUp size={11} /> +340% Alcance
        </span>
      </div>

      {/* Social Planner / Schedule UI */}
      <div className="bg-black/70 p-4 rounded-2xl border border-white/[0.06] space-y-3">
        {/* Weekly Mini Planner Strip */}
        <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
          <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <div className="text-neutral-500">SEG</div>
            <div className="text-white font-bold mt-0.5">Carrossel</div>
            <div className="text-[8px] text-emerald-400 mt-1">● Postado</div>
          </div>
          <div className="p-2 rounded-xl bg-[#EC6726]/15 border border-[#EC6726]/30">
            <div className="text-[#FFD600] font-bold">QUA</div>
            <div className="text-white font-bold mt-0.5">Reels / Case</div>
            <div className="text-[8px] text-[#FFD600] mt-1">● Agendado 18h</div>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <div className="text-neutral-500">SEX</div>
            <div className="text-white font-bold mt-0.5">Infográfico</div>
            <div className="text-[8px] text-blue-400 mt-1">● Pronto</div>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
            <div className="text-neutral-500">DOM</div>
            <div className="text-white font-bold mt-0.5">Stories Quiz</div>
            <div className="text-[8px] text-purple-400 mt-1">● Programado</div>
          </div>
        </div>

        {/* Real-time Interaction Bar */}
        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between text-[11px] font-sans">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#EC6726] to-[#FFD600] flex items-center justify-center text-white font-bold text-[10px]">
              DP
            </div>
            <div>
              <div className="text-white font-medium">Copy estratégica & Hashtags</div>
              <div className="text-[10px] text-neutral-400">Público-alvo qualificado & conversão de leads</div>
            </div>
          </div>
          <div className="flex items-center gap-3 text-neutral-400 font-mono text-[10px]">
            <span className="flex items-center gap-1 text-rose-400"><Heart size={11} /> 1.2k</span>
            <span className="flex items-center gap-1 text-blue-400"><MessageCircle size={11} /> 148</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-emerald-400" />
          Instagram, LinkedIn, Facebook e TikTok
        </span>
        <span className="text-emerald-400 font-semibold font-mono">Consistência 100%</span>
      </div>
    </div>
  );
};

/* 9. Visual: Criação de Imagens para Redes Sociais (Multi-Format Social Design Suite) */
export const VisualSocialMediaDesign: React.FC = () => {
  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-semibold font-sans">
          <ImageIcon size={14} className="text-[#FFD600]" />
          <span>Design Visual de Alto Impacto</span>
        </div>
        <span className="text-[10px] bg-purple-500/15 text-purple-400 px-3 py-0.5 rounded-full font-semibold border border-purple-500/30 font-mono">
          Feed 4:5 • Stories 9:16
        </span>
      </div>

      {/* Multi-format Creative Grid */}
      <div className="bg-black/70 p-4 rounded-2xl border border-white/[0.06] flex gap-3.5 items-center justify-center">
        {/* Feed Carousel Card (4:5 Format) */}
        <div className="w-36 h-44 rounded-2xl bg-gradient-to-b from-[#1E1E24] to-[#121216] border border-white/15 p-3 flex flex-col justify-between shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#EC6726]/20 rounded-full blur-xl pointer-events-none" />
          <div className="space-y-1 z-10">
            <span className="text-[8px] font-mono uppercase tracking-wider text-[#FFD600] bg-black/40 px-1.5 py-0.5 rounded border border-white/10">
              Carrossel 1/5
            </span>
            <div className="text-[11px] font-display font-bold text-white leading-tight mt-1">
              Como Escalar com Design Ops & IA
            </div>
          </div>

          <div className="z-10 space-y-1.5">
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-[#EC6726] to-[#FFD600]" />
            </div>
            <div className="flex justify-between items-center text-[8px] text-neutral-400 font-mono">
              <span>Arraste pro lado 👉</span>
              <span className="text-white font-bold">1080x1350</span>
            </div>
          </div>
        </div>

        {/* Stories / Reels Card (9:16 Format) */}
        <div className="w-24 h-44 rounded-2xl bg-gradient-to-b from-[#2A1B18] to-[#121216] border border-[#EC6726]/40 p-2.5 flex flex-col justify-between shadow-lg relative overflow-hidden">
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[7px] text-neutral-400 font-mono">
              <span className="text-[#FFD600] font-bold">STORY</span>
              <span>9:16</span>
            </div>
            <div className="w-full aspect-square rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
              <Sparkles size={16} className="text-[#FFD600] animate-pulse" />
            </div>
          </div>

          <div className="text-center">
            <div className="text-[8px] font-bold text-white bg-white/10 py-1 rounded-md">
              Arrasta pra Cima
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-[#FFD600]" />
          Identidade visual alinhada, cores, tipografia e alta resolução
        </span>
        <span className="text-[#FFD600] font-semibold font-mono">Pronto p/ Postar</span>
      </div>
    </div>
  );
};

/* 10. Visual: Presença Digital & Redes Sociais Completa (Dobra 5) */
export const VisualSocialMedia: React.FC = () => {
  const [socialTab, setSocialTab] = useState<'creative' | 'planner'>('creative');

  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-semibold font-sans">
          <Share2 size={14} className="text-[#EC6726] dark:text-[#FFD600]" />
          <span>Estratégia & Design de Alto Impacto</span>
        </div>
        <div className="flex bg-white/[0.06] rounded-full p-0.5 border border-white/[0.08]">
          <button 
            onClick={() => setSocialTab('creative')}
            className={`px-2.5 py-1 rounded-full text-[10px] font-sans transition-all ${
              socialTab === 'creative' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400'
            }`}
          >
            Peças Visuais
          </button>
          <button 
            onClick={() => setSocialTab('planner')}
            className={`px-2.5 py-1 rounded-full text-[10px] font-sans transition-all ${
              socialTab === 'planner' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400'
            }`}
          >
            Calendário
          </button>
        </div>
      </div>

      {/* Content */}
      {socialTab === 'creative' ? (
        <div className="bg-black/70 p-4 rounded-2xl border border-white/[0.06] flex gap-3.5 items-center justify-center">
          {/* Feed Carousel Card (4:5 Format) */}
          <div className="w-36 h-44 rounded-2xl bg-gradient-to-b from-[#1E1E24] to-[#121216] border border-white/15 p-3 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#EC6726]/20 rounded-full blur-xl pointer-events-none" />
            <div className="space-y-1 z-10">
              <span className="text-[8px] font-mono uppercase tracking-wider text-[#FFD600] bg-black/40 px-1.5 py-0.5 rounded border border-white/10">
                Carrossel 1/5
              </span>
              <div className="text-[11px] font-display font-bold text-white leading-tight mt-1">
                Autoridade & Conteúdo Estratégico
              </div>
            </div>

            <div className="z-10 space-y-1.5">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-gradient-to-r from-[#EC6726] to-[#FFD600]" />
              </div>
              <div className="flex justify-between items-center text-[8px] text-neutral-400 font-mono">
                <span>Arraste 👉</span>
                <span className="text-white font-bold">1080x1350</span>
              </div>
            </div>
          </div>

          {/* Stories / Reels Card (9:16 Format) */}
          <div className="w-24 h-44 rounded-2xl bg-gradient-to-b from-[#2A1B18] to-[#121216] border border-[#EC6726]/40 p-2.5 flex flex-col justify-between shadow-lg relative overflow-hidden">
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[7px] text-neutral-400 font-mono">
                <span className="text-[#FFD600] font-bold">STORY</span>
                <span>9:16</span>
              </div>
              <div className="w-full aspect-square rounded-lg bg-black/50 border border-white/10 flex items-center justify-center">
                <Sparkles size={16} className="text-[#FFD600] animate-pulse" />
              </div>
            </div>

            <div className="text-center">
              <div className="text-[8px] font-bold text-white bg-white/10 py-1 rounded-md">
                Engajamento
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black/70 p-4 rounded-2xl border border-white/[0.06] space-y-3">
          <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <div className="text-neutral-500">SEG</div>
              <div className="text-white font-bold mt-0.5">Carrossel</div>
              <div className="text-[8px] text-emerald-400 mt-1">● Publicado</div>
            </div>
            <div className="p-2 rounded-xl bg-[#EC6726]/15 border border-[#EC6726]/30">
              <div className="text-[#FFD600] font-bold">QUA</div>
              <div className="text-white font-bold mt-0.5">Case / Vídeo</div>
              <div className="text-[8px] text-[#FFD600] mt-1">● Agendado 18h</div>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <div className="text-neutral-500">SEX</div>
              <div className="text-white font-bold mt-0.5">Infográfico</div>
              <div className="text-[8px] text-blue-400 mt-1">● Pronto</div>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <div className="text-neutral-500">DOM</div>
              <div className="text-white font-bold mt-0.5">Stories Box</div>
              <div className="text-[8px] text-purple-400 mt-1">● Programado</div>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between text-[11px] font-sans">
            <span className="text-neutral-300">Copy persuasiva + hashtags segmentadas por nicho</span>
            <span className="text-emerald-400 font-mono text-[10px]">● Alta Conversão</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-[#FFD600]" />
          Instagram, LinkedIn e WhatsApp ativos com autoridade
        </span>
        <span className="text-[#FFD600] font-semibold font-mono">Feed Impecável</span>
      </div>
    </div>
  );
};

/* 11. Visual: Design Gráfico & Materiais Impressos Completo (Dobra 8) */
export const VisualPrintedMaterials: React.FC = () => {
  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs text-neutral-300 relative select-none">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2 text-[11px] text-neutral-300 font-semibold font-sans">
          <Palette size={14} className="text-purple-400" />
          <span>Fechamento Técnico para Gráfica (PDF/X-1a)</span>
        </div>
        <span className="text-[10px] bg-purple-500/15 text-purple-400 px-3 py-0.5 rounded-full font-semibold border border-purple-500/30 font-mono">
          CMYK 300 DPI • Sangrias
        </span>
      </div>

      {/* Print Materials Grid: Business Card + 3-Fold Brochure */}
      <div className="bg-black/70 p-4 rounded-2xl border border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Executive Business Card with QR */}
        <div className="h-28 rounded-2xl bg-gradient-to-tr from-[#1E1E24] to-[#2D2D38] border border-white/20 p-3.5 flex items-center justify-between shadow-xl relative overflow-hidden">
          <div className="space-y-1 z-10">
            <div className="w-4 h-4 rounded bg-[#EC6726] dark:bg-[#FFD600] flex items-center justify-center font-bold text-white dark:text-black text-[7px]">
              D
            </div>
            <div className="font-bold text-white text-xs font-display">
              Cartão Executivo
            </div>
            <div className="text-[9px] text-[#FFD600]">
              QR Code Dinâmico no Verso
            </div>
          </div>
          <div className="w-14 h-14 bg-white rounded-xl p-1 flex items-center justify-center shrink-0 shadow-md">
            <QrCode size={44} className="text-black" />
          </div>
        </div>

        {/* Brochure 3-folds spec */}
        <div className="h-28 rounded-2xl bg-[#18181D] border border-white/10 p-3 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] text-neutral-400 font-mono">
            <span className="text-white font-bold">Folder Tri-Fold & Catálogo</span>
            <span className="text-emerald-400">Pronto p/ Impressão</span>
          </div>
          <div className="flex gap-1.5 h-12 my-1">
            <div className="flex-1 bg-white/[0.04] border border-dashed border-white/20 rounded-lg flex items-center justify-center text-[8px] text-neutral-400">
              Dobra 1
            </div>
            <div className="flex-1 bg-white/[0.06] border border-dashed border-white/30 rounded-lg flex items-center justify-center text-[8px] text-neutral-300">
              Dobra 2
            </div>
            <div className="flex-1 bg-white/[0.04] border border-dashed border-white/20 rounded-lg flex items-center justify-center text-[8px] text-neutral-400">
              Dobra 3
            </div>
          </div>
          <div className="text-[9px] text-neutral-400 font-mono flex justify-between">
            <span>Marcas de corte</span>
            <span className="text-purple-400">Verniz localizado</span>
          </div>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-neutral-400 font-sans">
        <span className="flex items-center gap-1 text-neutral-300">
          <CheckCircle2 size={13} className="text-purple-400" />
          Cartões, folders, papel timbrado e pastas com acabamento de luxo
        </span>
        <span className="text-purple-400 font-semibold">Zero Erros na Gráfica</span>
      </div>
    </div>
  );
};

// Backwards compatibility and semantic aliases
export const VisualWebsites = VisualSites;
export const VisualBranding = VisualLogoBrand;

export const serviceVisualMap: Record<string, React.ReactNode> = {
  // New 8 dobras keys
  'ai-ds-modernization': <VisualAIDesignSystemModernization />,
  'ai-ds-creation': <VisualAIDesignSystemCreation />,
  'websites': <VisualWebsites />,
  'landing-pages': <VisualLandingPages />,
  'social-media': <VisualSocialMedia />,
  'google-ads': <VisualGoogleAds />,
  'branding': <VisualBranding />,
  'printed-materials': <VisualPrintedMaterials />,

  // Legacy keys support
  'ai-ds': <VisualAIDesignSystemModernization />,
  'sites': <VisualWebsites />,
  'social-media-management': <VisualSocialMediaManagement />,
  'social-media-design': <VisualSocialMediaDesign />,
  'logo-brand': <VisualLogoBrand />,
  'folhetos-folders': <VisualFolhetosFolders />,
  'cartao-papelaria': <VisualCartaoPapelaria />,
};
