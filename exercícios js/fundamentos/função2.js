// armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a+b);
};

imprimirSoma(2 + 3);

// armazenando una função arrow em uma variável
const soma = (a,b) => { // a seta "=>" substitui o nome function ao criar uma função
    return(a + b);
}

console.log(soma(2, 3));

// retorno implícito
const subtracao = (a,b) => a-b; //a seta neste caso substitui o nome return mas também cria uma função
// porém, criando uma função assim ela terá apenas uma linha, ou seja, tendo apenas um comando nela, podendo adicionar mais no decorrer do código
console.log(subtracao(2,3));

const imprimir2 = a => console.log(a); //forma bem resumida para funções de um único parâmetro
imprimir2('Legal, JS é incrível :D');