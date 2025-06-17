import React, { useState } from "react";

const Experience = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const experiences = [
    {
      id: 1,
      role: "Software Developer (SDE-1)",
      period: "Sep 2024 - Present",
    },
    {
      id: 2,
      role: "Graduate Engineer Trainee (GET)",
      period: "Dec 2023 - Aug 2024",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
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
          Work Experience
        </h2>

        {!isCollapsed && (
          <div className="space-y-6">
            <div className="mx-6 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Jio Platforms Limited
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Working at Jio Platforms Limited, I contributed to building
                scalable and efficient web applications, ensuring best practices
                in frontend development, and collaborating closely with
                cross-functional teams to deliver high-quality digital
                solutions.
              </p>
            </div>

            <div className="mx-12 space-y-8">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="mb-1 text-blue-600 dark:text-blue-400 font-medium">
                    {exp.period}
                  </div>
                  <h4 className="text-xl font-semibold">{exp.role}</h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
