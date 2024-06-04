const express = require('express');
const router = express.Router();

const router_product = require('../controllers/products.controller');

router.get('/', router_product.getAllProducts);
router.get('/:id', router_product.getProductId);
router.post('/', router_product.addProduct);
router.put('/:id', router_product.updateProduct);
router.patch('/:id', router_product.updateProduct);
router.delete('/:id', router_product.deleteProduct);

module.exports = router;
