import React, { useRef, useEffect } from 'react';

const DOTS_COUNT = 50;
const COLORS = ['#eee', '#545454', '#596d91', '#bb5a68', '#696541'];

interface Dot {
  x: number;
  y: number;
  size: number;
  color: string;
}

const BannerBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Helper to create dots
  const createDots = (width: number, height: number): Dot[] => {
    const dots: Dot[] = [];
    for (let i = 0; i < DOTS_COUNT; i++) {
      dots.push({
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        size: Math.random() * 3 + 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
    return dots;
  };

  // Draw all dots
  const drawDots = () => {
    const ctx = ctxRef.current;
    const dots = dotsRef.current;
    if (!ctx) return;
    dots.forEach(dot => {
      ctx.fillStyle = dot.color;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  // Redraw dots and lines on mouse move
  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !banner || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    const rect = banner.getBoundingClientRect();
    const mouse = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    dotsRef.current.forEach(dot => {
      const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
      if (distance < 300) {
        ctx.strokeStyle = dot.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    });
  };

  // Redraw only dots on mouse out
  const handleMouseOut = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
  };

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    if (!canvas || !banner) return;
    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;
    dotsRef.current = createDots(canvas.width, canvas.height);
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    if (!canvas || !banner) return;
    // Set canvas size
    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;
    // Create dots
    dotsRef.current = createDots(canvas.width, canvas.height);
    // Get context
    const ctx = canvas.getContext('2d');
    ctxRef.current = ctx;
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    }
    // Event listeners
    banner.addEventListener('mousemove', handleMouseMove);
    banner.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      banner.removeEventListener('mousemove', handleMouseMove);
      banner.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, []);

  // Style: full screen, behind content
  return (
    <div
      ref={bannerRef}
      className="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1, // <-- higher than 0
      }}
    >
      <canvas
        ref={canvasRef}
        id="dotsCanvas"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

export default BannerBackground;
