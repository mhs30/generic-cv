import { StudyInfo } from './studyInfo.entities';

export type Study = {
  key: number;
  title: string;
  place: string;
  location: string;
  info: StudyInfo[];
};
