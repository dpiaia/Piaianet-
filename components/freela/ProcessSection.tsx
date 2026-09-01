import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

const ProcessSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].process;

  return (
    <section 
      id="process"
      className="py-24 bg-brand-light dark:bg-brand-dark relative transition-colors duration-300"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          {t.steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-7 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-brand-lead/10 dark:border-white/5 shadow-sm hover:shadow-md hover:border-brand-lead/30 dark:hover:border-brand-yellow/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-display text-neutral-300 dark:text-neutral-700 group-hover:text-brand-lead dark:group-hover:text-brand-yellow transition-colors">
                    {step.number}
                  </span>
                  {idx < 3 && (
                    <ArrowRight size={16} className="hidden lg:block text-neutral-300 dark:text-neutral-700" />
                  )}
                </div>

                <h3 className="text-lg font-bold font-display text-brand-dark dark:text-white mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-lead/10 dark:border-white/5">
                <div className="flex items-start gap-1.5 text-[11px] font-medium text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={13} className="text-brand-lead dark:text-brand-yellow shrink-0 mt-0.5" />
                  <span><strong>Entregável:</strong> {step.deliverable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
