
const userRepository = require('../repositories/userRepository');
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
}

module.exports = new UserService();