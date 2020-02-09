var mongoose = require('mongoose');
var product = require('../schemas/product');


function post(object) {
    return product.ProductModel.create(object);
}

function update(object, id) {
    return product.ProductModel.findOneAndUpdate({_id: id}, object, {upsert: false});
}

function getAll() {
    return product.ProductModel.find({});
}

function getOne(id) {
    return product.ProductModel.find({_id: id});
}

exports.PostProduct = post;
exports.UpdateProduct = update;
exports.GetAllProducts = getAll;
exports.GetOneProduct = getOne;
