import { Language } from './language.entities';
import { Study } from './study.entities';

export type Education = {
  studies: Study[];
  languages: Language[];
};
