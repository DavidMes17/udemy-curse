let num1 = 1;
let num2 = 2;

++num1; //é o mesmo que num1++; ou seja, adiciona uma unidade a variável, a diferença é que tem mais prioridade, assim como a mult/div numa equação
console.log(num1);
--num1; //é o mesmo que num1--; ou seja, subtrai uma unidade a variável, a diferença é que tem mais prioridade, assim como a mult/div numa equação
console.log(num1);

console.log(++num1 === num2--); //vai dar true por que, no num1 a soma de unidade foi feita antes de comparar, e no num2 a subtração de unidade foi feita depois de comparar
//tente manter um código simples, evite usar este exemplo
console.log(num1 == num2); //vai dar false por que nesta linha a subtração da unidade num2 foi feita, tendo valores diferentes