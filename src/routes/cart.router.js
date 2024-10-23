const express = require('express');
const router = express.Router();
const { isUser } = require('../middlewares/authorization');
const cartController = require('../controllers/cart.controller');

// Ruta para agregar productos al carrito, solo accesible por usuarios
router.post('/add', isUser, cartController.addProductToCart);

module.exports = router;
