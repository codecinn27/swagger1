const express = require('express');
const router = express.Router();
const {User, Visit} = require('../model/user');
const admin = require('../controllers/admin');
const middleware = require('../middleware');

router.get('/visits', middleware.authenticateToken('admin'),admin.readVisitsData);
router.post('/registerHost', middleware.authenticateToken('admin'), admin.registerHost);

module.exports = router;