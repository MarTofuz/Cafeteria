const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');

function css(done) {
    //compilar sass
    //pasos: 1- identificar archivo, 2- Compilarla, 3- Guardar el .css

    src('src/scss/app.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(dest('build/css'))
    done();
}

function dev() {
    watch('src/scss/**/*.scss', css);
}

exports.css = css;
exports.dev = dev;
exports.default = series(css, dev);

// series - se inicia una tarea, y hasta que se finaliza, inicia la siguiente
// parallel - Todas inician al mismo tiempo