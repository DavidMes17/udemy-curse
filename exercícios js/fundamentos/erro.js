function tratarerro (){
    throw new Error('Nome não identificado...')
  /*   throw 10
    throw 'deu ruim'
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
} */
}

function imprimirnomegritado(obj){
    try{ //tenta analisar algum erro
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){ //caso dê erro, o catch age, e nesse exemplo ele chama a função trataerro
        tratarerro(e)
    } finally{ //o finally executará se qualquer um funcionar, tanto try se der certo, como catch se der erro, finally sempre irá ser executado
        console.log('função executada com sucesso!!!')
    }
};

const obj = {nome: 'Roberto'}; 
//note que aqui eu estou tentando pegar dado do atributo nome, mas no objeto é name
imprimirnomegritado(obj); //retorna o erro undefined e não pode realizara a ação toUpperCase em um atributo indefinindo
