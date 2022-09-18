const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'; //se for true retorna o da esquerda "aprovado", se for false retorna "reprovado"
/* const resultado = nota => {
    nota >= 7 ? 'Aprovado' : 'Reprovado'
} */
//esta linha é o equivalente ao abaixo
const result = nota;
if (nota >= 7) {
    echo = 'Aprovado'
} else {
    echo = 'Reprovado'
}

console.log(resultado(7.1));
console.log(resultado(6.7));