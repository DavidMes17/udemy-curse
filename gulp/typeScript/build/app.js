"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = require("./produto"); //import para importar o export do outro arquivo
function exibir(v) {
    console.log(v.nome + " custa " + v.preco + "!");
}
var c = new produto_1.Carro;
c.nome = 'Civic';
c.preco = 89499.00;
exibir(c);
