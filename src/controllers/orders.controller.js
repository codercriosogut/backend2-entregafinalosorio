import Order from '../dao/classes/order.dao.js';
import Business from '../dao/classes/business.dao.js';
import User from '../dao/classes/user.dao.js';

const usersService = new User();
const ordersService = new Order();
const businessService = new Business();

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

    // Validaciones
    if (!Array.isArray(productIds) || productIds.length === 0) {
        return res.status(400).send({ status: "error", error: "Product IDs must be a non-empty array" });
    }

    const resultBusiness = await businessService.getBusinessById(businessId);
    const resultUser = await usersService.getUserById(userId);

    if (!resultBusiness) {
        return res.status(404).send({ status: "error", error: "Business not found" });
    }
    if (!resultUser) {
        return res.status(404).send({ status: "error", error: "User not found" });
    }
    

    const actualOrders = resultBusiness.products.filter(product => productIds.includes(product.id.toString()));

    if (!actualOrders.length) {
        return res.status(400).send({ status: "error", error: "No valid products found" });
    }

    let orderProducts = [];
    let totalPrice = 0;

    actualOrders.forEach(product => {
        let existingProduct = orderProducts.find(p => p.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            orderProducts.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }
        totalPrice += product.price;
    });

    let orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);

    let order = {
        number: orderNumber,
        business: businessId,
        user: userId,
        products: orderProducts,
        totalPrice,
        status: "pending"
    };

    try {
        let orderResult = await ordersService.createOrder(order);
        resultUser.orders.push(orderResult._id);

        if (!await usersService.updateUser(userId, resultUser)) {
            return res.status(500).send({ status: "error", error: "Failed to update user" });
        }

        res.send({ status: "success", order: orderResult });
    } catch (error) {
        res.status(500).send({ status: "error", error: "Failed to create order" });
    }
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
