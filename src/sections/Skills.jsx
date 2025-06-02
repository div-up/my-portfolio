import React, { useState } from "react";

const Skills = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "HTML/CSS", icon: "devicon-html5-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express", icon: "devicon-express-original-wordmark" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "SQL", icon: "devicon-mysql-plain colored" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "LateX", icon: "devicon-latex-original" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center text-left text-gray-800 dark:text-white">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="mr-4 transform focus:outline-none"
            aria-label={isCollapsed ? "Expand section" : "Collapse section"}
          >
            <span
              className={`bg-blue-500 w-6 h-1 block rounded-full transition-transform duration-300 ${
                isCollapsed ? "rotate-90" : ""
              }`}
            ></span>
          </button>
          Skills & Expertise
        </h2>

        {!isCollapsed && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg p-6 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center group hover:scale-110 transition transform duration-300">
                      <i className={`text-5xl ${skill.icon}`}></i>
                      <span className="mt-2 text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
