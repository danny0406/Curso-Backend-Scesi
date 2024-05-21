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
## "Hola mundo" con ExpressJS

Primeramente debemos crear un archivo **`myapp.js`** o **`index.js`** y agregue el codigo siguiente:

```js
// Importar el módulo express
const express = require("express");

// Crear una instancia de la aplicación Express
const app = express();

// Definir una ruta para manejar una solicitud GET en la raíz ('/')
app.get("/", (req, res) => {
  // Enviar una respuesta de texto al cliente
  res.send("Hola Mundo!!!");
});

// Definir el puerto en el que se ejecutará el servidor
const SERVER_PORT = 3000;

// Iniciar el servidor y hacer que escuche en el puerto definido
app.listen(SERVER_PORT, (err, res) => {
  // Si ocurre un error al iniciar el servidor, se imprimirá en la consola
  if (err) {
    console.log(err);
  } else {
    // Si el servidor se inicia correctamente, se imprimirá un mensaje en la consola
    console.log(`Servidor escuchando en el puerto ${SERVER_PORT}`);
  }
});

```
Ejecute la aplicación con el siguiente comando:
```console
$ node app.js
```
A continuación, cargue http://localhost:3000/ en un navegador para ver la salida

## "/Healthy " - NodeJS y ExpressJS
Agregamos la siguiente ruta:

```js
app.get("/healthy", (req, res) => {
  res.status(200).json({
    healt: "live",
    status: 200,
    message: "ok",
  });
});
```
Ejecute la aplicación con el siguiente comando para recargar los cambios realizados:
```console
$ node app.js
```
Cargando http://localhost:3000/healthy en un navegador veremos la salida:
```json
{
    "healt": "live",
    "status": 200,
    "message": "ok"
}
```