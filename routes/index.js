var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Node APM' });
  console.log("ID: " + JSON.stringify(res.headers['content-encoding'] || 'identity'));
  console.log("Module Num: " + Object.keys(require('module')._cache).length);
});

module.exports = router;
