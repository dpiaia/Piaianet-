import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import SpaceHeroIllustration from './SpaceHeroIllustration';
import GalaxyHeroBackground from './GalaxyHeroBackground';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

interface RotatingTitleItem {
  prefix: string;
  highlight: string;
  suffix?: string;
}

const defaultTitles: RotatingTitleItem[] = [
  { prefix: 'Design Systems para IA & ', highlight: 'Frontend de alta performance' },
  { prefix: 'Sites pessoais ou para ', highlight: 'sua empresa' },
  { prefix: 'Imagens para ', highlight: 'redes sociais, impressos ou anúncios' },
];

const FreelaHero: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].hero;

  const titles = t.rotatingTitles && t.rotatingTitles.length > 0 
    ? t.rotatingTitles 
    : defaultTitles;

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [titles.length]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá Denis! Vi seu site e gostaria de conversar sobre meu projeto.');
    window.open(`https://api.whatsapp.com/send?phone=5519991119674&text=${message}`, '_blank');
  };

  const currentTitle = titles[currentTitleIndex] || titles[0];

  return (
    <section 
      id="freela-top"
      className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-14 bg-brand-light dark:bg-[#08080A] transition-colors duration-300 overflow-hidden"
    >
      {/* Dynamic Animated Galaxy Starfield & Floating Planets Background */}
      <GalaxyHeroBackground />

      <div className="container mx-auto px-6 z-10 relative max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Direct Commercial Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono font-medium tracking-tight mb-4 text-neutral-800 dark:text-neutral-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>{t.availabilityBadge}</span>
            </div>

            {/* Author / Title Eyebrow */}
            <div className="text-xs sm:text-sm font-mono font-bold text-[#EC6726] dark:text-[#FFD600] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <span>{t.greeting}</span>
            </div>

            {/* Main Rotating Headline */}
            <div className="min-h-[110px] sm:min-h-[135px] lg:min-h-[145px] flex flex-col justify-center mb-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentTitleIndex + language}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-3xl sm:text-5xl lg:text-[48px] xl:text-[52px] font-bold leading-[1.14] tracking-[-0.03em] text-brand-dark dark:text-white"
                >
                  {currentTitle.prefix}
                  <span className="text-[#EC6726] dark:text-[#FFD600]">
                    {currentTitle.highlight}
                  </span>
                  {currentTitle.suffix || ''}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Rotating Title Progress Indicator */}
            <div className="flex items-center gap-2 mb-5">
              {titles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTitleIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentTitleIndex 
                      ? 'w-8 bg-[#EC6726] dark:bg-[#FFD600]' 
                      : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400'
                  }`}
                  aria-label={`Ver título ${idx + 1}`}
                />
              ))}
            </div>

            {/* Concise Value Proposition */}
            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg mb-7 leading-relaxed max-w-xl font-normal">
              {t.aboutSummary}
            </p>

            {/* Clean, Decisive Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-7">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-tight bg-[#1D1D1F] hover:bg-black dark:bg-[#FFD600] dark:hover:bg-yellow-300 text-white dark:text-black transition-all duration-200 shadow-sm flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{t.ctaSecondary}</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 rounded-full text-sm font-semibold tracking-tight bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-200 shadow-sm flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>{t.ctaWhatsApp}</span>
              </button>
            </div>

            {/* Quick Proof Strip */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 pt-2 border-t border-black/[0.06] dark:border-white/[0.06] w-full max-w-lg">
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-brand-dark dark:text-white">+15 anos</span> de mercado
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-brand-dark dark:text-white">Figma 1:1</span> código
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span className="flex items-center gap-1.5">
                <span className="font-bold text-brand-dark dark:text-white">Netshoes, iFood, Clinicorp</span>
              </span>
            </div>

          </motion.div>

          {/* Right Column: Space Hero Rocket Illustration with Animated Orbits */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <SpaceHeroIllustration />
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div 
        onClick={() => scrollToSection('credentials-marquee')}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1 text-neutral-400 hover:text-brand-dark dark:hover:text-white transition-colors text-xs font-mono"
      >
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
};

export default FreelaHero;
