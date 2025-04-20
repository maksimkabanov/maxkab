import Link from "next/link";
import { basics, work, skills } from "./data/resume";

export const metadata = {
  title: "Maksim Kabanov | Senior Frontend Engineer",
  description:
    "Portfolio website of Maksim Kabanov, Senior Frontend Engineer with over 15 years of experience",
};

export default function Home() {
  // Получаем последний опыт работы
  const latestWork = work && work.length > 0 ? work[0] : null;

  // Получаем основные навыки
  const mainSkills =
    skills?.filter((skill) => skill?.level && skill.level >= 3) || [];
  const skillNames = mainSkills.map((skill) => skill.name).join(", ");

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
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
              {skillNames}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
              {latestWork?.description?.split(".")[0]}
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
      </section>

      {/* Experience Section */}
      <section className="section mt-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Experience
            </h2>
            <div className="space-y-8">
              {work &&
                work.slice(0, 2).map((job, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {job.position}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {job.name}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {job.startDate} - {job.endDate}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {job.description}
                    </p>
                    {job.technologies && job.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.slice(0, 5).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {job.technologies.length > 5 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs rounded-full">
                            +{job.technologies.length - 5} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
              >
                View Full Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section mt-8">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="text-center mb-8">
              <Link
                href="/projects"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section mt-8 mb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Interested in working together? Feel free to reach out!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
