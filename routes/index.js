var express = require('express');
var router = express.Router();
var dt = require('../apm.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  dt.getData(req);
  res.render('index', { title: 'Node APM' });
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

});

module.exports = router;
