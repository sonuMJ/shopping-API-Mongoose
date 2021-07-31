/**
 * 1.add to cart -> userid, products[productid,quantity,name,price], active
 * 2.Increment -> update quantity
 * 3.Decrement ->
 * 4.Remove -> Remove from products
 * 
 * 
 */

const express = require('express');
const cartController = require('../controllers/cartController')
 
const router = express.Router();

router.post("/addtocart", cartController.Addtocart)
router.delete("/remove/:id", cartController.removeCartItem)

module.exports = router;