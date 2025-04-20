import Link from "next/link";

const projects = [
  {
    title: "Staffing Dashboard",
    description:
      "Built a staffing dashboard in Angular 18 with Signals, OnPush change detection, and drag-and-drop timelines. Replaced manual planning with a smart assignment system, increasing efficiency by ~70%. Enabled dynamic PDF/Excel export — reduced time to generate 60 CVs from 7–10 min to 20 sec, with support for multiple templates.",
    technologies: [
      "Angular 18",
      "Signals",
      "OnPush Change Detection",
      "jsPDF",
      "ExcelJS",
      "TypeScript",
    ],
    link: "#",
  },
  {
    title: "Microsoft BI Report Viewer",
    description:
      "Refactored Microsoft BI Report Viewer: introduced table virtualization for 10,000+ row datasets, reducing page load time from indefinite to a few seconds. Redesigned border rendering logic to eliminate visual glitches and match Report Builder behavior, significantly improving user satisfaction.",
    technologies: [
      "React",
      "Table Virtualization",
      "Performance Optimization",
      "UI/UX Design",
      "TypeScript",
    ],
    link: "#",
  },
  {
    title: "F5 Policy Supervisor",
    description:
      "Led frontend architecture and implementation of F5 Policy Supervisor using React, Redux Toolkit, and OpenAPI. Delivered MVP in 4 months. Implemented comprehensive testing with Cypress and Jest.",
    technologies: [
      "React",
      "Redux Toolkit",
      "OpenAPI",
      "Cypress",
      "Jest",
      "TypeScript",
    ],
    link: "#",
  },
  {
    title: "React Native Appointment App",
    description:
      "Maintained and evolved a React Native app for appointment and contract handling. Migrated legacy architecture to modern Redux-based stack, resolving critical bugs and improving app performance and stability.",
    technologies: [
      "React Native",
      "Redux",
      "TypeScript",
      "Mobile Development",
      "Performance Optimization",
    ],
    link: "#",
  },
  {
    title: "Gantt Chart System",
    description:
      "Built a Gantt chart system on SlickGrid with custom rendering, real-time filtering, and print-to-PDF capabilities, enabling project teams to manage timelines with precision.",
    technologies: [
      "JavaScript",
      "SlickGrid",
      "d3.js",
      "PDF Generation",
      "Real-time Filtering",
    ],
    link: "#",
  },
  {
    title: "Interactive Analytics Dashboards",
    description:
      "Developed interactive dashboards with d3.js, jQuery, and ExtJS, integrating multiple databases (PostgreSQL, Oracle, MSSQL) and implementing automated reporting logic.",
    technologies: [
      "d3.js",
      "ExtJS",
      "PostgreSQL",
      "Oracle",
      "MSSQL",
      "Data Visualization",
    ],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {false && (
                    <Link
                      href={project.link}
                      className="btn w-full text-center"
                    >
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
