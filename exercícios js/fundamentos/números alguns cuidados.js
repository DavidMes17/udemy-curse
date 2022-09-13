console.log(7 / 0);
//gera infinito

console.log('3' + 2); //não irá printar o número 5 pois o JS dá prioridade a string, e "+" ao lado de uma string faz com que ele concatene com o próximo dado, printando o número "32"
console.log('3' - 2);

console.log("10" / 2); 
//se a string for composta apenas por números, o JS converte em number e realiza a ação.

console.log("Show!" * 2);
//vai retornar NaN (Not a Number).

console.log(0.1 + 0.7);
//resultado impreciso com pontos flutuantes pela especificação "Binary Floating-Point Aritmetic" 
// na qual realiza a ação mais rápido, se fosse preciso seria mais lento para retornar o resultado da ação

// "console.log(10.345.toFixed(2));"
//irá retornar erro por que não funciona com o valor em si

//para funcionar, basta apenas adicionar parênteses envolta, deste formato:
console.log((10.345).toFixed(2));