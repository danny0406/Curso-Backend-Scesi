const service = require('../services/products.services');

const getAllProducts = (req, res) => {
  const products = service.getAllProducts();
  res.json(products);
};

const getProductId = (req, res) => {
  //const product = service.getProductId(parseInt(req.params.id)); Se tomo encuenta id : int
  const product = service.getProductId(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

function addProduct (req, res) {
  const newProduct = { id: String(Date.now()), ...req.body };// Asigna un id 
  service.addProduct(newProduct);
  return res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const updatedProduct = service.updateProduct(req.params.id, req.body);
  if (updatedProduct) {
    res.json(updatedProduct);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

const deleteProduct = (req, res) => {
  const deletedProduct = service.deleteProduct(req.params.id);
  if (deletedProduct) {
    res.status(204);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
};

const filterProducts = (req, res) => {
  console.log('req query:',req.query)
  const filteredProducts = service.filterProducts(req.query);//Query
  if (filteredProducts) {
    res.status(200).json(filteredProducts);
  } else {
    res.status(404).json(filteredProducts);
  }
};
const filterProductsBody = (req, res) => {
  console.log('req body:',req.body)
  const filteredProducts = service.filterProducts(req.body);//Body
  if (filteredProducts) {
    res.status(200).json(filteredProducts);
  } else {
    res.status(404).json(filteredProducts);
  }
};

module.exports = {
  getAllProducts,
  getProductId,
  addProduct,
  updateProduct,
  deleteProduct,
  filterProducts,
  filterProductsBody
};
