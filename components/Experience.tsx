import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience as ExperienceType } from '../types';
import { Briefcase, Plus } from 'lucide-react';
import GalaxyBackground from './ui/GalaxyBackground';
import { useLanguage } from '../context/LanguageContext';

const freelanceClients = [
  { name: "Cielo", category: "Fintech", logo: "https://cdn.worldvectorlogo.com/logos/cielo-1.svg", hoverColor: "hover:bg-sky-200" },
  { name: "Netshoes", category: "E-commerce", logo: "https://cdn.worldvectorlogo.com/logos/netshoes-logo.svg", hoverColor: "hover:bg-violet-300" },
  { name: "Zattini", category: "E-commerce", logo: "https://static.wikia.nocookie.net/logopedia/images/a/a1/Zattini_logo.png/revision/latest/scale-to-width-down/1200?cb=20191203125150", hoverColor: "hover:bg-pink-100" },
  { name: "Athletico Paranaense", category: "Sports Tech", logo: "https://cdn.worldvectorlogo.com/logos/athletico-pr-1.svg", hoverColor: "hover:bg-white" },
  { name: "PUC Campinas", category: "Educação", logo: "https://www.puc-campinas.edu.br/wp-content/uploads/2022/02/logo-puc-branco-2020.png", hoverColor: "hover:bg-blue-700" },
  { name: "IxDA", category: "Comunidade", logo: "https://i0.wp.com/ixda.org/wp-content/uploads/2023/09/IxDA-Logo.png?fit=216%2C70&quality=80&ssl=1", hoverColor: "hover:bg-gray-300" },
  { name: "IxDD", category: "Workshops", logo: "https://i0.wp.com/ixda.org/wp-content/uploads/2023/08/IxDD-Logo-2.png?resize=300%2C92&quality=80&ssl=1", hoverColor: "hover:bg-yellow-400" },
  { name: "TDC", category: "Palestrante", logo: "https://s3-sa-east-1.amazonaws.com/thedevconf/2018/img/branding/branding-tdc-uma-cor-fundo-escuro.png", hoverColor: "hover:bg-blue-500" },
  { name: "Coderhouse", category: "Educação", logo: "https://startupeable.com/directorio/wp-content/uploads/2021/03/1558441737613.png", hoverColor: "hover:bg-amber-500" },
  { name: "E muito mais", category: "Expertise", logo: "", hoverColor: "hover:bg-brand-yellow", isSpecial: true }
];

// SVG Components for the Ships
const MillenniumFalcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M408.8,122.5c-4.9-50.9-46.7-82-96.8-82H199.2c-50.1,0-91.8,31.1-96.8,82C45.3,128.4,0,178.6,0,239.5 c0,56.5,39.1,103.8,89.5,114.7c-5.8,11.3-15.6,21.8-15.6,21.8l20.4,26.6l37.5-22.3l-5.6-30.8c5.4,1.4,11.1,2.3,16.8,2.7 v63.3h10.9v23.2h-3.9v32.8h212.9v-32.8h-4.3v-23.2h10.5v-63.3c5.8-0.5,11.4-1.3,16.8-2.7l-5.6,30.8l37.5,22.3l20.4-26.6 c0,0-9.8-10.4-15.6-21.8c50.4-10.9,89.5-58.1,89.5-114.7C512,178.6,466.7,128.4,408.8,122.5z M384.8,239.5 c0,29.9-10.8,57.2-28.9,78.2c-15-18.1-37.5-29.6-62.7-29.6c-44.9,0-81.4,36.5-81.4,81.4c0,0.9,0,1.8,0.1,2.7h-22.5 c0.1-0.9,0.1-1.8,0.1-2.7c0-44.9-36.5-81.4-81.4-81.4c-25.2,0-47.7,11.5-62.7,29.6c-18.1-21-28.9-48.4-28.9-78.2 c0-53,34.4-97.7,81.8-111.4c2.5,23.1,22.1,41,45.9,41h124.6c23.9,0,43.4-18,45.9-41C350.4,141.8,384.8,186.5,384.8,239.5z M375.9,122.4c-2.3,16-16,28.3-32.5,28.3H169.4c-16.5,0-30.2-12.3-32.5-28.3c4.7-39.7,38.4-69.8,79.1-69.8h112.8 C337.5,52.6,371.1,82.7,375.9,122.4z M367,235.6h-15.6v-25.7H367V235.6z" />
  </svg>
);

const GenericShip = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
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

      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <AnimatePresence>
          {ships.map((ship) => (
            <motion.div
              key={ship.id}
              initial={{ 
                x: ship.direction === 'right' ? -200 : '100vw', 
                y: ship.y - 25, 
                opacity: 0,
                rotate: ship.direction === 'right' ? 90 : -90
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
                  <MillenniumFalcon className="w-24 h-24" />
                </div>
              ) : (
                <div className="text-neutral-600">
                  <GenericShip className="w-16 h-16 transform rotate-180" />
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