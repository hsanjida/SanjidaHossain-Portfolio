export type ProjectStatus = 'Completed' | 'Ongoing' | 'In development';

export interface ProjectLink { label: string; href: string }

export interface Project {
  id: string;
  title: string;
  kind: string;
  status: ProjectStatus;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
}

export interface SkillGroup { title: string; items: string[] }

export interface ExperienceEntry {
  period: string;
  title: string;
  place: string;
  detail: string;
  tags: string[];
}

export interface EducationEntry {
  period: string;
  title: string;
  place: string;
  detail: string;
  tags: string[];
}

export interface Stat { label: string; value: number; decimals?: number; suffix?: string }

export interface Faq { q: string; a: string }
