
// Add React to imports to resolve namespace errors
import React, { useState, useEffect, FC, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience as ExperienceType } from '../types';
import { Briefcase, Plus } from 'lucide-react';
import GalaxyBackground from './ui/GalaxyBackground';
import { useLanguage } from '../context/LanguageContext';

const freelanceClients = [
  { name: "Cielo", logo: "https://cdn.worldvectorlogo.com/logos/cielo-1.svg", hoverColor: "hover:bg-sky-200" },
  { name: "Netshoes", logo: "https://cdn.worldvectorlogo.com/logos/netshoes-logo.svg", hoverColor: "hover:bg-violet-300" },
  { name: "Zattini", logo: "https://logopng.com.br/logos/zattini-41.png", hoverColor: "hover:bg-pink-100" },
  { name: "Athletico Paranaense", logo: "https://cdn.worldvectorlogo.com/logos/athletico-pr-1.svg", hoverColor: "hover:bg-white" },
  { name: "PUC Campinas", logo: "https://www.puc-campinas.edu.br/wp-content/uploads/2022/02/logo-puc-branco-2020.png", hoverColor: "hover:bg-blue-700" },
  { name: "IxDA", logo: "https://i0.wp.com/ixda.org/wp-content/uploads/2023/09/IxDA-Logo.png?fit=216%2C70&quality=80&ssl=1", hoverColor: "hover:bg-gray-300" },
  { name: "IxDD", logo: "https://i0.wp.com/ixda.org/wp-content/uploads/2023/08/IxDD-Logo-2.png?resize=300%2C92&quality=80&ssl=1", hoverColor: "hover:bg-yellow-400" },
  { name: "TDC", logo: "https://s3-sa-east-1.amazonaws.com/thedevconf/2018/img/branding/branding-tdc-uma-cor-fundo-escuro.png", hoverColor: "hover:bg-blue-500" },
  { name: "Coderhouse", logo: "https://startupeable.com/directorio/wp-content/uploads/2021/03/1558441737613.png", hoverColor: "hover:bg-amber-500" },
  { name: "E muito mais", logo: "", hoverColor: "hover:bg-brand-yellow", isSpecial: true }
];

