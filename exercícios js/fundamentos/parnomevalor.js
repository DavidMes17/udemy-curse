//par nome/valor
const saudacao = 'Opa'; //contexto léxico 1 (contexto local no qual a sua variável foi definida)

function exec(){
    const saudacao = 'faaala tiii'; //contexto léxico 2
    return saudacao;
};

/* const saudacao = 'ihaaaa'; */
//por estar no mesmo contexto léxico (contexto léxico 1), ele dará erro dizendo que é uma variável já declarada

//objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Pedro',
    idade: 34,
    peso: 75,
     endereco:{
        logradouro: 'Rua roxeda',
        numero: 123
     }
}
console.log(saudacao);
console.log(exec());
console.log(cliente);