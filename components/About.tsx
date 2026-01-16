import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, Zap, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ParticleBackground from './ui/ParticleBackground';

const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { icon: <Users size={24} />, ...t.about.skills.leadership },
    { icon: <Search size={24} />, ...t.about.skills.research },
    { icon: <Layers size={24} />, ...t.about.skills.designSystems },
    { icon: <Zap size={24} />, ...t.about.skills.prototyping },
  ];

  return (
    <section id="about" className="py-24 bg-brand-gray relative overflow-hidden">
      <ParticleBackground variant="attract" onlyYellow={true} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              {t.about.title} <span className="text-brand-yellow">{t.about.titleHighlight}</span>
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </motion.div>

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
                {/* Background Sweep Animation (Right to Left) */}
                <div
                  className="absolute inset-0 bg-brand-yellow z-0 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                />

                {/* Content - relative and z-10 to stay on top of the sweep */}
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

        </div>
      </div>
    </section>
  );
};

export default About;