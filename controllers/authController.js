module.exports = {

    // USER PROVIDES INVALID LOGIN DETAILS
    invalidLogin(req, res, next){
        res.status(401).json({
            status: false,
            message: "Please Try Again"
        });
    },

    // LOGOUT
    logOut(req, res, next){
        req.flash('info', 'You are now logged out');
        req.logout();
        res.redirect('/');
    }
}