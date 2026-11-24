import { useEffect, useState } from 'react';

/** Live HH:MM time in a given IANA time zone. Updates once a second while the tab is visible. */
export function useClock(timeZone: string): string {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = window.setInterval(() => {
      if (!document.hidden) setTime(fmt());
    }, 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);
  return time;
}
