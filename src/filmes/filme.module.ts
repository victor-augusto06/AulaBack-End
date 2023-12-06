import { Module } from "@nestjs/common";
import { FilmesArmazenados } from "./filme.dm";
import { FilmeController } from "./filmes.controller";


@Module({
    controllers:[FilmeController],
    providers: [FilmesArmazenados]
})

export class FilmeModule{
    
}