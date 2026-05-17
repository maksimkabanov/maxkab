export interface Location {
  id?: string;
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface Profile {
  id?: string;
  network: string;
  username: string;
  url: string;
}

export interface WorkProject {
  id?: string;
  name: string;
  description: string;
  accomplishments: string;
  technologies: string[];
}

export interface WorkExperience {
  id?: string;
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  description: string;
  accomplishments: string;
  technologies: string[];
  projects: WorkProject[];
}

export interface VolunteerExperience {
  id?: string;
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  id?: string;
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: string[];
}

export interface Award {
  id?: string;
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface Certificate {
  id?: string;
  name: string;
  date: string;
  issuer: string;
  url: string;
}

export interface Publication {
  id?: string;
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
}

export interface Skill {
  id?: string;
  name: string;
  level: SkillLevel;
  keywords?: string[];
  interestLevel?: SkillInterestLevel;
  notes?: string | null;
  numberOfYears?: string | null;
  lastUsed?: string | null;
}

export const MAX_SKILL_LEVEL = 4;
export const MAX_INTERES_LEVEL = 2;

export enum SkillLevel {
  None = '0 - None',
  Beginner = '1 - Beginner',
  Proficient = '2 - Proficient',
  Expert = '3 - Expert',
  Master = '4 - Master',
}

export enum SkillInterestLevel {
  No = '0 - No Interest',
  Some = '1 - Some Interest',
  High = '2 - High Interest',
}

export interface Skill {
  name: string;
  level: SkillLevel;
  keywords?: string[];
  interestLevel?: SkillInterestLevel;
  notes?: string | null;
  numberOfYears?: string | null;
  lastUsed?: string | null;
}

export interface Language {
  id?: string;
  language: string;
  fluency: string;
}

export interface Interest {
  id?: string;
  name: string;
  keywords: string[];
}

export interface Reference {
  id?: string;
  name: string;
  reference: string;
}

export interface Project {
  id?: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  url: string;
}

export interface Basics {
  id?: string;
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
}
export interface Resume {
  id?: string;
  basics: Basics;
  work: WorkExperience[];
  volunteer: VolunteerExperience[];
  education: Education[];
  awards: Award[];
  certificates: Certificate[];
  publications: Publication[];
  skills: Skill[];
  languages: Language[];
  interests: Interest[];
  references: Reference[];
  projects: Project[];
}

export type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;

export type WithId<T> = T & { id: string };

export type WithIdRecursive<T> = T extends Array<infer U>
  ? Array<
      WithIdRecursive<U> extends object
        ? WithIdRecursive<U> & { id: string }
        : WithIdRecursive<U>
    >
  : T extends object
  ? { [K in keyof T]: WithIdRecursive<T[K]> } & { id: string }
  : T;

export type ResumeReady = WithId<WithIdRecursive<Resume>>;
export type ResumeFromServer = DeepPartial<WithId<Resume>>;
