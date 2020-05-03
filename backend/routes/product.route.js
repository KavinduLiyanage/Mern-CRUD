const express = require('express');
const productRoutes = express.Router();

let Product = require('../models/product.model');

//add data
productRoutes.route('/add').post(function (req,res) {
    let product = new Product(req.body);
    product.save()
        .then(product => {
            res.status(200).json({'product': 'product is added successfully'})
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

//get data
productRoutes.route('/').get(function (req,res) {
    Product.find(function (err, product) {
        if(err)
            console.log(err);
        else
            res.json(product);
    });
});

//edit data
productRoutes.route('/edit/:id').get(function (req,res) {
    let id = req.params.id;
    Product.findById(id, function (err, product) {
        res.json(product);
    });
});

//update
productRoutes.route('/update/:id').post(function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (!product)
            res.status(404).send("data is not found");
        else {
            product.productName = req.body.productName;
            product.productDes = req.body.productDes;
            product.productPrice = req.body.productPrice;

            product.save().then(product => {
                res.json('Update Complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update database");
                });
        }
    });
});

//delete data
productRoutes.route('/delete/:id').get(function (req,res) {
    Product.findByIdAndRemove({id: req.params.id}, function (err, product) {
        if (err)res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoutes;
