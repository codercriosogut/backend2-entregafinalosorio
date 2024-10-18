import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId, // Usar 'Schema.Types' en lugar de 'SchemaTypes'
            ref: "Order" // Cambiar de "Orders" a "Order"
        }
    ]
});

const userModel = mongoose.model(collection, schema);

export default userModel;
