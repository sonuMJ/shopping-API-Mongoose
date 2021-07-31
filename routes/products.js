const express = require('express');
const productController = require('../controllers/productController')

const router = express.Router();
/**
 * @method GET
 * 
 */
router.get('/getall', productController.findAll);

/**
 * @method GET
 * @param ProductID
 * 
 */
router.get('/get/:id', productController.findOne);

/**
 * @method POST
 * @param Product as body
 * 
 */
router.post('/add', productController.save);

/**
 * @method PUT
 * @param ProductID
 * @param Content need to be update
 * 
 */
router.put('/update/:id', productController.update);

/**
 * @method DELETE
 * @param ProductID
 * 
 */
router.delete('/delete/:id', productController.delete);

module.exports = router;