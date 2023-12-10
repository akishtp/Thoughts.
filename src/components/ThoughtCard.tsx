import Link from "next/link";
import { FC } from "react";

interface ThoughtCardProps {
  thought: {
    id: string;
    title: string;
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
        <img
          src={thought.img}
          className="grayscale w-100"
          alt={`${thought.title}'s image 🎆`}
        />
      )}
      <div className="font-bold text-xl pt-2 pb-2 hover:underline">
        {thought.title}
      </div>
    </Link>
  );
};

export default ThoughtCard;
