

const usercontroller = require('../controllers/userController');
const auth = require('../middlewares/auth');

module.exports  = (app)=> {
    app.get('/user/list',auth, usercontroller.index);
    app.post('/user/create',usercontroller.store);

    return app;
};
