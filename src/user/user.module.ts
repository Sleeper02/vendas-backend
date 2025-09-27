import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], //Importa a entidade para o módulo
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
