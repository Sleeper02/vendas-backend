import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from './cache/cache.module';
import { CityModule } from './city/city.module';
import { RolesGuard } from './guards/roles.guard';
import { StateModule } from './state/state.module';
import { UserModule } from './user/user.module';

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
      // synchronize: true, //Sincroniza o banco de dados com as entidades, não é interessante deixar como TRUE em produção
      entities: [`${__dirname}/**/*.entity{.ts,.js}`], //Faz com que o TypeORM encontre as entidades automaticamente
      migrations: [`${__dirname}/migration/*.{ts,js}`], //O * dps do .ts é pq o arquivo de migration tem um nome + timestamp
      //É interessante usar migrations ao invés do synchronize em produção, pq o synchronize pode apagar dados importantes
      //E as migrations são como um controle de versão do banco de dados, vc cria uma migration para cada alteração que vc quer fazer no banco
      migrationsRun: true, //Faz com que as migrations sejam executadas automaticamente ao iniciar a aplicação
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
