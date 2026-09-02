import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface Planet {
  x: number;
  y: number;
  radius: number;
  speed: number;
  type: 'ringed' | 'terrestrial' | 'ice' | 'nebula' | 'golden';
  colors: {
    primary: string;
    secondary: string;
    shadow: string;
    glow: string;
    ring?: string;
    ringShadow?: string;
  };
  rotation: number;
  rotationSpeed: number;
  ringAngle: number;
  active: boolean;
}

const GalaxyHeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const isDark = () => {
      return (
        theme === 'dark' ||
        document.documentElement.classList.contains('dark')
      );
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Palette choices based on theme
    const starColorsDark = ['#FFFFFF', '#FFD600', '#EC6726', '#FFFA65', '#A5F3FC', '#F472B6'];
    const starColorsLight = ['#EC6726', '#FF9800', '#3B82F6', '#6366F1', '#D97706', '#9333EA'];

    // Generate parallax starfield (Left to Right drift)
    const numStars = Math.floor(Math.max(width, 700) / 7.5);
    const stars: Star[] = Array.from({ length: numStars }).map(() => {
      const dark = isDark();
      const colors = dark ? starColorsDark : starColorsLight;
      const baseOpacity = 0.2 + Math.random() * 0.7;
      const speed = 0.3 + Math.random() * 0.95; // pixels per frame from left to right

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * (speed > 0.8 ? 1.8 : 1.2),
        speed,
        opacity: baseOpacity,
        baseOpacity,
        twinkleSpeed: 0.015 + Math.random() * 0.035,
        twinkleOffset: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    // Random Planets Manager
    const planetTypes: Planet['type'][] = ['ringed', 'terrestrial', 'ice', 'nebula', 'golden'];

    const createRandomPlanet = (startX: number = -150): Planet => {
      const dark = isDark();
      const type = planetTypes[Math.floor(Math.random() * planetTypes.length)];
      const radius = 28 + Math.random() * 32;
      const speed = 0.35 + Math.random() * 0.45; // Smooth slow orbital drift
      const y = Math.max(60, Math.min(height - 60, height * (0.15 + Math.random() * 0.7)));

      let colors: Planet['colors'];
      switch (type) {
        case 'ringed':
          colors = {
            primary: '#F59E0B',
            secondary: '#D97706',
            shadow: '#78350F',
            glow: dark ? 'rgba(245, 158, 11, 0.4)' : 'rgba(245, 158, 11, 0.25)',
            ring: '#FDE68A',
            ringShadow: 'rgba(180, 83, 9, 0.6)',
          };
          break;
        case 'ice':
          colors = {
            primary: '#06B6D4',
            secondary: '#0284C7',
            shadow: '#0C4A6E',
            glow: dark ? 'rgba(6, 182, 212, 0.4)' : 'rgba(6, 182, 212, 0.25)',
          };
          break;
        case 'terrestrial':
          colors = {
            primary: '#EC6726',
            secondary: '#C2410C',
            shadow: '#7C2D12',
            glow: dark ? 'rgba(236, 103, 38, 0.4)' : 'rgba(236, 103, 38, 0.25)',
          };
          break;
        case 'nebula':
          colors = {
            primary: '#8B5CF6',
            secondary: '#6D28D9',
            shadow: '#4C1D95',
            glow: dark ? 'rgba(139, 92, 246, 0.4)' : 'rgba(139, 92, 246, 0.25)',
          };
          break;
        case 'golden':
        default:
          colors = {
            primary: '#FFD600',
            secondary: '#EAB308',
            shadow: '#854D0E',
            glow: dark ? 'rgba(255, 214, 0, 0.45)' : 'rgba(255, 214, 0, 0.25)',
          };
          break;
      }

      return {
        x: startX,
        y,
        radius,
        speed,
        type,
        colors,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005,
        ringAngle: (Math.random() - 0.5) * 0.5 - 0.25,
        active: true,
      };
    };

    // Initialize with 1 planet already in progress or starting immediately
    let activePlanet: Planet | null = createRandomPlanet(width * 0.2);
    let nextPlanetTimer: number = Date.now() + 15000;

    let time = 0;

    const render = () => {
      time += 1;
      const dark = isDark();

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle background cosmic dust clouds
      const grad1 = ctx.createRadialGradient(
        width * 0.25, height * 0.35, 10,
        width * 0.25, height * 0.35, width * 0.45
      );
      grad1.addColorStop(0, dark ? 'rgba(236, 103, 38, 0.07)' : 'rgba(236, 103, 38, 0.04)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.8, height * 0.65, 10,
        width * 0.8, height * 0.65, width * 0.4
      );
      grad2.addColorStop(0, dark ? 'rgba(255, 214, 0, 0.06)' : 'rgba(255, 214, 0, 0.03)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw and animate stars (Left to Right)
      stars.forEach((star) => {
        // Move from left to right
        star.x += star.speed;
        if (star.x > width + 10) {
          star.x = -10;
          star.y = Math.random() * height;
        }

        // Twinkle calculation
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const currentOpacity = Math.max(0.1, Math.min(1, star.baseOpacity + twinkle * 0.35));

        ctx.save();
        ctx.globalAlpha = dark ? currentOpacity : currentOpacity * 0.7;
        ctx.fillStyle = star.color;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Extra twinkle cross on brightest near stars
        if (star.radius > 2.0 && currentOpacity > 0.65) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - star.radius * 2, star.y);
          ctx.lineTo(star.x + star.radius * 2, star.y);
          ctx.moveTo(star.x, star.y - star.radius * 2);
          ctx.lineTo(star.x, star.y + star.radius * 2);
          ctx.stroke();
        }

        ctx.restore();
      });

      // 3. Manage & Render Random Passing Planet
      if (activePlanet && activePlanet.active) {
        activePlanet.x += activePlanet.speed;
        activePlanet.rotation += activePlanet.rotationSpeed;

        const p = activePlanet;
        const pRadius = p.radius;

        ctx.save();
        ctx.translate(p.x, p.y);

        // Planet Outer Atmospheric Glow
        const glowGrad = ctx.createRadialGradient(0, 0, pRadius * 0.8, 0, 0, pRadius * 1.6);
        glowGrad.addColorStop(0, p.colors.glow);
        glowGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(0, 0, pRadius * 1.6, 0, Math.PI * 2);
        ctx.fill();

        // Draw back half of rings if ringed planet
        if (p.type === 'ringed' && p.colors.ring) {
          ctx.save();
          ctx.rotate(p.ringAngle);
          ctx.beginPath();
          ctx.ellipse(0, 0, pRadius * 2.2, pRadius * 0.55, 0, Math.PI, Math.PI * 2);
          ctx.strokeStyle = p.colors.ring;
          ctx.lineWidth = pRadius * 0.28;
          ctx.globalAlpha = dark ? 0.85 : 0.65;
          ctx.stroke();
          ctx.restore();
        }

        // Draw 3D Shaded Planet Sphere
        ctx.save();
        ctx.beginPath();
        ctx.arc(0, 0, pRadius, 0, Math.PI * 2);
        ctx.clip();

        // Base planetary color gradient
        const sphereGrad = ctx.createRadialGradient(
          -pRadius * 0.35, -pRadius * 0.35, pRadius * 0.1,
          0, 0, pRadius
        );
        sphereGrad.addColorStop(0, p.colors.primary);
        sphereGrad.addColorStop(0.65, p.colors.secondary);
        sphereGrad.addColorStop(1, p.colors.shadow);
        ctx.fillStyle = sphereGrad;
        ctx.fillRect(-pRadius, -pRadius, pRadius * 2, pRadius * 2);

        // Subtle planetary cloud bands / craters
        ctx.rotate(p.rotation);
        ctx.fillStyle = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
        ctx.beginPath();
        ctx.ellipse(0, -pRadius * 0.25, pRadius * 0.9, pRadius * 0.15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(0, pRadius * 0.3, pRadius * 0.85, pRadius * 0.12, 0, 0, Math.PI * 2);
        ctx.fill();

        // Crescent spherical shadow
        const shadowGrad = ctx.createRadialGradient(
          pRadius * 0.4, pRadius * 0.4, pRadius * 0.2,
          pRadius * 0.4, pRadius * 0.4, pRadius * 1.2
        );
        shadowGrad.addColorStop(0, 'transparent');
        shadowGrad.addColorStop(0.8, dark ? 'rgba(0, 0, 0, 0.65)' : 'rgba(0, 0, 0, 0.35)');
        shadowGrad.addColorStop(1, dark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.6)');
        ctx.fillStyle = shadowGrad;
        ctx.fillRect(-pRadius, -pRadius, pRadius * 2, pRadius * 2);

        ctx.restore(); // end clip

        // Draw front half of rings if ringed planet
        if (p.type === 'ringed' && p.colors.ring) {
          ctx.save();
          ctx.rotate(p.ringAngle);
          ctx.beginPath();
          ctx.ellipse(0, 0, pRadius * 2.2, pRadius * 0.55, 0, 0, Math.PI);
          ctx.strokeStyle = p.colors.ring;
          ctx.lineWidth = pRadius * 0.28;
          ctx.globalAlpha = dark ? 0.95 : 0.8;
          ctx.stroke();

          // Ring inner ringlet line
          ctx.beginPath();
          ctx.ellipse(0, 0, pRadius * 2.4, pRadius * 0.6, 0, 0, Math.PI);
          ctx.strokeStyle = p.colors.primary;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.restore();
        }

        ctx.restore();

        // If planet has drifted completely past the right edge
        if (activePlanet.x > width + pRadius * 3) {
          activePlanet.active = false;
          activePlanet = null;
          // Schedule next planet between 8 and 18 seconds
          nextPlanetTimer = Date.now() + 8000 + Math.random() * 10000;
        }
      } else {
        // Check if it's time to spawn a new planet
        if (Date.now() > nextPlanetTimer) {
          activePlanet = createRandomPlanet(-120);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 dark:opacity-95"
      />
    </div>
  );
};

export default GalaxyHeroBackground;
