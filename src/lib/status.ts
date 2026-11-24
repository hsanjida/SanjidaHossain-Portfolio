import type { ProjectStatus } from '../data/types';

export const statusStyle: Record<ProjectStatus, { pill: string; dot: string }> = {
  LANDED: { pill: 'border-landed/50 text-landed', dot: 'bg-landed' },
  'IN FLIGHT': { pill: 'border-flight/50 text-flight', dot: 'bg-flight' },
  BOARDING: { pill: 'border-amber/50 text-amber', dot: 'bg-amber' },
};
