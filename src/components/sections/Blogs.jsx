import BentoGridDemo from "./ItemsGrid";

import { fetchData } from "@/lib/fetchData";

const Blogs = async () => {
  const blogs = await fetchData("blog", 6);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center gap-14 py-6"
      id="blogs"
    >
      <div>
        <h2 className="text-4xl font-sans font-semibold w-full text-center">
          Blogs
        </h2>
        <p className="w-full text-center font-sans text-gray-400 mt-2">
          Check Out My blogs Where I experiment with new technologies and create new
          projects
        </p>
      </div>
      <BentoGridDemo blogs={blogs} />
    </section>
  );
};

export default Blogs;
