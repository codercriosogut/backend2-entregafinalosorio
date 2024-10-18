import Order from '../dao/classes/order.dao.js'
import Business from '../dao/classes/business.dao.js'
import User from '../dao/classes/user.dao.js'

const usersService = new User()
const ordersService = new Order()
const businessService = new Business()



export const getOrders = async (req, res) => {
    const orders = await ordersService.getOrders();
    res.send({ status: "success", orders });
};

export const getOrderById = async (req, res) => {
    const { id } = req.params;
    const order = await ordersService.getOrderById(id);

    if (!order) {
        return res.status(404).send({ status: "error", error: "Order not found" });
    }

    res.send({ status: "success", order });
};


export const createOrder = async (req, res) => {
    const { userId, businessId, productIds } = req.body;

    const resultBusiness = await businessService.getBusinessById(businessId);
    const resultUser = await usersService.getUserById(userId);

    if (!resultBusiness || !resultUser) {
        return res.status(400).send({ status: "error", error: "User or Business not found" });
    }

    const actualOrders = resultBusiness.products.filter(product => productIds.includes(product.id.toString()));

    if (!actualOrders.length) {
        return res.status(400).send({ status: "error", error: "No valid products found" });
    }

    let totalPrice = actualOrders.reduce((acc, product) => acc + product.price, 0);

    let orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);

    let order = {
        number: orderNumber,
        business: businessId,
        user: userId,
        products: actualOrders.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price
        })),
        totalPrice,
        status: "pending"
    };

    let orderResult = await ordersService.createOrder(order);

    resultUser.orders.push(orderResult._id);

    await usersService.updateUser(userId, resultUser);
    res.send({ status: "success", orderResult });
};

export const resolveOrder = async (req, res) => {
    const { id } = req.params;

    const order = await ordersService.getOrderById(id);

    if (!order) {
        return res.status(404).send({ status: "error", error: "Order not found" });
    }


    order.status = "resolved";

    await ordersService.updateOrder(order._id, order);
    res.send({ status: "success", order });
};
