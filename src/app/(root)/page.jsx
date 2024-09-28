import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import SectionSeparator from "@/components/ui/section-separator";
import Testimonials from "@/components/sections/Testimonials";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";

export const revalidate = 60;

const Home = () => {
  return (
    <main className="w-full md:p-6 p-2">
      <Hero />
      <SectionSeparator />
      <Skills />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Blogs />
      <SectionSeparator />
      {/* <Testimonials />
      <SectionSeparator /> */}
      <Contact />
      <SectionSeparator />
    </main>
  );
};
export default Home;
