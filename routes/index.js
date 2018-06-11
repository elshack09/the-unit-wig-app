const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('store/index', { title: 'The Unit' });
});
// render function tells node.js or express to please send back a response to the browser containting the HTML code of this index file but before sending it back replace all hoooks 

router.get('/user/account', function(req,res,next){
  res.render('user/account');
});
router.post('/user/account', function(req,res,next){
  res.render()
}

module.exports = router;
