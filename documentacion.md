# NODE JS

Entorno sobre el que se ejecutan otras dependencias, como puede ser Gulp.

Para ***instalarlo***, en este caso se recurre a una ***imagen de docker*** para no instalarlo en local y ejecutamos el proyecto sobre la imagen.

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

>!IMPORTANTE
>El archivo `package-lock.json` no se debe modificar nunca.

## Carpeta modules al compartir el proyecto
Cuando compartimos el proyecto podemos ***eliminar la carpeta node_modules*** por mejora de performance, ya que ocupa mucho espacio.

Cuando descargamos el proyecto, podemos ***recuperarla utilizando npm***.

```
npm i
```
Con el comando de arriba, ***node.js utilizará el archivo package.json para descargar las dependencias necesarias de nuevo, generando la carpeta node_modules automáticamente***.

