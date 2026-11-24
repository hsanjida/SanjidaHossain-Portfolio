export type ProjectStatus = 'LANDED' | 'IN FLIGHT' | 'BOARDING';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  code: string;
  title: string;
  kind: string;
  status: ProjectStatus;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
}

export interface SkillGroup {
  fare: string;
  title: string;
  items: string[];
}

export interface TimelineEntry {
  code: string;
  period: string;
  title: string;
  place: string;
  detail: string;
  type: 'Education' | 'Volunteer' | 'Award';
}

export interface Stat {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
}
