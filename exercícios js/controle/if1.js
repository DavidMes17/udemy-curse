function soboanoticia(nota) {
    if (nota >= 7) { //executa as ações de cima para baixo
        console.log('Aprovado com ' + nota)
    }
}
soboanoticia(8.1);
soboanoticia(6.1);

function seforverdadeeufalo(valor) {
    if (valor) { //só executará se a variável no parêntese for verdadeira
        console.log('É verdade...' + valor)
    }
}
seforverdadeeufalo();
seforverdadeeufalo(null);
seforverdadeeufalo(undefined);
seforverdadeeufalo(NaN);
seforverdadeeufalo('');
seforverdadeeufalo(0);
//apenas esses retornarão verdadeiros
seforverdadeeufalo(-1);
seforverdadeeufalo('?');
seforverdadeeufalo([]);
seforverdadeeufalo([1, 2]);
seforverdadeeufalo({});