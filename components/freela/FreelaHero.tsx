import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Calculator, Sparkles, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import Button from '../ui/Button';
import ParticleBackground from '../ui/ParticleBackground';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

const FreelaHero: React.FC = () => {
  const { scrollY } = useScroll();
  const { language } = useLanguage();
  const t = translationsFreela[language].hero;

  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const yContent = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);

  return (
    <section 
      id="freela-top"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-brand-light dark:bg-brand-dark transition-colors duration-300"
    >
      {/* Interactive Particles Layer */}
      <ParticleBackground />

      {/* Background Ambience Elements */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-lead/5 dark:bg-brand-yellow/10 rounded-full blur-[140px] opacity-60" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-lead/5 dark:bg-white/5 rounded-full blur-[120px] opacity-40" />
      </motion.div>

      <div className="container mx-auto px-6 z-10 relative">
        <motion.div 
          style={{ y: yContent, opacity }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Live Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 dark:bg-green-950/40 text-green-700 dark:text-green-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>{t.availabilityBadge}</span>
          </motion.div>

          {/* Main Commercial Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-brand-dark dark:text-white tracking-tight"
          >
            {t.titleStart}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lead via-neutral-700 to-brand-lead dark:from-brand-yellow dark:via-yellow-200 dark:to-brand-yellow">
              {t.titleHighlight}
            </span>{' '}
            {t.titleEnd}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-neutral-600 dark:text-neutral-300 text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed font-normal"
          >
            {t.subtitle}
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a href="#calculator">
              <Button 
                variant="primary"
                className="px-8 py-4 text-base font-bold shadow-lg shadow-brand-lead/10 dark:shadow-brand-yellow/10"
                icon={<Calculator size={18} />}
              >
                {t.ctaPrimary}
              </Button>
            </a>
            <a href="#services">
              <Button variant="outline" className="px-8 py-4 text-base font-semibold">
                {t.ctaSecondary}
              </Button>
            </a>
          </motion.div>

          {/* Metrics / Trust Badges Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-brand-lead/10 dark:border-white/10 text-left"
          >
            <div className="p-4 rounded-xl bg-white/40 dark:bg-neutral-900/40 border border-brand-lead/5 dark:border-white/5 backdrop-blur-xs">
              <div className="text-xl sm:text-2xl font-bold font-display text-brand-lead dark:text-brand-yellow mb-1 flex items-center gap-1.5">
                <Sparkles size={16} className="text-brand-yellow" />
                {t.metrics.experience.number}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {t.metrics.experience.label}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/40 dark:bg-neutral-900/40 border border-brand-lead/5 dark:border-white/5 backdrop-blur-xs">
              <div className="text-xl sm:text-2xl font-bold font-display text-brand-lead dark:text-brand-yellow mb-1 flex items-center gap-1.5">
                <Zap size={16} className="text-brand-yellow" />
                {t.metrics.speed.number}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {t.metrics.speed.label}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/40 dark:bg-neutral-900/40 border border-brand-lead/5 dark:border-white/5 backdrop-blur-xs">
              <div className="text-xl sm:text-2xl font-bold font-display text-brand-lead dark:text-brand-yellow mb-1 flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-brand-yellow" />
                {t.metrics.pedigree.number}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {t.metrics.pedigree.label}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/40 dark:bg-neutral-900/40 border border-brand-lead/5 dark:border-white/5 backdrop-blur-xs">
              <div className="text-xl sm:text-2xl font-bold font-display text-brand-lead dark:text-brand-yellow mb-1 flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-brand-yellow" />
                {t.metrics.satisfaction.number}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {t.metrics.satisfaction.label}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-400 text-xs">
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
};

export default FreelaHero;
