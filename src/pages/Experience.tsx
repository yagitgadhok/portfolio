const experiences = [
  {
    role: "Full Stack Developer",
    company: "Tech Corp",
    date: "Jan 2023 - Present",
    description:
      "Developing scalable web applications using React, Node.js, and MongoDB.",
  },
  {
    role: "Frontend Developer",
    company: "Web Solutions",
    date: "Jun 2021 - Dec 2022",
    description:
      "Built responsive UI components and optimized performance with React and Tailwind CSS.",
  },
  {
    role: "Intern - Web Development",
    company: "Startup Hub",
    date: "Jan 2021 - May 2021",
    description:
      "Assisted in developing landing pages and integrating APIs in a React-based environment.",
  },
];

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Experience
      </h2>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute w-1 bg-purple-500 h-full left-1/2 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline Dot (Centered) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-500 border-4 border-black rounded-full"></div>

            {/* Timeline Content */}
            <div
              className={`bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 w-5/12 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
              <p className="text-gray-400 font-medium">
                {exp.company} | {exp.date}
              </p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
