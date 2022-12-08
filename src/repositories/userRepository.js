const User = require('../models/user');

class UserRepository {

    /**
     * 
     * @param {number} id 
     */
    async findUser(id) {
        return await User.findOne(id);
    }

    async paginate(limit = 10, sortColumn = "id", sortBy = "desc") {
        return await User.findAndCountAll({
            limit: limit,
            order: [
                [sortColumn, sortBy]
            ]
        });
    }

    async create(data) {
        const user = await User.create(data);

        return user.dataValues;
    }
}

module.exports = new UserRepository();