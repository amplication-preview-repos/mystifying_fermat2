import { Module } from "@nestjs/common";
import { MindfulnessComponentModuleBase } from "./base/mindfulnessComponent.module.base";
import { MindfulnessComponentService } from "./mindfulnessComponent.service";
import { MindfulnessComponentController } from "./mindfulnessComponent.controller";
import { MindfulnessComponentResolver } from "./mindfulnessComponent.resolver";

@Module({
  imports: [MindfulnessComponentModuleBase],
  controllers: [MindfulnessComponentController],
  providers: [MindfulnessComponentService, MindfulnessComponentResolver],
  exports: [MindfulnessComponentService],
})
export class MindfulnessComponentModule {}
