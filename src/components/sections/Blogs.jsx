import { MdChat, MdMusicNote } from "react-icons/md";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Blogs = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-14 py-6" id="blogs">
      <div>
        <h2 className="text-4xl font-sans font-semibold w-full text-center">
          Blogs
        </h2>
        <p className="w-full text-center font-sans text-gray-400 mt-2">
          Check Out Mu blogs Where I experiment with new technologies and
          projects
        </p>
      </div>
      <BentoGridDemo />
    </section>
  );
};

export default Blogs;

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Baze",
    description: "A music streaming platform.",
    header: <Skeleton />,
    icon: <MdMusicNote className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Chit Chat",
    description: "A chatting platform made using next.js.",
    header: <Skeleton />,
    icon: <MdChat className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];