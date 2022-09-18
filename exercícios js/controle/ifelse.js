const resultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado');
    } else {
        console.log('Reprovado');
    }
}

resultado(10);
resultado(6);
resultado('Eita!'); //cuidado com a linguagem francamente tipada, na qual a string será considerada false no if e executará o else

const result = function (note) {
    if (note >= 7)
        console.log('Aprovado');
    else //também funcionam sem {}, mas lembrando que só executará um comando
        console.log('Reprovado');

};

resultado(10);
resultado(6);
resultado('Eita!');