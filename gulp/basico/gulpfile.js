//ao digitar gulp em alguma pasta, é esperado que tenha algum arquivo "gulpfile", no qual pode ser criado com o comando gulp --gulpfile ou gulp -f
cosnt gulp = require('gulp')
const series = gulp.series

const antes1 = cb => {
	console.log('Tarefa antes 1!')
	return cb
}

function copiar(cb) {
	gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //definir arquivos de entrada
	//se colocar .gulp.src('pastaA/**/**.txt') ele irá definir apenas arquivos .txt de entrada
	.pipe(gulp.dest('pastaB')) //se não existir a pasta, será criada para armazenar os arquivos para a pasta de destino
	//.pipe(imagemPelaMetade()) //aplicar transformações nos arquivos de entrada (plugins nos parênteses são de exemplo)
	//.pipe(imagemEmPretoEBranco()) //dá para aplicar mais de uma transformação nos mesmos arquivos de entrada
	return cb()
}

const fim = cb => {
	console.log('Tarefa fim!')
	return cb
}

module.exports = series(copiar)
//module espera receber uma tarefa default
module.exports.default = series
(
	parallel(antes1, copiar), //para fazer as 2 em paralelo, e após será feito o fim por estar na função em serie 
	fim
) //o series fará o comando ser feito em série, ou seja, faz o primeiro, depois o segundo, depois o terceiro, e quando chegar ao último ele acaba
//se colocar .default, se a pasta que estiver este comando estiver incluída, mesmo em outro diretório, se digitar gulp ele será executado
