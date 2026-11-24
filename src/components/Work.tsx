import { projects } from '../data/projects';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';
import { TiltCard } from './ui/TiltCard';

const statusClass = { Completed: 'bg-[#e3f5ec] text-landed', Ongoing: 'bg-lav text-brand2', 'In development': 'bg-[#fdf1dc] text-warn' } as const;

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="section">
      <div className="container-x">
        <SectionHead id="work-title" eyebrow="Work" title="Selected projects." intro="Four projects across web, accessibility and embedded systems. Live demos and source where they exist." />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.id} delay={(i % 2) * 0.08}>
              <TiltCard className="card h-full">
                <article className="flex h-full flex-col">
                  <div className="relative m-3 flex aspect-[16/9] items-end justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-lav to-lav2 p-5">
                    <span aria-hidden="true" className="font-serif text-7xl italic leading-none text-brand/70">{String(i + 1).padStart(2, '0')}</span>
                    <ul className="flex max-w-[60%] flex-wrap justify-end gap-1.5" aria-label="Technologies">
                      {p.stack.map((t) => (<li key={t} className="rounded-full bg-white/80 px-2.5 py-1 text-xs font-medium text-brand2">{t}</li>))}
                    </ul>
                  </div>
                  <div className="flex flex-1 flex-col p-6 pt-3">
                    <div className="flex items-center justify-between gap-3 text-sm text-muted">
                      <span>{p.kind}</span>
                      <span className={`pill ${statusClass[p.status]}`}>{p.status}</span>
                    </div>
                    <h3 className="mt-3 font-serif text-3xl leading-tight">{p.title}</h3>
                    <p className="mt-3 text-muted">{p.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {p.highlights.map((h) => (<li key={h} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{h}</li>))}
                    </ul>
                    {p.links.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3 pt-2">
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`btn ${l.label === 'Live' ? 'btn-primary' : 'btn-ghost'}`}>
                            {l.label}<span className="sr-only"> for {p.title.split(':')[0]} (opens in a new tab)</span><Icon name="arrow" size={16} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
