import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    products: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true, default: 1 }
    }]
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String, // admin o user
    cart: cartSchema
});

// Cambia a export default
export default mongoose.model('User', userSchema);
