var express = require('express');
var router = express.Router();

const plainToken = require('../../contracts/build/contracts/plainToken.json')

/* GET home page. */
router.get('/', function(req, res, next) {
      let tokenAbi = JSON.stringify(plainToken.abi)
      let tokenByteCode = plainToken.bytecode
      var title = 'EZ-Contract'
      res.render('eztoken', {title, tokenAbi, tokenByteCode})
});

module.exports = router;