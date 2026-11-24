export interface ContactValues {
  name: string;
  email: string;
  topic: string;
  message: string;
}
export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(v: ContactValues): ContactErrors {
  const e: ContactErrors = {};
  if (v.name.trim().length < 2) e.name = 'Enter your name (at least 2 characters).';
  if (!EMAIL.test(v.email.trim())) e.email = 'Enter a valid email address, like name@example.com.';
  if (!v.topic) e.topic = 'Choose what your message is about.';
  const len = v.message.trim().length;
  if (len < 10) e.message = 'Write at least 10 characters so I know how to help.';
  else if (len > 2000) e.message = 'Keep the message under 2000 characters.';
  return e;
}
