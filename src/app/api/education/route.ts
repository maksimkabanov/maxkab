import { NextResponse } from "next/server";
import info from "@/info/info";
import { Education, WithId } from "../types";

export async function GET() {
  try {
    const education: WithId<Education>[] = info.education.map((edu, index) => ({
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
