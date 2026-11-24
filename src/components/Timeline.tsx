import { motion, useReducedMotion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { timeline } from '../data/timeline';
import { Reveal } from './ui/Reveal';

const typeColor = { Education: 'border-flight/50 text-flight', Volunteer: 'border-landed/50 text-landed', Award: 'border-amber/50 text-amber' } as const;

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });

  return (
    <section id="timeline" aria-labelledby="timeline-title" className="section">
      <div className="container-x">
        <Reveal><p className="eyebrow">Timeline</p></Reveal>
        <Reveal delay={0.05}><h2 id="timeline-title" className="h2 mt-3 max-w-2xl">Flight history.</h2></Reveal>

        <ol ref={ref} className="relative mt-10 space-y-4 pl-6 sm:pl-10">
          <span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px bg-line sm:left-[11px]" />
          <motion.span aria-hidden="true" className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-amber sm:left-[11px]" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.code} delay={i * 0.04} className="relative">
              <span aria-hidden="true" className="absolute -left-6 top-6 h-[15px] w-[15px] rounded-full border-2 border-amber bg-ink sm:-left-10 sm:h-[23px] sm:w-[23px]" />
              <div className="board grid gap-3 p-5 sm:grid-cols-[150px_1fr] sm:gap-6 sm:p-6">
                <div>
                  <p className="font-mono text-sm font-semibold text-amber">{t.period}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{t.code}</p>
                  <span className={`pill mt-3 ${typeColor[t.type]}`}>{t.type}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <p className="mt-1 text-sm text-paper/80">{t.place}</p>
                  <p className="mt-3 text-muted">{t.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
