import Marquee from "react-fast-marquee";

const skills = [
  { name: "PrimeNG", image: "/assets/skills/_presskit_primeng-logo.svg" }, // Replace with actual images
  { name: "Material UI", image: "/assets/skills/material-ui-1.svg" },
  { name: "Bootstrap", image: "/assets/skills/bootstrap-4.svg" },
  {
    name: "React",
    image: "/assets/skills/react-2.svg",
  },
  { name: "Next.js", image: "/assets/skills/next-js.svg" },
  { name: "TailWindCSS", image: "/assets/skills/tailwind-css-2.svg" },
  { name: "TypeScript", image: "/assets/skills/typescript.svg" },
  { name: "Angular", image: "/assets/skills/angular-icon-1.svg" },
  { name: "JavaScript", image: "/assets/skills/logo-javascript.svg" },
  { name: "NodeJS", image: "/assets/skills/nodejs-3.svg" },
  { name: "Express", image: "/assets/skills/expressjs-ar21~bgwhite.svg" },
  { name: "SpringBoot", image: "/assets/skills/spring-boot-1.svg" },
  { name: "Cypress", image: "/assets/skills/cypress-1.svg" },
  {
    name: "Git",
    image: "https://git-scm.com/images/logos/downloads/Git-Logo-1788C.svg",
  },
  { name: "Jasmine", image: "/assets/skills/jasmine-2.svg" },
  { name: "GitLab", image: "/assets/skills/gitlab-3.svg" },
];

export const Skills = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 font-serif">Expertise</h2>

        {/* Marquee Effect */}
        <Marquee
          gradient={true}
          gradientColor="175, 161, 122, 100"
          speed={100}
          pauseOnHover={true}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-32 h-32 mx-4 flex-shrink-0 flex flex-col items-center justify-center 
             rounded-lg shadow-lg bg-gray-800 text-center transition-all duration-300 
             hover:bg-gradient-to-r hover:from-[rgb(175,161,145)] hover:to-[rgba(175,161,122,0.4)]"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
