import mongoose from "mongoose";

const collection = "Orders"

const schema = new mongoose.Schema({
    number: Number,
    business: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Business"
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users"
    },
    products: [{
        //add
        id: mongoose.SchemaTypes.ObjectId,
        name: String,
        price: Number
    }],
    totalPrice: Number,
    status: { type: String }
})


const orderModel = mongoose.model(collection, schema)

export default orderModel