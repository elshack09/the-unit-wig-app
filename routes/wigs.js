const express = require('express');
const router = express.Router();
const Wig = require('../models/wig')

// show, update, delete wigs
// Get Request
router.get('/', function (req, res, next) {
    Wig.find(function(err,docs){
    let wigArray = [];
    let wigProducts = 3;
    for (let w = 0; w < docs.length; w += wigProducts){
        wigArray.push(docs.slice(w, w + wigProducts));
    }
    res.render('store/wigs', { title: 'Wig List', wigs: wigArray});
});
});
router.post('/', function (req, res, next) {
    res.render('store/wigs')
});
router.get('/:wigId', function (req, res, next) {

})

module.exports = router;