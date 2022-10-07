const {series} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS()
{
	return gulp.src('src/sass/index.scss') //não puxou todos .scss por que o index.scss já tem o import de todos
		.pipe(sass().on('error', sass.logError)) //já converte o sass em css
		.pipe(uglifycss({"uglycomments": true}))
		.pipe(concat('estilo.min.css'))
		.pipe(gulp.dest('build/css'))
}

function copiarHTML()
{
	return gulp.src('src/index.html')
		.pipe(gulp.dest('build'))
}

exports.default = series(transformacaoCSS, copiarHTML)
