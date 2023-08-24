# RETO INTERBANK - SISTEMA DE ADMINISTRACIÓN DE USUARIOS

Este proyecto es un ejemplo de un CRUD de Usuarios - Microfrontend con Stencil + Storybook

# Funcionalidades

- Crea, actualiza, elimina, Lista usuarios
- Aplicación de microfrontends
- STACK MEAN + StencilJS + StoryBook + Docker + Nginx
- Genera screenshots de las funciones del CRUD

# Stencil + StoryBook

- En este caso vamos a generar un story para el componente `ibk-user-add`
- Para generar Storybook a partir de componentes de Stencil, debemos seguir:
- Nos dirigimos a `stencil.config.ts` y configuramos la forma del build, debemos generarlo con el type ````'dist-custom-elements' `````

```javascript

  outputTargets: [
    // Para generar los customElements para StoryBook activamos esta configuración
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
    },
    // Para generar la web y alojarla en un servidor http activamos esta configuracion
    // {
    //   type: 'www',
    //   baseUrl: 'http://localhost:3333',
    // }
  ],

```

```bash
   npm run build
   npm run storybook
```

- Demo

- StoryBook - Users Add Component
  ![Users Add Component](https://raw.githubusercontent.com/cbracamonte/crud-users-ibk-stencil/main/assets/storybook.png)

## Demo Images

- Listado
  ![Listado del Usuarios](https://raw.githubusercontent.com/cbracamonte/crud-user-ibk-challengue/main/assets/listado.PNG)
- Agregar
  ![Agregar del Usuarios](https://raw.githubusercontent.com/cbracamonte/crud-user-ibk-challengue/main/assets/agregar.PNG)
- Editar
  ![Editar del Usuarios](https://raw.githubusercontent.com/cbracamonte/crud-user-ibk-challengue/main/assets/editar.PNG)
- Eliminar
  ![Eliminar del Usuarios](https://raw.githubusercontent.com/cbracamonte/crud-user-ibk-challengue/main/assets/eliminar.PNG)
- Genera Imagen
  ![Genera imagen para su descarga](https://raw.githubusercontent.com/cbracamonte/crud-user-ibk-challengue/main/assets/generafoto.PNG)

## Técnologias

- Web-Shell : Angular 14
- Web Microfrontend : Stencil 3.2.2
- broadcastchannel - Libreria creada por Hernan Bracamonte

## Pasos de Configuración

1. Instalar Docker:

   - [Instrucciones para instalar Docker](https://docs.docker.com/desktop/install/)

2. Habilitar Subsistema de Linux en Windows:

   - [Instrucciones para habilitar WSL en Windows](https://learn.microsoft.com/en-us/windows/wsl/install-manual)

3. Descargar las imágenes de NGINX y Node desde DockerHub:

   - [Imagen de NGINX en DockerHub](https://hub.docker.com/_/nginx)
   - [Imagen de Node en DockerHub](https://hub.docker.com/_/node/)

   Ejecutar los siguientes comandos:

   ```bash
   docker pull nginx
   docker pull node
   ```

## Clonamos el proyecto

```bash
  git clone https://github.com/cbracamonte/crud-users-ibk-stencil.git
```

## Construcción y Ejecución

    npm install
    npm run build
    npm run docker-build
    npm run docker-run

- Asegúrate de tener el puerto ``3333 disponible para la aplicación .

## Acceder a la aplicación

Si estás ejecutando localmente: http://localhost:3333
Si estás utilizando Docker: http://localhost:3333

## Manejo de Estados en Microfrontends

Para el manejo de estados entre microfrontends, se utiliza el concepto de BroadcastChannel. Además, se utiliza la librería broadcast-channel-hb para facilitar la comunicación entre páginas.

- Para instalar la librería:

  ```javascript
  npm install broadcast-channel-hb
  ```

- La idea es generar eventos en la shell (app Angular) y escuchar estos eventos en otras aplicaciones (microfrontends) para compartir estados.

- Repositorio: https://github.com/cbracamonte/broadcast-channel-ibk

## Notas

- Este proyecto es un ejemplo y puede requerir ajustes y mejoras adicionales.
- Falta completar la migración para Storybook
- No se ha implementado la persistencia de datos en este ejemplo por temas de tiempo
-

## Pizza Owner

    Hernan Bracamonte
     - https://www.linkedin.com/in/hernanbracamonte/
