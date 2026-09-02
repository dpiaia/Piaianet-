import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon, Gamepad2, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import BrandLogoIcon from './ui/BrandLogoIcon';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const themes = [
    { id: 'light', label: 'Light', icon: <Sun size={16} /> },
    { id: 'dark', label: 'Dark', icon: <Moon size={16} /> },
  ] as const;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const currentThemeIcon = themes.find(t => t.id === theme)?.icon || <Sun size={18} />;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg py-4 border-b border-brand-lead/5 dark:border-white/5' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Glitch Logo */}
        <a href="#" className="relative group flex items-center gap-2.5 text-2xl font-display font-bold tracking-tighter">
          <BrandLogoIcon className="h-7 w-auto aspect-[72/52] shrink-0 transition-transform duration-300 group-hover:scale-105" />
          <div className="relative">
            {/* Main Layer */}
            <span className="relative z-10 block text-brand-dark dark:text-white group-hover:text-brand-dark dark:group-hover:text-white transition-colors">
              denis<span className="text-brand-lead dark:text-brand-yellow">piaia</span>
            </span>
            
            {/* Glitch Layer 1 (Red Shift) - Visible on Hover */}
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-100 animate-glitch-1 select-none pointer-events-none mix-blend-multiply dark:mix-blend-screen">
              denis<span className="text-red-500">piaia</span>
            </span>
            
            {/* Glitch Layer 2 (Cyan Shift) - Visible on Hover */}
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 group-hover:opacity-100 animate-glitch-2 select-none pointer-events-none mix-blend-multiply dark:mix-blend-screen">
              denis<span className="text-cyan-500">piaia</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-brand-lead dark:hover:text-brand-yellow transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-lead dark:bg-brand-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <div className="h-4 w-px bg-brand-lead/10 dark:bg-white/10 mx-1" />

          {/* Theme Selector Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsThemeMenuOpen(true)}
            onMouseLeave={() => setIsThemeMenuOpen(false)}
          >
            <button
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-brand-lead/5 dark:hover:bg-white/5 text-brand-dark dark:text-white transition-colors"
              aria-label="Select theme"
            >
              {currentThemeIcon}
              <ChevronDown size={14} className={`transition-transform duration-300 ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isThemeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-32 bg-white dark:bg-neutral-900 border border-brand-lead/10 dark:border-white/10 rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                        theme === t.id 
                          ? 'bg-brand-lead/5 dark:bg-white/5 text-brand-lead dark:text-brand-yellow' 
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {t.icon}
                      {t.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-4 w-px bg-brand-lead/10 dark:bg-white/10 mx-1" />

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLanguage('pt')} 
              className={`text-xs font-bold transition-colors ${language === 'pt' ? 'text-brand-lead dark:text-brand-yellow' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
            >
              BR
            </button>
            <span className="text-neutral-400 dark:text-neutral-700 text-xs">/</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-brand-lead dark:text-brand-yellow' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
            >
              US
            </button>
            <span className="text-neutral-400 dark:text-neutral-700 text-xs">/</span>
             <button 
              onClick={() => setLanguage('es')} 
              className={`text-xs font-bold transition-colors ${language === 'es' ? 'text-brand-lead dark:text-brand-yellow' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
            >
              ES
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="p-2 rounded-xl bg-black/[0.05] dark:bg-white/[0.08] border border-black/[0.08] dark:border-white/[0.1] text-brand-dark dark:text-white hover:bg-black/[0.1] dark:hover:bg-white/[0.15] transition-all cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0A0A0E]/95 backdrop-blur-2xl border-b border-brand-lead/10 dark:border-white/10 shadow-2xl"
          >
            <nav className="flex flex-col p-6 space-y-6">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-brand-lead dark:hover:text-brand-yellow transition-colors py-1.5 px-2 rounded-lg hover:bg-black/[0.03] dark:hover:bg-white/[0.05]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.1] space-y-4">
                 <div className="flex items-center justify-between">
                    <span className="text-neutral-500 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                      <Sun size={14}/> Tema:
                    </span>
                    <div className="flex gap-2 bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] p-1 rounded-xl">
                      {themes.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setTheme(t.id)}
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                            theme === t.id 
                              ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white shadow-xs font-bold' 
                              : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'
                          }`}
                        >
                          {t.icon}
                          <span>{t.label}</span>
                        </button>
                      ))}
                    </div>
                 </div>

                 <div className="flex items-center justify-between">
                    <span className="text-neutral-500 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                      <Globe size={14}/> Idioma:
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] rounded-full p-0.5">
                      <button 
                        onClick={() => setLanguage('pt')} 
                        className={`px-2.5 py-1 rounded-full transition-all font-bold ${language === 'pt' ? 'bg-white dark:bg-white/20 text-brand-lead dark:text-brand-yellow shadow-xs' : 'text-neutral-500'}`}
                      >
                        PT
                      </button>
                      <button 
                        onClick={() => setLanguage('en')} 
                        className={`px-2.5 py-1 rounded-full transition-all font-bold ${language === 'en' ? 'bg-white dark:bg-white/20 text-brand-lead dark:text-brand-yellow shadow-xs' : 'text-neutral-500'}`}
                      >
                        EN
                      </button>
                      <button 
                        onClick={() => setLanguage('es')} 
                        className={`px-2.5 py-1 rounded-full transition-all font-bold ${language === 'es' ? 'bg-white dark:bg-white/20 text-brand-lead dark:text-brand-yellow shadow-xs' : 'text-neutral-500'}`}
                      >
                        ES
                      </button>
                    </div>
                 </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;

