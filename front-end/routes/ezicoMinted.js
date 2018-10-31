var express = require('express');
var router = express.Router();

const crowdsale = require('../../contracts/build/contracts/_mintedCrowdsale.json')
const token = require('../../contracts/build/contracts/_mintableToken.json')

/* GET home page. */
router.get('/', function(req, res, next) {
      let crowdsaleAbi = JSON.stringify(crowdsale.abi)
      let crowdsaleByteCode = crowdsale.bytecode
      let tokenAbi = JSON.stringify(token.abi)
      let tokenByteCode = token.bytecode
      var title = 'EZ-Contract'
      res.render('ezicoMinted', {title, crowdsaleAbi, crowdsaleByteCode, tokenAbi, tokenByteCode})
});

module.exports = router;