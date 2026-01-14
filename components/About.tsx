import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, Zap, Search } from 'lucide-react';

const skills = [
  { icon: <Users size={24} />, title: "Liderança de Equipe", desc: "Mentoria e gestão de times de alta performance." },
  { icon: <Search size={24} />, title: "User Research", desc: "Decisões baseadas em dados e comportamento real." },
  { icon: <Layers size={24} />, title: "Design Systems", desc: "Escalabilidade e consistência visual." },
  { icon: <Zap size={24} />, title: "Prototipagem Ágil", desc: "Validação rápida de hipóteses e conceitos." },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">
              Sobre <span className="text-brand-yellow">Mim</span>
            </h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
              <p>
                Minha jornada no design começou na interseção entre tecnologia e psicologia. Acredito que o bom design não é apenas sobre pixels bonitos, mas sobre resolver problemas reais de forma elegante e invisível.
              </p>
              <p>
                Como <span className="text-white font-semibold">UX Leader</span>, meu foco mudou da execução individual para a orquestração de experiências. Trabalho lado a lado com PMs e Engenheiros para garantir que a voz do usuário seja ouvida em cada etapa do desenvolvimento.
              </p>
              <p>
                Fora do trabalho, sou entusiasta de fotografia urbana e estudo neurociência cognitiva aplicada ao design.
              </p>
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
                className="p-6 bg-brand-dark border border-white/5 hover:border-brand-yellow/50 transition-colors group"
              >
                <div className="mb-4 text-brand-yellow p-3 bg-brand-yellow/10 inline-block rounded-lg group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-neutral-500 text-sm">{skill.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;