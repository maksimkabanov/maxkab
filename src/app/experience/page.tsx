import Link from "next/link";
import { work } from "../data/resume";

export const metadata = {
  title: "Expericence | Maksim Kabanov",
  description: "Watch experience of Maksim Kabanov, Senior Frontend Developer",
};

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Work Experience
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
            {work && work.length > 0 ? (
              <div className="space-y-8">
                {work.map((job, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0"
                  >
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      {job.position} at {job.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-2">
                      {job.startDate} - {job.endDate}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line">
                      {job.description}
                    </p>
                    {job.accomplishments && (
                      <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                          Accomplishments
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                          {job.accomplishments}
                        </p>
                      </div>
                    )}
                    {job.technologies && job.technologies.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projects from work experience */}
                    {job.projects && job.projects.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                          Projects
                        </h4>
                        <div className="space-y-4">
                          {job.projects.map((project, projectIndex) => (
                            <div
                              key={projectIndex}
                              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
                            >
                              <h5 className="text-md font-medium text-gray-900 dark:text-white mb-2">
                                {project.name}
                              </h5>
                              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm whitespace-pre-line">
                                {project.description}
                              </p>
                              {project.accomplishments && (
                                <div className="mb-3">
                                  <h6 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                                    Accomplishments:
                                  </h6>
                                  <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">
                                    {project.accomplishments}
                                  </p>
                                </div>
                              )}
                              {project.technologies &&
                                project.technologies.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(
                                      (tech, techIndex) => (
                                        <span
                                          key={techIndex}
                                          className="px-2 py-1 bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs rounded-full"
                                        >
                                          {tech}
                                        </span>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">
                No work experience information available.
              </p>
            )}
          </div>
          <div className="mt-12 space-y-6 columns-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
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

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Interested in collaboration or have a project in mind?
                Let&apos;s connect and discuss how we can work together.
              </p>
              <Link
                href="/contact"
                className="inline-block text-gray-900 dark:text-white underline hover:text-gray-700 dark:hover:text-gray-300 transition duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
