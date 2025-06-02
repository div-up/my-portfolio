import React, { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import NavLinks from "./NavLinks";

const Navbar = ({ darkMode, toggleDarkMode, isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-900/95 shadow-lg shadow-blue-500/10"
            : "bg-white/95 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold group">
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            divyanshu
          </span>
          <span className="inline-block transition-transform group-hover:translate-x-1">
            .Dev
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          {/* <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full mr-2 ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button> */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-lg ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;