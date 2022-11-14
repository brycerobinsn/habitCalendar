const express = require('express');
const router = express.Router();
const calendarsCtrl = require('../controllers/calendars');
const isLoggedIn = require('../config/auth');

router.get('/', calendarsCtrl.index)

module.exports = router;