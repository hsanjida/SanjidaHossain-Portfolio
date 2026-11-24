export const profile = {
  name: 'Sanjida Hossain',
  title: 'Full Stack Developer',
  location: 'Dhaka, Bangladesh',
  timeZone: 'Asia/Dhaka',
  email: 'hsanjida085@gmail.com',
  availability: 'Open to internships and entry-level roles',
  tagline:
    'I build full-stack web applications with React, Next.js, Node.js and MySQL, and care about interfaces everyone can use.',
  summary:
    'Computer Science & Engineering student at United International University. I build full-stack web applications and an accessibility-focused browser extension, on a foundation of data structures, algorithms and object-oriented programming. I also have hands-on embedded systems experience with Arduino.',
  about: [
    'I study Computer Science & Engineering at United International University in Dhaka, with a CGPA of 3.55.',
    'My final year design project, DVAL, is a browser extension that recolors pages in real time for people with colour vision deficiency. I built its frontend dashboard.',
    'Outside coursework I build web apps in React and Next.js, and I wired up an Arduino boat that steers around obstacles. I am looking for an internship or an entry-level role where I can keep shipping.',
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
