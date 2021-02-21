import data from '../model/data/about.json';
import { About } from '../model/entities/about.entities';

export const getAbout = (): About => data;
