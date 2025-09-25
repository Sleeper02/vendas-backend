import { Body, Controller, Get, Post } from '@nestjs/common';
import type { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUser: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUsers(): Promise<User[]> {
    //Toda a lógica de negócio deve estar no service
    return this.userService.getAllUsers();
  }
}
