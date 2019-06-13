const path = require('path');

const express = require('express');

const rootPath = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from Express!</h1>');
  res.sendFile(path.join(rootPath, 'views', 'shop.html'));
});

module.exports = router;
