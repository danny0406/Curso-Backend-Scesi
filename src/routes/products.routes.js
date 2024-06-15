const express = require('express');
const router = express.Router();

const router_product = require('../controllers/products.controller');

router.get('/filter', router_product.filterProducts);
router.post('/filter', router_product.filterProductsBody);
router.get('/', router_product.getAllProducts);
router.get('/:id', router_product.getProductId);
router.post('/', router_product.addProduct);
router.put('/:id', router_product.updateProduct);
router.patch('/:id', router_product.updateProduct);
router.delete('/:id', router_product.deleteProduct);
//router.get('/filter', router_product.filterProducts); //No funciona, Si se ubica aqui la ruta

module.exports = router;
