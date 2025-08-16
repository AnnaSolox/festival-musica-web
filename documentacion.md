# NODE JS

Entorno sobre el que se ejecutan otras dependencias, como puede ser Gulp.

Para **_instalarlo_**, en este caso se recurre a una **_imagen de docker_** para no instalarlo en local y ejecutamos el proyecto sobre la imagen.

## Creación de package.json y package-lock.json

`package.json` es un archivo destinado a gestionar varios aspectos:

- **_Gestión de dependencias_** : enumera todas las dependencias (producción -dependencies- y desarrollo -devDependencies-). Esto permite que cualquier persona pueda instalar las dependencias con `npm install`.
- **_Scripts_** : permite definir scripts personalizados, que se pueden ejecutar con `npm run`.

> !TIP
> Para crear el aprchivo se utiliza `npm init` y se responden a las preguntas que va lanzando el terminal.

```
npm init
```

## Instalación de módulos o dependencias

La sintaxis por terminal es la siguiente:

```
npm i [nombreDependencia]
```

> !TIP
> Puedes encontrar todas las dependencias en [La pagina de npm](https://www.npmjs.com/).

Al instalar las dependencias se **_modifica el package.json_** y se genera la carpeta **_modules_**.

### Instalación SASS

```
npm i sass
```

## Tipos de dependencias

### Dependencias

Son necesarias en el servidor.

### Dependencias de desarrollo

No son necesarias en el servidor, solo durante el desarrollo.
Por ejemplo SASS, que necesita Gulp para compilar.

Para mover la dependencia de `dependencies` a `devDependencies` ejecutamos el siguiente comando:

```
npm i --save-dev sass
```

También se puede usar esta otra sintaxis:

```
 npm i -D sass
```

### Dependencias de las dependencias

Dependencias de las que dependen la dependencia que estamos instalando.
El `package-lock.json` es el encargado de decidir cuáles son estas dependencias que necesita la dependencia a instalar.

> !IMPORTANTE
> El archivo `package-lock.json` no se debe modificar nunca.

## Scripts

Se ejecutan con el siguiente comando:

```
npm run [nombreScript]
```

### Añadir compilador

Cuando instalamos una dependencia, npm i agrega automáticamente a la **_carpeta [.bin](node_modules/.bin)_** el **_archivo necesario para la compilación_**.

Este archivo tenemos que **_agregarlo al package.json_** en la **_sección de scripts_**.

Se añade el nombre del compilador y dentro del script escribimos el nombre que corresponde a la dependencia dentro de la carpeta .bin, un espacio y la ruta donde tenemos la hoja de estilos que va a compilar : donde compilará el css:

```
"scripts": {
    "[nombreScript]": "[compiladorCarpetaBin] [rutaHojaEstilosSass]:[rutaDestinoCss]"
  }
```

#### Aladir compilador de SASS

```
"scripts": {
    "sass": "sass src/scss:build/css"
  }
```

>!TIP
>Para poder ver en vivo los cambios que se realizan en la hoja de estilos scss debemos activar el modo watch en el script del siguiente modo:
> ```
>"scripts": {
>    "sass": "sass --watch src/scss:build/css"
>  }
>```

### Enlazar hoja de estilos compilada al HTML
En el ***index.html*** no hay que enlazar la hoja de estilos scss, sino que ***se debe enlazar el css generado a partir del script en la carpeta build***

```
<link rel="stylesheet" href="build/css/app.css">
```

Cada vez que realicemos un cambio y queremos que vayan a producción, debemos compilar de nuevo.

## Carpeta modules al compartir el proyecto

Cuando compartimos el proyecto podemos **_eliminar la carpeta node_modules_** por mejora de performance, ya que ocupa mucho espacio.

Cuando descargamos el proyecto, podemos **_recuperarla utilizando npm_**.

```
npm i
```

Con el comando de arriba, **_node.js utilizará el archivo package.json para descargar las dependencias necesarias de nuevo, generando la carpeta node_modules automáticamente_**.
