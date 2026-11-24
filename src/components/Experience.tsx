import { education } from '../data/education';
import { experience } from '../data/experience';
import { Reveal } from './ui/Reveal';
import { SectionHead } from './ui/SectionHead';

interface Row { period: string; title: string; place: string; detail: string; tags: string[] }

function List({ label, rows }: { label: string; rows: Row[] }) {
  return (
    <div>
      <Reveal><h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-muted">{label}</h3></Reveal>
      <ol className="space-y-4">
        {rows.map((r, i) => (
          <Reveal as="li" key={r.title + r.place} delay={i * 0.06}>
            <article className="card grid gap-3 p-6 sm:grid-cols-[140px_1fr] sm:gap-8 sm:p-8">
              <p className="font-serif text-2xl italic text-brand">{r.period}</p>
              <div>
                <h4 className="text-xl font-semibold tracking-tight">{r.title}</h4>
                <p className="mt-1 text-base font-medium text-brand2">{r.place}</p>
                <p className="mt-3 text-muted">{r.detail}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">{r.tags.map((t) => (<li key={t} className="tag">{t}</li>))}</ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title" className="section">
      <div className="container-x">
        <SectionHead id="exp-title" eyebrow="Experience" title="Volunteering, recognition and where I studied." />
        <div className="mt-12 space-y-14">
          <List label="Experience & awards" rows={experience} />
          <List label="Education" rows={education} />
        </div>
      </div>
    </section>
  );
}
