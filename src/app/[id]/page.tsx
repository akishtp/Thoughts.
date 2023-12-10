import prisma from "@/lib/prisma";
import { FC } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts.",
};

interface BlogProps {
  params: {
    id: string;
  };
}

async function getThought(id: string) {
  const response = await prisma.thought.findFirst({
    where: { id: id },
    select: { id: true, img: true, title: true, content: true },
  });
  return response;
}

const Blog: FC<BlogProps> = async ({ params }) => {
  const thought = await getThought(params.id);
  return (
    <div>
      <div className="text-4xl">{thought?.title}</div>
      <div>
        {thought?.img && (
          <div className="w-full pr-12 pl-8 pb-10 md:float-right md:w-1/2 pt-10 md:pt-0">
            <img src={thought?.img} className="cool-shadow-two" />
          </div>
        )}
        <p className="text-justify pt-6">{thought?.content}</p>
      </div>
    </div>
  );
};
export default Blog;
