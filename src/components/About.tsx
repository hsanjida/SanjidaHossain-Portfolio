import { profile } from '../data/profile';
import { stats } from '../data/stats';
import { Counter } from './ui/Counter';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <TiltCard className="board p-6">
            <div className="flex items-center gap-5">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.photoAlt} width={112} height={112} loading="lazy" decoding="async" className="h-28 w-28 rounded-2xl object-cover" />
              ) : (
                <div role="img" aria-label={`${profile.name} monogram`} className="grid h-28 w-28 shrink-0 place-items-center rounded-2xl bg-panel2 font-mono text-4xl font-semibold text-amber">
                  {profile.initials}
                </div>
              )}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Passenger</p>
                <p className="mt-1 text-xl font-semibold">{profile.name}</p>
                <p className="text-sm text-muted">{profile.location}</p>
              </div>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {stats.map((s) => (
                <div key={s.label} className="bg-panel p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{s.label}</dt>
                  <dd className="mt-1 font-mono text-3xl font-semibold text-amber">
                    <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </TiltCard>
        </Reveal>

        <div>
          <Reveal><p className="eyebrow">About</p></Reveal>
          <Reveal delay={0.05}><h2 id="about-title" className="h2 mt-3">Building things that work for more people.</h2></Reveal>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}><p>{p}</p></Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a>
              <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
