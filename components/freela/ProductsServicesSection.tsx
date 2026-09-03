import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, Sparkles, CheckCircle2, ArrowRight, MessageSquare, 
  Layers, Code2, Palette, Globe, Target, FileText, CreditCard
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { translationsFreela, ServiceItem } from '../../utils/translationsFreela';
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

  const handleWhatsAppService = (service: ServiceItem) => {
    const text = service.whatsappMessage || `Olá Denis! Gostaria de falar sobre ${service.productType || service.title}`;
    const message = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?phone=5519991119674&text=${message}`, '_blank');
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

        {/* Productized Services List (Standardized Pro Panels) */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {filteredServices.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article 
                key={service.id}
                id={`service-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-10 lg:p-12 xl:p-14 rounded-[28px] sm:rounded-[32px] transition-all duration-300 relative overflow-hidden bg-[#0C0D11] border border-white/[0.08] shadow-2xl"
              >
                {/* Top Section: 2 Columns (Alternating Text and Interactive Visual Mockup) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Text Content Column */}
                  <div className={`lg:col-span-6 flex flex-col items-start justify-center ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    
                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight mb-4 text-white leading-[1.18]">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <div className="text-sm sm:text-base font-bold text-[#F7D032] mb-5 leading-snug">
                      {service.tagline}
                    </div>

                    {/* Description */}
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* Visual Mockup Column */}
                  <div className={`lg:col-span-6 w-full flex items-center justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {serviceVisualMap[service.id] || (
                      <div className="p-8 rounded-2xl bg-[#08090D] border border-white/10 text-center text-neutral-400 w-full">
                        Visualização Interativa
                      </div>
                    )}
                  </div>

                </div>

                {/* Horizontal Divider Across Panel */}
                <div className="w-full border-t border-white/[0.08] my-8 sm:my-10" />

                {/* Bottom Section: Deliverables Row (O QUE VOCÊ RECEBE) */}
                <div className="w-full">
                  <div className="text-xs font-mono uppercase font-bold text-neutral-400 tracking-wider mb-5">
                    O QUE VOCÊ RECEBE:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#F7D032] shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed text-neutral-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Aligned to Right */}
                <div className="flex flex-wrap items-center justify-end gap-3.5 sm:gap-4 mt-8 pt-2">
                  <button
                    onClick={() => handleRequestQuote(service.title)}
                    className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold tracking-tight bg-[#F7D032] hover:bg-[#FFE043] text-black transition-all duration-200 shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>{service.actionText || 'Solicitar Orçamento'}</span>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={() => handleWhatsAppService(service)}
                    className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-medium tracking-tight bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.12] transition-all duration-200 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <MessageSquare size={16} className="text-emerald-400" />
                    <span>{t.talkOnWhatsApp || 'Falar no WhatsApp'}</span>
                  </button>
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
