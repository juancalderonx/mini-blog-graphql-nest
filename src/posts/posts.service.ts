import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {

  private readonly logger = new Logger(PostsService.name);

  constructor(
    @InjectRepository(Post)
    private readonly postService: Repository<Post>,
  ){}

  async findAll(): Promise<Post[]> {
    this.logger.log(`Returning all posts.`);
    return await this.postService.find();
  }

  createPost(post: CreatePostDto): Promise<Post> {
    this.logger.log(`Returning post created.`);
    const newPost = this.postService.create(post);
    return this.postService.save(newPost);
  }

}
