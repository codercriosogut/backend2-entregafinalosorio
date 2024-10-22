import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    number: Number,
    business: { type: mongoose.Schema.Types.ObjectId, ref: 'Business' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    products: [{
<<<<<<< HEAD
        id: mongoose.SchemaTypes.ObjectId,
=======
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
>>>>>>> v13-ok
        name: String,
        price: Number,
        quantity: Number
    }],
    totalPrice: Number,
    status: String
});

const Order = mongoose.model('Order', orderSchema, 'orders');
export default Order;
