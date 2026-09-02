import React from 'react';
import { Rocket, GraduationCap, Building2, Mic, Bot, Code2, Globe, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={18} className="text-[#EC6726] dark:text-[#FFD600]" />,
  GraduationCap: <GraduationCap size={18} className="text-[#EC6726] dark:text-[#FFD600]" />,
  Building2: <Building2 size={18} className="text-[#EC6726] dark:text-[#FFD600]" />,
  Mic: <Mic size={18} className="text-[#EC6726] dark:text-[#FFD600]" />,
  Bot: <Bot size={18} className="text-[#EC6726] dark:text-[#FFD600]" />,
  Code2: <Code2 size={18} className="text-[#EC6726] dark:text-[#FFD600]" />,
  Globe: <Globe size={18} className="text-[#EC6726] dark:text-[#FFD600]" />,
  ShieldCheck: <ShieldCheck size={18} className="text-[#EC6726] dark:text-[#FFD600]" />,
};

const CredentialsMarquee: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].credentials;

  // Duplicate items for continuous smooth ticker
  const marqueeItems = [...t.items, ...t.items];

  return (
    <section 
      id="credentials-marquee"
      className="py-8 bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/[0.04] dark:border-white/[0.06] overflow-hidden relative select-none"
    >
      {/* Subtle cosmic background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EC6726]/5 dark:via-[#FFD600]/5 to-transparent pointer-events-none" />

      {/* Apple Edge Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-brand-light dark:from-[#050507] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-brand-light dark:from-[#050507] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-5">
        {marqueeItems.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            className="flex items-center gap-3.5 backdrop-blur-xl bg-white/70 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] px-5 py-3 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] min-w-[270px] sm:min-w-[300px] transition-all hover:scale-[1.02] cursor-default"
          >
            <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] shrink-0">
              {iconMap[item.icon] || <Rocket size={18} className="text-[#EC6726] dark:text-[#FFD600]" />}
            </div>
            
            <div className="flex flex-col">
              <span className="text-[11px] font-mono font-bold text-[#EC6726] dark:text-[#FFD600] uppercase tracking-wider">
                {item.number}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-brand-dark dark:text-white leading-snug tracking-tight">
                {item.title}
              </span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 font-normal truncate max-w-[200px]">
                {item.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 36s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CredentialsMarquee;
