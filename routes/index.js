var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//google OAuth Login Route
router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account',
  })
);

//GoogleOAuth callback route
router.get(
  '/ouath2callback',passport.authenticate('google', {
    successRedirect: '/calendar',
    failureRedirect: '/auth/google'
  })
)

// OAuth Logout Route
router.get('/logout', function (req,res){
  req.logout(function(err){
    if (err){
      return next(err);
    }
    res.redirect('/calendar');
  });
});

module.exports = router;
