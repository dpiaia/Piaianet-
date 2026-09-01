import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Linkedin, Github, Send, Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import Button from '../ui/Button';
import ConfettiCanvas, { ConfettiRef } from '../ui/ConfettiCanvas';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

interface FreelaContactCTAProps {
  onNavigateHome: () => void;
}

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

const FreelaContactCTA: React.FC<FreelaContactCTAProps> = ({ onNavigateHome }) => {
  const { language } = useLanguage();
  const t = translationsFreela[language].contact;
  const confettiRef = useRef<ConfettiRef>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Adequação de Design System para IA',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error('Por favor preencha nome e e-mail');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (confettiRef.current) {
        confettiRef.current.explode(window.innerWidth / 2, window.innerHeight / 2);
      }
      toast.success(t.formSuccess);

      // Open email client with prefilled data
      const subject = encodeURIComponent(`Novo Contato Freela: ${formData.projectType} - ${formData.name}`);
      const body = encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\nServiço: ${formData.projectType}\n\nMensagem:\n${formData.message}`);
      window.open(`mailto:dpiaia@gmail.com?subject=${subject}&body=${body}`, '_blank');
    }, 800);
  };

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

  return (
    <section 
      id="contact"
      className="py-24 bg-brand-light dark:bg-brand-dark relative overflow-hidden transition-colors duration-300 border-t border-brand-lead/10 dark:border-white/5"
    >
      <ConfettiCanvas ref={confettiRef} />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-700 dark:text-green-400 text-xs font-mono uppercase tracking-widest mb-4 border border-green-500/30"
          >
            <Sparkles size={14} />
            {t.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl sm:text-6xl font-bold mb-4 text-brand-dark dark:text-white"
          >
            {t.title}{' '}
            <span className="text-brand-lead dark:text-brand-yellow">
              {t.titleHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* 2-Column Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href="https://api.whatsapp.com/send?phone=5519981517551&text=Ol%C3%A1%20Denis!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20freelance."
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-green-500/30 hover:border-green-500 transition-all duration-300 shadow-sm block group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-brand-dark dark:text-white">
                    {t.whatsappTitle}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {t.whatsappDesc}
                  </p>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:dpiaia@gmail.com?subject=Briefing%20de%20Projeto%20Freelance%20-%20Denis%20Piaia"
              className="p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-brand-lead/10 dark:border-white/5 hover:border-brand-lead/30 dark:hover:border-brand-yellow/30 transition-all duration-300 shadow-sm block group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-lead/5 dark:bg-white/5 text-brand-lead dark:text-brand-yellow flex items-center justify-center shrink-0 group-hover:bg-brand-lead dark:group-hover:bg-brand-yellow group-hover:text-white dark:group-hover:text-brand-dark transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-brand-dark dark:text-white">
                    {t.emailTitle}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                    {t.emailDesc}
                  </p>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/denispiaia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-brand-lead/10 dark:border-white/5 hover:border-brand-lead/30 dark:hover:border-brand-yellow/30 transition-all duration-300 shadow-sm block group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-lead/5 dark:bg-white/5 text-brand-lead dark:text-brand-yellow flex items-center justify-center shrink-0 group-hover:bg-brand-lead dark:group-hover:bg-brand-yellow group-hover:text-white dark:group-hover:text-brand-dark transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-brand-dark dark:text-white">
                    LinkedIn
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Conecte-se e envie mensagem direta
                  </p>
                </div>
              </div>
            </a>

            {/* Return to Portfolio button */}
            <button
              onClick={onNavigateHome}
              className="w-full p-4 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-brand-lead dark:hover:text-brand-yellow hover:border-brand-lead/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>{t.backHome}</span>
            </button>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-brand-lead/10 dark:border-white/5 shadow-xl">
              <h3 className="text-xl font-bold font-display text-brand-dark dark:text-white mb-6">
                {t.formTitle}
              </h3>

              {isSuccess ? (
                <div className="p-8 text-center space-y-4">
                  <CheckCircle2 size={48} className="text-green-500 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-brand-dark dark:text-white">
                    {t.formSuccess}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Seu cliente de e-mail foi aberto com os dados preenchidos.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs text-brand-lead dark:text-brand-yellow font-bold underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                      {t.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: João Silva ou Startup X"
                      className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm text-brand-dark dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-lead dark:focus:ring-brand-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                      {t.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@empresa.com"
                      className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm text-brand-dark dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-lead dark:focus:ring-brand-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                      {t.formProject}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-lead dark:focus:ring-brand-yellow"
                    >
                      <option value="Adequação de Design System para IA">Adequação de Design System para IA (Carro-Chefe)</option>
                      <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                      <option value="Site Institucional / Corporativo">Site Institucional / Corporativo</option>
                      <option value="Site Promocional / Campanha">Site Promocional / Campanha</option>
                      <option value="Criação de Design System do Zero">Criação de Design System do Zero</option>
                      <option value="UX/UI Design para Aplicativo ou SaaS">UX/UI Design para Aplicativo ou SaaS</option>
                      <option value="Desenvolvimento Frontend (React / Tailwind)">Desenvolvimento Frontend (React / Tailwind)</option>
                      <option value="Consultoria / Sprint de Design Ops">Consultoria / Sprint de Design Ops</option>
                      <option value="Outro">Outro Escopo</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5">
                      {t.formMessage}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte sobre o projeto, objetivo, links de referência e prazo desejado..."
                      className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-sm text-brand-dark dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-lead dark:focus:ring-brand-yellow"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-brand-lead dark:bg-brand-yellow text-white dark:text-brand-dark hover:bg-neutral-800 dark:hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? t.formSubmitting : t.formSubmit}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="pt-12 border-t border-brand-lead/10 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            &copy; 2026 Denis Piaia - Freelance & Design Ops Leader. {t.rights}
          </div>

          <div className="flex gap-4">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 border border-neutral-200 dark:border-neutral-800 rounded-lg flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:text-brand-lead dark:hover:text-brand-yellow hover:border-brand-lead dark:hover:border-brand-yellow transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FreelaContactCTA;
