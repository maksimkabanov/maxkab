import { NextResponse } from "next/server";
import info from "@/info/info";

export async function GET() {
  try {
    return NextResponse.json(info);
  } catch (error) {
    console.error("Error fetching info:", error);
    return NextResponse.json(
      { error: "Failed to fetch info" },
      { status: 500 }
    );
  }
}
