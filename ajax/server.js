//o recomendado para trabalho de back-end com ajax é criar um arquivo para requisitar cada dependência, porém para aula
//será usada 1 único arquivo
const bodyparser = require('body-parser'); //instanciar os dados do request
const express = require('express'); //instanciar o servidor
const app = express();

app.use(express.static('.')) //prover os arquivo estáticos a partir da criação do middleware