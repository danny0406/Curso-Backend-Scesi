
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '../assets/data.json');

const getAllProducts = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const getProductId = (id) => {
  const products = getAllProducts();
  return products.find(product => product.id === id);
};

const addProduct = (product) => {
  const products = getAllProducts();
  products.push(product);
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
};

const updateProduct = (id, updatedProduct) => {
  let products = getAllProducts();
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    return products[index];
  }
  return null;
};

const deleteProduct = (id) => {
  let products = getAllProducts();
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);
    fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
    return deletedProduct[0];
  }
  return null;
};

module.exports = {
  getAllProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct
};
