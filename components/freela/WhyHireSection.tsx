import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Sparkles, UserCheck, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

const icons = [
  <UserCheck className="w-5 h-5" />,
  <Zap className="w-5 h-5" />,
  <Award className="w-5 h-5" />,
  <ShieldCheck className="w-5 h-5" />,
];

const partners = [
  { name: "Netshoes", logo: "https://piaianet.page.gd/imgs/netshoes.svg" },
  { name: "iFood", logo: "https://piaianet.page.gd/imgs/ifood.svg" },
  { name: "Mercado Livre", logo: "https://piaianet.page.gd/imgs/meli.svg" },
  { name: "Cielo", logo: "https://piaianet.page.gd/imgs/cielo.svg" },
  { name: "Zattini", logo: "https://piaianet.page.gd/imgs/zattini.svg" },
];

const WhyHireSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].differentials;

  return (
    <section 
      id="differentials"
      className="py-24 bg-gradient-to-b from-brand-light via-neutral-100/60 to-brand-light dark:from-brand-dark dark:via-neutral-950/70 dark:to-brand-dark relative transition-colors duration-300 border-t border-brand-lead/10 dark:border-white/5"
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

        {/* 4 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {t.items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-brand-lead/10 dark:border-white/5 shadow-sm hover:shadow-md hover:border-brand-lead/30 dark:hover:border-brand-yellow/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-lead/5 dark:bg-white/5 text-brand-lead dark:text-brand-yellow flex items-center justify-center">
                  {icons[idx]}
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-brand-lead/5 dark:bg-white/5 text-neutral-500 dark:text-neutral-400">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-brand-dark dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trusted Brand Logos Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/50 dark:bg-neutral-900/50 border border-brand-lead/5 dark:border-white/5 backdrop-blur-xs text-center"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-6">
            Projetos e colaborações em grandes ecossistemas de tecnologia:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 dark:opacity-80">
            {partners.map((p) => (
              <img
                key={p.name}
                src={p.logo}
                alt={p.name}
                className="h-7 w-auto object-contain filter grayscale dark:invert"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyHireSection;
