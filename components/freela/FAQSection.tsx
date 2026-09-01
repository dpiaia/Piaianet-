import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

const FAQSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="py-24 bg-brand-light dark:bg-brand-dark relative transition-colors duration-300 border-t border-brand-lead/10 dark:border-white/5"
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
            <HelpCircle size={14} />
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

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {t.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-brand-lead/10 dark:border-white/5 bg-white/80 dark:bg-neutral-900/80 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-brand-dark dark:text-white hover:text-brand-lead dark:hover:text-brand-yellow transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-display">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-brand-lead/5 dark:bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-brand-lead/10 dark:bg-brand-yellow/10 text-brand-lead dark:text-brand-yellow' : 'text-neutral-400'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-brand-lead/5 dark:border-white/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
