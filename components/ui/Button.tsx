import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

import { ArrowRight } from 'lucide-react';

// Added className and onClick to the interface to resolve missing property errors in components using the Button
interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  ...props 
}) => {
  // Adicionado 'relative group overflow-hidden' para conter os efeitos absolutos
  const baseStyles = "fizzy-button relative group overflow-visible inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-lead dark:focus:ring-brand-yellow focus:ring-offset-2 focus:ring-offset-brand-light dark:focus:ring-offset-brand-dark disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-lead dark:bg-brand-yellow text-white dark:text-brand-dark hover:bg-neutral-800 dark:hover:bg-yellow-300",
    outline: "border border-brand-lead dark:border-brand-yellow text-brand-lead dark:text-brand-yellow hover:bg-brand-lead dark:hover:bg-brand-yellow hover:text-white dark:hover:text-brand-dark",
    ghost: "text-neutral-600 dark:text-neutral-400 hover:text-brand-lead dark:hover:text-brand-yellow hover:bg-brand-lead/5 dark:hover:bg-white/5"
  };

  // Generate 12 particles with random positions and delays
  const particles = Array.from({ length: 12 }).map((_, i) => {
    const xOffset = Math.random() * 60 - 30; // -30px to 30px
    const left = Math.random() * 80 + 10; // 10% to 90%
    const delay = Math.random() * 0.4; // 0s to 0.4s
    const size = Math.random() * 4 + 4; // 4px to 8px
    
    return (
      <span 
        key={i}
        className="particle bg-brand-yellow dark:bg-brand-lead"
        style={{ 
          left: `${left}%`, 
          top: '50%',
          width: `${size}px`,
          height: `${size}px`,
          '--x-offset': `${xOffset}px`,
          animationDelay: `${delay}s`
        } as React.CSSProperties}
      />
    );
  });

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {/* Background change is handled by variants[variant] hover classes */}
      
      {/* Particles Layer */}
      <span className="particles">
        {particles}
      </span>

      {/* Label and Arrow */}
      <span className="relative z-10 flex items-center justify-center">
        <span className="label flex items-center">
          {children}
          {icon && <span className="ml-2">{icon}</span>}
        </span>
        <span className="arrow ml-1">
          <ArrowRight size={16} />
        </span>
      </span>
    </motion.button>
  );
};

export default Button;