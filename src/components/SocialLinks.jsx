import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = ({ size = 20 }) => {
  return (
    <>
      <a
        href="https://github.com/div-up"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 hover:scale-130 transition-colors"
        aria-label="GitHub"
      >
        <Github size={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/divyanshu-upadhyay-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 hover:scale-130 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={size} />
      </a>
      <a
        href="mailto:divyanshukr786@gmail.com"
        className="hover:text-blue-500 hover:scale-130 transition-colors"
        aria-label="Email"
      >
        <Mail size={size} />
      </a>
    </>
  );
};

export default SocialLinks;
