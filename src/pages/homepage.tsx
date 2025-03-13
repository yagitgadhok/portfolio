import { Link as ScrollLink, Element } from "react-scroll";
import "../Css/header.css";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import { Contact } from "./Contact";

function HomePage() {
  return (
    <>
      <Element name="top" />
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-[#1B1B1B] text-white rounded-lg max-w-7xl mx-auto">
        {/* Left Side - Navigation Links */}
        <ul className="flex space-x-8">
          <li className="hover:text-gray-400 cursor-pointer">
            <ScrollLink to="top" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <a href="src/assets/Yagit_Gadhok_Resume.pdf" download>
              Resume
            </a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <ScrollLink to="experience-section" smooth={true} duration={500}>
              Experience
            </ScrollLink>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <ScrollLink to="projects-section" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <ScrollLink to="skills-section" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <ScrollLink to="contacts-section" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4">
          <i className="fab fa-linkedin text-xl cursor-pointer hover:text-gray-400"></i>
          <i className="fab fa-github text-xl cursor-pointer hover:text-gray-400"></i>
        </div>
      </nav>

      <div className="header-content flex items-center justify-between px-8 py-4 mx-auto my-4 max-w-6xl text-white">
        {/* Left Section - Text */}
        <span className="w-1/2">
          <h1 className="text-3xl font-bold">Hello, I'm Yagit Gadhok</h1>
          <p className="text-lg mt-2">
            Senior Full Stack Developer specializing in Angular, React, Node.js,
            and Express.js. With 3+ years of experience, I have expertise in
            building scalable, high-performance web applications, optimizing
            frontend and backend architectures, and developing reusable UI
            component libraries.
          </p>
        </span>

        {/* Right Section - Image */}
        <span className="w-1/2 flex justify-end pt-10">
          <img
            src="https://avatars.githubusercontent.com/u/56169582?v=4"
            alt="Yagit Gadhok"
            className="w-80 h-80 rounded-full object-cover"
          />
        </span>
      </div>

      <Element name="experience-section">
        <Experience />
      </Element>
      <Element name="projects-section">
        <Projects />
      </Element>
      <Element name="skills-section">
        <Skills />
      </Element>
      <Element name="contacts-section">
        <Contact />
      </Element>
    </>
  );
}

export default HomePage;
