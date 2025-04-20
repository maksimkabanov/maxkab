import { NextResponse } from "next/server";
import info from "@/info/info";
import { WorkExperience, WithId } from "../types";

export async function GET() {
  try {
    const workExperience: WithId<WorkExperience>[] = info.work.map(
      (work, index) => ({
        ...work,
        id: (index + 1).toString(),
      })
    );

    return NextResponse.json(workExperience);
  } catch (error) {
    console.error("Error fetching work experience:", error);
    return NextResponse.json(
      { error: "Failed to fetch work experience" },
      { status: 500 }
    );
  }
}
