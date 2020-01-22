var mongoose = require('mongoose');
var product = require('../../schemas/product');



function post(object) {
    product.ProductModel.create(object);
}

exports.ProductPostService = post;