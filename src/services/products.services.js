const Product = require('../models/products.models')

const getAllProducts = async () => {
  try {
    return await Product.findAll();
  } catch (error) {
    console.error('Error getting all products:', error);
    throw error;  
  }
};

const getProductId = async (id) => {
  try {
    return await Product.findByPk(id);
  } catch (error) {
    console.error(`Error getting product with id ${id}:`, error);
    throw error;  
  }
};

const addProduct = async (product) => {
  try {
    return await Product.create(product);
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;  
  }
};

const updateProduct = async (id, updatedProduct) => {
  try {
    let product = await Product.findByPk(id);
    if (product) {
      await product.update(updatedProduct);
      return product;
    }
    return null;
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error);
    throw error; 
  }
};

const deleteProduct = async (id) => {
  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.destroy();
      return product;
    }
    return null;
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error);
    throw error; 
  }
};


module.exports = {
  getAllProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct,
};
