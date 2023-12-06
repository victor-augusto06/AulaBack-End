export class ListaFilmesDTO{
    constructor(
        readonly id: string,
        readonly nome: string,
        readonly duracao: string,
        readonly sinopse: string,
        readonly ano:string,
        readonly genero:string
        ){}
}