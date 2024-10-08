/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LineupUpdateManyWithoutPlayersInput } from "./LineupUpdateManyWithoutPlayersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  Min,
  Max,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPlayerPosition } from "./EnumPlayerPosition";

@InputType()
class PlayerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => LineupUpdateManyWithoutPlayersInput,
  })
  @ValidateNested()
  @Type(() => LineupUpdateManyWithoutPlayersInput)
  @IsOptional()
  @Field(() => LineupUpdateManyWithoutPlayersInput, {
    nullable: true,
  })
  lineups?: LineupUpdateManyWithoutPlayersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nationality?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberField?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPlayerPosition,
  })
  @IsEnum(EnumPlayerPosition)
  @IsOptional()
  @Field(() => EnumPlayerPosition, {
    nullable: true,
  })
  position?: "Option1" | null;
}

export { PlayerUpdateInput as PlayerUpdateInput };
