const express = require('express');
const router = express.Router();
const HealthController = require('../controllers/healthy.controller');

router.get('/healthy', HealthController.getHealthStatus);

module.exports = router;