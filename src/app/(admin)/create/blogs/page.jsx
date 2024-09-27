import Link from "next/link";

const CreateBlogsPage = () => {
  const blogsData = [
    {
      title: "Blog 1",
      description: "This is the first blog.",
      image: "https://via.placeholder.com/150",
      date: "2023-01-01",
      author: "John Doe",
    },
    {
      title: "Blog 2",
      description: "This is the second blog.",
      image: "https://via.placeholder.com/150",
      date: "2023-01-02",
      author: "Jane Doe",
    },
    {
      title: "Blog 3",
      description: "This is the third blog.",
      image: "https://via.placeholder.com/150",
      date: "2023-01-03",
      author: "John Doe",
    },
    {
      title: "Blog 4",
      description: "This is the fourth blog.",
      image: "https://via.placeholder.com/150",
      date: "2023-01-04",
      author: "John Doe",
    },
    // Add more blogs if needed
  ];

  return (
    <main className="w-full h-full flex flex-col items-center md:p-6 p-3">
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="text-3xl font-bold mb-4">Create Blogs</h1>
        <Link href={'/create/blogs/write'} className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
          Create Blog
        </Link>
      </div>

      {/* Scrollable Blogs Container */}
      <div className="w-full md:h-[85vh] md:overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogsData.map((blog) => (
            <div
              key={blog.title}
              className="p-4 rounded-md shadow-md flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-2">{blog.description}</p>
              <p className="text-gray-500 mb-2">Date: {blog.date}</p>
              <p className="text-gray-500 mb-2">Author: {blog.author}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CreateBlogsPage;
