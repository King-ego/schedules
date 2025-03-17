import {InputType, Field} from '@nestjs/graphql';
import {IsString} from 'class-validator';
import {Type} from 'class-transformer';

@InputType()
export class CreateCommentsInput {
  @Field()
  @IsString()
  @Type(() => String)
  content: string;

  @Field()
  @IsString()
  @Type(() => String)
  author_id: string;
}
