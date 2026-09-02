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
        <div className="mb-14 text-center max-w-2xl mx-auto">
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

        {/* Grid Layout: 5 logos per row on desktop, transparent background (no white box) and rotating glowing border on hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {partnerList.map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              className="relative group p-[1px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.04] cursor-pointer"
            >
              {/* Rotating Glowing Border Beam on Hover */}
              <div className="absolute inset-[-100%] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[conic-gradient(from_0deg,#EC6726_0deg,#FFD600_120deg,#EC6726_240deg,#FFD600_360deg)] dark:bg-[conic-gradient(from_0deg,#FFD600_0deg,#EC6726_120deg,#FFD600_240deg,#EC6726_360deg)] animate-border-spin" />

              {/* Card Surface - ALWAYS Transparent, No White Background */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-5 sm:p-6 rounded-2xl bg-transparent dark:bg-transparent border border-black/[0.08] dark:border-white/[0.1] group-hover:border-transparent group-hover:bg-black/[0.02] dark:group-hover:bg-white/[0.03] transition-all duration-300 min-h-[110px] sm:min-h-[125px]">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-10 sm:h-12 md:h-14 max-w-[140px] sm:max-w-[160px] w-auto object-contain opacity-75 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-125 select-none bg-transparent mix-blend-multiply dark:invert dark:brightness-[2] dark:mix-blend-screen"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.fallback-text')) {
                      const span = document.createElement('span');
                      span.className = 'fallback-text text-base sm:text-lg font-bold font-display text-brand-dark dark:text-white tracking-tight group-hover:text-[#EC6726] dark:group-hover:text-[#FFD600] group-hover:scale-110 transition-transform';
                      span.innerText = partner.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border spinning animation style */}
      <style>{`
        @keyframes border-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-border-spin {
          animation: border-spin 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBySection;
