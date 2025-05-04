const express = require('express');
const router = express.Router();
const { universities, companies, positions } = require('../data/staticData');

router.get('/', (req, res) => {
  res.json({ universities, companies, positions });
});

module.exports = router; 