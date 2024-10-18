import mongoose from "mongoose";

const collection = "Orders"

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



const orderModel = mongoose.model(collection, orderSchema)

export default orderModel