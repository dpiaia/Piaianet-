import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Sparkles, CheckCircle2, ArrowRight, MessageSquare, 
  Layers, Code2, Palette, Globe, Target, FileText, CreditCard
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela } from '../../utils/translationsFreela';
import { serviceVisualMap } from './ServiceVisuals';

interface ProductsServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const ProductsServicesSection: React.FC<ProductsServicesSectionProps> = ({ onSelectService }) => {
  const { language } = useLanguage();
  const t = translationsFreela[language].services;
  const [filter, setFilter] = useState<'all' | 'digital' | 'graphic'>('all');

  const filteredServices = t.items.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'digital') return item.category === 'digital';
    return item.category === 'grafico';
  });

  const handleRequestQuote = (serviceTitle: string) => {
    onSelectService(serviceTitle);
    const contactEl = document.getElementById('contact-freela');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppService = (title: string) => {
    const message = encodeURIComponent(`Olá Denis! Gostaria de um orçamento para o serviço: ${title}`);
    window.open(`https://api.whatsapp.com/send?phone=5519981517551&text=${message}`, '_blank');
  };

  const digitalCount = t.items.filter(item => item.category === 'digital').length;
  const graphicCount = t.items.filter(item => item.category === 'grafico').length;

  return (
    <section 
      id="services-products"
      className="py-24 bg-brand-light dark:bg-[#08080A] relative overflow-hidden transition-colors duration-300"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header (Apple Keynote Layout) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono uppercase tracking-widest text-[#EC6726] dark:text-[#FFD600] mb-4">
            <Sparkles size={13} />
            <span>{t.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-4 text-brand-dark dark:text-white leading-[1.15]">
            <span className="block">{t.title}</span>
            <span className="text-[#EC6726] dark:text-[#FFD600]">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg font-normal leading-relaxed">
            {t.subtitle}
          </p>

          {/* Apple Segmented Category Switcher */}
          <div className="inline-flex p-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] mt-8 text-xs sm:text-sm font-semibold tracking-tight backdrop-blur-xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                filter === 'all' 
                  ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white shadow-xs font-bold' 
                  : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'
              }`}
            >
              Todos ({t.items.length})
            </button>
            <button
              onClick={() => setFilter('digital')}
              className={`px-6 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                filter === 'digital' 
                  ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white shadow-xs font-bold' 
                  : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'
              }`}
            >
              Digital ({digitalCount})
            </button>
            <button
              onClick={() => setFilter('graphic')}
              className={`px-6 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                filter === 'graphic' 
                  ? 'bg-white dark:bg-white/20 text-brand-dark dark:text-white shadow-xs font-bold' 
                  : 'text-neutral-500 hover:text-brand-dark dark:hover:text-white'
              }`}
            >
              Gráfico ({graphicCount})
            </button>
          </div>
        </div>

        {/* Productized Services List (Apple Product Cards) */}
        <div className="space-y-16 lg:space-y-20">
          {filteredServices.map((service, index) => {
            const isFlagship = service.isFlagship;
            const isReversed = index % 2 === 1;

            return (
              <motion.article 
                key={service.id}
                id={`service-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`p-6 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-2xl transition-all duration-300 relative overflow-hidden ${
                  isFlagship 
                    ? 'bg-white dark:bg-[#121216] border-2 border-[#EC6726]/40 dark:border-[#FFD600]/40 shadow-md' 
                    : 'bg-white/80 dark:bg-[#101014] border border-black/[0.08] dark:border-white/[0.08] shadow-xs'
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left (or Right): Text & Specs Content */}
                  <div className={`lg:col-span-6 flex flex-col items-start ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {isFlagship && (
                        <span className="px-3 py-1 rounded-full bg-[#EC6726]/15 dark:bg-[#FFD600]/15 text-[#EC6726] dark:text-[#FFD600] text-xs font-bold font-mono tracking-wider uppercase border border-[#EC6726]/30 dark:border-[#FFD600]/30 flex items-center gap-1.5 shadow-xs">
                          <Sparkles size={12} />
                          {service.highlightBadge || 'Carro-Chefe IA'}
                        </span>
                      )}
                      
                      <span className="px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-400 text-xs font-mono uppercase tracking-wider">
                        {service.category === 'digital' ? '✦ Digital Product' : '✦ Visual Identity'}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-brand-dark dark:text-white">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <div className="text-sm font-semibold text-[#EC6726] dark:text-[#FFD600] mb-4">
                      {service.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="w-full space-y-2.5 mb-8">
                      <div className="text-xs font-mono uppercase font-bold text-neutral-400 tracking-wider">
                        O que você recebe:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-200">
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="text-[#EC6726] dark:text-[#FFD600] shrink-0 mt-0.5" />
                            <span className="font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons (Apple Pill Styling) */}
                    <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-black/[0.06] dark:border-white/[0.08] w-full">
                      <button
                        onClick={() => handleRequestQuote(service.title)}
                        className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-tight bg-[#1D1D1F] hover:bg-black dark:bg-[#FFD600] dark:hover:bg-yellow-300 text-white dark:text-black transition-all duration-200 shadow-sm flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                      >
                        <span>Solicitar Orçamento</span>
                        <ArrowRight size={14} />
                      </button>

                      <button
                        onClick={() => handleWhatsAppService(service.title)}
                        className="px-5 py-3 rounded-full text-xs sm:text-sm font-medium tracking-tight bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-neutral-800 dark:text-neutral-200 border border-black/[0.06] dark:border-white/[0.08] transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
                      >
                        <MessageSquare size={14} className="text-emerald-500" />
                        <span>Falar no WhatsApp</span>
                      </button>
                    </div>

                  </div>

                  {/* Right (or Left): Interactive Apple-Grade Visual Mockup */}
                  <div className={`lg:col-span-6 w-full ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {serviceVisualMap[service.id] || (
                      <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 text-center text-neutral-400">
                        Visualização Interativa
                      </div>
                    )}
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProductsServicesSection;
