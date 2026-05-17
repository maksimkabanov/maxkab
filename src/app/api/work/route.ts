import { NextResponse } from "next/server";
import { WorkExperience, WithId } from "../types";
import { RESUME_FROM_SERVER } from "@/app/data/resume";


export async function GET() {
  try {
    const workExperience: WithId<WorkExperience>[] = RESUME_FROM_SERVER.work?.map(
      (work, index) => ({
        ...work,
        id: (index + 1).toString(),
      })
    ) ?? [];

    return NextResponse.json(workExperience);
  } catch (error) {
    console.error("Error fetching work experience:", error);
    return NextResponse.json(
      { error: "Failed to fetch work experience" },
      { status: 500 }
    );
  }
}
