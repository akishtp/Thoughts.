import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const thought = await prisma.thought.create({
      data: {
        title: body.title,
        img: body.img,
        content: body.content,
      },
    });

    return NextResponse.json(thought, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
