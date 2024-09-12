import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TutoringSessionService } from "./tutoringSession.service";
import { TutoringSessionControllerBase } from "./base/tutoringSession.controller.base";

@swagger.ApiTags("tutoringSessions")
@common.Controller("tutoringSessions")
export class TutoringSessionController extends TutoringSessionControllerBase {
  constructor(protected readonly service: TutoringSessionService) {
    super(service);
  }
}
