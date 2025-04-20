import {
  DeepPartial,
  WithIdRecursive,
  Resume,
  ResumeFromServer,
  ResumeReady,
} from "./types";

export const emptyResume: Resume = {
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
      level: 0,
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

type TemplateMap = Record<string, unknown>;

export const extractTemplates = (
  obj: unknown,
  path: string[] = [],
  acc: TemplateMap = {}
): TemplateMap => {
  if (Array.isArray(obj)) {
    if (obj[0] !== undefined) {
      const fullPath = path.join(".");
      acc[fullPath] = obj[0];
      extractTemplates(obj[0], path, acc);
    }
    return acc;
  }

  if (obj && typeof obj === "object") {
    const fullPath = path.join(".");
    acc[fullPath] = obj;

    for (const key in obj) {
      extractTemplates(
        (obj as Record<string, unknown>)[key],
        [...path, key],
        acc
      );
    }
  }

  return acc;
};

export const emptyTemplates = extractTemplates(emptyResume);

export function makeWithIds<T>(
  input: DeepPartial<T>,
  template: T
): WithIdRecursive<T> {
  if (Array.isArray(template)) {
    const arrInput = (input as unknown[]) ?? [];
    return arrInput.map((item) =>
      makeWithIds(item ?? {}, (template as unknown[])[0])
    ) as WithIdRecursive<T>;
  }

  if (typeof template === "object" && template !== null) {
    const result: Record<string, unknown> = {};
    for (const key in template) {
      const defaultVal = (template as Record<string, unknown>)[key];
      const inputVal = (input as Record<string, unknown>)?.[key];

      if (key === "id") {
        result.id = inputVal ?? crypto.randomUUID();
      } else {
        result[key] = makeWithIds(inputVal, defaultVal);
      }
    }
    return result as WithIdRecursive<T>;
  }

  return (input === undefined ? template : input) as WithIdRecursive<T>;
}

export const resumeObject = (resume: ResumeFromServer = {}): ResumeReady => {
  return makeWithIds(resume, emptyResume);
};

export const stripIds = <T>(value: T): T => {
  if (Array.isArray(value)) {
    return value.map(stripIds) as T;
  }

  if (value && typeof value === "object") {
    const result = {} as { [K in keyof T]: T[K] };
    for (const key in value) {
      if (key === "id") continue;
      const k = key as keyof T;
      const v = value[k];
      result[k] = stripIds(v);
    }
    return result;
  }

  return value;
};

export const createEmpty = <T extends keyof typeof emptyTemplates>(
  path: T
): WithIdRecursive<(typeof emptyTemplates)[T]> => {
  return makeWithIds(
    {} as DeepPartial<(typeof emptyTemplates)[T]>,
    emptyTemplates[path]
  );
};
