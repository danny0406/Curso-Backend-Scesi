const service = require('../services/products.services');

const getAllProducts = async (req, res) => {
  const products = await service.getAllProducts();
  res.json(products);
};

const getProductId = async (req, res) => {
  const product = await service.getProductId(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

const addProduct = async (req, res) => {
  const newProduct = await service.addProduct(req.body);
  return res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const updatedProduct = await service.updateProduct(req.params.id, req.body);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

const deleteProduct = async (req, res) => {
  const deletedProduct = await service.deleteProduct(req.params.id);
  if (deletedProduct) {
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};



module.exports = {
  getAllProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct,
};
