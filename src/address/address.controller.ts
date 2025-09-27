import { Body, Controller, Param, Post } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post('/:userId')
  async createAddress(
    @Body()
    createAddressDto: CreateAddressDto,
    @Param('userId') userId: number, //Usando o Param pq é um dado que vem na URL
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }
}
