const User = require('../dao_dto/models/user.model.js'); // Asegúrate de que tienes el modelo de usuario o carrito adecuado
const Product = require('../dao_dto/models/product.model.js'); // Asegúrate de que tienes el modelo de producto adecuado

// Controlador para agregar productos al carrito
const addProductToCart = async (req, res) => {
    try {
        const userId = req.user._id; // El usuario autenticado
        const { productId, quantity } = req.body;

        // Verifica que el producto exista
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Encuentra el carrito del usuario (puedes tenerlo como parte del modelo de usuario)
        let user = await User.findById(userId).populate('cart.products.product');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verifica si el producto ya está en el carrito
        const cartItemIndex = user.cart.products.findIndex(item => item.product._id.equals(productId));

        if (cartItemIndex >= 0) {
            // Si el producto ya está en el carrito, actualiza la cantidad
            user.cart.products[cartItemIndex].quantity += quantity;
        } else {
            // Si no está en el carrito, añádelo
            user.cart.products.push({ product: productId, quantity });
        }

        // Guarda los cambios
        await user.save();

        return res.status(200).json({ message: 'Product added to cart', cart: user.cart });
    } catch (error) {
        console.error('Error adding product to cart:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    addProductToCart
};
