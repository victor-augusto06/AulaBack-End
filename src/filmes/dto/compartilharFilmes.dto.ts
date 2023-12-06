import { IsString } from "class-validator";

export class CompartilharFilmesDTO{
    @IsString()
    nome:string

    @IsString()
    duracao:string
    
    @IsString()
    sinopse:string

    @IsString()
    ano:string

    @IsString()
    genero:string

}