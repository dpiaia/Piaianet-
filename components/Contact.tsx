import { useRef, FC, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import ConfettiCanvas, { ConfettiRef } from './ui/ConfettiCanvas';

// Custom Behance Icon since it's not in the standard set
const BehanceIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M8 11h4.5a2.5 2.5 0 0 1 0 5H8v-5Z" />
    <path d="M13 13.5a2.5 2.5 0 0 0-2.5-2.5H8" />
    <path d="M8 8h4.5a2.5 2.5 0 0 1 0 5H8V8Z" />
    <path d="M16 10h4" />
    <path d="M20 13a2.5 2.5 0 0 0-5 0v1" />
    <path d="M17.5 10.5A2.5 2.5 0 0 1 20 13" />
  </svg>
);

interface ContactProps {
  onNavigateFreela?: () => void;
}

const Contact: FC<ContactProps> = ({ onNavigateFreela }) => {
  const { t } = useLanguage();
  const confettiRef = useRef<ConfettiRef>(null);

  const socials = [
    { 
      icon: <Linkedin size={20} />, 
      href: "https://linkedin.com/in/denispiaia",
      label: "LinkedIn"
    },
    { 
      icon: <BehanceIcon size={20} />, 
      href: "https://www.behance.net/denispiaia",
      label: "Behance"
    },
    { 
      icon: <Github size={20} />, 
      href: "https://github.com/dpiaia",
      label: "Github" 
    }
  ];

  const handleSectionClick = (e: MouseEvent) => {
    // Dispara os confetes nas coordenadas do clique
    if (confettiRef.current) {
      confettiRef.current.explode(e.clientX, e.clientY);
    }
  };

  const handleFreelaClick = (e: MouseEvent) => {
    e.preventDefault();
    if (onNavigateFreela) {
      onNavigateFreela();
    } else {
      window.history.pushState({}, '', '/freela');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-brand-light dark:bg-brand-dark relative overflow-hidden cursor-pointer selection:bg-brand-lead/30 dark:selection:bg-brand-yellow/30 transition-colors duration-300"
      onClick={handleSectionClick}
    >
      {/* Interactive Confetti Layer */}
      <ConfettiCanvas ref={confettiRef} />

      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-lead/50 dark:via-brand-yellow/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-brand-dark dark:text-white">
              {t.contact.title} <br />
              <span className="text-brand-lead dark:text-brand-yellow">{t.contact.titleHighlight}</span> {t.contact.titleEnd}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
            
            {/* CTA Buttons Row: Say Hello + Freelancer */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="https://linkedin.com/in/denispiaia" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button className="px-10 py-5 text-lg rounded-none shadow-md hover:shadow-lg transition-all">
                  {t.contact.cta}
                </Button>
              </a>

              <a
                href="/freela"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFreelaClick(e);
                }}
              >
                <Button 
                  variant="outline"
                  className="px-10 py-5 text-lg rounded-none border-2 border-brand-lead dark:border-brand-yellow text-brand-dark dark:text-white hover:bg-brand-lead/10 dark:hover:bg-brand-yellow/10 flex items-center gap-2 shadow-sm transition-all"
                >
                  <Sparkles size={18} className="text-brand-lead dark:text-brand-yellow animate-pulse" />
                  <span>{t.contact.freelaCta || 'Freelancer 🚀'}</span>
                </Button>
              </a>
            </div>

            <div className="mt-16 pt-16 border-t border-brand-lead/10 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-neutral-500 dark:text-neutral-400 text-sm">
                <span>&copy; 2026 Denis Piaia - {t.contact.location} {t.contact.rights}</span>
                <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">•</span>
                <a
                  href="/freela"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFreelaClick(e);
                  }}
                  className="text-brand-lead dark:text-brand-yellow font-semibold hover:underline flex items-center gap-1.5 transition-colors"
                >
                  <Sparkles size={14} />
                  <span>{t.contact.freelaFooter || 'Serviços & freelancer'}</span>
                </a>
              </div>
              
              <div className="flex gap-6">
                {socials.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target={social.href.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-brand-lead dark:hover:text-brand-yellow hover:border-brand-lead dark:hover:border-brand-yellow transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;