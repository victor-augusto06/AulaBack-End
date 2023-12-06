import { IsEmail, IsInt, IsNotEmpty, IsOptional, MinLength, IsString } from "class-validator";
import { EmailUnico } from "../validacao/EmailUnico.validator";

export class AlteraUsuarioDTO{
    @IsString()
    @IsNotEmpty({message:"Nome não pode ser vazio"})
    @IsOptional()
    nome:string;

    @IsInt()
    @IsOptional()
    idade:BigInteger;

    @IsString()
    @IsOptional()
    cidade:string

    @IsEmail(undefined,{message:"Email é invalido"})
    @EmailUnico({message:"O email informado já existe"})
    @IsOptional()
    email:string

    @IsString()
    @IsOptional()
    telefone:string

    @MinLength(6,{message:"Senha precisa de pelo menos 5 digitos"})
    @IsOptional()
    senha:string

}