module.exports = {

    index(req, res, next){
        res.render('index', {
            title: 'Social Logins',
            user: req.user
        });
    },

}