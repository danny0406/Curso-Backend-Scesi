const express = require("express");
require('dotenv').config();

const route_healthy = require('./routes/healthy.routes');
const route_product = require('./routes/products.routes');

const app = express();

app.use("/", route_healthy);

app.use("/products", route_product);





const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Servidor escuchando en el puerto ${SERVER_PORT}`);
  }
});


