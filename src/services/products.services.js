let products = [];

const getAllProducts = () => products;

const getProductId = (id) => products.find(product => product.id === id);

const addProduct = (product) => {
  products.push(product);
};

const updateProduct = (id, updatedProduct) => {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    return products[index];
  }
  return null;
};

const deleteProduct = (id) => {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);
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
