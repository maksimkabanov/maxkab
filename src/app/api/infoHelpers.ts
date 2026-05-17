import { RESUME_EMPTY } from "@/static/emptyResume";
import {
  DeepPartial,
  WithIdRecursive,
  ResumeFromServer,
  ResumeReady,
} from "./types";

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

export const emptyTemplates = extractTemplates(RESUME_EMPTY);

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
  return makeWithIds(resume, RESUME_EMPTY);
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
