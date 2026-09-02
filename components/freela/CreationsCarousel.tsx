import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Layers, ArrowRight, CheckCircle2, Star, Sparkles 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

interface CreationsCarouselProps {
  onNavigateHome: () => void;
}

const CreationsCarousel: React.FC<CreationsCarouselProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();
  const t = translationsFreela[language].creations;
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = t.items;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const activeItem = items[currentIndex];

  return (
    <section 
      id="creations"
      className="py-28 bg-white/50 dark:bg-[#08080a] border-t border-black/[0.04] dark:border-white/[0.06] relative overflow-hidden transition-colors duration-500"
    >
      {/* Background Cosmic Atmosphere */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#EC6726]/10 dark:bg-[#FFD600]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono uppercase tracking-widest text-[#EC6726] dark:text-[#FFD600] mb-3 backdrop-blur-md">
              <Star size={13} />
              <span>{t.badge}</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-brand-dark dark:text-white">
              {t.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC6726] to-[#FFD600] dark:from-[#FFD600] dark:to-orange-400">
                {t.titleHighlight}
              </span>
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-2 max-w-xl font-normal">
              {t.subtitle}
            </p>
          </div>

          {/* Apple Style Carousel Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-neutral-400 mr-2">
              0{currentIndex + 1} / 0{items.length}
            </span>

            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-neutral-700 dark:text-neutral-200 hover:bg-black/[0.08] dark:hover:bg-white/[0.1] transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-neutral-700 dark:text-neutral-200 hover:bg-black/[0.08] dark:hover:bg-white/[0.1] transition-all cursor-pointer backdrop-blur-md hover:scale-105 active:scale-95"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cinematic Apple Pro Showcase Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Media Preview (7 cols) */}
              <div className="lg:col-span-7 relative bg-black min-h-[300px] sm:min-h-[420px] overflow-hidden group flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Gradient Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Floating Category Pill */}
                <div className="absolute top-5 left-5 backdrop-blur-xl bg-black/60 border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-white flex items-center gap-1.5 shadow-lg">
                  <Layers size={13} className="text-[#FFD600]" />
                  <span>{activeItem.category}</span>
                </div>

                {/* Client Tag */}
                <div className="absolute top-5 right-5 backdrop-blur-xl bg-black/60 border border-white/15 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-300">
                  {activeItem.client}
                </div>
              </div>

              {/* Case Information (5 cols) */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#EC6726] dark:text-[#FFD600] uppercase tracking-wider mb-2">
                    Case em Destaque
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark dark:text-white mb-4">
                    {activeItem.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {activeItem.description}
                  </p>

                  {/* Deliverables Specs */}
                  <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] mb-6">
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mb-2">
                      Entregáveis:
                    </div>
                    <div className="space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
                      {activeItem.deliverables.map((del, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-[#EC6726] dark:text-[#FFD600]" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tag Pill */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-300">
                      #{activeItem.tag}
                    </span>
                  </div>
                </div>

                {/* Bottom CTA to View Full Case in Main Portfolio */}
                <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <button
                    onClick={onNavigateHome}
                    className="w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold tracking-tight bg-[#1D1D1F] hover:bg-black dark:bg-[#FFD600] dark:hover:bg-yellow-300 text-white dark:text-black transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-sm"
                  >
                    <span>{t.viewAllCases}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Item Thumbnails Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? 'w-8 bg-[#EC6726] dark:bg-[#FFD600]' 
                    : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400'
                }`}
                aria-label={`Ir para ${item.title}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CreationsCarousel;
