import { Company } from './company.entities';
import { Duty } from './duty.entities';

export type ProfessionalExperience = {
  key: number;
  position: string;
  description: string;
  company: Company;
  location: string;
  dateRange: string;
  duties: Duty[];
};
