import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';
import { CreateAuthorInput } from './dto/index';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private readonly authorsService: AuthorsService
  ) {}

  @Mutation(() => Author)
  createAuthor(
    @Args('createAuthorInput') createAuthorInput: CreateAuthorInput
  ) {
    return this.authorsService.create(createAuthorInput);
  }

  @Query(() => [Author] )
  findAllAuthors() {
    return this.authorsService.findAll();
  }

  @Query(() => Author, { name: 'findOneAuthor' })
  findOneAuthor(@Args('id') id: string) {
    return this.authorsService.findOne(id);
  }

}
