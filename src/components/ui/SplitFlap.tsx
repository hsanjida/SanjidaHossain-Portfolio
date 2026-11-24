import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

interface Props {
  text: string;
  /** Tailwind size classes for each tile. */
  tileClass: string;
  startDelay?: number;
}

/**
 * Departures-board text. Each tile cycles random characters, then settles on its letter with a flip.
 * The tiles are decorative; the full text is exposed once through an accessible label.
 */
export function SplitFlap({ text, tileClass, startDelay = 300 }: Props) {
  const reduce = useReducedMotion();
  const chars = text.toUpperCase().split('');
  const [shown, setShown] = useState<string[]>(() => (reduce ? chars : chars.map((c) => (c === ' ' ? ' ' : ' '))));
  const [settled, setSettled] = useState<boolean[]>(() => chars.map(() => !!reduce));
  const frame = useRef(0);

  useEffect(() => {
    if (reduce) {
      setShown(chars);
      setSettled(chars.map(() => true));
      return;
    }
    let timer = 0;
    const begin = window.setTimeout(() => {
      timer = window.setInterval(() => {
        if (document.hidden) return;
        frame.current += 1;
        const f = frame.current;
        setShown(chars.map((c, i) => (c === ' ' || f > 8 + i * 2 ? c : POOL[Math.floor(Math.random() * POOL.length)])));
        setSettled(chars.map((c, i) => c === ' ' || f > 8 + i * 2));
        if (f > 8 + chars.length * 2) window.clearInterval(timer);
      }, 55);
    }, startDelay);
    return () => {
      window.clearTimeout(begin);
      window.clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, reduce, startDelay]);

  const words = text.toUpperCase().split(' ');
  let idx = 0;
  return (
    <span role="img" aria-label={text} className="flex flex-wrap gap-x-4 gap-y-2">
      {words.map((w, wi) => (
        <span key={wi} aria-hidden="true" className="flex gap-1 sm:gap-1.5">
          {w.split('').map((_, ci) => {
            const i = idx++;
            return (
              <span key={ci} className={`tile ${tileClass} ${settled[i] && !reduce ? 'flip' : ''}`}>
                {shown[i]}
              </span>
            );
          })}
          {(idx++, null)}
        </span>
      ))}
    </span>
  );
}
