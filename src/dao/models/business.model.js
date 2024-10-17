//cambios

// src/dao/models/business.model.js
import mongoose from "mongoose";

const collection = "Business";

const schema = new mongoose.Schema({
    name: String,
    products: [{
        id: mongoose.SchemaTypes.ObjectId, // Agregamos el campo id
        name: String,
        price: Number
    }]
});

const businessModel = mongoose.model(collection, schema);

export default businessModel;
