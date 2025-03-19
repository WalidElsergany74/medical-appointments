import { Prisma } from "@prisma/client";

export type DoctorWithRelations = Prisma.DoctorGetPayload<{
  include: {
   specialty : true
  };
}>;