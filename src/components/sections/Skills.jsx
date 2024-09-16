import { skills } from "./skills_data";
const Skills = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-14" id="skills">
      <div >
        <h2 className="text-4xl font-sans font-semibold w-full text-center">
          Skills
        </h2>
        <p className="w-full text-center font-sans text-gray-400 mt-2">
          Technologies I work With all the time
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="p-2 flex items-center md:w-[12rem] bg-slate-900/30 rounded-md gap-4 hover:scale-110 transition cursor-pointer"
          >
            {skill.icon} <span className="hidden md:block">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
