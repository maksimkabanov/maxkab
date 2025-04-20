import { NextResponse } from "next/server";
import { projects } from "@/app/data/resume";
import { Project, WithId } from "../types";

export async function GET() {
  try {
    // Проверяем, что projects существует и не пустой
    if (!projects || projects.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // Преобразуем проекты в формат WithId<Project>
    const projectsWithIds: WithId<Project>[] = projects.map(
      (project, index) => {
        // Убедимся, что все обязательные поля присутствуют
        const projectWithRequiredFields: Project = {
          name: project.name || `Project ${index + 1}`,
          startDate: project.startDate || "",
          endDate: project.endDate || "",
          description: project.description || "",
          highlights: project.highlights || [],
          technologies: project.technologies || [],
          url: project.url || "",
        };

        return {
          ...projectWithRequiredFields,
          id: (index + 1).toString(),
        };
      }
    );

    return NextResponse.json(projectsWithIds);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
