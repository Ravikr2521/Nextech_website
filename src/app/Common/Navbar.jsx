"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 w-full z-50  transition-all duration-300 ${
          scrolling
            ? "bg-black backdrop-blur-sm shadow-lg dark:bg-gray-900"
            : "bg-transparent"
        }`}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl  mx-auto py-2.5">
          <a href="#" className="flex items-center">
            <span
              className={`self-center text-xl font-semibold whitespace-nowrap transition-colors duration-300 ${
                scrolling ? "text-white dark:text-white" : "text-white"
              }`}
            >
              <img
                src="/img/leadsNexTech-logo.png"
                className="h-10 w-10 object-cover"
              />
            </span>
          </a>

          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className={`py-2 px-4 text-lg font-medium transition-colors duration-300 ${
                scrolling
                  ? "text-white hover:text-purple-700 dark:text-white dark:hover:text-purple-400"
                  : "text-white hover:text-purple-300"
              }`}
            >
              Home
            </a>
            <a
              href="#"
              className={`py-2 px-4 text-lg font-medium transition-colors duration-300 ${
                scrolling
                  ? "text-white hover:text-purple-700 dark:text-white dark:hover:text-purple-400"
                  : "text-white hover:text-purple-300"
              }`}
            >
              Team
            </a>
            <a
              href="#"
              className={`py-2 px-4 text-lg font-medium transition-colors duration-300 ${
                scrolling
                  ? "text-white hover:text-purple-700 dark:text-white dark:hover:text-purple-400"
                  : "text-white hover:text-purple-300"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
