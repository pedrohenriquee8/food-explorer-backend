import { AuthPrisma } from "@infra/auth";
import { PrismaClient } from "@prisma/client";

export function getAuthRepositories() {
  return new AuthPrisma(new PrismaClient());
}
