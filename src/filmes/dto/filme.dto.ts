import {IsNotEmpty, IsString} from "class-validator";


export class criaFilmeDTO{
    @IsString()
    @IsNotEmpty({message: "Nome do filme não pode ser vazio"})
    nome:string;
    
    @IsString()
    duracao: string;

    @IsString()
    sinopse: string;

    @IsString()
    ano: string;

    @IsString()
    genero: string;
}