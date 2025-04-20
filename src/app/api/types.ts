export interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface WorkProject {
  name: string;
  description: string;
  accomplishments: string;
  technologies: string[];
}

export interface WorkExperience {
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
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string[];
}

export interface Education {
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
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface Certificate {
  name: string;
  date: string;
  issuer: string;
  url: string;
}

export interface Publication {
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
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

export type SkillLevel = 0 | 1 | 2 | 3 | 4;
export const MAX_SKILL_LEVEL = 4;

export type SkillInterestLevel = 0 | 1 | 2;
export const MAX_INTERES_LEVEL = 2;

export interface Language {
  language: string;
  fluency: string;
}

export interface Interest {
  name: string;
  keywords: string[];
}

export interface Reference {
  name: string;
  reference: string;
}

export interface Project {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string[];
  technologies: string[];
  url: string;
}

export interface Basics {
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
