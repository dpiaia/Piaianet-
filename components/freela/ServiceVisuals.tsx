import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, Sparkles, CheckCircle2, TrendingUp, Search, QrCode, 
  Palette, FileText, Monitor, Smartphone, Gauge, Zap, 
  Code2, Check, ArrowRight, Layers, Eye, RefreshCw, Star
} from 'lucide-react';

/* 1. Visual: Adequação de Design System para IA (Apple macOS Studio Inspector) */
export const VisualAIDesignSystem: React.FC = () => {
  const [activeToken, setActiveToken] = useState<'color' | 'radius' | 'spacing' | 'prompt'>('color');

  return (
    <div className="w-full backdrop-blur-2xl bg-[#111114]/90 dark:bg-black/90 rounded-3xl p-5 sm:p-7 border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-xs font-mono text-neutral-300 relative overflow-hidden select-none">
      {/* macOS Window Titlebar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3.5 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-xs" />
          </div>
          <span className="ml-2 text-[11px] text-neutral-400 font-sans font-medium tracking-tight">
            AGENTS.md • tokens.json
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#FFD600]/10 text-[#FFD600] px-3 py-0.5 rounded-full border border-[#FFD600]/20 text-[10px] font-semibold">
          <Bot size={12} className="animate-pulse" />
          <span>AI Context 100% Determinado</span>
        </div>
      </div>

      {/* Segmented Token Switcher (Apple Segments) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4 bg-white/[0.04] p-1 rounded-2xl border border-white/[0.06]">
        <button 
          onClick={() => setActiveToken('color')}
          className={`px-3 py-1.5 rounded-xl text-[11px] transition-all flex items-center justify-center gap-1.5 font-sans ${
            activeToken === 'color' 
              ? 'bg-white/20 text-white font-semibold shadow-sm' 
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Palette size={12} />
          <span>Color</span>
        </button>
        <button 
          onClick={() => setActiveToken('radius')}
          className={`px-3 py-1.5 rounded-xl text-[11px] transition-all flex items-center justify-center gap-1.5 font-sans ${
            activeToken === 'radius' 
              ? 'bg-white/20 text-white font-semibold shadow-sm' 
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Layers size={12} />
          <span>Radius</span>
        </button>
        <button 
          onClick={() => setActiveToken('spacing')}
          className={`px-3 py-1.5 rounded-xl text-[11px] transition-all flex items-center justify-center gap-1.5 font-sans ${
            activeToken === 'spacing' 
              ? 'bg-white/20 text-white font-semibold shadow-sm' 
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Code2 size={12} />
          <span>Fluid Space</span>
        </button>
        <button 
          onClick={() => setActiveToken('prompt')}
          className={`px-3 py-1.5 rounded-xl text-[11px] transition-all flex items-center justify-center gap-1.5 font-sans ${
            activeToken === 'prompt' 
              ? 'bg-white/20 text-white font-semibold shadow-sm' 
              : 'text-neutral-400 hover:text-white'
          }`}
        >
          <Sparkles size={12} />
          <span>AGENTS.md</span>
        </button>
      </div>

      {/* Code comparison box */}
      <div className="bg-black/80 rounded-2xl p-4 sm:p-5 border border-white/[0.06] font-mono text-xs leading-relaxed min-h-[140px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeToken === 'color' && (
            <motion.div 
              key="color" 
              initial={{ opacity: 0, y: 4 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -4 }}
              className="space-y-2"
            >
              <div className="text-neutral-500">// Definição Semântica W3C Token:</div>
              <div>
                <span className="text-purple-400 font-semibold">$color.brand.primary</span>: <span className="text-orange-400">oklch(0.6698 0.1803 42.9750)</span>;
              </div>
              <div className="text-neutral-500">// Paridade Tailwind & shadcn:</div>
              <div>
                <span className="text-blue-400">bg-brand-primary</span> <span className="text-neutral-600">→</span> <span className="text-emerald-400">text-brand-foreground</span>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 text-[11px] flex items-center gap-2 mt-2">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>Claude, Gemini e Cursor geram UI sem alucinação de cor (#EC6726 validado).</span>
              </div>
            </motion.div>
          )}

          {activeToken === 'radius' && (
            <motion.div 
              key="radius" 
              initial={{ opacity: 0, y: 4 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -4 }}
              className="space-y-2"
            >
              <div className="text-neutral-500">// Regra Matemática de Corner Radius Aninhado:</div>
              <div>
                <span className="text-purple-400 font-semibold">$radius.card</span> = <span className="text-blue-300">1.25rem (20px)</span>;
              </div>
              <div>
                <span className="text-purple-400 font-semibold">$radius.inner</span> = <span className="text-yellow-300">calc(var(--radius-card) - var(--padding))</span>;
              </div>
              <div className="p-2.5 rounded-xl bg-blue-950/40 border border-blue-800/40 text-blue-300 text-[11px] flex items-center gap-2 mt-2">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>Paridade 1:1 entre Figma Variables e componentes Radix / shadcn/ui.</span>
              </div>
            </motion.div>
          )}

          {activeToken === 'spacing' && (
            <motion.div 
              key="spacing" 
              initial={{ opacity: 0, y: 4 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -4 }}
              className="space-y-2"
            >
              <div className="text-neutral-500">// Escala Fluida Semântica:</div>
              <div>
                <span className="text-purple-400 font-semibold">$space.fluid.section</span> = <span className="text-pink-300">clamp(3rem, 6vw, 6rem)</span>;
              </div>
              <div>
                <span className="text-purple-400 font-semibold">$touch.target.min</span> = <span className="text-emerald-300">44px (Acessibilidade WCAG AA)</span>;
              </div>
              <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-300 text-[11px] flex items-center gap-2 mt-2">
                <CheckCircle2 size={14} className="shrink-0" />
                <span>Responsividade determinística para agentes de IA programarem mobile-first.</span>
              </div>
            </motion.div>
          )}

          {activeToken === 'prompt' && (
            <motion.div 
              key="prompt" 
              initial={{ opacity: 0, y: 4 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -4 }}
              className="space-y-2"
            >
              <div className="text-neutral-500">// Diretrizes de Contexto em AGENTS.md:</div>
              <div className="text-yellow-300 text-[11px]">
                # Rules: Always use strict token variables, never hardcode hex colors or arbitrary paddings.
              </div>
              <div className="p-2.5 rounded-xl bg-yellow-950/40 border border-yellow-800/40 text-yellow-300 text-[11px] flex items-center gap-2 mt-2">
                <Sparkles size={14} className="shrink-0" />
                <span>Engenheiros economizam até 70% do tempo ao usar Copilot / Cursor no frontend.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Metrics Bar */}
      <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-[11px]">
        <span className="flex items-center gap-1.5 text-neutral-400 font-sans">
          <CheckCircle2 size={13} className="text-[#FFD600]" />
          Figma ↔ Tokens ↔ React ↔ LLM
        </span>
        <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
          <Zap size={11} /> 5x Mais Produtividade de Código
        </span>
      </div>
    </div>
  );
};

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

export const serviceVisualMap: Record<string, React.ReactNode> = {
  'ai-ds': <VisualAIDesignSystem />,
  'sites': <VisualSites />,
  'landing-pages': <VisualLandingPages />,
  'google-ads': <VisualGoogleAds />,
  'logo-brand': <VisualLogoBrand />,
  'folhetos-folders': <VisualFolhetosFolders />,
  'cartao-papelaria': <VisualCartaoPapelaria />,
};
