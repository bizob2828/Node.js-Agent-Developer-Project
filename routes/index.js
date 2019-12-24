var express = require('express');
var router = express.Router();
var data = require('../apm/apm.js');

/* GET home page. */
/* Show data from apm.js if data is true*/
router.get('/', function(req, res, next) {
  if(DATA){data.getData(req);}
  if(DATA){data.getMem();}
  res.render('index', { title: 'Node APM' });
});

module.exports = router;
