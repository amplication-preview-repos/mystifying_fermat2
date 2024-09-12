import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UiElementServiceBase } from "./base/uiElement.service.base";

@Injectable()
export class UiElementService extends UiElementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
