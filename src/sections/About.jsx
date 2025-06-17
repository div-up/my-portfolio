import { CircleUserRound } from "lucide-react";
import React, { useState } from "react";

const About = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [imgErr, setImgErr] = useState(false);

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
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  {!imgErr ? (
                    <img
                      src="assets/myPicture.png"
                      alt="Divyanshu Upadhyay"
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgErr(true)}
                    />
                  ) : (
                    <CircleUserRound className="animate-pulse w-50 h-50 text-gray-400" />
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>

            <div>
              <p className="text-lg mb-6 opacity-80">
                Hello! I'm a <strong>Frontend Developer</strong> specializing in
                building dynamic and responsive user interfaces using{" "}
                <strong>React</strong> and modern web technologies. With 1.7
                years of experience at <strong>Jio Platforms Limited</strong> —
                a leading telecom company — I've contributed to scalable and
                performance-driven web applications used by millions.
              </p>

              <p className="text-lg mb-6 opacity-80">
                My journey into web development started during my college days,
                where I quickly developed a passion for creating user-centric
                digital experiences. Along the way, I've gained hands-on
                experience with <strong>Microfrontend Architecture</strong> and
                backend technologies like <strong>Node.js</strong> and{" "}
                <strong>Express</strong>, allowing me to contribute across the
                full stack when needed.
              </p>

              <p className="text-lg mb-8 opacity-80">
                When I’m not coding, I enjoy engaging in outdoor activities like{" "}
                <strong>cricket</strong> and <strong>trekking</strong>. These
                moments help me reset and bring fresh energy to my work. I'm
                always eager to learn, explore new tools, and take on challenges
                that help me grow — both as a developer and as a person.
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
