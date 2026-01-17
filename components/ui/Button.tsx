import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  ...props 
}) => {
  // Adicionado 'relative group overflow-hidden' para conter os efeitos absolutos
  const baseStyles = "relative group overflow-hidden inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-yellow text-brand-dark hover:bg-yellow-300",
    outline: "border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark",
    ghost: "text-neutral-400 hover:text-brand-yellow hover:bg-white/5"
  };

  // Componente interno para evitar duplicação de código nas camadas do glitch
  const ButtonContent = () => (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Camada Principal (Visível e interativa) */}
      <span className="relative z-10 flex items-center justify-center">
        <ButtonContent />
      </span>

      {/* Camada Glitch 1 (Red Shift) - Visível apenas no Hover */}
      <span className="absolute inset-0 flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 animate-glitch-1 select-none pointer-events-none mix-blend-screen z-0">
        <ButtonContent />
      </span>

      {/* Camada Glitch 2 (Cyan Shift) - Visível apenas no Hover */}
      <span className="absolute inset-0 flex items-center justify-center text-cyan-500 opacity-0 group-hover:opacity-100 animate-glitch-2 select-none pointer-events-none mix-blend-screen z-0">
        <ButtonContent />
      </span>
    </motion.button>
  );
};

export default Button;