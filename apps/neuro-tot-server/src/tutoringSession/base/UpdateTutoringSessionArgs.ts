/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TutoringSessionWhereUniqueInput } from "./TutoringSessionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TutoringSessionUpdateInput } from "./TutoringSessionUpdateInput";

@ArgsType()
class UpdateTutoringSessionArgs {
  @ApiProperty({
    required: true,
    type: () => TutoringSessionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TutoringSessionWhereUniqueInput)
  @Field(() => TutoringSessionWhereUniqueInput, { nullable: false })
  where!: TutoringSessionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TutoringSessionUpdateInput,
  })
  @ValidateNested()
  @Type(() => TutoringSessionUpdateInput)
  @Field(() => TutoringSessionUpdateInput, { nullable: false })
  data!: TutoringSessionUpdateInput;
}

export { UpdateTutoringSessionArgs as UpdateTutoringSessionArgs };
