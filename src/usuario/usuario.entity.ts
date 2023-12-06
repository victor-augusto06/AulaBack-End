export class UsuarioEntity{
    id:string;
    nome:string;
    idade:BigInteger;
    cidade:string;
    email:string;
    telefone:string;
    senha:string;
    constructor( id:string,nome:string,idade:BigInteger,cidade:string, email:string,telefone:string,senha:string){
        this.id=id;
        this.nome=nome;
        this.idade=idade;
        this.cidade=cidade;
        this.email=email;
        this.telefone=telefone;
        this.senha=senha;
    }
    validarUsuario(){
        var retorno=[];
        if(this.nome==""){
            retorno.push("Nome inválido ou vazio")
        }
        if(this.idade==null || this.senha.toString()==""){
            retorno.push("Idade inválido ou vazio")
        }
        if(this.telefone==""){
            retorno.push("Telefone inválido ou vazio")
        }
        if(this.cidade==""){
            retorno.push("Cidade inválido ou vazio")
        }
        if(this.email==""){
            retorno.push("Email inválido ou vazio")
        }
        if(this.senha=="" && this.senha.length<6){
            retorno.push("Senha inválido ou vazio")
        }
        return retorno
    }
}