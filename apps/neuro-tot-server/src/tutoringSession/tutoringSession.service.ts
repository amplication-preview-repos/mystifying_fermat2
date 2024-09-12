import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TutoringSessionServiceBase } from "./base/tutoringSession.service.base";

@Injectable()
export class TutoringSessionService extends TutoringSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
