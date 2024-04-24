const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')

// export function tarea(done) {
//     console.log('Mi primer tarea');
//     done();
// }

//exports.tarea = tarea;

function css(done) {
	src('src/scss/**/*.scss') //Identificar arch SASS
		.pipe(plumber())
		.pipe(sass()) //Compilar
		.pipe(dest('build/css')) //Almacenarlo en dd

	done()
}

function dev(done) {
	watch('src/scss/**/*.scss', css)
	done()
}

exports.css = css
exports.dev = dev
