import { Logger } from '@nestjs/common';
import { Mutation, Query, Resolver, Args } from '@nestjs/graphql';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { PostsService } from './posts.service';

@Resolver()
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

}
