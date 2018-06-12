// requirements
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user')
// user registration 
router.get('/', function(req, res, next) {
    res.render('store/user');
})
router.post('/store/user', function(req, res, next) {
    const customer = new Customer ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    // customer.save();
    res.redirect('/store/wigs')
    }) 
  
  
// render function tells node.js or express to please send back a response to the browser containting the HTML code of this index file but before sending it back replace all hoooks 

module.exports = router;
