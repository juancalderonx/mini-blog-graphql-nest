import { CreateAuthorInput } from './create-author.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuthorInput extends PartialType(CreateAuthorInput) {
  @Field()
  id: string;
}
