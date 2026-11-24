import type { Project } from './types';

export const projects: Project[] = [
  {
    code: 'DV 101',
    title: 'DVAL: Dynamic Visual Accessibility Layer',
    kind: 'Final Year Design Project',
    status: 'IN FLIGHT',
    period: 'Ongoing',
    summary:
      'A browser extension for real-time, personalized color correction for users with Color Vision Deficiency. Built by a team of five under faculty supervision.',
    highlights: [
      'Developed the DeepCVD frontend: an interactive dashboard in HTML and JavaScript, backed by a Flask API.',
      'Includes an Ishihara color-vision test and a real-time recoloring studio.',
    ],
    stack: ['HTML', 'JavaScript', 'Flask API'],
    links: [
      { label: 'Live', href: 'https://cvd-result-ui.vercel.app' },
      { label: 'Code', href: 'https://github.com/hsanjida/CVD-Result-UI' },
    ],
  },
  {
    code: 'WC 204',
    title: 'We Can Change: NGO Volunteer Platform',
    kind: 'Community platform',
    status: 'BOARDING',
    period: 'In development',
    summary:
      'A community and volunteer platform for an NGO, organized into five wings: Education, Health, Sports, Culture and Heritage.',
    highlights: [
      'Volunteer sign-up and attendance tracking.',
      'Admin panel and community issue reporting.',
    ],
    stack: ['Next.js'],
    links: [{ label: 'Code', href: 'https://github.com/hsanjida/WCC_Web' }],
  },
  {
    code: 'DS 312',
    title: 'Dev Stack Builder',
    kind: 'Interactive web app',
    status: 'LANDED',
    period: 'Shipped',
    summary:
      'An interactive React app for browsing 12 technologies across frontend, backend, database and DevOps, then assembling a personalized stack.',
    highlights: [
      'React hooks drive a real-time stack sidebar.',
      'Toast notifications with React Toastify.',
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
    code: 'AB 427',
    title: 'Autonomous Boat',
    kind: 'Embedded systems',
    status: 'LANDED',
    period: 'Completed',
    summary:
      'An Arduino-based boat with obstacle detection and avoidance that navigates between two locations.',
    highlights: ['Obstacle detection and avoidance in embedded code.'],
    stack: ['Arduino', 'Embedded Systems'],
    links: [],
  },
];
