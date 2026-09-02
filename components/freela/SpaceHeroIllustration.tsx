import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, Code2, Bot, Palette, Globe, Star } from 'lucide-react';

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

interface InteractiveTagProps {
  name: string;
  icon: React.ReactNode;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: number;
  duration: number;
}

const InteractiveTag: React.FC<InteractiveTagProps> = ({
  name,
  icon,
  top,
  left,
  right,
  bottom,
  delay,
  duration,
}) => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const colors = ['#FFD600', '#EC6726', '#FF9800', '#FFFA65', '#FFFFFF', '#FF3D00'];

  const triggerSparks = () => {
    const newSparks: Spark[] = Array.from({ length: 12 }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.9;
      const distance = 28 + Math.random() * 38;
      return {
        id: Date.now() + i + Math.random(),
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 3 + Math.random() * 4.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 0.55 + Math.random() * 0.35,
      };
    });

    setSparks(newSparks);
    setTimeout(() => {
      setSparks([]);
    }, 800);
  };

  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
        x: [0, 4, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      style={{
        position: 'absolute',
        top,
        left,
        right,
        bottom,
      }}
      className="z-20 hidden sm:block"
    >
      <motion.button
        onMouseEnter={() => {
          setIsHovered(true);
          triggerSparks();
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={triggerSparks}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-md border transition-all duration-200 cursor-pointer shadow-sm text-xs font-mono font-medium select-none ${
          isHovered
            ? 'bg-white dark:bg-[#1C1C22] border-[#EC6726] dark:border-[#FFD600] text-brand-dark dark:text-white shadow-[0_0_18px_rgba(236,103,38,0.4)] dark:shadow-[0_0_18px_rgba(255,214,0,0.4)]'
            : 'bg-white/90 dark:bg-[#151518]/90 border-black/[0.08] dark:border-white/[0.1] text-neutral-800 dark:text-neutral-200'
        }`}
      >
        <span className={isHovered ? 'text-[#EC6726] dark:text-[#FFD600]' : ''}>
          {icon}
        </span>
        <span className="font-semibold tracking-tight">{name}</span>

        {/* Floating Sparks on Hover */}
        <AnimatePresence>
          {sparks.map((spark) => (
            <motion.span
              key={spark.id}
              initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [1, 1, 0],
                scale: [0, 1.4, 0.2],
                x: spark.x,
                y: spark.y,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: spark.duration, ease: 'easeOut' }}
              style={{
                backgroundColor: spark.color,
                width: spark.size,
                height: spark.size,
                boxShadow: `0 0 10px ${spark.color}, 0 0 4px #FFF`,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-30"
            />
          ))}
        </AnimatePresence>

        {/* Hover Micro Sparkle Icon */}
        {isHovered && (
          <motion.span
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: [0.8, 1.25, 0.9], rotate: 180 }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="absolute -top-1.5 -right-1.5 text-[#FFD600] pointer-events-none"
          >
            <Sparkles size={13} />
          </motion.span>
        )}
      </motion.button>
    </motion.div>
  );
};

const SpaceHeroIllustration: React.FC = () => {
  // 5 Orbiting Technology Badges requested: Figma, Pronto para IA, Front End, Sites, Design
  const techOrbits = [
    {
      name: 'Figma',
      icon: <Layers size={13} className="text-[#EC6726] dark:text-[#FFD600]" />,
      top: '10%',
      left: '12%',
      duration: 4.5,
      delay: 0,
    },
    {
      name: 'Pronto para IA',
      icon: <Bot size={13} className="text-[#A855F7]" />,
      top: '8%',
      right: '8%',
      duration: 5.2,
      delay: 0.8,
    },
    {
      name: 'Front End',
      icon: <Code2 size={13} className="text-[#00D8FF]" />,
      top: '52%',
      left: '2%',
      duration: 4.8,
      delay: 1.5,
    },
    {
      name: 'Sites',
      icon: <Globe size={13} className="text-[#10B981]" />,
      top: '48%',
      right: '4%',
      duration: 5.5,
      delay: 2.2,
    },
    {
      name: 'Design',
      icon: <Palette size={13} className="text-[#F43F5E]" />,
      bottom: '10%',
      right: '16%',
      duration: 4.2,
      delay: 1.1,
    },
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
        className="absolute top-10 left-8 text-[#FFD600] pointer-events-none"
      >
        <Sparkles size={16} />
      </motion.div>

      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-16 left-12 text-[#EC6726] pointer-events-none"
      >
        <Star size={14} />
      </motion.div>

      {/* 5 Orbiting Satellite Floating Badges with Spark Effect */}
      {techOrbits.map((item) => (
        <InteractiveTag
          key={item.name}
          name={item.name}
          icon={item.icon}
          top={item.top}
          left={item.left}
          right={item.right}
          bottom={item.bottom}
          delay={item.delay}
          duration={item.duration}
        />
      ))}

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
        whileHover={{ scale: 1.05, rotate: 3 }}
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

      {/* Mobile-only tags strip below illustration for responsive view */}
      <div className="sm:hidden absolute -bottom-4 left-0 right-0 flex flex-wrap justify-center gap-1.5 z-20">
        {techOrbits.map((item) => (
          <span
            key={item.name}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#151518]/90 border border-black/[0.08] dark:border-white/[0.1] text-[10px] font-mono font-medium text-neutral-800 dark:text-neutral-200"
          >
            {item.icon}
            <span>{item.name}</span>
          </span>
        ))}
      </div>

    </div>
  );
};

export default SpaceHeroIllustration;
