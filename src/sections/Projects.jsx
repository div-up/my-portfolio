import React, { useState } from "react";
// import quizwhiz from "../assets/quizwhiz.png";
// import portfolio from "../assets/portfolio.png";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "QuizWhiz",
      description:
        "A full-stack e-commerce platform with React, Node.js, and MongoDB.",
      image: "quizwhiz",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      link: "https://triviaquizwhiz.netlify.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS.",
      image: "portfolio",
      category: "frontend",
      technologies: ["React", "Tailwind CSS"],
      link: "https://project-link.com",
    },
    {
      id: 3,
      title: "Sorting Visualizer",
      description:
        "RESTful API for task management built with Node.js and Express.",
      image: "sortVisualizer",
      category: "backend",
      technologies: ["React"],
      link: "https://project-link.com",
    },
    {
      id: 4,
      title: "GitMatched",
      description:
        "Interactive weather dashboard that fetches data from a weather API.",
      image: "gitMatched",
      category: "frontend",
      technologies: ["React"],
      link: "https://project-link.com",
    },
    {
      id: 5,
      title: "E-Commerce Website",
      description: "Content management system for blogs with admin panel.",
      image: "/api/placeholder/600/400",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://project-link.com",
    },
    {
      id: 6,
      title: "Collaborative Notes",
      description: "Real-time chat application with websockets.",
      image: "/api/placeholder/600/400",
      category: "fullstack",
      technologies: ["React", "Node.js", "Socket.io", "Redis"],
      link: "https://project-link.com",
    },
  ];

  const filteredProjects =
    selectedTab === "all"
      ? projects
      : projects.filter((project) => project.category === selectedTab);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-50 dark:bg-gray-800/10"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center focus:outline-none"
            aria-label={isCollapsed ? "Expand section" : "Collapse section"}
          >
            <span
              className={`bg-blue-500 w-6 h-1 mr-4 rounded-full transition-transform duration-300 ${
                isCollapsed ? "rotate-90" : ""
              }`}
            ></span>
          </button>
          My Projects
        </h2>

        {!isCollapsed && (
          <>
            <div className="flex flex-wrap justify-center mb-12 gap-2 mx-6">
              {["all", "frontend", "fullstack"].map((tab) => (
                <button
                  key={tab}
                  className={`px-5 py-2 rounded-full ${
                    selectedTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="mx-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;