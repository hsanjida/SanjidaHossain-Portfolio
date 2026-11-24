import { useEffect, useState } from 'react';

/** Returns the id of the section currently crossing the middle of the viewport. */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState('');
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    const onTop = () => {
      if (window.scrollY < 200) setActive('');
    };
    window.addEventListener('scroll', onTop, { passive: true });
    return () => {
      obs.disconnect();
      window.removeEventListener('scroll', onTop);
    };
  }, [ids]);
  return active;
}
