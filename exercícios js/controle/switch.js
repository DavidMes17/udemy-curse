const imprimirresultado = function (nota) {
    switch (Math.floor(nota)) { //diferente do if/else, o switch não retorna true ou false para o bloco, ele retorna o valor ou os valores
        //está sendo utilizado o arredondamento do Math por que o valor não é do tipo float nos cases, já que precisa ser exatamente o mesmo valor
        case 10: //caso o valor seja 10, ele entra no case
        case 9: //caso o valor seja 9, ele entra no case
            console.log('Quadro de Honra!!!')
            //equivalente ao if (nota == 10 && nota == 9){console.log('Quadro de Honra!!!')};

            break //para evitar executar os outros cases abaixo, caso pelo um de cima seja verdadeiro

            case 8: case 7:{
                console.log('Aprovado')
                break
            } //funciona com chaves
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
            case 3: case 2: case 1: case 0:
                console.log('Reprovado')
                break
                default: //equivalente ao else do if/else
                console.log('Nota inválida')
                //não precisa de break por que não tem nenhum outro case abaixo
    }
    console.log('fim!'); 
//sempre executa as outras funções depois do switch, assim como no if/else 
}

imprimirresultado(10);
imprimirresultado(8.9);
imprimirresultado(6.55);
imprimirresultado(6.3);
imprimirresultado(-1);
imprimirresultado(-11);