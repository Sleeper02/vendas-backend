import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import type { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  private users: User[] = [];

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    //Tenho que usar o promise pq a funcao eh assincrona
    const salOrRounds = 10;
    const passwordhash = await hash(createUserDto.password, salOrRounds); //O await faz com que a funcao espere o hash ser gerado

    const user: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordhash,
    };

    this.users.push(user);

    // console.log(passwordhash);

    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.users;
  }
}
