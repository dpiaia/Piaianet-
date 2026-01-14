import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150 // Raio de interação
    };

    // Ajustar tamanho do canvas
    const handleResize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      init();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Calculate mouse position relative to the canvas element
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    }

    // Classe da Partícula
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;
      density: number;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Checar colisão com mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;
            
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;

            this.x -= directionX;
            this.y -= directionY;
          } else {
            // Retorno suave à posição "original" (flutuante)
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX;
              this.x -= dx / 20; // Velocidade de retorno
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY;
              this.y -= dy / 20;
            }
          }
        } else {
            // Comportamento quando mouse está longe (retorno)
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 20;
            }
            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 20;
            }
        }
        
        // Movimento ambiente constante (flutuar)
        this.baseX += this.directionX;
        this.baseY += this.directionY;

        // Bater nas bordas e voltar (para o movimento ambiente)
        if (this.baseX > canvas!.width || this.baseX < 0) {
            this.directionX = -this.directionX;
        }
        if (this.baseY > canvas!.height || this.baseY < 0) {
            this.directionY = -this.directionY;
        }

        this.draw();
      }
    }

    function init() {
      particlesArray = [];
      // Número de partículas baseado no tamanho da tela
      // Menos partículas em mobile para performance
      const numberOfParticles = (canvas!.height * canvas!.width) / 15000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 2) + 1; // Tamanho pequeno e sutil
        const x = (Math.random() * ((canvas!.width - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((canvas!.height - size * 2) - (size * 2)) + size * 2);
        
        // Velocidade bem lenta para ser sutil
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;
        
        // Cores: Mistura de Amarelo Brand e Cinza
        const isYellow = Math.random() > 0.8; // 20% yellow
        const color = isYellow 
            ? 'rgba(250, 204, 21, 0.6)' 
            : `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`;

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    // Resize Observer for robust sizing
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Listen to mouse events on window but calculated relative to canvas in handler
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    handleResize(); // Init setup
    animate();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default ParticleBackground;