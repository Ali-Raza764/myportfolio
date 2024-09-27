"use client";
import { urlFor } from "@/lib/getImageUrl";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Image from "next/image";
import Link from "next/link";

function BentoGridDemo({ blogs }) {
  if (typeof window === undefined) {
    return;
  }

  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {blogs.map((blog, i) => (
        <Link href={`/blogs/${blog.slug.current}`} key={blog._id}>
          <BentoGridItem
            title={blog.title}
            description={blog.excerpt}
            header={
              <Image
                src={urlFor(blog.mainImage.asset._ref).toString()}
                alt={blog.title}
                width={200}
                height={200}
                className="w-full m-auto"
              />
            }
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        </Link>
      ))}
    </BentoGrid>
  );
}
export default BentoGridDemo;
