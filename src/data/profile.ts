export const profile = {
  name: 'Sanjida Hossain',
  title: 'Computer Science & Engineering Student',
  location: 'North Badda, Dhaka',
  timeZone: 'Asia/Dhaka',
  email: 'hsanjida085@gmail.com',
  phone: '01880369094',
  availability: 'Seeking an internship or entry-level software role',
  tagline:
    'Computer Science & Engineering student with software development and accessibility project experience, plus hands-on embedded systems experience with Arduino.',
  summary:
    'Computer Science & Engineering student with software development experience, an interest in accessibility, and hands-on embedded systems experience with Arduino. Seeking an internship or entry-level software role.',
  about: [
    'I am studying Computer Science & Engineering at United International University. My current CGPA is 3.64.',
    'For DVAL, a team project developed under faculty supervision, I developed the DeepCVD frontend dashboard for a color vision accessibility tool.',
    'My projects include web applications and an Arduino autonomous boat. I am seeking an internship or entry-level software role.',
  ],
  // Put a photo at public/images/profile.webp and set this path to use it instead of the monogram.
  photo: null as string | null,
  photoAlt: 'Portrait of Sanjida Hossain',
  initials: 'SH',
  links: {
    github: 'https://github.com/hsanjida',
    linkedin: 'https://www.linkedin.com/in/sanjida-pushpo',
  },
  nav: [
    { id: 'top', label: 'Home', icon: 'home' },
    { id: 'experience', label: 'Experience', icon: 'briefcase' },
    { id: 'work', label: 'Work', icon: 'layers' },
    { id: 'skills', label: 'Skills', icon: 'star' },
    { id: 'faq', label: 'FAQ', icon: 'help' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ],
  cvPath: '/Sanjida-Hossain-CV.pdf',
} as const;
