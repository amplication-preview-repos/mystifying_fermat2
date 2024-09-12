/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  TutoringSession as PrismaTutoringSession,
  Subject as PrismaSubject,
  Tutor as PrismaTutor,
} from "@prisma/client";

export class TutoringSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TutoringSessionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.tutoringSession.count(args);
  }

  async tutoringSessions(
    args: Prisma.TutoringSessionFindManyArgs
  ): Promise<PrismaTutoringSession[]> {
    return this.prisma.tutoringSession.findMany(args);
  }
  async tutoringSession(
    args: Prisma.TutoringSessionFindUniqueArgs
  ): Promise<PrismaTutoringSession | null> {
    return this.prisma.tutoringSession.findUnique(args);
  }
  async createTutoringSession(
    args: Prisma.TutoringSessionCreateArgs
  ): Promise<PrismaTutoringSession> {
    return this.prisma.tutoringSession.create(args);
  }
  async updateTutoringSession(
    args: Prisma.TutoringSessionUpdateArgs
  ): Promise<PrismaTutoringSession> {
    return this.prisma.tutoringSession.update(args);
  }
  async deleteTutoringSession(
    args: Prisma.TutoringSessionDeleteArgs
  ): Promise<PrismaTutoringSession> {
    return this.prisma.tutoringSession.delete(args);
  }

  async getSubject(parentId: string): Promise<PrismaSubject | null> {
    return this.prisma.tutoringSession
      .findUnique({
        where: { id: parentId },
      })
      .subject();
  }

  async getTutor(parentId: string): Promise<PrismaTutor | null> {
    return this.prisma.tutoringSession
      .findUnique({
        where: { id: parentId },
      })
      .tutor();
  }
}