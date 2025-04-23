import ProjectsList from "../components/ProjectsList";

export const metadata = {
  title: "Projects | Maksim Kabanov",
  description:
    "Portfolio of projects by Maksim Kabanov, Senior Frontend Developer",
};

export const dynamic = "force-dynamic";

export default async function Projects() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My Projects
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on throughout my
            career. Each project demonstrates different aspects of my technical
            skills and problem-solving abilities.
          </p>

          {/* Using server component to display projects */}
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}
