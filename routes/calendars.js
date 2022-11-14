const express = require('express');
const router = express.Router();
const calendarsCtrl = require('../controllers/calendars');
const isLoggedIn = require('../config/auth');

router.get('/', calendarsCtrl.index)
router.get('/new',calendarsCtrl.new)
router.post('/', calendarsCtrl.create)
router.get('/:id', calendarsCtrl.show)

module.exports = router;