import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
@Injectable()
export class UsuarioArmazenados{
    #usuarios:UsuarioEntity[]=[];
    
    AdicionarUsuario(usuario:UsuarioEntity){
        this.#usuarios.push(usuario);
    }

    atualizaUsuario(id:string, dadosAtualizacao:Partial<UsuarioEntity>){
        const usuario=this.buscaPorID(id)
        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor])=>{
                if(chave==='id'){
                    return
                }
                usuario[chave]=valor
            }
        )
        return usuario
    }

    private buscaPorID(id:string){
        const possivelUsuario=this.#usuarios.find(
            usuarioSalvo=>usuarioSalvo.id===id
        )
        if(!possivelUsuario){
            throw new Error("Usuario não encontrado")
        }
        return possivelUsuario
    }

    validaEmail(email:string){
        const possivelUsuario=this.#usuarios.find(
            usuario=>usuario.email===email
        );
        return(possivelUsuario!=undefined)
    }

    async removeUsuario(id:string){
        const usuario=this.buscaPorID(id)
        this.#usuarios=this.#usuarios.filter(
            usuarioSalvo=>usuarioSalvo.id !==id
        )
        return usuario
    }
    get Usuarios(){
        return this.#usuarios
    }
}