import Link from "next/link";
import { basics } from "./data/resume";
import ResumeSection from "./components/ResumeSection";

export const metadata = {
  title: "Maksim Kabanov | Senior Frontend Engineer",
  description:
    "Portfolio website of Maksim Kabanov, Senior Frontend Engineer with over 15 years of experience",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {basics?.name}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-1">
              {basics?.label}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {basics?.location?.city}, {basics?.location?.region}
            </p>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="section mt-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {basics?.summary?.split(".").slice(0, 2).join(".") + "."}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {basics?.summary?.split(".").slice(2).join(".")}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-row items-center justify-center gap-4">
          <Link
            href="/about"
            className="inline-block font-bold text-gray-900 dark:text-white underline hover:text-gray-700 dark:hover:text-gray-300 transition duration-300"
          >
            View Full Resume
          </Link>
        </div>
      </section>

      <section className="section mt-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Resume Section */}
            <ResumeSection />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore my work places and experiences
                </p>
                <Link
                  href="/experience"
                  className="inline-block text-gray-900 dark:text-white underline hover:text-gray-700 dark:hover:text-gray-300 transition duration-300"
                >
                  My Experience
                </Link>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col justify-between">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore my portfolio of projects showcasing my technical
                  expertise and problem-solving abilities.
                </p>
                <Link
                  href="/projects"
                  className="inline-block text-gray-900 dark:text-white underline hover:text-gray-700 dark:hover:text-gray-300 transition duration-300"
                >
                  View Notable Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
