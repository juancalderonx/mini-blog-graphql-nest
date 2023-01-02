import { InputType, Field } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateAuthorInput {
  
  @Field() @IsString()
  fullname: string;

}