// SVG Component for Chewbacca/Special Ship
const MillenniumFalcon = ({ className, direction }: { className?: string, direction: 'left' | 'right' }) => (
  <svg 
    viewBox="0 0 64 64" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
    style={{ 
      // Base rotation of 90deg to make the upright character lie horizontal (pointing right)
      // If flying left, we flip it horizontally or rotate 270deg.
      transform: direction === 'right' ? 'rotate(90deg)' : 'rotate(-90deg)'
    }} 
  >
    <path d="m8.05 35.76a71.47 71.47 0 0 1 4.75-15.67c3.59-8.19 8.8-16.18 9.61-16.51s6.93-.32 7.06 0 .49 8.86.49 8.86a11.79 11.79 0 0 1 3.57.06s-.18-8.94.19-9.13 8.05-.35 8.56 0 6.65 13.68 6.65 13.68.92-1.2 1.54-1.28 3.68-.26 3.88.05 2.7 6.76 2.9 7.5-.17 10.2-.25 10.68-1.54 1.22-1.54 1.22a15.38 15.38 0 0 1 -.94 9.21c-2.1 4.48-4 5.89-4 5.89a12.56 12.56 0 0 1 -.07 2.44c-.18.56-7.28 8-18.84 8.07s-18.58-6.5-18.53-7.26a7.68 7.68 0 0 1 .71-2.07 12.19 12.19 0 0 1 -3.2-3.94l-1.29-2.56a1.53 1.53 0 0 1 -1.64-1.15 34.42 34.42 0 0 1 -1-7.67c.21-.28 1.08-.18 1.39-.42z" fill="#1d1d1b"/>
    <path d="m15.05 20.05s3.41-7.57 5.05-10.23 2.72-4.49 3.15-4.56 4.75 0 4.82.27 0 7.32 0 7.32-1.24.9-1.22 1.52v.63a65.1 65.1 0 0 0 -11.8 5.05z" fill="#e6e4da"/>
    <path d="m35.82 5.5c.39-.4 4.87-.41 5.32 0s7 14.42 7.11 14.67a7.86 7.86 0 0 1 -.1 1.44 14 14 0 0 0 -7.1-5.11c-4.4-1.16-5.4-.95-5.4-1.14s.05-9.73.17-9.86z" fill="#e6e4da"/>
    <path d="m29.06 14.14a6.59 6.59 0 0 1 2.74-.43 4 4 0 0 1 2.32.52c.13.24.07 15.84-.24 15.91s-4 .39-4.12 0-.94-15.68-.7-16z" fill="#e6e4da"/>
    <path d="m51 18s1.68-.35 2.06 0a51.76 51.76 0 0 1 2.44 6.08c0 .19-.3 10-.3 10s-15.6 3.66-15.79 3.42-.79-2-.48-2.18 10-7.89 10.21-8.27.64-5.26.76-5.64 1.1-3.41 1.1-3.41z" fill="#e6e4da"/>
    <path d="m27.18 16.85c.15 0 .82 12 .82 12l-1.24-1.72s-.45.34-.41.51 1.77 2.88 1.77 3-.39.36-.61.56a2.13 2.13 0 0 1 -.31.23 23.9 23.9 0 0 0 -2.08-2.71c-.18 0-.47.3-.43.37a33.63 33.63 0 0 1 1.91 2.81c-.06.11-.85.83-.85.83a15.66 15.66 0 0 0 -1.69-2.21c-.21 0-.5.36-.45.44s1.69 2.38 1.65 2.49-.53.7-.53.7a22.85 22.85 0 0 0 -1.88-2.3c-.14 0-.49.41-.42.51s1.81 2.34 1.82 2.4-.41.76-.45.91-.05.21-.05.21a36.84 36.84 0 0 0 -2.53-3.16c-.14 0-.45.24-.41.36s2.58 3.76 2.58 3.76a8.9 8.9 0 0 1 -1.1.11c-.06 0-2.69-3.37-2.76-3.34s-.53.39-.53.47 2.31 3 2.23 3a9.77 9.77 0 0 1 -1.83.1c-.17-.1-1.65-2.32-1.76-2.32s-.49.31-.45.41 1.21 2 1.15 2-3.89-.32-5.81-.57-2.91-.61-2.89-.84 1.09-7.19 3.11-10.19 6-5.42 8.37-6.55a37.23 37.23 0 0 1 6.06-2.27z" fill="#ddc07c"/>
    <path d="m31.53 31.47c3.47 0 6.22 2.75 6.4 7s-2.84 6.59-6.56 6.75a6 6 0 0 1 -6.05-5.53c-.17-2.44.09-8.13 6.21-8.22z" fill="#e6e4da"/>
    <path d="m31.1 33c2.5-.53 4 2.51 3.34 4.59s-4.92 2.38-5.65.3.35-4.44 2.31-4.89z" fill="#1d1d1b"/>
    <path d="m31.22 33.88c1.83-.39 3 1.84 2.45 3.36s-3.6 1.74-4.14.22a2.7 2.7 0 0 1 1.69-3.58z" fill="#ddc07c"/>
    <path d="m17.36 24.38a4.19 4.19 0 0 1 5.15 1.46 3.46 3.46 0 0 1 -1.86 5.16c-2.39.92-5 0-5.39-2a3.85 3.85 0 0 1 2.1-4.62z" fill="#1d1d1b"/>
    <path d="m17.73 25.08a3.3 3.3 0 0 1 4.05 1.15 2.72 2.72 0 0 1 -1.46 4.06c-1.88.73-3.92 0-4.24-1.58a3 3 0 0 1 1.65-3.63z" fill="#e6e4da"/>
    <path d="m43.17 19.36a27.7 27.7 0 0 0 -7.37-2.42c-.12.25-.4 13.89-.4 13.89a6.82 6.82 0 0 1 1.51.72 7.16 7.16 0 0 1 1.55 2.53l3.86-3a3.33 3.33 0 0 1 -3.46-2.36 3.84 3.84 0 0 1 2.14-4.6 4.21 4.21 0 0 1 5.16 1.46 3.73 3.73 0 0 1 .52 2.13c.3-.24.49-.41.51-.43.12-.19.69-2.89.69-2.89a11.23 11.23 0 0 0 -4.71-5.03z" fill="#ddc07c"/>
    <g fill="#e6e4da">
      <path d="m41.32 24.83a3 3 0 0 0 -1.65 3.62c.31 1.46 2.1 2.19 3.86 1.7 l2-1.58a2.77 2.77 0 0 0 -.16-2.6 3.31 3.31 0 0 0 -4.05-1.14z"/>
      <path d="m8.68 37.4c1-.14 5.55 1 9.06 1.13s5.91.07 5.91.16.12 1.62.12 1.62-13.94 3.07-14.1 2.95-1.52-5.79-.99-5.86z"/>
      <path d="m39.5 39c.31 0 14.38-2.89 14.48-2.64a28.69 28.69 0 0 1 0 3.56 3.86 3.86 0 0 1 -.56 1.89s-14-1-14-1.09.08-1.72.08-1.72z"/>
      <path d="m39.31 41.81c.15 0 13.59 1.39 13.56 1.57s-1 2.12-1.35 2.78a5.15 5.15 0 0 1 -.91 1.18 12.42 12.42 0 0 0 -.68-2.46c-.18 0-.84.17-.74.42s.68 2.86.69 3a5.07 5.07 0 0 1 -.7.83 1.43 1.43 0 0 1 -.32-.31c-.07-.12-.9-4.33-1-4.39s-.82-.29-.81 0 .76 3.7.63 3.67-1.68-1.23-1.68-1.23 0-2.69-.3-2.87-.79-.36-.79-.24.11 2.35.11 2.35l-1.24-1s.13-1.38-.06-1.5-1-.38-1-.29-.16 1-.16 1-3.29-1.87-3.33-2a1.74 1.74 0 0 1 .08-.51z"/>
      <path d="m14.76 50.59a20.11 20.11 0 0 1 -2.6-3.48c-.65-1.36-1.08-2.54-.87-2.64s12.71-2.88 12.82-2.79a11.74 11.74 0 0 1 .59 1.18 14.08 14.08 0 0 1 -1.7 1.53c0-.12-.84-1.45-1-1.41s-.46.16-.43.29.82 1.57.82 1.57-.77.8-.87.68a24.76 24.76 0 0 0 -1.52-2.22c-.13 0-.46.41-.46.41a15.31 15.31 0 0 1 1.2 2.36 5.85 5.85 0 0 1 -.95.64 17.36 17.36 0 0 0 -1.93-2.59c-.25 0-.81.18-.77.46s1.71 2.71 1.61 2.78l-.8.54s-2-3.11-2.15-3.11a4.74 4.74 0 0 0 -.81.39s2.06 3.33 2.06 3.43a8.77 8.77 0 0 1 -.71.58 36.9 36.9 0 0 0 -2.67-3.7c-.15.1-.68.29-.61.42s2.45 4 2.45 4z"/>
    </g>
    <path d="m25.77 44.53s1.61 2.4 5.7 2.19a9.74 9.74 0 0 0 6.53-3.22l7.09 4.29c2.05 1.24 3.3 2.84 3.28 3.31s-6.03 7.9-17.24 8.35-15.81-5.68-15.73-6.45 9.77-8.74 10.37-8.47z" fill="#ddc07c"/>
    <path d="m31.36 47.66a2.46 2.46 0 0 1 2.35 3.42c-.77 2.08-4.15 1.9-5 .23a2.64 2.64 0 0 1 2.65-3.65z" fill="#1d1d1b"/>
    <path d="m31.31 48.46a1.67 1.67 0 0 1 1.59 2.32c-.52 1.41-2.81 1.28-3.36.15a1.79 1.79 0 0 1 1.77-2.47z" fill="#92a0d1"/>
    <path d="m31.32 53.76a2 2 0 0 1 1.9 2.77c-.62 1.68-3.36 1.54-4 .18a2.14 2.14 0 0 1 2.1-2.95z" fill="#1d1d1b"/>
    <path d="m31.27 54.54a1.22 1.22 0 0 1 1.16 1.69 1.43 1.43 0 0 1 -2.45.11 1.3 1.3 0 0 1 1.29-1.8z" fill="#e7413e"/>
    <path d="m38.52 46.58a2 2 0 0 1 1.9 2.77c-.62 1.69-3.36 1.54-4 .19a2.14 2.14 0 0 1 2.1-2.96z" fill="#1d1d1b"/>
    <path d="m38.47 47.37a1.21 1.21 0 0 1 1.16 1.68 1.43 1.43 0 0 1 -2.45.11 1.3 1.3 0 0 1 1.29-1.79z" fill="#e6e4da"/>
    <path d="m25.27 46.75a2 2 0 0 1 1.91 2.78c-.63 1.68-3.37 1.53-4 .18a2.15 2.15 0 0 1 2.09-2.96z" fill="#1d1d1b"/>
    <path d="m25.22 47.54a1.21 1.21 0 0 1 1.16 1.69 1.43 1.43 0 0 1 -2.45.11 1.3 1.3 0 0 1 1.29-1.8z" fill="#e6e4da"/>
    <path d="m23.21 51.7a2 2 0 0 1 1.91 2.78c-.63 1.68-3.36 1.53-4 .18a2.14 2.14 0 0 1 2.09-2.96z" fill="#1d1d1b"/>
    <path d="m23.16 52.49a1.21 1.21 0 0 1 1.16 1.68 1.42 1.42 0 0 1 -2.44.12 1.3 1.3 0 0 1 1.28-1.8z" fill="#e6e4da"/>
    <path d="m40.37 51.45a2 2 0 0 1 1.9 2.77c-.62 1.69-3.36 1.54-4 .19a2.14 2.14 0 0 1 2.1-2.96z" fill="#1d1d1b"/>
    <path d="m40.32 52.24a1.21 1.21 0 0 1 1.16 1.68 1.43 1.43 0 0 1 -2.48.08 1.3 1.3 0 0 1 1.32-1.76z" fill="#e6e4da"/>
    <path d="m18.81 21.91a7.41 7.41 0 0 1 2.5-1.61c2-.95 2.22-1.14 2.32-1a2.1 2.1 0 0 1 .23.75c0 .12-1.55.5-2.6 1.17a4.38 4.38 0 0 0 -1.32 1.13s-1.1-.25-1.13-.44z" fill="#1d1d1b"/>
    <path d="m22.47 9.55a2.32 2.32 0 0 1 2.74 2.95c-.52 2-3.49 2.07-4.23 1.05a2.65 2.65 0 0 1 1.49-4z" fill="#1d1d1b"/>
    <path d="m22.59 10.19a1.66 1.66 0 0 1 2 2.12 1.91 1.91 0 0 1 -3.05.76 1.91 1.91 0 0 1 1.05-2.88z" fill="#ddc07c"/>
    <path d="m39.68 9.33a2.32 2.32 0 0 1 2.75 2.95c-.52 2-3.49 2.07-4.23 1.05a2.65 2.65 0 0 1 1.48-4z" fill="#1d1d1b"/>
    <path d="m39.81 10a1.67 1.67 0 0 1 2 2.13 1.92 1.92 0 0 1 -3 .76 1.92 1.92 0 0 1 1-2.89z" fill="#ddc07c"/>
    <path d="m50.79 22.2a1 1 0 0 1 .78.14c.07.13-.26 3.76-.26 3.76s-1 .11-1.07 0a35 35 0 0 1 .55-3.9z" fill="#1d1d1b"/>
  </svg>
);

