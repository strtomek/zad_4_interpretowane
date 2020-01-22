var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    orderDate: {
        type: Date,
        required: false,
    },
    orderState: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    orderList: {
        products: [{
            id: String,
            quantity: Number,
        }],
        required: false,
    }

})

var OrderModel = new mongoose.model('order', orderSchema)

exports.OrderModel = OrderModel;