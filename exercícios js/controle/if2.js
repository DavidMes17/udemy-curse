function teste1(num) {
    if (num > 7)
    console.log(num) //este será executado somente se if der true
    console.log('final!') //este será executado independente do resultado do if, por não fazer parte dele, e sim da função, por não estar usando {}
//dá pra usar if sem usar chaves, mas terá a execução de um único comando, sendo mais recomendado o uso de {}
}

teste1(6);
teste1(8);

function teste2(num){
    if(num > 7); //se usar ; depois de um if, ele irá pará na verificação e não fará nada, e por estar numa função, será executada o bloco a seguir
    {
        console.log(num)
    }
}

teste2(6);
teste2(8);