import { ProjectItem } from "@/components/sections/Projects";
import SectionSeparator from "@/components/ui/section-separator";
import { fetchData } from "@/lib/fetchData";
import { urlFor } from "@/lib/getImageUrl";

const AllProjectsPage = async () => {
  const projects = await fetchData("project");
  return (
    <main className="min-h-screen flex items-center p-6 w-full flex-col">
      <div className="h-full w-full relative flex flex-wrap gap-x-4 justify-center items-center md:p-6 gap-y-24 ">
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
      <div className="w-full mt-6">
        <SectionSeparator />
      </div>
    </main>
  );
};

export default AllProjectsPage;
