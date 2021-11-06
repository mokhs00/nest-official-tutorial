import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { Dog } from 'src/dogs/interface/dogs.interface';
import { CreateDogDto } from './dto/create-dog.dto';
import { DogsService } from './dogs.service';
import { ApiException } from 'exception/api.exception';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) { }

  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    this.dogsService.create(createDogDto);
  }

  @Get()
  async findAll(): Promise<Dog[]> {
    throw new ApiException('error response test', HttpStatus.NOT_FOUND);
    // return this.dogsService.findAll();
  }
}
