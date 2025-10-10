const mongoose = require("mongoose");

//buat skema produk
const ProductSchema = new mongoose.Schema({
    //tidak perlu membuat properti id karena akan dibuat otomatis
    //dengan nama id
    name:{
        type : String,
        require : [true, "Nama produk harus diisi"],
        trim : true,

    },
    price : {
        type : Number,
        required : [true, "Harga produk harus diisi"],
        min : [1000, "Harga produk minimal 1000"]
    },
    description : {
        type : String,
        required : false,
    },
    stock : {
        type : Number,
        default: 0, //memberikan nilai bawaan/default

    },
    createAt : {
        type : Date,
        default : Date.now
    }
});

//buat model dari schema
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;