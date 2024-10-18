import usersModel from "../models/user.model.js";

export default class User {
    getUsers = async () => {
        try {
            let users = await usersModel.find();
            return users;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    getUserById = async (id) => {
        try {
            // Poblamos las órdenes del usuario y los productos dentro de las órdenes
            let user = await usersModel.findOne({ _id: id })
                .populate({
                    path: 'orders',  // Poblar las órdenes
                    populate: {
                        path: 'products.id',  // Poblar los productos dentro de las órdenes
                        model: 'Product'     // Asegúrate de que "Product" es el nombre correcto del modelo
                    }
                });
            return user;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    saveUser = async (user) => {
        try {
            let result = await usersModel.create(user);
            return result;
        } catch (error) {
            console.log(error);
        }
    };

    updateUser = async (id, user) => {
        try {
            let result = await usersModel.updateOne({ _id: id }, { $set: user });
            return result;
        } catch (error) {
            console.log(error);
        }
    };
}
