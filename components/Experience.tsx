import React from 'react';
import { motion } from 'framer-motion';
import { Experience as ExperienceType } from '../types';
import { Briefcase } from 'lucide-react';
import GalaxyBackground from './ui/GalaxyBackground';
import { useLanguage } from '../context/LanguageContext';

const freelanceClients = [
  { name: "Cielo", category: "Fintech", logo: "https://cdn.worldvectorlogo.com/logos/cielo-1.svg", hoverColor: "hover:bg-sky-200" },
  { name: "Netshoes", category: "E-commerce", logo: "https://cdn.worldvectorlogo.com/logos/netshoes-logo.svg", hoverColor: "hover:bg-violet-300" },
  { name: "Athletico Paranaense", category: "Sports Tech", logo: "https://cdn.worldvectorlogo.com/logos/athletico-pr-1.svg", hoverColor: "hover:bg-white" },
  { name: "PUC Campinas", category: "Educação", logo: "https://www.puc-campinas.edu.br/wp-content/uploads/2022/02/logo-puc-branco-2020.png", hoverColor: "hover:bg-blue-700" },
  { name: "IxDA", category: "Comunidade", logo: "https://i0.wp.com/ixda.org/wp-content/uploads/2023/09/IxDA-Logo.png?fit=216%2C70&quality=80&ssl=1", hoverColor: "hover:bg-gray-300" },
  { name: "IxDD", category: "Workshops", logo: "https://i0.wp.com/ixda.org/wp-content/uploads/2023/08/IxDD-Logo-2.png?resize=300%2C92&quality=80&ssl=1", hoverColor: "hover:bg-yellow-400" },
  { name: "TDC", category: "Palestrante", logo: "https://s3-sa-east-1.amazonaws.com/thedevconf/2018/img/branding/branding-tdc-uma-cor-fundo-escuro.png", hoverColor: "hover:bg-blue-500" },
  { name: "Coderhouse", category: "Educação", logo: "https://startupeable.com/directorio/wp-content/uploads/2021/03/1558441737613.png", hoverColor: "hover:bg-amber-500" }
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
                className={`group h-32 bg-neutral-900/40 backdrop-blur-sm border border-white/5 hover:border-transparent transition-all duration-300 flex flex-col items-center justify-center p-4 cursor-default relative overflow-hidden ${client.hoverColor}`}
              >
                {client.logo ? (
                  <div className="relative w-full h-full flex items-center justify-center p-4">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="max-w-full max-h-16 w-auto h-auto object-contain transition-all duration-300 filter brightness-0 invert opacity-60 group-hover:filter-none group-hover:opacity-100 group-hover:scale-110"
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