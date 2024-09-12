import * as graphql from "@nestjs/graphql";
import { UiElementResolverBase } from "./base/uiElement.resolver.base";
import { UiElement } from "./base/UiElement";
import { UiElementService } from "./uiElement.service";

@graphql.Resolver(() => UiElement)
export class UiElementResolver extends UiElementResolverBase {
  constructor(protected readonly service: UiElementService) {
    super(service);
  }
}
