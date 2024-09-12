import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UiElementService } from "./uiElement.service";
import { UiElementControllerBase } from "./base/uiElement.controller.base";

@swagger.ApiTags("uiElements")
@common.Controller("uiElements")
export class UiElementController extends UiElementControllerBase {
  constructor(protected readonly service: UiElementService) {
    super(service);
  }
}
