import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Users, Zap, Search, Music2, Camera, User, Briefcase, Disc, Play, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ParticleBackground from './ui/ParticleBackground';

const About: FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional');
  const [selectedTrack, setSelectedTrack] = useState<any | null>(null);

  const skills = [
    { icon: <Users size={24} />, ...t.about.professional.skills.leadership },
    { icon: <Search size={24} />, ...t.about.professional.skills.research },
    { icon: <Layers size={24} />, ...t.about.professional.skills.designSystems },
    { icon: <Zap size={24} />, ...t.about.professional.skills.prototyping },
  ];

  // Ajuste nos caminhos: removida a barra inicial '/' para garantir referência relativa correta à pasta public
  const personalPhotos = [
    "photos/denis-sf.jpg",      // Golden Gate
    "photos/denis-github.jpg",  // Github
    "photos/denis-figma.jpg",   // Figma
    "photos/denis-pilot.jpg",   // Cockpit
    "photos/denis-turbine.jpg", // Turbine
  ];

  // Duplicamos as fotos para criar o efeito de loop infinito sem buracos
  const infinitePhotos = [...personalPhotos, ...personalPhotos];

  return (
    <section id="about" className="py-24 bg-brand-gray relative overflow-hidden min-h-[800px]">
      <ParticleBackground variant="attract" onlyYellow={true} />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header with Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-2">
              {t.about.title} <span className="text-brand-yellow">{t.about.titleHighlight}</span>
            </h2>
            <div className="flex space-x-6 mt-6">
              <button 
                onClick={() => setActiveTab('professional')}
                className={`flex items-center gap-2 pb-2 text-lg font-medium transition-all relative ${activeTab === 'professional' ? 'text-brand-yellow' : 'text-neutral-500 hover:text-white'}`}
              >
                <Briefcase size={18} />
                {t.about.tabs.professional}
                {activeTab === 'professional' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-yellow" />}
              </button>
              <button 
                onClick={() => setActiveTab('personal')}
                className={`flex items-center gap-2 pb-2 text-lg font-medium transition-all relative ${activeTab === 'personal' ? 'text-brand-yellow' : 'text-neutral-500 hover:text-white'}`}
              >
                <User size={18} />
                {t.about.tabs.personal}
                {activeTab === 'personal' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-yellow" />}
              </button>
            </div>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'professional' ? (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
            >
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
                <p>{t.about.professional.p1}</p>
                <p>{t.about.professional.p2}</p>
                <p className="border-l-2 border-brand-yellow pl-4 text-white italic">{t.about.professional.p3}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative overflow-hidden p-6 bg-brand-dark border border-white/5 hover:border-brand-yellow transition-colors group rounded-lg"
                  >
                    <div className="absolute inset-0 bg-brand-yellow z-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    <div className="relative z-10">
                      <div className="mb-4 text-brand-yellow group-hover:text-brand-dark p-3 bg-brand-yellow/10 group-hover:bg-black/10 inline-block rounded-lg group-hover:scale-110 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-dark mb-2 transition-colors duration-300">{skill.title}</h3>
                      <p className="text-neutral-500 group-hover:text-brand-dark/80 text-sm transition-colors duration-300">{skill.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="personal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-16"
            >
               {/* Intro & Music */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                       <Camera className="text-brand-yellow" size={24} />
                       {t.about.personal.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed text-lg mb-8">
                       {t.about.personal.p1}
                    </p>
                    
                    {/* Music Player Mockup */}
                    <div className="bg-neutral-900/80 backdrop-blur border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Music2 size={120} />
                       </div>
                       <h4 className="text-sm font-bold uppercase tracking-widest text-brand-yellow mb-6 flex items-center gap-2">
                         <Disc className="animate-spin-slow" size={16} /> {t.about.personal.musicTitle}
                       </h4>
                       <div className="space-y-4 relative z-10">
                          {t.about.personal.playlist.map((track: any, i: number) => (
                             <div 
                               key={i} 
                               onClick={() => setSelectedTrack(track)}
                               className="flex items-center justify-between group cursor-pointer transition-all hover:pl-2"
                             >
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-xs text-neutral-500 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                                      {i + 1}
                                   </div>
                                   <div>
                                      <p className="text-white font-medium text-sm group-hover:text-brand-yellow transition-colors flex items-center gap-2">
                                        {track.title} <Play size={10} className="opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
                                      </p>
                                      <p className="text-neutral-500 text-xs">{track.artist}</p>
                                   </div>
                                </div>
                                {/* Animated Bars */}
                                <div className="flex gap-0.5 h-3 items-end">
                                   {[1, 2, 3, 4].map(bar => (
                                     <motion.div 
                                       key={bar}
                                       animate={{ height: [4, 12, 6, 12, 4] }}
                                       transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, ease: "linear" }}
                                       className="w-0.5 bg-brand-yellow/50 rounded-full"
                                     />
                                   ))}
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                  </div>

                  {/* Infinite Auto-Scrolling Photo Carousel */}
                  <div className="w-full relative">
                     <h3 className="text-lg font-medium text-neutral-400 mb-6 flex items-center gap-2">
                       {t.about.personal.photosTitle}
                     </h3>
                     
                     {/* Gradient Masks for smooth edges */}
                     <div className="absolute left-0 top-12 bottom-0 w-12 z-10 bg-gradient-to-r from-brand-gray to-transparent pointer-events-none" />
                     <div className="absolute right-0 top-12 bottom-0 w-12 z-10 bg-gradient-to-l from-brand-gray to-transparent pointer-events-none" />

                     <div className="overflow-hidden w-full">
                       <motion.div 
                          className="flex gap-4 w-max"
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{
                            x: {
                              repeat: Infinity,
                              repeatType: "loop",
                              duration: 40, // Velocidade: aumente para mais lento, diminua para mais rápido
                              ease: "linear",
                            },
                          }}
                       >
                          {infinitePhotos.map((photo, i) => (
                              <div 
                                key={i}
                                className="min-w-[300px] h-[350px] rounded-xl overflow-hidden relative border border-white/5 bg-neutral-900 shadow-lg shrink-0"
                              >
                                 <img src={photo} alt="Personal" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                              </div>
                           ))}
                       </motion.div>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spotify Modal */}
        <AnimatePresence>
          {selectedTrack && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTrack(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-md bg-brand-dark rounded-xl shadow-2xl overflow-hidden border border-white/10"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedTrack(null)}
                  className="absolute top-2 right-2 z-50 p-2 bg-black/50 rounded-full text-white hover:text-brand-yellow transition-colors hover:bg-black/80"
                >
                  <X size={20} />
                </button>

                <div className="p-1 bg-brand-dark">
                  <iframe 
                    style={{ borderRadius: '12px' }}
                    src={selectedTrack.embedUrl}
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    title={selectedTrack.title}
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;