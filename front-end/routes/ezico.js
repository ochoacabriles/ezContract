var express = require('express');
var router = express.Router();

const basicCrowdsale = require('../../contracts/build/contracts/_crowdsale.json')
const plainToken = require('../../contracts/build/contracts/_standardToken.json')

/* GET home page. */
router.get('/', function(req, res, next) {
      let crowdsaleAbi = JSON.stringify(basicCrowdsale.abi)
      let crowdsaleByteCode = basicCrowdsale.bytecode
      let tokenAbi = JSON.stringify(plainToken.abi)
      let tokenByteCode = plainToken.bytecode
      var title = 'EZ-Contract'
      res.render('ezico', {title, crowdsaleAbi, crowdsaleByteCode, tokenAbi, tokenByteCode})
});

module.exports = router;