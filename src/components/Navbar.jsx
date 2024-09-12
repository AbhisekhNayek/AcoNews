import React, { useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="bg-blue-600 text-white md:w-3/4 md:mx-auto mx-5 my-5 py-4 px-5 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-200">
      <div className="flex items-center justify-between">
        {/* Mode Switcher Button */}
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          {darkMode ? (
            <HiSun className="h-5 w-5" />
          ) : (
            <HiMoon className="h-5 w-5" />
          )}
          {darkMode ? "AcoNews" : "AcoNews"}
        </button>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-white hover:text-yellow-300 font-medium dark:hover:text-yellow-400">
            Home
          </a>
          <a href="/world" className="text-white hover:text-yellow-300 font-medium dark:hover:text-yellow-400">
            World
          </a>
          <a href="/technology" className="text-white hover:text-yellow-300 font-medium dark:hover:text-yellow-400">
            Technology
          </a>
          <a href="/sports" className="text-white hover:text-yellow-300 font-medium dark:hover:text-yellow-400">
            Sports
          </a>
          <a href="/contact" className="text-white hover:text-yellow-300 font-medium dark:hover:text-yellow-400">
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-white hover:text-yellow-300 dark:hover:text-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
