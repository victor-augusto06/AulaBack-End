export class Filmes{
    id: string;
    nome: string;
    duracao: string;
    sinopse: string;
    ano: string;
    genero: string;

    constructor(id: string,nome: string,duracao: string,sinopse: string,ano: string,genero: string){
        this.id = id;
        this.nome = nome;
        this.duracao = duracao;
        this.sinopse= sinopse;
        this.ano= ano;
        this.genero = genero;
        }

    validarUsuario(){
        var retorno = [];
        if (this.nome == ""){
            retorno.push("Nome de filme inválido ou vazio");
        }
        if (this.duracao == ""){
            retorno.push("Duração está inválida ou vazia");
        }
        if (this.sinopse  == ""){
            retorno.push("Sinopse está inválida ou vazia");
        }
        if (this.ano  == ""){
            retorno.push("Ano está inválido ou vazio");
        }
        if (this.genero  == ""){
            retorno.push("Genêro está inválido ou vazio");
        }
        return retorno;
    }

}