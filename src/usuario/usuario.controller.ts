import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioArmazenados } from "./usuario.dm";
import { v4 as uuid } from 'uuid'
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController{
    constructor(private clsUsuariosArmazenados :UsuarioArmazenados){
    }
    
    @Get()
    async RetornoUsuario(){
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.idade,
                usuario.cidade,
                usuario.email,
                usuario.telefone
            )
        );
        
        return listaRetorno;
    }
    
    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id)
        return{
            usuario: usuarioRemovido,
            message: 'Usuário removido'
        }
    }

    @Post()
    async criaUsuario(@Body()dadosUsuario:criaUsuarioDTO){
        var usuario=new UsuarioEntity(uuid(),dadosUsuario.nome,dadosUsuario.idade,dadosUsuario.cidade,dadosUsuario.email,dadosUsuario.telefone,dadosUsuario.senha)
            this.clsUsuariosArmazenados.AdicionarUsuario(usuario)
            var retorno={
                id:usuario.id,
                message:"Usuário Criado"
            }
            return retorno
        }
    @Put('/:id')
    async atualizaUsuario(@Param('id')id:string, @Body() novosDados: AlteraUsuarioDTO){
        const usuarioAtualizado=await this.clsUsuariosArmazenados.atualizaUsuario(id, novosDados)
            return{
                usuario: usuarioAtualizado,
                message:"Usuario atualizado"
            }
    }
        
    }
