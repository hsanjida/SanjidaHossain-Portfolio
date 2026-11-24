import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface P { x: number; y: number; vx: number; vy: number; r: number; a: number; hue: 'amber' | 'blue' }

/** Fixed canvas of slow drifting dots. Pauses when the tab is hidden, caps DPR, and draws one still frame for reduced motion. */
export function ParticleBackground() {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    let w = 0, h = 0, raf = 0, running = false;
    let parts: P[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const seed = () => {
      const count = Math.min(70, Math.round((w * h) / 22000));
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.5,
        a: Math.random() * 0.4 + 0.15,
        hue: Math.random() > 0.7 ? 'blue' : 'amber',
      }));
    };
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      draw();
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.hue === 'amber' ? `rgba(255,176,32,${p.a})` : `rgba(110,168,255,${p.a})`;
        ctx.fill();
      }
    };
    const tick = () => {
      for (const p of parts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y < -5) p.y = h + 5;
        if (p.y > h + 5) p.y = -5;
      }
      draw();
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (running || reduce || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };
    const onVis = () => (document.hidden ? stop() : start());

    resize();
    start();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVis);
    return () => {
      stop();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [reduce]);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20"
        style={{ background: 'radial-gradient(900px 500px at 15% -5%, rgba(255,176,32,0.08), transparent 60%), radial-gradient(800px 500px at 100% 30%, rgba(110,168,255,0.06), transparent 60%), #0b0c0f' }}
      />
      <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
    </>
  );
}
