import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AlteraFilmesDTO } from "./dto/atualizaFilmes.dto";
import { criaFilmeDTO } from "./dto/filme.dto";
import { ListaFilmesDTO } from "./dto/listaFIlme.dto";
import { FilmesArmazenados } from "./filme.dm";
import { Filmes } from "./filme.entity";
import { v4 as uuid } from 'uuid'



@Controller('/filmes')
export class FilmeController{    
    constructor(private clsFilmesArmazenados: FilmesArmazenados){ 
    }

    @Get()
    async RetornoFilmes(){
        const usuariosListados = await this.clsFilmesArmazenados.Filmes;
        const listaRetorno = usuariosListados.map(
            filme => new ListaFilmesDTO(
                filme.id,
                filme.nome,
                filme.duracao,
                filme.sinopse,
                filme.ano,
                filme.genero
            )
        );
        
        return listaRetorno;
    }

    @Delete('/:id')
    async removeFilmes(@Param('id') id: string){
        const usuarioRemovido = await this.clsFilmesArmazenados.removeFilme(id)

        return{
            usuario: usuarioRemovido,
            message: 'Usuário removido'
        }
    }


    @Put('/:id')
    async atualizaFilme(@Param('id') id: string, @Body() novosDados: AlteraFilmesDTO){
        const filmeAtualizado = await this.clsFilmesArmazenados.atualizaFilme(id,novosDados)

        return{
            usuario: filmeAtualizado,
            message: 'Filme atualizado'
        }
    }

    @Post()
    async criaFilme(@Body() dadosFilme: criaFilmeDTO){
        var filme = new Filmes(uuid(),dadosFilme.nome,dadosFilme.duracao,dadosFilme.sinopse,dadosFilme.ano, dadosFilme.genero)
        this.clsFilmesArmazenados.AdicionarFilme(filme);        
        var retorno={
            id: filme.id,
            message:'Filme Cadastrado'
        }
        return retorno
    }

    @Get('/:id')
    async compartilharFilme(@Param('id') id:string) {
        const compartilha= await this.clsFilmesArmazenados.compartilharFilme(id)
    return compartilha;
    }
        
        

}
