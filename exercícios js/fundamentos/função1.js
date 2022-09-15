//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
};

imprimirSoma(2, 3); //adiciona valor aos 2 parâmetros a, b
imprimirSoma(2); //adiciona valor ao 1° parâmetro a, o parâmetro b fica undefined.
imprimirSoma(2, 3, 4, 5, 6, 7, 8, 9); //pega os 2 primeiros valores e atribui aos 2 parâmetros da função, ignorando todo o resto.
imprimirSoma(); //neste caso dará NaN por não ter o que somar/concatenar

//função com retorno
function soma(a, b = 0){ //o parâmetro b começará com valor 0, caso não tenha atribuição de valor na função
 return a + b;
};

soma (2+3); //aparecerá NaN por que na função tem o return, e return não aparece no console
console.log(soma(2 + 3)); //colocando o return dentro de um console.log fará o resultado aparecer no console.
console.log(soma(2)); //irá retornar 2, pois mesmo não atribuindo valor ao parâmetro b, foi definido que por padrão teria o valor 0, e 2+0=2
