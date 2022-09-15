const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores [3]);
console.log(valores[4]); //printará "undefined" por que não existe o índice 4 no array.

valores[4] = 25;
console.log(valores[4]); //aí sim printará o valor do índice 4

valores [10] = 55;
console.log(valores); // nos índices vazios, printará no console "X itens vazios".

console.log(valores.length); //mostra quantos elementos tem em um array.

valores.push({id: 3}, false, null, 'teste'); //adicionar novos elementos no array
console.log(valores);
/*
 * é recomendado que tenha array's de tipos de dados homogênios, por exemplo, se começou um array
 * com string, o recomendado é até o último dado serem do tipo string.
 */

console.log(valores.pop()); //retorna o último valor do array e o apaga do array.
delete valores[0]; //para deletar algum array pelo índice indicado.
console.log(valores);

console.log(typeof valores); //array é reconhecido como object no JavaScript.