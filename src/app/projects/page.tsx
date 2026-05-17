import ProjectsList from "../components/ProjectsList";
import { texts } from "../data/resume";

export const metadata = {
  title: texts.projects.pageTitle,
  description: texts.projects.pageDescription,
};

export const dynamic = "force-dynamic";

export default async function Projects() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {texts.projects.mainTitle}
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            {texts.projects.description}
          </p>

          {/* Using server component to display projects */}
          <ProjectsList />
        </div>
      </div>
    </div>
  );
}
