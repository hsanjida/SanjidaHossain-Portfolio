import { useId, useRef, useState, type FormEvent } from 'react';
import { profile } from '../data/profile';
import { validateContact, type ContactErrors, type ContactValues } from '../lib/validate';
import { Magnetic } from './ui/Magnetic';
import { Reveal } from './ui/Reveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

const TOPICS = ['Internship or job', 'Project collaboration', 'Question', 'Something else'];
const ENDPOINT = 'https://api.web3forms.com/submit';
const empty: ContactValues = { name: '', email: '', topic: '', message: '' };

export function Contact() {
  const id = useId();
  const [values, setValues] = useState<ContactValues>(empty);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const honeypot = useRef<HTMLInputElement>(null);
  const key = import.meta.env.VITE_WEB3FORMS_KEY;

  const set = (field: keyof ContactValues) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'loading') return;
    const found = validateContact(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    // Bots fill hidden fields. Pretend it worked and send nothing.
    if (honeypot.current?.checked) {
      setStatus('success');
      return;
    }
    if (!key) {
      setErrorMsg(`The contact form is not configured yet. Email me directly at ${profile.email}.`);
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject: `Portfolio: ${values.topic}`,
          from_name: 'Portfolio contact form',
          name: values.name.trim(),
          email: values.email.trim(),
          topic: values.topic,
          message: values.message.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
      if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');
      setStatus('success');
      setValues(empty);
    } catch {
      setErrorMsg(`Your message could not be sent. Try again, or email me at ${profile.email}.`);
      setStatus('error');
    }
  }

  const field = 'w-full rounded-xl border bg-panel2 px-4 py-3 text-paper placeholder:text-muted/70 transition-colors focus:border-amber focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-amber/40';
  const border = (f: keyof ContactValues) => (errors[f] ? 'border-[#ff7b7b]' : 'border-line');
  const Err = ({ f }: { f: keyof ContactValues }) =>
    errors[f] ? <p id={`${id}-${f}-err`} className="mt-1.5 text-sm text-[#ff9a9a]">{errors[f]}</p> : null;
  const aria = (f: keyof ContactValues) => ({
    'aria-invalid': errors[f] ? true : undefined,
    'aria-describedby': errors[f] ? `${id}-${f}-err` : undefined,
  });

  return (
    <section id="contact" aria-labelledby="contact-title" className="section">
      <div className="container-x">
        <Reveal><p className="eyebrow">Contact</p></Reveal>
        <Reveal delay={0.05}><h2 id="contact-title" className="h2 mt-3 max-w-2xl">Board the next flight with me.</h2></Reveal>
        <Reveal delay={0.1}><p className="mt-4 max-w-xl text-lg text-muted">I'm looking for an internship or entry-level role. Send a note and I'll reply by email.</p></Reveal>

        <Reveal delay={0.15} className="board mt-10 overflow-hidden">
          <div className="flex items-center justify-between border-b border-dashed border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted sm:px-8">
            <span>Boarding pass</span><span aria-hidden="true">DAC → YOU</span>
          </div>

          {status === 'success' ? (
            <div role="status" className="grid gap-3 px-5 py-14 text-center sm:px-8">
              <span aria-hidden="true" className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-landed/50 text-2xl text-landed">✓</span>
              <h3 className="text-2xl font-semibold">Message sent</h3>
              <p className="mx-auto max-w-md text-muted">Thanks. I'll reply to your email address soon.</p>
              <button type="button" className="btn btn-ghost mx-auto mt-2" onClick={() => setStatus('idle')}>Send another</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_260px]">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${id}-name`} className="mb-1.5 block text-sm font-medium">Name</label>
                  <input id={`${id}-name`} name="name" autoComplete="name" value={values.name} onChange={set('name')} className={`${field} ${border('name')}`} placeholder="Your name" {...aria('name')} />
                  <Err f="name" />
                </div>
                <div>
                  <label htmlFor={`${id}-email`} className="mb-1.5 block text-sm font-medium">Email</label>
                  <input id={`${id}-email`} name="email" type="email" autoComplete="email" value={values.email} onChange={set('email')} className={`${field} ${border('email')}`} placeholder="you@example.com" {...aria('email')} />
                  <Err f="email" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${id}-topic`} className="mb-1.5 block text-sm font-medium">Topic</label>
                  <select id={`${id}-topic`} name="topic" value={values.topic} onChange={set('topic')} className={`${field} ${border('topic')}`} {...aria('topic')}>
                    <option value="">Choose a topic</option>
                    {TOPICS.map((t) => (<option key={t} value={t}>{t}</option>))}
                  </select>
                  <Err f="topic" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={`${id}-message`} className="mb-1.5 block text-sm font-medium">Message</label>
                  <textarea id={`${id}-message`} name="message" rows={5} value={values.message} onChange={set('message')} className={`${field} ${border('message')} resize-y`} placeholder="What would you like to talk about?" {...aria('message')} />
                  <Err f="message" />
                </div>
                {/* Honeypot: hidden from people and assistive tech, bots tend to tick it. */}
                <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
                  <label>Do not check this box<input ref={honeypot} type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" /></label>
                </div>
              </div>

              <aside className="flex flex-col justify-between gap-6 rounded-xl border border-dashed border-line p-5">
                <dl className="space-y-4 text-sm">
                  <div><dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Passenger</dt><dd className="mt-1 font-medium">{profile.name}</dd></div>
                  <div><dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Email</dt><dd className="mt-1 break-all"><a className="underline decoration-line underline-offset-4 hover:text-amber" href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
                  <div><dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">Elsewhere</dt><dd className="mt-1 flex gap-4">
                    <a className="underline decoration-line underline-offset-4 hover:text-amber" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a>
                    <a className="underline decoration-line underline-offset-4 hover:text-amber" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
                  </dd></div>
                </dl>
                <div>
                  <Magnetic>
                    <button type="submit" disabled={status === 'loading'} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-70">
                      {status === 'loading' ? (<><span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-ink border-t-transparent" />Sending…</>) : 'Send message'}
                    </button>
                  </Magnetic>
                  <div role="alert" className="mt-3 min-h-[1.25rem] text-sm text-[#ff9a9a]">{status === 'error' ? errorMsg : ''}</div>
                </div>
              </aside>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
