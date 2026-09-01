import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon, ArrowLeft, ChevronDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '../../context/ThemeContext';
import { translationsFreela } from '../../utils/translationsFreela';

interface FreelaHeaderProps {
  onNavigateHome: () => void;
}

const FreelaHeader: React.FC<FreelaHeaderProps> = ({ onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const t = translationsFreela[language];

  const navItems = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.aiDesignSystem, href: '#ai-ds-flagship', highlight: true },
    { label: t.nav.calculator, href: '#calculator' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.differentials, href: '#differentials' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const themes = [
    { id: 'light', label: 'Light', icon: <Sun size={16} /> },
    { id: 'dark', label: 'Dark', icon: <Moon size={16} /> },
  ] as const;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const currentThemeIcon = themes.find(t => t.id === theme)?.icon || <Sun size={18} />;

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/85 dark:bg-black/85 backdrop-blur-md shadow-lg py-3.5 border-b border-brand-lead/10 dark:border-white/10' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Left branding with Commercial badge */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-brand-lead dark:hover:text-brand-yellow transition-colors py-1.5 px-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm group"
            title="Voltar para a página de trajetória e portfólio"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">{t.nav.backToPortfolio}</span>
            <span className="sm:hidden">Portfólio</span>
          </button>

          <a href="#freela-top" className="relative group text-xl font-display font-bold tracking-tighter flex items-center gap-2">
            <span className="text-brand-dark dark:text-white">
              denis<span className="text-brand-lead dark:text-brand-yellow">piaia</span>
            </span>
            <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest bg-brand-lead/10 dark:bg-brand-yellow/10 text-brand-lead dark:text-brand-yellow px-2 py-0.5 rounded-full border border-brand-lead/20 dark:border-brand-yellow/20">
              <Sparkles size={10} /> FREELANCE & SPRINT
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors relative group py-1 ${
                item.highlight 
                  ? 'text-brand-lead dark:text-brand-yellow font-semibold flex items-center gap-1.5'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-brand-lead dark:hover:text-brand-yellow'
              }`}
            >
              {item.highlight && <Sparkles size={12} className="text-brand-yellow animate-pulse" />}
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-lead dark:bg-brand-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <div className="h-4 w-px bg-brand-lead/10 dark:bg-white/10 mx-1" />

          {/* Quick CTA button */}
          <a
            href="#calculator"
            className="text-xs font-bold uppercase tracking-wider bg-brand-lead dark:bg-brand-yellow text-white dark:text-brand-dark px-4 py-2 hover:bg-neutral-800 dark:hover:bg-yellow-300 transition-all shadow-sm flex items-center gap-1.5"
          >
            {t.nav.getQuote}
          </a>

          {/* Theme Selector Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsThemeMenuOpen(true)}
            onMouseLeave={() => setIsThemeMenuOpen(false)}
          >
            <button
              className="flex items-center gap-1 p-2 rounded-lg hover:bg-brand-lead/5 dark:hover:bg-white/5 text-brand-dark dark:text-white transition-colors"
              aria-label="Select theme"
            >
              {currentThemeIcon}
              <ChevronDown size={12} className={`transition-transform duration-300 ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isThemeMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-2 w-28 bg-white dark:bg-neutral-900 border border-brand-lead/10 dark:border-white/10 rounded-xl shadow-xl overflow-hidden z-50"
                >
                  {themes.map((th) => (
                    <button
                      key={th.id}
                      onClick={() => {
                        setTheme(th.id);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs transition-colors ${
                        theme === th.id 
                          ? 'bg-brand-lead/10 dark:bg-white/10 text-brand-lead dark:text-brand-yellow font-bold' 
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {th.icon}
                      {th.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <button 
              onClick={() => setLanguage('pt')} 
              className={`px-1.5 py-0.5 rounded transition-colors ${language === 'pt' ? 'bg-brand-lead/10 dark:bg-brand-yellow/10 text-brand-lead dark:text-brand-yellow font-bold' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
            >
              PT
            </button>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={`px-1.5 py-0.5 rounded transition-colors ${language === 'en' ? 'bg-brand-lead/10 dark:bg-brand-yellow/10 text-brand-lead dark:text-brand-yellow font-bold' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
            >
              EN
            </button>
            <span className="text-neutral-300 dark:text-neutral-700">/</span>
            <button 
              onClick={() => setLanguage('es')} 
              className={`px-1.5 py-0.5 rounded transition-colors ${language === 'es' ? 'bg-brand-lead/10 dark:bg-brand-yellow/10 text-brand-lead dark:text-brand-yellow font-bold' : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'}`}
            >
              ES
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-3 xl:hidden">
          <a
            href="#calculator"
            className="text-xs font-bold uppercase tracking-wider bg-brand-lead dark:bg-brand-yellow text-white dark:text-brand-dark px-3 py-1.5 rounded"
          >
            {t.nav.getQuote}
          </a>
          <button
            className="text-brand-dark dark:text-white p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white dark:bg-brand-dark border-b border-brand-lead/10 dark:border-white/10"
          >
            <nav className="flex flex-col p-6 space-y-5">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigateHome();
                  }}
                  className="text-left font-bold text-sm text-brand-lead dark:text-brand-yellow flex items-center gap-2 pb-2 border-b border-neutral-100 dark:border-neutral-800"
                >
                  <ArrowLeft size={16} /> {t.nav.backToPortfolio}
                </button>

                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`text-base font-medium py-1.5 ${
                      item.highlight 
                        ? 'text-brand-lead dark:text-brand-yellow font-bold' 
                        : 'text-neutral-700 dark:text-neutral-300'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-lead/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-xs flex items-center gap-1"><Sun size={12}/> Tema:</span>
                  <div className="flex gap-1">
                    {themes.map((th) => (
                      <button
                        key={th.id}
                        onClick={() => setTheme(th.id)}
                        className={`p-1.5 rounded transition-colors ${
                          theme === th.id 
                            ? 'bg-brand-lead/10 dark:bg-white/10 text-brand-lead dark:text-brand-yellow' 
                            : 'text-neutral-400'
                        }`}
                      >
                        {th.icon}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-xs flex items-center gap-1"><Globe size={12}/> Idioma:</span>
                  <div className="flex gap-2 text-xs font-bold">
                    <button onClick={() => setLanguage('pt')} className={language === 'pt' ? 'text-brand-lead dark:text-brand-yellow' : 'text-neutral-500'}>PT</button>
                    <button onClick={() => setLanguage('en')} className={language === 'en' ? 'text-brand-lead dark:text-brand-yellow' : 'text-neutral-500'}>EN</button>
                    <button onClick={() => setLanguage('es')} className={language === 'es' ? 'text-brand-lead dark:text-brand-yellow' : 'text-neutral-500'}>ES</button>
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

export default FreelaHeader;
