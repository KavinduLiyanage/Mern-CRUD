const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
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
