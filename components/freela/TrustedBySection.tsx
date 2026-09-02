import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

const TrustedBySection: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].trustedBy;

  // Duplicate for smooth continuous marquee
  const partnerList = [...t.partners, ...t.partners];

  return (
    <section 
      id="trusted-by"
      className="py-20 bg-brand-light dark:bg-[#08080A] border-t border-black/[0.06] dark:border-white/[0.06] relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-6 relative z-10 mb-10 text-center max-w-7xl">
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

        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-lg mx-auto font-normal">
          {t.subtitle}
        </p>
      </div>

      {/* Infinite Logo Carousel */}
      <div className="relative w-full overflow-hidden select-none py-4">
        {/* Apple Edge Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-brand-light dark:from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-brand-light dark:from-[#050507] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex w-max animate-logo-marquee hover:[animation-play-state:paused] gap-5 sm:gap-8 items-center">
          {partnerList.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="flex items-center gap-3 backdrop-blur-xl bg-white/70 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] px-7 py-4 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-black/20 dark:hover:border-white/20 transition-all hover:scale-105 min-w-[170px] sm:min-w-[210px] justify-center group"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-7 sm:h-8 max-w-[130px] object-contain opacity-65 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0 dark:brightness-125"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const span = document.createElement('span');
                    span.className = 'fallback-text text-sm font-bold font-display text-brand-dark dark:text-white';
                    span.innerText = partner.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-marquee {
          animation: logoMarquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;
