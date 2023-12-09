import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ThoughtCardProps {
  thought: {
    id: string;
    title: string;
    content: string;
    img: string | null;
  };
}

const ThoughtCard: FC<ThoughtCardProps> = ({ thought }) => {
  return (
    <Link
      href={`/${thought.id}`}
      className="border-b border-neutral-900 py-10 px-6 flex flex-col"
    >
      {thought.img && (
        <Image
          src={thought.img}
          className="grayscale w-100"
          alt="Could not fetch Image"
        />
      )}
      <div className="font-bold text-xl pt-6 pb-2 hover:underline">
        {thought.title}
      </div>
      <div>{thought.content}</div>
    </Link>
  );
};

export default ThoughtCard;
