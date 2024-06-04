const service = require('../services/products.services');

const getAllProducts = (req, res) => {
  const products = service.getAllProducts();
  res.json(products);
};

const getProductId = (req, res) => {
  const product = service.getProductById(parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

const addProduct = (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  service.addProduct(newProduct);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const updatedProduct = service.updateProduct(parseInt(req.params.id), req.body);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

const deleteProduct = (req, res) => {
  const deletedProduct = service.deleteProduct(parseInt(req.params.id));
  if (deletedProduct) {
    res.json(deletedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

module.exports = {
  getAllProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct
};
