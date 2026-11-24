import type { SkillGroup } from './types';

export const skillGroups: SkillGroup[] = [
  {
    fare: 'Class A',
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'JavaScript', 'Python (basic)'],
  },
  {
    fare: 'Class B',
    title: 'Web & Databases',
    items: ['React', 'Next.js', 'Vite', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Tailwind CSS', 'MySQL'],
  },
  {
    fare: 'Class C',
    title: 'Tools & Hardware',
    items: ['Git', 'GitHub', 'Figma', 'Arduino', 'LaTeX'],
  },
  {
    fare: 'Class D',
    title: 'Core Concepts',
    items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Software Engineering'],
  },
];

export const spokenLanguages = ['Bangla', 'English', 'Hindi'];
export const professionalSkills = ['Verbal & written communication', 'Team collaboration', 'Time management'];
