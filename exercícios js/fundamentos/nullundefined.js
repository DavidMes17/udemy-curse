let valor; //não inicializada
console.log(valor); //undefined por sequer ter sido inicializada
// console.log(valor2); //vai retornar "is not defined", mostrando que nem foi criada a variável chamada

valor = null; //ausência de valor.
//sempre prefira o null para zerar uma variável.
// console.log(valor.toString()); //não pode ler a propriedade tostring() em um valor null.

const produto = {};
console.log(produto.preco);
//vai mostrar undefined por que, apesar da variável produto ter sido declarada, não existe valor no preco.
produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; //evite atribuir undefined, prefira null para zerar variável
console.log(!!produto.preco); //vai retornar falso por ser undefined.
console.log(produto);

produto.preco = null; //sem preço.
console.log(!!produto.preco);
console.log(produto);