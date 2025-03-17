import { Link as ScrollLink, Element } from "react-scroll";
import "../Css/header.css";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import { Contact } from "./Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

function HomePage() {
  const navItems = [
    { name: "Home", to: "top" },
    { name: "Resume", href: "src/assets/Yagit_Gadhok_Resume.pdf" },
    { name: "Experience", to: "experience-section" },
    { name: "Projects", to: "projects-section" },
    { name: "Skills", to: "skills-section" },
    { name: "Contact", to: "contacts-section" },
  ];
  return (
    <>
      <Element name="top" />
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-[#1B1B1B] text-white rounded-lg max-w-7xl mx-auto">
        {/* Left Side - Navigation Links */}
        <ul className="flex space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="relative cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {/* Nav Link */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hover:text-teal-500"
              >
                {item.to ? (
                  <ScrollLink to={item.to} smooth={true} duration={500}>
                    {item.name}
                  </ScrollLink>
                ) : (
                  <a href={item.href} download>
                    {item.name}
                  </a>
                )}
              </motion.div>

              {/* Underline Animation */}
              <motion.div
                className="absolute left-0 bottom-[-2px] h-[2px] bg-cyan-600"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.li>
          ))}
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4">
          <a href="https://github.com/yagitgadhok">
            <FaGithub className="text-xl hover:text-purple-400 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/yagitgadhok/">
            <FaLinkedin className="text-xl hover:text-blue-400 cursor-pointer" />
          </a>
        </div>
      </nav>

      <div className="header-content flex items-center justify-between px-8 py-4 mx-auto my-4 max-w-6xl text-white">
        {/* Left Section - Text */}
        <span className="w-1/2">
          <h1 className="text-4xl font-bold font-mono">
            Hello, I'm Yagit Gadhok
          </h1>
          <p className="text-lg mt-2 text-slate-300 font-sans">
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
            src="src/assets/img.jpg"
            alt="Yagit Gadhok"
            className="w-80 h-80 rounded-full object-cover"
          />
        </span>
      </div>

      <Element name="experience-section" className="p-10">
        <Experience />
      </Element>
      <Element name="projects-section" className="p-10">
        <Projects />
      </Element>
      <Element name="skills-section" className="p-10 pb-50">
        <Skills />
      </Element>
      <Element name="contacts-section" className="pt-10">
        <Contact />
      </Element>
    </>
  );
}

export default HomePage;
