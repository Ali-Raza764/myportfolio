import BentoGridDemo from "@/components/sections/ItemsGrid";
import { fetchData } from "@/lib/fetchData";

const AllBlogsPage = async () => {
  const blogs = await fetchData("blog");

  return (
    <main className="min-h-screen flex items-center p-6 w-full flex-col">
      <BentoGridDemo blogs={blogs} />
    </main>
  );
};

export default AllBlogsPage;
