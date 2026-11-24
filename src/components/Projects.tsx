import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../data/projects';
import { statusStyle } from '../lib/status';
import { Reveal } from './ui/Reveal';

export function Projects() {
  const reduce = useReducedMotion();
  const [openCode, setOpenCode] = useState<string | null>(projects[0].code);

  return (
    <section id="projects" aria-labelledby="projects-title" className="section">
      <div className="container-x">
        <Reveal><p className="eyebrow">Projects</p></Reveal>
        <Reveal delay={0.05}><h2 id="projects-title" className="h2 mt-3 max-w-2xl">Departures: what I've built and what's in the air.</h2></Reveal>

        <Reveal delay={0.1} className="board mt-10 overflow-hidden">
          <div className="hidden grid-cols-[90px_1fr_130px_120px] gap-4 border-b border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:grid" aria-hidden="true">
            <span>Code</span><span>Project</span><span>Period</span><span>Status</span>
          </div>
          <ul>
            {projects.map((p) => {
              const open = openCode === p.code;
              const s = statusStyle[p.status];
              const panelId = `panel-${p.code.replace(' ', '')}`;
              return (
                <li key={p.code} className="border-b border-line last:border-b-0">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenCode(open ? null : p.code)}
                      className="grid w-full grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 px-4 py-4 text-left transition-colors hover:bg-panel2 sm:px-6 md:grid-cols-[90px_1fr_130px_120px]"
                    >
                      <span className="order-2 font-mono text-sm text-amber md:order-none">{p.code}</span>
                      <span className="order-1 col-span-2 text-base font-semibold sm:text-lg md:order-none md:col-span-1">{p.title}</span>
                      <span className="order-3 hidden text-sm text-muted md:block">{p.period}</span>
                      <span className="order-4 flex items-center justify-end gap-3 md:justify-start">
                        <span className={`pill ${s.pill}`}>
                          <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                          {p.status}
                        </span>
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={`shrink-0 text-muted transition-transform duration-300 md:hidden ${open ? 'rotate-180' : ''}`}>
                          <path d="M3 6l5 5 5-5" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-label={`${p.title} details`}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 px-4 pb-6 pt-1 sm:px-6 md:grid-cols-[90px_1fr] md:gap-4">
                          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:pt-1">{p.kind}</p>
                          <div>
                            <p className="max-w-2xl text-base leading-relaxed text-muted">{p.summary}</p>
                            <ul className="mt-4 space-y-2 text-sm text-paper">
                              {p.highlights.map((h) => (
                                <li key={h} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-0.5 w-2 shrink-0 bg-amber" />{h}</li>
                              ))}
                            </ul>
                            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                              {p.stack.map((t) => (<li key={t} className="tag">{t}</li>))}
                            </ul>
                            {p.links.length > 0 && (
                              <div className="mt-5 flex flex-wrap gap-3">
                                {p.links.map((l) => (
                                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`btn !min-h-[44px] ${l.label === 'Live' ? 'btn-primary' : 'btn-ghost'}`}>
                                    {l.label}<span className="sr-only"> for {p.title.split(':')[0]} (opens in a new tab)</span>
                                    <span aria-hidden="true">↗</span>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
