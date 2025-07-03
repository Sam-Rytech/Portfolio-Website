"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";

const Page = () => {
  const [activeSection, setActiveSection] = useState("home");

  const [darkMode, setDarkMode] = useState(false);

  // On mount, check system preference or localStorage
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);
  }, []);
  

  // Toggle theme
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("Name") as string,
      email: formData.get("Email") as string,
      message: formData.get("Message") as string,
    };

    const response = await fetch("https://formspree.io/f/mdkzjpkd", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmissionStatus("success");
      form.reset();
    } else {
      setSubmissionStatus("error");
    }

    // Reset the message after a few seconds
    setTimeout(() => setSubmissionStatus(null), 5000);
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const sections = ["home", "about", "projects", "contact"];

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full nav-bg z-50 px-[10%] py-4 flex justify-between items-center">
        <div className="text-2xl font-bold textblue1 ">SamRytech</div>
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
        <div>
          <button
            onClick={toggleDarkMode}
            className="ml-6 px-3 py-1 rounded-full  border-blue-500 text-blue-600 dark:text-yellow-300 dark:border-yellow-400 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      <div className="pt-30 flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-15 mr-45">
          <div className="text-8xl  textblue1 ">
            Hi, I'm
            <br />
            <span className="text-gradient">SamRytech</span>
          </div>
          <div className=" textblue2 text-2xl mt-5">A Front End Developer</div>
          <div className="mt-5">
            <button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="textblue1 border-2 px-3.5 py-1 goldb rounded-full hover:bg-yellow-100 transition"
            >
              View My Work
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="/images/Pf.png"
            alt=""
            className="w-140"
            draggable={false}
          />
        </div>
      </div>

      {/* <div id="about" className="scroll-mt-24 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <span className="textblue1 text-4xl mb-4">About Me</span>
          </div>
          <div className="w-20 h-1 custom-gradient mx-auto"></div>
          <div>
            <span className="textblue1">
              I'm SamRytech, a creative and passionate Front End Developer
              focused on building clean, responsive and user-friendly websites.
              My journey into tech began with a deep curiosity about how
              websites function, which soon evolved into a commitment to
              crafting elegant and effective digital experiences.
            </span>
          </div>
        </div>
        <div>
          <div>
            <span>Tech Stack</span>
          </div>
          <div>
            <ul className="flex">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJS</li>
              <li>TailwindCSS</li>
              <li>Typesript</li>
            </ul>
          </div>
        </div>
      </div> */}

      <section id="about" className="relative min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center ">
            <span className="textblue1 text-4xl font-bold">About Me</span>
          </h2>
          <div className="w-20 h-1 custom-gradient mx-auto mt-4"></div>
          <div className="mt-15 grid gap-12 lg:grid-cols-2">
            <div className="gradient-border glass-effect rounded-xl p-8 ml-26">
              <div className="mt-6 space-y-4 textblue">
                <p>
                  I'm a passionate Front-End Developer with a love for turning
                  ideas into visually stunning, responsive, and user-focused web
                  experiences. My journey into tech began after high school,
                  when I built my first website, and I’ve been hooked ever
                  since.
                </p>
                <p>
                  I specialize in modern web technologies like HTML, CSS,
                  JavaScript, React, Next.js, and TailwindCSS, with a strong
                  focus on clean design, performance, and accessibility. I love
                  bridging the gap between beautiful design and functional code.
                </p>
                <p>
                  Outside of development, you’ll often find me exploring design
                  trends, contributing to open-source projects, or learning
                  something new to keep growing as a developer.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="gradient-border glass-effect rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6 pt-5">
                  <div
                    className="stat-item text-center"
                    style={{
                      transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                      opacity: 1,
                    }}
                  >
                    <div className="font-montserrat text-3xl font-bold textblue1">
                      1+
                    </div>
                    <div className="mt-2 text-sm textblue1">
                      Years Experience
                    </div>
                  </div>
                  <div
                    className="stat-item text-center"
                    style={{
                      transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                      opacity: 1,
                    }}
                  >
                    <div className="font-montserrat text-3xl font-bold textblue1">
                      10+
                    </div>
                    <div className="mt-2 text-sm textblue1">
                      Projects Completed
                    </div>
                  </div>
                  <div
                    className="stat-item text-center"
                    style={{
                      transform: "translate(0px, 0px) rotate(0deg) scale(1)",
                      opacity: 1,
                    }}
                  >
                    <div className="font-montserrat text-3xl font-bold textblue1">
                      6+
                    </div>
                    <div className="mt-2 text-sm textblue1">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="projects" className="scroll-mt-24">
        <div className="text-center mb-4">
          <span className="text-4xl font-bold">
            Projects <br />
          </span>
          <div className="w-20 h-1 custom-gradient mx-auto mt-4"></div>
        </div>
        <div className="mx-auto text-center">
          <span>
            A showcase of my works, including completed and ongoing projects
          </span>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-[10%]">
          <div className="w-[350px] h-[268px] border rounded-2xl">
            Projects One
          </div>
          <div className="w-[350px] h-[268px] border rounded-2xl">
            Project Two
          </div>
          <div className="w-[350px] h-[268px] border rounded-2xl">
            Project Three
          </div>
          <div className="w-[350px] h-[268px] border rounded-2xl">
            Project Three
          </div>
          <div className="w-[350px] h-[268px] border rounded-2xl">
            Project Three
          </div>
          <div className="w-[350px] h-[268px] border rounded-2xl">
            Project Three
          </div>
        </div>
      </div>

      <section className="py-20">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
          id="contact"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold textblue1 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 custom-gradient mx-auto"></div>
            <p className="text-lg textblue1 mt-6">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center text-white mr-4">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold textblue1">Email</h4>
                    <p className="textblue1">temitayoomolayo@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center text-white mr-4">
                    📱
                  </div>
                  <div>
                    <h4 className="font-semibold textblue1">Phone</h4>
                    <p className="textblue1">+234 814 794 1672</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 custom-gradient rounded-lg flex items-center justify-center text-white mr-4">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold textblue1">Location</h4>
                    <p className="textblue1">Akure, Ondo State</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className=" p-8 rounded-xl shadow-2xl"
            >
              <div className="mb-6">
                <label className="block textblue1 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label className="block textblue1 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label className="block textblue1 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="Message"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors duration-200"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>

              {submissionStatus === "success" && (
                <div className="flex items-center text-green-600 mt-4">
                  <span className="text-2xl mr-2">✔️</span>
                  <p>Message sent successfully!</p>
                </div>
              )}
              {submissionStatus === "error" && (
                <div className="flex items-center text-red-600 mt-4">
                  <span className="text-2xl mr-2">❌</span>
                  <p>Something went wrong. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <footer className="  py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl textblue1 font-bold">SamRytech</span>
              <p className="textblue1 mt-2">Front End Developer</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Sam-Rytech"
                className="textblue1 hover:text-blue-400 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href=""
                className="textblue1 hover:text-blue-400 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/Sam_rytech"
                target="_blank"
                rel="noopener noreferrer"
                className="textblue1 hover:text-blue-400 transition-colors duration-200"
              >
                Twitter
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="textblue1">© 2024 SamRytech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
