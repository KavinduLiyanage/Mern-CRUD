const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    productName : {
        type : String
    },
    productDes : {
        type : String
    },
    productPrice : {
        type : Number
    }
}, {
    collection: 'product'
});

module.exports = mongoose.model('Product',Product);
