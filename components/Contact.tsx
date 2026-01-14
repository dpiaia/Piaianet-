import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Dribbble, Github } from 'lucide-react';
import Button from './ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Vamos construir algo <br />
              <span className="text-brand-yellow">Incrível</span> juntos?
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Estou sempre aberto a discutir design de produto, colaborar em novos projetos ou falar sobre oportunidades de liderança.
            </p>
            
            <a href="mailto:contato@denispiaia.com">
              <Button className="px-10 py-5 text-lg rounded-none">
                Mande um Olá 👋
              </Button>
            </a>

            <div className="mt-16 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-neutral-500 text-sm">
                &copy; 2024 Denis Piaia. Todos os direitos reservados.
              </div>
              
              <div className="flex gap-6">
                {[
                  { icon: <Linkedin size={20} />, href: "#" },
                  { icon: <Dribbble size={20} />, href: "#" },
                  { icon: <Github size={20} />, href: "#" },
                  { icon: <Mail size={20} />, href: "#" },
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-brand-yellow hover:border-brand-yellow transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;