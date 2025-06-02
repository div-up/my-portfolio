import React from "react";

const NavLinks = () => {
  return (
    <>
      <a
        href="#home"
        className="hover:text-blue-500 hover:scale-110 transition-colors"
      >
        Home
      </a>
      <a
        href="#about"
        className="hover:text-blue-500 hover:scale-110 transition-colors"
      >
        About
      </a>
      <a
        href="#skills"
        className="hover:text-blue-500 hover:scale-110 transition-colors"
      >
        Skills
      </a>
      <a
        href="#projects"
        className="hover:text-blue-500 hover:scale-110 transition-colors"
      >
        Projects
      </a>
      <a
        href="#experience"
        className="hover:text-blue-500 hover:scale-110 transition-colors"
      >
        Experience
      </a>
      <a
        href="#contact"
        className="hover:text-blue-500 hover:scale-110 transition-colors"
      >
        Contact
      </a>
    </>
  );
};

export default NavLinks;