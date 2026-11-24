import { m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';
import { useFinePointer } from '../../hooks/useFinePointer';

/** Card that tilts toward the pointer and carries a soft spotlight. The glow is moved by transform, not repainted. */
export function TiltCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const gx = useMotionValue(-400);
  const gy = useMotionValue(-400);
  const enabled = fine && !reduce;

  return (
    <m.div
      className={`group relative overflow-hidden ${className}`}
      style={enabled ? { rotateX: rx, rotateY: ry, transformPerspective: 900 } : undefined}
      onPointerMove={
        enabled
          ? (e) => {
              const r = e.currentTarget.getBoundingClientRect();
              const px = (e.clientX - r.left) / r.width;
              const py = (e.clientY - r.top) / r.height;
              ry.set((px - 0.5) * 6);
              rx.set((0.5 - py) * 6);
              gx.set(e.clientX - r.left - 200);
              gy.set(e.clientY - r.top - 200);
            }
          : undefined
      }
      onPointerLeave={
        enabled
          ? () => {
              rx.set(0);
              ry.set(0);
              gx.set(-400);
              gy.set(-400);
            }
          : undefined
      }
    >
      {enabled && (
        <m.div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ x: gx, y: gy, background: 'radial-gradient(circle, rgba(107,79,163,0.10) 0%, transparent 65%)' }}
        />
      )}
      <div className="relative">{children}</div>
    </m.div>
  );
}
