import React, { useEffect, useState } from "react";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [typedText, setTypedText] = useState("");
  const words = [
    "Frontend Developer.",
    "React Developer.",
    "Web Developer.",
    "JavaScript Enthusiast.",
  ];
  const typingSpeed = 150;
  const pauseDuration = 2000;

  useEffect(() => {
    let currentIndex = 0;
    let wordIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setTypedText(currentWord.slice(0, currentIndex - 1));
        currentIndex--;
      } else {
        setTypedText(currentWord.slice(0, currentIndex + 1));
        currentIndex++;
      }

      if (!isDeleting && currentIndex === currentWord.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseDuration);
      } else if (isDeleting && currentIndex === 0) {
        wordIndex = (wordIndex + 1) % words.length;
        isDeleting = false;
        timeout = setTimeout(type, typingSpeed);
      } else {
        timeout = setTimeout(type, typingSpeed);
      }
    };

    timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 flex items-center">
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
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Divyanshu Upadhyay
              </span>
            </h1>

            {!isCollapsed && (
              <>
                <div className="flex items-center mb-8 h-12 mx-6">
                  <h2 className="text-2xl md:text-3xl font-medium">
                    I'm a <span className="text-blue-500">{typedText}</span>
                    <span className="animate-blink ml-1">|</span>
                  </h2>
                </div>

                <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-6">
                  Passionate about creating beautiful, functional, and
                  user-friendly web applications. Let's build something amazing
                  together.
                </p>

                <div className="flex flex-wrap gap-4 mx-6">
                  <a
                    href="https://drive.google.com/file/d/1MVsa2Gewehdv3re0rlOxFOiQpY40Jhyf/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                    className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/20"
                  >
                    Preview Resume  
                  </a>
                  <a
                  href="#contact"
                  className="px-8 py-3  text-black rounded-lg hover:bg-blue-600 dark:bg-white hover:text-white transition-colors shadow-lg hover:shadow-blue-500/20"
                >
                  Contact Me
                </a>
                </div>

                <div className="mt-16 flex items-center space-x-6 mx-6">
                  <SocialLinks />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;