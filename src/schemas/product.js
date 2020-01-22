var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

var ProductModel = new mongoose.model('product', productSchema)

exports.ProductModel = ProductModel;