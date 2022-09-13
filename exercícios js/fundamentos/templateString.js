const nome = 'Rodrigo';

const concatenacao = 'Olá, ' + nome + ' Bem vindo ao Mundo!';

const template = `
    Olá 
    ${nome}
    Bem vindo ao mundo!`; 
/*
 * um template sempre precisa estar entre crases, e diferente de strings
 * concatenadas como a variável 'concatenacao', aceita a quebra de linha
 * e printa com as tais quebras, como é possível observar no console
 */
console.log(concatenacao, template);

//expressão...

console.log(`1 + 1 = ${1 + 1}`);
/* 
 * em um template, o JS irá interpretar apenas o que está dentro de "${}", o resto
 * ele interpretará como uma string e irá apenas imprimir do formato em que o 
 * desenvolvedor deixou no código
 */

const up = texto => texto.toUpperCase(); //função para deixar tudo maiúsculo
console.log(`Ei... ${up('cuidado')}!`); //note que no console aparecerá tudo em maiúsculo