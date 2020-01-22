var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderStateSchema = new Schema({
   name: {
       type: String, 
       required: true, 
       enum: [
           'Not Confirmed',
           'Confirmed',
           'Canceled',
           'Completed',
       ]
   }
})

export {productSchema};


var OrderStateModel = new mongoose.model('orderState', orderStateSchema)

exports.OrderStateModel = OrderStateModel;