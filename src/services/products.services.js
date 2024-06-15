
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
const filterProducts = (filter) => {
  const products = getAllProducts();
  return products.filter((product) => {
    let valid = true;

    const stock = parseInt(product.stock, 10);
    const discount = parseInt(product.discount, 10);
    const expirationDate = new Date(product.expiration);

    if (filter.brand) {
      valid = valid && product.brand === filter.brand;
    }
    if (filter.stockover) {
      valid = valid && stock >= parseInt(filter.stockover,10);
    }
    if (filter.stockbelow) {
      valid = valid && stock <=  parseInt(filter.stockbelow,10);
    }
    if (filter.discountover) {
      valid = valid && discount >= parseInt(filter.discountover,10);
    }
    if (filter.discountbelow) {
      valid = valid && discount <= parseInt(filter.discountbelow,10);
    }
    if (filter.expireover) {
      valid = valid && expirationDate >= new Date(filter.expireover);
    }
    if (filter.expirebelow) {
      valid = valid && expirationDate <= new Date(filter.expirebelow);
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
