const express = require('express');
const router = express.Router();
const logsCtrl = require('../controllers/logs');

router.get('/:service', logsCtrl.getLogs);

module.exports = router;