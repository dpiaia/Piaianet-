import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../context/ThemeContext';

const DotPatternBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let dots: Dot[] = [];

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
        canvas.width = width;
        canvas.height = height;
      }
    };

    class Dot {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      life: number;
      maxLife: number;
      color: string;

      constructor(x: number, y: number, vx?: number, vy?: number, life?: number) {
        this.x = x;
        this.y = y;
        this.vx = vx ?? (Math.random() - 0.5) * 1.5;
        this.vy = vy ?? (Math.random() - 0.5) * 1.5;
        this.radius = Math.random() * 2 + 1;
        this.alpha = 0;
        this.maxLife = life ?? Math.random() * 200 + 100;
        this.life = this.maxLife;
        
        if (theme === 'dark') {
          this.color = Math.random() > 0.5 ? '250, 204, 21' : '255, 255, 255'; // Yellow or White
        } else {
          this.color = Math.random() > 0.5 ? '51, 51, 51' : '153, 153, 153'; // Lead or Grey
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;

        // Fade in
        if (this.life > this.maxLife * 0.8) {
          this.alpha = (this.maxLife - this.life) / (this.maxLife * 0.2);
        } 
        // Fade out
        else if (this.life < this.maxLife * 0.3) {
          this.alpha = this.life / (this.maxLife * 0.3);
        } else {
          this.alpha = 1;
        }

        // Bounce off walls
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Chance to multiply
        if (this.life > 50 && Math.random() < 0.01 && dots.length < 150) {
          dots.push(new Dot(
            this.x, 
            this.y, 
            this.vx + (Math.random() - 0.5) * 0.5, 
            this.vy + (Math.random() - 0.5) * 0.5,
            this.life * 0.8
          ));
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha * 0.4})`;
        ctx.fill();
      }
    }

    const init = () => {
      dots = [];
      for (let i = 0; i < 30; i++) {
        dots.push(new Dot(Math.random() * width, Math.random() * height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Spawn new dots if count is low
      if (dots.length < 40 && Math.random() < 0.05) {
        dots.push(new Dot(Math.random() * width, Math.random() * height));
      }

      for (let i = dots.length - 1; i >= 0; i--) {
        dots[i].update();
        dots[i].draw();

        if (dots[i].life <= 0) {
          dots.splice(i, 1);
        }
      }

      // Draw connections between nearby dots
      ctx.lineWidth = 0.5;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * Math.min(dots[i].alpha, dots[j].alpha) * 0.2;
            ctx.strokeStyle = `rgba(${dots[i].color}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    handleResize();
    init();
    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default DotPatternBackground;
