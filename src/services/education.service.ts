import data from '../model/data/education.json';
import { Education } from '../model/entities/education.entities';
export const getEducation = (): Education => data;
