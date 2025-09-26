import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT), //Tem que fazer a conversão pq a variável de ambiente é string
      username: process.env.DB_USERNAME,
      synchronize: true, //Sincroniza o banco de dados com as entidades, não é interessante deixar como TRUE em produção
      entities: [`${__dirname}/**/*.entity{.ts,.js}`], //Faz com que o TypeORM encontre as entidades automaticamente
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
