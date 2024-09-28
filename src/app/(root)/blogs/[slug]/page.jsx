import SectionSeparator from "@/components/ui/section-separator";
import { urlFor } from "@/lib/getImageUrl";
import { client } from "@/lib/sanityClient";
import Image from "next/image";

const renderBodyContent = (body) => {
  return body.map((block) => {
    const children = block.children.map((child) => child.text).join(" ");

    switch (block.style) {
      case "h1":
        return (
          <h1 key={block._key} className="text-4xl font-bold mt-4">
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2 key={block._key} className="text-3xl font-semibold mt-4">
            {children}
          </h2>
        );
      case "h3":
        return (
          <h3 key={block._key} className="text-2xl font-medium mt-3">
            {children}
          </h3>
        );
      case "normal":
      default:
        return (
          <p
            key={block._key}
            className="text-lg mt-2 text-gray-300 leading-relaxed"
          >
            {children}
          </p>
        );
    }
  });
};

const fetchBlogData = async (slug) => {
  return client.fetch(`*[_type == "blog" && slug.current == $slug][0]`, {
    slug,
  });
};

const BlogDetailsPage = async ({ params }) => {
  const blogData = await fetchBlogData(params.slug);

  return (
    <div className="min-h-screen w-full flex flex-col items-center md:p-6 p-3 text-gray-100">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold mt-8 mb-6">{blogData?.title}</h1>

      {/* Blog Image */}
      {blogData?.mainImage && (
        <Image
          src={urlFor(blogData.mainImage.asset._ref).url()}
          width={800}
          height={400}
          alt={blogData?.title}
          className="rounded-lg shadow-lg mb-6"
          priority
        />
      )}

      {/* Blog Excerpt */}
      {blogData?.excerpt && (
        <p className="text-lg text-gray-400 italic mb-4">{blogData.excerpt}</p>
      )}

      {/* Blog Published Date */}
      {blogData?.publishedAt && (
        <p className="text-sm text-gray-500 mb-8">
          Published on: {new Date(blogData.publishedAt).toLocaleDateString()}
        </p>
      )}

      {/* Blog Body Content */}
      <div className="prose lg:prose-xl prose-invert container">
        {blogData?.body && renderBodyContent(blogData.body)}
      </div>
      <div className="w-full mt-6">
        <SectionSeparator />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
