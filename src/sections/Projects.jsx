import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedTab, setSelectedTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "QuizWhiz",
      description:
        "A full-stack trivia quiz app built with React and Express, offering engaging quizzes and result tracking.",
      image: "/assets/quizwhizz.png",
      category: "fullstack",
      technologies: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://triviaquizwhiz.netlify.app/",
    },
    {
      id: 3,
      title: "Sorting Visualizer",
      description:
        "An interactive frontend project visualizing sorting algorithms in real-time using React and Tailwind.",
      image: "/assets/sorting.png",
      category: "frontend",
      technologies: ["React", "Bootstrap"],
      link: "https://sortingvisualizer-web.netlify.app/",
    },
    {
      id: 6,
      title: "LoomNotes",
      description:
        "A real-time collaborative note editor powered by WebSockets, built with React, Express, and Socket.io.",
      image: "/api/placeholder/600/400",
      category: "fullstack",
      technologies: [
        "React",
        "Express",
        "Node.js",
        "Socket.io",
        "Tailwind CSS",
      ],
      link: "https://github.com/div-up",
    },
    {
      id: 4,
      title: "GitMatched",
      description:
        "A Tinder-inspired interface for discovering GitHub repositories, using React and Redux for state management.",
      image: "gitMatched",
      category: "frontend",
      technologies: ["React", "Redux", "Tailwind CSS"],
      link: "https://github.com/div-up",
    },
    {
      id: 5,
      title: "E-Commerce Website UI",
      description:
        "A static, responsive shopping website UI built with vanilla HTML, CSS, and JavaScript.",
      image: "/api/placeholder/600/400",
      category: "frontend",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/div-up",
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
