const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/user');

module.exports = function(passport){

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(null, user);
        })
        .catch(err => {
            done(err, null);
        });
    });

    // FACEBOOK LOGIN
    passport.use(new FacebookStrategy({
        clientID: process.env.FB_CLIENT_ID,
        clientSecret: process.env.FB_CLIENT_SECRET,
        callbackURL: process.env.FB_CALLBACK,
        profileFields: ['id', 'emails' , 'name', 'displayName', 'gender', 'profileUrl']
        },(accessToken, refreshToken, profile, done) => {
            process.nextTick(function() {
                User.findById(profile.id, (err, user) => {
                    if(err) return done(err);

                    if(user) {
                        return done(null, user);
                    } else {
                        let user = {
                            id: profile.id,
                            token: accessToken,
                            email: profile.emails[0].value,
                            name: profile.name.givenName + ' ' + profile.name.familyName
                        }
                    User.create(user)
                        .then(user => {
                            return done(null, user);
                        })
                    }
                });
            }
        )}
    ));

    // TWITTER LOGIN
    passport.use(new TwitterStrategy({
        consumerKey: process.env.TW_CONSUMER_KEY,
        consumerSecret: process.env.TW_CONSUMER_SECRET,
        callbackURL: process.env.TW_CALLBACK,
        includeEmail: true
    }, (token, tokenSecret, profile, done) => {
            process.nextTick(function() {
                User.findById(profile.id, (err, user) => {
                    if(err) return done(err);

                    if(user) {
                        return done(null, user);
                    } else {
                        let user = {
                            id: profile.id,
                            token: token,
                            email: profile.emails[0].value,
                            name: profile.username
                        }
                    User.create(user)
                        .then(user => {
                            return done(null, user);
                        })
                    }
                });
            }
        )}
    ));

    // GOOGLE LOGIN
    passport.use(new GoogleStrategy({
        clientID: process.env.G_CLIENT_ID,
        clientSecret: process.env.G_CLIENT_SECRET,
        callbackURL: process.env.G_CALLBACK
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log(profile);
            process.nextTick(function() {
                User.findById(profile.id, (err, user) => {
                    if(err) return cb(err);

                    if(user) {
                        return cb(null, user);
                    } else {
                        let user = {
                            id: profile.id,
                            token: accessToken,
                            email: profile.emails[0].value,
                            name: profile.name.givenName + ' ' + profile.name.familyName
                        }
                        User.create(user)
                            .then(user => {
                                return cb(null, user);
                            })
                    }
                })
            })
        }
    ));

}