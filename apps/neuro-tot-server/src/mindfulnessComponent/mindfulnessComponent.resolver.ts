import * as graphql from "@nestjs/graphql";
import { MindfulnessComponentResolverBase } from "./base/mindfulnessComponent.resolver.base";
import { MindfulnessComponent } from "./base/MindfulnessComponent";
import { MindfulnessComponentService } from "./mindfulnessComponent.service";

@graphql.Resolver(() => MindfulnessComponent)
export class MindfulnessComponentResolver extends MindfulnessComponentResolverBase {
  constructor(protected readonly service: MindfulnessComponentService) {
    super(service);
  }
}
