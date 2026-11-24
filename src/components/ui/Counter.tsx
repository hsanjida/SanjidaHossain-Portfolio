import { animate, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  value: number;
  decimals?: number;
  suffix?: string;
}

/** Counts up when scrolled into view. Writes straight to the DOM node, so no React re-renders. */
export function Counter({ value, decimals = 0, suffix = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  const format = (n: number) => n.toFixed(decimals) + suffix;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = format(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (n) => {
        el.textContent = format(n);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);

  // Server and first paint show the final number so crawlers and no-JS users see real content.
  return <span ref={ref}>{format(value)}</span>;
}
