import React from "react";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-gray-200 dark:border-gray-700">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 display: contents">
            <a href="#" className="text-xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                divyanshu
              </span>
              .Dev
            </a>
            <p className="mt-2 mb-2 text-[13px] sm:text-sm opacity-70">
              Creating digital experiences with passion and precision.
            </p>
          </div>

          <div className="flex mb-4 space-x-8 flex-wrap justify-center">
            <NavLinks />
          </div>

          <div className="mt-3 md:mt-0 flex space-x-4">
            <SocialLinks />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm opacity-70">
          <p>© {currentYear} Divyanshu Upadhyay. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;