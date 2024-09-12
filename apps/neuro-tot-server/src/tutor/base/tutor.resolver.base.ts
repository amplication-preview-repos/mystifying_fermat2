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
import { Tutor } from "./Tutor";
import { TutorCountArgs } from "./TutorCountArgs";
import { TutorFindManyArgs } from "./TutorFindManyArgs";
import { TutorFindUniqueArgs } from "./TutorFindUniqueArgs";
import { CreateTutorArgs } from "./CreateTutorArgs";
import { UpdateTutorArgs } from "./UpdateTutorArgs";
import { DeleteTutorArgs } from "./DeleteTutorArgs";
import { TutoringSessionFindManyArgs } from "../../tutoringSession/base/TutoringSessionFindManyArgs";
import { TutoringSession } from "../../tutoringSession/base/TutoringSession";
import { TutorService } from "../tutor.service";
@graphql.Resolver(() => Tutor)
export class TutorResolverBase {
  constructor(protected readonly service: TutorService) {}

  async _tutorsMeta(
    @graphql.Args() args: TutorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Tutor])
  async tutors(@graphql.Args() args: TutorFindManyArgs): Promise<Tutor[]> {
    return this.service.tutors(args);
  }

  @graphql.Query(() => Tutor, { nullable: true })
  async tutor(
    @graphql.Args() args: TutorFindUniqueArgs
  ): Promise<Tutor | null> {
    const result = await this.service.tutor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Tutor)
  async createTutor(@graphql.Args() args: CreateTutorArgs): Promise<Tutor> {
    return await this.service.createTutor({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Tutor)
  async updateTutor(
    @graphql.Args() args: UpdateTutorArgs
  ): Promise<Tutor | null> {
    try {
      return await this.service.updateTutor({
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

  @graphql.Mutation(() => Tutor)
  async deleteTutor(
    @graphql.Args() args: DeleteTutorArgs
  ): Promise<Tutor | null> {
    try {
      return await this.service.deleteTutor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [TutoringSession], { name: "tutoringSessions" })
  async findTutoringSessions(
    @graphql.Parent() parent: Tutor,
    @graphql.Args() args: TutoringSessionFindManyArgs
  ): Promise<TutoringSession[]> {
    const results = await this.service.findTutoringSessions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
