import { professionalSkills, skillGroups, spokenLanguages } from '../data/skills';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container-x">
        <Reveal><p className="eyebrow">Skills</p></Reveal>
        <Reveal delay={0.05}><h2 id="skills-title" className="h2 mt-3 max-w-2xl">The tools I reach for.</h2></Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 0.07}>
              <TiltCard className="board h-full p-6">
                <div className="flex items-center justify-between border-b border-dashed border-line pb-4">
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                  <span className="pill border-line text-muted">{g.fare}</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (<li key={s} className="tag !text-sm !text-paper">{s}</li>))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="board p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Professional</p>
              <p className="mt-2 text-paper">{professionalSkills.join(' · ')}</p>
            </div>
            <div className="board p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Spoken languages</p>
              <p className="mt-2 text-paper">{spokenLanguages.join(' · ')}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
