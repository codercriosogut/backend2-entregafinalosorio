import OrderDAO from '../dao_dto/classes/order.dao.js';

const orderDAO = new OrderDAO(); // Instancia del DAO

export default class OrderRepository {
    async getOrders() {
        return await orderDAO.getOrders();
    }

    async getOrderById(id) {
        return await orderDAO.getOrderById(id);
    }

    async createOrder(order) {
        return await orderDAO.createOrder(order);
    }

    async updateOrder(id, order) {
        return await orderDAO.updateOrder(id, order);
    }
}
