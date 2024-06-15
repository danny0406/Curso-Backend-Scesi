
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
const filterProducts = (query) => {
  const products = getAllProducts();
  return products.filter((product) => {
    let valid = true;

    const stock = parseInt(product.stock, 10);
    const discount = parseInt(product.discount, 10);
    const expirationDate = new Date(product.expiration);

    if (query.brand) {
      valid = valid && product.brand === query.brand;
    }
    if (query.stockover) {
      valid = valid && stock >= parseInt(query.stockover,10);
    }
    if (query.stockbelow) {
      valid = valid && stock <=  parseInt(query.stockbelow,10);
    }
    if (query.discountover) {
      valid = valid && discount >= parseInt(query.discountover,10);
    }
    if (query.discountbelow) {
      valid = valid && discount <= parseInt(query.discountbelow,10);
    }
    if (query.expireover) {
      valid = valid && expirationDate >= new Date(query.expireover);
    }
    if (query.expirebelow) {
      valid = valid && expirationDate <= new Date(query.expirebelow);
    }
    return valid;
  });
};


module.exports = {
  getAllProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct,
  filterProducts,
};
