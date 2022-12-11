const { sendError } = require('../apiResponse');
const UserRepository = require('../repositories/UserRepository');
const UserService = require('../services/UserService');
const loginValidationSchema = require('../validations/login');

class AuthController {

    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    async login(req, res) {
        try{
            const validate = loginValidationSchema.validate(req.body,{abortEarly: false});
            if(validate.error) {
                return sendError(res, validate.error, 422);
            }

            const user = await UserRepository.getUserByEmailAndPassword(req.body.email, req.body.password);

            console.log("the user is ", user);

            if(!user) {
                return sendError(res, "Login credential is invalid", 401);
            }

            const token = await UserService.createToken(user);

            return res.status(200).json({
                "message": "Login Successfull",
                "token": token
            });
        
        } catch(error) {
            console.log("the error is ", error);
            return sendError(res, error.trace, 500);
        }
    }
}

module.exports = new AuthController()