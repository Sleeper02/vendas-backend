import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const allData = await this.cacheManager.get<T>(key);

    if (allData) {
      //Esse if evita que o servidor faça várias requisições ao banco de dados,
      // oq ele está verificando se o dado já está no cache
      return allData;
    }

    const data: T = await functionRequest();

    await this.cacheManager.set(key, data);

    return data;
  }
}
