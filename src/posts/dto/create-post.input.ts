import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

@InputType()
export class CreatePostDto {

  @Field()
  @IsString() @IsNotEmpty() @MaxLength(100) @MinLength(3)
  title: string;

  @Field({ nullable: true })
  @IsString() @IsOptional() @MaxLength(100)
  content: string;

  @IsString()
  @Field({ nullable: true })
  authorId: string;

}