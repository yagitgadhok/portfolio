const experiences = [
  {
    role: "Software Engineer Intern",
    images:
      "https://cdn.brandfetch.io/idK2mWG2SJ/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667628288746",
    company: "Tata Consultancy Service",
    date: "May 2020 - Jul 2020",
    description:
      "Developed and optimized a machine learning-based emotion analysis system, Enhanced emotion analysis accuracy (+20%), optimized system performance (-15% processing time), and managed 150+ code commits using Git, improving team collaboration and efficiency. 🚀",
  },
  {
    role: "Software Engineer Intern",
    images: "https://upload.wikimedia.org/wikipedia/commons/a/a2/DRDO_Seal.png",
    company: "Defence Research and Development Organization",
    date: "Jul 2021 - Sep 2021",
    description:
      "Engineered geospatial analyses using Quantum GIS (QGIS) to identify underperforming areas, improving project efficiency by 25% in three months.",
  },
  {
    role: "Software Developer",
    images:
      "https://cdn.brandfetch.io/idpJPAzMcl/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1696101041444",
    company: "Sopra Steria India",
    date: "Jul 2022 - Jan 2025",
    description:
      "Developed a scalable MERN-based UI component library, reducing page load time by 25% and boosting user engagement by 40%. Optimized backend APIs (-30% response time), implemented CI/CD (GitHub Actions, Docker), and improved code quality (+30%) with automated testing (Jest, Cypress). Managed 150+ Git commits, enhancing team collaboration & deployment efficiency (-50% manual effort).",
  },
  {
    role: "Senior Software Developer",
    images:
      "https://cdn.brandfetch.io/idpJPAzMcl/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1696101041444",
    company: "Sopra Steria India",
    date: "Jan 2025 - Present",
    description:
      "Developed a scalable UI component library for Angular & React, reducing bundle size by 30%, accelerating development by 35%, and improving developer onboarding by 40% with Storybook. Optimized performance, ensured 100% WCAG compliance, and streamlined CI/CD (GitHub Actions, Webpack, Rollup) to reduce manual deployment effort by 50%. 🚀",
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
            {/* Timeline Image */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full overflow-hidden border-4 border-black">
              <img
                src={exp.images}
                alt={`Experience ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

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
