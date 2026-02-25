import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';
import ParticleBackground from './ui/ParticleBackground';
import CardHoverParticles from './ui/CardHoverParticles';
import { useLanguage } from '../context/LanguageContext';

const testimonialsData = [
  {
    id: 1,
    name: "Richard Jesus",
    role: "Design Director",
    company: "Outusual 🇵🇹",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEBWjk5Nhh2Rg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688993227445?e=1770249600&v=beta&t=vbSmU5-oPxAfZp7cLU5RyWiUqd0KAHXkCWrxs4FdOCk"
  },
  {
    id: 2,
    name: "Héctor Gutiérrez",
    role: "Digital",
    company: "FEMSA 🇲🇽",
    avatarUrl: "https://media.licdn.com/dms/image/v2/C4E03AQEovh7sWS5TXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1602034834557?e=1770249600&v=beta&t=UBz1xa-kakI9zlBWlEBkmlS2LTDWUeqAVXJ2jj-8wx4"
  },
  {
    id: 3,
    name: "Lucas Daniel",
    role: "Product Manager",
    company: "Bolt 🇪🇪",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHRgSLyHb--JQ/profile-displayphoto-crop_800_800/B4DZn2.DoiJIAI-/0/1760785087498?e=1770249600&v=beta&t=JqqgVb6kzAO4TaRRGzSm6L-rGzTgcV84wLyZygITYmc"
  },
  {
    id: 4,
    name: "Marcelo Biondo",
    role: "UX Lead",
    company: "Mercado Livre 🇧🇷",
    avatarUrl: "https://media.licdn.com/dms/image/v2/C4E03AQFCYi5XZxklbA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1590448563419?e=1770249600&v=beta&t=c06qsZQlNasUbpyO1hYIedp_IpvkHDp6DuNWKMUeuaE"
  },
  {
    id: 5,
    name: "Leonardo Lima",
    role: "Coordinator",
    company: "PUC Campinas 🇧🇷",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D03AQFaas1A_b-mRA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1676812603566?e=1770249600&v=beta&t=H2KSkHnPpRNcepg1LVIHXz2Fp_BY2mTmpSWl2qG_JYo"
  },
  {
    id: 6,
    name: "Thawnee de Oliveira",
    role: "Sr. Marketing Coordinator",
    company: "Nintendo 🇺🇸",
    avatarUrl: "https://media.licdn.com/dms/image/v2/C5603AQFlW7vYkgKdSQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516837840492?e=1770249600&v=beta&t=-m__4dPQlCcO_InSnotDUgomkyyQSTicYD7s1vVJHQQ"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({ testimonial, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full"
    >
       {/* Background Card Base */}
      <div className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm border border-brand-lead/10 dark:border-white/5 p-8 rounded-2xl relative transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-neutral-900/80 group-hover:border-brand-lead/30 dark:group-hover:border-brand-yellow/30 flex flex-col h-full overflow-hidden shadow-sm dark:shadow-none">
        
        {/* Local Particle Effect (Hearts & Stars) */}
        <CardHoverParticles active={isHovered} />

        {/* Decorative Quote Icon */}
        <div className="absolute top-6 right-8 text-brand-lead/10 dark:text-brand-yellow/10 group-hover:text-brand-lead/20 dark:group-hover:text-brand-yellow/20 transition-colors z-10">
          <Quote size={48} fill="currentColor" />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className="mb-6">
              <div className="flex text-brand-lead dark:text-brand-yellow mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 italic leading-relaxed text-sm lg:text-base">"{testimonial.quote}"</p>
          </div>
          
          <div className="flex items-center gap-4 mt-auto pt-6 border-t border-brand-lead/10 dark:border-white/5 relative">
            <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden border border-brand-lead/30 dark:border-brand-yellow/30 shrink-0">
              <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
            </div>
            <div>
              <h4 className="text-brand-dark dark:text-white font-bold text-sm">{testimonial.name}</h4>
              <p className="text-xs text-neutral-500">{testimonial.role} <span className="text-brand-lead/60 dark:text-brand-yellow/60">@ {testimonial.company}</span></p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  const testimonials: Testimonial[] = testimonialsData.map((test, index) => ({
    ...test,
    quote: t.testimonials.items[index].quote
  }));

  return (
    <section id="testimonials" className="py-24 bg-brand-light dark:bg-brand-dark border-t border-brand-lead/10 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      
      {/* Global Section Particle Background (Ambient) */}
      <ParticleBackground />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-bold mb-4 text-brand-dark dark:text-white">{t.testimonials.title} <span className="text-brand-lead dark:text-brand-yellow">{t.testimonials.titleHighlight}</span></h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} testimonial={t} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;