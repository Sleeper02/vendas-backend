export interface CreateUserDto {
  //Esse interface serve para definir o formato do objeto que sera recebido na requisicao
  name: string;
  email: string;
  phone: string;
  cpf: string;
  password: string;
}
