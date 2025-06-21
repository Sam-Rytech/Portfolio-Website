"use client";
import React, { useState } from "react";
import "./globals.css";

const Page = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const sections = ["home", "about", "projects", "contact"];

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold textblue1">SamRytech</div>
        <div className="hidden md:flex items-center space-x-8">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors duration-200 ${
                activeSection === item
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <div className="mt-20 flex">
        <div>
          <div className="text-8xl pl-30 textblue1">
            Hi, I'm <br />
            SamRytech
          </div>
          <div className="pl-30">I'm a web developer</div>
          <div className="pl-30">
            <a href="#projects">
              <button>View My Work</button>
            </a>
          </div>
        </div>
        <div>
          <img src="/images/PFP.png" alt="" className="w-1/2 h-auto" />
        </div>
      </div>

      <div>
        <div>
          <div>
            <span>About Me</span>
          </div>
          <div>
            <span>Web Developer</span>
          </div>
          <div>
            <span>I am </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Page;
