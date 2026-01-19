import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MousePointer2 } from 'lucide-react';
import Button from './ui/Button';
import ParticleBackground from './ui/ParticleBackground';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const { t } = useLanguage();
  
  // Improved Parallax: Elements move in the same direction at different speeds to create depth
  // Background moves slowly
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  
  // Heading moves slightly faster than background but slower than scroll (appears far)
  const yHeading = useTransform(scrollY, [0, 500], [0, 150]);
  
  // Text moves slightly faster than heading
  const yText = useTransform(scrollY, [0, 500], [0, 100]);
  
  // Opacity fade out to clean up the view as user scrolls down
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-brand-dark">
      
      {/* Interactive Particles Layer */}
      <ParticleBackground />

      {/* Background Ambience Elements - Blurs */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[100px] opacity-40" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] opacity-30" />
      </motion.div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col items-start max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-brand-yellow" />
            <span className="text-brand-yellow font-medium tracking-wider uppercase">{t.hero.badge}</span>
          </motion.div>

          <motion.div
            style={{ y: yHeading, opacity }}
            className="group relative"
          >
            {/* Camada Principal Visível */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 relative z-10">
              {t.hero.titleStart} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Camada Glitch 1 (Red Shift) - Visível no Hover */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-50 animate-glitch-1 select-none pointer-events-none mix-blend-screen">
               {t.hero.titleStart} <br />
               <span className="text-red-500">
                 {t.hero.titleHighlight}
               </span>
            </h1>
            
            {/* Camada Glitch 2 (Cyan Shift) - Visível no Hover */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 group-hover:opacity-50 animate-glitch-2 select-none pointer-events-none mix-blend-screen">
               {t.hero.titleStart} <br />
               <span className="text-cyan-500">
                 {t.hero.titleHighlight}
               </span>
            </h1>
          </motion.div>

          <motion.p
            style={{ y: yText, opacity }}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            {t.hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#projects">
              <Button icon={<MousePointer2 size={18} />}>{t.hero.ctaProjects}</Button>
            </a>
            <a href="#contact">
              <Button variant="outline">{t.hero.ctaContact}</Button>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
      >
        <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
        <ArrowDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;