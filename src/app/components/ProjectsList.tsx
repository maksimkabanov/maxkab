import React from "react";
import Image from "next/image";
import { Project, WithId } from "../api/types";
import { projects } from "../data/resume";

// Extend Project type to include additional fields
interface ExtendedProject extends Project {
  imageUrl?: string;
}

// Extended type for projects from data file
interface ProjectWithImage extends Project {
  imageUrl?: string;
}

// Function to get projects directly from data file
function getProjects(): WithId<ExtendedProject>[] {
  if (!projects || projects.length === 0) {
    return [];
  }

  return projects.map((project, index) => {
    // Ensure all required fields are present
    const projectWithRequiredFields: ExtendedProject = {
      name: project.name || `Project ${index + 1}`,
      startDate: project.startDate || "",
      endDate: project.endDate || "",
      description: project.description || "",
      highlights: project.highlights || [],
      technologies: project.technologies || [],
      url: project.url || "",
    };

    // Add imageUrl if it exists in the project
    const projectWithImage = project as unknown as ProjectWithImage;
    if (projectWithImage.imageUrl) {
      projectWithRequiredFields.imageUrl = projectWithImage.imageUrl;
    }

    return {
      ...projectWithRequiredFields,
      id: `project-${index + 1}`,
    };
  });
}

// Server component for displaying projects
export default function ProjectsList() {
  const projects = getProjects();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        >
          {/* Display image only if it exists */}
          {project.imageUrl && (
            <Image
              src={project.imageUrl}
              alt={project.name}
              layout="fill"
              objectFit="cover"
            />
          )}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {project.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-line">
              {project.description}
            </p>
            {/* Display highlights if they exist */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Highlights:
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
