const funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
};

funcs[2]();
funcs[8]();
//por let ter escopo de função, cada valor adicionado a ele será guardado, retornando o valor
//específico do índice do array chamado
