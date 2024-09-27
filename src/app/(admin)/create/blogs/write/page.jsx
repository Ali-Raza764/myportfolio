import dynamic from "next/dynamic";

const BlogForm = dynamic(() => import("./BlogForm"), {
  loading: () => <div>Loading</div>,
});

const WriteBlogPage = () => {
  return (
    <main className="w-full h-full flex flex-col items-center md:p-6 p-3">
      <h1 className="text-3xl font-bold mb-4">Write a Blog</h1>
      <div className="w-full">
        <BlogForm />
      </div>
    </main>
  );
};

export default WriteBlogPage;
