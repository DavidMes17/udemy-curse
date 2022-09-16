const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua FIVE',
        numero: 100
    }
}
const { nome, idade } = pessoa;
//{} => tire do objeto estes atributos
// = nomeobjeto => qual objeto tirar os atributos
//criou 2 variáveis, uma nome e outra idade, com seus respectivos valores do objeto
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
//criar uma variável com um nome mais abreviado para facilitar o resto do código
console.log(n, i);

const {sobrenome, bemHumorada = true } = pessoa;
//caso não exista o atributo, ele mostra undefined, se deixar um valor atribuído na hora de puxar
//o atributo, mostrará esse valor atribuído caso não tenha valor ou a variável não tenha sido declarada
//no objeto
console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa;
//pegando valores do endereço dentro do objeto, mas não cria a variável endereço
console.log(logradouro, numero);

const {conta: {ag, num}} = pessoa;
console.log(ag, num);
//nesta situação retornará um erro por estar tentando destruturar algo que não é objeto "error ,property `ag` `num` undefined or null"
//precisa ter ao menos, no exemplo citado, conta criada, e seus atributos nulos ou indefinidos pra não gerar problemas

