console.log(typeof console);
//é um objeto

console.log(Math.ceil(6.1)); //arredondamento para cima
console.log(Math.floor(6.1)); //arredondamento para baixo

const obj1 = {};
//ambos abaixo tem a mesma função
obj1.nome = 'Francisco José';
obj1['nome'] = 'Francisco Paulo';
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome 
    //this para criar um atributo ou funções públicas, ou seja, criando uma variável global mesmo numa função por exemplo
    this.exec = function(){
        console.log('JavaScript...')
    }
};
const obj2 = new Obj('cadeira'); //precisa do valor do atributo
const obj3 = new Obj('mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();