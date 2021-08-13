# GitHub Jobs API App: SPA with React Hooks and React Router

⚠️ Note: GitHub Jobs is deprecated! It will shut down entirely on August 19, 2021. A db.json file was created with a similar data structure. ⚠️

## Introducción

- Ver en: [react-github-jobs-app.herokuapp.com](https://react-github-jobs-app.herokuapp.com/)
- Misma app en Javascript Vanilla: [github-jobs-api-app](https://github.com/mariam-blanco/github-jobs-api-app)

GitHub Jobs API App es una aplicación que se desarrolla para practicar los lenguajes y tecnologías de front-end. Se hace a partir en uno de los "retos" de la web Frontend Mentor, que ofrece los diseños, imágenes... necesarios para construir proyectos reales.

![Design preview for the GitHub Jobs API coding challenge](./src/assets/preview.jpg)

## Funcionalidades

A partir de un "starter kit" de Frontend Mentor para el proyecto que contiene:

- los diseños de la app tanto para web, tablet y móvil en Sketch y Figma
- las imágenes e iconos
- una [breve explicación del proyecto](https://github.com/mariam-blanco/github-jobs-api-app/blob/master/src/assets/README.md)

Se crea una app con las siguientes funcionalidades:

- Mostrar TODAS las ofertas de trabajo de la API de GitHub Jobs cuando se carga la página.
- Buscador que permita hacer búsquedas de ofertas de trabajo de la API por términos, localización y/o tipo de jornada (jornada completa o no).
- La API de GitHub Jobs devuelve un máximo de 50 ofertas de trabajo en cada llamada al servidor. En el caso de que la respuesta contenga más de 50 anuncios mostrar un botón que permita cargar más anuncios.
- La API proporciona la fecha de creación del anuncio. En vez de mostrar la esta fecha mostrar el tiempo transcurrido desde la publicación del anuncio hasta la fecha actual. Por ejemplo: 1m (1 mes), 2h (2 horas).
- Al hacer click en el título de la tarjeta del anuncio se tiene que mostrar una página con todos los datos de la oferta de trabajo.
- El usuario pueda elegir los colores de la web, si quiere "modo claro" o "modo oscuro".
- Diseño adaptado a la web, tablet y móvil.

![GitHub Api Jobs App Gif](https://github.com/mariam-blanco/react-github-jobs-app/blob/master/src/assets/responsive.gif)

## Tecnologías

- React Hooks
- React Router
- HTML y CSS
- Sass
