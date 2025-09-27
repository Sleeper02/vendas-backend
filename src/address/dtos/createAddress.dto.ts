import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsOptional()
  complement: string;

  @IsInt()
  //   @IsNotEmpty()
  numberAddress: number;

  @IsString()
  cep: string;

  @IsInt()
  //   @IsNotEmpty()
  cityId: number;
}
