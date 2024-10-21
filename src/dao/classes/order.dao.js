import Order from '../models/order.model.js';

export default class OrderDAO {
    async getOrders() {
        return await Order.find({});
    }

    async getOrderById(id) {
        return await Order.findById(id);
    }

    async createOrder(order) {
        const newOrder = new Order(order);
        return await newOrder.save();
    }

    async updateOrder(id, order) {
        return await Order.findByIdAndUpdate(id, order, { new: true });
    }
}
