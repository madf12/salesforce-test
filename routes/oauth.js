const express = require('express');
const router = express.Router();
const {oauth} = require('../sf');

router.get('/', async (req, res, next) => {
  let result = await oauth();
  res.redirect(result);
});

module.exports = router;
