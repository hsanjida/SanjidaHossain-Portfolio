import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useFinePointer } from '../../hooks/useFinePointer';

/** Pulls its child slightly toward the pointer. Mouse only, and off for reduced motion. */
export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });
  const enabled = fine && !reduce;

  return (
    <motion.div
      className="inline-block"
      style={enabled ? { x: sx, y: sy } : undefined}
      onPointerMove={
        enabled
          ? (e) => {
              const r = e.currentTarget.getBoundingClientRect();
              x.set((e.clientX - (r.left + r.width / 2)) * strength);
              y.set((e.clientY - (r.top + r.height / 2)) * strength);
            }
          : undefined
      }
      onPointerLeave={
        enabled
          ? () => {
              x.set(0);
              y.set(0);
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
