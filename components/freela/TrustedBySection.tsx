import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

const TrustedBySection: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].trustedBy;

  const partnerList = t.partners;

  return (
    <section 
      id="trusted-by"
      className="py-20 bg-brand-light dark:bg-[#08080A] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono uppercase tracking-widest text-[#EC6726] dark:text-[#FFD600] mb-3">
            <ShieldCheck size={13} />
            <span>{t.badge}</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-dark dark:text-white">
            {t.title}{' '}
            <span className="text-[#EC6726] dark:text-[#FFD600]">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2 font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 5-Column Grid Layout (All logos visible simultaneously) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {partnerList.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(236,103,38,0.12)] dark:hover:shadow-[0_8px_24px_rgba(255,214,0,0.08)] hover:border-[#EC6726]/40 dark:hover:border-[#FFD600]/40 transition-all duration-300 group hover:-translate-y-1 min-h-[96px] sm:min-h-[110px]"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-8 sm:h-9 max-w-[130px] w-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-105 dark:brightness-125"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const span = document.createElement('span');
                    span.className = 'fallback-text text-sm font-bold font-display text-brand-dark dark:text-white tracking-tight';
                    span.innerText = partner.name;
                    parent.appendChild(span);
                  }
                }}
              />
              {partner.category && (
                <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 truncate max-w-full">
                  {partner.category}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
