import { Logger } from '@nestjs/common';
import { Mutation, Query, Resolver, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Author } from '../authors/entities/author.entity';
import { CreatePostDto } from './dto/create-post.input';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';

@Resolver((of) => Post)
export class PostsResolver {

  private readonly logger = new Logger(PostsResolver.name);

  constructor(private readonly postsService: PostsService) {}

  @Query(() => [Post])
  getAll() {
    this.logger.log(`Trying send petition to get all posts.`);
    return this.postsService.findAll();
  }

  @Query(() => Post)
  getPostById(
    @Args('idPost', {
      type: () => String
    }) idPost: string,
  ) {
    this.logger.log(`Trying send petition to get post by ID.`);
    return this.postsService.findOneById(idPost);
  }

  @Mutation(() => Post)
  create(
    @Args('postDto') postDto: CreatePostDto,
  ) {
    this.logger.log(`Trying send DTO Post to PostService.`);
    return this.postsService.createPost(postDto);
  }

  @ResolveField(() => Author)
  authorData(@Parent() post: Post ): Promise<Author> {
    return this.postsService.getAuthor(post.authorId);
  }

}
