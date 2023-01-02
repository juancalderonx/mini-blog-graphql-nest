import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { AuthorsModule } from '../authors/authors.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),

    AuthorsModule
  ],

  providers: [PostsResolver, PostsService]
})
export class PostsModule {}
