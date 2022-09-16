console.log(typeof Object);
console.log(typeof new Object);
//no exemplo de baixo não será função por que ele foi criado a partir de uma função, ou seja,
//Object debaixo é um objeto de uma função

const Cliente = function() {};
console.log(typeof Cliente);
console.log(typeof new Cliente);

class Produto {};
console.log(typeof Produto);
console.log(typeof new Produto);
