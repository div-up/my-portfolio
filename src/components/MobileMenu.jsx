import React from "react";
import SocialLinks from "./SocialLinks";

const MobileMenu = ({ setIsMenuOpen, darkMode }) => {
  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col pt-24 px-6 space-y-8 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <a
        href="#home"
        className="text-3xl font-medium hover:text-blue-500 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#about"
        className="text-3xl font-medium hover:text-blue-500 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#skills"
        className="text-3xl font-medium hover:text-blue-500 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Skills
      </a>
      <a
        href="#projects"
        className="text-3xl font-medium hover:text-blue-500 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Projects
      </a>
      <a
        href="#experience"
        className="text-3xl font-medium hover:text-blue-500 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Experience
      </a>
      <a
        href="#contact"
        className="text-3xl font-medium hover:text-blue-500 transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Contact
      </a>

      <div className="flex space-x-4 pt-8">
        <SocialLinks size={28} />
      </div>
    </div>
  );
};

export default MobileMenu;