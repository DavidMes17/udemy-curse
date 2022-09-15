{ { { { var sera = 'será???'; } } } }
//variáveis do tipo var estão visíveis no código mesmo dentro de vários blocos como a linha 1, exceto em função
console.log(sera);

function teste(){
    var local = 123;
};
teste();
console.log(local); //retornará um erro pois uma variável dentro de uma função não está visível no código
