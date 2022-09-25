//o recomendado para trabalho de back-end com ajax é criar um arquivo para requisitar cada dependência, porém para aula
//será usada 1 único arquivo
const bodyparser = require('body-parser'); //instanciar os dados do request
const express = require('express'); //instanciar o servidor
const app = express();

app.use(express.static('.')) //prover os arquivo estáticos a partir da criação do middleware
app.use(bodyparser.urlencoded({ extended: true })); //se vier como submit do formulário, este comando irá transformar em objeto
app.use('/link', bodyparser.urlencoded({ extended: true })); //caso queira atribuir o comando a algum link da página
app.use(bodyparser.json()); //transformar o json em objeto

app.get('/hoje', (req, res) => res.send(new Date)); //função middleware para métodos do tipo GET [localhost:8000/hoje]{fará a função funcionar}
//req para chamar a função, e res é a função, após o res irá retornar um Ok! 

const multer = require('multer') //interpretar o formulário do arquivo de upload

const storage = multer.diskStorage({ //não é necessário fazer esta função, mas é normalmente usada para personalizar a pasta onde onde será salvo os arquivos e manipular o nome dos arquivos na hora de salvar
    destination: function (req, file, callback) {
        callback(null, './upload') //armazenar os arquivos na pasta upload
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) //definindo o nome do arquivo para salvar com a data atual, e após o nome original do arquivo
    }
})

const upload = multer({ storage }).single('arquivo') //função para salvar os arquivos, e o arquivo é o parâmetro da requisição

app.listen(8000, () => console.log('Executando com sucesso!'));
//para usar estes comandos em algum servidor, no meu caso na porta 8000 e o console.log para mostrar que funcionou
//para iniciar, digita no terminal na pasta do ajax "npm start" e funcionará como um "php artisan serve"
//no navegador digita localhost:{porta escolhida} no meu caso é localhost:8000