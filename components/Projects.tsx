import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Layers, Monitor, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import Button from './ui/Button';

// Extended Data with Details
const projects: Project[] = [
  {
    id: 1,
    title: "Fintech App Redesign",
    category: "Mobile App • Fintech",
    shortDescription: "Simplificando a complexidade dos investimentos com gamificação.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    coverImage: "https://picsum.photos/id/1/800/600",
    gallery: [
      "https://picsum.photos/id/119/800/600",
      "https://picsum.photos/id/160/800/600",
      "https://picsum.photos/id/180/800/600"
    ],
    challenge: "Os usuários da geração Z achavam o app anterior intimidante, resultando em uma taxa de rejeição de 65% na tela de onboarding.",
    solution: "Redesenhei o fluxo de entrada focando em educação progressiva e micro-interações gratificantes. Implementei um modo 'lite' para iniciantes.",
    results: [
      "Aumento de 25% na conversão de contas novas.",
      "Redução de 40% nos chamados de suporte sobre 'como investir'.",
      "Prêmio de Design do Ano na categoria Fintech 2023."
    ]
  },
  {
    id: 2,
    title: "Eco-commerce Dashboard",
    category: "Web App • B2B",
    shortDescription: "Painel analítico para vendedores sustentáveis com dados em tempo real.",
    tags: ["Data Viz", "Design System", "React"],
    coverImage: "https://picsum.photos/id/20/800/600",
    gallery: [
      "https://picsum.photos/id/201/800/600",
      "https://picsum.photos/id/250/800/600"
    ],
    challenge: "Vendedores não conseguiam visualizar o impacto de carbono de suas vendas, dificultando a tomada de decisão logística.",
    solution: "Criei um dashboard modular com widgets arrastáveis e visualizações de dados claras (gráficos de área e heatmaps) focados em métricas ambientais.",
    results: [
      "Tempo médio de permanência na plataforma aumentou 3x.",
      "Feedback positivo de 92% dos parceiros beta.",
      "Adoção de rotas logísticas mais verdes aumentou em 15%."
    ]
  },
  {
    id: 3,
    title: "Healthcare System",
    category: "Desktop • SaaS",
    shortDescription: "Sistema de gestão hospitalar focado na redução de erros médicos.",
    tags: ["Acessibilidade", "Service Design", "Complex Systems"],
    coverImage: "https://picsum.photos/id/3/800/600",
    gallery: [
      "https://picsum.photos/id/366/800/600",
      "https://picsum.photos/id/395/800/600"
    ],
    challenge: "O sistema legado causava fadiga cognitiva nos médicos devido ao excesso de informações e baixo contraste, levando a erros de prescrição.",
    solution: "Desenvolvimento de uma interface de alto contraste focada na legibilidade (WCAG AAA). Hierarquia de informação reestruturada baseada na jornada do plantão.",
    results: [
      "Redução estimada de 18% em erros de input de dados.",
      "Velocidade de atendimento no pronto-socorro melhorou 12%.",
      "Aprovado em testes de usabilidade com médicos seniores."
    ]
  },
  {
    id: 4,
    title: "Travel Companion",
    category: "Mobile • Social",
    shortDescription: "App social para viajantes solo encontrarem experiências seguras.",
    tags: ["Mobile First", "Social", "Discovery"],
    coverImage: "https://picsum.photos/id/48/800/600",
    gallery: [
      "https://picsum.photos/id/404/800/600",
      "https://picsum.photos/id/433/800/600"
    ],
    challenge: "Viajantes solo, especialmente mulheres, sentiam insegurança ao marcar encontros com outros viajantes através de apps genéricos.",
    solution: "Sistema de verificação de identidade robusto integrado ao fluxo de UX sem causar atrito excessivo. Features de 'Check-in de Segurança' automático.",
    results: [
      "50k downloads no primeiro mês de lançamento.",
      "Avaliação 4.8 na App Store.",
      "Zero incidentes de segurança reportados no MVP."
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