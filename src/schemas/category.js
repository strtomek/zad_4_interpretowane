var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
})

var CategoryModel = new mongoose.model('category', categorySchema)

exports.CategoryModel = CategoryModel;