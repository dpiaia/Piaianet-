import React from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sun, Moon, ArrowLeft, MessageSquare, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { translationsFreela } from '../../utils/translationsFreela';

interface FreelaHeaderProps {
  onNavigateHome: () => void;
}

const FreelaHeader: React.FC<FreelaHeaderProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const t = translationsFreela[language].nav;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 25);
  });

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-freela');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://api.whatsapp.com/send?phone=5519981517551', '_blank');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/75 dark:bg-[#050507]/80 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]' 
          : 'py-5 bg-transparent'
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        
        {/* Left: Back to Portfolio & Clean Branding */}
        <div className="flex items-center gap-3 sm:gap-5">
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-xs font-medium tracking-tight text-neutral-600 dark:text-neutral-300 hover:text-brand-dark dark:hover:text-white transition-all py-1.5 px-3.5 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white/60 dark:bg-white/[0.04] backdrop-blur-md group hover:scale-[1.02] cursor-pointer"
            title="Voltar para a página inicial e portfólio completo"
          >
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">{t.backToPortfolio}</span>
            <span className="sm:hidden">Portfólio</span>
          </button>

          <a href="#freela-top" className="text-lg sm:text-xl font-display font-bold tracking-tight">
            <span className="text-brand-dark dark:text-white">
              denis<span className="text-[#EC6726] dark:text-[#FFD600]">piaia</span>
            </span>
          </a>
        </div>

        {/* Right: Contact Button + Language Switcher + Dark/Light Theme */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          
          {/* Apple Style Pill CTA */}
          <button
            onClick={handleContactClick}
            className="text-xs sm:text-sm font-semibold tracking-tight bg-[#1D1D1F] hover:bg-black dark:bg-[#FFD600] dark:hover:bg-yellow-300 text-white dark:text-black px-4 sm:px-5 py-2 rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <MessageSquare size={13} />
            <span>{t.contact}</span>
          </button>

          <div className="h-4 w-px bg-neutral-200 dark:bg-white/10 hidden sm:block" />

          {/* Clean Segmented Language Pill */}
          <div className="flex items-center gap-0.5 text-xs font-mono bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] rounded-full p-0.5 backdrop-blur-md">
            <button 
              onClick={() => setLanguage('pt')} 
              className={`px-2 py-0.5 rounded-full transition-all ${language === 'pt' ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white font-bold shadow-xs' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
              title="Português"
            >
              PT
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`px-2 py-0.5 rounded-full transition-all ${language === 'en' ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white font-bold shadow-xs' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
              title="English"
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('es')} 
              className={`px-2 py-0.5 rounded-full transition-all ${language === 'es' ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white font-bold shadow-xs' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
              title="Español"
            >
              ES
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-neutral-700 dark:text-neutral-200 hover:bg-black/[0.08] dark:hover:bg-white/[0.1] transition-all cursor-pointer backdrop-blur-md"
            aria-label="Toggle theme light or dark"
            title={theme === 'light' ? 'Mudar para modo Escuro' : 'Mudar para modo Claro'}
          >
            {theme === 'light' ? <Moon size={15} className="text-neutral-700" /> : <Sun size={15} className="text-[#FFD600]" />}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default FreelaHeader;
