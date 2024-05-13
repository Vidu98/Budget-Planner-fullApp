const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    transport:{
        type:Number,
        required:true
    },
    accommodations:{
        type:Number,
        required:true
    },
    tickets:{
        type:Number,
        required:true
    },
    foods:{
        type:Number,
        required:true
    },


});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


