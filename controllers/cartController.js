const Cart = require('../models/CartModel')
const mongoose = require("mongoose");

exports.Addtocart = async (req, res) => {
    let userId = "12345";  //session
    let productData = req.body;
    if(!userId || !productData){
        res.status(400).send({
            "message" : "content can't be empty"
        })
    }
    try {
        let cart = await Cart.findOne({userid:userId})
        if(cart){
            //exist
            let productIndex = await cart.products.findIndex(p => {
                return p.productid == productData.productid
            });
            console.log(productIndex);
            if(productIndex > -1){
                //already exist
                let productItem = cart.products[productIndex];
                productItem.quantity = productData.quantity;
                console.log(productItem);
                cart.products[productIndex] = productItem;

            }else{
                //do not exist -> add new item
                cart.products.push({
                    productid: productData.productid,
                    name : productData.name,
                    price: productData.price,
                    quantity : productData.quantity
                })
            }
            cart = await cart.save();
            res.status(201).json(cart)
        }else{
            //create new cart
            let newCart = new Cart({
                userid:userId,
                status:false,
                products: [{
                    productid: productData.productid,
                    name : productData.name,
                    price: productData.price,
                    quantity : productData.quantity
                }]
            })
            newCart.save()
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({message: err.message || "Something went wrong"})
            })
        }
    } catch (err) {
        res.status(500).json({message: err.message || "Something went wrong"})
    }   
}

exports.removeCartItem = async (req, res) => {
    try {
        let userId = "12345"; 
        let productid = req.params.id
        if(!userId || !productid){
            res.status(400).send({
                "message" : "content can't be empty"
            })
        }
        let cart = await Cart.findOne({userid:userId})
        if(cart){
            let productIndex = await cart.products.findIndex(p => {
                return p.productid == productid
            });
            if(productIndex > -1){
                cart.products.splice(productIndex, 1);
            }
            cart.save()
            .then(data => {
                res.json(data).status(201)
            })
            .catch(err => {
                res.status(500).json({message: err.message || "Something went wrong"})
            })
        }else{
            res.status(404).send({
                "message" : "no item found"
            })
        }
    } catch (error) {
        
    }
    
}