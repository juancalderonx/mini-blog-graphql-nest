import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../authors/entities/author.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.input';
import { Post } from './entities/post.entity';
import { AuthorsService } from '../authors/authors.service';

@Injectable()
export class PostsService {

  private readonly logger = new Logger(PostsService.name);

  constructor(
    @InjectRepository(Post)
    private readonly postService: Repository<Post>,
    
    private readonly authorService: AuthorsService
  ){}

  async findAll(): Promise<Post[]> {
    this.logger.log(`Returning all posts.`);
    return await this.postService.find();
  }

  async findOneById(id: string): Promise<Post> {
    this.logger.log(`Returning one post by ${id} ID.`);
    return this.postService.findOneBy({id: id});
  }

  createPost(post: CreatePostDto): Promise<Post> {
    this.logger.log(`Returning post created.`);
    const newPost = this.postService.create(post);
    return this.postService.save(newPost);
  }

  getAuthor( authorId: string ): Promise<Author> {
    return this.authorService.findOne(authorId);
  }

}
