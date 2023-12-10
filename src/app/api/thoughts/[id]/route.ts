import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface contextProps {
  params: {
    id: string;
  };
}

export async function DELETE(req: Request, context: contextProps) {
  try {
    await prisma.thought.delete({
      where: {
        id: context.params.id,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PATCH(req: Request, context: contextProps) {
  try {
    const body = await req.json();
    await prisma.thought.update({
      where: {
        id: context.params.id,
      },
      data: {
        title: body.title,
        img: body.img,
      },
    });
    return NextResponse.json({ message: "update success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function GET(req: Request, context: contextProps) {
  try {
    const thought = await prisma.thought.findFirst({
      where: { id: context.params.id },
    });

    return NextResponse.json(thought, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
