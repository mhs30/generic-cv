import data from '../model/data/professionalExperience.json';
import { ProfessionalExperience } from '../model/entities/professionalExperience.entities';
export const getProfessionalExperience = (): ProfessionalExperience[] => {
  return data;
};
