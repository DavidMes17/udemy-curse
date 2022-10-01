const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function padrao(cb)
{
	gulp.src('src/**/*.js')
		.pipe(babel({
			comments: false,
			presets: ["env"] //env para pegar a versão mais nova possível do JS para converter
		}))
		.pipe(uglify()) //pega todo o código para ser unificado em uma linha
		.on('error', err => console.log(err)) //.on para definir algum evento
		.pipe(concat('codigo.min.js')) //nome do arquivo na qual será salvo
		.pipe(gulp.dest('build')) //pasta de destino

	return(cb)
}

exports.default = series(padrao) //no arquivo terá 2 linhas por que foram 2 arquivos