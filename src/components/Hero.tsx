import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { useClock } from '../hooks/useClock';
import { Magnetic } from './ui/Magnetic';
import { SplitFlap } from './ui/SplitFlap';
import { statusStyle } from '../lib/status';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } } };

export function Hero() {
  const reduce = useReducedMotion();
  const time = useClock(profile.timeZone);
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center pb-16 pt-28">
      <motion.div className="container-x" variants={container} initial={reduce ? false : 'hidden'} animate="show">
        <motion.p variants={item} className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-1">
          <span>Departures</span>
          <span className="text-muted">
            {profile.location.split(',')[0]} <time className="text-paper" dateTime={time}>{time}</time>
          </span>
        </motion.p>

        <motion.h1 variants={item} id="hero-title" className="mt-6">
          <span className="sr-only">{profile.name}, {profile.title}</span>
          <span aria-hidden="true" className="flex flex-col gap-3">
            <SplitFlap text={first} tileClass="h-[44px] w-[30px] text-xl sm:h-[72px] sm:w-[50px] sm:text-4xl lg:h-[92px] lg:w-[64px] lg:text-5xl" />
            <SplitFlap text={rest.join(' ')} tileClass="h-[44px] w-[30px] text-xl sm:h-[72px] sm:w-[50px] sm:text-4xl lg:h-[92px] lg:w-[64px] lg:text-5xl" startDelay={700} />
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-8 font-mono text-sm font-medium uppercase tracking-[0.18em] text-amber sm:text-base">
          {profile.title}
        </motion.p>
        <motion.p variants={item} className="mt-5 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <Magnetic><a href="#projects" className="btn btn-primary">View projects</a></Magnetic>
          <Magnetic><a href="#contact" className="btn btn-ghost">Contact me</a></Magnetic>
          <span className="pill ml-1 border-amber/50 text-amber" role="status">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber" />
            Boarding · {profile.availability}
          </span>
        </motion.div>

        <motion.div variants={item} className="board mt-14 overflow-hidden">
          <div className="flex items-center justify-between border-b border-line px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted sm:px-6">
            <span>Next departures</span>
            <span aria-hidden="true">Code · Destination · Status</span>
          </div>
          <ul>
            {projects.map((p) => {
              const s = statusStyle[p.status];
              return (
                <li key={p.code}>
                  <a href="#projects" className="flex items-center gap-3 border-b border-line px-4 py-3 text-sm last:border-b-0 hover:bg-panel2 sm:gap-6 sm:px-6">
                    <span className="w-14 shrink-0 font-mono text-amber">{p.code}</span>
                    <span className="min-w-0 flex-1 truncate font-medium">{p.title.split(':')[0]}</span>
                    <span className={`pill ${s.pill}`}>{p.status}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
