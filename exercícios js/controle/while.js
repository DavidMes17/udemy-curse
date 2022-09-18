function getinteiroaletorioentre(min,max){
    const valor = Math.random() * (max-min) +min
    return Math.floor(valor)
}
let opcao = 0;

do { //diferente do exemplo do arquivo 'while.js', aqui ele executa primeiro o comando antes de verificar se é false ou true 
    opcao = getinteiroaletorioentre(-1, 10);
    console.log(`opção escolhida foi ${opcao}.`)
} while(opcao != -1)

console.log('até a próxima!');