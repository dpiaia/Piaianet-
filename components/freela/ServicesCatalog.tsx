import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, CheckCircle2, Target, ArrowRight, Layers, Layout, Monitor, Code } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

interface ServicesCatalogProps {
  onSelectService?: (serviceId: string) => void;
}

const categoryIcons: Record<string, React.ReactNode> = {
  all: <Sparkles size={14} />,
  ds_ai: <Layers size={14} />,
  web: <Layout size={14} />,
  product: <Monitor size={14} />,
  dev: <Code size={14} />,
};

const ServicesCatalog: React.FC<ServicesCatalogProps> = ({ onSelectService }) => {
  const { language } = useLanguage();
  const t = translationsFreela[language].services;
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ds_ai' | 'web' | 'product' | 'dev'>('all');

  const filteredItems = selectedCategory === 'all' 
    ? t.items 
    : t.items.filter(item => item.category === selectedCategory);

  const handleServiceClick = (serviceId: string) => {
    if (onSelectService) {
      onSelectService(serviceId);
    }
    const calcElement = document.getElementById('calculator');
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services"
      className="py-24 bg-brand-light dark:bg-brand-dark relative transition-colors duration-300"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lead/10 dark:bg-brand-yellow/10 text-brand-lead dark:text-brand-yellow text-xs font-mono uppercase tracking-widest mb-4"
          >
            {t.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold mb-4 text-brand-dark dark:text-white"
          >
            {t.title}{' '}
            <span className="text-brand-lead dark:text-brand-yellow">
              {t.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {(['all', 'ds_ai', 'web', 'product', 'dev'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-lead dark:bg-brand-yellow text-white dark:text-brand-dark shadow-md scale-105'
                  : 'bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-brand-lead/30 dark:hover:border-brand-yellow/30'
              }`}
            >
              {categoryIcons[cat]}
              <span>{t.categories[cat]}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`flex flex-col justify-between p-7 rounded-2xl transition-all duration-300 relative group hover:-translate-y-1.5 shadow-sm hover:shadow-xl ${
                  item.isFlagship
                    ? 'bg-gradient-to-b from-brand-yellow/10 to-white/90 dark:from-brand-yellow/10 dark:to-neutral-900 border-2 border-brand-yellow/50 shadow-brand-yellow/10'
                    : 'bg-white/80 dark:bg-neutral-900/80 border border-brand-lead/10 dark:border-white/5 hover:border-brand-lead/30 dark:hover:border-brand-yellow/30'
                }`}
              >
                {/* Highlight Badge */}
                {item.highlightBadge && (
                  <div className="absolute -top-3 right-6 bg-brand-yellow text-brand-dark font-mono text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles size={10} />
                    {item.highlightBadge}
                  </div>
                )}

                <div>
                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-brand-lead/70 dark:text-brand-yellow/70 block mb-1">
                      {t.categories[item.category]}
                    </span>
                    <h3 className="text-xl font-bold font-display text-brand-dark dark:text-white group-hover:text-brand-lead dark:group-hover:text-brand-yellow transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-brand-lead/10 dark:border-white/5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block mb-2">
                      Entregáveis Principais:
                    </span>
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 size={13} className="text-brand-lead dark:text-brand-yellow shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Timeline & Ideal For */}
                  <div className="space-y-2 mb-6 p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950/60 border border-neutral-100 dark:border-neutral-800 text-xs">
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                      <Clock size={13} className="text-brand-lead dark:text-brand-yellow shrink-0" />
                      <span><strong>Prazo médio:</strong> {item.timeline}</span>
                    </div>
                    <div className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400">
                      <Target size={13} className="text-brand-lead dark:text-brand-yellow shrink-0 mt-0.5" />
                      <span><strong>Ideal para:</strong> {item.idealFor}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Tags & CTA Button */}
                <div className="pt-4 border-t border-brand-lead/10 dark:border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-lead/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 border border-neutral-200/50 dark:border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleServiceClick(item.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all bg-brand-lead/10 hover:bg-brand-lead dark:bg-white/5 dark:hover:bg-brand-yellow text-brand-lead hover:text-white dark:text-neutral-200 dark:hover:text-brand-dark border border-brand-lead/20 dark:border-white/10"
                  >
                    <span>{t.cardCta}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ServicesCatalog;
