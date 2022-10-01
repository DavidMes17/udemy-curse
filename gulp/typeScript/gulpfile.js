const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json') //arquivo que o compilado de TS irá utilizar

function transformacaoTS()
{
	return tsProject.src() //dessa vez não preciso informar o diretório por já ter sido definida na const tsProject
		.pipe(tsProject())
		.pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS) //agora convertido em JS, o node funciona
