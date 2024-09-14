import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import SectionSeparator from "@/components/ui/section-separator";
import Testimonials from "@/components/sections/Testimonials";

const Home = () => {
  return (
    <main className="w-full md:p-6 p-2">
      <Hero />
      <SectionSeparator />
      <Skills />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Testimonials />
      <SectionSeparator />
    </main>
  );
};
export default Home;
