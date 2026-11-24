import type { Project } from './types.ts';

export const projects: Project[] = [
  {
    id: 'dval',
    title: 'DVAL: Dynamic Visual Accessibility Layer',
    kind: 'Team project',
    status: 'Ongoing',
    period: 'Ongoing',
    summary:
      'A team of five is developing a real-time, personalized color correction tool for people with Color Vision Deficiency (CVD), under faculty supervision.',
    highlights: [
      'Developed the DeepCVD frontend: an interactive dashboard using HTML and JavaScript with a Flask API.',
      'The dashboard includes an Ishihara color-vision test and a real-time recoloring studio.',
    ],
    stack: ['HTML', 'JavaScript', 'Flask API'],
    links: [
      { label: 'Live', href: 'https://cvd-result-ui.vercel.app' },
      { label: 'Code', href: 'https://github.com/hsanjida/CVD-Result-UI' },
    ],
  },
  {
    id: 'wcc',
    title: 'We Can Change: NGO Volunteer Platform',
    kind: 'Community platform',
    status: 'In development',
    period: 'In development',
    summary:
      'A community and volunteer platform for an NGO, organized into five wings: Education, Health, Sports, Culture and Heritage.',
    highlights: [
      'Volunteer sign-up and attendance tracking.',
      'Admin panel and community issue reporting.',
    ],
    stack: ['Next.js'],
    links: [
      { label: 'Live', href: 'https://wcc-web-chi.vercel.app' },
      { label: 'Code', href: 'https://github.com/hsanjida/WCC_Web' },
    ],
  },
  {
    id: 'devstack',
    title: 'Dev Stack Builder',
    kind: 'Interactive web app',
    status: 'Completed',
    period: 'Live',
    summary:
      'An interactive React app for browsing technologies and assembling a personalized development stack.',
    highlights: [
      'Built with React, Vite and Tailwind CSS.',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS'],
    links: [
      {
        label: 'Live',
        href: 'https://agent-6aa7a0f8c5c59a2b84dc1--dulcet-chaja-4a7ada.netlify.app',
      },
      { label: 'Code', href: 'https://github.com/hsanjida/DevStack' },
    ],
  },
  {
    id: 'boat',
    title: 'Autonomous Boat',
    kind: 'Embedded systems',
    status: 'Completed',
    period: 'Embedded',
    summary:
      'An Arduino-based autonomous boat project.',
    highlights: ['Built with Arduino and embedded systems.'],
    stack: ['Arduino', 'Embedded Systems'],
    links: [],
  },
];
