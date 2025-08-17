import path from 'path'
import fs from 'fs'
import { src, dest, watch, series } from 'gulp' // importar funciones de gulp
import * as dartSass from 'sass' // importar sass
import gulpSass from 'gulp-sass' // importar gulp-sass
import terser from 'gulp-terser' // minificar js
import sharp from 'sharp'

const sass = gulpSass(dartSass); //enlazamos gulp con sas

export function js(done) {
    src('src/js/app.js')
        .pipe(terser())
        .pipe(dest('build/js'));

    done();
}

export function css(done) {
    src('src/scss/app.scss', { sourcemaps: true }) // source
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError)) // aplicar sass con la relación hecha previamente
        .pipe(dest('build/css', { sourcemaps: '.' })) // carpeta destino

    done();
}


// Codigo de node.js para hacer las imágenes más pequeñas --> sharp + fs
export async function crop(done) {
    const inputFolder = 'src/img/gallery/full'
    const outputFolder = 'src/img/gallery/thumb';
    const width = 250;
    const height = 180;
    if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true })
    }
    const images = fs.readdirSync(inputFolder).filter(file => {
        return /\.(jpg)$/i.test(path.extname(file));
    });
    try {
        images.forEach(file => {
            const inputFile = path.join(inputFolder, file)
            const outputFile = path.join(outputFolder, file)
            sharp(inputFile) 
                .resize(width, height, {
                    position: 'centre'
                })
                .toFile(outputFile)
        });

        done()
    } catch (error) {
        console.log(error)
    }
}

export function dev() { // no pasamos el done para que no termine y siga escuchando por cambios
    watch('src/scss/**/*.scss', css); // observará el archivo scss y ejecutará la función css cada vezç
    watch('src/js/**/*.js', js);
}

// Inicializar todas las tareas cuando se abre la página
export default series(crop, js, css, dev);