import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @Type(() => String)
  name: string;

}
