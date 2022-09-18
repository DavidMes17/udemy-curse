//nos operadores relacionais, o valor sempre será true/1 ou false/0
console.log('01)', '1' == 1); //saber se é a string ou outro dado é igual a 1
console.log('02)', '1' === 1); //saber se é estritamente igual a 1, tanto valor como tipo do dado
console.log('03)', '3' != 3); //comparando os valores, dará false por que a string 3 tem o valor do number 3 igual
console.log('04)', '3' !== 3); //comparando os valores dará true, por que está sendo considerado valor e tipo de dado
//é mais recomendado usar o estritamente igual para comparar as variáveis

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0);
const d2 = new Date(0);
console.log('09)', d1 == d2); //neste caso o "==" e "===" não fará diferença pois ele considera o valor da memória
console.log('10)', d1.getTime() === d2.getTime());

console.log(undefined == null); //dará true por que o valor é igual
console.log(undefined === null); //dará false por que o tipo indefinido é diferente do tipo nulo