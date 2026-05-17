import { NextResponse } from "next/server";
import { RESUME_FROM_SERVER } from "@/app/data/resume";
import { Project, WithId } from "../types";

export async function GET() {
  try {
    // Check that projects exist and are not empty
    if (!RESUME_FROM_SERVER.projects || RESUME_FROM_SERVER.projects.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // Transform projects into WithId<Project> format
    const projectsWithIds: WithId<Project>[] = RESUME_FROM_SERVER.projects.map(
      (project, index) => {
        // Ensure all required fields are present
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
