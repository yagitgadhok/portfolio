const projects = [
  {
    title: "URL Shortener",
    description: "This is a project",
    image: "src/assets/projects/url-shortener.png",
    tags: ["React", "Node", "MongoDB"],
    github: "https://github.com/yagitgadhok/url-shortener",
  },
  {
    title: "File Drive",
    description: "This is a project",
    image: "src/assets/projects/file-drive.png",
    tags: ["React", "Node", "MongoDB"],
    github: "https://github.com/yagitgadhok/file-drive?tab=readme-ov-file",
  },
  {
    title: "Ecommerce",
    description: "This is a project",
    image: "https://via.placeholder.com/150",
    tags: ["React", "Node", "MongoDB"],
    github: "https://github.com/yagitgadhok/ecommerce",
  },
];

export const Projects = () => {
  return (
    <>
      <section className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Projects :-</h2>
          <p className="text-gray-400 mb-8">
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described,
            reflecting my ability to solve complex problems, work with different
            technologies, and manage projects effectively :-
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a href={project.github}>
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-5 shadow-lg hover:shadow-xl transition duration-300"
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
                        className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
