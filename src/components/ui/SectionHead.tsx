import { Reveal } from './Reveal';

export function SectionHead({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div>
      <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
      <Reveal delay={0.05}><h2 id={id} className="h2 mt-4 max-w-2xl">{title}</h2></Reveal>
      {intro && <Reveal delay={0.1}><p className="mt-4 max-w-xl text-lg text-muted">{intro}</p></Reveal>}
    </div>
  );
}
