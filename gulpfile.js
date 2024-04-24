const { src, dest, watch } = require('gulp')

const sass = require('gulp-sass')(require('sass'))

// export function tarea(done) {
//     console.log('Mi primer tarea');
//     done();
// }

//exports.tarea = tarea;

function css(done) {
	src('src/scss/app.scss') //Identificar arch SASS
		.pipe(sass()) //Compilar
		.pipe(dest('build/css')) //Almacenarlo en dd

	done()
}

function dev(done) {
    watch('src/scss/app.scss', css)
    done()
}

exports.css = css
exports.dev = dev
