import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class AlteraFilmesDTO{
    @IsString()
    @IsNotEmpty({message: "Nome do filme não pode ser vazio"})
    @IsOptional()
    nome:string;
    
    @IsString()
    @IsOptional()
    duracao: string;

    @IsString()
    @IsOptional()
    sinopse: string;

    @IsString()
    @IsOptional()
    ano: string;

    @IsString()
    @IsOptional()
    genero: string;
}