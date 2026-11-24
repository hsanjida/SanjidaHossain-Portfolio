import type { Stat } from './types';

const START_YEAR = 2022;

export const stats: Stat[] = [
  { label: 'CGPA', value: 3.55, decimals: 2 },
  { label: 'Projects', value: 4 },
  { label: 'Years in CSE', value: new Date().getFullYear() - START_YEAR },
  { label: 'Events volunteered', value: 2 },
];
