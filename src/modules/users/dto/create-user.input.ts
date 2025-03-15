import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
export class CreateUserInput {
  @Field()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @Type(() => String)
  name: string;
}
