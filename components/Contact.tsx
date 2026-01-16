import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';
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

const Contact: React.FC = () => {
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

  const handleSectionClick = (e: React.MouseEvent) => {
    // Dispara os confetes nas coordenadas do clique
    if (confettiRef.current) {
      confettiRef.current.explode(e.clientX, e.clientY);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-brand-dark relative overflow-hidden cursor-pointer selection:bg-brand-yellow/30"
      onClick={handleSectionClick}
    >
      {/* Interactive Confetti Layer */}
      <ConfettiCanvas ref={confettiRef} />

      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center pointer-events-auto">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {t.contact.title} <br />
              <span className="text-brand-yellow">{t.contact.titleHighlight}</span> {t.contact.titleEnd}
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
            
            <a 
              href="https://linkedin.com/in/denispiaia" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // Opcional: Remover se quiser confetes ao clicar no botão também
            >
              <Button className="px-10 py-5 text-lg rounded-none">
                {t.contact.cta}
              </Button>
            </a>

            <div className="mt-16 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-neutral-500 text-sm">
                &copy; 2026 Denis Piaia - {t.contact.location} {t.contact.rights}
              </div>
              
              <div className="flex gap-6">
                {socials.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target={social.href.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-brand-yellow hover:border-brand-yellow transition-all"
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