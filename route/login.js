// login.js (route)
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');

// POST route for user login
router.post('/', loginController.login);

module.exports = router;
