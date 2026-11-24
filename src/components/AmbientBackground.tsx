import { useEffect, useRef } from 'react';

/** Soft lavender blobs drifting slowly. CSS transforms only, paused while the tab is hidden. Static for reduced motion. */
export function AmbientBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => el.classList.toggle('bg-paused', document.hidden);
    document.addEventListener('visibilitychange', on);
    return () => document.removeEventListener('visibilitychange', on);
  }, []);
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper">
      <div className="blob blob-a -left-40 -top-40 h-[520px] w-[520px] bg-[#d9cdf5]/70" />
      <div className="blob blob-b -right-32 top-1/3 h-[460px] w-[460px] bg-[#e7dcff]/80" />
      <div className="blob blob-a bottom-[-200px] left-1/3 h-[480px] w-[480px] bg-[#efe6ff]/80" />
    </div>
  );
}
