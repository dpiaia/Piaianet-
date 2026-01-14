import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-dark/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-white tracking-tighter">
          denis<span className="text-brand-yellow">.piaia</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-400 hover:text-brand-yellow transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <div className="h-4 w-px bg-white/10 mx-2" />

          {/* Language Switcher */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLanguage('pt')} 
              className={`text-xs font-bold transition-colors ${language === 'pt' ? 'text-brand-yellow' : 'text-neutral-500 hover:text-white'}`}
            >
              BR
            </button>
            <span className="text-neutral-700 text-xs">/</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={`text-xs font-bold transition-colors ${language === 'en' ? 'text-brand-yellow' : 'text-neutral-500 hover:text-white'}`}
            >
              US
            </button>
            <span className="text-neutral-700 text-xs">/</span>
             <button 
              onClick={() => setLanguage('es')} 
              className={`text-xs font-bold transition-colors ${language === 'es' ? 'text-brand-yellow' : 'text-neutral-500 hover:text-white'}`}
            >
              ES
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-brand-dark border-b border-white/10"
        >
          <nav className="flex flex-col p-6 space-y-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-neutral-300 hover:text-brand-yellow"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
               <div className="flex items-center gap-4 text-sm font-medium">
                  <span className="text-neutral-500 flex items-center gap-2"><Globe size={14}/> Idioma:</span>
                  <div className="flex gap-4">
                    <button onClick={() => setLanguage('pt')} className={language === 'pt' ? 'text-brand-yellow' : 'text-white'}>PT</button>
                    <button onClick={() => setLanguage('en')} className={language === 'en' ? 'text-brand-yellow' : 'text-white'}>EN</button>
                    <button onClick={() => setLanguage('es')} className={language === 'es' ? 'text-brand-yellow' : 'text-white'}>ES</button>
                  </div>
               </div>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;