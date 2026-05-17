import { ResumeFromServer } from "@/app/api/types";
import ResumeData from "@/static/Maksim_Kabanov.json";

export const resume: ResumeFromServer = ResumeData as ResumeFromServer;
import textsData from "@/static/texts.json";

export const { basics, work, education, skills, projects, languages } = resume;
export const texts = textsData;
