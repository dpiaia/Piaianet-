import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Linkedin, Github, Send, Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import ConfettiCanvas, { ConfettiRef } from '../ui/ConfettiCanvas';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

interface FreelaContactCTAProps {
  onNavigateHome: () => void;
  selectedServiceTitle?: string;
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

const FreelaContactCTA: React.FC<FreelaContactCTAProps> = ({ onNavigateHome, selectedServiceTitle }) => {
  const { language } = useLanguage();
  const t = translationsFreela[language].contact;
  const confettiRef = useRef<ConfettiRef>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: selectedServiceTitle || 'Adequação de Design System para IA',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  React.useEffect(() => {
    if (selectedServiceTitle) {
      setFormData(prev => ({ ...prev, projectType: selectedServiceTitle }));
    }
  }, [selectedServiceTitle]);

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
      icon: <Linkedin size={18} />, 
      href: "https://linkedin.com/in/denispiaia",
      label: "LinkedIn"
    },
    { 
      icon: <BehanceIcon size={18} />, 
      href: "https://www.behance.net/denispiaia",
      label: "Behance"
    },
    { 
      icon: <Github size={18} />, 
      href: "https://github.com/dpiaia",
      label: "Github" 
    }
  ];

  return (
    <section 
      id="contact"
      className="py-28 bg-brand-light dark:bg-[#050507] relative overflow-hidden transition-colors duration-500 border-t border-black/[0.04] dark:border-white/[0.06]"
    >
      <ConfettiCanvas ref={confettiRef} />

      {/* Atmospheric Space Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#EC6726]/8 dark:bg-[#FFD600]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4 border border-emerald-500/20 backdrop-blur-md">
            <Sparkles size={13} />
            <span>{t.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-4 text-brand-dark dark:text-white leading-tight">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC6726] to-[#FFD600] dark:from-[#FFD600] dark:to-orange-400">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto mb-20">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href="https://api.whatsapp.com/send?phone=5519981517551&text=Ol%C3%A1%20Denis!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20freelance."
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-white/70 dark:bg-white/[0.02] border border-emerald-500/20 hover:border-emerald-500/60 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.02)] block group hover:-translate-y-1 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-brand-dark dark:text-white font-display tracking-tight">
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
              className="p-6 rounded-3xl bg-white/70 dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#EC6726]/40 dark:hover:border-[#FFD600]/40 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.02)] block group hover:-translate-y-1 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] text-brand-dark dark:text-[#FFD600] flex items-center justify-center shrink-0 group-hover:bg-[#1D1D1F] dark:group-hover:bg-[#FFD600] group-hover:text-white dark:group-hover:text-black transition-colors">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-brand-dark dark:text-white font-display tracking-tight">
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
              className="p-6 rounded-3xl bg-white/70 dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] hover:border-[#EC6726]/40 dark:hover:border-[#FFD600]/40 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.02)] block group hover:-translate-y-1 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] text-brand-dark dark:text-[#FFD600] flex items-center justify-center shrink-0 group-hover:bg-[#1D1D1F] dark:group-hover:bg-[#FFD600] group-hover:text-white dark:group-hover:text-black transition-colors">
                  <Linkedin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-brand-dark dark:text-white font-display tracking-tight">
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
              className="w-full p-4 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-brand-dark dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>{t.backHome}</span>
            </button>

          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.08] shadow-[0_12px_45px_rgba(0,0,0,0.04)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-dark dark:text-white mb-6 tracking-tight">
                {t.formTitle}
              </h3>

              {isSuccess ? (
                <div className="p-8 text-center space-y-4">
                  <CheckCircle2 size={48} className="text-emerald-500 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-brand-dark dark:text-white font-display">
                    {t.formSuccess}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Seu cliente de e-mail foi aberto com os dados preenchidos.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs text-[#EC6726] dark:text-[#FFD600] font-bold underline cursor-pointer"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5 font-mono">
                      {t.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: João Silva ou Startup X"
                      className="w-full p-3.5 rounded-2xl bg-neutral-50/80 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 text-sm text-brand-dark dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#EC6726] dark:focus:ring-[#FFD600] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5 font-mono">
                      {t.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@empresa.com"
                      className="w-full p-3.5 rounded-2xl bg-neutral-50/80 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 text-sm text-brand-dark dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#EC6726] dark:focus:ring-[#FFD600] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5 font-mono">
                      {t.formProject}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full p-3.5 rounded-2xl bg-neutral-50/80 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 text-sm text-brand-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-[#EC6726] dark:focus:ring-[#FFD600] transition-all"
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1.5 font-mono">
                      {t.formMessage}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte sobre o projeto, objetivo, links de referência e prazo desejado..."
                      className="w-full p-3.5 rounded-2xl bg-neutral-50/80 dark:bg-black/60 border border-neutral-200 dark:border-neutral-800 text-sm text-brand-dark dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#EC6726] dark:focus:ring-[#FFD600] transition-all"
                    />
                  </div>

                  {/* Apple Pill Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full font-semibold text-sm tracking-tight bg-[#1D1D1F] hover:bg-black dark:bg-[#FFD600] dark:hover:bg-yellow-300 text-white dark:text-black transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? t.formSubmitting : t.formSubmit}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="pt-12 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500 dark:text-neutral-400">
          <div>
            &copy; 2026 Denis Piaia - Freelance & Design Ops Leader. {t.rights}
          </div>

          <div className="flex gap-3">
            {socials.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 border border-black/[0.08] dark:border-white/[0.1] rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-brand-dark dark:hover:text-white hover:border-black/30 dark:hover:border-white/30 transition-all backdrop-blur-md"
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
