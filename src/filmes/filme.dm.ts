import { Injectable } from "@nestjs/common";
import { Filmes } from "./filme.entity";


@Injectable()
export class FilmesArmazenados{
    #filmes: Filmes[] = [];  

    AdicionarFilme(filme: Filmes){
        this.#filmes.push(filme);
    }

    atualizaFilme(id: string, dadosAtualizacao: Partial<Filmes>){
        const filme = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave === 'id'){
                    return
                }
                filme[chave] = valor;
            }
        )

        return filme;
    }

    private buscaPorID(id: string){
        const possivelFilme = this.#filmes.find(
            FilmeSalvo => FilmeSalvo.id === id
        )

        if (!possivelFilme){
            throw new Error('Filme não encontrado')
        }
        
        return possivelFilme;
    }

    async removeFilme(id: string){
        const filme = this.buscaPorID(id);

        this.#filmes = this.#filmes.filter(
            filmeSalvo => filmeSalvo.id !== id
        )

        return filme;
    }

    async compartilharFilme(id:string){
        const filme=this.buscaPorID(id)
        return `Estou assistindo o filme ${filme.nome} que conta a seguinte história: ${filme.sinopse}, foi lançado em ${filme.ano} e tem duração de ${filme.duracao}. Assista também!! Do genero:${filme.genero}`;
    }

    get Filmes(){        
        return this.#filmes;
    }
}