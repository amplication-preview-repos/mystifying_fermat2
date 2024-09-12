import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MindfulnessComponentServiceBase } from "./base/mindfulnessComponent.service.base";

@Injectable()
export class MindfulnessComponentService extends MindfulnessComponentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
