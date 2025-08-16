import {src, dest, watch} from 'gulp' // importar dos funciones de gulp
import * as dartSass from 'sass' // importar sass
import gulpSass from 'gulp-sass' // importar gulp-sass

const sass = gulpSass(dartSass); //enlazamos gulp con sas

export function css( done ) {
    src('src/scss/app.scss') // source
        .pipe(sass().on('error', sass.logError)) // aplicar sass con la relación hecha previamente
        .pipe( dest('build/css')) // carpeta destino

    done();
}

export function dev() { // no pasamos el done para que no termine y siga escuchando por cambios
    watch('src/scss/**/*.scss', css); // observará el archivo scss y ejecutará la función css cada vez
}