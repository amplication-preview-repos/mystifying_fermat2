import * as graphql from "@nestjs/graphql";
import { TutoringSessionResolverBase } from "./base/tutoringSession.resolver.base";
import { TutoringSession } from "./base/TutoringSession";
import { TutoringSessionService } from "./tutoringSession.service";

@graphql.Resolver(() => TutoringSession)
export class TutoringSessionResolver extends TutoringSessionResolverBase {
  constructor(protected readonly service: TutoringSessionService) {
    super(service);
  }
}
