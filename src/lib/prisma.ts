import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}

prisma = new PrismaClient();
global.prisma = new PrismaClient();
prisma = global.prisma;

export default prisma;
