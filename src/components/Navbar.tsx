import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { Icon } from './ui/Icon';

const ids = profile.nav.map((n) => n.id);

export function Navbar() {
  const active = useActiveSection(ids) || 'top';
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[28px] border border-white/70 bg-white/75 shadow-soft backdrop-blur-xl">
        <nav aria-label="Primary" className="flex h-14 items-center justify-between gap-3 pl-5 pr-2 sm:h-[62px]">
          <a href="#top" className="font-serif text-[22px] leading-none text-ink" aria-label="Sanjida Hossain, back to top">
            Sanjida <em className="text-muted">Hossain</em>
          </a>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {profile.nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} aria-current={active === n.id ? 'true' : undefined}
                  className={`flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${active === n.id ? 'bg-lav text-brand2' : 'text-muted hover:text-ink'}`}>
                  <Icon name={n.icon} size={16} />{n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href={profile.cvPath} download className="btn btn-primary !min-h-[42px] !px-4 !py-2">
              <Icon name="download" size={16} /><span className="hidden sm:inline">Download CV</span><span className="sm:hidden">CV</span>
            </a>
            <button ref={toggleRef} type="button" className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white lg:hidden"
              aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
              <Icon name={open ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <m.div id="mobile-menu" className="overflow-hidden border-t border-line lg:hidden"
              initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }} transition={{ duration: 0.22 }}>
              <ul className="flex flex-col gap-1 p-3">
                {profile.nav.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} onClick={() => setOpen(false)} aria-current={active === n.id ? 'true' : undefined}
                      className={`flex min-h-[48px] items-center gap-3 rounded-2xl px-4 font-medium ${active === n.id ? 'bg-lav text-brand2' : 'text-ink'}`}>
                      <Icon name={n.icon} />{n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
