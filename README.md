# Curso-Backend-Scesi
## Instalacion express
Para la instalacion del modulo **Express** de NodeJS, se debe tener instalado previamente Node.js [descargar e instalar Node.js](https://nodejs.org/en/download/).

Se necesita crear un nuevo proyecto debe crear su directorio:

```console
$ mkdir miproyecto
$ cd miproyecto
```
Es importante tener el archivo **`package.json`** , sino procedemos a su creacion con:
```console
$ npm init --yes 
```
Instalando express:
```console
$ npm install express
```


Ejecute la aplicación con el siguiente comando para recargar los cambios realizados:
```console
$ node src/index.js
```

## Ejecución del proyecto

Clonar este repositorio y ejecutar el siguiente comando para instalar sus dependencias:

```ps
$ npm install
```

Para iniciar el proyecto ejecute el siguiente comando:

```ps
$ npm run start:dev

> curso-backend-scesi@1.0.0 start:dev
> nodemon src/index.js

[nodemon] 3.1.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node src/index.js`
Servidor escuchando en el puerto 3001
```