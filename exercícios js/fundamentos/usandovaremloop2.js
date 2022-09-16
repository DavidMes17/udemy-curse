const funcs = [];
for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i);
    })
};

funcs[2]();
funcs[8]();
//por var não ter escopo de função, sempre irá retornar 10 em qualquer array atribuído ao seu valor
//e for chamado