var express = require('express');
var router = express.Router();

//var contractInstance = require('../src/setup')
const basicCrowdsale = require('../../contracts/build/contracts/basicCrowdsale.json')
const plainToken = require('../../contracts/build/contracts/plainToken.json')

/* GET home page. */
router.get('/', function(req, res, next) {
      let crowdsaleAbi = JSON.stringify(basicCrowdsale.abi)
      let crowdsaleByteCode = basicCrowdsale.bytecode
      let tokenAbi = JSON.stringify(plainToken.abi)
      let tokenByteCode = plainToken.bytecode
      var title = 'TicketsToken'
      var maxPerSale = 1
      var maxTokenTypes = 1
      res.render('index', {title, crowdsaleAbi, crowdsaleByteCode, tokenAbi, tokenByteCode, maxPerSale, maxTokenTypes})
});

module.exports = router;