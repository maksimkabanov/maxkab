import { NextResponse } from "next/server";
import { Education, WithId } from "../types";
import { RESUME_FROM_SERVER } from "@/app/data/resume";

export async function GET() {
  try {
    const education: WithId<Education>[] = RESUME_FROM_SERVER.education?.map((edu, index) => ({
      ...edu,
      id: (index + 1).toString(),
    }));

    return NextResponse.json(education);
  } catch (error) {
    console.error("Error fetching education:", error);
    return NextResponse.json(
      { error: "Failed to fetch education" },
      { status: 500 }
    );
  }
}
