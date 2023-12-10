import ThoughtCard from "@/components/ThoughtCard";
import prisma from "@/lib/prisma";

async function getThoughts() {
  const response = await prisma.thought.findMany();
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
