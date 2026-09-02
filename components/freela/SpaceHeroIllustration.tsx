import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Code2, Layers, Cpu, Compass, Globe2, ShieldCheck, Zap } from 'lucide-react';

const SpaceHeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center select-none">
      
      {/* 1. Deep Cosmic Nebula Glows (Apple Atmospheric Space Light) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-lead/10 via-[#EC6726]/10 to-[#FFD600]/15 dark:from-[#EC6726]/20 dark:via-[#FFD600]/15 dark:to-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      
      {/* 2. Outer Celestial Orbit Ring with Degree Markers */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute w-[92%] h-[92%] rounded-full border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center"
      >
        {/* Subtle Celestial Coordinates on Ring */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500">000°</span>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[9px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500">180°</span>
        <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500">270°</span>
        <span className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 text-[9px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500">090°</span>

        {/* Orbiting Satellite Node 1: AI Prompt / Design Tokens */}
        <motion.div 
          className="absolute -top-3 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/15 rounded-full px-3.5 py-1 text-[11px] font-mono font-semibold text-brand-dark dark:text-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center gap-1.5 pointer-events-auto hover:scale-105 transition-transform"
          whileHover={{ scale: 1.08 }}
        >
          <Bot size={13} className="text-[#EC6726] dark:text-[#FFD600]" />
          <span>AI Tokens 1:1</span>
        </motion.div>

        {/* Orbiting Satellite Node 2: Design Systems */}
        <motion.div 
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/15 rounded-full px-3.5 py-1 text-[11px] font-mono font-semibold text-brand-dark dark:text-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center gap-1.5 pointer-events-auto hover:scale-105 transition-transform"
          whileHover={{ scale: 1.08 }}
        >
          <Layers size={13} className="text-[#EC6726] dark:text-[#FFD600]" />
          <span>Design Systems</span>
        </motion.div>
      </motion.div>

      {/* 3. Middle Orbit Ring (Counter-Rotation with Tech Specs) */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute w-[72%] h-[72%] rounded-full border border-dashed border-black/[0.08] dark:border-white/[0.12] flex items-center justify-center"
      >
        {/* Node 3: React / Frontend */}
        <div className="absolute top-1/2 -right-3 -translate-y-1/2 backdrop-blur-xl bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/15 rounded-full px-3 py-1 text-[10px] font-mono font-semibold text-neutral-800 dark:text-neutral-200 shadow-md flex items-center gap-1.5">
          <Code2 size={12} className="text-blue-500" />
          <span>React / Next</span>
        </div>

        {/* Node 4: Ultra Speed */}
        <div className="absolute top-1/2 -left-3 -translate-y-1/2 backdrop-blur-xl bg-white/80 dark:bg-black/80 border border-black/10 dark:border-white/15 rounded-full px-3 py-1 text-[10px] font-mono font-semibold text-neutral-800 dark:text-neutral-200 shadow-md flex items-center gap-1.5">
          <Zap size={12} className="text-[#FFD600]" />
          <span>99+ Speed</span>
        </div>
      </motion.div>

      {/* 4. Inner Halo Ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute w-[52%] h-[52%] rounded-full border border-[#EC6726]/20 dark:border-[#FFD600]/25"
      />

      {/* 5. Centerpiece: Cosmic Space Probe / Astronaut Glass Helm with Apple-Grade Finish */}
      <motion.div 
        animate={{ 
          y: [-8, 8, -8],
          rotate: [-1.5, 1.5, -1.5]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative z-10 w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center"
      >
        {/* Central Core Artwork */}
        <svg 
          viewBox="0 0 220 220" 
          className="w-full h-full drop-shadow-[0_20px_45px_rgba(236,103,38,0.18)] dark:drop-shadow-[0_20px_50px_rgba(255,214,0,0.18)]"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Smooth Radial Gradients for Visor and Titanium Shell */}
            <radialGradient id="visorGlow" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFF275" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#EC6726" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#9C27B0" stopOpacity="0.75" />
            </radialGradient>
            
            <linearGradient id="titaniumShell" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A2A2E" />
              <stop offset="50%" stopColor="#17171A" />
              <stop offset="100%" stopColor="#0B0B0D" />
            </linearGradient>

            <linearGradient id="accentGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EC6726" />
              <stop offset="100%" stopColor="#FFD600" />
            </linearGradient>

            <filter id="glassReflect" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
            </filter>
          </defs>

          {/* Propulsion Halo */}
          <ellipse cx="110" cy="180" rx="32" ry="8" className="fill-[#EC6726]/30 dark:fill-[#FFD600]/40 animate-pulse" />
          <ellipse cx="110" cy="188" rx="18" ry="4" className="fill-[#FFD600]/80 dark:fill-white/90" />

          {/* Aerospace Titanium Capsule Base */}
          <path 
            d="M60 145 C60 175 160 175 160 145 L150 78 C150 50 70 50 70 78 Z" 
            fill="url(#titaniumShell)"
            stroke="url(#accentGold)"
            strokeWidth="2.5"
          />

          {/* Glass Visor Shield (Refractive Optic) */}
          <path 
            d="M78 82 C78 62 142 62 142 82 C142 108 78 108 78 82 Z" 
            fill="url(#visorGlow)"
          />
          
          {/* Apple Style Precision Glare Reflex on Visor */}
          <path 
            d="M84 75 C92 68 114 68 120 70 C102 78 90 92 88 100 C83 93 82 82 84 75 Z" 
            fill="white" 
            opacity="0.55"
          />

          {/* Precision Chest Module */}
          <rect 
            x="90" 
            y="120" 
            width="40" 
            height="26" 
            rx="6" 
            className="fill-neutral-900 stroke-white/20" 
            strokeWidth="1.2" 
          />
          
          {/* Status Indicators */}
          <circle cx="99" cy="129" r="2.5" className="fill-green-400 animate-ping" />
          <circle cx="99" cy="129" r="2.5" className="fill-green-500" />
          <circle cx="110" cy="129" r="2.5" className="fill-[#FFD600]" />
          <circle cx="121" cy="129" r="2.5" className="fill-[#EC6726]" />

          {/* Clean Signal Wave Track */}
          <line x1="97" y1="138" x2="123" y2="138" stroke="url(#accentGold)" strokeWidth="1.8" strokeDasharray="3 2" />

          {/* Antenna Sensor Starlight Node */}
          <line x1="110" y1="52" x2="110" y2="30" stroke="url(#accentGold)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="110" cy="26" r="4.5" className="fill-[#FFD600] animate-pulse" />

          {/* Streamlined Side Jet Pods */}
          <path d="M52 124 L68 118 L66 146 L48 140 Z" fill="url(#titaniumShell)" stroke="url(#accentGold)" strokeWidth="1.5" />
          <path d="M168 124 L152 118 L154 146 L172 140 Z" fill="url(#titaniumShell)" stroke="url(#accentGold)" strokeWidth="1.5" />
        </svg>

        {/* Floating Twinkling Starlight Sparks */}
        <motion.div 
          animate={{ scale: [0.7, 1.2, 0.7], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.2, repeat: Infinity }}
          className="absolute -top-3 -right-3 text-[#FFD600]"
        >
          <Sparkles size={20} />
        </motion.div>

        <motion.div 
          animate={{ scale: [1.2, 0.7, 1.2], opacity: [1, 0.3, 1] }}
          transition={{ duration: 4.2, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-2 -left-2 text-[#EC6726]"
        >
          <Sparkles size={16} />
        </motion.div>
      </motion.div>

      {/* 6. Apple-Vision Style Floating Frosted Glass Widgets */}
      <motion.div 
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 right-2 backdrop-blur-2xl bg-white/80 dark:bg-black/70 border border-black/10 dark:border-white/15 px-3.5 py-1.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-2 text-xs font-semibold text-brand-dark dark:text-white"
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span>100% Pontualidade</span>
      </motion.div>

      <motion.div 
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="absolute top-6 left-2 backdrop-blur-2xl bg-white/80 dark:bg-black/70 border border-black/10 dark:border-white/15 px-3.5 py-1.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] flex items-center gap-2 text-xs font-semibold text-brand-dark dark:text-white"
      >
        <Compass size={14} className="text-[#EC6726] dark:text-[#FFD600]" />
        <span>Design • Código • IA</span>
      </motion.div>

    </div>
  );
};

export default SpaceHeroIllustration;
