import Link from "next/link";

const skills = {
  frontend: [
    "React.js",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Functional Programming",
    "State Management (Redux, Signals, NgRx)",
    "React Native",
    "UI Frameworks (Fluent UI, PrimeNG, Material UI)",
  ],
  testing: ["Cypress", "Jest"],
  backend: ["Node.js", "API Integration (REST, OpenAPI)", "Firebase Funtions"],
  tools: [
    "PDF & Excel Generation (jsPDF, ExcelJS)",
    "Architecture & Design Patterns",
    "Performance Optimization",
    "Problem Solving",
    "Mentoring & Technical Leadership",
    "Product Thinking & UX Awareness",
    "Agile & Remote Collaboration",
  ],
};

const experience = [
  {
    period: "2022-04 - 2025-04",
    title: "Senior Frontend Engineer",
    company: "Janea Systems",
    description:
      "Worked across multiple high-profile enterprise projects in greenfield and legacy environments, delivering performant UIs and reusable architecture.\n\n" +
      "• Built staffing dashboard in Angular 18 with Signals, OnPush change detection, and drag-and-drop timelines. Replaced manual planning with a smart assignment system, increasing efficiency by ~70%. Enabled dynamic PDF/Excel export — reduced time to generate 60 CVs from 7–10 min to 20 sec, with support for multiple templates.\n" +
      "• Refactored Microsoft BI Report Viewer: introduced table virtualization for 10,000+ row datasets, reducing page load time from indefinite to a few seconds. Redesigned border rendering logic to eliminate visual glitches and match Report Builder behavior, significantly improving user satisfaction.\n" +
      "• Led frontend architecture and implementation of F5 Policy Supervisor using React, Redux Toolkit, and OpenAPI. Delivered MVP in 4 months.\n" +
      "• Wrote extensive Cypress and Jest tests. Collaborated with product and design in tight feedback loops.",
    technologies: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Angular 18",
      "Signals",
      "OpenAPI",
      "Jest",
      "Cypress",
      "jsPDF",
      "ExcelJS",
    ],
  },
  {
    period: "2018-01 - 2022-03",
    title: "Senior Frontend Developer",
    company: "Sberbank Technologies",
    description:
      "Delivered modular internal systems using React and React Native, collaborating across distributed teams and integrating with legacy environments.\n\n" +
      "• Developed a modular React-based frontend with dynamic loading via DataBus, supporting internal and external environments. Led integration of third-party components and deployed the system organization-wide.\n" +
      "• Maintained and evolved a React Native app for appointment and contract handling. Migrated legacy architecture to modern Redux-based stack, resolving critical bugs and improving app performance and stability.\n" +
      "• Built reusable frontend modules for internal appointment workflows, streamlining business processes and improving time-to-delivery.",
    technologies: [
      "React",
      "React Native",
      "Redux",
      "Thunk",
      "TypeScript",
      "Webpack",
      "REST",
    ],
  },
  {
    period: "2012-02 - 2017-12",
    title: "Lead Full-Stack Developer",
    company: "Time and Space",
    description:
      "Led full-stack development of custom analytics and reporting systems for enterprise clients, with deep integration into backend infrastructure and high-performance UI components.\n\n" +
      "• Built a Gantt chart system on SlickGrid with custom rendering, real-time filtering, and print-to-PDF capabilities, enabling project teams to manage timelines with precision.\n" +
      "• Developed interactive dashboards with d3.js, jQuery, and ExtJS, integrating multiple databases (PostgreSQL, Oracle, MSSQL) and implementing automated reporting logic.\n" +
      "• Implemented caching strategies and refactored PHP backend for better performance and long-term maintainability.\n" +
      "• Added custom visual elements like maps and advanced widgets, improving UX for complex business intelligence tools.\n" +
      "• Led architectural decisions, coordinated across teams, and maintained strong data consistency across systems.",
    technologies: [
      "JavaScript",
      "SlickGrid",
      "ExtJS",
      "d3.js",
      "PostgreSQL",
      "MSSQL",
      "Oracle",
      "PHP",
      "REST",
    ],
  },
  {
    period: "2010-08 - 2011-10",
    title: "Full-Stack Developer",
    company: "Integral KT",
    description:
      "Developed internal production management tools for X5 Retail Group, covering both frontend and backend workflows with strong database logic and document automation.\n\n" +
      "• Built an order management system with PHP backend and ExtJS frontend, using advanced PL/SQL queries to handle complex business logic.\n" +
      "• Implemented PDF and Excel export features using PHP libraries, automating reporting processes that were previously manual.\n" +
      "• Refactored legacy codebase for improved performance and maintainability, resolving major bottlenecks.\n" +
      "• Worked in a small agile team using SVN and Mercurial for version control and NetBeans as IDE.",
    technologies: ["PHP", "ExtJS", "PL/SQL", "Excel (PHP)", "PDF (PHP)", "SVN"],
  },
];

const education = [
  {
    institution: "National Research Nuclear University MEPhi",
    area: "Engineering, Computer Science",
    studyType: "Bachelor",
    endDate: "2011",
  },
];

const languages = [
  { language: "English", fluency: "Upper-Intermediate" },
  { language: "Spanish", fluency: "Upper-Intermediate" },
  { language: "Russian", fluency: "Native" },
];

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h1>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mb-4">
                    {exp.description.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-wrap"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Education
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.studyType} in {edu.area}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Graduated: {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Languages
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex flex-row gap-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {lang.language}
                    </span>
                    -
                    <span className="text-gray-600 dark:text-gray-300">
                      {lang.fluency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white capitalize">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="text-center">
            <Link href="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
