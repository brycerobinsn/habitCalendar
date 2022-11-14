const express = require('express');
const router = express.Router();
const calendarsCtrl = require('../controllers/calendars');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, calendarsCtrl.index)
router.get('/new', isLoggedIn, calendarsCtrl.new)
router.post('/', isLoggedIn, calendarsCtrl.create)
router.get('/:id', isLoggedIn, calendarsCtrl.show)

module.exports = router;