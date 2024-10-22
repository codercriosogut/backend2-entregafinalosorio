import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    number: Number,
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        name: String,
        price: Number,
        quantity: Number
    }],
    totalPrice: Number,
    status: String
});

// Aquí especificamos la colección como 'orders'
const Order = mongoose.model('Order', orderSchema, 'orders'); // 'orders' es el nombre de la colección
export default Order;
