import Marquee from "react-fast-marquee";

const skills = [
  { name: "PrimeNG", image: "src/assets/skills/_presskit_primeng-logo.svg" }, // Replace with actual images
  { name: "Material UI", image: "src/assets/skills/material-ui-1.svg" },
  { name: "Bootstrap", image: "src/assets/skills/bootstrap-4.svg" },
  {
    name: "React",
    image: "src/assets/skills/react-2.svg",
  },
  { name: "Next.js", image: "src/assets/skills/next-js.svg" },
  { name: "TailWindCSS", image: "src/assets/skills/tailwind-css-2.svg" },
  { name: "TypeScript", image: "src/assets/skills/typescript.svg" },
  { name: "Angular", image: "src/assets/skills/angular-icon-1.svg" },
  { name: "JavaScript", image: "src/assets/skills/logo-javascript.svg" },
  { name: "NodeJS", image: "src/assets/skills/nodejs-3.svg" },
  { name: "Express", image: "src/assets/skills/expressjs-ar21~bgwhite.svg" },
  { name: "SpringBoot", image: "src/assets/skills/spring-boot-1.svg" },
  { name: "Cypress", image: "src/assets/skills/cypress-1.svg" },
  {
    name: "Git",
    image: "https://git-scm.com/images/logos/downloads/Git-Logo-1788C.svg",
  },
  { name: "Jasmine", image: "src/assets/skills/jasmine-2.svg" },
  { name: "GitLab", image: "src/assets/skills/gitlab-3.svg" },
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
