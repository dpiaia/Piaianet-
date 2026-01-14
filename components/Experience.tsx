import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../types';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import GalaxyBackground from './ui/GalaxyBackground';
import { useLanguage } from '../context/LanguageContext';

const freelanceClients = [
  { name: "Cielo", category: "Fintech" },
  { name: "Netshoes", category: "E-commerce" },
  { name: "Athletico Paranaense", category: "Sports Tech" },
  { name: "Puc Campinas", category: "Educação" },
  { name: "IxDA", category: "Comunidade" },
  { name: "IXDD", category: "Workshops" },
  { name: "TDC", category: "Palestrante" },
  { name: "Coderhouse", category: "Educação" }
];

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences: ExperienceType[] = t.experience.jobs.map((job, index) => ({
    id: index + 1,
    ...job
  }));

  return (
    <section id="experience" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Galaxy Animation Layer */}
      <GalaxyBackground />
      
      {/* Gradient Overlay - Transparent middle to show stars, solid edges to blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Timeline Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-bold mb-4">{t.experience.title} <span className="text-brand-yellow">{t.experience.titleHighlight}</span></h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:bg-gradient-to-b before:from-transparent before:via-neutral-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Dot on Timeline */}
              <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-brand-dark border-4 border-neutral-800 rounded-full flex items-center justify-center z-10 -translate-x-1/2 md:translate-x-[-50%] group-hover:border-brand-yellow transition-colors shadow-[0_0_15px_rgba(250,204,21,0.3)]">
                <div className="w-3 h-3 bg-brand-yellow rounded-full" />
              </div>

              {/* Content Card */}
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

        {/* Freelance & Consulting Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mt-32 pt-16 border-t border-white/5"
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {freelanceClients.map((client, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="group h-32 bg-neutral-900/40 backdrop-blur-sm border border-white/5 hover:border-brand-yellow/30 hover:bg-neutral-900/60 transition-all flex flex-col items-center justify-center p-4 cursor-default relative overflow-hidden"
              >
                {/* Decorative background accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-brand-yellow/5 rounded-full blur-2xl group-hover:bg-brand-yellow/10 transition-colors -mr-8 -mt-8" />
                
                <h4 className="text-xl font-display font-bold text-neutral-500 group-hover:text-white transition-colors tracking-tight text-center">
                  {client.name}
                </h4>
                <span className="text-xs text-neutral-600 group-hover:text-brand-yellow mt-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  {client.category}
                </span>

                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowUpRight size={12} className="text-brand-yellow" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;