import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check, Send, Mail, MessageSquare, Sparkles, Clock, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';

interface ScopeCalculatorProps {
  selectedServiceId?: string;
}

const ScopeCalculator: React.FC<ScopeCalculatorProps> = ({ selectedServiceId }) => {
  const { language } = useLanguage();
  const t = translationsFreela[language].calculator;
  const servicesData = translationsFreela[language].services.items;

  // Selected services state initialized with prop if provided
  const [selectedServices, setSelectedServices] = useState<string[]>(
    selectedServiceId ? [selectedServiceId] : ['ai-ds']
  );
  const [timelineUrgency, setTimelineUrgency] = useState<'urgent' | 'standard' | 'flexible'>('standard');
  const [customNote, setCustomNote] = useState('');

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(prev => prev.filter(s => s !== id));
    } else {
      setSelectedServices(prev => [...prev, id]);
    }
  };

  const selectedServiceObjects = servicesData.filter(s => selectedServices.includes(s.id));

  // Build the pre-filled message text
  const generateMessageText = () => {
    const servicesList = selectedServiceObjects.map(s => `• ${s.title}`).join('\n');
    const urgencyText = t.timelineOptions[timelineUrgency].label;
    const noteText = customNote.trim() ? `\n\nDetalhes do Projeto:\n"${customNote.trim()}"` : '';

    return `Olá Denis! Acessei seu site e montei o seguinte briefing de projeto:\n\nServiços de interesse:\n${servicesList || '• Consulta geral'}\n\nPrazo desejado: ${urgencyText}${noteText}\n\nGostaria de entender sua disponibilidade e solicitar uma proposta!`;
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(generateMessageText());
    // Direct WhatsApp link
    window.open(`https://api.whatsapp.com/send?phone=5519981517551&text=${text}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent('Solicitação de Proposta / Briefing de Projeto - Denis Piaia');
    const body = encodeURIComponent(generateMessageText());
    window.open(`mailto:dpiaia@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section 
      id="calculator"
      className="py-24 bg-gradient-to-b from-brand-light via-neutral-100/50 to-brand-light dark:from-brand-dark dark:via-neutral-950/60 dark:to-brand-dark relative transition-colors duration-300 border-t border-brand-lead/10 dark:border-white/5"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lead/10 dark:bg-brand-yellow/10 text-brand-lead dark:text-brand-yellow text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Calculator size={14} />
            {t.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-5xl font-bold mb-4 text-brand-dark dark:text-white"
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
            className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* 2-Column Calculator Builder */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Interactive Options (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Services Multi-Select */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-brand-lead/10 dark:border-white/5 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-lead dark:bg-brand-yellow text-white dark:text-brand-dark flex items-center justify-center text-xs font-bold">1</span>
                {t.step1Title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesData.map((svc) => {
                  const isSelected = selectedServices.includes(svc.id);
                  return (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => toggleService(svc.id)}
                      className={`p-3.5 rounded-xl text-left transition-all border flex items-start gap-3 ${
                        isSelected
                          ? 'bg-brand-lead/10 dark:bg-brand-yellow/10 border-brand-lead dark:border-brand-yellow shadow-xs'
                          : 'bg-white dark:bg-neutral-950/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'bg-brand-lead dark:bg-brand-yellow text-white dark:text-brand-dark'
                          : 'border border-neutral-300 dark:border-neutral-700'
                      }`}>
                        {isSelected && <Check size={13} strokeWidth={3} />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-dark dark:text-white flex items-center gap-1.5">
                          {svc.title}
                          {svc.isFlagship && (
                            <span className="text-[9px] bg-brand-yellow text-brand-dark px-1.5 py-0.2 rounded font-mono font-bold">IA</span>
                          )}
                        </div>
                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-1 mt-0.5">
                          {svc.tagline}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Timeline Urgency */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-brand-lead/10 dark:border-white/5 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-lead dark:bg-brand-yellow text-white dark:text-brand-dark flex items-center justify-center text-xs font-bold">2</span>
                {t.step2Title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['urgent', 'standard', 'flexible'] as const).map((urg) => {
                  const isSelected = timelineUrgency === urg;
                  return (
                    <button
                      key={urg}
                      type="button"
                      onClick={() => setTimelineUrgency(urg)}
                      className={`p-4 rounded-xl text-left transition-all border flex flex-col justify-between ${
                        isSelected
                          ? 'bg-brand-lead/10 dark:bg-brand-yellow/10 border-brand-lead dark:border-brand-yellow shadow-xs'
                          : 'bg-white dark:bg-neutral-950/50 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Clock size={16} className={isSelected ? 'text-brand-lead dark:text-brand-yellow' : 'text-neutral-400'} />
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-brand-lead dark:border-brand-yellow bg-brand-lead dark:bg-brand-yellow' : 'border-neutral-400'
                        }`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white dark:bg-brand-dark" />}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-brand-dark dark:text-white">
                          {t.timelineOptions[urg].label}
                        </div>
                        <div className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 leading-snug">
                          {t.timelineOptions[urg].desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Optional Notes */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-brand-lead/10 dark:border-white/5 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark dark:text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-lead dark:bg-brand-yellow text-white dark:text-brand-dark flex items-center justify-center text-xs font-bold">3</span>
                {t.step3Title}
              </h3>
              <textarea
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                placeholder={t.customNotePlaceholder}
                rows={3}
                className="w-full p-3 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-brand-dark dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-lead dark:focus:ring-brand-yellow transition-all"
              />
            </div>

          </div>

          {/* Right Column: Live Briefing Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-8 rounded-2xl bg-neutral-900 dark:bg-black text-white border border-neutral-800 shadow-2xl space-y-6">
              
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-yellow mb-1">
                  <Sparkles size={14} /> {t.summaryTitle}
                </div>
                <h3 className="text-xl font-bold font-display text-white">
                  Proposta Pronta para Envio
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  {t.summaryDesc}
                </p>
              </div>

              {/* Selected List Breakdown */}
              <div className="space-y-3 pt-4 border-t border-neutral-800">
                <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                  {t.selectedServices}
                </div>

                {selectedServiceObjects.length === 0 ? (
                  <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
                    <AlertCircle size={15} className="text-brand-yellow shrink-0" />
                    <span>{t.emptySelection}</span>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                    {selectedServiceObjects.map((s) => (
                      <div key={s.id} className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80 text-xs flex items-center justify-between">
                        <span className="font-semibold text-neutral-200">{s.title}</span>
                        <span className="text-[10px] font-mono text-brand-yellow">{s.timeline}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Selected Timeline */}
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs flex items-center justify-between">
                <span className="text-neutral-400">{t.urgencyLabel}</span>
                <span className="font-bold text-brand-yellow font-mono">
                  {t.timelineOptions[timelineUrgency].label}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleWhatsAppClick}
                  disabled={selectedServiceObjects.length === 0}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-green-500 hover:bg-green-400 text-neutral-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-950/30 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <MessageSquare size={18} />
                  <span>{t.whatsappButton}</span>
                </button>

                <button
                  onClick={handleEmailClick}
                  disabled={selectedServiceObjects.length === 0}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs bg-neutral-800 hover:bg-neutral-700 text-white transition-all flex items-center justify-center gap-2 border border-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <Mail size={16} />
                  <span>{t.emailButton}</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-neutral-500">
                Resposta garantida em menos de 24 horas úteis.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ScopeCalculator;
