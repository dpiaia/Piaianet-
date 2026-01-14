import React, { useEffect, useRef } from 'react';

interface CardHoverParticlesProps {
  active: boolean;
}

const CardHoverParticles: React.FC<CardHoverParticlesProps> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      if (canvas.parentElement) {
        width = canvas.parentElement.clientWidth;
        height = canvas.parentElement.clientHeight;
        canvas.width = width;
        canvas.height = height;
      }
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      color: string;
      shape: string;
      opacity: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = height + 10; // Start slightly below
        this.size = Math.random() * 15 + 8; // Size between 8 and 23
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25; // Slight horizontal drift
        this.opacity = 1;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        
        // Random shape: Heart or Star
        this.shape = Math.random() > 0.5 ? '❤' : '★';
        
        // Random color: Brand Yellow or White/Grey
        this.color = Math.random() > 0.6 
          ? '250, 204, 21'  // Brand Yellow (RGB)
          : '255, 255, 255'; // White (RGB)
      }

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.opacity -= 0.005; // Fade out slowly
        this.rotation += this.rotationSpeed;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.font = `${this.size}px sans-serif`;
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.shape, 0, 0);
        ctx.restore();
      }
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Add new particles only if active
      if (active) {
        // Chance to spawn a particle per frame (density control)
        if (Math.random() < 0.1) {
          particles.push(new Particle());
        }
      }

      // Update and draw existing particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Remove dead particles
        if (particles[i].opacity <= 0 || particles[i].y < -20) {
          particles.splice(i, 1);
          i--;
        }
      }

      // Keep animating if active OR if there are particles left to finish their animation
      if (active || particles.length > 0) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }
    
    handleResize();
    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
      style={{ opacity: 0.6 }}
    />
  );
};

export default CardHoverParticles;