import prisma from "@/lib/prisma";
import Image from "next/image";
import { FC } from "react";

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
          <div className="float-right w-1/2 pr-12 pl-8 pb-10">
            <Image
              src={thought?.img}
              className="cool-shadow-two"
              alt="Could not fetch Image"
            />
          </div>
        )}
        <p className="text-justify pt-6">{thought?.content}</p>
      </div>
    </div>
  );
};
export default Blog;
