// routes/host.js
const express = require('express');
const router = express.Router();
const hostController = require('../controllers/host');
const middleware = require('../middleware');

// Example routes
router.get('/:hostId', middleware.authenticateToken('host'), hostController.getWelcomeMessage);
router.get('/:hostId/visitors', middleware.authenticateToken('host'), hostController.getVisitors);

module.exports = router;
