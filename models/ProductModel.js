const mongoose = require('mongoose')

/**
 * => name, price, img_url, category
 * 
 * 
 */
const productSchema = new mongoose.Schema({
    name : {
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    },
    img_url:{
        required:true,
        type:String
    },
    category:{
        required:true,
        type:String
    }
},{timestamps:true})

const Product = mongoose.model("Product", productSchema)

module.exports = Product;