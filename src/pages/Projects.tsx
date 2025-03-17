import { motion } from "framer-motion";

const projects = [
  {
    title: "URL Shortener",
    description:
      "Built a URL shortening platform using MongoDB, Express.js, React.js, and Node.js, featuring custom short links, analytics tracking, and secure redirections. 🔗",
    image: "src/assets/projects/url-shortener.png",
    tags: ["React", "Node", "MongoDB"],
    github: "https://github.com/yagitgadhok/url-shortener",
  },
  {
    title: "File Drive",
    description:
      "Developed a cloud-based file storage system using Next.js, Node.js, and Convex, enabling secure file uploads, real-time access, and efficient storage management. 📂",
    image: "src/assets/projects/file-drive.png",
    tags: ["NextJS", "Node", "Convex"],
    github: "https://github.com/yagitgadhok/file-drive?tab=readme-ov-file",
  },
  {
    title: "Ecommerce",
    description:
      "Built a full-stack e-commerce platform with secure authentication and optimized performance using MongoDB, Express.js, React.js, and Node.js. Deployed on Render with CI/CD pipelines. 🛒",
    image: "src/assets/projects/ss1.png",
    tags: ["React", "Node", "MongoDB", "Express"],
    github: "https://github.com/yagitgadhok/ecommerce",
  },
];

export const Projects = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold font-serif text-white mb-6 text-center">
          Projects
        </h2>
        <p className="text-gray-400 mb-8 text-center">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described,
          reflecting my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.github}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-slate-900 rounded-lg p-5 shadow-lg transition duration-300 hover:bg-gradient-to-r hover:from-[rgb(78,57,32)] hover:to-[rgba(175,161,122,0.4)]"
                whileHover={{
                  boxShadow: "0px 10px 20px rgba(255, 191, 105, 0.2)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
