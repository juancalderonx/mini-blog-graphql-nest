import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuthorInput, UpdateAuthorInput } from './dto/index';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {

  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ){}

  create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const author = this.authorRepository.create(createAuthorInput);
    console.log({author});
    return this.authorRepository.save(author);
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  findOne(id: string): Promise<Author> {
    return this.authorRepository.findOneBy({id: id});
  }
}
