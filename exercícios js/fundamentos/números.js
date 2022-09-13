const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // toFixed define quantas casa decimais irá aparecer na tela.
console.log(media.toString()); //transformar valor em string.
console.log(media.toString(2)); //transformar valor em código binário.

// Number com N maiúsculo é função, number com n minúsculo é o tipo do dado.