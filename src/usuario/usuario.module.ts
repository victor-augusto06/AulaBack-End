import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioArmazenados } from "./usuario.dm";
import { EmailUnicoValidator } from "./validacao/EmailUnico.validator";
@Module({
    controllers:[UsuarioController],
    providers:[UsuarioArmazenados,EmailUnicoValidator],

})
export class UsuarioModule{
    
}