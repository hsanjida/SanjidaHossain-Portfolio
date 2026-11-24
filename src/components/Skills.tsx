import { professionalSkills, skillGroups, spokenLanguages } from '../data/skills';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section">
      <div className="container-x">
        <SectionHead id="skills-title" eyebrow="Skills & tools" title="The tools I reach for." />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal as="li" key={g.title} delay={(i % 2) * 0.07}>
              <div className="card h-full p-6 sm:p-8">
                <h3 className="font-serif text-3xl">{g.title}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => (<li key={s} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm font-medium">{s}</li>))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.1}>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="card p-6"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Professional</p><p className="mt-2">{professionalSkills.join(' · ')}</p></div>
            <div className="card p-6"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Spoken languages</p><p className="mt-2">{spokenLanguages.join(' · ')}</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
