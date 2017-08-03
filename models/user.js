const db = require('../config/config');

// EMPTY USER OBJECT
// USED FOR EXPORTING THE FUNCTIONS BELOW
const User = {};

// FIND USER BY USERNAME
User.findByUserName = userName => {
    return db.oneOrNone('SELECT * FROM users WHERE username = $1', userName);
}

// FIND USER BY ID
User.findById = (id, callback) => {
    return db.oneOrNone('SELECT * FROM users WHERE id = $1', id).then(user => { callback(null, user); });
}

// CREATE A USER
User.create = user => {
    return db.one(
    `
        INSERT INTO users
        (id, token, email, name)
        VALUES ($1, $2, $3, $4) RETURNING *
    `
    ,[user.id, user.token, user.email, user.name])
}

module.exports = User;