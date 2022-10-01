export interface Vendavel { //export é para que possa ser usado em outro arquivo
    nome: string //diferente do JS, o TS precisa da definição dos dados
    preco: number
}

export class Carro implements Vendavel {
    nome: string
    preco: number
}
