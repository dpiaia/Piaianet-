import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Sun, Moon, MessageSquare, Briefcase, Menu, X, Sparkles, Layers, Building2, Globe, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { translationsFreela } from '../../utils/translationsFreela';
import BrandLogoIcon from '../ui/BrandLogoIcon';

interface FreelaHeaderProps {
  onNavigateHome: () => void;
}

const FreelaHeader: React.FC<FreelaHeaderProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const t = translationsFreela[language].nav;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 25);
  });

  const handleContactClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false);
    const contactSection = document.getElementById('contact-freela');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://api.whatsapp.com/send?phone=5519981517551', '_blank');
    }
  };

  const handleScrollTo = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    sessionStorage.setItem('freela_theme_manual_override', 'true');
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/85 dark:bg-[#050507]/90 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.04)]' 
          : 'py-4 sm:py-5 bg-transparent'
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex justify-between items-center">
        
        {/* Left: Clean Brand Logo */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a 
            href="#freela-top" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-2.5 text-lg sm:text-xl font-display font-bold tracking-tight hover:opacity-90 transition-opacity select-none group"
          >
            <BrandLogoIcon className="h-6 sm:h-7 w-auto aspect-[72/52] shrink-0 transition-transform duration-300 group-hover:scale-105" />
            <span className="text-brand-dark dark:text-white">
              denis<span className="text-[#EC6726] dark:text-[#FFD600]">piaia</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation & Actions (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-2 sm:gap-3">
          
          {/* Portfolio Link Button */}
          <button
            onClick={onNavigateHome}
            className="text-xs sm:text-sm font-medium tracking-tight text-neutral-700 dark:text-neutral-300 hover:text-brand-dark dark:hover:text-white px-3 sm:px-4 py-2 rounded-full border border-black/[0.08] dark:border-white/[0.12] bg-white/70 dark:bg-white/[0.04] hover:bg-black/[0.04] dark:hover:bg-white/[0.08] backdrop-blur-md transition-all duration-200 flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-2xs"
            title={language === 'pt' ? 'Ver portfólio completo' : language === 'es' ? 'Ver portafolio completo' : 'View full portfolio'}
          >
            <Briefcase size={13} className="text-[#EC6726] dark:text-[#FFD600]" />
            <span>{t.portfolio || 'Portfólio'}</span>
          </button>

          {/* Contact Pill CTA */}
          <button
            onClick={handleContactClick}
            className="text-xs sm:text-sm font-semibold tracking-tight bg-[#1D1D1F] hover:bg-black dark:bg-[#FFD600] dark:hover:bg-yellow-300 text-white dark:text-black px-3.5 sm:px-5 py-2 rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <MessageSquare size={13} />
            <span>{t.contact}</span>
          </button>

          <div className="h-4 w-px bg-neutral-200 dark:bg-white/10 mx-0.5" />

          {/* Clean Segmented Language Pill */}
          <div className="flex items-center gap-0.5 text-xs font-mono bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] rounded-full p-0.5 backdrop-blur-md">
            <button 
              onClick={() => setLanguage('pt')} 
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${language === 'pt' ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white font-bold shadow-xs' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
              title="Português"
            >
              PT
            </button>
            <button 
              onClick={() => setLanguage('en')} 
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${language === 'en' ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white font-bold shadow-xs' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
              title="English"
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('es')} 
              className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${language === 'es' ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white font-bold shadow-xs' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
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

        {/* Mobile Hamburger Toggle (Visible only on mobile/tablet < md) */}
        <div className="flex items-center md:hidden">
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.1] text-brand-dark dark:text-white hover:bg-black/[0.1] dark:hover:bg-white/[0.15] transition-all cursor-pointer shadow-2xs"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0A0A0E]/95 backdrop-blur-2xl border-b border-black/[0.08] dark:border-white/[0.1] shadow-2xl"
          >
            <div className="container mx-auto px-5 py-6 flex flex-col space-y-5">
              
              {/* Quick Navigation Links */}
              <div className="space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 px-2">
                  {language === 'pt' ? 'Navegação' : language === 'es' ? 'Navegación' : 'Navigation'}
                </p>

                <button
                  onClick={() => handleScrollTo('services-products')}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.05] text-neutral-800 dark:text-neutral-200 transition-colors text-left group"
                >
                  <span className="flex items-center gap-3 font-medium text-sm">
                    <Sparkles size={16} className="text-[#EC6726] dark:text-[#FFD600]" />
                    {language === 'pt' ? 'Serviços & Catálogo' : language === 'es' ? 'Servicios & Catálogo' : 'Services & Catalog'}
                  </span>
                  <ArrowRight size={14} className="text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleScrollTo('creations')}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.05] text-neutral-800 dark:text-neutral-200 transition-colors text-left group"
                >
                  <span className="flex items-center gap-3 font-medium text-sm">
                    <Layers size={16} className="text-[#EC6726] dark:text-[#FFD600]" />
                    {language === 'pt' ? 'Criações & Cases' : language === 'es' ? 'Creaciones & Casos' : 'Creations & Cases'}
                  </span>
                  <ArrowRight size={14} className="text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={() => handleScrollTo('trusted-by')}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-black/[0.04] dark:hover:bg-white/[0.05] text-neutral-800 dark:text-neutral-200 transition-colors text-left group"
                >
                  <span className="flex items-center gap-3 font-medium text-sm">
                    <Building2 size={16} className="text-[#EC6726] dark:text-[#FFD600]" />
                    {language === 'pt' ? 'Clientes & Marcas' : language === 'es' ? 'Clientes & Marcas' : 'Clients & Brands'}
                  </span>
                  <ArrowRight size={14} className="text-neutral-400 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateHome();
                  }}
                  className="w-full py-3 px-4 rounded-xl border border-black/[0.1] dark:border-white/[0.12] bg-black/[0.02] dark:bg-white/[0.04] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] text-neutral-900 dark:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Briefcase size={16} className="text-[#EC6726] dark:text-[#FFD600]" />
                  <span>{language === 'pt' ? 'Ver Portfólio Principal' : language === 'es' ? 'Ver Portafolio Principal' : 'View Full Portfolio'}</span>
                </button>

                <button
                  onClick={() => handleContactClick()}
                  className="w-full py-3 px-4 rounded-xl bg-[#1D1D1F] dark:bg-[#FFD600] text-white dark:text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99]"
                >
                  <MessageSquare size={16} />
                  <span>{t.contact} — WhatsApp</span>
                </button>
              </div>

              {/* Settings: Language & Theme Controls */}
              <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.1] flex items-center justify-between gap-4">
                
                {/* Language Switcher */}
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-neutral-400" />
                  <div className="flex items-center gap-1 text-xs font-mono bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] rounded-full p-0.5">
                    <button 
                      onClick={() => setLanguage('pt')} 
                      className={`px-2.5 py-1 rounded-full transition-all font-bold ${language === 'pt' ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white shadow-xs' : 'text-neutral-500'}`}
                    >
                      PT
                    </button>
                    <button 
                      onClick={() => setLanguage('en')} 
                      className={`px-2.5 py-1 rounded-full transition-all font-bold ${language === 'en' ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white shadow-xs' : 'text-neutral-500'}`}
                    >
                      EN
                    </button>
                    <button 
                      onClick={() => setLanguage('es')} 
                      className={`px-2.5 py-1 rounded-full transition-all font-bold ${language === 'es' ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white shadow-xs' : 'text-neutral-500'}`}
                    >
                      ES
                    </button>
                  </div>
                </div>

                {/* Theme Switcher */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] text-neutral-800 dark:text-neutral-200"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon size={14} className="text-neutral-700" />
                      <span>Modo Escuro</span>
                    </>
                  ) : (
                    <>
                      <Sun size={14} className="text-[#FFD600]" />
                      <span>Modo Claro</span>
                    </>
                  )}
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default FreelaHeader;

