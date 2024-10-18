import User from '../dao/classes/user.dao.js';

const usersService = new User();

export const getUsers = async (req, res) => {
    let result = await usersService.getUsers();
    res.send({ status: "success", result });
};

export const getUserById = async (req, res) => {
    const { uid } = req.params;

    const user = await usersService.getUserById(uid);

    if (!user) {
        return res.status(404).send({ status: "error", error: "User not found" });
    }

    res.send({ status: "success", user });
};


export const saveUser = async (req, res) => {
    const user = req.body;
    let result = await usersService.saveUser(user);
    res.send({ status: "success", result });
};
