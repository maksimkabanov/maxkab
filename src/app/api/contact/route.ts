import { RESUME_FROM_SERVER } from "@/app/data/resume";
import { NextResponse } from "next/server";

interface ContactResponse {
  email: string;
  phone: string;
  location: string;
  languages: string[];
  linkedin: string;
}

export async function GET() {
  try {
    const response: ContactResponse = {
      email: RESUME_FROM_SERVER.basics?.email,
      phone: RESUME_FROM_SERVER.basics?.phone,
      location: `${RESUME_FROM_SERVER.basics?.location.city}, ${RESUME_FROM_SERVER.basics?.location.region}, ${RESUME_FROM_SERVER.basics?.location.countryCode}`,
      languages: RESUME_FROM_SERVER.languages?.map((lang) => `${lang.language} (${lang.fluency})`) ?? [],
      linkedin: RESUME_FROM_SERVER.basics?.url,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact info" },
      { status: 500 }
    );
  }
}
