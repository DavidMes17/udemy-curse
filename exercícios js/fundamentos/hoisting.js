console.log('a = ', a);
var a = 2;
console.log('a = ', a);
var b;
console.log('b = ', b);
b = 2;
console.log('b = ', b);
//ambas printarão o mesmo resultado, mostrando que a variável pode ser declarada em qualquer lugar, mas seu valor não
console.log('c = ', c);
 //nesta forma printará que a variável não foi definida

function teste(){
    console.log('d = ', d);
var d = 2;
console.log('d = ', d);
};
teste ();
//printará o mesmo do exemplo da variável a

console.log('e = ', e);
let e = 5;
console.log('e = ', e);
//dará erro na primeira por que a variável let não sofre o sistema de hoisting
