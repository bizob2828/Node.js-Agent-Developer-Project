var express = require('express');
var router = express.Router();
var dt = require('../apm.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  dt.getData(req);
  res.render('index', { title: 'Node APM' });

  // console.log("ID: " + req.ip + ' ' + req.headers['user-agent'] + '\n' + "Module Num: " + Object.keys(require('module')._cache).length);

});

module.exports = router;
