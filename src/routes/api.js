

const AuthController = require('../controllers/AuthController');
const Usercontroller = require('../controllers/UserController');
const auth = require('../middlewares/auth');

module.exports  = (app)=> {
    app.post('/user/login', AuthController.login);
    app.get('/user/list',auth, Usercontroller.index);
    app.post('/user/create',Usercontroller.store);

    return app;
};
