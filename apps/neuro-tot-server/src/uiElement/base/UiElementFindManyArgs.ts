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
import { UiElementWhereInput } from "./UiElementWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UiElementOrderByInput } from "./UiElementOrderByInput";

@ArgsType()
class UiElementFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UiElementWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UiElementWhereInput, { nullable: true })
  @Type(() => UiElementWhereInput)
  where?: UiElementWhereInput;

  @ApiProperty({
    required: false,
    type: [UiElementOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UiElementOrderByInput], { nullable: true })
  @Type(() => UiElementOrderByInput)
  orderBy?: Array<UiElementOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UiElementFindManyArgs as UiElementFindManyArgs };