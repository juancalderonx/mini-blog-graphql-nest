import { ObjectType, Field } from "@nestjs/graphql";
import { Author } from "../../authors/entities/author.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@ObjectType() @Entity()
export class Post {
  
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field({ nullable: true })
  content?: string;

  @Column()
  @Field()
  authorId: string;

  @ManyToOne( () => Author, author => author.posts )
  @Field( () => Author, { nullable: true } )
  author: Author;
}