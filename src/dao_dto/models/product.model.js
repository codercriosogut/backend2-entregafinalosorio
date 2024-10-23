const mongoose = require('mongoose');

// Esquema de producto
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    }
});

// Exportar el modelo de producto
module.exports = mongoose.model('Product', productSchema);
