const escola = "Miguel Gurgel";

console.log(escola.charAt(4)); //mostra o 4° caractere da string (sempre começa por 0)
console.log(escola.charAt(25)); //caso exceda o valor de caracteres, ele não printa nenhuma informação ao console
console.log(escola.charCodeAt(4)); //printa o código HTML referente ao unicode do caractere escolhido
console.log(escola.indexOf('e'));

console.log(escola.substring(1)); //determina por qual caractere o console começará a printar
console.log(escola.substring(0, 3)); //printa a partir do 0, e termina no número que antecede o último caractere referente ao último número

console.log('Escola: '.concat(escola).concat("!")); //concatena valores, sendo possível neste exemplo formar uma frase
console.log('Escola: ' + escola + "!"); //mesmo resultado do código acima
console.log(escola.replace(6, '-')); //substitui o caractere referente ao número na função e substitui pela string que por depois

console.log('David,Marcílio,Gabriel,Wescley'.split(',')); //converter várias strings em um array, usando como separador a "," colocada no parênteses do split
