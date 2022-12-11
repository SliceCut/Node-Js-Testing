const userRepository = require('../repositories/UserRepository');
const registerValidationScheme = require('../validations/register')
const userService = require('../services/UserService');
const {sendError, successResponse} = require("../apiResponse")

class UserController {

    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    async index(req, res){
        const users = await userRepository.paginate();
        res.send(users);
    }

    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     */
    async store(req, res) {
        try {
            const value = registerValidationScheme.validate(req.body,{abortEarly: false});

            if(value.error) {
                sendError(res, value.error, 422);
            }

            const user = await userService.createUser(value);
            console.log("the user is ", user);
            successResponse(res, "User created successfully", user);
        } catch(error) {
            console.log("the error is", error);
            sendError(res, error.stack, 500);
        }
        
    }
}

module.exports = new UserController();