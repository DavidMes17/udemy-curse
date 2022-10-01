const {series, parallel} = require('gulp')
const gulp = require('gulp')
const {appHTML, appCSS, appJS, appIMG} = require('./gulpTasks/app')
const {depsCSS, depsFonts} = require('./gulpTasks/deps')
const {monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series
(
	parallel //paralelo para executar os arquivos e dependências
	(
		series(appHTML, appCSS, appJS, appIMG),
		series(depsCSS, depsFonts)
	), //e após, iniciar o servidor e monitorar os arquivos
	servidor, monitorarArquivos
)