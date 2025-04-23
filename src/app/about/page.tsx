import { basics, education, skills } from "../data/resume";

// Группируем навыки по категориям
const groupedSkills = {
  frontend:
    skills?.filter(
      (skill) =>
        skill?.name &&
        [
          "React.js",
          "Angular",
          "TypeScript",
          "JavaScript",
          "Functional Programming",
          "State Management",
          "React Native",
          "UI Frameworks",
        ].some((term) => skill.name?.includes(term))
    ) || [],
  testing:
    skills?.filter(
      (skill) =>
        skill?.name &&
        ["Cypress", "Jest"].some((term) => skill.name?.includes(term))
    ) || [],
  backend:
    skills?.filter(
      (skill) =>
        skill?.name &&
        ["Node.js", "API Integration", "Firebase"].some((term) =>
          skill.name?.includes(term)
        )
    ) || [],
  tools:
    skills?.filter(
      (skill) =>
        skill?.name &&
        [
          "PDF",
          "Excel",
          "Architecture",
          "Performance",
          "Problem Solving",
          "Mentoring",
          "Product",
          "Agile",
        ].some((term) => skill.name?.includes(term))
    ) || [],
};

export const metadata = {
  title: "About Me | Maksim Kabanov",
  description:
    "Learn more about Maksim Kabanov, Senior Frontend Developer with over 15 years of experience",
};

export const dynamic = "force-dynamic";

export default async function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h1>

          {/* Основная информация */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              {basics?.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 whitespace-pre-line">
              {basics?.summary}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {basics?.email && (
                    <li>
                      <span className="font-medium">Email:</span>{" "}
                      {basics?.email}
                    </li>
                  )}
                  {basics?.phone && (
                    <li>
                      <span className="font-medium">Phone:</span>{" "}
                      {basics?.phone}
                    </li>
                  )}
                  <li>
                    <span className="font-medium">Location:</span>{" "}
                    {basics?.location?.city}, {basics?.location?.region}
                  </li>
                  <li>
                    <span className="font-medium">LinkedIn:</span>{" "}
                    <a
                      href={basics?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {basics?.url}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                  Education
                </h3>
                {education && education.length > 0 ? (
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    {education.map((edu, index) => (
                      <li key={index}>
                        <span className="font-medium">{edu.institution}</span>
                        <br />
                        <span>
                          {edu.studyType} in {edu.area}
                        </span>
                        <br />
                        <span>
                          {edu.startDate} - {edu.endDate}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    No education information available.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Навыки */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2">
                  {groupedSkills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
                  Testing
                </h3>
                <div className="flex flex-wrap gap-2">
                  {groupedSkills.testing.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
                  Backend & API
                </h3>
                <div className="flex flex-wrap gap-2">
                  {groupedSkills.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">
                  Tools & Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {groupedSkills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
