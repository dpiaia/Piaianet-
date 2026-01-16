import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export interface ConfettiRef {
  explode: (x: number, y: number) => void;
}

const ConfettiCanvas = forwardRef<ConfettiRef>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  // Cores da marca: Amarelo, Branco, Cinza Claro, Amarelo Escuro
  const colors = ['#FACC15', '#FFFFFF', '#E5E5E5', '#CA8A04'];

  class Particle {
    x: number;
    y: number;
    size: number;
    color: string;
    speedX: number;
    speedY: number;
    rotation: number;
    rotationSpeed: number;
    opacity: number;
    gravity: number;
    friction: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 8 + 4; // Tamanho entre 4 e 12
      this.color = colors[Math.floor(Math.random() * colors.length)];
      
      // Explosão em todas as direções
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 15 + 5; // Velocidade inicial
      
      this.speedX = Math.cos(angle) * velocity;
      this.speedY = Math.sin(angle) * velocity;
      
      this.rotation = Math.random() * 360;
      this.rotationSpeed = Math.random() * 10 - 5;
      this.opacity = 1;
      this.gravity = 0.5;
      this.friction = 0.96; // Desaceleração
    }

    update() {
      this.speedY += this.gravity;
      this.speedX *= this.friction;
      this.speedY *= this.friction;
      
      this.x += this.speedX;
      this.y += this.speedY;
      
      this.rotation += this.rotationSpeed;
      this.opacity -= 0.015; // Decaimento
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.fillStyle = this.color;
      // Desenha quadrado
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      ctx.restore();
    }
  }

  const loop = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Atualizar e desenhar partículas
    particlesRef.current.forEach((particle, index) => {
      particle.update();
      particle.draw(ctx);

      // Remover partículas mortas
      if (particle.opacity <= 0) {
        particlesRef.current.splice(index, 1);
      }
    });

    if (particlesRef.current.length > 0) {
      animationFrameId.current = requestAnimationFrame(loop);
    }
  };

  useImperativeHandle(ref, () => ({
    explode: (x: number, y: number) => {
      // Ajustar coordenadas baseadas na posição do canvas (caso tenha offset)
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const relativeX = x - rect.left;
      const relativeY = y - rect.top;

      // Criar explosão de 30 partículas
      for (let i = 0; i < 30; i++) {
        particlesRef.current.push(new Particle(relativeX, relativeY));
      }

      // Reiniciar loop se estiver parado
      if (particlesRef.current.length > 0 && (!animationFrameId.current || particlesRef.current.length <= 30)) {
         cancelAnimationFrame(animationFrameId.current!);
         loop();
      }
    }
  }));

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        canvasRef.current.width = canvasRef.current.parentElement.clientWidth;
        canvasRef.current.height = canvasRef.current.parentElement.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
      style={{ width: '100%', height: '100%' }}
    />
  );
});

export default ConfettiCanvas;