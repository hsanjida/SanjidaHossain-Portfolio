import { m, useReducedMotion } from 'framer-motion';
import { profile } from '../data/profile';
import { Icon } from './ui/Icon';
import { Magnetic } from './ui/Magnetic';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } } };

export function Hero() {
  const reduce = useReducedMotion();
  const [first, ...rest] = profile.name.split(' ');
  const socials = [
    { label: 'GitHub', href: profile.links.github, icon: 'github', external: true },
    { label: 'LinkedIn', href: profile.links.linkedin, icon: 'linkedin', external: true },
    { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail', external: false },
  ];

  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] items-center pb-14 pt-32 sm:pt-36">
      <m.div className="container-x grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]" variants={container} initial={reduce ? false : 'hidden'} animate="show">
        <div>
          <m.p variants={item} className="eyebrow">Portfolio &amp; resume</m.p>
          <m.h1 variants={item} id="hero-title" className="display mt-6 text-[clamp(64px,13vw,132px)]">
            <span className="block text-ink">{first}</span>
            <em className="block text-[#4a4655]">{rest.join(' ')}</em>
            <span className="sr-only">, {profile.title}</span>
          </m.h1>

          <m.div variants={item} className="mt-8 inline-flex max-w-full items-center gap-4 rounded-full bg-brand px-3 py-3 pr-6 text-white shadow-soft">
            <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/25"><span className="h-2.5 w-2.5 rounded-full bg-white" /></span>
            <span className="text-base font-semibold sm:text-lg">{profile.title}</span>
            <span aria-hidden="true" className="hidden h-6 w-px bg-white/30 sm:block" />
            <span className="hidden font-serif text-lg italic text-white/85 sm:inline">React &amp; Next.js</span>
          </m.div>

          <m.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</m.p>

          <m.ul variants={item} className="mt-8 flex flex-wrap gap-3" aria-label="Links">
            {socials.map((s) => (
              <li key={s.label}>
                <Magnetic>
                  <a href={s.href} {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="btn bg-brand2 !px-5 text-white hover:bg-ink">
                    <Icon name={s.icon} size={18} />{s.label}{s.external && <span className="sr-only"> (opens in a new tab)</span>}
                  </a>
                </Magnetic>
              </li>
            ))}
          </m.ul>
        </div>

        <m.div variants={item} className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:justify-self-end">
          <div aria-hidden="true" className="dots absolute -left-24 top-6 h-[360px] w-[360px] opacity-30 sm:-left-32 sm:h-[460px] sm:w-[460px]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-lav2 shadow-soft">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.photoAlt} width={380} height={475} decoding="async" className="h-full w-full object-cover" />
            ) : (
              <div role="img" aria-label={`${profile.name} monogram`} className="grid h-full w-full place-items-center bg-gradient-to-b from-lav2 to-[#c9bde6]">
                <span className="font-serif text-[150px] italic leading-none text-brand2/80">{profile.initials}</span>
              </div>
            )}
            <p role="status" className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-sm font-semibold shadow-sm">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-landed" />Open to internships
            </p>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
