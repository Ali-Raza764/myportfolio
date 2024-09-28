import { fetchData } from "@/lib/fetchData";
import { urlFor } from "@/lib/getImageUrl";
import Image from "next/image";

const Projects = async () => {
  const projects = await fetchData("project", 6);

  return (
    <section
      className="h-full w-full flex flex-col items-center justify-center gap-11 p-6"
      id="projects"
    >
      <div>
        <h2 className="text-4xl font-sans font-semibold w-full text-center">
          Projects
        </h2>
        <p className="w-full text-center font-sans text-gray-400 mt-2">
          Projects That I a have built
        </p>
      </div>
      <div className="h-full w-full relative flex flex-wrap gap-x-4 justify-center items-center md:p-6 gap-y-24 md:mb-6">
        {projects.map((project) => {
          return (
            <ProjectItem
              key={project._id}
              imageUrl={
                urlFor(project.mainImage.asset._ref).url() ||
                "https://dummyimage.com/200X150"
              }
              name={project.title}
              repoUrl={project.repoUrl}
              technologiesUsed={project.technologiesUsed}
              description={project.description[0].children[0].text}
              liveUrl={project.liveUrl}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

const ProjectItem = ({
  name,
  repoUrl,
  technologiesUsed,
  description,
  liveUrl,
  imageUrl,
}) => {
  return (
    <div className="project-item w-[20rem] h-[25rem] p-4 flex flex-col items-center justify-center bg-black transition duration-300 transform hover:scale-105 text-white gap-4 rounded-xl hover:shadow-xl shadow-input shadow-none border-white/[0.2] border">
      <Image
        src={imageUrl}
        width={200}
        height={150}
        className="rounded-md w-full"
        alt={name}
      />
      <h3 className="text-2xl font-semibold mb-2 text-center">{name}</h3>
      <p className="text-sm text-gray-400 mb-4 text-center line-clamp-3 text-ellipsis">
        {description}
      </p>
      <div className="mt-auto">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 border border-white/[0.2] p-2 rounded-xl hover:border-indigo-600 hover:text-white transition cursor-pointer"
        >
          View Repo
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-green-400 border border-white/[0.2] p-2 rounded-xl hover:border-green-500 hover:text-white transition"
          >
            Live Preview
          </a>
        )}
      </div>
    </div>
  );
};
