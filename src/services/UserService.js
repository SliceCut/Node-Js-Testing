const jwt=require("jsonwebtoken");
const userRepository = require('../repositories/UserRepository');
const User = require('../models/user');

class UserService {

    /**
     *  
     * @param {number} id 
     */
    getSpecificUser(id) {
        return userRepository.findUser(id);
    }

    /**
     * 
     * @param {User} user 
     */
    createUser(user) {
        return userRepository.create({
            'name':  user.name,
            'email': user.email,
            'password': user.password
        });
    }

    /**
     * 
     * @param {number} id 
     */
    updateUser(id) {
        return userRepository.findUser(id).update({
            'name':  user.name,
            'email': user.email,
            'password': user.password
        });
    }

    /**
     * 
     * @param {*} user 
     */
    async createToken(user) {
        console.log("the sceret key is ", process.env.SECRET_KEY);
        const token = await jwt.sign({"id": user.id}, process.env.SECRET_KEY);
        return token;
    }
}

module.exports = new UserService();