const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middlewares/authorization');
const productController = require('../controllers/product.controller');

// Rutas para crear, actualizar y eliminar productos, solo accesibles por administradores
router.post('/create', isAdmin, productController.createProduct);
router.put('/:id', isAdmin, productController.updateProduct);
router.delete('/:id', isAdmin, productController.deleteProduct);

module.exports = router;
