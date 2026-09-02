import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, ArrowRight, Layers, CheckCircle2, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import ParticleBackground from '../ui/ParticleBackground';
import SpaceHeroIllustration from './SpaceHeroIllustration';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

const FreelaHero: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].hero;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá Denis! Vi seus serviços no site e gostaria de conversar sobre um novo projeto.');
    window.open(`https://api.whatsapp.com/send?phone=5519981517551&text=${message}`, '_blank');
  };

  return (
    <section 
      id="freela-top"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-brand-light dark:bg-[#050507] transition-colors duration-500"
    >
      {/* Interactive Space Starfield Layer */}
      <ParticleBackground />

      {/* Atmospheric Apple Cosmic Ambient Lighting */}
      <div className="absolute top-16 left-1/4 -translate-x-1/2 w-[600px] h-[360px] bg-[#EC6726]/10 dark:bg-[#FFD600]/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FFD600]/8 dark:bg-blue-500/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 relative max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: About Me & Delivery Promise (Apple Pro Headline Style) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Live Availability Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 dark:bg-green-950/40 text-green-700 dark:text-green-400 text-xs font-medium tracking-tight mb-6 backdrop-blur-xl shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>{t.availabilityBadge}</span>
            </motion.div>

            {/* Greeting / Eyebrow */}
            <div className="text-xs sm:text-sm font-mono font-bold text-[#EC6726] dark:text-[#FFD600] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Sparkles size={15} />
              <span>{t.greeting}</span>
            </div>

            {/* Main Headline - Apple Pro Typography with tight tracking */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-bold leading-[1.08] tracking-[-0.03em] mb-6 text-brand-dark dark:text-white">
              {t.titleStart}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC6726] via-[#FF8A00] to-[#FFD600] dark:from-[#FFD600] dark:via-[#FFF275] dark:to-orange-400">
                {t.titleHighlight}
              </span>{' '}
              {t.titleEnd}
            </h1>

            {/* About Denis Piaia Overall */}
            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg mb-6 leading-relaxed max-w-2xl font-normal">
              {t.aboutSummary}
            </p>

            {/* What I Deliver for You - Frosted Apple Glass Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white/70 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] backdrop-blur-2xl mb-8 text-sm sm:text-base text-neutral-800 dark:text-neutral-200 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-full">
              <div className="font-bold text-[#EC6726] dark:text-[#FFD600] text-xs uppercase tracking-wider font-mono mb-2 flex items-center gap-2">
                <CheckCircle2 size={15} />
                <span>O Que Eu Entrego</span>
              </div>
              <p className="leading-relaxed text-neutral-700 dark:text-neutral-300 text-sm sm:text-[15px]">
                {t.deliveryPromise}
              </p>
            </div>

            {/* Action Buttons: Apple Pill Geometry */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('services-products')}
                className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-tight bg-[#1D1D1F] hover:bg-black dark:bg-[#FFD600] dark:hover:bg-yellow-300 text-white dark:text-black transition-all duration-200 shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Layers size={17} />
                <span>{t.ctaPrimary}</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-3.5 rounded-full text-sm font-semibold tracking-tight bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 transition-all duration-200 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <MessageCircle size={17} />
                <span>{t.ctaWhatsApp}</span>
              </button>

              <button
                onClick={() => scrollToSection('contact-freela')}
                className="px-6 py-3.5 rounded-full text-sm font-medium tracking-tight bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08] transition-all duration-200 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{t.ctaSecondary}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Cosmic Apple Space Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <SpaceHeroIllustration />
          </motion.div>

        </div>
      </div>

      {/* Subtle Apple Scroll Indicator */}
      <div 
        onClick={() => scrollToSection('credentials-marquee')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1 text-neutral-400 hover:text-brand-dark dark:hover:text-white transition-colors text-xs font-mono"
      >
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
};

export default FreelaHero;
