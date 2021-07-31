const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    name : {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity : {
        type:Number,
        required:true
    }
})

const cartSchema = new mongoose.Schema({
    userid : {
        required:true,
        type:String
    },
    status: {
        required:true,
        type:Boolean
    },
    products:[productSchema]
},{timestamps:true})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;