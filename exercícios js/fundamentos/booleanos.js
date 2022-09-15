let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);
/*
 * para que seja possível printar o valor true, coloca 2 negação para que o JS
 * não printa o valor contrário. por exemplo se colocar "!true" o valor a retornar
 * vai ser "false", mas se colocar "!!true" ele retornará o valor "true".
 * por isso, para converter um number em boolean, se coloca 2 negação para que não
 * seja printado um valor "mentiroso" do boolean
 */

console.log('valores verdadeiros;');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('valores falsos;');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || ' ')); //irá retornar true por que um dos valores é verdadeiro.
console.log(('' || null || 'epa' || 123)); //irá retornar apenas os valores verdadeiros, no caso a string (que pode ser um espaço) e o Number.

let nome = '';
console.log(nome || 'Nome não adicionado!'); //imprimirá a string.

nome = 'Lucas';
console.log(nome || 'Nome não adicionado!'); //imprimirá o nome Lucas.
