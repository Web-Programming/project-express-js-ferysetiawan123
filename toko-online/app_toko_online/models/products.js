const mongoose = require("mongoose");

// Buat skema produk
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nama produk harus diisi"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Harga produk harus diisi"],
        min: [1000, "Harga produk minimal 1000"],
    },
    description: {
        type: String,
        required: false,
    },
    stock: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Buat model dari schema
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
