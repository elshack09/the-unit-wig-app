const express = require('express');
const router = express.Router();

// show, update, delete products
router.get('/', function (req, res, next) {
    res.render('/products')
});
router.post('/', function (req, res, next) {
    res.render('/products')
});
router.get('/:productId', function (req, res, next) {
    // const id = req.params.productID
    //     if( if === 'String'){{
    //         id: id
    //       res.render('/:productId')   
    //     }}
   
})

module.exports = router;