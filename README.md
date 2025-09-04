# Festival de Música Web

![Festival Musica cover](./src/img/festival_musica_cover.jpg)  

**Festival de Música Web** es una landing page desarrollada como proyecto web formativo.  
El objetivo es ofrecer una presentación atractiva y funcional de un festival de música, mostrando información relevante como artistas, fechas, ubicación y enlaces de interés, todo en una experiencia web rápida y responsiva.

El proyecto está desarrollado con **HTML, CSS (SASS) y JavaScript**, utilizando **Node.js, Gulp** para automatización de tareas y **devcontainers** para entornos de desarrollo consistentes.

---

## Requisitos
![HTML](https://img.shields.io/badge/HTML-orange) ![CSS](https://img.shields.io/badge/CSS-blue) ![JavaScript](https://img.shields.io/badge/JS-yellow) ![Node.js](https://img.shields.io/badge/Node.js-green)

- Lenguaje: HTML, CSS (SASS) y JavaScript  
- Toolkit: Gulp, Node.js  
- Contenerización: Devcontainers  

---

## Tecnologías y Librerías

- **HTML5 & CSS3**: Estructura y estilos de la página.  
- **SASS**: Preprocesador CSS para estilos más organizados y mantenibles.  
- **JavaScript**: Sticky menu y galería de imágenes.  
- **Gulp**: Automatización de tareas como compilación de SASS, minificación y construcción del proyecto.  
- **Node.js**: Entorno de ejecución para herramientas de desarrollo.  
- **Devcontainers**: Contenerización del entorno de desarrollo para consistencia entre distintos equipos y máquinas.

---

## Estructura del Proyecto

- **src/**: Archivos fuente de desarrollo (HTML, SASS, JS).  
- **gulpfile.js**: Configuración de tareas automatizadas con Gulp.  
- **build/**: Archivos compilados y minificados listos para producción.  
- **.devcontainer/**: Configuración de contenedor para desarrollo.  

El flujo de trabajo consiste en desarrollar en `src/`, procesar los archivos con Gulp, y generar el `build/` con los archivos para la versión de producción.

---

## Despliegue

El contenido se despliega como archivos estáticos generados en `build/`, listos para subir a cualquier servidor o servicio de hosting de archivos estáticos.
