import { NextResponse } from "next/server";
import info from "@/info/info";

interface ContactResponse {
  email: string;
  phone: string;
  location: string;
  languages: string[];
  linkedin: string;
}

export async function GET() {
  try {
    const { basics, languages } = info;

    const response: ContactResponse = {
      email: basics.email,
      phone: basics.phone,
      location: `${basics.location.city}, ${basics.location.region}, ${basics.location.countryCode}`,
      languages: languages.map((lang) => `${lang.language} (${lang.fluency})`),
      linkedin: basics.url,
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
