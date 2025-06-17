import { ExternalLink } from "lucide-react";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl group">
    <div className="overflow-hidden h-48 w-full">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full transition-transform duration-500"
  />
</div>


      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          View Project <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
