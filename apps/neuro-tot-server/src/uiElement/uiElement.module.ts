import { Module } from "@nestjs/common";
import { UiElementModuleBase } from "./base/uiElement.module.base";
import { UiElementService } from "./uiElement.service";
import { UiElementController } from "./uiElement.controller";
import { UiElementResolver } from "./uiElement.resolver";

@Module({
  imports: [UiElementModuleBase],
  controllers: [UiElementController],
  providers: [UiElementService, UiElementResolver],
  exports: [UiElementService],
})
export class UiElementModule {}
