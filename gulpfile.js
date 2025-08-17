import {src, dest, watch, series} from 'gulp' // importar funciones de gulp
import * as dartSass from 'sass' // importar sass
import gulpSass from 'gulp-sass' // importar gulp-sass

const sass = gulpSass(dartSass); //enlazamos gulp con sas

export function js( done ) {
    src('src/js/app.js')
        .pipe(dest('build/js'));
            
    done();
}

export function css( done ) {
    src('src/scss/app.scss', {sourcemaps: true}) // source
        .pipe(sass().on('error', sass.logError)) // aplicar sass con la relación hecha previamente
        .pipe( dest('build/css', {sourcemaps: '.'})) // carpeta destino

    done();
}

export function dev() { // no pasamos el done para que no termine y siga escuchando por cambios
    watch('src/scss/**/*.scss', css); // observará el archivo scss y ejecutará la función css cada vezç
    watch('src/js/**/*.js', js);
}

// Inicializar todas las tareas cuando se abre la página
export const build = series(js, css);
export default build;