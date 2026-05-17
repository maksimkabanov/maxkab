import { SkillLevel } from "@/app/api/types";

export const RESUME_EMPTY = {
  basics: {
    name: "",
    label: "",
    image: "",
    email: "",
    phone: "",
    url: "",
    summary: "",
    location: {
      address: "",
      postalCode: "",
      city: "",
      countryCode: "",
      region: "",
    },
    profiles: [
      {
        network: "",
        username: "",
        url: "",
      },
    ],
  },
  work: [
    {
      name: "",
      position: "",
      url: "",
      startDate: "",
      endDate: "",
      description: "",
      accomplishments: "",
      technologies: [""],
      projects: [
        {
          name: "",
          description: "",
          accomplishments: "",
          technologies: [""],
        },
      ],
    },
  ],
  volunteer: [
    {
      organization: "",
      position: "",
      url: "",
      startDate: "",
      endDate: "",
      summary: "",
      highlights: [""],
    },
  ],
  education: [
    {
      institution: "",
      url: "",
      area: "",
      studyType: "",
      startDate: "",
      endDate: "",
      score: "",
      courses: [""],
    },
  ],
  awards: [
    {
      title: "",
      date: "",
      awarder: "",
      summary: "",
    },
  ],
  certificates: [
    {
      name: "",
      date: "",
      issuer: "",
      url: "",
    },
  ],
  publications: [
    {
      name: "",
      publisher: "",
      url: "",
      releaseDate: "",
      summary: "",
    },
  ],
  skills: [
    {
      name: "",
      level: SkillLevel.None,
      keywords: [""],
    },
  ],
  languages: [
    {
      language: "",
      fluency: "",
    },
  ],
  interests: [
    {
      name: "",
      keywords: [""],
    },
  ],
  references: [
    {
      name: "",
      reference: "",
    },
  ],
  projects: [
    {
      name: "",
      description: "",
      url: "",
      startDate: "",
      endDate: "",
      highlights: [""],
      technologies: [""],
    },
  ],
};