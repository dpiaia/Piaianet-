import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, GraduationCap, Building2, Mic, Bot, Code2, Globe, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

interface MarqueeCardProps {
  item: {
    number: string;
    title: string;
    subtitle: string;
    icon: string;
  };
}

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

const sparkColors = ['#FFD600', '#EC6726', '#FF9800', '#FFFA65', '#FFFFFF', '#FF3D00', '#00D8FF'];

const MarqueeCard: React.FC<MarqueeCardProps> = ({ item }) => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const generateBurst = () => {
    const newSparks: Spark[] = Array.from({ length: 18 }).map((_, i) => {
      // 360 degree radial spread for particles flying in all directions
      const angle = (Math.PI * 2 * i) / 18 + (Math.random() - 0.5) * 0.7;
      const distance = 40 + Math.random() * 55;
      return {
        id: Date.now() + i + Math.random(),
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 3 + Math.random() * 5,
        color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        duration: 0.6 + Math.random() * 0.4,
      };
    });

    setSparks((prev) => [...prev.slice(-24), ...newSparks]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.includes(s)));
    }, 950);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    generateBurst();
    // Continuous particle emission while mouse hovers
    intervalRef.current = setInterval(() => {
      generateBurst();
    }, 450);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="relative group/card">
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.15,
          rotate: -3.5,
          y: -8,
          zIndex: 50,
          transition: { type: 'spring', stiffness: 420, damping: 18 }
        }}
        whileTap={{ scale: 0.98 }}
        className={`relative flex items-center gap-3.5 backdrop-blur-xl px-5 py-3.5 rounded-2xl min-w-[270px] sm:min-w-[305px] select-none transition-colors duration-300 cursor-pointer border ${
          isHovered
            ? 'bg-white dark:bg-[#16161C] border-[#EC6726] dark:border-[#FFD600] shadow-[0_12px_35px_rgba(236,103,38,0.35)] dark:shadow-[0_12px_35px_rgba(255,214,0,0.3)] z-50 ring-2 ring-[#EC6726]/20 dark:ring-[#FFD600]/20'
            : 'bg-white/85 dark:bg-white/[0.04] border-black/[0.07] dark:border-white/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.02)]'
        }`}
      >
        <div className={`p-2.5 rounded-xl shrink-0 transition-transform duration-300 ${
          isHovered 
            ? 'bg-[#EC6726]/10 dark:bg-[#FFD600]/15 scale-110' 
            : 'bg-black/[0.03] dark:bg-white/[0.05]'
        }`}>
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

        {/* 360-degree Floating Sparks Burst */}
        <AnimatePresence>
          {sparks.map((spark) => (
            <motion.span
              key={spark.id}
              initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [1, 1, 0],
                scale: [0, 1.4, 0.2],
                x: spark.x,
                y: spark.y,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: spark.duration, ease: 'easeOut' }}
              style={{
                backgroundColor: spark.color,
                width: spark.size,
                height: spark.size,
                boxShadow: `0 0 10px ${spark.color}, 0 0 4px #FFF`,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-50"
            />
          ))}
        </AnimatePresence>

        {/* Hover Micro Sparkle Icon */}
        {isHovered && (
          <motion.span
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: [0.8, 1.3, 0.9], rotate: 180 }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="absolute -top-2 -right-2 text-[#FFD600] pointer-events-none drop-shadow-[0_0_6px_#FFD600] z-50"
          >
            <Sparkles size={16} />
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

const CredentialsMarquee: React.FC = () => {
  const { language } = useLanguage();
  const t = translationsFreela[language].credentials;

  // Duplicate items for continuous smooth ticker
  const marqueeItems = [...t.items, ...t.items];

  return (
    <section 
      id="credentials-marquee"
      className="py-8 bg-black/[0.02] dark:bg-white/[0.02] border-y border-black/[0.06] dark:border-white/[0.06] overflow-hidden relative select-none"
    >
      {/* Edge Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-light dark:from-[#08080A] to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-light dark:from-[#08080A] to-transparent z-20 pointer-events-none" />

      {/* Marquee Track (Flowing from Left to Right) */}
      <div className="flex w-max animate-marquee-ltr hover:[animation-play-state:paused] gap-4 sm:gap-5 py-4">
        {marqueeItems.map((item, idx) => (
          <MarqueeCard
            key={`${item.title}-${idx}`}
            item={item}
          />
        ))}
      </div>

      {/* Smooth Left-to-Right Scrolling Animation */}
      <style>{`
        @keyframes marquee-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-ltr {
          animation: marquee-left-to-right 34s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CredentialsMarquee;
