import { ResumeFromServer } from "@/app/api/types";
import ResumeData from "@/static/Maksim_Kabanov.json";
import textsData from "@/static/texts.json";
import { resumeObject } from "../api/infoHelpers";

export const RESUME_FROM_SERVER = resumeObject(ResumeData as ResumeFromServer);
export const texts = textsData;
