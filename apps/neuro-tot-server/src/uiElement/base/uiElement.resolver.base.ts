/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { UiElement } from "./UiElement";
import { UiElementCountArgs } from "./UiElementCountArgs";
import { UiElementFindManyArgs } from "./UiElementFindManyArgs";
import { UiElementFindUniqueArgs } from "./UiElementFindUniqueArgs";
import { CreateUiElementArgs } from "./CreateUiElementArgs";
import { UpdateUiElementArgs } from "./UpdateUiElementArgs";
import { DeleteUiElementArgs } from "./DeleteUiElementArgs";
import { UiElementService } from "../uiElement.service";
@graphql.Resolver(() => UiElement)
export class UiElementResolverBase {
  constructor(protected readonly service: UiElementService) {}

  async _uiElementsMeta(
    @graphql.Args() args: UiElementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UiElement])
  async uiElements(
    @graphql.Args() args: UiElementFindManyArgs
  ): Promise<UiElement[]> {
    return this.service.uiElements(args);
  }

  @graphql.Query(() => UiElement, { nullable: true })
  async uiElement(
    @graphql.Args() args: UiElementFindUniqueArgs
  ): Promise<UiElement | null> {
    const result = await this.service.uiElement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UiElement)
  async createUiElement(
    @graphql.Args() args: CreateUiElementArgs
  ): Promise<UiElement> {
    return await this.service.createUiElement({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => UiElement)
  async updateUiElement(
    @graphql.Args() args: UpdateUiElementArgs
  ): Promise<UiElement | null> {
    try {
      return await this.service.updateUiElement({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UiElement)
  async deleteUiElement(
    @graphql.Args() args: DeleteUiElementArgs
  ): Promise<UiElement | null> {
    try {
      return await this.service.deleteUiElement(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
