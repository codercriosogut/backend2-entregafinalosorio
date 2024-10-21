import User from '../models/user.model.js';

export default class UserDAO {
    async getUsers() {
        return await User.find({});
    }

    async getUserById(id) {
        return await User.findById(id);
    }

    async saveUser(user) {
        const newUser = new User(user);
        return await newUser.save();
    }

    async updateUser(id, user) {
        return await User.findByIdAndUpdate(id, user, { new: true });
    }
}
