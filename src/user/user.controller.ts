import { Body, Controller, Get, Post } from '@nestjs/common';
import type { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return {
      ...createUser, //isso daqui serve para eu ver o que eu enviei no postman
      password: undefined, //isso daqui serve para eu n mostrar a senha no postman
    };
  }

  @Get()
  async getAllUsers() {
    return JSON.stringify({ test: 'abc' }); //Por causa do return ele me mostra o json no postman
  }
}
