import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Palette, Layers, Zap, Check, X, ArrowRight, Code2, Cpu } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5" />,
  Bot: <Bot className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
};

const AIDesignSystemCarroChefe: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].flagship;
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');

  return (
    <section 
      id="ai-ds-flagship"
      className="py-24 bg-gradient-to-b from-brand-light via-neutral-100/60 to-brand-light dark:from-brand-dark dark:via-neutral-950/70 dark:to-brand-dark relative overflow-hidden transition-colors duration-300 border-y border-brand-lead/10 dark:border-white/5"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-brand-yellow/10 dark:bg-brand-yellow/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-brand-lead/5 dark:bg-white/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Flagship Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/20 dark:bg-brand-yellow/15 text-brand-dark dark:text-brand-yellow border border-brand-yellow/40 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Sparkles size={14} className="text-yellow-600 dark:text-yellow-300 animate-spin" style={{ animationDuration: '4s' }} />
            {t.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold mb-6 text-brand-dark dark:text-white leading-tight"
          >
            {t.titleStart}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lead to-neutral-700 dark:from-brand-yellow dark:to-yellow-200">
              {t.titleHighlight}
            </span>{' '}
            {t.titleEnd}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Why it Matters Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-brand-yellow/30 dark:border-brand-yellow/20 shadow-xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 dark:bg-brand-yellow/15 flex items-center justify-center shrink-0 text-brand-dark dark:text-brand-yellow">
              <Cpu size={26} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-dark dark:text-white mb-2 flex items-center gap-2">
                {t.whyItMatters.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                {t.whyItMatters.desc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* The 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {t.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/70 dark:bg-neutral-900/60 border border-brand-lead/10 dark:border-white/5 hover:border-brand-yellow/50 dark:hover:border-brand-yellow/50 transition-all duration-300 hover:-translate-y-1 shadow-sm group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-lead/5 dark:bg-white/5 text-brand-lead dark:text-brand-yellow flex items-center justify-center mb-4 group-hover:bg-brand-yellow/20 transition-colors">
                {iconMap[pillar.icon] || <Bot size={20} />}
              </div>
              <h4 className="font-bold text-base text-brand-dark dark:text-white mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Comparison Simulator: Before vs After AI-Ready */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-2xl bg-neutral-950 text-white p-6 sm:p-10 border border-neutral-800 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-yellow uppercase tracking-widest mb-1">
                <Code2 size={14} /> Benchmark de Engenharia com IA
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                O Impacto Direto na Qualidade do Código Gerado
              </h3>
            </div>

            {/* Switcher Toggle */}
            <div className="flex items-center bg-neutral-900 p-1 rounded-xl border border-neutral-800">
              <button
                onClick={() => setActiveTab('after')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'after'
                    ? 'bg-brand-yellow text-neutral-950 shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Sparkles size={14} /> Com Design System IA-Ready
              </button>
              <button
                onClick={() => setActiveTab('before')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'before'
                    ? 'bg-neutral-800 text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <X size={14} /> Sem Adequação
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side: Checklist */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                {activeTab === 'after' ? (
                  <>
                    <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">
                      ✓
                    </span>
                    {t.comparison.afterTitle}
                  </>
                ) : (
                  <>
                    <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xs">
                      ✕
                    </span>
                    {t.comparison.beforeTitle}
                  </>
                )}
              </h4>

              <ul className="space-y-3">
                {(activeTab === 'after' ? t.comparison.afterList : t.comparison.beforeList).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                    {activeTab === 'after' ? (
                      <Check size={16} className="text-green-400 shrink-0 mt-0.5" />
                    ) : (
                      <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                    )}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: Code / Visual Mock */}
            <div className="rounded-xl bg-neutral-900/90 border border-neutral-800 p-5 font-mono text-xs overflow-hidden">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  <span className="ml-2 text-[10px]">generated-component.tsx</span>
                </span>
                <span className="text-[10px] text-brand-yellow font-semibold">
                  {activeTab === 'after' ? '100% OK' : 'DESIGN DRIFT'}
                </span>
              </div>

              {activeTab === 'after' ? (
                <div className="text-green-400/90 space-y-1 overflow-x-auto">
                  <p className="text-neutral-500">// IA consome tokens exatos e regras de AGENTS.md</p>
                  <p><span className="text-purple-400">import</span> &#123; Button, Card &#125; <span className="text-purple-400">from</span> <span className="text-yellow-300">'@brand/ui'</span>;</p>
                  <p className="pt-1"><span className="text-blue-400">export const</span> <span className="text-yellow-200">CheckoutSummary</span> = () =&gt; (</p>
                  <p className="pl-4">&lt;<span className="text-blue-300">Card</span> <span className="text-purple-300">variant</span>=<span className="text-yellow-300">"elevated"</span> <span className="text-purple-300">className</span>=<span className="text-yellow-300">"p-6 rounded-token"</span>&gt;</p>
                  <p className="pl-8">&lt;<span className="text-blue-300">h3</span> <span className="text-purple-300">className</span>=<span className="text-yellow-300">"text-brand-dark dark:text-white font-display"</span>&gt;...</p>
                  <p className="pl-8">&lt;<span className="text-blue-300">Button</span> <span className="text-purple-300">variant</span>=<span className="text-yellow-300">"primary"</span>&gt;Confirmar&lt;/<span className="text-blue-300">Button</span>&gt;</p>
                  <p className="pl-4">&lt;/<span className="text-blue-300">Card</span>&gt;</p>
                  <p>);</p>
                </div>
              ) : (
                <div className="text-red-400/80 space-y-1 overflow-x-auto">
                  <p className="text-neutral-500">// Sem tokens: cores inventadas e classes quebradas</p>
                  <p>&lt;<span className="text-blue-300">div</span> <span className="text-purple-300">style</span>=&#123;&#123; background: <span className="text-yellow-300">'#6366f1'</span>, padding: <span className="text-yellow-300">'23px'</span> &#125;&#125;&gt;</p>
                  <p className="pl-4">&lt;<span className="text-blue-300">h3</span> <span className="text-purple-300">style</span>=&#123;&#123; fontSize: <span className="text-yellow-300">'22px'</span>, color: <span className="text-yellow-300">'#000'</span> &#125;&#125;&gt;Inconsistente&lt;/<span className="text-blue-300">h3</span>&gt;</p>
                  <p className="pl-4">&lt;<span className="text-blue-300">button</span> <span className="text-purple-300">className</span>=<span className="text-yellow-300">"bg-indigo-500 hover:bg-indigo-600 rounded-3xl"</span>&gt;</p>
                  <p className="pl-8 text-neutral-500">// Botão desalinhado com o Design System oficial</p>
                  <p className="pl-4">&lt;/<span className="text-blue-300">button</span>&gt;</p>
                  <p>&lt;/<span className="text-blue-300">div</span>&gt;</p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action inside Banner */}
          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Transforme seu Design System em uma máquina aceleradora de engenharia.
            </span>
            <a href="#calculator">
              <Button 
                variant="primary" 
                className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider py-3 px-6"
                icon={<ArrowRight size={14} />}
              >
                {t.cta}
              </Button>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AIDesignSystemCarroChefe;
