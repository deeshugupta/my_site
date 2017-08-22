var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/projects', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'public', 'projects.json'));
});

module.exports = router;
