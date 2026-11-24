import { profile } from '../data/profile';
import { stats } from '../data/stats';
import { Counter } from './ui/Counter';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section !pt-6">
      <div className="container-x">
        <Reveal>
          <dl className="grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-white/80 shadow-soft lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`p-6 sm:p-8 ${i % 2 === 1 ? 'border-l border-line' : ''} ${i > 1 ? 'border-t border-line lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}>
                <dd className="font-serif text-5xl leading-none text-brand sm:text-6xl"><Counter value={s.value} decimals={s.decimals} suffix={s.suffix} /></dd>
                <dt className="mt-3 text-sm font-medium text-muted">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHead id="about-title" eyebrow="About" title="Building things that work for more people." />
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {profile.about.map((p, i) => (<Reveal key={i} delay={0.08 + i * 0.06}><p>{p}</p></Reveal>))}
          </div>
        </div>
      </div>
    </section>
  );
}
