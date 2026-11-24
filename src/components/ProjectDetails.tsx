import { projects } from '../data/projects';
import { profile } from '../data/profile';
import { AmbientBackground } from './AmbientBackground';
import { Footer } from './Footer';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { ScrollProgress } from './ScrollProgress';
import { useEffect } from 'react';

const statusClass = { Completed: 'bg-[#e3f5ec] text-landed', Ongoing: 'bg-lav text-brand2', 'In development': 'bg-[#fdf1dc] text-warn' } as const;

export function ProjectDetails({ id }: { id: string }) {
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    document.title = project ? `${project.title} | ${profile.name}` : `Project not found | ${profile.name}`;
  }, [project]);

  if (!project) {
    return (
      <main className="container-x flex min-h-screen flex-col items-start justify-center gap-5">
        <p className="eyebrow">Project</p>
        <h1 className="h2">Project not found.</h1>
        <a href="/#work" className="btn btn-primary">Back to portfolio</a>
      </main>
    );
  }

  const index = projects.indexOf(project) + 1;

  return (
    <>
      <AmbientBackground />
      <ScrollProgress />
      <header id="top" className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-[28px] border border-white/70 bg-white/75 px-5 shadow-soft backdrop-blur-xl sm:h-[62px]">
          <a href="/#top" className="font-serif text-[22px] leading-none text-ink" aria-label={`${profile.name}, back to portfolio`}>
            Sanjida <em className="text-muted">Hossain</em>
          </a>
          <a href={profile.cvPath} download className="btn btn-primary !min-h-[42px] !px-4 !py-2">
            <Icon name="download" size={16} /><span className="hidden sm:inline">Download CV</span><span className="sm:hidden">CV</span>
          </a>
        </div>
      </header>
      <main id="main" className="relative min-h-[80svh] pb-16 pt-32 sm:pt-40">
        <div className="container-x">
          <a href="/#work" className="btn btn-ghost"><Icon name="arrow" size={16} />Back to projects</a>
          <Reveal>
            <article className="card mt-8 overflow-hidden">
              <div className="flex min-h-52 items-end justify-between gap-6 rounded-t-3xl bg-gradient-to-br from-lav to-lav2 p-7 sm:min-h-64 sm:p-10">
                <span aria-hidden="true" className="font-serif text-8xl italic leading-none text-brand/70 sm:text-9xl">{String(index).padStart(2, '0')}</span>
                <ul className="flex max-w-[65%] flex-wrap justify-end gap-2" aria-label="Technologies">
                  {project.stack.map((tech) => <li key={tech} className="rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-brand2">{tech}</li>)}
                </ul>
              </div>
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span>{project.kind}</span><span aria-hidden="true">·</span><span>{project.period}</span>
                  <span className={`pill ${statusClass[project.status]}`}>{project.status}</span>
                </div>
                <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-6xl">{project.title}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>
                <h2 className="mt-10 font-serif text-3xl">Project details</h2>
                <ul className="mt-5 max-w-3xl space-y-3">
                  {project.highlights.map((item) => <li key={item} className="flex gap-3 text-muted"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />{item}</li>)}
                </ul>
                {project.links.length > 0 && (
                  <div className="mt-9 flex flex-wrap gap-3">
                    {project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={`btn ${link.label === 'Live' ? 'btn-primary' : 'btn-ghost'}`}>{link.label}<Icon name="arrow" size={16} /></a>)}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
