import { fetchData } from "@/lib/fetchData";
import { techIcons } from "./skills_data"; // Adjust the import path accordingly

const Skills = async () => {
  const skills = await fetchData("skill");

  return (
    <section className="h-screen flex flex-col items-center justify-center gap-14" id="skills">
      <div>
        <h2 className="text-4xl font-sans font-semibold w-full text-center">Skills</h2>
        <p className="w-full text-center font-sans text-gray-400 mt-2">
          Technologies I work With all the time
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="p-2 flex items-center md:w-[12rem] bg-slate-900/30 rounded-md gap-4 hover:scale-110 transition cursor-pointer"
          >
            {techIcons[skill.title.split(".")[0]] || <span>No Icon</span>} {/* Use the icon based on the title */}
            <span className="hidden md:block">{skill.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
