/*
 * no caso do e
 * v e v -> v
 * f e ? -> f
 * 
 * no caso do ou
 * v ou v -> v
 * v ou ? -> v
 * 
 * no caso do "ou verdadeiro"
 * v xor v = f
 * f xor f = f
 * v xor f = v
 * f xor v = v
 */

function compras(trabalho1, trabalho2) {
    const comprasorvete = trabalho1 || trabalho2 //se der certo o trabalho1 ou o trabalho2, é possível comprar sorvete
    const comprarTV50 = trabalho1 && trabalho2 //se der certo o trabalho1 e trabalho2, é possível comprar uma TV de 50 polegadas
    // usar a lógica do xor tem 2 jeitos, mas não há um "xor" propriamente dito para funcionar como um &&
    //const comprarTV32 = !!(trabalho1 ^ trabalho2)
    const comprarTV32 = trabalho1 != trabalho2
    //se a diferença for verdadeira, no caso, v xor f ou f xor v, será o mesmo resultado do "ou verdadeiro"
    const manterSaudavel = !comprasorvete //operador unário
    return { comprasorvete, comprarTV50, comprarTV32, manterSaudavel }
};

console.log(compras(true,true)); //adicionando true aos 2 primeiros atributos, e o resto false
console.log(compras(true, false)); //desta forma dá para saber o resto utilizando a lógica
console.log(compras(false, true)); //no exemplo dessa como o trabalho 1 ou trabalho 2 deu certo, dá pra comprar a TV32
console.log(compras(false, false)); //melhor de visualizar essa, como nenhum dos trabalhos deu certo e não tomou sorvete, ele se manteve saudável