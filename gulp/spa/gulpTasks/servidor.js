const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorarArquivos(cb)
{
	watch('src/assets/**/*.html', () => gulp.series('appHTML')()) 
	//toda vez que algum arquivo html for alterado, ele irá chamar a função appHTML para atualizar as mudanças (ou seja, pro "liveserver" funcionar)
	watch('src/assets/**/*.scss', () => gulp.series('appCSS')())
	//e assim por diante...

	return cb()
}
function servidor(cb)
{
	return gulp.src('build') //pasta usada no servidor
		.pipe(webserver({ //configurações do servidor
			port: 8080,
			open: true, //se quer que abra o browser = true, se não quer que abra o browser = false
			livereload: true //"liveserver"
		}))
}
module.exports = {
	monitorarArquivos,
	servidor
}