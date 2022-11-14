const express = require('express');
const router = express.Router();
const habitsCtrl = require('../controllers/habits');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, habitsCtrl.index);
router.get('/new', isLoggedIn, habitsCtrl.new);
router.get('/:id', isLoggedIn, habitsCtrl.show);
router.post('/', isLoggedIn, habitsCtrl.create);
router.delete('/:id', isLoggedIn, habitsCtrl.delete)
router.get('/:id/edit', isLoggedIn, habitsCtrl.edit)
router.put('/:id', isLoggedIn, habitsCtrl.update)

module.exports = router;
