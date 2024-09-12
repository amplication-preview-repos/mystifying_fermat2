import { Module } from "@nestjs/common";
import { TutoringSessionModuleBase } from "./base/tutoringSession.module.base";
import { TutoringSessionService } from "./tutoringSession.service";
import { TutoringSessionController } from "./tutoringSession.controller";
import { TutoringSessionResolver } from "./tutoringSession.resolver";

@Module({
  imports: [TutoringSessionModuleBase],
  controllers: [TutoringSessionController],
  providers: [TutoringSessionService, TutoringSessionResolver],
  exports: [TutoringSessionService],
})
export class TutoringSessionModule {}
