export class ListaUsuarioDTO{
    constructor(
        readonly id:string,
        readonly nome:string,
        readonly idade:BigInteger,
        readonly cidade:string,
        readonly email:string,
        readonly telefone:string
    ){}
}