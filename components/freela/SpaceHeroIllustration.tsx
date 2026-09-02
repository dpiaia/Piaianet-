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
  onHoverChange: (hovered: boolean) => void;
}

const sparkColors = ['#FFD600', '#EC6726', '#FF9800', '#FFFA65', '#FFFFFF', '#FF3D00', '#00D8FF'];

const InteractiveTag: React.FC<InteractiveTagProps> = ({
  name,
  icon,
  onHoverChange,
}) => {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const triggerSparks = () => {
    const newSparks: Spark[] = Array.from({ length: 16 }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / 16 + (Math.random() - 0.5) * 0.8;
      const distance = 32 + Math.random() * 48;
      return {
        id: Date.now() + i + Math.random(),
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 3 + Math.random() * 5,
        color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        duration: 0.6 + Math.random() * 0.35,
      };
    });

    setSparks(newSparks);
    setTimeout(() => {
      setSparks([]);
    }, 850);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
    triggerSparks();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  return (
    <div className="relative z-30">
      <motion.button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={triggerSparks}
        whileHover={{ 
          scale: 1.3, 
          rotate: -8, 
          y: -5,
          transition: { type: 'spring', stiffness: 400, damping: 18 }
        }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full backdrop-blur-xl border transition-all duration-300 cursor-pointer shadow-md text-xs font-mono font-medium select-none whitespace-nowrap ${
          isHovered
            ? 'bg-white dark:bg-[#1A1A20] border-[#EC6726] dark:border-[#FFD600] text-brand-dark dark:text-white shadow-[0_0_26px_rgba(236,103,38,0.55)] dark:shadow-[0_0_26px_rgba(255,214,0,0.55)] z-40 ring-2 ring-[#EC6726]/25 dark:ring-[#FFD600]/25'
            : 'bg-white/95 dark:bg-[#141418]/95 border-black/[0.08] dark:border-white/[0.12] text-neutral-800 dark:text-neutral-200'
        }`}
      >
        <span className={isHovered ? 'text-[#EC6726] dark:text-[#FFD600] scale-110 transition-transform' : ''}>
          {icon}
        </span>
        <span className="font-semibold tracking-tight">{name}</span>

        {/* Floating Sparks Burst on Hover */}
        <AnimatePresence>
          {sparks.map((spark) => (
            <motion.span
              key={spark.id}
              initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [1, 1, 0],
                scale: [0, 1.5, 0.2],
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
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-50"
            />
          ))}
        </AnimatePresence>

        {/* Diagonal Sparkle Star Indicator */}
        {isHovered && (
          <motion.span
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: [0.8, 1.3, 0.9], rotate: 180 }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="absolute -top-2 -right-2 text-[#FFD600] pointer-events-none drop-shadow-[0_0_6px_#FFD600]"
          >
            <Sparkles size={14} />
          </motion.span>
        )}
      </motion.button>
    </div>
  );
};

interface OrbitItem {
  name: string;
  icon: React.ReactNode;
  startAngle: number;
  radius: number;
  orbitDuration: number;
  floatDuration: number;
  floatY: number[];
  floatX: number[];
  floatDelay: number;
}

const SpaceHeroIllustration: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // 5 Organic Orbiting Technology Badges with independent tempos, radii, and floating waveforms
  const techOrbits: OrbitItem[] = [
    {
      name: 'Figma',
      icon: <Layers size={13} className="text-[#EC6726] dark:text-[#FFD600]" />,
      startAngle: 270, // Top
      radius: 190,
      orbitDuration: 25,
      floatDuration: 4.2,
      floatY: [-7, 8, -7],
      floatX: [-4, 5, -4],
      floatDelay: 0,
    },
    {
      name: 'Pronto para IA',
      icon: <Bot size={13} className="text-[#A855F7]" />,
      startAngle: 342, // Top-Right
      radius: 205,
      orbitDuration: 32,
      floatDuration: 5.1,
      floatY: [8, -10, 8],
      floatX: [6, -4, 6],
      floatDelay: 0.7,
    },
    {
      name: 'Sites',
      icon: <Globe size={13} className="text-[#10B981]" />,
      startAngle: 54, // Bottom-Right
      radius: 175,
      orbitDuration: 21,
      floatDuration: 3.8,
      floatY: [-6, 9, -6],
      floatX: [-5, 6, -5],
      floatDelay: 1.4,
    },
    {
      name: 'Design',
      icon: <Palette size={13} className="text-[#F43F5E]" />,
      startAngle: 126, // Bottom-Left
      radius: 198,
      orbitDuration: 28,
      floatDuration: 4.7,
      floatY: [9, -7, 9],
      floatX: [5, -6, 5],
      floatDelay: 2.1,
    },
    {
      name: 'Front End',
      icon: <Code2 size={13} className="text-[#00D8FF]" />,
      startAngle: 198, // Top-Left
      radius: 182,
      orbitDuration: 23,
      floatDuration: 5.4,
      floatY: [-8, 8, -8],
      floatX: [7, -5, 7],
      floatDelay: 0.9,
    },
  ];

  return (
    <div className="relative w-full max-w-[500px] h-[440px] sm:h-[480px] flex items-center justify-center select-none mx-auto">
      
      {/* Background Decorative Rings & Nebula Aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Inner Glow Aura */}
        <div className="w-60 h-60 rounded-full bg-[#EC6726]/10 dark:bg-[#FFD600]/10 blur-3xl" />
        
        {/* Subtle Organic Celestial Orbit Rings */}
        <div className="w-[370px] sm:w-[410px] h-[370px] sm:h-[410px] rounded-full border border-dashed border-black/[0.06] dark:border-white/[0.08]" />
        <div className="w-[270px] sm:w-[290px] h-[270px] sm:h-[290px] rounded-full border border-black/[0.04] dark:border-white/[0.05]" />
      </div>

      {/* Floating Micro Star Constellations */}
      <motion.div 
        animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-8 left-8 text-[#FFD600] pointer-events-none"
      >
        <Sparkles size={16} />
      </motion.div>

      <motion.div 
        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-12 left-10 text-[#EC6726] pointer-events-none"
      >
        <Star size={14} />
      </motion.div>

      {/* 5 INDEPENDENT ORGANIC ORBITING SATELLITE CARDS */}
      {techOrbits.map((item, idx) => {
        const isThisHovered = hoveredCard === item.name;

        return (
          <div
            key={item.name}
            className="absolute inset-0 flex items-center justify-center pointer-events-none hidden sm:flex"
          >
            {/* Orbital Rotating Arm with unique speed & starting angle */}
            <div
              style={{
                animation: `orbit-rotate-${idx} ${item.orbitDuration}s linear infinite`,
                animationPlayState: isThisHovered ? 'paused' : 'running',
              }}
              className="w-0 h-0 flex items-center justify-center relative pointer-events-none"
            >
              {/* Radial Displacement at distinct radius */}
              <div
                style={{
                  transform: `translate(${item.radius}px, 0)`,
                }}
                className="absolute pointer-events-auto"
              >
                {/* Counter-rotation to keep the card upright and readable */}
                <div
                  style={{
                    animation: `orbit-unrotate-${idx} ${item.orbitDuration}s linear infinite`,
                    animationPlayState: isThisHovered ? 'paused' : 'running',
                  }}
                >
                  {/* Additional Organic Wave Floating */}
                  <motion.div
                    animate={
                      isThisHovered 
                        ? { x: 0, y: 0 } 
                        : { y: item.floatY, x: item.floatX }
                    }
                    transition={{
                      duration: item.floatDuration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: item.floatDelay,
                    }}
                  >
                    <InteractiveTag
                      name={item.name}
                      icon={item.icon}
                      onHoverChange={(hovered) => {
                        setHoveredCard(hovered ? item.name : null);
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

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
        className="relative z-10 flex flex-col items-center justify-center cursor-pointer w-[280px] sm:w-[330px] max-w-full"
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

      {/* Dynamic Keyframes for each unique orbital cadence and angle */}
      <style>{`
        ${techOrbits.map((item, idx) => `
          @keyframes orbit-rotate-${idx} {
            from {
              transform: rotate(${item.startAngle}deg);
            }
            to {
              transform: rotate(${item.startAngle + 360}deg);
            }
          }

          @keyframes orbit-unrotate-${idx} {
            from {
              transform: rotate(-${item.startAngle}deg);
            }
            to {
              transform: rotate(-${item.startAngle + 360}deg);
            }
          }
        `).join('\n')}
      `}</style>

    </div>
  );
};

export default SpaceHeroIllustration;
