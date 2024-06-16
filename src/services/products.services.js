const Product = require('../models/products.models')


const getAllProducts = async () => {
  return await Product.findAll();
};

const getProductId = async (id) => {
  return await Product.findByPk(id);
};

const addProduct = async (product) => {
  return await Product.create(product);
};

const updateProduct = async (id, updatedProduct) => {
  let product = await Product.findByPk(id);
  if (product) {
    await product.update(updatedProduct);
    return product;
  }
  return null;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (product) {
    await product.destroy();
    return product;
  }
  return null;
};

module.exports = {
  getAllProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct,
};
