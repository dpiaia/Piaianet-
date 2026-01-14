import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Layers, Monitor, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import Button from './ui/Button';

// Extended Data with Details
const projects: Project[] = [
  {
    id: 1,
    title: "CliniDS",
    category: "DESIGNOPS • HEALTHTECH",
    shortDescription: "Criando um Design System para a Clinicorp.",
    tags: ["DESIGN SYSTEM", "UI DESIGN", "AI"],
    coverImage: "https://picsum.photos/id/1/800/600",
    gallery: [
      "https://picsum.photos/id/119/800/600",
      "https://picsum.photos/id/160/800/600",
      "https://picsum.photos/id/180/800/600"
    ],
    challenge: "Escalar a consistência visual e funcional entre múltiplos módulos da plataforma Clinicorp estava se tornando insustentável, gerando débito técnico e de design.",
    solution: "Criação e implementação do CliniDS: uma biblioteca de componentes centralizada, documentada e agnóstica, facilitando a colaboração entre designers e desenvolvedores.",
    results: [
      "Aumento de 40% na velocidade de entrega de novas telas.",
      "Redução drástica de inconsistências visuais no produto.",
      "Adoção de 100% pelo time de engenharia em 6 meses."
    ]
  },
  {
    id: 2,
    title: "Acelerando o crescimento do iFood em Latam",
    category: "ONBOARDING • FOODTECH",
    shortDescription: "Landing Page automatizada para cadastros de novos restaurantes.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    coverImage: "https://costanorte.com.br/media/_versions/legacy/39/64/396364_widexl.jpg",
    gallery: [
      "https://picsum.photos/id/201/800/600",
      "https://picsum.photos/id/250/800/600"
    ],
    challenge: "O processo de cadastro de parceiros era manual e burocrático, limitando a velocidade de expansão agressiva necessária para o mercado Latino-americano.",
    solution: "Desenvolvimento de um fluxo de onboarding self-service automatizado, com validação de documentos em tempo real e UX otimizada para conversão.",
    results: [
      "Redução de 70% no tempo médio de aprovação de restaurantes.",
      "Crescimento exponencial da base de parceiros no México e Colômbia.",
      "Melhoria significativa no NPS de entrada dos parceiros."
    ]
  },
  {
    id: 3,
    title: "Recriando o agendamento de consultas",
    category: "CALENDAR • HEALTHTECH",
    shortDescription: "Simplificando a complexidade de agendamentos.",
    tags: ["UX Research", "UI Design", "Prototyping", "AI"],
    coverImage: "https://picsum.photos/id/3/800/600",
    gallery: [
      "https://picsum.photos/id/366/800/600",
      "https://picsum.photos/id/395/800/600"
    ],
    challenge: "A gestão de agenda complexa com múltiplos profissionais e cadeiras gerava conflitos de horários e dificuldade de visualização para as recepcionistas.",
    solution: "Redesign completo da interface de agenda focado em usabilidade cognitiva, com recursos de 'arrastar e soltar' e sugestões inteligentes de horários.",
    results: [
      "Otimização de 20% na ocupação das cadeiras/salas.",
      "Redução de cliques para realizar um agendamento.",
      "Feedback extremamente positivo das recepcionistas (Power Users)."
    ]
  },
  {
    id: 4,
    title: "Projetos variados com Inteligência Artificial",
    category: "AI • VIBEDESIGN",
    shortDescription: "Compilado de projetos que fiz com uso das IAs.",
    tags: ["AI", "Vibecode"],
    coverImage: "https://picsum.photos/id/48/800/600",
    gallery: [
      "https://picsum.photos/id/404/800/600",
      "https://picsum.photos/id/433/800/600"
    ],
    challenge: "Explorar como as novas ferramentas de IA Generativa podem ser integradas ao fluxo de trabalho de design para expandir a criatividade e eficiência.",
    solution: "Uma coleção de experimentos visuais e funcionais utilizando Midjourney, Stable Diffusion e LLMs para prototipagem rápida e geração de assets.",
    results: [
      "Criação de identidades visuais conceituais em tempo recorde.",
      "Exploração de novas estéticas (Vibe Design).",
      "Automação de tarefas repetitivas no processo de discovery."
    ]
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4">Projetos <span className="text-brand-yellow">Selecionados</span></h2>
            <p className="text-neutral-400">Clique nos cards para ver o estudo de caso detalhado.</p>
          </motion.div>
          
          <motion.button 
            whileHover={{ x: 5 }}
            className="text-white flex items-center gap-2 border-b border-brand-yellow pb-1 font-medium hover:text-brand-yellow transition-colors"
          >
            Ver Behance Completo <ArrowUpRight size={16} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedProject(project)}
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
      </div>

      {/* Project Modal */}
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
                       <Monitor size={20} className="text-brand-yellow" /> O Desafio
                     </h3>
                     <p className="text-neutral-400 leading-relaxed text-lg">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Tech & Tools</h3>
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
                     <Layers size={20} className="text-brand-yellow" /> A Solução
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
                    <CheckCircle2 size={20} className="text-brand-yellow" /> Resultados Alcançados
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
                <span className="text-neutral-500 text-sm">Confidencial &copy; 2024</span>
                <Button onClick={(e) => {e.stopPropagation(); setSelectedProject(null)}} variant="outline" className="text-xs px-4 py-2">
                  Fechar Case
                </Button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;