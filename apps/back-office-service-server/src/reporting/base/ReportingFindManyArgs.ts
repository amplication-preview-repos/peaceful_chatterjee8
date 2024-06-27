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
import { ReportingWhereInput } from "./ReportingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ReportingOrderByInput } from "./ReportingOrderByInput";

@ArgsType()
class ReportingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ReportingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ReportingWhereInput, { nullable: true })
  @Type(() => ReportingWhereInput)
  where?: ReportingWhereInput;

  @ApiProperty({
    required: false,
    type: [ReportingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ReportingOrderByInput], { nullable: true })
  @Type(() => ReportingOrderByInput)
  orderBy?: Array<ReportingOrderByInput>;

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

export { ReportingFindManyArgs as ReportingFindManyArgs };
