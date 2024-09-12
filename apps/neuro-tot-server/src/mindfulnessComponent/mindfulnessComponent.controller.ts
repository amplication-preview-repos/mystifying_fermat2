import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MindfulnessComponentService } from "./mindfulnessComponent.service";
import { MindfulnessComponentControllerBase } from "./base/mindfulnessComponent.controller.base";

@swagger.ApiTags("mindfulnessComponents")
@common.Controller("mindfulnessComponents")
export class MindfulnessComponentController extends MindfulnessComponentControllerBase {
  constructor(protected readonly service: MindfulnessComponentService) {
    super(service);
  }
}
