import { NextResponse } from "next/server";
import info from "@/info/info";
import { Skill, WithId } from "../types";

export async function GET() {
  try {
    const skills: WithId<Skill>[] = info.skills.map((skill, index) => ({
      ...skill,
      id: (index + 1).toString(),
    }));

    return NextResponse.json(skills);
  } catch (error) {
    console.error("Error fetching skills:", error);
    return NextResponse.json(
      { error: "Failed to fetch skills" },
      { status: 500 }
    );
  }
}
