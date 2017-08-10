const IndexController = require('../controllers/indexController');

module.exports = (app) => {
    app.get('/', IndexController.index);
}