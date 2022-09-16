let numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero);
}
console.log('fora = ', numero); 
//irá imprimir a let que não está num bloco, pois diferente da var, o let se restringe em um bloco

let letra = a;
{
    let letra2 = b;
    console.log('dentro =', letra);
}
console.log('fora =', letra);
//ambos imprimirão o let fora do bloco pois, mesmo dentro do bloco, o console.log procura uma variável mais abrangente (global) para exibir

