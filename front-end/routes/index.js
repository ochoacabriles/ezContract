var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
      var title = 'EZ-Contract'
      res.render('index', {title})
});

module.exports = router;