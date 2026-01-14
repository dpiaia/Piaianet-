import React, { useEffect, useRef } from 'react';

const GalaxyBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      // Use parent element size to cover the entire section height
      const parent = canvas.parentElement;
      if (parent) {
        width = parent.clientWidth;
        height = parent.clientHeight;
      } else {
        width = window.innerWidth;
        height = window.innerHeight;
      }
      
      canvas.width = width;
      canvas.height = height;
      init();
    };

    class Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      blinkSpeed: number;
      increasing: boolean;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5;
        this.opacity = Math.random();
        this.blinkSpeed = Math.random() * 0.02 + 0.005;
        this.increasing = true;
      }

      update() {
        if (this.increasing) {
          this.opacity += this.blinkSpeed;
          if (this.opacity >= 1) this.increasing = false;
        } else {
          this.opacity -= this.blinkSpeed;
          if (this.opacity <= 0.2) this.increasing = true;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
      active: boolean;
      delay: number;
      timer: number;
      color: string;

      constructor() {
        this.active = false;
        this.timer = 0;
        this.delay = Math.random() * 200 + 100; // Random delay between spawns
        
        // Initial setup placeholders
        this.x = 0;
        this.y = 0;
        this.length = 0;
        this.speed = 0;
        this.opacity = 0;
        this.angle = 0;
        this.color = '#FFFFFF';
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * (height * 0.5); // Start mostly in top half
        this.length = Math.random() * 80 + 10;
        this.speed = Math.random() * 10 + 6;
        this.opacity = 1;
        this.angle = Math.PI / 4; // 45 degrees
        this.active = true;
        this.timer = 0;
        this.delay = Math.random() * 300 + 100; // Reset delay
        // 30% chance of being brand yellow
        this.color = Math.random() > 0.7 ? '#FACC15' : '#FFFFFF';
      }

      update() {
        if (!this.active) {
          this.timer++;
          if (this.timer >= this.delay) {
            this.reset();
          }
          return;
        }

        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.opacity -= 0.01;

        if (this.opacity <= 0 || this.x > width || this.y > height) {
          this.active = false;
        }
      }

      draw() {
        if (!this.active || !ctx) return;
        
        const tailX = this.x - this.length * Math.cos(this.angle);
        const tailY = this.y - this.length * Math.sin(this.angle);

        const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
        gradient.addColorStop(0, this.color); // Head
        gradient.addColorStop(1, 'transparent'); // Tail

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }
    }

    function init() {
      stars = [];
      const starCount = Math.floor((width * height) / 4000); // Density based on screen area
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }

      shootingStars = [];
      const shootingStarCount = 2; // Keep it subtle, only 2 max active logic
      for (let i = 0; i < shootingStarCount; i++) {
        shootingStars.push(new ShootingStar());
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      shootingStars.forEach(shootingStar => {
        shootingStar.update();
        shootingStar.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    // Use ResizeObserver to detect parent size changes reliably
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    handleResize(); // Init setup
    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-60"
    />
  );
};

export default GalaxyBackground;