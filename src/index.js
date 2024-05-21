const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo!!!");
});

const SERVER_PORT = 3000;

app.listen(SERVER_PORT, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Servidor escuchando en el puerto ${SERVER_PORT}`);
  }
});