// Added style prop to GenericShip to fix TS error where it was being passed but not accepted
const GenericShip = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h20" strokeWidth="0" />
    <path d="M12 2l3 9-3 2-3-2 3-9z" fill="currentColor" /> 
    <path d="M12 13l5 9-5-2-5 2 5-9z" fill="currentColor" />
    <path d="M5 10l-3 8 5-2" stroke="currentColor" strokeWidth="2" />
    <path d="M19 10l3 8-5-2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

interface ActiveShip {
  id: number;
  y: number;
  type: 'falcon' | 'generic';
  direction: 'left' | 'right';
  speed: number;
}

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const [ships, setShips] = useState<ActiveShip[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  const experiences: ExperienceType[] = t.experience.jobs.map((job, index) => ({
    id: index + 1,
    ...job
  }));

  const handleSpawnShip = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeY = e.clientY - rect.top; 

    const isFalcon = Math.random() < 0.1; 
    const direction = Math.random() > 0.5 ? 'right' : 'left';
    
    const newShip: ActiveShip = {
      id: Date.now() + Math.random(),
      y: relativeY,
      type: isFalcon ? 'falcon' : 'generic',
      direction,
      speed: Math.random() * 2 + 1 
    };

    setShips(prev => [...prev, newShip]);
  };

  const removeShip = (id: number) => {
    setShips(prev => prev.filter(ship => ship.id !== id));
  };

  return (
    <section 
      id="experience" 
      ref={containerRef}
      onClick={handleSpawnShip}
      className="py-24 bg-brand-dark relative overflow-hidden cursor-crosshair selection:bg-brand-yellow/30"
    >
      
      <GalaxyBackground />
      
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark z-0 pointer-events-none" />

      {/* Ships Layer */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <AnimatePresence>
          {ships.map((ship) => (
            <motion.div
              key={ship.id}
              initial={{ 
                x: ship.direction === 'right' ? -200 : '100vw', 
                y: ship.y - 25, 
                opacity: 0,
                // We keep rotate: 0 here and handle rotation inside the SVG component for better control
                rotate: 0 
              }}
              animate={{ 
                x: ship.direction === 'right' ? '120vw' : -200,
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: ship.speed, 
                ease: "linear" 
              }}
              onAnimationComplete={() => removeShip(ship.id)}
              className="absolute text-neutral-600"
            >
              {ship.type === 'falcon' ? (
                <div className="text-neutral-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  <MillenniumFalcon className="w-24 h-24" direction={ship.direction} />
                </div>
              ) : (
                <div className="text-neutral-600">
                  <GenericShip 
                    className="w-16 h-16" 
                    style={{ transform: ship.direction === 'right' ? 'rotate(90deg)' : 'rotate(-90deg)' }} 
                  />
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-20 h-1 bg-cyan-500 blur-md -z-10"
                    style={{ 
                      translateX: '-50%', 
                      translateY: '-50%',
                      rotate: ship.direction === 'right' ? 180 : 0
                    }} 
                  />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <motion.div 
          className="mb-16 text-center pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-bold mb-4">{t.experience.title} <span className="text-brand-yellow">{t.experience.titleHighlight}</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:bg-gradient-to-b before:from-transparent before:via-neutral-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group pointer-events-auto`}
            >
              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-brand-dark border-4 border-neutral-800 rounded-full flex items-center justify-center z-10 -translate-x-1/2 md:translate-x-[-50%] group-hover:border-brand-yellow transition-colors shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                <div className="w-3 h-3 bg-brand-yellow rounded-full" />
              </div>

              <div className="ml-16 md:ml-0 md:w-[45%] p-6 md:p-8 bg-neutral-900/60 backdrop-blur-sm border border-white/5 hover:border-brand-yellow/30 transition-all rounded-none hover:bg-neutral-900/80">
                <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-brand-yellow py-1 px-2 bg-brand-yellow/10 rounded mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <h4 className="text-neutral-400 font-medium mb-4">{exp.company}</h4>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-xs text-neutral-500 border border-neutral-800 px-2 py-1 bg-black/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Grid Section (Reverted from carousel) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mt-32 pt-16 border-t border-white/5 pointer-events-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                {t.experience.consulting.title} <span className="text-brand-yellow">{t.experience.consulting.titleHighlight}</span>
              </h3>
              <p className="text-neutral-400 text-sm">{t.experience.consulting.desc}</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-neutral-500 text-sm">
              <Briefcase size={16} /> <span>{t.experience.consulting.label}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {freelanceClients.map((client, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`group h-32 bg-neutral-900/40 backdrop-blur-sm border border-white/5 hover:border-transparent transition-all duration-300 flex flex-col items-center justify-center p-4 cursor-default relative overflow-hidden ${client.hoverColor}`}
              >
                {client.isSpecial ? (
                  <div className="flex flex-col items-center justify-center gap-1 group-hover:scale-110 transition-transform duration-300">
                    <Plus size={24} className="text-brand-yellow mb-1" />
                    <span className="text-xs uppercase font-bold tracking-tighter text-neutral-400 group-hover:text-brand-dark transition-colors">
                      {client.name}
                    </span>
                  </div>
                ) : client.logo ? (
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-w-full max-h-10 w-auto h-auto object-contain transition-all duration-300 filter brightness-0 invert opacity-60 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        const parent = (e.target as HTMLImageElement).parentElement;
                        if (parent && !parent.querySelector('.fallback-text')) {
                          const span = document.createElement('span');
                          span.innerText = client.name;
                          span.className = 'fallback-text text-xs font-bold uppercase tracking-tighter text-neutral-500 group-hover:text-brand-dark transition-colors text-center';
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                ) : (
                  <h4 className="text-xl font-display font-bold text-neutral-500 group-hover:text-white transition-colors tracking-tight text-center">
                    {client.name}
                  </h4>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
