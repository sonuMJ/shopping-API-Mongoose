const Product = require('../models/ProductModel')

exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.json(products)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}

exports.findOne = (req, res) => {
    let id = req.params.id;
    if(!id){
        res.status(400).send({
            "message" : "productid required"
        })
    }
    Product.findById(id)
    .then(product => {
        if(!product){
            res.status(404).json({message:"Item not found with "+id})
        }
        res.json(product)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}

exports.save = (req, res) => {
    if(!req.body){
        res.status(400).send({
            "message" : "content can't be empty"
        })
    }
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        img_url:req.body.img_url,
        category:req.body.category
    })
    product.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}

exports.update = (req, res) => {
    let id = req.params.id;
    let data = req.body;
    if(!id || !req.body){
        res.status(400).send({
            "message" : "content can't be empty"
        })
    }
    Product.findByIdAndUpdate(id,data,{new:true})
    .then(data => {
        if(!data){
            res.status(404).json({message:"Item not found with "+id})
        }
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}

exports.delete = (req, res) => {
    let id = req.params.id;
    if(!id){
        res.status(400).send({
            "message" : "product id required"
        })
    }
    Product.findByIdAndRemove(id)
    .then(data => {
        if(!data){
            res.status(404).json({message:"Item not found with "+id})
        }
        res.json(data)
    })
    .catch(err => {
        res.status(500).json({message: err.message || "Something went wrong!"})
    })
}