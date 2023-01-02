import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

@ObjectType() @Entity()
export class Author {

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Field() @Column()
  fullname: string;
  
  @OneToMany(
    () => Post,
    post => post.author,
    // { eager: true }
  )
  @Field( () => [Post], { nullable: true } )
  posts?: Post[];
}
