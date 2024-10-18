import mongoose from "mongoose";

const collection = "Users";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId, // Usar 'Schema.Types' en lugar de 'SchemaTypes'
            ref: "Order" // Asegúrate que 'Order' es correcto y que está definido

        }
    ]
});

const userModel = mongoose.model(collection, schema);

export default userModel;
