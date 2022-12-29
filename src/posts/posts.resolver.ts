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
  posts() {
    this.logger.log(`Trying send petition to get all posts.`);
    return this.postsService.findAll();
  }

  @Mutation(() => Post)
  createPost(
    @Args('postDto') postDto: CreatePostDto,
  ) {
    this.logger.log(`Trying send DTO Post to PostService.`);
    return this.postsService.createPost(postDto);
  }

}
