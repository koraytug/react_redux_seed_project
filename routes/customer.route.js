const express = require('express');
customerList = require('../controllers/customer.controller');
router = express.Router();

router.get('/', customerList.customerList);

module.exports = router;
