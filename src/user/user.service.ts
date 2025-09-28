import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import type { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    //Tenho que usar o promise pq a funcao eh assincrona
    const salOrRounds = 10;
    const passwordhash = await hash(createUserDto.password, salOrRounds); //O await faz com que a funcao espere o hash ser gerado

    return this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordhash,
    });

    //Código antigo sem banco de dados
    // const user: UserEntity = {
    //   ...createUserDto,
    //   id: this.users.length + 1,
    //   password: passwordhash,
    // };

    // this.users.push(user);

    // // console.log(passwordhash);

    // return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`UserId: ${userId} not found`); //tem que usar shift+acento
    }

    return user;
  }

  async getUserByIdUsingRelations(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: {
        addresses: {
          city: {
            state: true,
          },
        },
      },
    });

    if (!user) {
      throw new NotFoundException(`UserId: ${userId} not found`);
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`Email: ${email} not found`); //tem que usar shift+acento
    }

    return user;
  }
}
