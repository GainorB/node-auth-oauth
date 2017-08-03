const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Social Logins',
        user: req.user
    });
});

// GOOGLE CALL BACK
// GOOGLE IS EXTRA SPECIAL AND NEEDS ITS CALL BACK ON THE ROOT URL
router.get('/google/oauth2callback',
  passport.authenticate('google', { successRedirect: '/',
                                    failureRedirect: '/auth/burger' }));

module.exports = router;