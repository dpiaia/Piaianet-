
import { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Layers, Monitor, CheckCircle2, ChevronLeft, Sparkles, Cpu, Zap, Eye } from 'lucide-react';
import { Project } from '../types';
import Button from './ui/Button';
import { useLanguage } from '../context/LanguageContext';
import ParticleBackground from './ui/ParticleBackground';

const Projects: FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAIGallery, setShowAIGallery] = useState(false);
  const { t } = useLanguage();

  const projectsData = [
    {
      id: 1,
      tags: ["DESIGN SYSTEM", "UI DESIGN", "AI"],
      coverImage: "https://picsum.photos/id/1/800/600",
      gallery: [
        "https://picsum.photos/id/119/800/600",
        "https://picsum.photos/id/160/800/600",
        "https://picsum.photos/id/180/800/600"
      ],
    },
    {
      id: 2,
      tags: ["UX Research", "UI Design", "Prototyping"],
      coverImage: "https://costanorte.com.br/media/_versions/legacy/39/64/396364_widexl.jpg",
      gallery: [
        "https://picsum.photos/id/201/800/600",
        "https://picsum.photos/id/250/800/600"
      ],
    },
    {
      id: 3,
      tags: ["UX Research", "UI Design", "Prototyping", "AI"],
      coverImage: "https://picsum.photos/id/3/800/600",
      gallery: [
        "https://picsum.photos/id/366/800/600",
        "https://picsum.photos/id/395/800/600"
      ],
    },
    {
      id: 4,
      tags: ["AI", "Vibecode", "Generative Art"],
      coverImage: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1600",
      gallery: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1684163761883-7d725ba0837d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1673431336109-85834863336c?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1686190567754-3595d0ef926a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1697577413972-78f3940103f6?auto=format&fit=crop&q=80&w=800"
      ],
    }
  ];

  const aiExperiments = [
    {
      title: "EU MONSTRO",
      category: "AI STUDIO",
      desc: "Aplicativo para quem precisa quer monitorar os treinos e ter dicas.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
      tool: "AI Coaching + CV"
    },
    {
      title: "Orkut Simulator",
      category: "AI STUDIO",
      desc: "Um simulador do Orkut, Rede social popular no Brasil no inicio dos anos 2000.",
      img: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800",
      tool: "Retro UI + LLM"
    },
    {
      title: "Eco Vila Santa Margarida",
      category: "AI STUDIO",
      desc: "Area do condomínio para os moradores com comunicados, vendas, etc.",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      tool: "Lovable + AI"
    },
    {
      title: "Tabela Mundial de Clubes",
      category: "FIGMA MAKE",
      desc: "Acompanhamento dos jogos e estatísticas de jogos do Mundial de Clubes FIFA.",
      img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
      tool: "Figma AI + Data"
    },
    {
      title: "Digital Humans",
      category: "CHARACTER DESIGN",
      desc: "Estudo de texturas de pele e iluminação realista em retratos sintéticos.",
      img: "https://images.unsplash.com/photo-1673431336109-85834863336c?auto=format&fit=crop&q=80&w=800",
      tool: "Midjourney + PS"
    },
    {
      title: "Abstract Motion",
      category: "VISUAL ASSETS",
      desc: "Geração de backgrounds abstratos e dinâmicos para apresentações de alto impacto.",
      img: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=800",
      tool: "Runway Gen-2"
    }
  ];

  const projects: Project[] = projectsData.map((p, i) => ({
    ...p,
    ...t.projects.items[i]
  }));

  useEffect(() => {
    if (selectedProject || showAIGallery) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject, showAIGallery]);

  const handleProjectClick = (project: Project) => {
    if (project.id === 4) {
      setShowAIGallery(true);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-24 bg-brand-gray relative overflow-hidden">
      <ParticleBackground variant="attract" onlyYellow={true} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">{t.projects.title} <span className="text-brand-yellow">{t.projects.titleHighlight}</span></h2>
            <p className="text-neutral-400">{t.projects.subtitle}</p>
          </motion.div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-white flex items-center gap-2 border-b border-brand-yellow pb-1 font-medium hover:text-brand-yellow transition-colors"
          >
            {t.projects.ctaBehance} <ArrowUpRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => handleProjectClick(project)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative cursor-pointer rounded-xl bg-brand-dark border border-white/5 hover:border-brand-yellow/50 transition-colors overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <motion.img 
                  layoutId={`img-${project.id}`}
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <div className="p-6 relative">
                <motion.p layoutId={`cat-${project.id}`} className="text-xs text-brand-yellow font-medium uppercase tracking-wider mb-2">
                  {project.category}
                </motion.p>
                <motion.h3 layoutId={`title-${project.id}`} className="text-2xl font-display font-bold text-white mb-2 group-hover:text-brand-yellow transition-colors">
                  {project.title}
                </motion.h3>
                <p className="text-neutral-400 text-sm line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[10px] uppercase border border-white/10 px-2 py-1 text-neutral-500 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Special Gallery Overlay */}
        <AnimatePresence>
          {showAIGallery && (
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="fixed inset-0 z-[100] bg-brand-dark overflow-y-auto"
            >
              <ParticleBackground variant="attract" onlyYellow={false} />

              <div className="relative z-10 min-h-screen pb-20">
                {/* Header Navigation */}
                <div className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-xl border-b border-white/5 p-6 flex items-center justify-between">
                  <button 
                    onClick={() => setShowAIGallery(false)}
                    className="flex items-center gap-2 text-neutral-400 hover:text-brand-yellow transition-colors font-medium group"
                  >
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Voltar ao Portfólio
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-yellow/10 flex items-center justify-center">
                      <Cpu className="text-brand-yellow animate-pulse" size={16} />
                    </div>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-[0.2em] hidden sm:block">AI DESIGN LAB • VER. 2.5</span>
                  </div>
                </div>

                <div className="container mx-auto px-6 py-16">
                  <div className="max-w-4xl mb-24">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-brand-yellow mb-4"
                    >
                      <Sparkles size={18} />
                      <span className="text-sm font-bold uppercase tracking-widest">Experimentos de Vanguarda</span>
                    </motion.div>
                    <motion.h1 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-6xl md:text-8xl font-display font-bold text-white mb-8 tracking-tighter"
                    >
                      AI <span className="text-brand-yellow">Studio</span>
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl md:text-2xl text-neutral-400 leading-relaxed max-w-3xl"
                    >
                      Como UX Leader, exploro a Inteligência Artificial não apenas como ferramenta, mas como co-criadora de novas estéticas e fluxos de trabalho. Abaixo, alguns experimentos de interface, arte generativa e branding sintético.
                    </motion.p>
                  </div>

                  {/* AI Experiments Grid - Replicating Home Projects Style */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {aiExperiments.map((exp, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="group relative flex flex-col bg-neutral-900/40 border border-white/5 hover:border-brand-yellow/30 transition-all rounded-2xl overflow-hidden cursor-default"
                      >
                        {/* Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img 
                            src={exp.img} 
                            alt={exp.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
                          
                          {/* Floating Badge */}
                          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-2">
                             <Zap size={12} className="text-brand-yellow" />
                             <span className="text-[10px] font-mono text-white/80">{exp.tool}</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex-1 flex flex-col">
                          <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-[0.2em] mb-3 block">
                            {exp.category}
                          </span>
                          <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-neutral-500 text-sm leading-relaxed mb-6 flex-1">
                            {exp.desc}
                          </p>
                          
                          <div className="flex items-center gap-2 text-white/40 text-[10px] font-mono uppercase tracking-widest group-hover:text-brand-yellow transition-colors">
                            <Eye size={14} /> View Details
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Scientific/Technical Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-40 pt-20 border-t border-white/5">
                    <div className="lg:col-span-1">
                       <h4 className="text-3xl font-display font-bold text-white mb-6">Metodologia <span className="text-brand-yellow">Generativa</span></h4>
                       <p className="text-neutral-500 leading-relaxed">
                         Utilizo prompts iterativos e modelos treinados localmente para garantir que o resultado final mantenha a essência do design focado no humano, enquanto explora territórios visuais inexplorados.
                       </p>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                       <div className="p-8 bg-white/5 border border-white/5 rounded-2xl">
                          <div className="text-brand-yellow mb-4"><Zap size={32} /></div>
                          <h5 className="text-white font-bold mb-2">Velocidade de Conceito</h5>
                          <p className="text-sm text-neutral-400">Redução de 80% no tempo de criação de moodboards e conceitos visuais iniciais.</p>
                       </div>
                       <div className="p-8 bg-white/5 border border-white/5 rounded-2xl">
                          <div className="text-brand-yellow mb-4"><Layers size={32} /></div>
                          <h5 className="text-white font-bold mb-2">Escalabilidade de Assets</h5>
                          <p className="text-sm text-neutral-400">Geração de milhares de variações iconográficas e texturais em minutos.</p>
                       </div>
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-40 text-center">
                    <Button onClick={() => setShowAIGallery(false)} className="px-16 py-5 text-lg">
                      Fechar Studio IA
                    </Button>
                    <p className="text-neutral-600 mt-8 text-xs font-mono uppercase tracking-[0.3em]">Denis Piaia • Labs • 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Standard Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              
              <motion.div 
                layoutId={`card-${selectedProject.id}`}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-brand-dark border border-white/10 rounded-2xl shadow-2xl flex flex-col"
              >
                {/* Close Button */}
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full text-white hover:text-brand-yellow transition-colors hover:bg-black/80"
                >
                  <X size={24} />
                </button>

                {/* Hero Image */}
                <div className="relative w-full h-64 sm:h-80 md:h-96 shrink-0">
                  <motion.img 
                    layoutId={`img-${selectedProject.id}`}
                    src={selectedProject.coverImage} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <motion.p layoutId={`cat-${selectedProject.id}`} className="text-brand-yellow font-mono text-sm mb-2">{selectedProject.category}</motion.p>
                    <motion.h2 layoutId={`title-${selectedProject.id}`} className="text-4xl md:text-5xl font-display font-bold text-white">{selectedProject.title}</motion.h2>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 space-y-12">
                  
                  {/* Intro Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/5">
                    <div className="md:col-span-2">
                       <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                         <Monitor size={20} className="text-brand-yellow" /> {t.projects.modal.challenge}
                       </h3>
                       <p className="text-neutral-400 leading-relaxed text-lg">{selectedProject.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">{t.projects.modal.tech}</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 text-neutral-300 text-sm rounded-full border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Solution */}
                  <div>
                     <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                       <Layers size={20} className="text-brand-yellow" /> {t.projects.modal.solution}
                     </h3>
                     <p className="text-neutral-300 leading-relaxed text-lg mb-8">{selectedProject.solution}</p>
                     
                     {/* Gallery Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.gallery.map((img, i) => (
                          <img 
                            key={i} 
                            src={img} 
                            alt={`Gallery ${i}`} 
                            className={`rounded-lg border border-white/5 w-full h-64 object-cover hover:opacity-80 transition-opacity ${i === 2 ? 'md:col-span-2' : ''}`} 
                          />
                        ))}
                     </div>
                  </div>

                  {/* Results */}
                  <div className="bg-brand-gray p-8 rounded-xl border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-brand-yellow" /> {t.projects.modal.results}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {selectedProject.results.map((res, i) => (
                        <div key={i} className="flex flex-col gap-2">
                          <span className="w-8 h-1 bg-brand-yellow mb-2 rounded-full" />
                          <p className="text-white font-medium text-lg leading-snug">{res}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
                
                <div className="p-8 border-t border-white/5 flex justify-between items-center bg-brand-dark sticky bottom-0 z-10">
                  <span className="text-neutral-500 text-sm">{t.projects.modal.confidential}</span>
                  <Button onClick={(e) => {e.stopPropagation(); setSelectedProject(null)}} variant="outline" className="text-xs px-4 py-2">
                    {t.projects.modal.close}
                  </Button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
