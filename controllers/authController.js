const express = require('express');
const router = express.Router();
const passport = require('passport');

// USERS CLICKS THIS ROUTE TO GET REDIRECTED TO
router.get('/facebook', passport.authenticate('facebook'));
router.get('/twitter', passport.authenticate('twitter'));
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// FACEBOOK CALL BACK
router.get('/facebook/callback',
    passport.authenticate('facebook', { successRedirect: '/',
                                        failureRedirect: '/auth/burger' }));

// TWITTER CALL BACK
router.get('/twitter/callback',
  passport.authenticate('twitter', { successRedirect: '/',
                                     failureRedirect: '/auth/burger' }));


// FAILURE REDIRECT
router.get('/burger', (req, res, next) => {
    res.status(401).json({
        status: false,
        message: "Please Try Again"
    });
});

// LOGOUT
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;