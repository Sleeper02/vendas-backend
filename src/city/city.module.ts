import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';

@Module({
  imports: [
    CacheModule.register({
      ttl: 90000, // 90 segundos em milissegundos
    }),
    TypeOrmModule.forFeature([CityEntity]),
  ], //Sempre que eu quiser usar um repositório do TypeORM em um módulo, eu tenho que importar o TypeOrmModule e usar o forFeature
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
