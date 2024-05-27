const express = require("express");
require('dotenv').config();
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Mundo!!!");
});

app.get("/healthy", require('./routes/healthy.routes'));

const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Servidor escuchando en el puerto ${SERVER_PORT}`);
  }
});


