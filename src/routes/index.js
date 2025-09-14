const express = require('express');
const router = express.Router();
const testController = require('../modules/test/test.controller');

router.get('/test', testController.getTest);
router.post('/test', testController.addTest);
router.get('/', (req, res) => {
  res.send('RSUD Blora API is ready');
});
module.exports = router;
