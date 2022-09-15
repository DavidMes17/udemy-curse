const prod1 = {}; //forma literal de criar objeto vazio.

prod1.nome = 'Motorola E7'; //adicionar valor no objeto.
prod1.preco = 299.86;
prod1['Descontinho Nice'] = 0.55; //evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Samsung Galaxy J4',
    preco: 589.90,
    obj: {
        desconto: 0.50,
        obj: {
            desconto: 0.65
        }
    }
}
console.log(prod2);