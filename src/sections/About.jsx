import React, { useState } from "react";

const About = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-800/10">
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
          About Me
        </h2>

        {!isCollapsed && (
          <div className="grid md:grid-cols-2 gap-12 items-center mx-6">
            <div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/api/placeholder/600/600"
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>

            <div>
              <p className="text-lg mb-6 opacity-80">
                Hello! I'm a <strong>Full Stack Developer</strong> with a
                passion for creating beautiful and functional web applications.
                With over X years of experience in the field, I specialize in
                React, Node.js, and modern web technologies.
              </p>

              <p className="text-lg mb-6 opacity-80">
                My journey in web development began when I was in college, where
                I discovered my love for building things that live on the
                internet. Fast-forward to today, and I've had the privilege of
                working at a start-up, a huge corporation, and a student-led
                design studio.
              </p>

              <p className="text-lg mb-8 opacity-80">
                When I'm not coding, you'll find me hiking, reading sci-fi
                novels, or experimenting with new recipes. I'm always looking
                forward to new challenges and opportunities to grow both
                personally and professionally.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-700/30 dark:bg-blue-900/30 text-white dark:text-blue-400 rounded-full">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-green-900/30 text-purple-600 dark:text-green-400 rounded-full">
                  Fast Learner
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-yellow-900/30 text-purple-600 dark:text-yellow-400 rounded-full">
                  Creative Thinker
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;