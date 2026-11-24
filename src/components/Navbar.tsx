import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { profile } from '../data/profile';
import { useActiveSection } from '../hooks/useActiveSection';

const ids = profile.nav.map((n) => n.id);

export function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur' : ''}`}>
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-wider text-paper" aria-label="Sanjida Hossain, back to top">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-panel2 text-amber">SH</span>
          <span className="hidden sm:inline">SANJIDA HOSSAIN</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {profile.nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors hover:text-paper ${active === n.id ? 'text-paper' : 'text-muted'}`}
              >
                {n.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded bg-amber transition-transform duration-300 ${active === n.id ? 'scale-x-100' : 'scale-x-0'}`}
                />
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href="#contact" className="btn btn-primary !min-h-[40px] !py-2">Get in touch</a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-panel md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M4 4l12 12M16 4L4 16" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="border-t border-line bg-ink md:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {profile.nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === n.id ? 'true' : undefined}
                    className={`flex min-h-[48px] items-center justify-between rounded-xl px-4 font-medium ${active === n.id ? 'bg-panel text-amber' : 'text-paper'}`}
                  >
                    {n.label}
                    <span aria-hidden="true" className="font-mono text-xs text-muted">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
