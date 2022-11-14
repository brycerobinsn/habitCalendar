const express = require('express');
const router = express.Router();
const habitsCtrl = require('../controllers/habits');
const isLoggedIn = require('../config/auth');

router.get('/', habitsCtrl.index);
router.get('/new', isLoggedIn, habitsCtrl.new);
router.get('/:id', habitsCtrl.show);
router.post('/', isLoggedIn, habitsCtrl.create);
router.delete('/:id', habitsCtrl.delete)
router.get('/:id/edit', habitsCtrl.edit)
router.put('/:id', habitsCtrl.update)

module.exports = router;
