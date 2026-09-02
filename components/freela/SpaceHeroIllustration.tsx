import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Layers, Code2, Cpu, CheckCircle2, Star } from 'lucide-react';

const SpaceHeroIllustration: React.FC = () => {

  // Orbiting Technology Badges
  const techOrbits = [
    { name: 'Figma 1:1', icon: <Layers size={13} className="text-[#EC6726] dark:text-[#FFD600]" />, radius: 140, duration: 24, delay: 0, top: '12%', left: '18%' },
    { name: 'React & Next', icon: <Code2 size={13} className="text-[#00D8FF]" />, radius: 180, duration: 28, delay: 3, top: '20%', right: '10%' },
    { name: 'Tokens W3C', icon: <Cpu size={13} className="text-[#A855F7]" />, radius: 210, duration: 32, delay: 6, bottom: '22%', right: '12%' },
    { name: 'Tailwind CSS', icon: <Zap size={13} className="text-[#38BDF8]" />, radius: 160, duration: 26, delay: 9, bottom: '15%', left: '15%' },
  ];

  return (
    <div className="relative w-full max-w-[500px] h-[440px] sm:h-[480px] flex items-center justify-center select-none mx-auto">
      
      {/* Background Orbital Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer Orbit Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="w-[380px] sm:w-[440px] h-[380px] sm:h-[440px] rounded-full border border-black/[0.06] dark:border-white/[0.08] border-dashed relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#EC6726] dark:bg-[#FFD600] shadow-[0_0_10px_currentColor]" />
        </motion.div>

        {/* Middle Orbit Ring */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="w-[290px] sm:w-[340px] h-[290px] sm:h-[340px] rounded-full border border-black/[0.05] dark:border-white/[0.06] relative"
        >
          <div className="absolute bottom-6 right-8 w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60" />
        </motion.div>

        {/* Inner Glow Aura */}
        <div className="w-56 h-56 rounded-full bg-[#EC6726]/10 dark:bg-[#FFD600]/10 blur-3xl" />
      </div>

      {/* Floating Micro Star Constellations */}
      <motion.div 
        animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-10 left-12 text-[#FFD600] pointer-events-none"
      >
        <Sparkles size={16} />
      </motion.div>

      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-16 right-8 text-[#EC6726] pointer-events-none"
      >
        <Star size={14} />
      </motion.div>

      {/* Orbiting Satellite Floating Badges */}
      {techOrbits.map((item, idx) => (
        <motion.div
          key={item.name}
          animate={{
            y: [0, -8, 0],
            x: [0, idx % 2 === 0 ? 5 : -5, 0],
          }}
          transition={{
            duration: 4 + idx,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          className="z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-[#151518]/90 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] shadow-sm text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200"
        >
          {item.icon}
          <span>{item.name}</span>
        </motion.div>
      ))}

      {/* Top Telemetry Floating Badge: +15 Anos */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] text-[11px] font-mono font-bold text-neutral-700 dark:text-neutral-300"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span>+15 Anos em Grandes Players</span>
      </motion.div>

      {/* Centerpiece: Denis Riding Rocket Illustration with dynamic motion */}
      <motion.div 
        animate={{ 
          y: [0, -14, 0],
          rotate: [-1, 2, -1]
        }}
        transition={{ 
          duration: 4.5, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
        whileHover={{ scale: 1.05, rotate: 4 }}
        className="relative z-10 flex flex-col items-center justify-center cursor-pointer w-[300px] sm:w-[350px] max-w-full"
      >
        {/* Main Rocket Artwork Image */}
        <img 
          src="https://i.postimg.cc/m2Z56h32/rocket-final-exact-no-smoke.png" 
          alt="Denis Piaia pilotando foguete retro"
          referrerPolicy="no-referrer"
          className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
        />

        {/* Thruster Pulse Effect underneath */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-3 right-8 w-24 h-6 bg-[#EC6726]/40 dark:bg-[#FFD600]/40 rounded-full blur-lg pointer-events-none"
        />
      </motion.div>

      {/* Bottom Proof Strip Pill */}
      <motion.div 
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-[#151518]/95 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.1] shadow-xs text-xs font-mono font-medium text-neutral-800 dark:text-neutral-200"
      >
        <CheckCircle2 size={13} className="text-green-500" />
        <span>Figma 1:1 Paridade em Código</span>
      </motion.div>

    </div>
  );
};

export default SpaceHeroIllustration;
