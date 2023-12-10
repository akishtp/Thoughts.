import ThoughtCard from "@/components/ThoughtCard";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Thoughts.",
};

async function getThoughts() {
  noStore();
  const response = await prisma.thought.findMany({
    select: {
      id: true,
      title: true,
      img: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
}

export default async function Home() {
  const thoughts = await getThoughts();
  return (
    <div className="columns-1 md:columns-2 lg:columns-3">
      {thoughts.map((thought) => (
        <ThoughtCard key={thought.id} thought={thought} />
      ))}
    </div>
  );
}
