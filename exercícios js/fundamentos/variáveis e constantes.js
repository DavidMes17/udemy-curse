var a = 3;
let b = 4;

var a = 30;
/* let */ b = 40;

console.log(a, b); 
//dará erro na variável b se for declarado mais de uma variável do tipo let
//ocorrerá tudo certo se tirar o nome let da variável b que está atribuída o valor 40

a = 300;
b = 400;

console.log(a, b);
// não é obrigatório uso da declaração de variável para atribuir valor

const c = 50;
// c = 70;

console.log(c);
//variáveis do tipo constante não podem ter valores atribuídos após sua declaração