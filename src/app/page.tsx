import Link from "next/link";
import ResumeSection from "./components/ResumeSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Maksim Kabanov
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-1">
              Senior Frontend Engineer
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
              Angular, React, Node.js
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
              Delivering performant UIs and reusable architecture for enterprise
              projects
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Barcelona, Spain
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
              Senior Frontend Engineer with over 15 years of experience
              delivering enterprise-grade applications across finance,
              analytics, and infrastructure. Specialized in building scalable
              architectures with React, Angular, and TypeScript, and in
              optimizing complex UI systems for performance, maintainability,
              and business value.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Led frontend efforts in greenfield and legacy projects, including
              UI virtualization for 10,000+ row tables (reducing load time from
              minutes to seconds) and smart automation dashboards that cut
              manual workflows by over 70%.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              While frontend is my core focus, I also bring hands-on Node.js
              experience for prototyping APIs, some Firebase Functions, and
              building dev tools. I love my job, clean code, and solving hard
              problems with pragmatic solutions.
            </p>
            <div className="text-center">
              <Link href="/about" className="btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section bg-gray-50 dark:bg-gray-800 mt-8 p-4">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Core Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React.js", "Angular", "TypeScript", "JavaScript"].map(
              (skill) => (
                <div
                  key={skill}
                  className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                    {skill}
                  </h3>
                </div>
              )
            )}
          </div>
          <div className="text-center mt-8">
            <Link href="/about#skills">View All Skills</Link>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <ResumeSection />
    </div>
  );
}
