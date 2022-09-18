const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas){
    //diferente do for no for1.js, aqui a variável i recebe o índice, não o valor do array em si
    console.log([i], notas[i]) //para acessar o valor ainda tem que colocar notas[i]
};

const pessoa = {
    nome: 'David',
    sobrenome: 'da Silva',
    idade: 17,
    altura: 1.7
};

for (let atributo in pessoa){ //o for/in é mais interessante neste quesito, de pegar dados de atributos de um objeto
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
console.log(let); 
//não esqueça de declarar como let no for para não virar uma variável global e provavelmente atrapalhar o resto do seu código