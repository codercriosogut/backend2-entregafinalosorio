import User from '../dao_dto/classes/user.dao.js';
import { UserDTO } from '../dao_dto/classes/user.dto.js';

const userService = new User();

export const getUsers = async (req, res) => {
    try {
        let users = await userService.getUsers();
        const usersDTO = users.map(user => new UserDTO(user));
        res.send({ status: "success", users: usersDTO });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: "error", message: "Error al obtener los usuarios" });
    }
};


export const getUserById = async (req, res) => {
    const { uid } = req.params;
    let user = await userService.getUserById(uid);
    if (!user) return res.status(404).send({ status: "error", error: "User not found" });
    const userDTO = new UserDTO(user);
    res.send({ status: "success", user: userDTO });
};

export const createUser = async (req, res) => {
    const user = req.body;
    let result = await userService.saveUser(user);
    if (!result) return res.status(500).send({ status: "error", error: "Something went wrong" });
    const userDTO = new UserDTO(result);
    res.send({ status: "success", user: userDTO });
};
