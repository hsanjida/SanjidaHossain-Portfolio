import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { useId, useState } from 'react';
import { faqs } from '../data/faq';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

export function Faq() {
  const base = useId();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" aria-labelledby="faq-title" className="section">
      <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
        <div>
          <SectionHead id="faq-title" eyebrow="FAQ" title="Questions, answered." />
          <Reveal delay={0.15}><p className="mt-6 text-muted">Something else? <a href="#contact" className="font-semibold text-brand underline underline-offset-4">Send me a message.</a></p></Reveal>
        </div>
        <ul className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 0.04}>
                <div className="card !rounded-2xl">
                  <h3>
                    <button type="button" aria-expanded={isOpen} aria-controls={`${base}-${i}`} onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left text-lg font-semibold">
                      {f.q}
                      <span aria-hidden="true" className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lav text-brand transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}><Icon name="plus" size={16} /></span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div id={`${base}-${i}`} role="region" aria-label={f.q} className="overflow-hidden"
                        initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}>
                        <p className="px-6 pb-6 text-muted">{f.a}</p>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
