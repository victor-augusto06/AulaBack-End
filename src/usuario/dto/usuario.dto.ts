import { IsString, IsEmail, MinLength, IsNotEmpty, IsInt } from "class-validator";
export class criaUsuarioDTO{
    @IsString()
    @IsNotEmpty({message:"Nome não pode ser vazio"})
    nome:string;
    @IsInt()
    idade:BigInteger;
    @IsString()
    cidade:string;
    @IsEmail(undefined,{message:"Email não é valido"})
    email:string;
    @IsString()
    telefone:string;
    @MinLength(6,{message:"Senha precesa de pelo menos 6 digitos"})
    senha:string
}